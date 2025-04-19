'use client';

import { useState } from 'react';
import { Github, Linkedin, Twitter, MapPin, Phone, Mail, Copy, CopyCheck } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopyStatus({ ...copyStatus, [key]: true });

        // Reset copy status after 2 seconds
        setTimeout(() => {
          setCopyStatus(prev => ({ ...prev, [key]: false }));
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-2 text-foreground/80">
              Have a project in mind or want to collaborate?
            </p>
            <p className="mb-8 text-foreground/80">
              Feel free to reach out to me through the form or via the contact details below.
            </p>
            <div className="space-y-6">
              <div className="flex items-center p-4 rounded-lg bg-accent/5 backdrop-blur-sm border border-accent/10">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <span>{process.env.NEXT_PUBLIC_EMAIL}</span>
                <button
                  onClick={() => copyToClipboard('darshitbhalodi@gmail.com', 'email')}
                  className="ml-auto p-2 rounded-full hover:bg-accent/20 transition-colors"
                  aria-label="Copy email"
                >
                  {copyStatus['email'] ? (
                    <CopyCheck className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-accent" />
                  )}
                </button>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-accent/5 backdrop-blur-sm border border-accent/10">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <span>{process.env.NEXT_PUBLIC_PHONE}</span>
                <button
                  onClick={() => copyToClipboard('+91 9313101807', 'phone')}
                  className="ml-auto p-2 rounded-full hover:bg-accent/20 transition-colors"
                  aria-label="Copy phone number"
                >
                  {copyStatus['phone'] ? (
                    <CopyCheck className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-accent" />
                  )}
                </button>
              </div>
              <div className="flex items-center p-4 rounded-lg bg-accent/5 backdrop-blur-sm border border-accent/10">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <span>{process.env.NEXT_PUBLIC_ADDRESS}</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="bg-accent/5 p-3 rounded-full hover:bg-accent/10 border border-accent/10 hover:scale-110 transition-transform">
                  <Github className="w-6 h-6 text-accent" />
                </a>
                <a href={process.env.NEXT_PUBLIC_X_URL} target="_blank" rel="noopener noreferrer" className="bg-accent/5 p-3 rounded-full hover:bg-accent/10 border border-accent/10 hover:scale-110 transition-transform">
                  <Twitter className="w-6 h-6 text-accent" />
                </a>
                <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="bg-accent/5 p-3 rounded-full hover:bg-accent/10 border border-accent/10 hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6 text-accent" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-background/40 backdrop-blur-sm p-6 rounded-lg border border-accent/10 shadow-lg shadow-accent/5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-accent/20 rounded-md bg-background/80 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-accent/20 rounded-md bg-background/80 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-accent/20 rounded-md bg-background/80 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-md bg-accent text-white font-medium hover:opacity-90 transition-colors disabled:opacity-70 shadow-md shadow-accent/20"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-2 text-center bg-green-500/10 p-2 rounded border border-green-500/20">
                  Your message has been sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-2 text-center bg-red-500/10 p-2 rounded border border-red-500/20">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 