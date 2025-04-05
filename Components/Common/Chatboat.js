import { useEffect, useRef, useState } from "react";
import chatImage from "@/assets/Images/chatbot.png";
import Image from "next/image";
export default function Chatbot() {
  const [messages, setMessages] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("chat_messages");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [isChatVisible, setIsChatVisible] = useState(false); // State to control visibility

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add the user's message to the messages array
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Get the AI's response from predefined answers or API
    const responseMessage = await handleUserMessage(input);

    // Add the assistant's response to the messages array
    setMessages([
      ...newMessages,
      { role: "assistant", content: responseMessage },
    ]);

    setLoading(false);
  };

  const handleUserMessage = async (msg) => {
    // Convert message to lowercase for case-insensitive comparison
    const lowerCaseMsg = msg.toLowerCase();

    // Predefined responses
    if (lowerCaseMsg.includes("who are you")) {
      return "I am your AI Assistant of Muhammad Omar Faruk, here to guide you through this portfolio and tell you about me and my work.";
    }

    if (lowerCaseMsg.includes("purpose of this portfolio")) {
      return "The purpose of this portfolio is to showcase my development skills and the projects I’ve worked on. It serves as an introduction to my work and abilities as a frontend developer.";
    }

    if (lowerCaseMsg.includes("where are you working")) {
      return "I am currently working as a Frontend Developer at Bdtask Limited, specializing in ReactJS, Next.js, and Tailwind CSS, where I help build modern, dynamic web applications.";
    }

    if (lowerCaseMsg.includes("what is your role")) {
      return "I am a frontend developer working on user interfaces, optimizing user experiences, and ensuring the performance of web applications.";
    }
    if (
      lowerCaseMsg.includes("contact me") ||
      lowerCaseMsg.includes("how can i contact you")
    ) {
      return "You can contact me via email at: <a href='mailto:omarfaruk7022@gmail.com' class='text-blue-500 hover:underline'>omarfaruk7022@gmail.com</a> or connect with me on LinkedIn: <a href='https://www.linkedin.com/in/muhammad-omar-faruk' target='_blank' class='text-blue-500 hover:underline'>Muhammad Omar Faruk</a>";
    }

    // If the message does not match any of the predefined answers, call the chat API
    return await callChatAPI(msg);
  };

  // Function to call the chat API (assuming it's set up already)
  const callChatAPI = async (message) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("Error calling chat API:", error);
      return "Sorry, something went wrong. Please try again later.";
    }
  };

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isChatVisible]);

  return (
    <div>
      {/* Chat UI */}
      {isChatVisible && (
        <div className="fixed bottom-12 right-12 w-[360px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <h2 className="bg-gradient-to-l to-[#23CE6B] from-[#318554] text-white px-4 py-3 font-semibold text-lg">
            AI Assistant
          </h2>

          {/* Chat window */}
          <div className="flex-1 px-4 py-2 overflow-y-auto max-h-80 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex  ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <span
                  className={`px-4 py-2 rounded-xl text-sm  ${
                    msg.role === "user"
                      ? "bg-gradient-to-l to-[#23CE6B] from-[#318554] text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: msg.content }} 
                >
                  {/* {msg.content} */}
                </span>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-xl rounded-bl-none text-sm flex items-center space-x-1">
                  <div className="dot-flashing" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-gray-200 px-3 py-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-gradient-to-l to-[#23CE6B] from-[#318554] hover:bg-gradient-to-r hover:to-[#23CE6B] text-white rounded-lg hover:bg-green-600 transition"
            >
              Send
            </button>
          </div>

          {/* Dots animation style */}
          <style jsx>{`
            .dot-flashing {
              position: relative;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #555;
              color: #555;
              animation: dotFlashing 1s infinite linear alternate;
              animation-delay: 0.3s;
            }
            .dot-flashing::before,
            .dot-flashing::after {
              content: "";
              display: inline-block;
              position: absolute;
              top: 0;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #555;
              color: #555;
            }
            .dot-flashing::before {
              left: -12px;
              animation: dotFlashing 1s infinite linear alternate;
              animation-delay: 0s;
            }
            .dot-flashing::after {
              left: 12px;
              animation: dotFlashing 1s infinite linear alternate;
              animation-delay: 0.6s;
            }
            @keyframes dotFlashing {
              0% {
                background-color: #bbb;
              }
              50%,
              100% {
                background-color: #555;
              }
            }

            .scrollbar-thin {
              scrollbar-width: thin; /* Firefox */
              scrollbar-color: black; /* Firefox */
            }

            .scrollbar-thin::-webkit-scrollbar {
              width: 8px; /* For Chrome, Safari, and Opera */
            }

            .scrollbar-thin::-webkit-scrollbar-thumb {
              background-color: #4caf50;
              border-radius: 8px;
            }

            .scrollbar-thin::-webkit-scrollbar-track {
              background-color: #e0e0e0;
            }

            .scrollbar-thin::-webkit-scrollbar-thumb:hover {
              background-color: #388e3c;
            }
          `}</style>
        </div>
      )}

      {/* Toggle Chat Button */}
      <button
        onClick={() => setIsChatVisible((prev) => !prev)}
        className="fixed bottom-4 right-4 p-2 bg-gradient-to-l to-[#23CE6B] from-[#318554] text-white rounded-full shadow-lg hover:bg-green-500 transition"
      >
        <Image
          src={chatImage} // Add your AI image here
          alt="AI Icon"
          className="w-8 h-8 object-cover rounded-full "
        />
      </button>
    </div>
  );
}
