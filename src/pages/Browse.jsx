import { useState, useEffect, useMemo } from 'react';
import { A, CATS } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Browse({q,cat,...p}){
  const [c,setC]=useState(cat);
  useEffect(()=>setC(cat),[cat]);
  const list=useMemo(()=>A.filter(a=>(c==='All'||a.c===c)&&(!q||(a.t+a.x+a.a+a.c).toLowerCase().includes(q.toLowerCase()))),[q,c]);
  return (<main className="mx-auto max-w-6xl px-4 py-8">
    <h1 className="f-display text-4xl font-bold">{q?`Results for “${q}”`:c==='All'?'All stories':c}</h1>
    <div className="mt-4 flex flex-wrap gap-2">{['All',...CATS].map(x=>(<button key={x} onClick={()=>setC(x)} className={`rounded-full px-3 py-1 text-sm font-bold ring-1 transition ${c===x?'bg-cobalt text-white ring-cobalt':'ring-black/10 hover:bg-black/5 dark:ring-white/20 dark:hover:bg-white/10'}`}>{x}</button>))}</div>
    {list.length?<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((a,i)=><ArticleCard key={a.id} a={a} i={i} {...p}/>)}</div>
    :<p className="mt-10 text-slate-500">No stories match. Try a different word or choose another category.</p>}
  </main>);
}
