/*
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen(match, location, history) {
    const productId = match.params.id
    // geting the qty out of the url 
    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    useEffect(() => {
        if(productId){
            //disaptches this action to reducer
            // this action is going to update our state
            //add our items in our local storage
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty]) // these are dependencies
    

  return (
    <div>
      cart
    </div>
  )
}

export default CartScreen
*/

import React, { useEffect } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import  Message  from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import '../css/CartScreen.css' // Import your custom CSS

function CartScreen() {
    const { id } = useParams();
    const location = useLocation();

    // geting the qty out of the url 
    // Get the qty from the URL query parameters, defaulting to 1
    const qty = new URLSearchParams(location.search).get('qty') || 1

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // pull out state with arrow function
    const cart = useSelector(state => state.cart)
    //destrcuture this
    // get items out of cart
    const { cartItems } = cart

    console.log(cartItems)

    useEffect(() => {
        if(id){
            //disaptches this action to reducer
            // this action is going to update our state
            //add our items in our local storage
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty]) // these are dependencies
    
    //trash can feature in shopping cart
    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () =>{
        navigate(`/login?redirect=shipping`);
    }
  return (
    //making the shopping cart page 
    // 1st message for if cart is fully empty 
    <Row>
        <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <Message variant='info'>
                   Your cart is empty <Link to='/'>Go Back</Link>
                </Message> 
            ) :(
                <ListGroup variant='flush'>
                    {cartItems.map(item=> (
                        <ListGroup.Item key={item.product} className="cart-item">
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>
                                ₱{item.price}
                                </Col>
                                <Col md={3}>
                                <Form.Control
                                    as="select"
                                    value={item.qty}
                                    onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                    style={{ appearance: 'auto' }} // Ensures the default dropdown arrow appears
                                    >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                         </option>
                                    ))}
                                </Form.Control>
                                </Col>

                                <Col md={1}>
                                    <Button
                                    type='button'
                                    variant='light'
                                    onClick={() => removeFromCartHandler(item.product)}
                                    
                                    >
                                        <i className='fas fa-trash'> </i>
                                    
                                    </Button>

                                </Col>

                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>    
            )}
        </Col>

        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal  ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        ₱{cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                </ListGroup>

                <ListGroup.Item className='button'>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                </ListGroup.Item>
            </Card>
        </Col>
        
    </Row>
  )
}

export default CartScreen
