import React, { createContext, useState, useEffect } from "react";


interface Character {
  id: number;
  name: string;
  work: { occupation: string };
  connections: { relatives: string };
  biography: {
    alignment: string;
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
      const response = await fetch(`http://localhost:3001/api/character/${id}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch character data");
      }

      const data: Character = await response.json();
      setCharacter(data);
      console.log('Here is data:', data);
    } catch (err: any) {
      setError(err.message || "Error fetching character data.");
    }
  };

  useEffect(() => {
    fetchCharacter(321);
  }, []);

  return (
    <DataContext.Provider value={{ character, error }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;