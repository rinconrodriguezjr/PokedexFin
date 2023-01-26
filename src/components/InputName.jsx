import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import background from "../assets/images/backgroundinput.jpg"
import pokebolatop from "../assets/images/pokebolatop.png"
import pokebolacenter from "../assets/images/pokebolacenter.png"
import pokebolabottom from "../assets/images/pokebolabottom.png"
import kids from "../assets/images/kids.png"
import amarillo from "../assets/images/amarillo.jpg"
import cha from "../assets/images/cha.png"
import cha1 from "../assets/images/cha1.png"
import cha2 from "../assets/images/cha2.png"
import cha3 from "../assets/images/cha3.png"
import cha4 from "../assets/images/cha4.png"
import cha5 from "../assets/images/cha5.png"
import cha6 from "../assets/images/cha6.png"
import cha7 from "../assets/images/cha7.png"
import cha8 from "../assets/images/cha8.png"
import cha10 from "../assets/images/cha10.png"
import { Button } from 'react-bootstrap';


const InputName = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");

    const navigate = useNavigate();

    const clickButton = () => {
        dispatch(changeUserName(inputValue));
        navigate("/pokedex");
    }

    return (
        <div className='homecontainer'>
            
            <h1><b> ¡ Hola <span> Jugador ! </span></b></h1>
            <h2>Para poder iniciar, por favor dame tu <span> ¡NOMBRE! </span></h2>

            {/* IMG TOP */}
            
            {/* <img src={pokebolatop} alt="" />  */}
            
            {/* INPUT */}
                
                <div className='inputcontainer'>
                    
                    {/* <img src={cha} alt="" />
                    <img src={cha10} alt="" /> */}
                    <input type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder="Write your Name"/>
                    {/* <button className='inputbutton' onClick={ clickButton } > Submit </button> */}
                    <Button variant="primary" onClick={ clickButton}>Submit</Button>{' '}

                    {/* <img src={cha1} alt="" />
                    <img src={cha2} alt="" /> */}
                </div>

            {/* IMG BOTTOM */}
            
            {/* <img className='inputcontainer-img' src={pokebolabottom} alt="" /> */}
        </div>
    );
};

export default InputName;