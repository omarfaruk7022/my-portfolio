import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setMessages([...newMessages, { role: "assistant", content: data.reply }]);
  };

  return (
    <div className="fixed bottom-4 right-4 p-4 border rounded-lg w-80 bg-white shadow-md">
      <div className="h-60 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Ask me anything..."
      />
      <button
        onClick={sendMessage}
        className="mt-2 w-full p-2 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
}
