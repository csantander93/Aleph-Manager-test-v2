import { useTranslation } from 'react-i18next';
import './Footer.css';
import logoYafo from '../../assets/Logo Yafo JPG_grises 150dpi.jpg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';

  const onNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="col-brand">
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--fg-1)', marginBottom: 14 }}>
              Aleph Manager
            </div>
            <p style={{ color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.65, maxWidth: '32ch', margin: '0 0 20px 0' }}>
              {isES
                ? 'Plataforma GRC para banca y finanzas. Gobierno, riesgo y cumplimiento en una sola solución.'
                : 'GRC platform for banking & finance. Governance, risk and compliance in one solution.'}
            </p>
            <a
              href="https://yafoconsultora.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom yafo"
              style={{ display: 'inline-flex' }}
            >
              <span style={{ color: 'var(--fg-4)', fontSize: 11, fontFamily: 'var(--font-mono)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                {isES ? 'Desarrollado por' : 'Developed by'}
              </span>
              <img src={logoYafo} alt="Yafo Consultora" style={{ height: 34, opacity: .75, filter: 'grayscale(.5) brightness(1.1)' }} />
            </a>
          </div>

          <div>
            <h5>{isES ? 'Plataforma' : 'Platform'}</h5>
            <ul>
              <li><a href="#soluciones" onClick={(e) => onNav(e, '#soluciones')}>{t('header.menuItems.solutions')}</a></li>
              <li><a href="#caracteristicas" onClick={(e) => onNav(e, '#caracteristicas')}>{t('header.menuItems.features')}</a></li>
              <li><a href="#clientes" onClick={(e) => onNav(e, '#clientes')}>{t('header.menuItems.clients')}</a></li>
              <li><a href="#premios" onClick={(e) => onNav(e, '#premios')}>{isES ? 'Premios' : 'Awards'}</a></li>
            </ul>
          </div>

          <div>
            <h5>{isES ? 'Soluciones' : 'Solutions'}</h5>
            <ul>
              <li><a href="#soluciones" onClick={(e) => onNav(e, '#soluciones')}>GRC</a></li>
              <li><a href="#soluciones" onClick={(e) => onNav(e, '#soluciones')}>PLAFT / AML·CFT</a></li>
              <li><a href="#soluciones" onClick={(e) => onNav(e, '#soluciones')}>{isES ? 'Continuidad de Negocio' : 'Business Continuity'}</a></li>
              <li><a href="#soluciones" onClick={(e) => onNav(e, '#soluciones')}>{isES ? 'Auditoría' : 'Audit'}</a></li>
            </ul>
          </div>

          <div>
            <h5>{isES ? 'Contacto' : 'Contact'}</h5>
            <ul>
              <li>
                <a href="mailto:gerencia@alephmanager.com">gerencia@alephmanager.com</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/showcase/aleph-manager/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#contacto" onClick={(e) => onNav(e, '#contacto')}>
                  {isES ? 'Solicitar demo' : 'Request demo'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal">
            <span>© {new Date().getFullYear()} Aleph Manager. {t('footer.rightsReserved')}</span>
          </div>
          <div style={{ color: 'var(--fg-4)', fontSize: 12, fontFamily: 'var(--font-mono)', letterSpacing: '0.12em' }}>
            v 4.3 · 2026
          </div>
        </div>
      </div>

      <div className="huge-mark" aria-hidden="true">ALEPH</div>
    </footer>
  );
};

export default Footer;
