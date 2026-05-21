import { useState, useEffect } from 'react';

const ModuleIcons = {
  default: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  risk: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  control: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  doc: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  flow: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  users: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  lock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  network: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" /><circle cx="4" cy="6" r="2" /><circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" /><circle cx="20" cy="18" r="2" />
      <line x1="6" y1="6" x2="10" y2="11" /><line x1="18" y1="6" x2="14" y2="11" />
      <line x1="6" y1="18" x2="10" y2="13" /><line x1="18" y1="18" x2="14" y2="13" />
    </svg>
  ),
};

const pickIcon = (name) => {
  const n = name.toLowerCase();
  if (/riesgo|risk|exposici/.test(n)) return ModuleIcons.risk;
  if (/control|cumplimiento|compliance/.test(n)) return ModuleIcons.control;
  if (/informe|reporte|report|kri|indicador/.test(n)) return ModuleIcons.chart;
  if (/document|política|politic|norma|manual/.test(n)) return ModuleIcons.doc;
  if (/flujo|workflow|aprobac/.test(n)) return ModuleIcons.flow;
  if (/buscar|search|monitoreo|scoring/.test(n)) return ModuleIcons.search;
  if (/usuario|user|permiso|rol/.test(n)) return ModuleIcons.users;
  if (/seguridad|auth|acceso|access/.test(n)) return ModuleIcons.lock;
  if (/red|network|activo|asset|cmdb/.test(n)) return ModuleIcons.network;
  return ModuleIcons.default;
};

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7" />
  </svg>
);

const BackArrow = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const ModulesSheet = ({ tabLabel, categoryKey, modulesData, lang, onClose }) => {
  const modules = modulesData[categoryKey] || {};
  const moduleNames = Object.keys(modules);

  // Desktop: first module pre-selected. Mobile: starts on list view (null).
  const [active, setActive] = useState(moduleNames[0] || null);
  // 'list' | 'detail' — only drives the CSS class; on desktop both panels are always visible
  const [mobileView, setMobileView] = useState('list');

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleSelect = (name) => {
    setActive(name);
    setMobileView('detail');
  };

  const handleBack = () => {
    setMobileView('list');
  };

  const detail = active ? modules[active] : null;
  const bodyClass = `sheet-body${mobileView === 'detail' ? ' mob-detail' : ''}`;

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="sheet" role="dialog" aria-modal="true" aria-label={tabLabel}>

        {/* Header */}
        <div className="sheet-head">
          <div className="crumbs">
            <span>{lang === 'es' ? 'Plataforma' : 'Platform'}</span>
            <span className="sep">·</span>
            <strong>{tabLabel}</strong>
            {active && (
              <>
                <span className="sep">/</span>
                <span style={{ color: 'var(--fg-2)', textTransform: 'none', letterSpacing: 0, fontSize: 13, fontFamily: 'var(--font-body)' }}>
                  {active}
                </span>
              </>
            )}
          </div>
          <button className="sheet-close" onClick={onClose} aria-label={lang === 'es' ? 'Cerrar' : 'Close'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body — desktop: side-by-side | mobile: stacked with .mob-detail toggling visibility */}
        <div className={bodyClass}>

          {/* Left: module list */}
          <div className="sheet-list">
            <div className="group-label">
              {moduleNames.length}{' '}
              {lang === 'es'
                ? (moduleNames.length === 1 ? 'módulo' : 'módulos')
                : (moduleNames.length === 1 ? 'module' : 'modules')}
            </div>
            {moduleNames.map((name) => (
              <button
                key={name}
                className={`module-row${active === name ? ' active' : ''}`}
                onClick={() => handleSelect(name)}
              >
                <span className="m-icon">{pickIcon(name)}</span>
                <span className="m-name">{name}</span>
                <svg className="m-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Right / full-screen on mobile: module detail */}
          <div className="sheet-detail">
            {detail ? (
              <>
                {/* Back button — only visible on mobile via CSS */}
                <button className="sheet-back" onClick={handleBack} aria-label={lang === 'es' ? 'Volver a módulos' : 'Back to modules'}>
                  <BackArrow />
                  {lang === 'es' ? 'Módulos' : 'Modules'}
                </button>

                <header className="detail-head">
                  <div className="big-icon">{pickIcon(active)}</div>
                  <div>
                    <div className="cat">{categoryKey}</div>
                    <h3>{active}</h3>
                  </div>
                </header>

                {detail.description && (
                  <p className="desc">{detail.description}</p>
                )}

                {detail.features && detail.features.length > 0 && (
                  <>
                    <div className="features-title">
                      {lang === 'es' ? 'Funcionalidades principales' : 'Key features'}
                    </div>
                    <ul className="features-list">
                      {detail.features.map((f, i) => (
                        <li key={i}>
                          <CheckIcon />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <div className="sheet-detail-empty">
                <div className="glyph">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
                  </svg>
                </div>
                <p>{lang === 'es' ? 'Selecciona un módulo para ver detalles.' : 'Select a module to view details.'}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default ModulesSheet;
