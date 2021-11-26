import styled from "styled-components";

export const TodoFooterLine = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 42px;
  line-height: 1.2;
  font-size: 15px;
  justify-content: space-between;
  align-items: center;
  color: #777;
`;

export const CompletedTodosCounter = styled.span`
  margin-left: 25px;
`;

export const ClearCompletedButton = styled.button`
  display: inline-flex;
  color: inherit;
  width: 120px;
  margin-right: 15px;
  border: none;
  align-items: center;
  justify-content: flex-end;
  text-decoration: none;
  background-color: inherit;
  overflow: hidden;
  text-align: end;
  :hover {
    border: 1px solid #e8e1e1;
  }

  :focus {
    border: 1px solid #f9c7c7;
  }
`;
