
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
};

const INITIAL_MESSAGES: Message[] = [
  { 
    id: 1, 
    text: "Hi there! I'm EmpowerBot, your assistant for navigating EmpowerHer Ventures. How can I help you today?", 
    isBot: true 
  }
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = useState('');
  
  const toggleChat = () => setIsOpen(!isOpen);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: newMessage,
      isBot: false,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponses = [
        "I'd be happy to help with that! Check out our Skill Development section for resources on this topic.",
        "Great question! You can practice that skill in our Try It Yourself section.",
        "Thanks for asking! The Test Your Skills section will help you evaluate your progress in that area.",
        "That's something we cover in our Business Skills module. Would you like me to guide you there?",
        "Our Creative Skills workshops might be perfect for what you're looking for!",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: Date.now(),
        text: randomResponse,
        isBot: true,
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 shadow-xl animate-fade-in">
          <div className="flex items-center justify-between bg-primary p-3 text-primary-foreground rounded-t-lg">
            <h3 className="font-semibold">EmpowerBot</h3>
            <Button size="icon" variant="ghost" onClick={toggleChat} className="h-8 w-8 text-primary-foreground hover:bg-primary/90">
              <X size={18} />
            </Button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "p-3 rounded-lg max-w-[80%]",
                  message.isBot 
                    ? "bg-muted self-start rounded-bl-none" 
                    : "bg-primary text-primary-foreground self-end rounded-br-none"
                )}
              >
                {message.text}
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <input 
              type="text" 
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)} 
              placeholder="Type your message..." 
              className="flex-1 bg-background border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" size="sm">Send</Button>
          </form>
        </Card>
      ) : (
        <Button 
          className="h-14 w-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl bg-primary"
          onClick={toggleChat}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
