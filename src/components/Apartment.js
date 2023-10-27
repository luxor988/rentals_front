import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

import Home from "./Home";
import {toast} from "react-toastify";

const Apartments = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
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
    console.log(product)
    return (
        <Card style={{ minWidth: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src="/default-item.jpg" />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.address}</Card.Text>
                <Card.Subtitle>{product.price}</Card.Subtitle>
                <div className="text-center">
                    <Button variant="primary" className="btn-primary">Details</Button>
                </div>
            </Card.Body>
        </Card>
    );
};


export default Apartments;