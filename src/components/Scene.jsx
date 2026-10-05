const R=s=>()=>(s=(s*9301+49297)%233280)/233280;
const PAL={Technology:['#1b1a6e','#2563eb','#7dd3fc'],Business:['#063d33','#0f9d8a','#fde68a'],Science:['#070b26','#3b2a8f','#c4b5fd'],Culture:['#6b1d0f','#f59e0b','#fff7ed'],Health:['#134e2a','#84cc16','#ecfccb']};

export default function Scene({c,id}){
  const r=R(id*7+3),[a,b,l]=PAL[c],gid='g'+id;
  const rr=(n,m=1)=>Array.from({length:n},()=>r()*m);
  let art=null;
  if(c==='Technology'){
    const n=Array.from({length:12},()=>[Math.round(r()*40)*10,Math.round(r()*24)*10]);
    art=<g><g stroke={l} strokeOpacity=".45" fill="none" strokeWidth="1.5">{n.map(([x,y],i)=>i>0&&<path key={i} d={`M${n[i-1][0]} ${n[i-1][1]}H${x}V${y}`}/>)}</g>
      {n.map(([x,y],i)=><circle key={i} cx={x} cy={y} r={3+i%3*2} fill={l} opacity=".8"/>)}
      <rect x="150" y="70" width="100" height="100" rx="14" fill="#0b1030" stroke={l} strokeWidth="2.5"/>
      <rect x="175" y="95" width="50" height="50" rx="8" fill={b}/>
      {[0,1,2,3].map(i=><g key={i} stroke={l} strokeWidth="3"><path d={`M${165+i*23} 70v-18M${165+i*23} 170v18`}/><path d={`M150 ${85+i*23}h-18M250 ${85+i*23}h18`}/></g>)}</g>;
  }else if(c==='Business'){
    const h=[50,70,62,98,90,130,120,165];
    art=<g><g fill={l} opacity=".18">{rr(9,1).map((v,i)=><rect key={i} x={i*46} y={140-v*90} width="34" height={110+v*90}/>)}</g>
      {h.map((v,i)=><rect key={i} x={30+i*42} y={215-v*(1+r()*.2)} width="28" height={v*1.2} rx="4" fill={i>5?l:b} opacity=".9"/>)}
      <polyline points={h.map((v,i)=>`${44+i*42},${200-v*1.25}`).join(' ')} fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="338" cy={200-165*1.25} r="8" fill="#fff"/></g>;
  }else if(c==='Science'){
    const s=rr(70).map((v,i)=>[r()*400,r()*240,r()*1.8+.4]);
    art=<g>{s.map(([x,y,z],i)=><circle key={i} cx={x} cy={y} r={z} fill="#fff" opacity={.4+r()*.6}/>)}
      <circle cx="270" cy="110" r="62" fill={b}/><circle cx="252" cy="92" r="62" fill="#0b1030" opacity=".35"/>
      <ellipse cx="270" cy="110" rx="105" ry="20" fill="none" stroke={l} strokeWidth="4" transform="rotate(-18 270 110)"/>
      <path d="M40 240Q90 160 140 240Z" fill="#050818"/><path d="M80 180l12-30" stroke={l} strokeWidth="3"/><circle cx="92" cy="150" r="5" fill={l}/>
      {[18,34,50].map(k=><path key={k} d={`M${92-k} ${150-k}A${k*1.4} ${k*1.4} 0 0 1 ${92+k} ${150-k}`} fill="none" stroke={l} strokeOpacity={.7-k/90} strokeWidth="2"/>)}</g>;
  }else if(c==='Culture'){
    art=<g><circle cx="90" cy="70" r="46" fill={l} opacity=".9"/>
      <g transform="translate(270 125)"><circle r="95" fill="#17090a"/>{[20,32,44,56,68,80].map(k=><circle key={k} r={k+r()*2} fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="1.5"/>)}<circle r="26" fill={a}/><circle r="26" fill="none" stroke={l} strokeWidth="2"/><circle r="4" fill="#17090a"/><path d="M-95 0A95 95 0 0 1 0 -95" stroke="#fff" strokeOpacity=".3" strokeWidth="5" fill="none"/></g>
      <path d="M0 215Q80 180 160 215T330 200V240H0Z" fill="#17090a" opacity=".5"/></g>;
  }else{
    art=<g><circle cx="300" cy="75" r="40" fill={l}/><circle cx="300" cy="75" r="58" fill={l} opacity=".25"/>
      <path d="M0 170Q90 110 200 165T400 150V240H0Z" fill="#14532d" opacity=".75"/>
      <path d="M0 205Q110 150 230 200T400 190V240H0Z" fill="#0b3a1d"/>
      <path d="M95 215C90 170 120 150 160 150C165 190 135 215 95 215Z" fill={b}/><path d="M95 215C115 185 135 170 160 150" stroke="#0b3a1d" strokeWidth="2.5" fill="none"/>
      {rr(6).map((v,i)=><circle key={i} cx={20+i*62+v*20} cy={40+v*50} r="2.5" fill="#fff" opacity=".6"/>)}</g>;
  }
  return (<svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
    <defs><linearGradient id={gid} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a}/><stop offset="1" stopColor={b}/></linearGradient></defs>
    <rect width="400" height="240" fill={`url(#${gid})`}/>{art}</svg>);
}
