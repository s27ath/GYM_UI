import React from "react";
import weightsImage from "../images/weights.jpg"; // add image inside src/images/

function HomeImage() {
  return (
    <div className="home-image-container">
      <img
        src={weightsImage}
        alt="Gym Weights"
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />
    </div>
  );
}

export default HomeImage;