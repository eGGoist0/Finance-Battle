import { useState, useRef, useEffect } from "react";

import "../../css/Profile.css";

function Avatar_picker() {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedImage = localStorage.getItem("avatar");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        localStorage.setItem("avatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img id="avatar"
        src={image || "/images/avatar.png"}
        onDoubleClick={handleImageClick} 
        style={{
          width: "15vw",
          height: "15vw",
          borderRadius: "20px",
          objectFit: "cover",
          cursor: "pointer",
        }}
        alt="Avatar"
      />
      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      />
    </div>
  );
}

export default Avatar_picker;
