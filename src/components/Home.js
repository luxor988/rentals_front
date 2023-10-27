import {Container, Image, Row} from "react-bootstrap";

const Home = () => {
    return (
        <Container className="mt-5">
            <Row>
                <h1 className="text-center">Welcome to Rentals!</h1>
                <Image src="/logo.jpg"></Image>
            </Row>
        </Container>
    );
}

export default Home;