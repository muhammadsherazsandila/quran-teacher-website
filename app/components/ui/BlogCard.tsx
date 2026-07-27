import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export default function BlogCard({ slug, title, excerpt, category, date, readTime }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-premium overflow-hidden card-hover relative group h-full flex flex-col">
      <Link href={`/blog/${slug}`} className="absolute inset-0 z-0" aria-label={`Read ${title}`} />
      
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary-light to-primary gradient-primary absolute top-0 left-0" />
      
      <div className="p-6 flex flex-col flex-grow pt-8 relative z-10 pointer-events-none">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium pointer-events-auto">
            {category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-text line-clamp-2 mb-3 group-hover:text-primary transition-colors pointer-events-auto">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-text-light text-sm line-clamp-3 mb-6 flex-grow pointer-events-auto">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 text-xs text-text-lighter pointer-events-auto">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
