import React, { useState } from "react";

const AddCar = () => {
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  function save() {
    let newCar = {
      model: "",
      image: "",
      id: Date.now(),
    };
  }
  console.log(model, "cosole model");
  console.log(model, "console image");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <input
        placeholder="Model"
        type="text"
        value={model}
        onChange={e => setModel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={e => setModel(e.target.value)}
      />
    </div>
  );
};

export default AddCar;
