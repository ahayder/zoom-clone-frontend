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
    <>
      <video autoPlay ref={refVideo} playsInline />
      <span>{name}</span>
    </>
  );
};

export default Video;