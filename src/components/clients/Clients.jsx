import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Clients.css';

import balanz from '../../assets/img-clients/balanz.webp';
import bancor from '../../assets/img-clients/bancor.webp';
import bcobacs from '../../assets/img-clients/bcobacs.webp';
import bcobica from '../../assets/img-clients/bcobica.webp';
import bcocoinag from '../../assets/img-clients/bcocoinag.webp';
import bcocolumbia from '../../assets/img-clients/bcocolumbia.webp';
import bcocomafi from '../../assets/img-clients/bcocomafi.webp';
import bcocorp from '../../assets/img-clients/bcocorp.webp';
import bcocorrientes from '../../assets/img-clients/bcocorrientes.webp';
import bcodelsol from '../../assets/img-clients/bcodelsol.webp';
import bcodino from '../../assets/img-clients/bcodino.webp';
import bcoentrerios from '../../assets/img-clients/bcoentrerios.webp';
import bcojulio from '../../assets/img-clients/bcojulio.webp';
import bcoficohsa from '../../assets/img-clients/bcoficohsa.webp';
import bcogalicia from '../../assets/img-clients/bcogalicia.webp';
import bcohipotecario from '../../assets/img-clients/bcohipotecario.webp';
import bcoicbc from '../../assets/img-clients/bcoicbc.webp';
import bcoind from '../../assets/img-clients/bcoind.webp';
import bcomacro from '../../assets/img-clients/bcomacro.webp';
import bcomariva from '../../assets/img-clients/bcomariva.webp';
import bcomeridian from '../../assets/img-clients/bcomeridian.webp';
import bcomunicipal from '../../assets/img-clients/bcomunicipal.webp';
import bconacion from '../../assets/img-clients/bconacion.webp';
import bcopat from '../../assets/img-clients/bcopat.webp';
import bcopiano from '../../assets/img-clients/bcopiano.webp';
import bcorioja from '../../assets/img-clients/bcorioja.webp';
import bcoroela from '../../assets/img-clients/bcoroela.webp';
import bcosaenz from '../../assets/img-clients/bcosaenz.webp';
import bcosanjuan from '../../assets/img-clients/bcosanjuan.webp';
import bcosantacruz from '../../assets/img-clients/bcosantacruz.webp';
import bcosantafe from '../../assets/img-clients/bcosantafe.webp';
import bcosantiago from '../../assets/img-clients/bcosantiago.webp';
import bcoservfin from '../../assets/img-clients/bcoservfin.webp';
import bcoservtrans from '../../assets/img-clients/bcoservtrans.webp';
import bcosucredito from '../../assets/img-clients/bcosucredito.webp';
import bcotoyota from '../../assets/img-clients/bcotoyota.webp';
import bcovalores from '../../assets/img-clients/bcovalores.webp';
import bibank from '../../assets/img-clients/bibank.webp';
import brubank from '../../assets/img-clients/brubank.webp';
import cajadevalores from '../../assets/img-clients/cajadevalores.webp';
import redlik from '../../assets/img-clients/redlink.webp';
import coopeande from '../../assets/img-clients/coopeande.webp';
import creditoregional from '../../assets/img-clients/creditoregional.webp';
import gire from '../../assets/img-clients/gire.webp';
import interbank from '../../assets/img-clients/interbank.webp';
import mercantil from '../../assets/img-clients/mercantil.webp';
import montemar from '../../assets/img-clients/montemar.webp';
import naranjax from '../../assets/img-clients/naranjax.webp';
import reba from '../../assets/img-clients/reba.webp';
import sancorseguros from '../../assets/img-clients/sancorseguros.webp';
import uala from '../../assets/img-clients/uala.webp';
import uilo from '../../assets/img-clients/uilo.webp';
import bcocomercio from '../../assets/img-clients/bcocomercio.webp';
import mercedes from '../../assets/img-clients/mercedes.webp';
import tarjetanaranja from '../../assets/img-clients/tarjetanaranja.webp';
import GPAT from '../../assets/img-clients/GPAT.webp';
import NAVE from '../../assets/img-clients/NAVE.webp';
import cajadeahorrospa from '../../assets/img-clients/cajadeahorrospa.webp';

const ALL_CLIENTS = [
  { img: bcosaenz,      name: 'Banco Saenz',              country: 'AR' },
  { img: bcocorp,       name: 'Banco de Córdoba Corp.',   country: 'AR' },
  { img: bcoind,        name: 'Banco Industrial',         country: 'AR' },
  { img: bcopat,        name: 'Banco Patagonia',          country: 'AR' },
  { img: bcorioja,      name: 'Banco Rioja',              country: 'AR' },
  { img: bcobica,       name: 'Banco Bica',               country: 'AR' },
  { img: bcodino,       name: 'Banco Dino',               country: 'AR' },
  { img: bcobacs,       name: 'Banco BACS',               country: 'AR' },
  { img: bcoentrerios,  name: 'Banco Entre Ríos',         country: 'AR' },
  { img: bcosanjuan,    name: 'Banco San Juan',           country: 'AR' },
  { img: bcosantacruz,  name: 'Banco Santa Cruz',         country: 'AR' },
  { img: bcosantafe,    name: 'Banco Santa Fe',           country: 'AR' },
  { img: brubank,       name: 'Brubank',                  country: 'AR' },
  { img: uilo,          name: 'Uilo',                     country: 'AR' },
  { img: uala,          name: 'Ualá',                     country: 'AR' },
  { img: bcodelsol,     name: 'Banco del Sol',            country: 'AR' },
  { img: naranjax,      name: 'Naranja X',                country: 'AR' },
  { img: tarjetanaranja,name: 'Tarjeta Naranja',          country: 'AR' },
  { img: bibank,        name: 'BIBANK',                   country: 'AR' },
  { img: bcocorrientes, name: 'Banco de Corrientes',      country: 'AR' },
  { img: bancor,        name: 'Bancor',                   country: 'AR' },
  { img: bcovalores,    name: 'Banco de Valores',         country: 'AR' },
  { img: bcomunicipal,  name: 'Banco Municipal',          country: 'AR' },
  { img: bcosantiago,   name: 'Banco Santiago del Estero',country: 'AR' },
  { img: bcoservtrans,  name: 'Servicios de Transporte',  country: 'AR' },
  { img: bcoroela,      name: 'Banco Roela',              country: 'AR' },
  { img: bcopiano,      name: 'Banco Piano',              country: 'AR' },
  { img: bcotoyota,     name: 'Toyota Cía. Financiera',   country: 'AR' },
  { img: bcocomafi,     name: 'Banco Comafi',             country: 'AR' },
  { img: bcogalicia,    name: 'Banco Galicia',            country: 'AR' },
  { img: bcohipotecario,name: 'Banco Hipotecario',        country: 'AR' },
  { img: cajadevalores, name: 'Caja de Valores',          country: 'AR' },
  { img: bcomariva,     name: 'Banco Mariva',             country: 'AR' },
  { img: bcoservfin,    name: 'Banco Serv. Financieros',  country: 'AR' },
  { img: bcocoinag,     name: 'Banco Coinag',             country: 'AR' },
  { img: reba,          name: 'Reba',                     country: 'AR' },
  { img: bcomeridian,   name: 'Banco Meridian',           country: 'AR' },
  { img: bcocolumbia,   name: 'Banco Columbia',           country: 'AR' },
  { img: bconacion,     name: 'Banco Nación',             country: 'AR' },
  { img: montemar,      name: 'Montemar',                 country: 'AR' },
  { img: bcoicbc,       name: 'ICBC',                     country: 'AR' },
  { img: gire,          name: 'Gire',                     country: 'AR' },
  { img: bcosucredito,  name: 'Sucrédito',                country: 'AR' },
  { img: bcojulio,      name: 'Banco Julio',              country: 'AR' },
  { img: creditoregional,name: 'Crédito Regional',        country: 'AR' },
  { img: balanz,        name: 'Balanz',                   country: 'AR' },
  { img: bcomacro,      name: 'Banco Macro',              country: 'AR' },
  { img: interbank,     name: 'Interbank',                country: 'AR' },
  { img: sancorseguros, name: 'Sancor Seguros',           country: 'AR' },
  { img: bcocomercio,   name: 'Banco Comercio',           country: 'AR' },
  { img: mercedes,      name: 'Mercedes',                 country: 'AR' },
  { img: redlik,        name: 'Redlink',                  country: 'AR' },
  { img: GPAT,          name: 'GPAT',                     country: 'AR' },
  { img: NAVE,          name: 'NAVE',                     country: 'AR' },
  { img: coopeande,     name: 'Coopeande',                country: 'CR' },
  { img: bcoficohsa,    name: 'Banco Ficohsa Honduras',   country: 'HN' },
  { img: uala,          name: 'Ualá Colombia',            country: 'CO' },
  { img: uala,          name: 'Ualá México',              country: 'MX' },
  { img: bcoficohsa,    name: 'Ficohsa Nicaragua',        country: 'NI' },
  { img: mercantil,     name: 'Banco Mercantil',          country: 'PA' },
  { img: cajadeahorrospa,name: 'Caja de Ahorros Panamá', country: 'PA' },
];

const AR_COUNT = ALL_CLIENTS.filter(c => c.country === 'AR').length;
const INTL_COUNT = ALL_CLIENTS.filter(c => c.country !== 'AR').length;

const ROWS = [
  ALL_CLIENTS.slice(0, 12),
  ALL_CLIENTS.slice(12, 24),
  ALL_CLIENTS.slice(24, 36),
  ALL_CLIENTS.slice(36, 48),
  ALL_CLIENTS.slice(48),
];

const DIRS = ['l', 'r', 'l', 'r', 'l'];
const DURS = ['55s', '60s', '50s', '65s', '58s'];

const COUNTRIES = [
  { code: 'all', flag: '🌎', label: 'Todos', labelEN: 'All' },
  { code: 'AR',  flag: '🇦🇷', label: 'Argentina', labelEN: 'Argentina' },
  { code: 'CO',  flag: '🇨🇴', label: 'Colombia',  labelEN: 'Colombia' },
  { code: 'CR',  flag: '🇨🇷', label: 'Costa Rica',labelEN: 'Costa Rica' },
  { code: 'HN',  flag: '🇭🇳', label: 'Honduras',  labelEN: 'Honduras' },
  { code: 'MX',  flag: '🇲🇽', label: 'México',    labelEN: 'Mexico' },
  { code: 'NI',  flag: '🇳🇮', label: 'Nicaragua', labelEN: 'Nicaragua' },
  { code: 'PA',  flag: '🇵🇦', label: 'Panamá',    labelEN: 'Panama' },
];

const Clients = () => {
  const { t, i18n } = useTranslation();
  const isES = i18n.language !== 'en';
  const [filter, setFilter] = useState('all');

  const isDim = (country) => filter !== 'all' && country !== filter;

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
              <div className="v">{AR_COUNT}</div>
              <div className="l">{isES ? 'Clientes Argentina' : 'Argentina clients'}</div>
            </div>
            <div className="s">
              <div className="v">{INTL_COUNT}</div>
              <div className="l">{isES ? 'Clientes internacionales' : 'International clients'}</div>
            </div>
            <div className="s">
              <div className="v">7</div>
              <div className="l">{isES ? 'Países' : 'Countries'}</div>
            </div>
          </div>
        </div>

        <div className="cli-rows reveal" style={{ '--reveal-delay': '80ms' }}>
          {ROWS.map((row, ri) => (
            <div key={ri} className="cli-row">
              <div className={`cli-track dir-${DIRS[ri]}`} style={{ '--dur': DURS[ri] }}>
                {[...row, ...row, ...row].map((c, i) => (
                  <div key={i} className={`cli-logo${isDim(c.country) ? ' dim' : ''}`}>
                    <img src={c.img} alt={c.name} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cli-countries reveal" style={{ '--reveal-delay': '120ms' }}>
          {COUNTRIES.map(({ code, flag, label, labelEN }) => (
            <button
              key={code}
              className={`cli-country${filter === code ? ' active' : ''}`}
              onClick={() => setFilter(code)}
            >
              <span>{flag}</span>
              {isES ? label : labelEN}
              <span className="ct">{code === 'all' ? '' : code}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
