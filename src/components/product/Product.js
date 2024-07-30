import React from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardImg,
  Col,
} from "reactstrap";
import Swal from "sweetalert2";

export default function Product(props) {
  const { product, handle_Add } = props;
  
  const handle_Adds = (id) => {
    Swal.fire({
      title: "Add suscessfull",
      text: "ya",
      icon: "success",
    });
    handle_Add(id)
  };
  return (
    <Col lg={3} md={4} sm={6} xs={6}>
      <Card className="p-2 my-2">
        <CardImg top src={require(`../../../public/img/${product.img}.png`)} />
        <CardBody>
          <CardTitle tag="h5">{product.product}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {product.price}$
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button
            className="btn btn-success m-2"
            href={`/detail/${product.id}`}
          >
            View Detail
          </Button>
          <Button className="btn btn-success" onClick={()=>handle_Adds(product)}>
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}
