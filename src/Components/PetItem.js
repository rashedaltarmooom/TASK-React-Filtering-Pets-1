import React, { useState } from "react";

function PetItem({ pet, handleadopt }) {
  const [img, setimg] = useState(pet.image);
  const pic = () => setimg(pet.image2);
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={img} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={pic}>
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => handleadopt(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;