import { blogPosts } from '@/app/data/blog-posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight, ChevronLeft, ArrowRight, User, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import { generateBreadcrumbSchema } from '@/app/lib/structured-data';
import CTABanner from '@/app/components/ui/CTABanner';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Quran Tutor',
    };
  }

  return {
    title: `${post.title} | Quran Tutor Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Hafiz Muhammad'],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Hafiz Muhammad',
    },
  };

  // Simple markdown-like content rendering
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line, i) => {
        if (line.startsWith('# ')) {
          return `<h2 class="text-3xl font-bold text-text mt-12 mb-6">${line.slice(2)}</h2>`;
        }
        if (line.startsWith('## ')) {
          return `<h3 class="text-2xl font-bold text-text mt-8 mb-4">${line.slice(3)}</h3>`;
        }
        if (line.startsWith('- **')) {
          const match = line.match(/- \*\*(.*?)\*\*:?\s*(.*)/);
          if (match) {
            return `<li class="mb-3 ml-6 list-disc text-text-light"><strong class="text-text">${match[1]}</strong>${match[2] ? ': ' + match[2] : ''}</li>`;
          }
        }
        if (line.startsWith('- ')) {
          return `<li class="mb-2 ml-6 list-disc text-text-light">${line.slice(2)}</li>`;
        }
        if (line.startsWith('*') && line.endsWith('*')) {
          return `<p class="italic text-text-light mb-6">${line.slice(1, -1)}</p>`;
        }
        if (line.startsWith('---')) {
          return `<hr class="my-8 border-border" />`;
        }
        return `<p class="text-text-light leading-relaxed mb-6">${line}</p>`;
      })
      .join('');
  };

  return (
    <main className="min-h-screen bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-primary-dark to-primary pt-24 pb-32 text-white relative islamic-pattern">
        <div className="container-custom max-w-4xl relative z-10">
          <div className="flex items-center text-sm font-medium mb-8 opacity-90 text-white/80">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="truncate">{post.title}</span>
          </div>

          <div className="mb-6">
            <span className="bg-accent text-text px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-accent" />
              <span className="font-medium">Hafiz Muhammad</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-accent" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-accent" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 -mt-24 relative z-20">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-3xl shadow-premium overflow-hidden">
            {/* Decorative header image placeholder */}
            <div className="relative h-[200px] sm:h-[300px] w-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <BookOpen className="w-20 h-20 text-white/20" />
            </div>

            <div className="p-8 md:p-12 lg:p-16">
              <article
                className="max-w-none"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />

              <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
                <Link href="/blog" className="inline-flex items-center text-text-light hover:text-primary font-medium transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-1" /> Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTABanner />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white border-t border-border-light">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-text">Related Articles</h2>
              <Link href="/blog" className="hidden sm:inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                View all <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="bg-secondary rounded-2xl overflow-hidden group border border-border-light flex flex-col card-hover">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/20" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-text-lighter mb-3 space-x-4">
                      <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1" /> {relatedPost.date}</span>
                    </div>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <Link href={`/blog/${relatedPost.slug}`} className="inline-flex items-center text-primary text-sm font-semibold hover:text-accent transition-colors mt-auto pt-4">
                      Read Article <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
