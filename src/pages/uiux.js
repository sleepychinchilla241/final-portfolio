import React from 'react';
import { useState } from 'react';
import { Button } from '@mui/material';
import './style.css';
import Personas from './personas';
import WebDev from './webdev';
import Redesign from './responsive';
import Development from './development';

const UIUX = () => {

    const [displayPersonas, setDisplayPersonas] = useState(false);
    const handleChangePersonas = () => {
        setDisplayPersonas(!displayPersonas);
        if(displayPersonas){
            setDisplayWebDev(false);
            setDisplayResponsive(false);
            setDisplayDevelopment(false);
            console.log(displayPersonas);
            console.log(displayWebDev);
            console.log(displayResponsive);
            console.log(displayDevelopment);
        }
    };

    const [displayWebDev, setDisplayWebDev] = useState(false);
    const handleChangeWebDev = () => {
        setDisplayWebDev(!displayWebDev);
        if(displayWebDev) {
            setDisplayPersonas(false);
            setDisplayResponsive(false);
            setDisplayDevelopment(false);
            console.log(displayPersonas);
            console.log(displayWebDev);
            console.log(displayResponsive);
            console.log(displayDevelopment);
        }
    };

    const [displayResponsive, setDisplayResponsive] = useState(false);
    const handleChangeResponsive = () => {
        setDisplayResponsive(!displayResponsive);
        if(displayResponsive) {
            setDisplayPersonas(false);
            setDisplayWebDev(false);
            setDisplayDevelopment(false);
            console.log(displayPersonas);
            console.log(displayWebDev);
            console.log(displayResponsive);
            console.log(displayDevelopment);
        }
    };

    const [displayDevelopment, setDisplayDevelopment] = useState(false);
    const handleChangeDevelopment = () => {
        setDisplayDevelopment(!displayDevelopment);
        if(displayDevelopment){
            setDisplayPersonas(false);
            setDisplayWebDev(false);
            setDisplayResponsive(false);
            console.log(displayPersonas);
            console.log(displayWebDev);
            console.log(displayResponsive);
            console.log(displayDevelopment);
        }
    };

    let displayPage = (dispPersonas, dispWebDev, dispResponsive, dispDevelopment) => {
        if (dispPersonas) {
            return (<Personas/>);
        } else if (dispWebDev) {
            return (<WebDev/>);
        } else if (dispResponsive) {
            return (<Redesign/>);
        } else if (dispDevelopment) {
            return (<Development/>);
        } else {
            return (<p>Click on a button above to learn more about the assignment!</p>);
        }
    };

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
	<h1> UIUX Portfolio </h1>
    <p> In the Fall of 2022, I took a course on User Interfaces and User Experiences at Brown University. Over the course of the semester, we completed several assignments, each of which explored a different aspect of the subject. Linked below are some of these assignments. Click on the corresponding button to learn more about each assignment. </p>
    <div style={{display:'flex', justifyContent:'center', flexDirection: 'column', alignItems:'center',}}>
        <linkGrid style={{display:'grid', gridTemplateColumns:'auto auto', gridGap:'1rem 5rem', marginBottom:'2rem', justifyContent:'center',}}>
            <Button sx={{backgroundColor: '#e8e8e8', display:'flex', flexDirection:"column", alignItems:'center', alignText:'center', width:'30rem', padding:'2rem', fontFamily:'Andale Mono', color:'black',}} onClick={handleChangePersonas}>
                <h3>Personas and Storyboarding</h3><br/>
                <p>Exploring the mind and mentality of the user through observations and interviews.</p>
            </Button>
            <Button sx={{backgroundColor: '#e8e8e8', display:'flex', flexDirection:"column", alignItems:'center', alignText:'center', width:'30rem', padding:'2rem', fontFamily:'Andale Mono', color:'black',}} onClick={handleChangeResponsive}>
                <h3>Responsive Redesign</h3>
                <p>Redesigning an existing website to be more user-friendly, accessible, and usable across platforms</p>
            </Button>
            <Button sx={{backgroundColor: '#e8e8e8', display:'flex', flexDirection:"column", alignItems:'center', alignText:'center', width:'30rem', padding:'2rem', fontFamily:'Andale Mono', color:'black',}} onClick={handleChangeWebDev}>
                <h3>React</h3><br/>
                <p>Developing an interactive website using React</p>
            </Button>
            <Button sx={{backgroundColor: '#e8e8e8', display:'flex', flexDirection:"column", alignItems:'center', alignText:'center', width:'30rem', padding:'2rem', fontFamily:'Andale Mono', color:'black',}} onClick={handleChangeDevelopment}>
                <h3>Development</h3>
                <p>Developing an interactive website using React</p> 
            </Button>
        </linkGrid>
        <div style={{padding:'5rem',}}>
            {displayPage(displayPersonas, displayWebDev, displayResponsive, displayDevelopment)}
        </div>
    </div>
	</div>
);
};

export default UIUX;
