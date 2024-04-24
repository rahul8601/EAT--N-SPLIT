import { useState } from "react";
import Button from "./Button";

function FormAddFriend({ friends, setfriends, setshowAddForm }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48?");

  const id = crypto.randomUUID();
  const objfriend = {
    id: id,
    name,
    image: "https://i.pravatar.cc/48?",
    balance: "",
  };

  const handleAddLIst = (e) => {
    e.preventDefault();
    if (!name) return;
    setfriends([...friends, objfriend]);
    setname("");
    setshowAddForm(false);
  };

  return (
    <form className="form-add-friend">
      <label>👭 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />

      <label>🎴 image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button clickHandle={handleAddLIst}>Add </Button>
    </form>
  );
}

export default FormAddFriend;
