
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Users, Globe, Heart, Scale, Search, Video, FileText, HelpCircle } from 'lucide-react';

const LegalLiteracy = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const languages = [
    { value: 'english', label: 'English', flag: '🇺🇸' },
    { value: 'hindi', label: 'Hindi', flag: '🇮🇳' },
    { value: 'marathi', label: 'Marathi', flag: '🇮🇳' },
    { value: 'gujarati', label: 'Gujarati', flag: '🇮🇳' },
    { value: 'bengali', label: 'Bengali', flag: '🇮🇳' },
    { value: 'tamil', label: 'Tamil', flag: '🇮🇳' },
  ];

  const legalGuides = [
    {
      id: 1,
      title: 'Consumer Rights & Protection',
      description: 'Know your rights as a consumer and how to file complaints',
      category: 'Consumer Law',
      difficulty: 'Beginner',
      readTime: '5 min',
      languages: ['english', 'hindi', 'marathi'],
      popular: true,
      icon: Scale
    },
    {
      id: 2,
      title: 'Employment Rights Guide',
      description: 'Understanding your workplace rights and labor laws',
      category: 'Labor Law',
      difficulty: 'Intermediate',
      readTime: '8 min',
      languages: ['english', 'hindi', 'gujarati'],
      popular: true,
      icon: Users
    },
    {
      id: 3,
      title: 'Property Documentation Basics',
      description: 'Essential documents needed for property transactions',
      category: 'Property Law',
      difficulty: 'Beginner',
      readTime: '6 min',
      languages: ['english', 'marathi', 'gujarati'],
      popular: false,
      icon: FileText
    },
    {
      id: 4,
      title: 'Family Law Essentials',
      description: 'Marriage, divorce, and family dispute guidance',
      category: 'Family Law',
      difficulty: 'Beginner',
      readTime: '7 min',
      languages: ['english', 'hindi', 'bengali'],
      popular: true,
      icon: Heart
    },
    {
      id: 5,
      title: 'Digital Privacy & Cyber Laws',
      description: 'Protecting yourself online and understanding cyber crimes',
      category: 'Cyber Law',
      difficulty: 'Intermediate',
      readTime: '10 min',
      languages: ['english', 'hindi', 'tamil'],
      popular: false,
      icon: Globe
    },
    {
      id: 6,
      title: 'How to File an FIR',
      description: 'Step-by-step guide to filing a First Information Report',
      category: 'Criminal Law',
      difficulty: 'Beginner',
      readTime: '4 min',
      languages: ['english', 'hindi', 'marathi', 'gujarati'],
      popular: true,
      icon: HelpCircle
    }
  ];

  const quickHelp = [
    {
      question: "How to file a consumer complaint?",
      answer: "Visit the National Consumer Helpline or file online at consumerhelpline.gov.in",
      category: "Consumer Law"
    },
    {
      question: "What documents are needed for property registration?",
      answer: "Sale deed, NOC, property card, identity proof, and stamp duty payment receipt",
      category: "Property Law"
    },
    {
      question: "How to report cyber crime?",
      answer: "File complaint at cybercrime.gov.in or visit nearest cyber crime police station",
      category: "Cyber Law"
    },
    {
      question: "What are basic employment rights?",
      answer: "Right to fair wages, safe working conditions, and freedom from discrimination",
      category: "Labor Law"
    }
  ];

  const filteredGuides = legalGuides.filter(guide => {
    const matchesLanguage = selectedLanguage === 'all' || guide.languages.includes(selectedLanguage);
    const matchesCategory = selectedCategory === 'all' || guide.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLanguage && matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm border-blue-300/30">
        <CardHeader>
          <CardTitle className="text-white text-2xl flex items-center">
            <BookOpen className="h-6 w-6 mr-3" />
            Legal Literacy Hub
          </CardTitle>
          <CardDescription className="text-blue-200 text-lg">
            Simplified legal guidance for everyone - Know your rights, understand the law
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Filters */}
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
              <Input
                placeholder="Search legal topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
              />
            </div>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/20">
                <SelectItem value="all">All Languages</SelectItem>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.flag} {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-white/20">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="consumer">Consumer Law</SelectItem>
                <SelectItem value="labor">Labor Law</SelectItem>
                <SelectItem value="property">Property Law</SelectItem>
                <SelectItem value="family">Family Law</SelectItem>
                <SelectItem value="cyber">Cyber Law</SelectItem>
                <SelectItem value="criminal">Criminal Law</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Legal Guides */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-white">Legal Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGuides.map((guide) => (
              <Card 
                key={guide.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <guide.icon className="h-8 w-8 text-blue-300" />
                    {guide.popular && (
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                        Popular
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                  <p className="text-blue-200 text-sm mb-4">{guide.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs">
                      {guide.category}
                    </Badge>
                    <Badge variant="outline" className="border-green-500/50 text-green-300 text-xs">
                      {guide.difficulty}
                    </Badge>
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
                      {guide.readTime}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {guide.languages.slice(0, 3).map((lang) => {
                        const langInfo = languages.find(l => l.value === lang);
                        return langInfo ? (
                          <span key={lang} className="text-xs">{langInfo.flag}</span>
                        ) : null;
                      })}
                      {guide.languages.length > 3 && (
                        <span className="text-blue-300 text-xs">+{guide.languages.length - 3}</span>
                      )}
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-xs"
                    >
                      Read Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Help */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Quick Help</CardTitle>
              <CardDescription className="text-blue-200">
                Common legal questions answered
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {quickHelp.map((item, index) => (
                  <div 
                    key={index}
                    className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
                  >
                    <h4 className="font-medium text-white text-sm mb-2">{item.question}</h4>
                    <p className="text-blue-200 text-xs mb-2">{item.answer}</p>
                    <Badge variant="outline" className="border-blue-500/50 text-blue-300 text-xs">
                      {item.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg">Legal Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-blue-200 hover:bg-white/10 hover:text-white"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Video Tutorials
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-blue-200 hover:bg-white/10 hover:text-white"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Legal Forms & Templates
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-blue-200 hover:bg-white/10 hover:text-white"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQ Section
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start border-white/20 text-blue-200 hover:bg-white/10 hover:text-white"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Government Portals
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Language Support */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-lg flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Language Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div 
                    key={lang.value}
                    className="flex items-center space-x-2 p-2 rounded bg-white/5 border border-white/10"
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-blue-200 text-sm">{lang.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-blue-300 text-xs mt-3 text-center">
                Legal guidance available in 6+ Indian languages
              </p>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="bg-red-500/10 backdrop-blur-sm border-red-300/30">
            <CardHeader>
              <CardTitle className="text-white text-lg">Emergency Legal Help</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-red-200">Police Emergency</span>
                  <span className="text-white font-semibold">100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200">Women Helpline</span>
                  <span className="text-white font-semibold">181</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200">Cyber Crime</span>
                  <span className="text-white font-semibold">1930</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-red-200">Legal Aid</span>
                  <span className="text-white font-semibold">15100</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LegalLiteracy;
