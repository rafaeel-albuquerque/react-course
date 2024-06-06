import styled from "styled-components";

export const SquareContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px ${props =>props.borderStyled ? props.borderStyled: "solid"} solid black;
width: 200px;
height: 200px;
background-color: ${props => props.squad = "Palmeiras"?"green":"red" } ;
`

export const SquareLink = styled.a`
text-decoration: none;
font-size: 18px;
color: black;
`