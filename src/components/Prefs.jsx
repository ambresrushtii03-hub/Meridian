import { Icon, ICON } from './Icon';

export default function Prefs({prefs,setPrefs,dark,setDark,close}){
  const Seg=({label,opts,val,on})=>(<div className="mt-6"><p className="mb-2 text-sm font-bold">{label}</p>
    <div className="flex rounded-full bg-black/5 p-1 dark:bg-white/10">{opts.map(([k,l])=>(<button key={k} onClick={()=>on(k)} className={`flex-1 rounded-full py-1.5 text-sm font-bold transition ${val===k?'bg-white shadow dark:bg-cobalt':''}`}>{l}</button>))}</div></div>);
  return (<div className="fixed inset-0 z-50 flex justify-end bg-black/50" onClick={close}>
    <div onClick={e=>e.stopPropagation()} className="slide h-full w-full max-w-sm overflow-y-auto bg-paper p-6 dark:bg-[#12162a]">
      <div className="flex items-center justify-between"><h2 className="f-display text-2xl font-bold">Reading preferences</h2><button aria-label="Close" onClick={close}><Icon d={ICON.x}/></button></div>
      <div className="mt-6"><p className="mb-2 text-sm font-bold">Text size: {prefs.size}px</p>
        <input type="range" min="15" max="26" value={prefs.size} onChange={e=>setPrefs({...prefs,size:+e.target.value})} className="w-full accent-cobalt"/></div>
      <Seg label="Typeface" val={prefs.font} opts={[['serif','Serif'],['sans','Sans']]} on={k=>setPrefs({...prefs,font:k})}/>
      <Seg label="Column width" val={prefs.wide?'w':'n'} opts={[['n','Narrow'],['w','Wide']]} on={k=>setPrefs({...prefs,wide:k==='w'})}/>
      <Seg label="Theme" val={dark?'d':'l'} opts={[['l','Light'],['d','Dark']]} on={k=>setDark(k==='d')}/>
      <div className="mt-8 rounded-xl bg-white p-4 ring-1 ring-black/5 dark:bg-white/5 dark:ring-white/10">
        <p className={`leading-[1.8] ${prefs.font==='serif'?'f-read':''}`} style={{fontSize:prefs.size}}>Preview: the quick brown fox reads the morning paper.</p></div>
      <p className="mt-4 text-xs text-slate-500">Your choices are saved in this browser.</p>
    </div></div>);
}
