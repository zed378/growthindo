import { Target, Award, TrendingUp, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Customized programs designed specifically for your organization's unique challenges and goals.",
  },
  {
    icon: Award,
    title: "Industry Experts",
    description: "Learn from seasoned professionals with decades of real-world experience across various industries.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of measurable improvements in performance, productivity, and employee satisfaction.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Long-term partnerships built on trust, confidentiality, and commitment to your success.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBzdHJhdGVneSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc0NjMzNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business consulting strategy meeting"
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-600 rounded-2xl -z-10 hidden lg:block"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose ProDevelop
              </h2>
              <p className="text-lg text-gray-600">
                We combine expertise, experience, and innovation to deliver exceptional results that transform organizations and empower teams.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
