// import React, { useState } from "react";

// const SearchBar = ({ onSearch, placeholder }) => {
//   const [query, setQuery] = useState("");

//   const handleChange = (event) => {
//     const searchTerm = event.target.value;
//     setQuery(searchTerm);
//     onSearch(searchTerm); // Calls the parent component's search function
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder={placeholder || "Search..."}
//       />
//     </div>
//   );
// };

// export default SearchBar;