import { useState } from "react";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -10,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setfriends] = useState(initialFriends);
  const [showAddForm, setshowAddForm] = useState(false);
  const [showSplitbill, setshowSplitbill] = useState(null);
  const [currfriend, setcurrfriend] = useState({});

  const handleSelect = (index, matchId) => {
    setshowAddForm(false);
    const storecurrFriend = friends[index];
    setcurrfriend(storecurrFriend);
    if (matchId) {
      setcurrfriend({});
      setshowSplitbill(false);
    } else {
      setshowSplitbill(true);
    }
  };

  const handleShowform = () => {
    setshowAddForm((show) => !show);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          currfriend={currfriend}
          friends={friends}
          handleSelect={handleSelect}
        />
        {showAddForm && (
          <FormAddFriend
            friends={friends}
            setfriends={setfriends}
            setshowAddForm={setshowAddForm}
          />
        )}
        <Button clickHandle={handleShowform}>
          {showAddForm ? "Close" : "Add List"}
        </Button>
      </div>
      {showSplitbill && (
        <FormSplitBill
          key={currfriend.id}
          currfriend={currfriend}
          setcurrfriend={setcurrfriend}
          setshowSplitbill={setshowSplitbill}
        />
      )}
    </div>
  );
}
