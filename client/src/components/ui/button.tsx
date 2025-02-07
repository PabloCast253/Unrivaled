import React from "react";
import HelaImage from "/images/Hela.png"; //import the hero image
import "./Button.css"; // Import styles for the button 
import { useNavigate } from "react-router-dom";
interface SuperButtonProps {
  heroName: string;
}

// Map hero names to images
const imageMap: Record<string, string> = {
  Hela: HelaImage,
};

const SuperButton: React.FC<SuperButtonProps> = ({ heroName }) => {
  const navigate = useNavigate(); // React Router Hook for navigation
  const imageSrc = imageMap[heroName] || imageMap[heroName.toLowerCase()];

  console.log("Looking for image:", heroName, "Resolved path:", imageSrc);

  return (
    <button
      className="super-button"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "200px",
        height: "200px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/character/${heroName}`)} // Navigate to the character page on click
    >
      {/* Empty content since the image is the button */}
    </button>
  );
};

export default SuperButton;