import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


export const List = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  
`;

export const Movie = styled.li`
  font-size: 20px;
  font-weight: 500;
  padding: 2px;
`;

export const Link = styled(NavLink)`
  color: black;
  &:hover,
  &:focus {
    color: #13abde;
    font-weight: 700;
  }
`;