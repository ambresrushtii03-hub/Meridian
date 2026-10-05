import { CATS } from '../data/articles';
import { Icon, ICON } from './Icon';

export default function Header({dark,setDark,q,setQ,go,cat,count,openPrefs,view}){
  return (<header className="sticky top-0 z-30 border-b border-black/5 bg-paper/85 backdrop-blur dark:border-white/10 dark:bg-[#0a0d18]/85">
    <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
      <button onClick={()=>go({n:'home'})} className="f-display text-2xl font-bold tracking-tight sm:text-3xl">Meridian<span className="text-cobalt">.</span></button>
      <div className="relative ml-auto flex-1 max-w-sm">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><Icon d={ICON.search} cls="w-4 h-4"/></span>
        <input value={q} onChange={e=>{setQ(e.target.value);go({n:'browse',cat:cat||'All'},true)}} placeholder="Search stories, authors, topics" aria-label="Search"
          className="w-full rounded-full bg-white py-2 pl-9 pr-3 text-sm outline-none ring-1 ring-black/10 transition focus:ring-2 focus:ring-cobalt dark:bg-white/10 dark:ring-white/10"/>
      </div>
      <button onClick={()=>go({n:'saved'})} aria-label="Saved articles" className="relative rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10"><Icon d={ICON.bm}/>{count>0&&<span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-cobalt px-1 text-[10px] font-bold text-white">{count}</span>}</button>
      <button onClick={openPrefs} aria-label="Reading preferences" className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10"><Icon d={ICON.type}/></button>
      <button onClick={()=>setDark(!dark)} aria-label="Toggle dark mode" className="rounded-full p-2 hover:bg-black/10 dark:hover:bg-white/10"><Icon d={dark?ICON.sun:ICON.moon}/></button>
    </div>
    <nav className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-2 text-sm font-bold [scrollbar-width:none]">
      {['All',...CATS].map(c=>(<button key={c} onClick={()=>{setQ('');go(c==='All'?{n:'home'}:{n:'browse',cat:c})}}
        className={`whitespace-nowrap rounded-full px-3 py-1.5 transition ${(view.n==='browse'&&view.cat===c&&!q)||(view.n==='home'&&c==='All')?'bg-ink text-white dark:bg-white dark:text-ink':'hover:bg-black/5 dark:hover:bg-white/10'}`}>{c}</button>))}
    </nav>
  </header>);
}
