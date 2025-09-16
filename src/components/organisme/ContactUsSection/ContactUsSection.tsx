'use client';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@/components/atom/Button/Button';
import { Input } from '@/components/atom/Input/Input';
import { sendContactMessage } from '@/services/EmailService';
import { Textarea } from '@/components/atom/Textarea/Textarea';

export default function ContactUsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { ok, data } = await sendContactMessage(form);
    if (ok) {
      alert(data.message);
      setForm({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    } else {
      alert(data.error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-4 bg-gradient-to-br from-[#00ADD811] via-white to-[#00ADD822] relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">📩 Contact Us</h2>
          <p className="mt-4 text-lg text-gray-700">
            Have questions or need help? Reach out to our team anytime.
          </p>

          <div className="mt-8 space-y-4 text-gray-800">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#00ADD8] text-xl" />
              <span>aryansab80@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00ADD8] text-xl" />
              <span>+989927023901</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 space-y-6"
        >
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ADD8]"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ADD8]"
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00ADD8]"
            required
          />

          <Button
            type="submit"
            variant="solid"
            className={`w-full font-bold py-3 rounded-lg ${
              status === 'success'
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {status === 'idle' && 'Send Message'}
            {status === 'success' && 'Sent!'}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}