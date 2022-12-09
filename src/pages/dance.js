import React from 'react';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive"
  style={{
    overflow: 'hidden',
    paddingBottom: '56.25%',
    position: 'relative',
    height: 0,
  }}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Dance video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

const Dance = () => {
return (
	<div
	style={{
		display: 'flex',
        flexDirection: 'column',
		justifyContent: 'Left',
		alignItems: 'Center',
        alignText: 'Left',
		height: '100vh',
        fontFamily: 'Andale Mono',
        margin: '5rem'
	}}
	>
	<h1>Dance</h1>
    <div>
    <YoutubeEmbed embedId="19yFbcGwDhg"/>
    <YoutubeEmbed embedId="4BJr6HcxD9s"/>
    </div>
	</div>
);
};

export default Dance;


