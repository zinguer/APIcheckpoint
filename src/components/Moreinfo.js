import React from 'react'
import { Card , ListGroup } from 'react-bootstrap';

const Moreinfo = ( props ) => {
  const id = props.match.params.id
  const user = props.users.find( user => user.id == id)


    return (
      <div>
        <Card className = 'MoreInfoCard' >
          <Card.Header>{user.name}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{user.phone} </ListGroup.Item>
            <ListGroup.Item>
              {user.address.suite}
              {user.address.street}
              {user.address.city}
            </ListGroup.Item>
            <ListGroup.Item>
              {user.company.name}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
}

export default Moreinfo

