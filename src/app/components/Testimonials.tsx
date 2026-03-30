import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Sarah Mitchell",
    position: "CEO, TechCorp Industries",
    content: "ProDevelop's coaching program completely transformed our leadership team. The results were visible within months - improved decision-making, better team dynamics, and a 40% increase in productivity.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "HR Director, Global Enterprises",
    content: "Their HR management solutions streamlined our entire recruitment and onboarding process. We've seen a significant improvement in employee retention and satisfaction scores.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "COO, Innovation Labs",
    content: "The organizational development program helped us navigate our growth phase seamlessly. Their expertise in change management was invaluable to our success.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from leaders who've experienced transformation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 text-blue-100" size={48} />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
