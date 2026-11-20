/* ===== ภาพวาดเรียบ: แฟ้ม เอกสาร อีเมล ถัง ===== */
(function(){
const K='#2d3b3a', S=`stroke="${K}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"`;
const svg=(i,vb='0 0 64 64')=>`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`;
const folder=(c,dark,sym)=>svg(`<path d="M6 16 a4 4 0 0 1 4 -4 h14 l5 5 h25 a4 4 0 0 1 4 4 v29 a4 4 0 0 1 -4 4 H10 a4 4 0 0 1 -4 -4 Z" fill="${dark}" ${S}/>
  <rect x="10" y="20" width="40" height="22" rx="2" fill="#fff" ${S}/><path d="M6 26 h52 v24 a4 4 0 0 1 -4 4 H10 a4 4 0 0 1 -4 -4 Z" fill="${c}" ${S}/>${sym}`);
const W=`fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;
const UI = {
  folder:{
    vital: folder('#f09595','#e24b4a',`<path d="M14 40 h8 l3 -6 l5 11 l4 -8 l3 3 h13" ${W}/>`),
    hist:  folder('#fac775','#ba7517',`<rect x="25" y="31" width="14" height="17" rx="2" ${W}/><path d="M29 37 h6 M29 42 h6" ${W}/>`),
    appt:  folder('#85b7eb','#185fa5',`<rect x="23" y="32" width="18" height="15" rx="2" ${W}/><path d="M23 37 h18 M28 29 v5 M36 29 v5" ${W}/>`)
  },
  doc: svg(`<path d="M14 6 h26 l12 12 v40 H14 Z" fill="#fff" ${S}/><path d="M40 6 v12 h12" fill="#e1f5ee" ${S}/><path d="M21 28 h22 M21 36 h22 M21 44 h14" ${S}/><circle cx="44" cy="46" r="7" fill="#1d9e75" ${S}/><path d="M44 42 v8 M40 46 h8" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`),
  shield: svg(`<path d="M32 6 L54 14 V30 C54 44 44 54 32 58 C20 54 10 44 10 30 V14 Z" fill="#5dcaa5" ${S}/><path d="M22 32 L29 39 L43 25" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>`),
  trash: svg(`<path d="M14 18 h36 l-3 38 a3 3 0 0 1 -3 3 H20 a3 3 0 0 1 -3 -3 Z" fill="#f09595" ${S}/><rect x="10" y="12" width="44" height="7" rx="3" fill="#e24b4a" ${S}/><path d="M26 12 v-4 h12 v4" fill="none" ${S}/><path d="M25 28 v22 M32 28 v22 M39 28 v22" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`),
  kind:{
    mail: svg(`<rect x="6" y="14" width="52" height="36" rx="5" fill="#b5d4f4" ${S}/><path d="M8 17 L32 35 L56 17" fill="none" ${S}/>`),
    file: svg(`<path d="M16 6 h22 l12 12 v40 H16 Z" fill="#fff" ${S}/><path d="M38 6 v12 h12" fill="#d3d1c7" ${S}/><path d="M23 30 h20 M23 38 h20 M23 46 h12" ${S}/>`),
    app:  svg(`<rect x="8" y="8" width="48" height="48" rx="10" fill="#9fe1cb" ${S}/><path d="M20 32 h24 M32 20 v24" stroke="#0f6e56" stroke-width="6" stroke-linecap="round"/>`),
    chat: svg(`<path d="M8 14 a6 6 0 0 1 6 -6 h36 a6 6 0 0 1 6 6 v22 a6 6 0 0 1 -6 6 H26 l-12 10 v-10 h0 a6 6 0 0 1 -6 -6 Z" fill="#c0dd97" ${S}/><circle cx="22" cy="25" r="3" fill="${K}"/><circle cx="32" cy="25" r="3" fill="${K}"/><circle cx="42" cy="25" r="3" fill="${K}"/>`),
    call: svg(`<rect x="18" y="4" width="28" height="56" rx="6" fill="#fac775" ${S}/><rect x="22" y="12" width="20" height="34" rx="2" fill="#fff" ${S}/><path d="M28 24 c0 8 6 14 14 14" fill="none" stroke="#1d9e75" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="52" r="2.5" fill="${K}"/>`),
    web:  svg(`<rect x="6" y="10" width="52" height="44" rx="5" fill="#fff" ${S}/><path d="M6 20 h52" ${S}/><circle cx="12" cy="15" r="1.8" fill="${K}"/><circle cx="18" cy="15" r="1.8" fill="${K}"/><path d="M32 26 L46 48 H18 Z" fill="#fac775" ${S}/><path d="M32 33 v7" stroke="${K}" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="44" r="1.8" fill="${K}"/>`),
    qr:   svg(`<rect x="8" y="8" width="48" height="48" rx="4" fill="#fff" ${S}/><g fill="${K}"><rect x="14" y="14" width="12" height="12"/><rect x="38" y="14" width="12" height="12"/><rect x="14" y="38" width="12" height="12"/><rect x="31" y="31" width="5" height="5"/><rect x="40" y="36" width="5" height="5"/><rect x="34" y="44" width="5" height="5"/><rect x="45" y="45" width="5" height="5"/></g><g fill="#fff"><rect x="17" y="17" width="6" height="6"/><rect x="41" y="17" width="6" height="6"/><rect x="17" y="41" width="6" height="6"/></g>`),
    wifi: svg(`<path d="M8 26 a34 34 0 0 1 48 0 M15 34 a24 24 0 0 1 34 0 M22 42 a14 14 0 0 1 20 0" fill="none" stroke="#378add" stroke-width="5" stroke-linecap="round"/><circle cx="32" cy="50" r="5" fill="#378add"/>`),
    usb:  svg(`<rect x="20" y="22" width="24" height="36" rx="5" fill="#afa9ec" ${S}/><rect x="24" y="6" width="16" height="16" fill="#d3d1c7" ${S}/><rect x="28" y="10" width="3" height="4" fill="${K}"/><rect x="33" y="10" width="3" height="4" fill="${K}"/><text x="32" y="46" text-anchor="middle" font-size="16" font-weight="700" fill="${K}" font-family="sans-serif">?</text>`)
  }
};
const KIND = {'📧':'mail','🎁':'mail','⚠️':'mail','💸':'mail','📎':'file','📅':'app','💊':'app','💬':'chat','💾':'usb','📞':'call','🌐':'web','🔳':'qr','📶':'wifi'};
UI.kindOf = e => KIND[e] || 'mail';
UI.kindLabel = {mail:'อีเมล', file:'ไฟล์แนบ', app:'แจ้งเตือนจากระบบ', chat:'ข้อความแชต', usb:'อุปกรณ์ที่พบ', call:'สายโทรเข้า', web:'หน้าเว็บ', qr:'QR code', wifi:'เครือข่าย Wi-Fi'};
window.UI = UI;
})();
