// import CharacterCard from '../components/CharacterCard';

// const Characters = () => {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     fetch('/api/characters') // Assuming backend API
//       .then(response => response.json())
//       .then(data => setCharacters(data));
//   }, []);

//   return (
//     <div className="character-list">
//       {characters.map(char => (
//         <CharacterCard key={char.id} name={char.name} role={char.role} image={char.image} />
//       ))}
//     </div>
//   );
// };

// export default Characters;