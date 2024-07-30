import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import './Cart.css'
import { removeItem } from "../../redux/cartSlice";

export default function Cart() {
  const { item } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  return (
    <Container>
      <h1 className="text-center">Cart</h1>
      <ListGroup>
        {item.map((i, index) => (
          <ListGroupItem key={index} className="my-1">
            <div className="item">
              <div>
                <h4>name: {i.product}</h4>
                <h5>price: {i.price}$</h5>
                <h5>quatity: {i.quatity}</h5>
              </div>
              <Button className="btn btn-danger " onClick={()=>dispatch(removeItem(i.id))}>delete</Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}
