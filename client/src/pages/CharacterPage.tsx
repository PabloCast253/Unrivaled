import { useParams } from "react-router-dom";
import HelaImage from "/images/Hela.png";
import "./characterPage.css";
import YouTubePlayer from "../components/YouTubePlayer";
import Forum from "../components/forum";
import { DataContext } from "../data/heroapi";
import { useContext } from "react";


const characterData: Record<string, { name: string; description: string; image: string }> = {
  Hela: {
    name: "Hela",
    description: "",
    image: HelaImage,
  },
};

const CharacterPage = () => {
  const { heroName } = useParams(); // Get hero name from the URL
  const character = useContext(DataContext);
  console.log('Here is data from character page:', character);
  const hero = characterData[heroName || ""];

  if (!hero) {
    return <h2>Character Not Found</h2>;
  }
  

  return (
    <div className="character-container">
      <h1>{hero.name}</h1>
      <p>
        From <a href="https://superheroapi.com/index.html" target="_blank" rel="noopener noreferrer">SuperHeroAPI</a>:
      </p>
      <p>{character?.character?.work.occupation}</p>
      <p>Alias: {character?.character?.biography.aliases}</p>
      <p>Connections: {character?.character?.connections.relatives}</p>
      <img src={hero.image} alt={hero.name} className="character-image" />
      <p>{hero.description}</p>
      {/* Show the Forum component */}
      <Forum characterName={heroName || ""} />
      <div>
                     <YouTubePlayer videoId="bbc3rUZxz1c" /> {/* Replace with your video ID */}
                </div>
    </div>
  );
};


export default CharacterPage;