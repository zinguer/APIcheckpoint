import React from "react";
import Theusers from "./Theusers";

const Userslist = ({ users }) => {
  return (
    <div className = "List"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {users.map((el) => (
        <Theusers users={el} />
      ))}
    </div>
  );
};

export default Userslist;
