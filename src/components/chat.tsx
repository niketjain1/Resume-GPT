import { Message } from "ai";
import { ChatBubble } from "./chat-bubble";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Chat = () => {
  const messages: Message[] = [
    { role: "assistant", content: "Hello! I am your AI", id: "1" },
    { role: "user", content: "Hey, I am your user", id: "2" },
  ];

  const sources = ["I am source 1", "I am source 2"];

  return (
    <div className="rounded-2xl border h-[75vh] flex flex-col justify-between w-full">
      <div className="p-6 overflow-auto">
        {messages.map(({ id, role, content }) => (
          <ChatBubble
            key={id}
            sources={role !== "assistant" ? [] : sources}
            role={role}
            content={content}
          />
        ))}
      </div>

      <form className="p-4 flex clear-both">
        <Input placeholder={"Type to chat with AI..."} className="mr-2" />
        <Button type="submit" className="w-24">
          Ask
        </Button>
      </form>
    </div>
  );
};
