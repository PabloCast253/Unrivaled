import { useParams } from "react-router-dom";
import HelaImage from "/images/Hela.png";
import "./characterPage.css";

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
    </div>
  );
};

export default CharacterPage;