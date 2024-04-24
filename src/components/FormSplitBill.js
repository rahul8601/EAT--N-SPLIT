import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ currfriend, setcurrfriend, setshowSplitbill }) {
  const [bill, setbill] = useState("");
  const [expanse, setexpanse] = useState("");
  const [selectuser, setselectuser] = useState("user");

  const handleSplitBill = (e) => {
    e.preventDefault();
    if (selectuser === "user") {
      const user = bill - expanse;
      currfriend.balance = currfriend.balance + user;
      setcurrfriend("");
      setshowSplitbill(false);
    } else {
      setcurrfriend("");
      currfriend.balance = -expanse;
      setshowSplitbill(false);
    }
  };

  return (
    <form className="form-split-bill">
      <h2>split a bill with {currfriend.name}</h2>
      <label>💰 Bill vlaue</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(e.target.value)}
      />
      <label>🧍‍♂️ Your expense</label>
      <input
        type="text"
        value={expanse}
        onChange={(e) => setexpanse(e.target.value)}
      />
      <label>👭 {currfriend.name}'s expanse</label>
      <input type="text" disabled value={bill - expanse} />
      <label> Who is payinig the bill?</label>
      <select
        value={selectuser}
        onChange={(e) => setselectuser(e.target.value)}
      >
        <option value={"user"}>You</option>
        <option value={"friend"}>{currfriend.name}</option>
      </select>
      <Button clickHandle={handleSplitBill}>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
