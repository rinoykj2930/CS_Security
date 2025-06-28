import "./App.css";

function App() {
  
  const user = {
    displayName: "John Doe",
    photoURL: "https://randomuser.me/api/portraits/men/1.jpg",
    uid: "123"
  };

  const messages = [
    {
      id: "1",
      data: {
        uid: "123",
        photoURL: "https://randomuser.me/api/portraits/men/1.jpg",
        displayName: "John Doe",
        message: "Hey there! How are you doing?",
        timestamp: new Date()
      }
    },
    {
      id: "2",
      data: {
        uid: "456",
        photoURL: "https://randomuser.me/api/portraits/women/2.jpg",
        displayName: "Jane Smith",
        message: "I'm good, thanks! Just working on some projects.",
        timestamp: new Date()
      }
    },
    {
      id: "3",
      data: {
        uid: "123",
        photoURL: "https://randomuser.me/api/portraits/men/1.jpg",
        displayName: "John Doe",
        message: "That sounds interesting. What kind of projects?",
        timestamp: new Date()
      }
    }
  ];

  return (
    <div className="app">
      
      <>
        <div>
          <span>Logged in as {user.displayName}</span>
          <button className="sign-out-button">
            Sign Out
          </button>
        </div>

        <div className="message-container">
          {messages.map((message) => (
            <div className="message-item" key={message.id}>
              <img
                src={message.data.photoURL}
                alt={message.data.displayName}
              />
              <div className="message-content">
                <p>{message.data.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            placeholder="Type a message..."
          />
          <button className="send-button">
            Send
          </button>
        </div>
      </>
    </div>
  );
}

export default App;