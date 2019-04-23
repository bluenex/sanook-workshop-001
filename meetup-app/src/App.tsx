import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // show alert with input values
    alert(`
    Hi ${name}!
    Email: ${email}
    Message: ${message}
    `);
    // reset value in the state
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <Container>
      <div>
        <h3>Hi there!</h3>
        <form onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            rows={4}
            placeholder="Message"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          >
          </textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </Container>
  );
}

export default App;
