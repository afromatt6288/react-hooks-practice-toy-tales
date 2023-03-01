import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then(r=>r.json())
    .then(toyData => setToys(toyData))
  },[])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy){
    setToys([...toys, newToy])
  }

  function deleteToy(toyToDonate){
    const updatedToys = toys.filter((toy)=> toy.id !== toyToDonate.id)
    setToys(updatedToys)
  }

  function likeToy(toyToLike){
    const updatedToys = toys.map((toy) => toy.id === toyToLike.id ? toyToLike : toy)
    setToys(updatedToys)
    console.log("like", toyToLike)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={deleteToy} onLikeToy={likeToy}/>
    </>
  );
}

export default App;
