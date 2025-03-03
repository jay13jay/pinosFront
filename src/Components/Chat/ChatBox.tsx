import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const toggleChat = () => setIsOpen(!isOpen);
  const handleSend = () => {
    if (message.trim() === '') return;
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="fixed bottom-10 right-5 z-50">
      {isOpen ? (
        <div className="bg-gray-900 rounded-lg shadow-lg p-2 w-80">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
              ✖
            </button>
          </div>
          <div className="bg-gray-800 p-0.5 rounded-lg mb-2 max-h-60 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div key={idx} className="bg-gray-900 p-0.5 pl-2 rounded-lg mb-1 shadow-sm">{msg}</div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg"
              placeholder="Type a message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSend();
                }
              }}
            />
            <button onClick={handleSend} className="bg-green-500 text-white p-1 rounded-md hover:bg-green-600">
              Send
            </button>
          </div>
        </div>
      ) : (
        <button onClick={toggleChat} className="bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600">
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBox;
