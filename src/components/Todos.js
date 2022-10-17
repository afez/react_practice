import axios from "axios";
import { React, useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [Todos, setTodos] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => { 
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  console.log(Todos); 
  return (
    <>
      {Todos ? (
        <div style={{ dispaly: "flex", flexWrap: "wrap" }}>
          {Todos.slice(0, 10).map((todo) => (
            <TodoCard todo={todo} />
          ))}
        </div>
      ) : (
        <Progress type="circle" percent={100} />
      )}
    </>
  );
};
export default Todos;
