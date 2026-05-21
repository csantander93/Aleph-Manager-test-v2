import { useTranslation } from 'react-i18next';
import './Awards.css';
import bpEmprende from '../../assets/img-awards/patagonia.webp';
import bindInnovA from '../../assets/img-awards/bind.webp';

const TrophyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 21h8M12 17v4" />
    <path d="M7 4H4a2 2 0 000 4c0 2.5 2 4.5 4.5 5.5" />
    <path d="M17 4h3a2 2 0 010 4c0 2.5-2 4.5-4.5 5.5" />
    <path d="M5 4h14v6a7 7 0 01-14 0V4z" />
  </svg>
);

const Awards = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';

  const awards = [
    {
      img: bpEmprende,
      ribbon: t('awards.award1.subtitle'),
      year: t('awards.award1.year'),
      title: t('awards.award1.title'),
      awarder: t('awards.award1.awarder'),
      program: t('awards.award1.subtitle'),
    },
    {
      img: bindInnovA,
      ribbon: t('awards.award2.subtitle'),
      year: t('awards.award2.year'),
      title: t('awards.award2.title'),
      awarder: t('awards.award2.awarder'),
      program: t('awards.award2.subtitle'),
    },
  ];

  return (
    <section id="premios" className="awards">
      <div className="container">
        <div className="head">
          <div className="eyebrow reveal">04 · {isES ? 'Reconocimientos' : 'Awards'}</div>
          <h2 className="h-section reveal" style={{ '--reveal-delay': '80ms', marginTop: 14 }}>
            {t('awards.title')}
          </h2>
          <p className="subtle reveal" style={{ '--reveal-delay': '160ms' }}>
            {t('awards.subtitle')}
          </p>
        </div>

        <div className="awards-row">
          {awards.map((a, i) => (
            <div key={i} className="award card card-glow reveal" style={{ '--reveal-delay': `${i * 80}ms` }}>
              <div className="award-top">
                <div className="ribbon">
                  <TrophyIcon />
                  {a.ribbon}
                </div>
                <div className="year">{a.year}</div>
              </div>

              <div className="award-logo">
                <img src={a.img} alt={a.title} loading="lazy" />
              </div>

              <div className="award-bottom">
                <h3>{a.title}</h3>
                <div className="meta">
                  <span className="awarder">{a.awarder}</span>
                  <span className="sep" aria-hidden="true" />
                  <span className="program">{a.program}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
