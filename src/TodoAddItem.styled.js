import styled from "styled-components";

export const AddItemForm = styled.form `
    display: flex;
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    font-size: 20px;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 6%);
  `
  
export const ChangeAllCheckboxes = styled.input `
    width: 0;
    height: 0;
    position: relative;
        
        :after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: solid #e7e7e8;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: -8px;
        left: 19px;
        }
  
        :checked::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border: solid #716e6e;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: -8px;
        left: 19px;
        }
  `
  
export const AddTodoText = styled.input`
    box-sizing: border-box;
    width: 100%;
    padding-left: 60px;
    height: 50px;
    border: none;
    font-size: 25px;
    line-height: 1.4em;
    box-shadow: inherit;

        ::placeholder {
        font-size: 20px;
        color: #e7e7e8;
        font-style: italic;
        }

        :focus {
        outline: none;
        }
`
