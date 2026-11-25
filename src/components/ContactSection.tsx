import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Send } from 'lucide-react';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError('Please complete all fields before sending your message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 450);
  };

  return (
    <section id="contact" className="py-20 bg-[#f4f8fb]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="font-display text-[30px] sm:text-[36px] font-bold text-[#1c2d42] mb-3">
            Contact
          </h2>
          <p className="text-slate-600 text-[15px] sm:text-base">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#2d71a1]/10 text-[#2d71a1] group-hover:bg-[#2d71a1] group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#1c2d42]">Address</h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#2d71a1]/10 text-[#2d71a1] group-hover:bg-[#2d71a1] group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#1c2d42]">Call Us</h3>
                <p className="text-sm text-slate-600 mt-0.5 tabular-nums">+1 5589 55488 55</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#2d71a1]/10 text-[#2d71a1] group-hover:bg-[#2d71a1] group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#1c2d42]">Email Us</h3>
                <p className="text-sm text-slate-600 mt-0.5">info@example.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_8px_28px_rgba(28,45,66,0.05)] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-[#1c2d42] placeholder:text-slate-400 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#2d71a1] focus:ring-2 focus:ring-[#2d71a1]/15 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-[#1c2d42] placeholder:text-slate-400 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#2d71a1] focus:ring-2 focus:ring-[#2d71a1]/15 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="sr-only">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 text-sm text-[#1c2d42] placeholder:text-slate-400 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#2d71a1] focus:ring-2 focus:ring-[#2d71a1]/15 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 text-sm text-[#1c2d42] placeholder:text-slate-400 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-[#2d71a1] focus:ring-2 focus:ring-[#2d71a1]/15 transition-colors resize-y"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2.5 text-sm text-rose-700 bg-rose-50 border border-rose-200 px-4 py-3 rounded-md">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {sent && (
                <div className="flex items-center gap-2.5 text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-md">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your message has been sent. Thank you!</span>
                </div>
              )}

              <div className="text-center pt-1">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#2d71a1] hover:bg-[#235b82] disabled:opacity-60 text-white text-[15px] font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
