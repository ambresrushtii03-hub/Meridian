import { useState, useEffect } from 'react';
import { A } from '../data/articles';
import Cover from '../components/Cover';
import BookmarkBtn from '../components/BookmarkBtn';
import ArticleCard from '../components/ArticleCard';
import { Icon, ICON } from '../components/Icon';

export default function Article({a,prefs,...p}){
  const [pct,setPct]=useState(0);
  useEffect(()=>{const f=()=>{const h=document.documentElement;setPct(Math.min(100,h.scrollTop/(h.scrollHeight-h.clientHeight||1)*100))};window.addEventListener('scroll',f);return()=>window.removeEventListener('scroll',f)},[]);
  const related=A.filter(x=>x.c===a.c&&x.id!==a.id).slice(0,2).concat(A.filter(x=>x.c!==a.c).slice(0,1));
  const on=p.saved.includes(a.id);
  return (<div>
    <div className="fixed left-0 top-0 z-40 h-1 bg-cobalt transition-[width] duration-100" style={{width:pct+'%'}}/>
    <article className="reveal mx-auto px-4 py-8" style={{maxWidth:prefs.wide?'56rem':'42rem'}}>
      <button onClick={()=>p.go({n:'home'})} className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cobalt"><Icon d={ICON.back} cls="w-4 h-4"/>Back to front page</button>
      <p className="text-sm font-bold text-cobalt dark:text-sky-300">{a.c}</p>
      <h1 className="f-display mt-2 text-4xl font-bold leading-tight sm:text-5xl">{a.t}</h1>
      <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">{a.x}</p>
      <div className="mt-6 flex items-center justify-between border-y border-black/10 py-3 text-sm dark:border-white/10">
        <span><b>{a.a}</b> · {a.d} · {a.r} min read</span>
        <BookmarkBtn on={on} onClick={()=>p.toggle(a.id)}/>
      </div>
      <Cover c={a.c} id={a.id} cls="mt-6 h-56 rounded-2xl sm:h-80"/>
      <div className={`drop mt-8 space-y-5 leading-[1.8] ${prefs.font==='serif'?'f-read':''}`} style={{fontSize:prefs.size}}>
        {a.b.map((t,i)=><p key={i}>{t}</p>)}
      </div>
      <h2 className="f-display mt-14 text-2xl font-bold">Keep reading</h2>
      <div className="mt-3">{related.map(r=><ArticleCard key={r.id} a={r} v="row" {...p}/>)}</div>
    </article>
  </div>);
}
