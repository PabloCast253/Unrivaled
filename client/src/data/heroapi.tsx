import React, { createContext, useState, useEffect } from "react";


interface Character {
  id: number;
  name: string;
  biography: {
    placeOfBirth: string;
    aliases: string[];
  };
}

interface DataContextType {
    character: Character | null;
    error : string | null;
}

interface DataProviderProps {
    children: React.ReactNode;
}

export const DataContext = createContext < DataContextType | undefined> (undefined);
export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacter = async (id: number) => {
    try {
      // Backend endpoint for fetching character data
      const response = await fetch(`http://localhost:5000/api/character/${id}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch character data");
      }

      const data: Character = await response.json();
      setCharacter(data);
    } catch (err: any) {
      setError(err.message || "Error fetching character data.");
    }
  };

  useEffect(() => {
    fetchCharacter(1); // Example: Fetch character with ID 1
  }, []);

  return (
    <DataContext.Provider value={{ character, error }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;

// const App: React.FC = () => {
//   const [character, setCharacter] = useState<Character | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const fetchCharacter = async (id: number) => {
//     try {
//       // Backend endpoint for fetching character data
//       const response = await fetch(`http://localhost:5000/api/character/${id}`);
      
//       if (!response.ok) {
//         throw new Error("Failed to fetch character data");
//       }

//       const data: Character = await response.json();
//       setCharacter(data);
//     } catch (err: any) {
//       setError(err.message || "Error fetching character data.");
//     }
//   };

//   useEffect(() => {
//     fetchCharacter(1); // Example: Fetch character with ID 1
//   }, []);

//   return (
//     <div>
//       {error && <p style={{ color: "red" }}>{err}</p>}
//       {character ? (
//         <div>
//           <h1>{character.name}</h1>
//           <p>Full Name: {character.biography.fullName}</p>
//           <p>Place of Birth: {character.biography.placeOfBirth}</p>
//           <p>Aliases: {character.biography.aliases.join(", ")}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
  
