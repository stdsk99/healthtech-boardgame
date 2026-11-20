/* ===== ภาพประกอบสไตล์การ์ตูน (SVG) ===== */
(function(){
const K = '#2d3b3a';
const S = `stroke="${K}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;
const S2 = `stroke="${K}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
const svg = (inner, vb='0 0 100 100') => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
const face = (cx, cy, s=1, mood='happy') => {
  const e = 5.5*s, r = 2.4*s;
  let eyes = `<circle cx="${cx-e}" cy="${cy}" r="${r}" fill="${K}"/><circle cx="${cx+e}" cy="${cy}" r="${r}" fill="${K}"/>`;
  let mouth = `<path d="M${cx-3.5*s} ${cy+4.5*s} q${3.5*s} ${3.5*s} ${7*s} 0" fill="none" ${S2}/>`;
  if(mood==='sad') mouth = `<path d="M${cx-3.5*s} ${cy+7*s} q${3.5*s} ${-3.5*s} ${7*s} 0" fill="none" ${S2}/>`;
  if(mood==='ko'){ const d=2.4*s; eyes = [cx-e,cx+e].map(x=>`<path d="M${x-d} ${cy-d} l${2*d} ${2*d} M${x+d} ${cy-d} l${-2*d} ${2*d}" ${S2}/>`).join(''); mouth = `<ellipse cx="${cx}" cy="${cy+6*s}" rx="${2.4*s}" ry="${2*s}" fill="${K}"/>`; }
  if(mood==='sleep') eyes = [cx-e,cx+e].map(x=>`<path d="M${x-2.4*s} ${cy} q${2.4*s} ${2.4*s} ${4.8*s} 0" fill="none" ${S2}/>`).join('');
  const blush = `<circle cx="${cx-e-3.5*s}" cy="${cy+4*s}" r="${2.6*s}" fill="#f4a3b8" opacity=".7"/><circle cx="${cx+e+3.5*s}" cy="${cy+4*s}" r="${2.6*s}" fill="#f4a3b8" opacity=".7"/>`;
  return eyes + mouth + blush;
};

/* ---------- เครื่องมือแพทย์ ---------- */
const dev = {
  lumbar: svg(`<rect x="12" y="64" width="6" height="22" rx="2" fill="#888780" ${S2}/><rect x="56" y="64" width="6" height="22" rx="2" fill="#888780" ${S2}/>
    <rect x="6" y="52" width="66" height="14" rx="6" fill="#9fe1cb" ${S}/><rect x="9" y="44" width="20" height="10" rx="5" fill="#fff" ${S}/>
    <rect x="40" y="48" width="10" height="20" rx="3" fill="#afa9ec" ${S}/><path d="M50 58 H74" ${S}/>
    <rect x="72" y="30" width="22" height="56" rx="7" fill="#f5c4b3" ${S}/><rect x="76" y="36" width="14" height="9" rx="2" fill="#e1f5ee" ${S2}/>${face(83,58,.7)}`),
  cervical: svg(`<rect x="14" y="8" width="72" height="9" rx="4.5" fill="#d3d1c7" ${S}/><path d="M30 17 L42 46 M70 17 L58 46" ${S}/>
    <path d="M78 17 V52" ${S}/><rect x="70" y="52" width="16" height="24" rx="6" fill="#fac775" ${S}/>
    <path d="M32 46 Q50 92 68 46 Z" fill="#afa9ec" ${S}/>${face(50,60,.75)}`),
  o2: svg(`<circle cx="38" cy="88" r="5" fill="${K}"/><circle cx="62" cy="88" r="5" fill="${K}"/>
    <rect x="26" y="14" width="48" height="72" rx="14" fill="#9fe1cb" ${S}/><rect x="34" y="22" width="32" height="14" rx="4" fill="#fff" ${S2}/>
    <text x="50" y="33" text-anchor="middle" font-size="10" font-weight="700" fill="#0f6e56" font-family="sans-serif">O₂</text>
    ${face(50,56,.9)}<path d="M74 48 C94 48 96 76 82 82 C74 85 70 78 76 74" fill="none" stroke="#378add" stroke-width="3" stroke-linecap="round"/>`),
  ems: svg(`<path d="M64 44 C80 38 80 26 84 24" fill="none" stroke="#e24b4a" stroke-width="3" stroke-linecap="round"/><path d="M64 62 C80 66 82 76 84 78" fill="none" stroke="#378add" stroke-width="3" stroke-linecap="round"/>
    <rect x="80" y="14" width="14" height="14" rx="4" fill="#fff" ${S}/><rect x="80" y="72" width="14" height="14" rx="4" fill="#fff" ${S}/>
    <rect x="14" y="30" width="52" height="44" rx="12" fill="#fac775" ${S}/><circle cx="26" cy="42" r="5" fill="#fff" ${S2}/>${face(42,56,.85)}
    <path d="M46 8 L38 22 H46 L40 32" fill="none" stroke="#ba7517" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`),
  shock: svg(`<rect x="30" y="56" width="16" height="30" rx="7" fill="#7f77dd" ${S}/><rect x="14" y="38" width="58" height="22" rx="11" fill="#afa9ec" ${S}/>
    <rect x="70" y="42" width="10" height="14" rx="3" fill="#fff" ${S}/>${face(40,48,.75)}
    <path d="M86 40 q6 9 0 18" fill="none" stroke="#d85a30" stroke-width="3" stroke-linecap="round"/><path d="M92 34 q10 15 0 30" fill="none" stroke="#d85a30" stroke-width="3" stroke-linecap="round"/>`),
  aed: svg(`<path d="M38 22 V14 H62 V22" fill="none" ${S}/><rect x="14" y="22" width="72" height="62" rx="14" fill="#97c459" ${S}/>
    <path d="M50 74 C28 60 32 42 43 44 C47 45 50 49 50 49 C50 49 53 45 57 44 C68 42 72 60 50 74 Z" fill="#fff" ${S2}/>
    <path d="M53 50 L46 60 H53 L48 68" fill="none" stroke="#e24b4a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${face(50,33,.6)}`),
  esu: svg(`<path d="M64 52 C80 52 78 32 82 24" fill="none" ${S}/><rect x="78" y="6" width="9" height="22" rx="3" fill="#fff" ${S} transform="rotate(20 82 17)"/>
    <path d="M92 2 l2 5 5 1 -5 2 -2 5 -2 -5 -5 -2 5 -1z" fill="#ef9f27"/>
    <rect x="10" y="36" width="56" height="44" rx="10" fill="#b5d4f4" ${S}/><rect x="17" y="43" width="24" height="11" rx="3" fill="#fff" ${S2}/>
    <circle cx="54" cy="48" r="4" fill="#e24b4a" ${S2}/>${face(38,66,.8)}`),
  pump: svg(`<path d="M50 6 V92 M34 92 H66" stroke="#888780" stroke-width="4" stroke-linecap="round"/>
    <path d="M38 8 H62 V24 Q62 33 50 33 Q38 33 38 24 Z" fill="#e6f1fb" ${S}/><path d="M50 33 V44" stroke="#378add" stroke-width="3"/>
    <rect x="26" y="44" width="48" height="34" rx="9" fill="#9fe1cb" ${S}/><rect x="32" y="49" width="16" height="8" rx="2" fill="#fff" ${S2}/>${face(54,64,.75)}
    <path d="M62 78 C66 88 78 86 84 94" fill="none" stroke="#378add" stroke-width="3" stroke-linecap="round"/>`),
  incubator: svg(`<rect x="26" y="72" width="6" height="18" fill="#888780" ${S2}/><rect x="68" y="72" width="6" height="18" fill="#888780" ${S2}/>
    <rect x="12" y="58" width="76" height="16" rx="6" fill="#f4c0d1" ${S}/>
    <ellipse cx="57" cy="52" rx="13" ry="7" fill="#fff" ${S2}/><circle cx="40" cy="49" r="8" fill="#f8d5b8" ${S2}/>${face(40,48,.45,'sleep')}
    <path d="M18 58 V40 Q18 22 36 22 H64 Q82 22 82 40 V58" fill="#e6f1fb" fill-opacity=".55" ${S}/><path d="M28 32 Q34 27 42 27" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`),
  suction: svg(`<path d="M37 18 C37 4 12 6 8 26" fill="none" ${S}/><rect x="25" y="18" width="24" height="34" rx="6" fill="#e6f1fb" ${S}/><rect x="28" y="36" width="18" height="13" rx="3" fill="#f7c1c1"/>
    <rect x="14" y="50" width="72" height="36" rx="11" fill="#ed93b1" ${S}/><circle cx="68" cy="34" r="13" fill="#fff" ${S}/><path d="M68 34 L75 27" stroke="#e24b4a" stroke-width="3" stroke-linecap="round"/>
    ${face(50,68,.85)}`)
};

/* ---------- ตัวละคร ---------- */
function avatar(o){
  const skin = o.skin || '#f8d5b8', hair = o.hair || '#3b2a20', shirt = o.shirt || '#85b7eb';
  let back = '', top = '', ex = '', front = '';
  if(o.style==='long') back = `<path d="M26 46 Q24 14 50 14 Q76 14 74 46 V70 H26 Z" fill="${hair}" ${S}/>`;
  if(o.style==='bun') back = `<circle cx="50" cy="15" r="9" fill="${hair}" ${S}/>`;
  if(o.style==='short'||o.style==='long'||o.style==='bun') top = `<path d="M28 42 Q27 18 50 18 Q73 18 72 42 Q64 30 50 31 Q36 30 28 42 Z" fill="${hair}" ${S}/>`;
  if(o.style==='bald') top = `<path d="M29 46 q-5 -8 1 -15 M71 46 q5 -8 -1 -15" fill="none" stroke="${hair}" stroke-width="5" stroke-linecap="round"/>`;
  if(o.style==='baby') top = `<path d="M46 21 q4 -8 9 -1" fill="none" ${S2}/>`;
  const x = o.extra || [];
  if(x.includes('bed')) front += `<path d="M4 80 H96 V99 H4 Z" fill="#b5d4f4" ${S}/>`;
  if(x.includes('wheel')) back += `<circle cx="74" cy="84" r="15" fill="none" stroke="${K}" stroke-width="4"/><path d="M74 69 V99 M59 84 H89" stroke="#888780" stroke-width="2"/>`;
  if(x.includes('glasses')) ex += `<circle cx="44" cy="44" r="6.5" fill="none" ${S2}/><circle cx="56" cy="44" r="6.5" fill="none" ${S2}/>`;
  if(x.includes('headband')) ex += `<rect x="28" y="28" width="44" height="6" rx="3" fill="#e24b4a" ${S2}/>`;
  if(x.includes('cap')) ex += `<path d="M27 40 Q27 15 50 15 Q73 15 73 40 Z" fill="#5dcaa5" ${S}/>`;
  if(x.includes('mask')) ex += `<rect x="37" y="49" width="26" height="14" rx="5" fill="#9fe1cb" ${S2}/>`;
  if(x.includes('cannula')) ex += `<path d="M27 52 Q50 60 73 52" fill="none" stroke="#378add" stroke-width="2.5"/>`;
  if(x.includes('sweat')) ex += `<path d="M76 26 q5 7 0 10 q-5 -3 0 -10z" fill="#85b7eb" ${S2}/>`;
  if(x.includes('thermo')) ex += `<path d="M55 55 L72 63" stroke="#e24b4a" stroke-width="3.5" stroke-linecap="round"/>`;
  if(x.includes('zap')) ex += `<path d="M78 22 l-6 8 h6 l-6 8 M22 22 l6 8 h-6 l6 8" fill="none" stroke="#ef9f27" stroke-width="3" stroke-linecap="round"/>`;
  if(x.includes('laptop')) front += `<rect x="28" y="78" width="44" height="20" rx="3" fill="#d3d1c7" ${S}/><circle cx="50" cy="88" r="2.5" fill="#fff"/>`;
  if(x.includes('racket')) front += `<path d="M78 72 L72 92" stroke="#ba7517" stroke-width="4" stroke-linecap="round"/><ellipse cx="83" cy="60" rx="10" ry="13" fill="#fff" ${S}/>`;
  if(x.includes('coat')) front += `<path d="M41 66 L50 82 L59 66" fill="#1d9e75" ${S2}/>`;
  if(x.includes('bottle')) front += `<rect x="64" y="70" width="12" height="20" rx="4" fill="#fff" ${S2}/><rect x="66" y="64" width="8" height="7" rx="2" fill="#f4c0d1" ${S2}/>`;
  const headR = o.style==='baby' ? 24 : 22;
  const body = `<path d="M22 99 Q22 66 50 66 Q78 66 78 99 Z" fill="${shirt}" ${S}/>`;
  const head = `<circle cx="50" cy="44" r="${headR}" fill="${skin}" ${S}/>`;
  const f = x.includes('mask') ? face(50,46,1,'happy').replace(/<path[^>]*q[^>]*\/>/,'') : face(50,46,1,o.mood||'happy');
  return svg(back + body + head + f + top + ex + front);
}
const pat = {
  lumbar:   avatar({style:'bald', hair:'#c9c7bf', shirt:'#f0997b', mood:'sad', extra:['glasses','sweat']}),
  cervical: avatar({style:'short', hair:'#2c2c2a', shirt:'#85b7eb', mood:'sad', extra:['laptop','sweat']}),
  o2:       avatar({style:'bun', hair:'#d3d1c7', shirt:'#c0dd97', mood:'sad', extra:['glasses','cannula']}),
  ems:      avatar({style:'short', hair:'#633806', shirt:'#fac775', extra:['wheel']}),
  shock:    avatar({style:'long', hair:'#2c2c2a', shirt:'#5dcaa5', mood:'sad', extra:['headband','racket']}),
  aed:      avatar({style:'short', hair:'#444441', shirt:'#afa9ec', mood:'ko', extra:['zap']}),
  esu:      avatar({style:'short', shirt:'#5dcaa5', extra:['cap','mask']}),
  pump:     avatar({style:'long', hair:'#412402', shirt:'#f4c0d1', mood:'sad', extra:['thermo']}),
  incubator:avatar({style:'baby', skin:'#fbdcc6', shirt:'#fff', mood:'sleep', extra:['bottle']}),
  suction:  avatar({style:'bald', hair:'#d3d1c7', shirt:'#b5d4f4', mood:'sad', extra:['bed']})
};
const student = avatar({style:'short', hair:'#2c2c2a', shirt:'#fff', extra:['coat']});

/* ---------- ไอคอนสถานี (เส้นขาวบนพื้นสี) ---------- */
const W = `fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"`;
const st = {
  device: svg(`<path d="M12 6 V16 A8 8 0 0 0 28 16 V6" ${W}/><path d="M20 24 V28 A6 6 0 0 0 32 28 V25" ${W}/><circle cx="32" cy="21" r="3.6" ${W}/>`,'0 0 40 40'),
  repair: svg(`<path d="M27 5 A8 8 0 0 0 19 16 L7 28 A3.2 3.2 0 0 0 12 33 L24 21 A8 8 0 0 0 35 13 L29 16 L25 15 L24 11 Z" ${W}/>`,'0 0 40 40'),
  iot:    svg(`<circle cx="20" cy="20" r="3" fill="#fff"/><path d="M14 14 A8 8 0 0 0 14 26 M26 14 A8 8 0 0 1 26 26 M9 9 A15 15 0 0 0 9 31 M31 9 A15 15 0 0 1 31 31 M20 23 V36" ${W}/>`,'0 0 40 40'),
  data:   svg(`<path d="M5 34 H35" ${W}/><path d="M10 30 V20 M18 30 V11 M26 30 V23 M33 30 V15" ${W}/>`,'0 0 40 40'),
  cyber:  svg(`<path d="M20 4 L33 9 V19 C33 27 27 33 20 36 C13 33 7 27 7 19 V9 Z" ${W}/><path d="M14 20 L18 24 L26 16" ${W}/>`,'0 0 40 40')
};

/* ---------- ของตกแต่งช่องเดิน ---------- */
const deco = [
  svg(`<path d="M20 33 C6 24 6 12 13 11 C17 10 20 15 20 15 C20 15 23 10 27 11 C34 12 34 24 20 33 Z" fill="#f09595" ${S2}/>`,'0 0 40 40'),
  svg(`<g transform="rotate(-40 20 20)"><rect x="7" y="13" width="26" height="13" rx="6.5" fill="#fff" ${S2}/><path d="M20 13 H26.5 A6.5 6.5 0 0 1 26.5 26 H20 Z" fill="#f0997b" ${S2}/></g>`,'0 0 40 40'),
  svg(`<path d="M16 7 H24 V16 H33 V24 H24 V33 H16 V24 H7 V16 H16 Z" fill="#5dcaa5" ${S2}/>`,'0 0 40 40'),
  svg(`<rect x="16" y="5" width="8" height="22" rx="4" fill="#fff" ${S2}/><circle cx="20" cy="30" r="6" fill="#e24b4a" ${S2}/>`,'0 0 40 40'),
  svg(`<g transform="rotate(-35 20 20)"><rect x="3" y="13" width="34" height="14" rx="7" fill="#fac775" ${S2}/><rect x="14" y="13" width="12" height="14" fill="#faeeda" ${S2}/></g>`,'0 0 40 40'),
  svg(`<path d="M13 6 C27 12 13 22 27 28 M27 6 C13 12 27 22 13 28" fill="none" stroke="#7f77dd" stroke-width="3" stroke-linecap="round"/><path d="M16 11 H24 M16 23 H24" stroke="#afa9ec" stroke-width="2.5"/>`,'0 0 40 34')
];

/* ---------- โรงพยาบาลกลางกระดาน ---------- */
const hospital = svg(`
  <ellipse cx="150" cy="150" rx="150" ry="14" fill="#c0dd97"/>
  <path d="M30 40 q8 -12 20 -4 q10 -8 18 4 q8 2 4 10 h-44 q-8 -4 2 -10z" fill="#fff" opacity=".9"/>
  <path d="M225 28 q8 -12 20 -4 q10 -8 18 4 q8 2 4 10 h-44 q-8 -4 2 -10z" fill="#fff" opacity=".9"/>
  <circle cx="40" cy="118" r="18" fill="#97c459" ${S}/><rect x="37" y="132" width="6" height="16" fill="#854f0b" ${S2}/>
  <circle cx="262" cy="114" r="22" fill="#639922" ${S}/><rect x="259" y="132" width="6" height="16" fill="#854f0b" ${S2}/>
  <rect x="80" y="60" width="140" height="90" rx="6" fill="#fff" ${S}/><rect x="120" y="36" width="60" height="40" rx="6" fill="#fff" ${S}/>
  <rect x="138" y="42" width="24" height="24" rx="4" fill="#e24b4a" ${S2}/><path d="M150 46 V62 M142 54 H158" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
  <g fill="#b5d4f4" ${S2}><rect x="92" y="74" width="20" height="16" rx="3"/><rect x="188" y="74" width="20" height="16" rx="3"/><rect x="92" y="100" width="20" height="16" rx="3"/><rect x="188" y="100" width="20" height="16" rx="3"/></g>
  <rect x="134" y="104" width="32" height="46" rx="4" fill="#9fe1cb" ${S}/><path d="M150 104 V150" ${S2}/>
  <rect x="104" y="138" width="10" height="12" rx="2" fill="#f4c0d1" ${S2}/>`, '0 0 300 165');

window.ART = {dev, pat, student, st, deco, hospital};
})();
