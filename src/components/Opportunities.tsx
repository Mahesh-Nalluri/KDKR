import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Filter, Search } from 'lucide-react';

const Opportunities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Opportunities' },
    { id: 'internships', label: 'Internships' },
    { id: 'jobs', label: 'Jobs' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'hackathons', label: 'Hackathons' },
    { id: 'seminars', label: 'Seminars' },
    { id: 'webinars', label: 'Webinars' }
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Full Stack Developer Internship',
      company: 'TechCorp Solutions',
      location: 'Hyderabad, India',
      type: 'internships',
      status: 'open',
      deadline: '2024-01-15',
      description: 'Join our team for a 6-month internship focusing on React and Node.js development.',
      requirements: ['React', 'Node.js', 'MongoDB'],
      stipend: '₹15,000/month'
    },
    {
      id: 2,
      title: 'AI/ML Workshop Series',
      company: 'DataScience Academy',
      location: 'Online',
      type: 'workshops',
      status: 'open',
      deadline: '2024-01-20',
      description: 'Comprehensive workshop series on Machine Learning and AI fundamentals.',
      requirements: ['Python', 'Statistics', 'Basic ML'],
      stipend: 'Free'
    },
    {
      id: 3,
      title: 'Backend Developer Position',
      company: 'StartupHub',
      location: 'Bangalore, India',
      type: 'jobs',
      status: 'closed',
      deadline: '2023-12-30',
      description: 'Full-time backend developer role with competitive salary and benefits.',
      requirements: ['Java', 'Spring Boot', 'PostgreSQL'],
      stipend: '₹8-12 LPA'
    },
    {
      id: 4,
      title: 'Blockchain Hackathon 2024',
      company: 'CryptoInnovate',
      location: 'Mumbai, India',
      type: 'hackathons',
      status: 'open',
      deadline: '2024-01-25',
      description: '48-hour hackathon focusing on blockchain solutions for social good.',
      requirements: ['Blockchain', 'Smart Contracts', 'Web3'],
      stipend: '₹1,00,000 Prize Pool'
    },
    {
      id: 5,
      title: 'Cloud Computing Seminar',
      company: 'CloudTech Institute',
      location: 'Chennai, India',
      type: 'seminars',
      status: 'open',
      deadline: '2024-01-18',
      description: 'Expert-led seminar on AWS, Azure, and Google Cloud platforms.',
      requirements: ['Basic Cloud Knowledge'],
      stipend: '₹500'
    },
    {
      id: 6,
      title: 'Digital Marketing Webinar',
      company: 'MarketingPro',
      location: 'Online',
      type: 'webinars',
      status: 'open',
      deadline: '2024-01-22',
      description: 'Learn advanced digital marketing strategies from industry experts.',
      requirements: ['Basic Marketing Knowledge'],
      stipend: 'Free'
    }
  ];

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesCategory = selectedCategory === 'all' || opportunity.type === selectedCategory;
    const matchesSearch = opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    return status === 'open' ? (
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
        Open
      </span>
    ) : (
      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
        Closed
      </span>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest internships, jobs, workshops, and events updated daily
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search opportunities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-3d slide-in-up">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full pulse-glow">
                    {opportunity.type.charAt(0).toUpperCase() + opportunity.type.slice(1)}
                  </span>
                  {getStatusBadge(opportunity.status)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.company}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Deadline: {opportunity.deadline}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {opportunity.stipend}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{opportunity.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.requirements.map((req, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {req}
                    </span>
                  ))}
                </div>

                <button 
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all ${
                    opportunity.status === 'open'
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={opportunity.status === 'closed'}
                >
                  {opportunity.status === 'open' ? 'Apply Now' : 'Application Closed'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No opportunities found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Opportunities;