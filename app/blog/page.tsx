import { generatePageMetadata } from '@/app/lib/metadata';
import { blogPosts, blogCategories } from '@/app/data/blog-posts';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, Mail, BookOpen } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/app/lib/structured-data';
import BlogCard from '@/app/components/ui/BlogCard';

export const metadata = generatePageMetadata(
  'Blog',
  'Read articles about Quran learning, Tajweed tips, Islamic education, and parenting advice from an experienced Quran teacher.',
  '/blog'
);

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const mainFeatured = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <main className="min-h-screen bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-20 text-white islamic-pattern">
        <div className="container-custom relative z-10">
          <div className="flex items-center text-sm font-medium mb-6 opacity-80">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog &amp; Articles</h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/90">
            Insights on Quran learning, Tajweed tips, and Islamic education for you and your family.
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-text mb-8">Featured Reading</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Featured */}
            {mainFeatured && (
              <div className="lg:col-span-8 bg-white rounded-2xl overflow-hidden shadow-premium group border border-border-light">
                <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-white/20" />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {mainFeatured.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-text-light mb-4 space-x-4">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {mainFeatured.date}</span>
                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {mainFeatured.readTime}</span>
                  </div>
                  <Link href={`/blog/${mainFeatured.slug}`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors">
                      {mainFeatured.title}
                    </h3>
                  </Link>
                  <p className="text-lg text-text-light mb-6 line-clamp-3">
                    {mainFeatured.excerpt}
                  </p>
                  <Link href={`/blog/${mainFeatured.slug}`} className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                    Read Article <ChevronRight className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </div>
            )}

            {/* Secondary Featured */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {secondaryFeatured.map((post) => (
                <div key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-premium group flex-1 border border-border-light">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/20" />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-text-light mb-3 space-x-3">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-primary text-sm font-semibold hover:text-accent transition-colors mt-4">
                      Read <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category, index) => (
              <span
                key={category}
                className={`px-6 py-2.5 rounded-full font-medium ${
                  index === 0
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-text border border-border hover:border-primary hover:text-primary transition-colors cursor-default'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="section-padding pt-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-text mb-10">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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

      {/* Newsletter CTA */}
      <section className="bg-[#1E293B] py-20 text-white">
        <div className="container-custom max-w-4xl text-center">
          <Mail className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our newsletter to receive weekly Quranic insights, Tajweed tips, and updates about our courses directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-4 rounded-xl text-text focus:outline-none focus:ring-2 focus:ring-accent border-0 placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 gradient-gold text-white font-bold rounded-xl transition-colors whitespace-nowrap hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </main>
  );
}
