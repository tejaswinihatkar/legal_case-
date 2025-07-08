
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Scale, MessageSquare, BookOpen, Search, Brain } from 'lucide-react';
import TrendAnalysis from './TrendAnalysis';
import CaseCategories from './CaseCategories';
import LegalChatbot from './LegalChatbot';
import CaseAnalyzer from './CaseAnalyzer';
import LegalLiteracy from './LegalLiteracy';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('trends');

  const stats = [
    { title: 'Cases Analyzed', value: '2,847', change: '+12%', icon: Scale },
    { title: 'Trends Identified', value: '34', change: '+8%', icon: TrendingUp },
    { title: 'Categories', value: '12', change: '+2%', icon: BookOpen },
    { title: 'Active Users', value: '1,234', change: '+23%', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">LegalTech Analytics</h1>
          <p className="text-blue-200">Advanced Legal Intelligence & Case Analysis Platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-200 text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                      {stat.change}
                    </Badge>
                  </div>
                  <stat.icon className="h-8 w-8 text-blue-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-white/10 backdrop-blur-sm border-white/20">
            <TabsTrigger value="trends" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Trends
            </TabsTrigger>
            <TabsTrigger value="categories" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Categories
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <MessageSquare className="w-4 h-4 mr-2" />
              AI Assistant
            </TabsTrigger>
            <TabsTrigger value="analyzer" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Brain className="w-4 h-4 mr-2" />
              Analyzer
            </TabsTrigger>
            <TabsTrigger value="literacy" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Scale className="w-4 h-4 mr-2" />
              Legal Guide
            </TabsTrigger>
            <TabsTrigger value="search" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Search className="w-4 h-4 mr-2" />
              Search
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="space-y-4">
            <TrendAnalysis />
          </TabsContent>

          <TabsContent value="categories" className="space-y-4">
            <CaseCategories />
          </TabsContent>

          <TabsContent value="chatbot" className="space-y-4">
            <LegalChatbot />
          </TabsContent>

          <TabsContent value="analyzer" className="space-y-4">
            <CaseAnalyzer />
          </TabsContent>

          <TabsContent value="literacy" className="space-y-4">
            <LegalLiteracy />
          </TabsContent>

          <TabsContent value="search" className="space-y-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Advanced Case Search</CardTitle>
                <CardDescription className="text-blue-200">
                  Search through our comprehensive case database
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">Advanced search functionality will be implemented here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
