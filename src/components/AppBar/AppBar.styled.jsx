import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


export const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #000;
    &.active {
        background: linear-gradient(to right, #1488cc, #9d9da2);
        color: #fff;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #13abde;
    }`

export const Text = styled.p`
  margin-left: 5px; `

export const Header = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  font-size: 32px;
  color: #010101;
  margin-bottom: 20px;
  background-color: rgb(178, 236, 249);
`

