import styled from 'styled-components'

export const AnswerButton = styled.button`
  padding: 15px 25px;
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: bold;
  width: 750px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #edf2f4;
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg, #515bd4, #8134b8, #dd2a7b, #f58529);
  }
`
export const Enunciado = styled.h2`
  color: #e63946;
  font-size: 40px;
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 5px;
  border-style: solid;
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134b8, #515bd4);
  border: 1px solid transparent;
  align-items: center;
  margin-top: 10px;
  height: 300px;
  margin-left: 100px;
  margin-right: 100px;
  padding: 20px 0 0 0;
`
