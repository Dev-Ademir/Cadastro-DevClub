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
export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  max-width: 600px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 50%;
    height: 100%;
  }
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
export const Button = styled.button`
border: none;
background: linear-gradient(180deg, #FE7E5D, #FF6378 100%);
font-size: 16px;
color: #fff;
padding: 16px 32px;
width: fit-content;
border-radius: 30px;
cursor: pointer;

&:hover {
  opacity: 0.8;
}

&:active {
  opacity: 0.6;
}
`;
