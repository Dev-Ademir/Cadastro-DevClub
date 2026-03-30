import styled from "styled-components";
export const Container = styled.div`
  background-color: #1e3fae;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 600;
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InputLabel = styled.label`
color: #fff;
font-size: 12px;
font-weight: 500;

span {
  color: #ef4f45;
  font-weight: bold;
}
`;
export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  -moz-appearance: textfield;

`;
