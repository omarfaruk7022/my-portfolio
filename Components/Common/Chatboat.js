import { useEffect, useRef, useState } from "react";
import chatImage from "@/assets/Images/chatbot.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

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
      return `
        <strong>I am your AI Assistant of Muhammad Omar Faruk</strong>, here to guide you through this portfolio and tell you about me and my work.
        <br><br>
        <strong>Occupation:</strong> Frontend Developer at <strong>Bdtask Limited</strong><br>
        <strong>Technologies I specialize in:</strong><br>
        - ReactJS<br>
        - Next.js<br>
        - Tailwind CSS<br><br>
        <strong>Years of Experience:</strong> 3.5+ years<br><br>
        <strong>Role/Responsibilities:</strong><br>
        - Building and maintaining modern web applications<br>
        - Optimizing user interfaces for better user experience<br>
        - Working with frontend technologies like ReactJS, Next.js, and Tailwind CSS<br><br>
        
        Feel free to ask me more about my work or projects!
      `;
    }

    if (lowerCaseMsg.includes("purpose of this portfolio")) {
      return `
        <strong>The purpose of this portfolio</strong> is to showcase my development skills and the projects I’ve worked on. It serves as an introduction to my work and abilities as a frontend developer.
        <br><br>
        <strong>In this portfolio you’ll find:</strong><br>
        - Projects I’ve built<br>
        - Technologies I use<br>
        - Insights into my skills and experience<br><br>
        I’m constantly learning and evolving as a developer, and this portfolio reflects my progress.
      `;
    }

    if (lowerCaseMsg.includes("where are you working")) {
      return `
        I am currently working as a Frontend Developer at <strong>Bdtask Limited</strong>, where I specialize in:
        <br><br>
        - <strong>ReactJS</strong><br>
        - <strong>Next.js</strong><br>
        - <strong>Tailwind CSS</strong><br><br>
        My work involves building modern, dynamic web applications with a focus on high performance and user-friendly interfaces.
      `;
    }

    if (lowerCaseMsg.includes("what is your role")) {
      return `
        My role is to build, improve, and maintain the user interface and frontend functionality of web applications.
        <br><br>
        <strong>Responsibilities include:</strong><br>
        - Designing and developing web applications<br>
        - Ensuring smooth user experience through optimal performance<br>
        - Collaborating with backend developers and other team members<br>
        - Maintaining responsive design for multiple devices<br><br>
        My goal is to make web apps both functional and visually appealing.
      `;
    }

    if (
      lowerCaseMsg.includes("contact me") ||
      lowerCaseMsg.includes("how can i contact you") ||
      lowerCaseMsg.includes("contact info")
    ) {
      return `
        You can contact me via:
        <br><br>
        <strong>Email</strong>: <a href="mailto:omarfaruk7022@gmail.com" target="_blank" style="color: #1d72b8;">omarfaruk7022@gmail.com</a><br>
        <strong>LinkedIn</strong>: <a href="https://www.linkedin.com/in/omar-faruk7022/" target="_blank" style="color: #1d72b8;">Visit my LinkedIn profile</a><br><br>
        Feel free to reach out with any questions or opportunities!
      `;
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
        <div className="fixed bottom-16 right-2 w-[360px] bg-white  rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[350px]">
          {/* Header */}
          <h2 className="bg-gradient-to-l to-[#23CE6B] from-[#318554] text-white px-4 py-3 font-semibold text-lg">
            AI Assistant
          </h2>

          {/* Chat window */}
          <div className="flex-1 px-4 py-2 overflow-y-auto max-h-96 space-y-3 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thin">
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
            <div className="px-4 space-y-1 flex flex-col items-center h-20 ">
              <button
                onClick={() => setInput("who are you")}
                className="w-fit p-2 text-sm rounded-full text-black border hover:bg-gradient-to-l to-[#23CE6B] from-[#318554] hover:text-white"
              >
                Who are you?
              </button>
              <button
                onClick={() => setInput("purpose of this portfolio")}
                className="w-fit p-2 text-sm rounded-full text-black border hover:bg-gradient-to-l to-[#23CE6B] from-[#318554] hover:text-white"
              >
                Purpose of this portfolio
              </button>
              <button
                onClick={() => setInput("where are you working")}
                className="w-fit p-2 text-sm rounded-full text-black border hover:bg-gradient-to-l to-[#23CE6B] from-[#318554] hover:text-white"
              >
                Where are you working?
              </button>
              <button
                onClick={() => setInput("what is your role")}
                className="w-fit p-2 text-sm rounded-full text-black border hover:bg-gradient-to-l to-[#23CE6B] from-[#318554] hover:text-white"
              >
                What is your role?
              </button>
              <button
                onClick={() => setInput("how can i contact you")}
                className="w-fit p-2 text-sm rounded-full text-black border hover:bg-gradient-to-l to-[#23CE6B] from-[#318554] hover:text-white"
              >
                How can I contact you?
              </button>
            </div>

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
              className="flex-1 p-2 bg-transparent text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 w-full"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 py-2 bg-gradient-to-l to-[#23CE6B] from-[#318554]  text-white rounded-lg hover:bg-gradient-to-l hover:to-[#23CE6B] hover:from-[#318554] transition"
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
        className="fixed bottom-2 right-4 p-2 bg-gradient-to-l to-[#23CE6B] from-[#318554] text-white rounded-full shadow-lg hover:bg-green-500 transition"
      >
        {isChatVisible ? (
          <RxCross2 size={36} />
        ) : (
          <Image
            src={chatImage} // Add your AI image here
            alt="AI Icon"
            className="w-9 h-9 object-cover rounded-full"
          />
        )}
      </button>
    </div>
  );
}
