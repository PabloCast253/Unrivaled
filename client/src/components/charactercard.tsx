
interface CharacterCardProps {
  name: string;
  role: string;
  image: string;
}

const CharacterCard = ({ name, role, image }: CharacterCardProps) => {
  return (
    <div className="character-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
};

export default CharacterCard;