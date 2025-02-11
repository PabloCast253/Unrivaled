import { useParams } from "react-router-dom";
import HelaImage from "/images/Hela.png";
import "./characterPage.css";
import YouTubePlayer from "../components/YouTubePlayer";
import Forum from "../components/forum";

const characterData: Record<string, { name: string; description: string; image: string }> = {
  Hela: {
    name: "Hela",
    description: "Hela, the Asgardian Goddess of Death, is a powerful ruler with control over the dead.",
    image: HelaImage,
  },
};

const CharacterPage = () => {
  const { heroName } = useParams(); // Get hero name from the URL
  const hero = characterData[heroName || ""];

  if (!hero) {
    return <h2>Character Not Found</h2>;
  }

  return (
    <div className="character-container">
      <h1>{hero.name}</h1>
      <img src={hero.image} alt={hero.name} className="character-image" />
      <p>{hero.description}</p>
      {/* ✅ Show the Forum component */}
      <Forum characterName={heroName || ""} />
      <div>
                     <YouTubePlayer videoId="bbc3rUZxz1c" /> {/* Replace with your video ID */}
                </div>
    </div>
  );
};

export default CharacterPage;