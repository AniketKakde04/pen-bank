
import React from 'react';
import { Award, Trophy, Star, Medal, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const achievements = [
  {
    title: "Swachh Bharat Excellence Award",
    year: "2024",
    organization: "Ministry of Housing and Urban Affairs",
    description: "Recognized for innovative waste management solutions in educational institutions",
    icon: Trophy,
    color: "bg-amber-100",
    iconColor: "text-amber-600"
  },
  {
    title: "National Green Champion",
    year: "2023",
    organization: "Ministry of Environment, Forest and Climate Change",
    description: "Awarded for promoting sustainable practices and environmental consciousness",
    icon: Award,
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Social Impact Award",
    year: "2023",
    organization: "NITI Aayog",
    description: "Honored for creating sustainable employment opportunities for artisans",
    icon: Star,
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Circular Economy Pioneer",
    year: "2022",
    organization: "Federation of Indian Chambers of Commerce & Industry",
    description: "Recognized for implementing circular economy principles in waste management",
    icon: Medal,
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

const Recognition = () => {
  return (
    <section id="recognition" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Recognition & Achievements</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Our commitment to environmental sustainability and social impact has been recognized by leading organizations across India.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 flex gap-6">
                <div className={`${achievement.color} w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <achievement.icon className={`h-10 w-10 ${achievement.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-penBank-green-dark mb-2">{achievement.title}</h3>
                  <p className="text-penBank-brown mb-2 font-semibold">{achievement.year} • {achievement.organization}</p>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-penBank-green-light p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-penBank-green-dark mb-6 text-center">Formal Recognition</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-penBank-green h-8 w-8" />
              <p className="text-lg text-gray-800">
                Approved by the District Collectorate, Yavatmal
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="text-penBank-green h-8 w-8" />
              <p className="text-lg text-gray-800">
                Supported by the District Education Department, Yavatmal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
