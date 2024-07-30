import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const {item} = useSelector(state=>state.products)
  console.log(item)
  return (
    <div>
        
    </div>
  );
}
