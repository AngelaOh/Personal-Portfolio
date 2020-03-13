import React from 'react';
import './Home.css'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import myFace from './imgs/ao_image.jpg'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

function Home() {
  return (
    <div className="Home">
      <Container>
        <h1> Welcome to my world! </h1>
        <Image src={myFace} /> 
        {/* TODO: have image actually scale fluidly to parent container */}
        <h6> Where coding meets blah meets blah. </h6>
      </Container>
    </div>
  );
}

export default Home;