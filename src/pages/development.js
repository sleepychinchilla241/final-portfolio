import React from 'react';

const Development = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h1>Development</h1>
            <p>About the project: This assignment involved developing an interactive webpage using React. The website was required to have the following features: filtering the content, sorting the content, and adding and removing the content from an aggregator like a shopping cart. The final website has been embedded below. You can interact with it like you would with a normal website. To view the website separately (or if you are having trouble viewing and interacting with the embedded website), click on <a href="https://sleepychinchilla241.github.io/uiuxassignment5/">this link</a>. <br/>
            <br/> This is an extension of the website I redesigned for the Responsive Redesign assignment - the Bagel Gourmet website. I'd redesigned the menu page for Responsive Redesign, and decided to implement part of an online ordering page for the restaurant chain for this assignment. My main issue with the original website was the small font size and the confusing organization. In addition to resolving these issues, I implemented various filtering features and sorting features to make the interface simpler for customers to use. This website is a sample of what I intend the finished ordering page to look like, and only contains a subset of the menu items offered by the restaurant.</p>
            <iframe src="https://sleepychinchilla241.github.io/uiuxassignment5/" title="description" style={{
                width: '80rem',
                height: '50rem',
            }}/>
        </div>
    );
};

export default Development;