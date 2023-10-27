import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

import {toast} from "react-toastify";

const Apartments = () => {
    const [items, itemsUpdate] = useState([]);

    useEffect(() => {
        fetch("http://localhost/rentals/apartments/index",{
            method:'GET',
            headers:{'content-type':'application/json'}
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            if (Object.keys(resp).length === 0) {
                toast.error('No items found.');
            }else{
                itemsUpdate(resp)
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message);
        });
    },[])


    return (
        <Container className="mt-5">
            <Row>
                {items.map(product => (
                    <Col key={product.id}>
                        <ProductCard  product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

const ProductCard = ({product}) => {
    return (
        <Card style={{ minWidth: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src="/default-item.jpg" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.address}</Card.Text>
                <Card.Subtitle>{product.price}</Card.Subtitle>
                <div className="text-center">
                    <Link to={`/apartment/${product.id}`} className="btn btn-primary">Details</Link>
                </div>
            </Card.Body>
        </Card>
    );
};


export default Apartments;