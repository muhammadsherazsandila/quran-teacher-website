import { generatePageMetadata } from '@/app/lib/metadata';
import { blogPosts } from '@/app/data/blog-posts';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/app/lib/structured-data';
import BlogCard from '@/app/components/ui/BlogCard';

export const metadata = generatePageMetadata(
  'Blog',
  'Read articles about Quran learning, Tajweed tips, Islamic education, and parenting advice from an experienced Quran teacher.',
  '/blog'
);

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  // Display only the first 4 blogs as requested
  const displayPosts = blogPosts.slice(0, 4);

  return (
    <main className="min-h-screen bg-secondary pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#000a57] to-[#002874] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-5"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center text-sm font-medium mb-6 opacity-80">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog &amp; Articles</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Insights on Quran learning, Tajweed tips, and Islamic education for you and your family.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding pt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                readTime={post.readTime}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
