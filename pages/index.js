import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  Link  from 'next/link'
import Styled from 'styled-components'


const Pokemon = ({ pokemon })=>{
  const id=pokemon.url.split('/').filter(x => x).pop()
  return(
    <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>
  )
}
export default function Pokemones({ pokemones }) {
  console.log(pokemones)
  return (
    <div>
      <p>Pokemones</p>
      <Boton>Hola</Boton>
     
    {pokemones.map(x => <Pokemon pokemon={x} key={x.name}/>)}
   </div>
  )
}

export const getStaticProps = async()=>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return{
    props: {pokemones: data.results}
  }
}
const Boton = Styled.button`
  background-color: red
`


