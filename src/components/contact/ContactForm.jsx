import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';
import { sendContactEmail } from '../../services/emailService';

const ContactForm = () => {
  const { i18n } = useTranslation();
  const isES = i18n.language !== 'en';
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    try {
      const result = await sendContactEmail(form);
      if (result && result.status === 1) {
        setStatus('ok');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-wrap reveal">
          <div className="contact-text">
            <h2 className="h-section" style={{ marginTop: 0 }}>
              {isES ? 'CONTACTO' : 'CONTACT'}
            </h2>
            <p className="subtle" style={{ marginTop: 16 }}>
              {isES
                ? 'Completa el formulario y nos pondremos en contacto contigo'
                : 'Fill out the form and we will get in touch with you'}
            </p>
          </div>

          <div className="contact-form-card">
            <form onSubmit={onSubmit} noValidate>
              <div className="row-2">
                <div className="field">
                  <label htmlFor="name">{isES ? 'Nombre y Apellido' : 'Full Name'}</label>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={onChange}
                    placeholder={isES ? 'Tu nombre' : 'Your name'}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={onChange}
                    placeholder="email@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">{isES ? 'Asunto' : 'Subject'}</label>
                <input
                  id="subject" name="subject" type="text"
                  value={form.subject} onChange={onChange}
                  placeholder={isES ? 'Asunto del mensaje' : 'Subject'}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">{isES ? 'Mensaje' : 'Message'}</label>
                <textarea
                  id="message" name="message"
                  value={form.message} onChange={onChange}
                  placeholder={isES ? 'Cuéntanos sobre tu proyecto...' : 'Tell us about your project...'}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting
                  ? (isES ? 'Enviando…' : 'Sending…')
                  : <>{isES ? 'Enviar Mensaje' : 'Send Message'} <span className="arr">→</span></>
                }
              </button>

              {status === 'ok' && (
                <div className="toast-success">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                  {isES ? '¡Mensaje enviado! Nos pondremos en contacto pronto.' : 'Message sent! We will be in touch soon.'}
                </div>
              )}
              {status === 'err' && (
                <div className="toast-error">
                  {isES ? 'Hubo un error al enviar. Por favor, intentá de nuevo.' : 'Something went wrong. Please try again.'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
