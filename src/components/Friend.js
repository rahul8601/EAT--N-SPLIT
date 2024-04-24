import Button from "./Button";

function Friend({ friend, handleSelect, index, currfriend }) {
  const matchId = friend?.id === currfriend?.id;
  return (
    <li className={matchId ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />

      {friend.balance < 0 && (
        <p className="red">
          you own {friend.name} {friend.balance}₹
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} own me {friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>you and {friend.name} are even</p>}
      {friend.balance === "" && <p> No Tranjuction</p>}
      <h3>{friend.name}</h3>
      <Button clickHandle={() => handleSelect(index, matchId)}>
        {matchId ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
