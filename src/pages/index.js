import React from 'react';
import YoutubeEmbed from './styles';
import './style.css';

const Home = () => {
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
	<h1>Portfolio Website</h1>
    <p>Hi there! I'm a senior at Brown University. I like to dance, make art, and read! Click on the links in the navbar to learn more about my interests and UIUX experience!</p> 
    <br/>
    <p>Bad day? Check out these videos and pictures below! (PS: I couldn't embed videos from this channel, but I highly recommend Lucas the Spider on YouTube!)</p>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
        <YoutubeEmbed embedId="ZI-52YXkfs0"/>
        <br/>
        <YoutubeEmbed embedId="N0Jk_WdATNc"/>
        <br/>
        <YoutubeEmbed embedId="VJ3oZxEmSAI"/>
    </div>
    <br/>
    <div style={{display: 'flex', flexDirection:"column", alignItems:'center',}}>
        <imageGrid>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/dog1.jpeg'} alt='Dog'/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/cat1.jpeg'} alt='Cat'/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/elephant1.jpeg'} alt='Elephant'/>
            <br/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/dog2.jpeg'} alt='Dog'/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/elephant2.webp'} alt='Elephant'/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/dog3.jpeg'} alt='Dog'/>
            <br/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/cat2.jpeg'} alt='Cat'/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/dog4.jpeg'} alt='Dog'/>
            <img className='cuteImage' src={process.env.PUBLIC_URL + '/cat3.webp'} alt='Cat'/>
        </imageGrid>
        <br/>
        <p style={{fontSize: '12px',}}> Images courtesy of Google Images. All embedded videos are from public YouTube channels. </p>
    </div>
	</div>
);
};

export default Home;
