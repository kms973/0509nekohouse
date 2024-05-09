import React from "react";
import { Container } from "./styled";
import { Link } from "react-router-dom";

export const Main = () =>{
    return <Container>
   <Link to="/pokemon">포켓몬랜덤생성기</Link>
   <Link to="/todo">Todo리스트</Link>
        
    </Container>
   
}