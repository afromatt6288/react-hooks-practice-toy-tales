import React from "react";

function ToyCard({toy, onDeleteToy, onLikeToy}) {
  const{id, name, image, likes} =toy
  
  function handleDeleteToy(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    onDeleteToy(toy)
  }

  function handleLikeToy(){
    const likedToy = { 
      id: id,
      name: name,
      image: image,
      likes: likes + 1
    }
    fetch(`http://localhost:3001/toys/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(likedToy),
    })
    .then(r=>r.json())
    .then(data => onLikeToy(data))
  }

  return (
    <div className="card" id={id}>
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeToy} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
