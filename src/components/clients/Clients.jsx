import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Clients.css';

import balanz        from '../../assets/img-clients/balanz.webp';
import bancor        from '../../assets/img-clients/bancor.webp';
import bcobacs       from '../../assets/img-clients/bcobacs.webp';
import bcobica       from '../../assets/img-clients/bcobica.webp';
import bcocoinag     from '../../assets/img-clients/bcocoinag.webp';
import bcocolumbia   from '../../assets/img-clients/bcocolumbia.webp';
import bcocomafi     from '../../assets/img-clients/bcocomafi.webp';
import bcocorp       from '../../assets/img-clients/bcocorp.webp';
import bcocorrientes from '../../assets/img-clients/bcocorrientes.webp';
import bcodelsol     from '../../assets/img-clients/bcodelsol.webp';
import bcodino       from '../../assets/img-clients/bcodino.webp';
import bcoentrerios  from '../../assets/img-clients/bcoentrerios.webp';
import bcojulio      from '../../assets/img-clients/bcojulio.webp';
import bcoficohsa    from '../../assets/img-clients/bcoficohsa.webp';
import bcogalicia    from '../../assets/img-clients/bcogalicia.webp';
import bcohipotecario from '../../assets/img-clients/bcohipotecario.webp';
import bcoicbc       from '../../assets/img-clients/bcoicbc.webp';
import bcoind        from '../../assets/img-clients/bcoind.webp';
import bcomacro      from '../../assets/img-clients/bcomacro.webp';
import bcomariva     from '../../assets/img-clients/bcomariva.webp';
import bcomeridian   from '../../assets/img-clients/bcomeridian.webp';
import bcomunicipal  from '../../assets/img-clients/bcomunicipal.webp';
import bconacion     from '../../assets/img-clients/bconacion.webp';
import bcopat        from '../../assets/img-clients/bcopat.webp';
import bcopiano      from '../../assets/img-clients/bcopiano.webp';
import bcorioja      from '../../assets/img-clients/bcorioja.webp';
import bcoroela      from '../../assets/img-clients/bcoroela.webp';
import bcosaenz      from '../../assets/img-clients/bcosaenz.webp';
import bcosanjuan    from '../../assets/img-clients/bcosanjuan.webp';
import bcosantacruz  from '../../assets/img-clients/bcosantacruz.webp';
import bcosantafe    from '../../assets/img-clients/bcosantafe.webp';
import bcosantiago   from '../../assets/img-clients/bcosantiago.webp';
import bcoservfin    from '../../assets/img-clients/bcoservfin.webp';
import bcoservtrans  from '../../assets/img-clients/bcoservtrans.webp';
import bcosucredito  from '../../assets/img-clients/bcosucredito.webp';
import bcotoyota     from '../../assets/img-clients/bcotoyota.webp';
import bcovalores    from '../../assets/img-clients/bcovalores.webp';
import bibank        from '../../assets/img-clients/bibank.webp';
import brubank       from '../../assets/img-clients/brubank.webp';
import cajadevalores from '../../assets/img-clients/cajadevalores.webp';
import redlik        from '../../assets/img-clients/redlink.webp';
import coopeande     from '../../assets/img-clients/coopeande.webp';
import creditoregional from '../../assets/img-clients/creditoregional.webp';
import gire          from '../../assets/img-clients/gire.webp';
import interbank     from '../../assets/img-clients/interbank.webp';
import mercantil     from '../../assets/img-clients/mercantil.webp';
import montemar      from '../../assets/img-clients/montemar.webp';
import naranjax      from '../../assets/img-clients/naranjax.webp';
import reba          from '../../assets/img-clients/reba.webp';
import sancorseguros from '../../assets/img-clients/sancorseguros.webp';
import uala          from '../../assets/img-clients/uala.webp';
import bcocomercio   from '../../assets/img-clients/bcocomercio.webp';
import mercedes      from '../../assets/img-clients/mercedes.webp';
import tarjetanaranja from '../../assets/img-clients/tarjetanaranja.webp';
import GPAT          from '../../assets/img-clients/GPAT.webp';
import NAVE          from '../../assets/img-clients/NAVE.webp';
import cajadeahorrospa from '../../assets/img-clients/cajadeahorrospa.webp';

const ALL_CLIENTS = [
  { img: bcosaenz,       name: 'Banco Saenz',               country: 'AR' },
  { img: bcocorp,        name: 'Banco de Córdoba Corp.',    country: 'AR' },
  { img: bcoind,         name: 'Banco Industrial',          country: 'AR' },
  { img: bcopat,         name: 'Banco Patagonia',           country: 'AR' },
  { img: bcorioja,       name: 'Banco Rioja',               country: 'AR' },
  { img: bcobica,        name: 'Banco Bica',                country: 'AR' },
  { img: bcodino,        name: 'Banco Dino',                country: 'AR' },
  { img: bcobacs,        name: 'Banco BACS',                country: 'AR' },
  { img: bcoentrerios,   name: 'Banco Entre Ríos',          country: 'AR' },
  { img: bcosanjuan,     name: 'Banco San Juan',            country: 'AR' },
  { img: bcosantacruz,   name: 'Banco Santa Cruz',          country: 'AR' },
  { img: bcosantafe,     name: 'Banco Santa Fe',            country: 'AR' },
  { img: brubank,        name: 'Brubank',                   country: 'AR' },
  { img: bcodelsol,      name: 'Banco del Sol',             country: 'AR' },
  { img: naranjax,       name: 'Naranja X',                 country: 'AR' },
  { img: tarjetanaranja, name: 'Tarjeta Naranja',           country: 'AR' },
  { img: bibank,         name: 'BIBANK',                    country: 'AR' },
  { img: bcocorrientes,  name: 'Banco de Corrientes',       country: 'AR' },
  { img: bancor,         name: 'Bancor',                    country: 'AR' },
  { img: bcovalores,     name: 'Banco de Valores',          country: 'AR' },
  { img: bcomunicipal,   name: 'Banco Municipal',           country: 'AR' },
  { img: bcosantiago,    name: 'Banco Santiago del Estero', country: 'AR' },
  { img: bcoservtrans,   name: 'Servicios de Transporte',   country: 'AR' },
  { img: bcoroela,       name: 'Banco Roela',               country: 'AR' },
  { img: bcopiano,       name: 'Banco Piano',               country: 'AR' },
  { img: bcotoyota,      name: 'Toyota Cía. Financiera',    country: 'AR' },
  { img: bcocomafi,      name: 'Banco Comafi',              country: 'AR' },
  { img: bcogalicia,     name: 'Banco Galicia',             country: 'AR' },
  { img: bcohipotecario, name: 'Banco Hipotecario',         country: 'AR' },
  { img: cajadevalores,  name: 'Caja de Valores',           country: 'AR' },
  { img: bcomariva,      name: 'Banco Mariva',              country: 'AR' },
  { img: bcoservfin,     name: 'Banco Serv. Financieros',   country: 'AR' },
  { img: bcocoinag,      name: 'Banco Coinag',              country: 'AR' },
  { img: reba,           name: 'Reba',                      country: 'AR' },
  { img: bcomeridian,    name: 'Banco Meridian',            country: 'AR' },
  { img: bcocolumbia,    name: 'Banco Columbia',            country: 'AR' },
  { img: bconacion,      name: 'Banco Nación',              country: 'AR' },
  { img: bcoicbc,        name: 'ICBC',                      country: 'AR' },
  { img: gire,           name: 'Gire',                      country: 'AR' },
  { img: bcojulio,       name: 'Banco Julio',               country: 'AR' },
  { img: balanz,         name: 'Balanz',                    country: 'AR' },
  { img: bcomacro,       name: 'Banco Macro',               country: 'AR' },
  { img: sancorseguros,  name: 'Sancor Seguros',            country: 'AR' },
  { img: mercedes,       name: 'Mercedes-Benz Financiera',  country: 'AR' },
  { img: redlik,         name: 'Link',                      country: 'AR' },
  { img: GPAT,           name: 'GPAT',                      country: 'AR' },
  { img: NAVE,           name: 'Nave',                      country: 'AR' },
  { img: montemar,       name: 'Montemar',                  country: 'AR' },
  { img: bcocomercio,    name: 'Banco de Comercio',         country: 'AR' },
  { img: bcosucredito,   name: 'Supercrédito',              country: 'AR' },
  { img: creditoregional,name: 'Crédito Regional',          country: 'AR' },
  { img: interbank,      name: 'Interbanking',              country: 'AR' },
  // Multipaís
  { img: uala,           name: 'Ualá',                      country: ['AR', 'CO', 'MX'] },
  { img: bcoficohsa,     name: 'Ficohsa',                   country: ['HN', 'NI'] },
  // Costa Rica
  { img: coopeande,      name: 'Coopeande',                 country: 'CR' },
  // Panamá
  { img: mercantil,      name: 'Banco Mercantil',           country: 'PA' },
  { img: cajadeahorrospa,name: 'Caja de Ahorros',           country: ['AR', 'PA'] },
];

const countriesOf = (c) => (Array.isArray(c.country) ? c.country : [c.country]);

const TOTAL_CLIENTS = ALL_CLIENTS.length;
const TOTAL_COUNTRIES = [...new Set(ALL_CLIENTS.flatMap(countriesOf))].length;

// Reparto balanceado: cada fila queda con (casi) la misma cantidad de clientes,
// evitando filas cortas cuyo bloque sería más angosto que el viewport y dejaría
// ver el mismo logo repetido al entrar/salir por el otro extremo.
const ROW_COUNT = 5;
const ROWS = Array.from({ length: ROW_COUNT }, (_, i) => {
  const start = Math.floor((i * TOTAL_CLIENTS) / ROW_COUNT);
  const end = Math.floor(((i + 1) * TOTAL_CLIENTS) / ROW_COUNT);
  return ALL_CLIENTS.slice(start, end);
});
const DIRS = ['l', 'r', 'l', 'r', 'l'];
const DURS = ['55s', '62s', '50s', '67s', '58s'];

const COUNTRIES = [
  { code: 'all', flag: '🌎', label: 'Todos',      labelEN: 'All'        },
  { code: 'AR',  flag: '🇦🇷', label: 'Argentina',  labelEN: 'Argentina'  },
  { code: 'CO',  flag: '🇨🇴', label: 'Colombia',   labelEN: 'Colombia'   },
  { code: 'CR',  flag: '🇨🇷', label: 'Costa Rica', labelEN: 'Costa Rica' },
  { code: 'HN',  flag: '🇭🇳', label: 'Honduras',   labelEN: 'Honduras'   },
  { code: 'MX',  flag: '🇲🇽', label: 'México',     labelEN: 'Mexico'     },
  { code: 'NI',  flag: '🇳🇮', label: 'Nicaragua',  labelEN: 'Nicaragua'  },
  { code: 'PA',  flag: '🇵🇦', label: 'Panamá',     labelEN: 'Panama'     },
];

// Clientes agrupados por país (deduplicados por logo dentro de cada país).
// Usado en la vista estática de mobile, donde el carrousel no es cómodo.
const CLIENTS_BY_COUNTRY = COUNTRIES.filter((c) => c.code !== 'all').map(
  ({ code, flag, label, labelEN }) => ({
    code,
    flag,
    label,
    labelEN,
    items: ALL_CLIENTS
      .filter((c) => countriesOf(c).includes(code))
      .filter((c, i, arr) => arr.findIndex((x) => x.img === c.img) === i),
  }),
).filter((g) => g.items.length > 0);

// ── Subcomponents ─────────────────────────────────────────────────────────────

const LogoItem = ({ client, hoveredCountry }) => {
  const isHighlighted = !!hoveredCountry && countriesOf(client).includes(hoveredCountry);
  const isLargeCountry = hoveredCountry === 'AR';
  const fullEffect = isHighlighted && !isLargeCountry;
  const dim = !!hoveredCountry && !isHighlighted;

  return (
    <div className={`cli-logo${fullEffect ? ' highlight' : dim ? ' dim' : ''}`}>
      <img
        src={client.img}
        alt={client.name}
        loading="lazy"
        onError={(e) => { e.currentTarget.closest('.cli-logo').style.display = 'none'; }}
      />
    </div>
  );
};

const MarqueeRow = ({ row, dir, dur, hoveredCountry }) => (
  <div className="cli-row">
    <div className={`cli-track dir-${dir}`} style={{ '--dur': dur }}>
      {[...row, ...row, ...row].map((c, i) => (
        <LogoItem key={`${c.name}-${i}`} client={c} hoveredCountry={hoveredCountry} />
      ))}
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────

const Clients = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 760px)');
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <section id="clientes" className="clients">
      <div className="container">
        <div className="head">
          <div className="eyebrow reveal">03 · {isES ? 'Clientes' : 'Clients'}</div>
          <h2 className="h-section reveal" style={{ '--reveal-delay': '80ms', marginTop: 14 }}>
            {t('clients.title')}
          </h2>
          <p className="subtle reveal" style={{ '--reveal-delay': '160ms' }}>
            {t('clients.subtitle')}
          </p>
          <div className="clients-stats reveal" style={{ '--reveal-delay': '240ms' }}>
            <div className="s">
              <div className="v">{TOTAL_CLIENTS}</div>
              <div className="l">{isES ? 'Clientes' : 'Clients'}</div>
            </div>
            <div className="s">
              <div className="v">{TOTAL_COUNTRIES}</div>
              <div className="l">{isES ? 'Países' : 'Countries'}</div>
            </div>
          </div>
        </div>

        {isMobile ? (
          /* ── Mobile: grilla estática agrupada por país ── */
          <div className="cli-mobile reveal" style={{ '--reveal-delay': '80ms' }}>
            {CLIENTS_BY_COUNTRY.map(({ code, flag, label, labelEN, items }) => (
              <div className="cli-mgroup" key={code}>
                <div className="cli-mhead">
                  <span className="cli-mflag">{flag}</span>
                  <h3>{isES ? label : labelEN}</h3>
                  <span className="cli-mcount">{items.length}</span>
                  <span className="cli-mline" />
                </div>
                <div className="cli-mgrid">
                  {(() => {
                    const cols = items.length > 12 ? 4 : 3;
                    const GAP = 10;
                    return items.map((c, i) => (
                      <div
                        className="cli-mlogo"
                        key={`${c.name}-${i}`}
                        style={{ flex: `0 0 calc((100% - ${(cols - 1) * GAP}px) / ${cols})` }}
                      >
                        <img
                          src={c.img}
                          alt={c.name}
                          loading="lazy"
                          onError={(e) => { e.currentTarget.closest('.cli-mlogo').style.display = 'none'; }}
                        />
                      </div>
                    ));
                  })()}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ── Desktop: filas de marquee (reparto balanceado) ── */}
            <div className="cli-rows reveal" style={{ '--reveal-delay': '80ms' }}>
              {ROWS.map((row, i) => (
                <MarqueeRow
                  key={i}
                  row={row}
                  dir={DIRS[i]}
                  dur={DURS[i]}
                  hoveredCountry={hoveredCountry}
                />
              ))}
            </div>

            <div className="cli-countries reveal" style={{ '--reveal-delay': '120ms' }}>
              {COUNTRIES.map(({ code, flag, label, labelEN }) => (
                <span
                  key={code}
                  className={`cli-country${hoveredCountry === code || (code === 'all' && !hoveredCountry) ? ' active' : ''}`}
                  onMouseEnter={() => setHoveredCountry(code === 'all' ? null : code)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  <span>{flag}</span>
                  {isES ? label : labelEN}
                  {code !== 'all' && <span className="ct">{code}</span>}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Clients;
