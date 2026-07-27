import Link from 'next/link';
import { BookOpen, BookOpenCheck, Mic, Brain, GraduationCap, CheckCircle } from 'lucide-react';
import React from 'react';

const IconMap: Record<string, React.ElementType> = {
  BookOpen,
  BookOpenCheck,
  Mic,
  Brain,
  GraduationCap
};

interface CourseCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  level: string;
  id: string;
}

export default function CourseCard({ title, description, icon, features, level, id }: CourseCardProps) {
  const IconComponent = IconMap[icon] || BookOpen;

  return (
    <div className="bg-white rounded-2xl shadow-premium overflow-hidden card-hover flex flex-col h-full relative">
      <div className="h-2 w-full bg-gradient-to-r from-primary to-primary-light absolute top-0 left-0" />
      
      <div className="p-6 flex flex-col flex-grow pt-8">
        <div className="flex justify-between items-start mb-4">
          <div className="w-[60px] h-[60px] rounded-xl bg-secondary flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-primary" />
          </div>
          <span className="rounded-full bg-secondary text-primary px-3 py-1 text-xs font-medium">
            {level}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-text mb-2">
          {title}
        </h3>
        
        <p className="text-text-light text-sm mb-6 flex-grow">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-text-light">
              <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto pt-4 border-t border-gray-100">
          <Link 
            href={`/courses/${id}`}
            className="inline-flex items-center text-primary font-semibold link-underline group"
          >
            Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
