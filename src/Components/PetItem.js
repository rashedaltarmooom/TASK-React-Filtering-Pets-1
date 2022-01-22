import { useState } from "react";
export default function PetItem({ pet, adoptPet }) {
  const [petImage, setPetImage] = useState(pet.image);

  const changePetImage = () => {
    setPetImage(pet.image2);
  };

  return (
    <div class="col-lg-4 col-md-8 col-sm-10">
      <div class="single-doctor">
        <img className="image ratio pet" alt={pet.name} src={petImage} />
        <div class="content">
          <h3>{pet.name}</h3>
          <button
            type="button"
            class="btn btn-info m-2"
            onClick={changePetImage}
          >
            Pet
          </button>
          <button
            type="button"
            class="btn btn-info  m-2"
            onClick={() => adoptPet(pet.id)}
          >
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}
