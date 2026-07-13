import { useTranslation } from 'react-i18next';
import './Footer.css';
import logoYafo from '../../assets/Logo Yafo JPG_grises 150dpi.jpg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';

  return (
    <footer className="footer">
      <div className="container">
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
            <img src={logoYafo} alt="Yafo Consultora" style={{ height: 38, opacity: .75, filter: 'grayscale(.5) brightness(1.1)' }} />
          </a>

        </div>
      </div>

      <div className="huge-mark" aria-hidden="true">ALEPH</div>
    </footer>
  );
};

export default Footer;
