import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';
import { sendContactEmail } from '../../services/emailService';

const ContactForm = () => {
  const { t, i18n } = useTranslation();
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
        <div className="head">
          <div className="eyebrow reveal">05 · {isES ? 'Contacto' : 'Contact'}</div>
          <h2 className="h-section reveal" style={{ '--reveal-delay': '80ms', marginTop: 14 }}>
            {t('contact.title')}
          </h2>
        </div>

        <div className="contact-wrap reveal" style={{ '--reveal-delay': '120ms' }}>
          <div className="contact-info">
            <p>{t('contact.subtitle')}</p>
            <ul className="info-list">
              <li>
                <span className="label">{isES ? 'Email' : 'Email'}</span>
                <span className="val">
                  <a href="mailto:gerencia@alephmanager.com">gerencia@alephmanager.com</a>
                </span>
              </li>
              <li>
                <span className="label">{isES ? 'Web' : 'Website'}</span>
                <span className="val">alephmanager.com</span>
              </li>
              <li>
                <span className="label">{isES ? 'País' : 'Country'}</span>
                <span className="val">{isES ? 'Argentina · Latinoamérica' : 'Argentina · Latin America'}</span>
              </li>
            </ul>
          </div>

          <div className="contact-form-card">
            <form onSubmit={onSubmit} noValidate>
              <div className="row-2">
                <div className="field">
                  <label htmlFor="name">{t('contact.nameLabel')}</label>
                  <input
                    id="name" name="name" type="text"
                    value={form.name} onChange={onChange}
                    placeholder={isES ? 'Tu nombre' : 'Your name'}
                    required
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">{t('contact.emailLabel')}</label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={onChange}
                    placeholder="email@empresa.com"
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">{t('contact.subjectLabel')}</label>
                <input
                  id="subject" name="subject" type="text"
                  value={form.subject} onChange={onChange}
                  placeholder={isES ? 'Asunto del mensaje' : 'Subject'}
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">{t('contact.messageLabel')}</label>
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
                  : <>{t('contact.submitButton')} <span className="arr">→</span></>
                }
              </button>

              {status === 'ok' && (
                <div className="toast-success">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                  {t('contact.successMessage')}
                </div>
              )}
              {status === 'err' && (
                <div className="toast-error">{t('contact.submitErrorMessage')}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
