import React from 'react'
import './RightColumn.css'

function RightColumn() {
  return (
    <div className="rightColumn">
      <div class="rightColumn__header">
        <h6>Chat</h6>
      </div>
      <div class="rightColumn__chat_window">
        <ul class="messages">

        </ul>

      </div>
      <div class="rightColumn__message_container">
        <input id="chat_message" type="text" placeholder="Type message here..." />
      </div>
    </div>
  )
}

export default RightColumn
