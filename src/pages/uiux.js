import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const linkBox = styled(Link)`
color: whitesmoke;
display: flex;
align-items: center;
text-decoration: none;
width: 20rem;
padding: 1rem; 
height: 20rem;
cursor: pointer;
&.active {
	color: #000000;
}
`;

const UIUX = () => {
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
    <p> In the Fall of 2022, I took a course on User Interfaces and User Experiences at Brown University. Over the course of the semester, we completed several assignments, each of which explored a different aspect of the subject. Linked below are some of these assignments. </p>
    <linkGrid>
        <linkBox to="/personas">
            <div>
            <h2>Personas and Storyboarding</h2>
            <p>Exploring the mind and mentality of the user through observations and interviews.</p>
            </div>
            </linkBox>
            <linkBox to="/responsive">
            <div>
            <h2>Responsive Redesign</h2>
            <p>Redesigning an existing website to be more user-friendly, accessible, and usable across platforms</p>
            </div>
            </linkBox>
    </linkGrid>
	</div>
);
};

export default UIUX;
