
/*
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import products from '../products'
import axios from 'axios';

function ProductScreen() {
    const { id } = useParams();
    const [product, setProduct] = useState([]); 

    useEffect(() => { 
    async function fetchProduct() {
      const { data } = await axios.get('/api/products/${id}');
      setProduct(data);
    }

    fetchProduct();
     }, []); 

    console.log('Product ID from URL:', id); // Log the ID
    console.log('Products array:', products); // Log the products array

    const product = products.find((p) => String(p._id) === id);
    console.log('Product found:', product); // Log the product

    if (!product) return <div>Product not found</div>; // Provide feedback if no product found

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ₱{product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>₱{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock === 0} type='button'>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductScreen
*/
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import axios from 'axios';

function ProductScreen() {
    const { id } = useParams();
    const [product, setProduct] = useState(null); // Changed state variable name

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(`/api/products/${id}`);
                setProduct(data);
            } catch (error) {
                console.error('Error fetching the product:', error);
            }
        }

        fetchProduct();
    }, [id]);

    console.log('Product ID from URL:', id); // Log the ID
    console.log('Product:', product); // Log the product

    if (!product) return <div>Product not found</div>; // Provide feedback if no product found

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ₱{product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>₱{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled={product.countInStock === 0} type='button'>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductScreen;

