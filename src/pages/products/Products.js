import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import Product from "../../components/product/Product";
import {useDispatch, useSelector} from 'react-redux'
import { fetchData } from "../../redux/productsSlice";
import Header from "../../components/header/Header";
import { addItem } from "../../redux/cartSlice";

export default function Products() {
  const dispatch=useDispatch()
  const {item, status, error} = useSelector(state=>state.products)
  useEffect(() => {
    if(status==='start'){
        dispatch(fetchData())
    }
  }, []);
  const handle_Add=(product)=>{
    dispatch(addItem(product))
  }
  if(status==="loading") return <div>loading...</div>
  if(status==="failed") return <div>{error}</div>
  return (
    <div>
        <Header/>
      <Container>
        <Row>
          {item.map((item, index) => (
            <Product key={index} product={item} handle_Add={handle_Add}/>
          ))}
        </Row>
      </Container>
    </div>
  );
}
