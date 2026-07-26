'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().min(10, 'WhatsApp number must be at least 10 characters'),
  country: z.string().min(1, 'Please select a country'),
  studentAge: z.string().min(1, 'Please select an age group'),
  currentLevel: z.enum(['beginner', 'intermediate', 'advanced'] as const, {
    message: 'Please select a level',
  }),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const COUNTRIES = ['USA', 'UK', 'Canada', 'Australia', 'UAE', 'Pakistan', 'Saudi Arabia', 'Other'];
const AGE_GROUPS = ['4-7', '8-12', '13-17', '18+'];
const TIMES = ['Morning', 'Afternoon', 'Evening', 'Night'];

export default function BookingForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: data.name,
          from_email: data.email,
          whatsapp: data.whatsapp,
          country: data.country,
          student_age: data.studentAge,
          current_level: data.currentLevel,
          preferred_time: data.preferredTime,
          message: data.message || "No additional message",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      
      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to send booking request:', error);
      alert('Failed to send booking request. Please try again or contact us via WhatsApp.');
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="text-green-600 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Request Sent!</h3>
        <p className="text-gray-600">
          JazakAllah khair for reaching out. Our team will contact you on WhatsApp shortly to confirm your trial class schedule.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-primary font-semibold hover:underline"
        >
          Book another trial
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
          <input
            {...register('whatsapp')}
            type="tel"
            placeholder="+1 234 567 8900"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
          {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            {...register('country')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
          >
            <option value="">Select Country</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Student Age</label>
          <select
            {...register('studentAge')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
          >
            <option value="">Select Age Group</option>
            {AGE_GROUPS.map(a => <option key={a} value={a}>{a} Years</option>)}
          </select>
          {errors.studentAge && <p className="text-red-500 text-sm">{errors.studentAge.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Current Level</label>
          <select
            {...register('currentLevel')}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner (No prior knowledge)</option>
            <option value="intermediate">Intermediate (Can read basics)</option>
            <option value="advanced">Advanced (Fluent reading/Tajweed)</option>
          </select>
          {errors.currentLevel && <p className="text-red-500 text-sm">{errors.currentLevel.message}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Preferred Time for Trial</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TIMES.map(time => (
              <label key={time} className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50 transition has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input
                  type="radio"
                  value={time}
                  {...register('preferredTime')}
                  className="text-primary focus:ring-primary h-4 w-4"
                />
                <span className="text-sm font-medium text-gray-700">{time}</span>
              </label>
            ))}
          </div>
          {errors.preferredTime && <p className="text-red-500 text-sm">{errors.preferredTime.message}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Any special requirements or message? (Optional)</label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
            placeholder="Tell us more about your learning goals..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-white rounded-full px-8 py-4 font-semibold hover:shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Book Free Trial Class'}
      </button>
    </form>
  );
}
