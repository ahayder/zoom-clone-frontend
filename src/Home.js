import React, { useState } from 'react';
import * as Chance from 'chance';
import './Home.css'
import { Button, Input } from '@material-ui/core';

const chance = new Chance();

const Home = ({ history }) => {
  const [roomId, setRoomId] = useState('');
  return (
    <div className="home">

      <div className="home__container">

        <div className="home__container__top">

          <Input
            className="input-box"
            type='text'
            placeholder="Meeting id"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          ></Input>

          <Button
            variant="contained"
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
          </Button>
        </div>


        <Button
          color="primary"
          variant="contained"
          type='button'
          onClick={() => {
            const id = chance.word();
            history.push(`/room/${id}`);
          }}
        >
          Start a New Meeting
      </Button>

      </div>
    </div>
  );
};

export default Home;