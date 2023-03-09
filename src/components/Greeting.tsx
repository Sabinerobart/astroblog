import { useState } from "preact/hooks";

const randomMessage = (messages) =>
  messages[Math.floor(Math.random() * messages.length)];

export const Greeting = ({ messages }) => {
  const [greeting, setGreeting] = useState(randomMessage(messages));

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage(messages))}>
        New Greeting
      </button>
    </div>
  );
};

export default Greeting;
