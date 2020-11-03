import React, { useState } from 'react';
import * as Chance from 'chance';
import './Home.css'

const chance = new Chance();

const Home = ({ history }) => {
  const [roomId, setRoomId] = useState('');
  return (
    <div className="home">

      <div className="home__container">

        <div className="home__container__top">

          <input
            type='text'
            placeholder="Meeting id"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          ></input>

          <button
            type='button'
            onClick={() => {
              if (!roomId) {
                alert('RoomId is required');
                return;
              }
              history.push(`/room/${roomId}`);
            }}
          >
            Join in a meeting
      </button>
        </div>


        <button
          type='button'
          onClick={() => {
            const id = chance.guid();
            history.push(`/room/${id}`);
          }}
        >
          Start a New Meeting
      </button>

      </div>
    </div>
  );
};

export default Home;