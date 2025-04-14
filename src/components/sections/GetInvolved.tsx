
import React from 'react';
import { School, UserPlus, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const involvementOptions = [
  {
    title: 'For Schools',
    description: 'Join our pen collection program and help educate the next generation about sustainability in India.',
    icon: School,
    actions: [
      'Set up collection points',
      'Integrate with Swachh Bharat initiatives',
      'Receive educational materials',
      'Track your environmental impact'
    ],
    buttonText: 'Register Your School'
  },
  {
    title: 'For Volunteers',
    description: 'Become part of our team and help with collection, sorting, and community outreach across India.',
    icon: UserPlus,
    actions: [
      'Join collection drives',
      'Assist artisans in workshops',
      'Conduct awareness programs',
      'Participate in eco-festivals'
    ],
    buttonText: 'Join as Volunteer'
  },
  {
    title: 'For Donors',
    description: 'Support our mission with contributions to help scale our impact throughout India.',
    icon: HandHeart,
    actions: [
      'Fund collection materials',
      'Support artisan training programs',
      'Enable program expansion to new states',
      'Receive impact reports'
    ],
    buttonText: 'Donate Now'
  },
];

const GetInvolved = () => {
  return (
    <section id="get-involved" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get Involved</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Join our movement to reduce plastic waste and support sustainable livelihoods across India. There are many ways to contribute!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {involvementOptions.map((option) => (
            <Card key={option.title} className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader className="pb-2">
                <div className="mb-4 h-14 w-14 rounded-full bg-penBank-green-light flex items-center justify-center">
                  <option.icon className="h-7 w-7 text-penBank-green-dark" />
                </div>
                <CardTitle className="text-xl font-bold">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {option.actions.map((action, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-penBank-green mr-2"></div>
                      <span className="text-gray-700">{action}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-penBank-green hover:bg-penBank-green-dark text-white">
                  {option.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
