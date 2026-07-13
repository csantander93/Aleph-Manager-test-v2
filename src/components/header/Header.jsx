import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/LOGO ALEPH FIJO v02.webp';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['inicio', 'soluciones', 'caracteristicas', 'clientes', 'premios', 'contacto'];
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 2;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const section = document.querySelector(href);
    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const isES = i18n.language.startsWith('es');

  const changeLanguage = () => {
    i18n.changeLanguage(isES ? 'en' : 'es');
  };

  const items = [
    { key: 'home',      href: '#inicio',          label: t('header.menuItems.home') },
    { key: 'solutions', href: '#soluciones',       label: t('header.menuItems.solutions') },
    { key: 'features',  href: '#caracteristicas',  label: t('header.menuItems.features') },
    { key: 'clients',   href: '#clientes',         label: t('header.menuItems.clients') },
    { key: 'contact',   href: '#contacto',         label: t('header.menuItems.contact') },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="container header-row">
        <a href="#inicio" className="brand" onClick={(e) => onNav(e, '#inicio')}>
          <img className="brand-mark" src={logo} alt="Aleph Manager" />
        </a>

        <nav className="nav glass" aria-label={t('header.ariaLabels.navigation')}>
          {items.map(it => (
            <a
              key={it.key}
              href={it.href}
              className={activeSection === it.href.slice(1) ? 'active' : ''}
              onClick={(e) => onNav(e, it.href)}
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <a href="#contacto" className="btn btn-primary header-cta" onClick={(e) => onNav(e, '#contacto')}>
            {t('intro.ctaPrimary')} <span className="arr">→</span>
          </a>
          <button className="lang-switch" onClick={changeLanguage} aria-label={isES ? 'Switch to English' : 'Cambiar a Español'}>
            <svg className={`lang-flag${isES ? ' active' : ''}`} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="14" fill="#c60b1e"/>
              <rect y="3.5" width="20" height="7" fill="#ffc400"/>
            </svg>
            <span className={`lang-track${isES ? '' : ' lang-track--en'}`}>
              <span className="lang-thumb" />
            </span>
            <svg className={`lang-flag${isES ? '' : ' active'}`} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="14" fill="#B22234"/>
              <rect y="1.08" width="20" height="1.54" fill="#fff"/>
              <rect y="3.08" width="20" height="1.54" fill="#B22234"/>
              <rect y="4.62" width="20" height="1.54" fill="#fff"/>
              <rect y="6.15" width="20" height="1.54" fill="#B22234"/>
              <rect y="7.69" width="20" height="1.54" fill="#fff"/>
              <rect y="9.23" width="20" height="1.54" fill="#B22234"/>
              <rect y="10.77" width="20" height="1.54" fill="#fff"/>
              <rect y="12.31" width="20" height="1.54" fill="#B22234"/>
              <rect width="8" height="7.69" fill="#3C3B6E"/>
            </svg>
          </button>
          <button
            className="mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? t('header.ariaLabels.menuClose') : t('header.ariaLabels.menuToggle')}
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open
                ? <><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></>
                : <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="container">
          <div className="mobile-menu" role="navigation">
            {items.map(it => (
              <a
                key={it.key}
                href={it.href}
                className={activeSection === it.href.slice(1) ? 'active' : ''}
                onClick={(e) => onNav(e, it.href)}
              >
                {it.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
