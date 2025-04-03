import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { sender: "User", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "AI", text: "I'm a simple AI bot. How can I help you?" },
      ]);
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">
        AI Chatbot
      </h2>
      
      <div className="h-80 overflow-y-auto border p-4 mb-4 rounded-lg bg-gray-100 dark:bg-gray-700">
        {messages.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">Start a conversation...</p>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                msg.sender === "User" ? "bg-blue-500 text-white self-end" : "bg-gray-300 text-black"
              }`}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input Field */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
