import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
    Link,
    useParams, } from "react-router-dom";

import Home from "./Home";
import {toast} from "react-toastify";

const Apartment = () => {
    const [product, productUpdate] = useState([]);
    let { productId } = useParams();

    useEffect(() => {
        fetch("http://localhost/rentals/apartments/view/" + productId,{
            method:'GET',
            headers:{'content-type':'application/json'}
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            if (Object.keys(resp).length === 0) {
                toast.error('No items found.');
            }else{
                productUpdate(resp)
            }
        }).catch((err) => {
            toast.error('Login Failed due to :' + err.message);
        });
    },[])


    return (
        <Container className="mt-5">
            <Row>
                <Col key={product.id}>
                    <ProductCard  product={product} />
                </Col>
            </Row>
        </Container>
    );
}

const ProductCard = ({product}) => {
    return (
        <div>
            {typeof product === 'object' && product !== null &&
                <Card style={{ minWidth: '18rem', margin: '20px' }}>
                    <Card.Img variant="top" src="/default-item.jpg" />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text><strong>Address</strong> {product.address}</Card.Text>
                        <Card.Text><strong>Apartment number</strong> {product.apartment_number}</Card.Text>
                        <Card.Text><strong>Apartment floor</strong> {product.floor}</Card.Text>
                        <Card.Text><strong>Size</strong> {product.apartment_size} sf</Card.Text>
                        <Card.Text><strong>Rooms</strong> {product.rooms}</Card.Text>
                        <Card.Text><strong>Bathrooms</strong> {product.bathrooms}</Card.Text>
                        <Card.Text><strong>Gas</strong> {product.has_gas ? "Yes" : "No"}</Card.Text>
                        <Card.Text><strong>Heating</strong> {product.has_heating ? "Yes" : "No"}</Card.Text>
                        <Card.Text><strong>Parking</strong> {product.has_parking ? "Yes" : "No"}</Card.Text>
                        <Card.Subtitle><strong>Price</strong> {product.price}</Card.Subtitle>
                        <div className="text-center">
                            <Link to={`/apartments`} className="btn btn-primary">Back</Link>
                        </div>
                    </Card.Body>
                </Card>
            }
        </div>
    );
};


export default Apartment;