import { useTranslation } from 'react-i18next';
import './Footer.css';
import logoYafo from '../../assets/Logo Yafo JPG_grises 150dpi.jpg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--fg-1)', marginBottom: 12 }}>
            Aleph Manager
          </div>
          <p style={{ color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.65, maxWidth: '40ch', marginInline: 'auto' }}>
            {isES
              ? 'Plataforma GRC para banca y finanzas. Gobierno, riesgo y cumplimiento en una sola solución.'
              : 'GRC platform for banking & finance. Governance, risk and compliance in one solution.'}
          </p>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aleph Manager. {t('footer.rightsReserved')}</span>

          <a
            href="https://yafoconsultora.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-yafo"
          >
            <span style={{ color: 'var(--fg-4)', fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              {isES ? 'Desarrollado por' : 'Developed by'}
            </span>
            <img src={logoYafo} alt="Yafo Consultora" style={{ height: 30, opacity: .75, filter: 'grayscale(.5) brightness(1.1)' }} />
          </a>

          <span style={{ color: 'var(--fg-4)', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em' }}>
            v 4.3 · 2026
          </span>
        </div>
      </div>

      <div className="huge-mark" aria-hidden="true">ALEPH</div>
    </footer>
  );
};

export default Footer;
