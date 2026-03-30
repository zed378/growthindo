import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { value: "500+", label: "Organizations Transformed" },
  { value: "10,000+", label: "Professionals Trained" },
  { value: "25+", label: "Countries Worldwide" },
  { value: "98%", label: "Client Retention Rate" },
];

export function Stats() {
  return (
    <section className="py-16 md:py-24 bg-blue-600 text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc291cmNlcyUyMG9mZmljZSUyMHRlYW18ZW58MXx8fHwxNzc0NjkyNjkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-blue-100">
            Delivering measurable results that matter to organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
