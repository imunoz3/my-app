import React, { Component } from 'react'
import ChatInput from './ChatInput'

import io from "socket.io-client";

class Chat extends Component {
  state = {
    name: 'Bob',
    chat: [],
  }

  ws = io('wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl', {path: "/flights"});

  componentDidMount() {
    this.ws.on("CHAT", (data) => {
      data.date = new Date(data.date).toLocaleDateString('en-GB')
      this.setState({
        chat: [...this.state.chat, data]
      });
    });

  }
  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    this.ws.emit("CHAT", { name: this.state.name, message: messageString })
  }

  renderChat() {
    const { chat } = this.state;
    return chat.map((data, idx) => (
      <div key={idx}>
        <span style={{ color: "green" }}>{data.name} ({data.date}): </span>
        <span>{data.message}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <ChatInput
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        <div>{this.renderChat()}</div>
      </div>
    )
  }
}

export default Chat
