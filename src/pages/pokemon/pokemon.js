import React, { useState, useEffect} from "react";
import { Container, StyleButton } from "./styled";
import axios from "axios";


export const Pokemon = () =>{
let [RNumber, setNumber] = useState(getRandomNumber());
const [pokemonImg, setPokemonImg] = useState("");
const [pokemonName, setPokemonName] = useState("");


function getRandomNumber() {
     return Math.floor(Math.random() * 500) + 1;
  }

  const regenerateRandomNumber = () => {
    const newNumber = getRandomNumber(); // 새로운 랜덤 숫자 생성
    setNumber(newNumber); // 상태 업데이트
    getPokemonImg(newNumber); // 새로운 숫자에 해당하는 포켓몬 이미지 가져오기
  };


  useEffect(() => {
    getPokemonImg();
},[pokemonName]);

const getPokemonImg = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-form/${RNumber}`
      );

      setPokemonImg(response.data.sprites.front_default);
    } catch (e) {
      console.log(e);
    }
  };

//   const apirequest = async () => {
//     try {
        
//       const response = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${RNumber}`
//       );
//     localStorage.setItem("pokemonName",response.data.form[0].name)


//       setPokemonName(response.data.forms[0].name);
//     } catch (e) {
//       console.log(e);
//     }
//   };

return <Container>
    <StyleButton onClick={regenerateRandomNumber}>
   포켓몬랜덤생성기
   </StyleButton>
   <img src={pokemonImg} alt="" />
   
    </Container>
   
}