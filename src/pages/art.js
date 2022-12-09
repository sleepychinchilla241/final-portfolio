import React from 'react';
import './style.css';

const Art = () => {
return (
	<div
	style={{
		display: 'flex',
        flexDirection: 'column',
		justifyContent: 'Left',
		alignItems: 'Left',
		height: '100vh',
        fontFamily: 'Andale Mono',
        margin: '5rem'
	}}
	>
	<h1> My Artwork </h1>
    <br/>
    <div style={{display: 'flex', justifyContent:'center',}}>
        <imageGrid>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/redflowers.jpeg'} alt='Red flowers'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/purpleflowers.jpeg'} alt='Purple flowers'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/flowers.jpeg'} alt='Sketch of flowers'/>
            <br/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/orangeflowers.jpeg'} alt='Orange flowers'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/whiteflowers.jpeg'} alt='White flowers'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/dancer1.jpeg'} alt='Sketch of a dancer'/>
            <br/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/dancer2.jpeg'} alt='Sketch of a dancer'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/dancer3.jpeg'} alt='Sketch of a dancer'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/dancer4.jpeg'} alt='Sketch of a dancer'/>
            <br/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/buddha.jpeg'} alt='Painting of Buddha'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/sydney.jpeg'} alt='The Sydney Opera House'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/tajmahal.jpeg'} alt='The Taj Mahal'/>
            <br/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/gates.jpeg'} alt='The Van Wickle Gates'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/moonflowers.jpeg'} alt='Sketch of flowers'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/motif.jpeg'} alt='Sketch of a motif'/>
            <br/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/stilllife1.jpeg'} alt='Still life'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/stilllife2.jpeg'} alt='Still life'/>
            <img style={{width: '20rem', padding: '1rem', }} src={process.env.PUBLIC_URL + '/lantern.jpeg'} alt='Sketch of a lantern'/>
        </imageGrid>
    </div>
    <br/>
	</div>
);
};

export default Art;
