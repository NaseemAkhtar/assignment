import React from 'react'
import { Card } from 'react-bootstrap';

function CardBlk({card}) {
   
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                    {card.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardBlk