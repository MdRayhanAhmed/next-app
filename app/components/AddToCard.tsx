"use client";
import React from "react";

const AddToCard = () => {
  return (
    <div>
      <button
        className="btn btn-primary rounded-full"
        onClick={() => console.log("Clicked")}
      >
        Add to Card
      </button>
      <button
        className="btn rounded-b-box"
        onClick={() => console.log("Clicked")}
      >
        Add to Card
      </button>
      <button className="btn btn-accent btn-outline">Three</button>
    </div>
  );
};

export default AddToCard;
