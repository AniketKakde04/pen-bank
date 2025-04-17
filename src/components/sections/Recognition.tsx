
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const formalRecognition = [
  {
    title: "District Collectorate Approval",
    organization: "Yavatmal",
    description: "Officially approved by the District Collectorate, validating our mission and operations",
    icon: CheckCircle,
    color: "bg-teal-100",
    iconColor: "text-teal-600"
  },
  {
    title: "Education Department Support",
    organization: "Yavatmal",
    description: "Endorsed by the District Education Department for our educational initiatives",
    icon: CheckCircle,
    color: "bg-cyan-100",
    iconColor: "text-cyan-600"
  }
];

const Recognition = () => {
  return (
    <section id="recognition" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Recognition</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          PEN BANK has earned formal recognition and support from key government institutions, affirming the credibility and social value of our mission.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {formalRecognition.map((recognition, index) => (
            <Card key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 flex gap-6">
                <div className={`${recognition.color} w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <recognition.icon className={`h-10 w-10 ${recognition.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-penBank-green-dark mb-2">{recognition.title}</h3>
                  <p className="text-penBank-brown mb-2 font-semibold">{recognition.organization}</p>
                  <p className="text-gray-700">{recognition.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
