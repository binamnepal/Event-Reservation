import { useState } from 'react';
import './Contact.css';

const eventTypes = [
  { value: '', label: 'Select event type' },
  { value: 'wedding', label: '💍 Wedding Ceremony' },
  { value: 'corporate', label: '🏢 Corporate Gala' },
  { value: 'birthday', label: '🎂 Private Celebration' },
  { value: 'cultural', label: '🎭 Cultural Program' },
  { value: 'music', label: '🎵 Musical Evening' },
  { value: 'other', label: '✦ Special Request' },
];

const contactInfo = [
  { icon: '✉', label: 'Email', value: 'hello@pashupatiplannners.com' },
  { icon: '📞', label: 'Direct Line', value: '+977 1-4XXXXXX' },
  { icon: '📍', label: 'Studio Address', value: 'Thamel, Kathmandu, Nepal' },
  { icon: '🕐', label: 'Business Hours', value: 'Sun–Fri, 9:00 AM – 6:00 PM' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
    }, 5000);
  };

  return (
    <div className="contact">
      {/* 1. Hero Section */}
      <section className="contact-hero">
        <span className="contact-eyebrow">Connect With Us</span>
        <h1 className="contact-hero__title">
          Let's Plan Something <em>Memorable</em>
        </h1>
        <p className="contact-hero__sub">
          Share your vision with us. Our team typically responds within 24 hours to begin the journey.
        </p>
      </section>

      <div className="contact-body">
        {/* 2. Info Sidebar (The "Gut" Dark Section) */}
        <aside className="contact-info">
          <h2 className="contact-info__title">Our Studio</h2>
          {contactInfo.map(({ icon, label, value }) => (
            <div className="contact-info-item" key={label}>
              <span className="contact-info-icon">{icon}</span>
              <div className="contact-info-details">
                <p className="contact-info-label">{label}</p>
                <p className="contact-info-value">{value}</p>
              </div>
            </div>
          ))}

          {/* Minimal Map UI */}
          <div className="contact-map">
            <div className="contact-map__placeholder">
              <span className="contact-map__pin">📍</span>
              <p>Find us in Thamel</p>
              <p className="contact-map__sub">Kathmandu, Nepal</p>
            </div>
          </div>
        </aside>

        {/* 3. Form Section */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success__icon">✓</div>
              <h3>Thank You</h3>
              <p>Your inquiry has been received. We look forward to making your event extraordinary.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="contact-form__title">Send a Message</h2>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+977 98XXXXXXXX" />
                </div>
                <div className="contact-form__group">
                  <label htmlFor="date">Event Date (Optional)</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
              </div>

              <div className="contact-form__group">
                <label htmlFor="eventType">Event Category</label>
                <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange}>
                  {eventTypes.map(({ value, label }) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">Event Details</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your venue, guest count, and theme..." required />
              </div>

              <button type="submit" className="contact-submit">
                Submit Inquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}