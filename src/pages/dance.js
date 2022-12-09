import React from 'react';
import YoutubeEmbed from './styles';

const Dance = () => {
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
	<h1>Dance</h1>
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center',}}>
        <p> I have trained in South Asian classical dance for several years, and am a proud member of Brown's premier South Asian classical dance team, Abhinaya. Linked below are some videos from the team's performances. Visit our YouTube channel to see more videos! </p>
        <br/>
        <YoutubeEmbed embedId="19yFbcGwDhg"/>
        <br/>
        <YoutubeEmbed embedId="4BJr6HcxD9s"/>
        <br/>
        <p style={{fontSize: '8px',}}> I have intentionally avoided linking more vidoes to preserve anonymity for this submission. </p>
    </div>
	</div>
);
};

export default Dance;


