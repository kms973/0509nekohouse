import React from "react";

import { Link } from "react-router-dom";

export const Header = () => {
    return <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"><Link to="/main">집</Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link"><Link to="/pokemon">포켓몬랜덤생성기</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/todo">Todo리스트</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>;
}
