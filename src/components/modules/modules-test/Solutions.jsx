import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import alephLogoGif from '../../../assets/ANIMACION-LOGO-ALEPH-v02-+-alpha.gif';
import ModulesSheet from './modules-popup/ModulosPopup';
import { modulesDataES } from '../data/modulesData.es';
import { modulesDataEN } from '../data/modulesData.en';

const Solutions = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(0);
  const [sheetOpen, setSheetOpen] = useState(false);

  const lang = i18n.language === 'en' ? 'en' : 'es';
  const modulesData = lang === 'en' ? modulesDataEN : modulesDataES;

  const tabs = [
    {
      key: 'grc',
      label: t('solutions.tabs.grc'),
      title: t('solutions.tabMapping.grc'),
      categoryKey: lang === 'es'
        ? 'GRC (Gobierno, Riesgo y Cumplimiento)'
        : 'GRC (Governance, Risk and Compliance)',
      desc: lang === 'es'
        ? 'Centraliza gobierno corporativo, gestión integral de riesgos y cumplimiento normativo en una única plataforma auditable.'
        : 'Centralize governance, integrated risk management and regulatory compliance on a single auditable platform.',
      bullets: lang === 'es'
        ? ['Mapa de riesgos por proceso y entidad', 'Matrices de control y KRIs en tiempo real', 'Trazabilidad inmutable de evidencias']
        : ['Risk map by process and entity', 'Real-time control matrices and KRIs', 'Immutable evidence trail'],
    },
    {
      key: 'plaft',
      label: t('solutions.tabs.plaft'),
      title: t('solutions.tabMapping.plaft'),
      categoryKey: lang === 'es'
        ? 'PLAFT (Prevención de Lavado de Activos y Financiamiento del Terrorismo)'
        : 'AML/CFT (Anti-Money Laundering and Counter-Terrorism Financing)',
      desc: lang === 'es'
        ? 'Prevención de lavado de activos y financiamiento del terrorismo con monitoreo, scoring y reportería a la UIF.'
        : 'Anti-money laundering with monitoring, scoring and regulatory reporting.',
      bullets: lang === 'es'
        ? ['Reglas configurables y scoring por cliente', 'Generación automática de ROS', 'Listas PEP, OFAC, ONU integradas']
        : ['Configurable rules and per-customer scoring', 'Automatic SAR generation', 'PEP, OFAC, UN lists integrated'],
    },
    {
      key: 'continuity',
      label: t('solutions.tabs.businessContinuity'),
      title: t('solutions.tabMapping.businessContinuity'),
      categoryKey: lang === 'es' ? 'Continuidad de Negocio' : 'Business Continuity',
      desc: lang === 'es'
        ? 'Diseña, ejecuta y prueba planes de continuidad alineados a ISO 22301, con escenarios y BIA por unidad.'
        : 'Design, run and test continuity plans aligned with ISO 22301.',
      bullets: lang === 'es'
        ? ['BIA por proceso, RTO y RPO', 'Pruebas de continuidad versionadas', 'Tablero de incidentes y lecciones aprendidas']
        : ['BIA, RTO and RPO per process', 'Versioned continuity testing', 'Incident board and lessons learned'],
    },
    {
      key: 'credit',
      label: t('solutions.tabs.creditLoss'),
      title: t('solutions.tabMapping.creditLoss'),
      categoryKey: lang === 'es' ? 'Pérdida Crediticia Esperada' : 'Expected Credit Loss',
      desc: lang === 'es'
        ? 'Pérdida crediticia esperada (NIIF 9 / IFRS 9) con modelos PD/LGD/EAD y stress testing regulatorio.'
        : 'Expected credit loss (IFRS 9) with PD/LGD/EAD models and regulatory stress testing.',
      bullets: lang === 'es'
        ? ['Cohortes, staging y forward-looking', 'Backtesting y validación de modelos', 'Reportes BCRA, SBS y SFC']
        : ['Cohorts, staging and forward-looking', 'Backtesting and model validation', 'Regulatory reports'],
    },
    {
      key: 'audit',
      label: t('solutions.tabs.audit'),
      title: t('solutions.tabMapping.audit'),
      categoryKey: lang === 'es' ? 'Auditoría' : 'Audit',
      desc: lang === 'es'
        ? 'Plan anual, ejecución de auditorías internas y seguimiento de recomendaciones con flujos de aprobación.'
        : 'Annual plan, internal audit execution and recommendation tracking with approval flows.',
      bullets: lang === 'es'
        ? ['Universo auditable y plan basado en riesgo', 'Papeles de trabajo digitales', 'Seguimiento de hallazgos hasta cierre']
        : ['Audit universe and risk-based plan', 'Digital workpapers', 'Findings tracked to closure'],
    },
    {
      key: 'netdisc',
      label: t('solutions.tabs.netDiscovery'),
      title: t('solutions.tabMapping.netDiscovery'),
      categoryKey: 'Net Discovery',
      desc: lang === 'es'
        ? 'Descubre activos, dependencias y exposiciones de tu red para reducir superficie de ataque.'
        : 'Discover assets, dependencies and exposures across your network.',
      bullets: lang === 'es'
        ? ['Inventario CMDB automatizado', 'Mapa de dependencias y vulnerabilidades', 'Alertas de configuración insegura']
        : ['Automated CMDB inventory', 'Dependency and vulnerability map', 'Insecure config alerts'],
    },
    {
      key: 'legajo',
      label: t('solutions.tabs.digitalFile'),
      title: lang === 'es' ? 'Legajo de Clientes' : 'Customer File',
      categoryKey: lang === 'es' ? 'Legajo de Clientes' : 'Customer File',
      desc: lang === 'es'
        ? 'Legajo digital integral con onboarding, KYC continuo y conservación normativa de documentación.'
        : 'Digital customer file with onboarding, continuous KYC and regulatory retention.',
      bullets: lang === 'es'
        ? ['Onboarding 100% digital con OCR', 'KYC y due diligence periódica', 'Versionado y firmas digitales']
        : ['Fully digital onboarding with OCR', 'Periodic KYC and due diligence', 'Versioning and digital signatures'],
    },
  ];

  const tab = tabs[active];

  const moduleCount = useMemo(() => {
    const cat = modulesData[tab.categoryKey];
    return cat ? Object.keys(cat).length : 0;
  }, [tab.categoryKey, modulesData]);

  return (
    <section id="soluciones" className="solutions">
      <div className="container">
        <div className="head">
          <div>
            <div className="eyebrow reveal">01 · {lang === 'es' ? 'Plataforma' : 'Platform'}</div>
            <h2 className="h-section reveal" style={{ '--reveal-delay': '80ms', marginTop: 14 }}>
              {t('solutions.title')}
            </h2>
          </div>
          <p className="subtle reveal" style={{ '--reveal-delay': '160ms' }}>
            {lang === 'es'
              ? 'Siete módulos interoperables que comparten datos, flujos y permisos. Activa solo lo que necesitas — crece sin perder trazabilidad.'
              : 'Seven interoperable modules sharing data, flows and permissions. Activate only what you need — scale without losing traceability.'}
          </p>
        </div>

        <div className="tabs-shell reveal" style={{ '--reveal-delay': '80ms' }}>
          <div className="tabs-rail" role="tablist" aria-label={t('solutions.ariaLabels.tablist')}>
            {tabs.map((tb, i) => (
              <button
                key={tb.key}
                className={`tab ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
              >
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {tb.label}
              </button>
            ))}
          </div>

          <div className="tabs-body">
            <div className="tab-content">
              <h3>{tab.title}</h3>
              <p>{tab.desc}</p>
              <ul className="tab-bullets">
                {tab.bullets.map((b, i) => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9.5" opacity=".35" />
                      <path d="M8 12.5l3 3 5-6" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="tab-actions">
                <button className="btn btn-primary" onClick={() => setSheetOpen(true)}>
                  {lang === 'es' ? 'Ver módulos' : 'View modules'} <span className="arr">→</span>
                </button>
                {moduleCount > 0 && (
                  <span className="modules-count">
                    <span className="n">{moduleCount}</span>
                    <span>{lang === 'es' ? (moduleCount === 1 ? 'módulo' : 'módulos') : (moduleCount === 1 ? 'module' : 'modules')}</span>
                  </span>
                )}
              </div>
            </div>

            <div className="tab-visual">
              <img className="logo-anim" src={alephLogoGif} alt="Aleph Manager" loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at 80% 20%, rgba(110,195,247,.08), transparent 40%), radial-gradient(circle at 20% 80%, rgba(139,124,248,.08), transparent 40%)' }}>
                <div style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--fg-3)', textTransform: 'uppercase' }}>
                  // {tab.key}
                </div>
                <div style={{ position: 'absolute', bottom: 14, right: 14, fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--c-cyan)' }}>
                  ▲ 99.97% uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sheetOpen && (
        <ModulesSheet
          tabKey={tab.key}
          tabLabel={tab.title}
          categoryKey={tab.categoryKey}
          modulesData={modulesData}
          lang={lang}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </section>
  );
};

export default Solutions;
