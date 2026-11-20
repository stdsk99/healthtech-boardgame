/* ===== ตัวละครการ์ตูนชิบิ (เฉพาะภาพคน) ===== */
(function(){
const K = '#2b2523';
const STICK = 'chibiSticker';
const defs = `<defs><filter id="${STICK}" x="-12%" y="-12%" width="124%" height="124%"><feMorphology in="SourceAlpha" operator="dilate" radius="5" result="d"/><feFlood flood-color="#fff"/><feComposite in2="d" operator="in" result="w"/><feMerge><feMergeNode in="w"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`;
const G = (inner) => `<g filter="url(#${STICK})" stroke="${K}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">${inner}</g>`;
const L = (d, c=K, w=3.5) => `<path d="${d}" stroke="${c}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
const drop = (x,y) => `<path d="M${x} ${y} q8 10 0 15 q-8 -5 0 -15z" fill="#bfe8ff" stroke="${K}" stroke-width="2.5"/>`;

function chibi(o){
  const skin = o.skin || '#ffd8bd', hair = o.hair || '#3a2a22', shirt = o.shirt || '#9fd8f5';
  const x = o.extra || [];
  let back = '', body = '', head = '', front = '', over = '';
  /* ฉากหลังส่วนตัว */
  if(x.includes('chair')) back += `<rect x="52" y="120" width="156" height="112" rx="26" fill="#f2b880"/>`;
  if(x.includes('wheel')) back += `<circle cx="186" cy="200" r="34" fill="#dfe8f2"/><circle cx="186" cy="200" r="10" fill="#9aa7b4"/>`;
  if(x.includes('racket')) back += `<path d="M196 170 L216 226" stroke-width="9"/><ellipse cx="190" cy="138" rx="22" ry="30" fill="#e8f4ff" transform="rotate(-18 190 138)"/>`;
  /* ผมด้านหลัง */
  if(o.style==='long') back += `<path d="M72 108 C66 62 96 48 130 48 C164 48 194 62 188 108 L192 200 H68 Z" fill="${hair}"/>`;
  if(o.style==='bun') back += `<circle cx="130" cy="44" r="16" fill="${hair}"/><path d="M70 108 C66 62 94 50 130 50 C166 50 194 62 190 108 C190 130 180 146 170 150 H90 C80 146 70 130 70 108 Z" fill="${hair}"/>`;
  if(o.style==='pony') back += `<path d="M172 70 C200 70 210 100 200 124 C194 136 184 136 180 130 C190 112 186 92 168 84 Z" fill="${hair}"/>`;
  /* ลำตัว */
  if(!x.includes('swaddle')){
    body += `<path d="M86 232 V196 C86 176 104 166 130 166 C156 166 174 176 174 196 V232 Z" fill="${shirt}"/>`;
    body += x.includes('scrub') ? `<path d="M116 168 L130 186 L144 168" fill="${shirt}"/>` : `<path d="M118 168 L130 184 L142 168" fill="#fff"/>`;
    if(!x.includes('holdelbow') && !x.includes('bed')) body += `<circle cx="102" cy="214" r="10" fill="${skin}"/><circle cx="158" cy="214" r="10" fill="${skin}"/>`;
    if(x.includes('holdelbow')) body += `<circle cx="102" cy="214" r="10" fill="${skin}"/><path d="M164 186 C180 192 182 214 168 220 C158 224 146 218 146 208" fill="${skin}"/>`;
  } else {
    body += `<path d="M44 200 C56 160 96 150 130 152 C176 154 214 168 218 204 C220 226 204 234 180 234 H80 C56 234 38 222 44 200 Z" fill="#9fd8f5"/>`;
  }
  /* ศีรษะ */
  const r = o.style==='baby' ? `M80 136 C80 104 102 92 130 92 C158 92 180 104 180 136 C180 166 158 182 130 182 C102 182 80 166 80 136 Z`
                             : `M78 104 C78 76 100 64 130 64 C160 64 182 76 182 104 C182 138 160 156 130 156 C100 156 78 138 78 104 Z`;
  head += `<path d="${r}" fill="${skin}"/>`;
  if(o.style==='bald') head += `<ellipse cx="80" cy="96" rx="9" ry="14" fill="${hair}"/><ellipse cx="180" cy="96" rx="9" ry="14" fill="${hair}"/>`;
  if(['short','long','bun','pony'].includes(o.style) && !x.includes('cap'))
    head += `<path d="M74 100 C74 66 100 52 130 52 C160 52 186 66 186 100 C172 84 150 78 130 80 C110 78 88 84 74 100 Z" fill="${hair}"/>`;
  if(o.style==='baby') head += `<path d="M76 112 C74 72 100 56 130 56 C160 56 186 72 184 112 Z" fill="${o.hat||'#ffd27a'}"/><circle cx="130" cy="50" r="12" fill="${o.hat2||'#ffbe55'}"/><path d="M76 110 H184" stroke-width="12"/><path d="M76 110 H184" stroke-width="5" stroke="${o.hat2||'#ffbe55'}"/>`;
  if(x.includes('cap')) head += `<path d="M72 98 C72 62 100 48 130 48 C160 48 188 62 188 98 Z" fill="#5dcaa5"/>`;
  if(x.includes('headband')) head += `<rect x="76" y="76" width="108" height="14" rx="7" fill="#ff5a5a"/>`;
  if(x.includes('mask')) head += `<rect x="102" y="120" width="56" height="30" rx="10" fill="#9fe1cb"/>`;
  /* ด้านหน้า */
  if(x.includes('bed')) front += `<path d="M30 196 H230 V240 H30 Z" fill="#f4a3c0"/><path d="M30 196 H230" stroke-width="4"/><rect x="40" y="186" width="70" height="18" rx="9" fill="#fff"/>`;
  if(x.includes('laptop')) front += `<rect x="88" y="196" width="84" height="40" rx="6" fill="#d3d1c7"/>`;
  if(x.includes('coat')) front += `<path d="M86 232 V196 C86 176 104 166 130 166 C156 166 174 176 174 196 V232 Z" fill="#fff"/><path d="M118 168 L130 186 L142 168" fill="#2fbf90"/><circle cx="102" cy="214" r="10" fill="${skin}"/><circle cx="158" cy="214" r="10" fill="${skin}"/>`;
  if(x.includes('hand')) front += `<circle cx="182" cy="176" r="12" fill="${skin}"/>`;

  /* หน้า (นอกขอบสติกเกอร์) */
  const ey = o.style==='baby' ? 138 : 112, mx = 130, my = o.style==='baby' ? 160 : 140;
  let f = '';
  const mood = o.mood || 'happy';
  if(mood==='pain') f += L(`M100 ${ey-6} L114 ${ey+1} L100 ${ey+8} M160 ${ey-6} L146 ${ey+1} L160 ${ey+8}`, K, 4);
  else if(mood==='ko') f += L(`M103 ${ey-6} l12 12 M115 ${ey-6} l-12 12 M145 ${ey-6} l12 12 M157 ${ey-6} l-12 12`, K, 4);
  else if(mood==='sleep') f += L(`M102 ${ey} Q110 ${ey+8} 118 ${ey} M142 ${ey} Q150 ${ey+8} 158 ${ey}`);
  else f += `<ellipse cx="110" cy="${ey}" rx="5.5" ry="6.5" fill="${K}"/><ellipse cx="150" cy="${ey}" rx="5.5" ry="6.5" fill="${K}"/><circle cx="112" cy="${ey-3}" r="2" fill="#fff"/><circle cx="152" cy="${ey-3}" r="2" fill="#fff"/>`;
  if(mood==='sad'||mood==='tired') f += L(`M98 ${ey-13} L114 ${ey-19} M162 ${ey-13} L146 ${ey-19}`);
  f += `<ellipse cx="95" cy="${my-8}" rx="10" ry="6" fill="#ff9aa2" opacity=".75"/><ellipse cx="165" cy="${my-8}" rx="10" ry="6" fill="#ff9aa2" opacity=".75"/>`;
  if(!x.includes('mask')){
    if(mood==='happy') f += `<path d="M120 ${my-6} Q130 ${my+8} 140 ${my-6} Z" fill="#e05a5a" stroke="${K}" stroke-width="3" stroke-linejoin="round"/>`;
    if(mood==='sad'||mood==='tired') f += L(`M122 ${my+2} Q130 ${my-5} 138 ${my+2}`);
    if(mood==='pain') f += L(`M118 ${my} Q124 ${my-6} 130 ${my} Q136 ${my+6} 142 ${my}`);
    if(mood==='ko') f += `<ellipse cx="130" cy="${my}" rx="6" ry="7" fill="${K}"/>`;
    if(mood==='sleep') f += L(`M124 ${my} Q130 ${my+6} 136 ${my}`, K, 3);
  }
  if(x.includes('glasses')) f += `<circle cx="110" cy="${ey}" r="14" fill="#fff" fill-opacity=".2" stroke="#8a5a3a" stroke-width="3.5"/><circle cx="150" cy="${ey}" r="14" fill="#fff" fill-opacity=".2" stroke="#8a5a3a" stroke-width="3.5"/>` + L(`M124 ${ey-2} Q130 ${ey-6} 136 ${ey-2}`, '#8a5a3a');
  if(x.includes('cannula')) f += L('M80 126 C100 134 116 132 124 130 M180 126 C160 134 144 132 136 130 M124 130 Q130 127 136 130 M80 126 C64 150 70 190 92 236', '#3aa0e0');
  if(x.includes('thermo')) f += `<path d="M138 ${my+2} L166 ${my+14}" stroke="${K}" stroke-width="7" stroke-linecap="round"/><path d="M138 ${my+2} L166 ${my+14}" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><circle cx="166" cy="${my+14}" r="4" fill="#e24b4a"/>`;
  if(x.includes('sweat')) f += drop(196, 70);
  if(x.includes('puff')) f += `<path d="M204 112 q10 -8 20 0 q-10 8 -20 0z" fill="#fff" stroke="${K}" stroke-width="2.5"/>`;
  if(x.includes('zap')) f += L('M62 70 l10 12 h-8 l10 12 M198 70 l-10 12 h8 l-10 12', '#ef9f27', 4);
  if(x.includes('elbowpain')) f += `<circle cx="170" cy="204" r="9" fill="#ff6b6b" opacity=".6"/>` + L('M176 186 l6 -8 M184 196 l9 -3 M184 210 l9 3', '#e23b3b', 3);
  if(x.includes('backpain')) f += `<circle cx="84" cy="196" r="10" fill="#ff6b6b" opacity=".55"/>` + L('M70 186 l-8 -6 M66 198 l-10 0 M70 210 l-8 6', '#e23b3b', 3);
  if(x.includes('neckpain')) f += `<circle cx="148" cy="164" r="9" fill="#ff6b6b" opacity=".55"/>` + L('M160 160 l9 -4 M162 170 l9 2', '#e23b3b', 3);
  if(x.includes('sensor')) f += `<rect x="174" y="172" width="16" height="8" rx="3" fill="#fff" stroke="#e24b4a" stroke-width="2.5"/>` + L('M190 176 C210 176 220 190 226 206', '#e24b4a', 2.5);
  if(x.includes('zzz')) f += `<text x="196" y="74" font-size="24" fill="#b08ac0" font-weight="700" font-family="sans-serif">z</text><text x="214" y="54" font-size="17" fill="#b08ac0" font-weight="700" font-family="sans-serif">z</text>`;
  if(x.includes('steth')) f += L('M112 168 C108 192 120 198 130 198 C140 198 152 192 148 168', '#e24b4a') + `<circle cx="130" cy="200" r="5" fill="#bbb" stroke="${K}" stroke-width="2"/>`;
  if(x.includes('scalpel')) f += `<path d="M186 160 L214 136" stroke="${K}" stroke-width="8" stroke-linecap="round"/><path d="M186 160 L214 136" stroke="#d3d1c7" stroke-width="4" stroke-linecap="round"/>`;

  const bg = o.bg ? `<rect width="260" height="260" fill="${o.bg}"/><ellipse cx="130" cy="236" rx="${o.style==='baby'?90:80}" ry="10" fill="${o.shadow||'rgba(0,0,0,.12)'}"/>` : '';
  return `<svg viewBox="${o.vb||'0 0 260 260'}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${defs}${bg}${G(back + body + head + front)}${f}</svg>`;
}

const pat = {
  lumbar:   chibi({bg:'#ffe0cc', style:'bald', hair:'#d9d9de', shirt:'#f0997b', mood:'sad', extra:['glasses','backpain','sweat']}),
  cervical: chibi({bg:'#dbe9ff', style:'short', hair:'#2c2c2a', shirt:'#85b7eb', mood:'sad', extra:['laptop','neckpain','sweat']}),
  o2:       chibi({bg:'#8fd3f2', style:'bun', hair:'#e4e4e8', shirt:'#b6a6e6', mood:'tired', extra:['chair','glasses','cannula','puff','sweat']}),
  ems:      chibi({bg:'#fff1c9', style:'short', hair:'#633806', shirt:'#fac775', mood:'sad', extra:['wheel']}),
  shock:    chibi({bg:'#ffd59a', style:'pony', hair:'#5a3a2a', shirt:'#3cc79a', mood:'pain', extra:['racket','holdelbow','headband','elbowpain','sweat']}),
  aed:      chibi({bg:'#ffd1d1', style:'short', hair:'#444441', shirt:'#afa9ec', mood:'ko', extra:['zap']}),
  esu:      chibi({bg:'#c9f0e2', style:'short', shirt:'#5dcaa5', mood:'happy', extra:['scrub','cap','mask','scalpel']}),
  pump:     chibi({bg:'#ffe3ec', style:'long', hair:'#412402', shirt:'#f4c0d1', mood:'sad', extra:['thermo','sweat']}),
  incubator:chibi({bg:'#ffe3ec', style:'baby', skin:'#ffdcc4', mood:'sleep', extra:['swaddle','hand','sensor','zzz']}),
  suction:  chibi({bg:'#dfe8f2', style:'bald', hair:'#d9d9de', shirt:'#b5d4f4', mood:'tired', extra:['bed','sweat']})
};
const student = chibi({style:'short', hair:'#3a2a22', extra:['coat','steth'], vb:'60 36 140 140'});
const studentFull = chibi({bg:'#ffe3ec', style:'short', hair:'#3a2a22', extra:['coat','steth']});

window.ART = window.ART || {};
Object.assign(window.ART, {pat, student, studentFull, chibi});
window.DEV_IMG = {pump:'images/pump.png', incubator:'images/incubator.png'};
})();
