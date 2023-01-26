import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokedexCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});


    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data));
    }, [])

   // console.log(pokemon);

    return (
        <li className='col'>
            <div className='card'  onClick={() => navigate(`/pokedex/${pokemon.id}`)}>
                <h2> <b>Name:</b> {pokemon.name}</h2>
                <h3> <b>Weigth:</b> {pokemon.weight}</h3>
                <div className='cardimg'>
                    <img src={pokemon.sprites?.other.dream_world.front_default} alt="" className='cardimage'/>
                </div>

            </div>
        </li>
    );
};

export default PokedexCard;