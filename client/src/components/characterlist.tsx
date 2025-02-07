import CharacterCard from '../components/charactercard';
import { useState, useEffect } from 'react';

const Characters = () => {
  interface Character {
    id: number;
    name: string;
    role: string;
    image: string;
  }

  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch('/api/characters') // Assuming backend API
      .then(response => response.json())
      .then(data => setCharacters(data));
  }, []);

  return (
    <div className="character-list">
      {characters.map(char => (
        <CharacterCard key={char.id} name={char.name} role={char.role} image={char.image} />
      ))}
    </div>
  );
};

export default Characters;