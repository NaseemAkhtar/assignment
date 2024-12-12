import React from 'react'
import { Card, Placeholder } from 'react-bootstrap';

function CardLoader() {
   
    return (
        <Card>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Placeholder  />
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                    <Placeholder xs={6} />
                    <Placeholder xs={6} />
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={12} /> {' '}
                    <Placeholder xs={6} /> <Placeholder xs={5} /> <Placeholder xs={12} />
                </Placeholder>
            </Card.Body>
        </Card>
    )
}

export default CardLoader