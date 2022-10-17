import styled from "@emotion/styled";


export const Input = styled.input`
  width: 200px;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 3px solid rgb(178, 236, 249);
  border-radius: 6px;
  box-shadow: 0px 3px 3px rgb(178, 236, 249);
  outline: none;
  margin-right: 15px;
  &:hover,
  &:focus {
    border-color: #13abde;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 20px;
  font-weight: 500;
  background-color:rgb(178, 236, 249);
  width: 120px;
  height: 45px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
    &:hover,
    &:focus{
        color: white;
        background: linear-gradient(to right, #1488cc, #9d9da2);
        transform: scale(1.2);
  
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;