import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Theusers = ({users}) => {
    return (
      <div className="List">
        <Card bg="light" text="dark" style={{ width: "20rem", margin: "2%" }}>
          <Card.Body>
            <Card.Title>{users.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {users.username}
            </Card.Subtitle>
            <Card.Text>{users.website}</Card.Text>
            <Link to={`/info/${users.id}`}>
              <Card.Link href="#">More Info..</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
}

export default Theusers
