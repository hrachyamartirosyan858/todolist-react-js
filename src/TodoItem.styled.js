import styled from "styled-components";

export const TodoItemDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: solid #e6e6e6 1px;
  border-right: none;
  border-left: none;
  margin: 0;
  padding: 0;
  font-size: 15px;
`;

export const TodoItemIsCompletedInput = styled.input`
  position: relative;
  cursor: pointer;
  margin: 10px 50px 0px 10px;
  width: 0px;
  height: 0px;

  :checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid #cae2de;
    border-radius: 30px;
    background-color: #ffffff;
  }

  :before {
    content: "";
    display: block;
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid #f2f2f2;
    border-radius: 30px;
    background-color: #ffffff;
  }

  :checked:after {
    content: "";
    display: block;
    width: 6px;
    height: 15px;
    border: solid #61c3b1;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 4px;
    left: 10px;
  }
`;

export const TodoItemLabel = styled.label`
  display: flex;
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: solid #e6e6e6 1px;
  border-right: none;
  border-left: none;
  margin: 0;
  padding: 0;
`;

export const TextTodoSpan = styled.span`
  align-self: center;
  font-size: 23px;

  &.line-through {
    text-decoration: line-through;
    color: rgb(217, 217, 217);
  }
`;

export const DeleteTodoButton = styled.button`
  position: absolute;
  right: 10px;
  padding-top: 5px;
  background-color: #fff;
  border: none;
  font-size: 30px;
  color: #cc9a9a;
`