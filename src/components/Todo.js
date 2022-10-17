import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Todo = () => {
  const { id } = useParams();

  const [todoDetails, setTodoDetails] = useState({});
  const[error, setError] = useState(null)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const todoDetailsResponse = res.data;
        setTodoDetails(todoDetailsResponse);
      }).catch(error =>{
setError(error)
      });
  });
  if(error)
   return `Error: ${error.message}`
   

  console.table(todoDetails);
  const { id: todoId, userId, title, completed } = todoDetails;
  return (
    <div>
      <h1>ID: {todoId} </h1>
      <h1>userId is: {userId}</h1>
      <h3>User titile is: {title}</h3>
      <h3>{`Completed:${completed}`}</h3>
    </div>
  );
};
export default Todo;
