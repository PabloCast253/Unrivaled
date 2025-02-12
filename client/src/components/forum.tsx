import { useEffect, useState } from "react";

interface Post {
  id: number;
  content: string;
  createdAt: string;
  User: {
    username: string; //  Display username instead of user_id
  };
}

const Forum = ({ characterName }: { characterName: string }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  //  Fetch posts when component loads
  useEffect(() => {
    fetch(`http://localhost:3001/api/posts/${characterName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(" Seeded posts fetched:", data); // Debugging
        setPosts(data);
      })
      .catch((error) => console.error("❌ Error fetching posts:", error));
  }, [characterName]);

  //  Function to submit a new post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      alert("You must be logged in to post.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          character_name: characterName,
          content: newPost,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to add post.");
      }

      const newPostData = await res.json();

      //  Refresh posts after submitting a new post
      fetch(`http://localhost:3001/api/posts/${characterName}`)
        .then((res) => res.json())
        .then((updatedPosts) => setPosts(updatedPosts));

      setNewPost(""); //  Clear input field
    } catch (error) {
      console.error("❌ Error posting:", error);
      alert("Failed to submit post.");
    }
  };

  return (
    <div className="forum">
      <h2>Forum for {characterName}</h2>

      {/*  Always show forum posts */}
      <ul>
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to post!</p>
        ) : (
          posts.map((post) => (
            <li key={post.id}>
              <strong>{post.User.username}:</strong> {post.content}{" "}
              <small>({new Date(post.createdAt).toLocaleString()})</small>
            </li>
          ))
        )}
      </ul>

      {/*  Only show post form if user is logged in */}
      {token ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write your thoughts..."
          />
          <button type="submit">Post</button>
        </form>
      ) : (
        <p>🔒 You must <a href="/login">log in</a> to post in the forum.</p>
      )}
    </div>
  );
};

export default Forum;
