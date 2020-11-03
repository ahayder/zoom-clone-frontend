import React, { useEffect, useRef } from 'react';
import './Video.css'

const Video = ({ peer, name }) => {
  const refVideo = useRef(null);

  useEffect(() => {
    if (peer) {
      peer.on('stream', (stream) => {
        refVideo.current.srcObject = stream;
      });
    }
  }, [peer]);

  return (
    <div id="videoGrid">
      <video autoPlay ref={refVideo} playsInline />
      <span>{name}</span>
    </div>

    // <div className="videos">
    //   <div className="videos__container">
    //     <div id="videoGrid">
    //       <video autoPlay ref={refVideo} playsInline />
    //       <span>{name}</span>
    //     </div>
    //   </div>
    //   <div className="videos__controls">
    //     <FooterControls />
    //   </div>
    // </div>
  );
};

export default Video;