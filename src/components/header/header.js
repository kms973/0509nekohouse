import React from "react";
import { Container } from "./stlyed";
import { Link } from "react-router-dom";

export const Header = () => {
    return <Container>고양이집
        <Link to="/main">홈</Link>
        <Link to="/pokemon">포켓몬랜덤생성기</Link>
        <Link to="/todo">Todo리스트</Link>
    </Container>;
}
