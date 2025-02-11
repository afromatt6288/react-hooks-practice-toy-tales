import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteToy, onLikeToy}) {
  return (
    <div id="toy-collection">
      {toys.map((toy)=> <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onLikeToy={onLikeToy}/>)}
      {/* Render the collection of ToyCards */}
    </div>
  );
}

export default ToyContainer;
