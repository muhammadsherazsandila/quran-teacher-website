'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call for form submission
    console.log('Contact form submission data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#1E293B] mb-2 font-[family-name:--font-poppins]">Message Sent Successfully!</h3>
        <p className="text-[#64748B] max-w-sm mx-auto">
          Thank you for reaching out. We have received your message and our team will get back to you shortly.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 px-6 py-2.5 bg-[#0F766E] text-white font-semibold rounded-xl hover:bg-[#0d645d] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#1E293B] mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          className={`w-full px-4 py-3.5 bg-white border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#0F766E] focus:ring-[#0F766E]/20'} rounded-xl focus:outline-none focus:ring-4 transition-all`}
          placeholder="e.g. Abdullah Ahmed"
          {...register('name')}
        />
        {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1E293B] mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className={`w-full px-4 py-3.5 bg-white border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#0F766E] focus:ring-[#0F766E]/20'} rounded-xl focus:outline-none focus:ring-4 transition-all`}
          placeholder="e.g. abdullah@example.com"
          {...register('email')}
        />
        {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#1E293B] mb-2">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          className={`w-full px-4 py-3.5 bg-white border ${errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#0F766E] focus:ring-[#0F766E]/20'} rounded-xl focus:outline-none focus:ring-4 transition-all`}
          placeholder="How can we help you?"
          {...register('subject')}
        />
        {errors.subject && <p className="mt-1.5 text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1E293B] mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={`w-full px-4 py-3.5 bg-white border ${errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-[#0F766E] focus:ring-[#0F766E]/20'} rounded-xl focus:outline-none focus:ring-4 transition-all resize-none`}
          placeholder="Tell us more about your inquiry..."
          {...register('message')}
        ></textarea>
        {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 bg-[#0F766E] hover:bg-[#0d645d] text-white font-bold rounded-xl transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md shadow-[#0F766E]/20"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
