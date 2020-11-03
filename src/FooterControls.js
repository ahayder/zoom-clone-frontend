import React from 'react'
import './FooterControls.css'
import MicOffIcon from '@material-ui/icons/MicOff'
import StopIcon from '@material-ui/icons/Stop'
import SecurityIcon from '@material-ui/icons/Security'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'

function FooterControls() {
  return (
    <div className="controls">
      <div class="controls__block">
        <div class="controls__button">
          <MicOffIcon />
          <span>Mute</span>
        </div>
        <div class="controls__button">
          <StopIcon />
          <span>Stop Video</span>
        </div>
      </div>
      <div class="controls__block">
        <div class="controls__button">
          <SecurityIcon />
          <span>Security</span>
        </div>
        <div class="controls__button">
          <PeopleIcon />
          <span>Participants</span>
        </div>
        <div class="controls__button">
          <ChatIcon />
          <span>Chat</span>
        </div>
      </div>
      <div class="controls__block">
        <div class="controls__button">
          <span class="leave_meeting">Leave Meeting</span>
        </div>
      </div>
    </div>
  )
}

export default FooterControls