import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const GoBack = styled(NavLink)`
   display: flex;
  width: 100px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: rgb(178, 236, 249);
  font-weight: 700;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 10%;
  margin-bottom: 20px;
  margin-left: 20px;
  &:hover,
  &:focus {
    color: white;
    background: linear-gradient(to right, #1488cc, #9d9da2);
    transform: scale(1.2);
  } 
`;

export const Link = styled(NavLink)`
  display: flex;
  width: 100px;
  height: 35px;
  align-items: center;
  justify-content: center;
  background-color: rgb(178, 236, 249);
  font-weight: 700;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 6px;
  margin-bottom: 10px;
  margin-left: 40px;
  :hover:not(.active){
    color: white;
    background: linear-gradient(to right, #1488cc, #9d9da2);
    transform: scale(1.2);
  }
    &.active {
    color: white;
   background: linear-gradient(to right, #1488cc, #9d9da2);
   
  } 
`;

