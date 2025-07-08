
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, FileText } from 'lucide-react';

const TrendAnalysis = () => {
  const [selectedTrend, setSelectedTrend] = useState('cyber');

  const trendData = [
    { month: 'Jan', cyber: 45, property: 67, family: 89, criminal: 123 },
    { month: 'Feb', cyber: 52, property: 71, family: 95, criminal: 118 },
    { month: 'Mar', cyber: 78, property: 65, family: 87, criminal: 134 },
    { month: 'Apr', cyber: 95, property: 73, family: 92, criminal: 142 },
    { month: 'May', cyber: 134, property: 69, family: 88, criminal: 156 },
    { month: 'Jun', cyber: 167, property: 77, family: 91, criminal: 149 },
  ];

  const emergingIssues = [
    {
      title: 'AI & Data Privacy Cases',
      change: '+145%',
      trend: 'up',
      description: 'Rapid increase in cases related to AI decision-making and data protection',
      urgency: 'high'
    },
    {
      title: 'Cryptocurrency Disputes',
      change: '+89%',
      trend: 'up',
      description: 'Growing number of disputes over digital asset transactions',
      urgency: 'medium'
    },
    {
      title: 'Remote Work Legal Issues',
      change: '+67%',
      trend: 'up',
      description: 'Employment law cases related to remote work arrangements',
      urgency: 'medium'
    },
    {
      title: 'Traditional Property Disputes',
      change: '-23%',
      trend: 'down',
      description: 'Decrease in conventional property-related cases',
      urgency: 'low'
    }
  ];

  const caseDistribution = [
    { name: 'Criminal', value: 35, color: '#ef4444' },
    { name: 'Civil', value: 28, color: '#3b82f6' },
    { name: 'Family', value: 20, color: '#10b981' },
    { name: 'Commercial', value: 17, color: '#f59e0b' },
  ];

  return (
    <div className="space-y-6">
      {/* Emerging Issues Alert */}
      <Card className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border-red-300/30">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <CardTitle className="text-white">Emerging Legal Trends Alert</CardTitle>
          </div>
          <CardDescription className="text-red-200">
            Critical patterns requiring immediate attention
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trend Chart */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Case Volume Trends</CardTitle>
            <CardDescription className="text-blue-200">
              Monthly case distribution by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="cyber" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="property" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="family" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="criminal" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Case Distribution */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Case Distribution</CardTitle>
            <CardDescription className="text-blue-200">
              Current breakdown by case type
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={caseDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {caseDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Emerging Issues List */}
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Emerging Legal Issues</CardTitle>
          <CardDescription className="text-blue-200">
            Patterns and trends requiring attention
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {emergingIssues.map((issue, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-white">{issue.title}</h3>
                    <Badge 
                      variant={issue.trend === 'up' ? 'destructive' : 'secondary'}
                      className={`${
                        issue.trend === 'up' 
                          ? 'bg-red-500/20 text-red-300 border-red-500/30' 
                          : 'bg-green-500/20 text-green-300 border-green-500/30'
                      }`}
                    >
                      {issue.trend === 'up' ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                      {issue.change}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={`${
                        issue.urgency === 'high' ? 'border-red-500/50 text-red-300' :
                        issue.urgency === 'medium' ? 'border-yellow-500/50 text-yellow-300' :
                        'border-green-500/50 text-green-300'
                      }`}
                    >
                      {issue.urgency} priority
                    </Badge>
                  </div>
                  <p className="text-blue-200 text-sm">{issue.description}</p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-blue-500/50 text-blue-300 hover:bg-blue-500/20"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendAnalysis;
