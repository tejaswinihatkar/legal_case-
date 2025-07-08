
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageSquare, Send, Bot, User, Globe, BookOpen, Scale, Heart } from 'lucide-react';

const LegalChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your Legal AI Assistant. I can help you with legal advice, explain case stories, and provide guidance in multiple languages. How can I assist you today?',
      timestamp: '10:00 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [chatMode, setChatMode] = useState('advice');

  const languages = [
    { value: 'english', label: 'English', flag: '🇺🇸' },
    { value: 'hindi', label: 'Hindi', flag: '🇮🇳' },
    { value: 'marathi', label: 'Marathi', flag: '🇮🇳' },
    { value: 'gujarati', label: 'Gujarati', flag: '🇮🇳' },
    { value: 'bengali', label: 'Bengali', flag: '🇮🇳' },
    { value: 'tamil', label: 'Tamil', flag: '🇮🇳' },
  ];

  const quickQuestions = [
    "What are my rights as a tenant?",
    "How to file a consumer complaint?",
    "What is the process for divorce?",
    "How to register an FIR?",
    "Employment rights in India",
    "Property documentation needed"
  ];

  const caseStories = [
    {
      title: "The Digital Privacy Victory",
      category: "Cyber Law",
      summary: "How a small business owner fought against unauthorized data collection and won..."
    },
    {
      title: "Justice for the Common Worker",
      category: "Employment Law",
      summary: "A construction worker's fight against wage theft that changed labor laws..."
    },
    {
      title: "The Family Reunion",
      category: "Family Law",
      summary: "A heartwarming custody case that brought a divided family back together..."
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: getBotResponse(inputMessage, chatMode, selectedLanguage),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const getBotResponse = (message, mode, language) => {
    if (mode === 'story') {
      return `Let me tell you a story about a similar case... Once upon a time, there was a person facing a legal challenge just like yours. Through determination and proper legal guidance, they were able to resolve their issue successfully. Here's how they did it: [Story continues based on your specific question about "${message}"]`;
    }
    
    const responses = {
      english: `I understand you're asking about "${message}". Based on Indian law, here are the key points you should know: 1) Your legal rights in this matter, 2) The proper procedure to follow, 3) Required documentation, and 4) Timeline expectations. Would you like me to elaborate on any of these points?`,
      hindi: `मैं समझ गया हूँ कि आप "${message}" के बारे में पूछ रहे हैं। भारतीय कानून के अनुसार, यहाँ मुख्य बातें हैं जो आपको जानना चाहिए: 1) इस मामले में आपके कानूनी अधिकार, 2) अनुसरण करने की उचित प्रक्रिया, 3) आवश्यक दस्तावेज़, और 4) समयसीमा की अपेक्षाएं।`,
      marathi: `मला समजले आहे की तुम्ही "${message}" विषयी विचारत आहात। भारतीय कायद्यानुसार, तुम्हाला या मुख्य गोष्टी माहित असाव्यात: 1) या प्रकरणात तुमचे कायदेशीर हक्क, 2) पाळावयाची योग्य कार्यपद्धती, 3) आवश्यक कागदपत्रे, आणि 4) वेळेची अपेक्षा।`
    };

    return responses[language] || responses.english;
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
  };

  return (
    <div className="space-y-6">
      {/* Chat Mode Selection */}
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="flex-1 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Chat Mode:</span>
              </div>
              <Select value={chatMode} onValueChange={setChatMode}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  <SelectItem value="advice">Legal Advice</SelectItem>
                  <SelectItem value="story">Case Stories</SelectItem>
                  <SelectItem value="guidance">Step-by-Step Guidance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-300" />
                <span className="text-white font-medium">Language:</span>
              </div>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20">
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      {lang.flag} {lang.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-[600px] flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center">
                    <Bot className="h-5 w-5 mr-2" />
                    Legal AI Assistant
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    {chatMode === 'story' ? 'Story Mode - Cases as narratives' : 
                     chatMode === 'guidance' ? 'Guidance Mode - Step-by-step help' : 
                     'Advice Mode - Direct legal assistance'}
                  </CardDescription>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Online
                </Badge>
              </div>
            </CardHeader>
            
            {/* Messages Area */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.type === 'bot' && <Bot className="h-4 w-4 mt-1 text-blue-300" />}
                      {message.type === 'user' && <User className="h-4 w-4 mt-1" />}
                      <div className="flex-1">
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-2">{message.timestamp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Input Area */}
            <div className="p-4 border-t border-white/20">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask your legal question..."
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Questions */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Quick Questions</CardTitle>
              <CardDescription className="text-blue-200">
                Common legal queries
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-full text-left justify-start border-white/20 text-blue-200 hover:bg-white/10 hover:text-white text-xs"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Case Stories */}
          {chatMode === 'story' && (
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-lg flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Popular Case Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {caseStories.map((story, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                    >
                      <h4 className="font-medium text-white text-sm mb-1">{story.title}</h4>
                      <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs mb-2">
                        {story.category}
                      </Badge>
                      <p className="text-blue-200 text-xs">{story.summary}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Features */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">AI Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Scale className="h-4 w-4 text-blue-300" />
                  <span className="text-blue-200 text-sm">Legal Advice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-4 w-4 text-green-300" />
                  <span className="text-blue-200 text-sm">Case Stories</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-purple-300" />
                  <span className="text-blue-200 text-sm">Multi-language</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-4 w-4 text-pink-300" />
                  <span className="text-blue-200 text-sm">Simplified Guidance</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LegalChatbot;
