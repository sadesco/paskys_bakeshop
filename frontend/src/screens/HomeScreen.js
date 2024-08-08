/* import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'



function HomeScreen() {
  const [products, setProducts] = useStae([])

  useEffect(( => {
      async function fetchProducts(){
        const{ data } = await axios.get('http://127.0.0.1:8000/api/products/')
        setProducts(data)
      }

      fetchProducts()
  }))


  return (
    <div>
      <h1>Baked Goods</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
*/
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions'

function HomeScreen() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(() => { 
    dispatch(listProducts())

  }, [dispatch]); 


  return (
    <div>
      <h1>Baked Goods</h1>
      {loading ? <Loader/>
        : error ? <Message variant='danger'>{error}</Message>
          : 
          <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      }
      
    </div>
  );
}

export default HomeScreen;
