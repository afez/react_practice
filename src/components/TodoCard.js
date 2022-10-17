/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Card } from "antd";
import { useHistory } from "react-router-dom";
const TodoCard = (props) => {
  const { todo } = props;
  const { id, title, completed } = todo;
  let history = useHistory();
  return (
    <Card
      style={{
        width: 300,
      }}
      onClick={() => history.push(`Todo/${id}`)}
    >
      <>
        <h1>{title}</h1>
        <h4>{`completed: ${completed}`}</h4>
      </>
    </Card>
  );
};
export default TodoCard;
