import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  text: string;
  type: string;
  course?: string;
}

export default function TestimonialCard({
  name,
  country,
  rating,
  text,
  type,
  course
}: TestimonialCardProps) {
  const stars = Array.from({ length: 5 }).map((_, i) => i < rating);

  return (
    <div className="bg-white rounded-2xl shadow-premium p-6 card-hover relative flex flex-col h-full">
      <Quote className="absolute top-6 left-6 w-12 h-12 text-accent opacity-20 pointer-events-none" />
      
      <div className="flex gap-1 mb-4 relative z-10">
        {stars.map((isFilled, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${isFilled ? 'fill-accent text-accent star-gold' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="italic text-text-light flex-grow relative z-10 mb-6">
        "{text}"
      </p>
      
      <div className="mt-auto relative z-10 border-t border-gray-100 pt-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h4 className="font-semibold text-text">{name}</h4>
            <span className="text-sm text-text-light flex items-center gap-1 mt-0.5">
              {country}
            </span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-text-light rounded-md">
              {type}
            </span>
            {course && (
              <span className="text-xs font-medium px-2 py-1 bg-primary text-white rounded-md">
                {course}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
