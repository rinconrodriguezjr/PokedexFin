import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexCard from './PokedexCard';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const [pokemons, setPokemons] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const [types, setTypes] = useState([]);
    const [abilities, setAbilities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279`)
            .then(res => setPokemons(res.data.results));
        axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res => setTypes(res.data.results));
        axios.get(`https://pokeapi.co/api/v2/ability/`)
            .then(res => setAbilities(res.data.results));
    }, [])

    //----------------------------------------------------------//
    // PAGINACION //
        const [page, setPage] = useState(1);
        const pokemonsPerPage = 10;
        const lastIndex = page * pokemonsPerPage;
        const firstIndex = lastIndex - pokemonsPerPage;
        const pokemonsPaginated = pokemons.slice(firstIndex, lastIndex)
        const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
    
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

    const search = () => {
        navigate(`/pokedex/${inputSearch.toLowerCase()}`)
    };

    const filterPokemonType = e => {
        setPage(1)
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon));
    };

    const filterPokemonAbility = e => {
        setPage(1)
         console.log(e.target.value);
        axios.get(e.target.value)
            .then(res => setPokemons(res.data.pokemon));
    };

    console.log(pokemonsPaginated)

    return (
        <div className='pokedexcontainer'>
            <div >
            <Button cl type='submit' variant="danger" onClick={() => setPage(page - 1)} >Prev Page</Button>{' '}
            {" "} { "  " }  {page}  /  {totalPages} {" "}{ "  " }
            <Button type='submit' variant="danger" onClick={() => setPage(page + 1)} >Next Page</Button>{' '}
            </div>
            <h1><b> <span>W E L C O M E </span> </b> {userName}!</h1>

            <div className='searchcontainer'>
                <div>
                    <input
                        type="text"
                        placeholder='Search Pokemon'
                        value={inputSearch}
                        onChange={e => setInputSearch(e.target.value)}
                    />

                    <Button type='submit' variant="primary" onClick={search}>Search</Button>{' '}
                </div>

                <div className='title'> Select Pokemon By Ability {" "}
                    <select onChange={filterPokemonAbility} name="" id="" >
                        {abilities?.map(ability => (
                            <option value={ability.url} key={ability.url}>{ability.name}</option>
                        ))
                        }
                    </select>
                </div>
                <div className='title'> Select Pokemon By Type {" "}
                    <select onChange={filterPokemonType} name="" id="" >
                        {types?.map(type => (
                            <option value={type.url} key={type.url}>{type.name}</option>
                        ))
                        }
                    </select>
                </div>
            </div> <br />

            <div>

            </div>
            <div className='pokemon-list'>
                {pokemonsPaginated?.map(pokemon => (
                    <PokedexCard
                     url={pokemon.url? pokemon.url : pokemon.pokemon.url} 
                    key={pokemon.url? pokemon.url : pokemon.pokemon.url} />
                ))

                }
            </div>
        </div>
    );
};

export default Pokedex;