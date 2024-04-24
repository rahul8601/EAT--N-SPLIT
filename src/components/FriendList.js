import Friend from "./Friend";

function FriendList({ friends, handleSelect, currfriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <Friend
          currfriend={currfriend}
          friend={friend}
          key={friend.id}
          handleSelect={handleSelect}
          index={index}
        />
      ))}
    </ul>
  );
}

export default FriendList;
