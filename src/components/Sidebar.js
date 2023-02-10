import React from "react";
import { ListGroup } from "react-bootstrap";

function Sidebar() {
  const rooms = ["first room", "second room", "third room"];
  return (
    <>
      <h2>Elérhető szobák</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Csoporttagok</h2>
      {/* Csoporttagok */}
    </>
  );
}

export default Sidebar;
