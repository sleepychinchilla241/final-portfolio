import React from 'react';

const WebDev = () => {
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h1>React</h1>
        <p>About the project: This assignment involved developing a basic interactive webpage using React. The website was required to have a shopping cart that we could interact with, but there were no additional requirements. The goal was to familiarize us with using React and various tools within it. The final website has been embedded below. You can interact with it like you would with a normal website. </p>
        <iframe src="https://vandana-ramesh.github.io/react-studio/" title="description" style={{
            width: '80rem',
            height: '50rem',
        }}/>
    </div>
);
}

export default WebDev;