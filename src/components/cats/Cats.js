import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Input } from "reactstrap";
import { addNewCat, deleteCat, fetchCats } from "../../redux/catsSlice";

export default function Cats() {
  const dispatch = useDispatch();
  const { cats } = useSelector((state) => state.cats);
  
  const handle_Delete = (id) => {
    dispatch(deleteCat(id));
  };
  const handle_Add = (cat) => {
    dispatch(addNewCat(cat));
  };
  useEffect(() => {
    dispatch(fetchCats());
  }, []);
  return (
    <div>
      <Input
        placeholder="name"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            handle_Add({question:"abc",answer1:"a",answer2:"b",answer3:"c",answer4:"d"});
          }
        }}
      />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {cats.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.question}</td>
              <td>{item.answer1}</td>
              <td>{item.answer2}</td>
              <Button
                className="btn btn-danger"
                onClick={() => handle_Delete(item.id)}
              >
                delete
              </Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
