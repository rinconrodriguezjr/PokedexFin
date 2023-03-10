import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, ProgressBar } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const PokedexDetail = () => {
    
    const {id} = useParams();
const navegate = useNavigate()

    const [pokemon, setPokemon] = useState({});

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
            .catch(() => alert("Pokemon seleccionado no existe"));
    },[id]);

    const getBackIndex = () =>{
        navegate('/pokedex')
    }
    // console.log(pokemon);

    return (
        <div className='detailcontainer'>
        <div>
            <Button type='submit' variant="danger" onClick={getBackIndex} >Prev Page</Button>{' '}
        </div>
            {/* <h1> <b>POKEMON DETAIL:</b></h1>*/}
            <br />
            <div className='detailcontainerhead'>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" className='detailimage' />
            </div> <br />

            <h1> <b># {" "}{id.toString().padStart(4,0)}</b></h1>
            <div className='lineName'> <h1> <b> {" "}</b> <b>{pokemon.name?.toUpperCase()}</b> </h1>
                
            </div>

            <div className='heightweightcont'>
                <article> <b> Weight </b> <br /> {pokemon.weight}</article>
                <article> <b> Height </b> <br /> {pokemon.height}</article>
            </div>

            <div className='classandtypecont'>

                <article className='classandtypecontart'> <b>Type</b> 
                    <div className='abilitycont'>
                        <div className='ability'>
                            {
                                pokemon.types?.map((type, key) =>(
                                    <span className='type1' key={type?.type.name}
                                    >{type?.type.name}</span>
                                ))
                            }
                        </div>
                    </div> 
                </article>
            
                <article className='classandtypecontart'> <b>Abilities</b>
                    <div className='abilitycont'>
                        <div className='ability'> 
                        {pokemon.abilities?.map((ability, key)=>(
                            <span key={ability.ability.name} className="ability1">
                            {ability.ability.name}</span>
                        ))}  
                        </div>
                    </div>  
                </article>
            </div>

            <div >
                <div >
                { pokemon.stats?.map((stat, key) => (
                    <div key={key}>
                        <div className='stat_hab'>
                            <span>{stat.stat.name.toString().toUpperCase()}:</span>
                            <span>{stat.base_stat}/150</span>
                        </div>
                        <ProgressBar animated now={stat.base_stat} max={150} visuallyHidden className='progressbar'/>
                    </div>
                ))}
                </div>
                    {/* <br /> <h4>{id}</h4> */}
            
            </div>

        </div>
    );
};

export default PokedexDetail;