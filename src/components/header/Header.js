import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";

export default function Header() {
    const {item} = useSelector(state=>state.cart)
  return (
    <div>
        <Link to="/cart">
          Cart <span>{item.length}</span>
        </Link>
    </div>
  )
}
