import { Link } from "react-router-dom";

const characters = ["Hela", "Iron Man", "Black Panther"];

const CharacterList = () => {
  return (
    <div className="container px-4">
      <h2>Choose a Character</h2>
      <ul>
        {characters.map((hero) => (
          <li key={hero}>
            <Link to={`/character/${hero}`}>{hero}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
