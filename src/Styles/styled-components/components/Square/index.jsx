import { SquareContainer, SquareLink } from "./style";

export default function Square(props){
    return(
       <SquareContainer borderStyle= {props.borderstyle}>
        <SquareLink squad={props.squad} href="https://hackersdobem.org.br/bem-vindo"></SquareLink>
        {props.borderStyle ? props.borderStyle : "Adcione a prop no Square"}
       </SquareContainer>
    )
}