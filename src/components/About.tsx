import React from 'react';
import { Users, Building2, MapPin, Trophy, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '2000+', label: 'Students Empowered', icon: Users },
    { number: '500+', label: 'Opportunities Created', icon: Trophy },
    { number: '150+', label: 'Partner Companies', icon: Building2 },
    { number: '50+', label: 'Expert Mentors', icon: Users }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Our Community Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white rounded-xl p-4 shadow-lg mr-4 float-animation card-3d">
              <img 
                src="/LOGO_KDKR.png" 
                alt="OUR KANDUKUR Community Logo" 
                className="w-16 h-16 rounded-lg object-contain"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 bounce-in">About Our Community</h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              OUR KANDUKUR is a vibrant startup community that serves as a bridge between students and the industry. 
              We provide comprehensive support through internships, workshops, hackathons, tech seminars, webinars, 
              and job opportunities to help students build successful careers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our community is built on the foundation of empowering students through three core areas: 
              Intellectual Capital, Financial Capital, and Social Capital. We believe in creating an ecosystem 
              where students can learn, grow, and thrive in their chosen fields.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Kandukur, Prakasam District, Andhra Pradesh, we have successfully created a network 
              of opportunities that connects talented students with leading companies and organizations across India.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 perspective-container">
          {stats.map((stat, index) => (
            <div key={index} className="text-center slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all card-3d pulse-glow">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Info */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-16 card-3d gradient-shift glass-effect">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3 bounce-in">
              <MapPin className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p>Kandukur, Prakasam District, AP</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Calendar className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Established</h3>
                <p>2023</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Users className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Community</h3>
                <p>2000+ Active Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Be part of a community that's transforming lives and creating opportunities. 
            Whether you're a student, professional, or organization, there's a place for you in OUR KANDUKUR.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Become a Member
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;