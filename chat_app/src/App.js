import { useState, useRef, useEffect } from 'react';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! 👋 Interested in new bouquets? I can answer any of your questions.', sender: 'bot', time: '12:44' },
    { id: 2, text: 'Hello, do you have tulips available?', sender: 'user', time: '12:45' },
    { id: 3, text: 'There was a fresh delivery yesterday, how many are you interested in?', sender: 'bot', time: '12:46' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMsg]);
    setInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={styles.bgContainer}>
      <div style={styles.chatContainer}>
        <div style={styles.header}>
          <div>
            <strong>Shopee ABANG</strong>
            <div style={styles.subheader}>Tanyakan apapun tentang shopee, ABANG siap membantu kamu!</div>
          </div>
        </div>
        <div style={styles.chatBody}>
          {messages.map((msg) => (
            <div key={msg.id} style={{
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}>
              <div style={{
                ...styles.bubble,
                backgroundColor: msg.sender === 'user' ? '#ee4d2d' : '#fff',
                color: msg.sender === 'user' ? '#fff' : '#000'
              }}>
                {msg.text}
                <div style={{
                  ...styles.timestamp, 
                  color: msg.sender === 'user' ? '#fff' : '#000'}}>{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div style={styles.inputArea}>
          <span style={styles.icon}>📎</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Your message"
            style={styles.input}
          />
          <button onClick={handleSend} style={styles.sendButton}>SEND</button>
        </div>
      </div>

    </div>
  );
}

const styles = {
  bgContainer:{
    backgroundImage: 'url("https://i.ibb.co.com/j9xtjCsJ/Screenshot-2025-04-24-at-15-35-37.png")',
    backgroundColor: 'rgba(255,255,255,0.6)',
    backgroundSize: '100vw 100vh',
    backgroundBlendMode: 'lighten',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatContainer: {
    maxWidth: '400px',
    margin: '2rem auto',
    marginTop: '0',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    border: '1px solid #ddd',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#ee4d2d',
    color: '#fff',
    padding: '12px 16px',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  subheader: {
    fontSize: '12px',
    marginTop: '4px'
  },
  callIcon: {
    backgroundColor: '#fff',
    color: '#2563EB',
    borderRadius: '50%',
    padding: '6px'
  },
  chatBody: {
    backgroundColor: '#EFF6FF',
    padding: '12px 16px',
    height: '400px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  bubble: {
    padding: '10px 14px',
    borderRadius: '20px',
    fontSize: '14px',
    maxWidth: '70%',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  timestamp: {
    fontSize: '10px',
    marginTop: '6px',
    textAlign: 'right',
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    padding: '10px 16px',
    gap: '8px',
    backgroundColor: '#fff',
  },
  icon: {
    fontSize: '18px',
    color: '#888',
    cursor: 'pointer'
  },
  input: {
    flex: 1,
    padding: '8px 12px',
    borderRadius: '12px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  sendButton: {
    backgroundColor: '#ee4d2d',
    border: 'none',
    color: '#fff',
    borderRadius: '12px',
    padding: '8px 10px',
    cursor: 'pointer'
  },
  footer: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#888',
    padding: '8px',
    borderTop: '1px solid #f0f0f0'
  }
};

export default App;