import Cover from './Cover';
import BookmarkBtn from './BookmarkBtn';

export default function ArticleCard({a,v='md',open,saved,toggle,i=0}){
  const on=saved.includes(a.id);
  const meta=<p className="text-xs text-slate-500 dark:text-slate-400">{a.a} · {a.r} min read</p>;
  if(v==='row') return (
    <article onClick={()=>open(a.id)} className="card group flex cursor-pointer gap-3 rounded-xl p-2 transition hover:bg-white dark:hover:bg-white/5">
      <Cover c={a.c} id={a.id} cls="h-20 w-24 shrink-0 rounded-lg"/>
      <div className="min-w-0 flex-1"><h4 className="f-display font-bold leading-snug group-hover:text-cobalt dark:group-hover:text-sky-300 line-clamp-2">{a.t}</h4>{meta}</div>
      <BookmarkBtn on={on} onClick={()=>toggle(a.id)} cls="self-start"/>
    </article>);
  const lg=v==='lg';
  return (
    <article onClick={()=>open(a.id)} style={{animationDelay:`${i*70}ms`}} className="card reveal group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl dark:bg-white/5 dark:ring-white/10">
      <Cover c={a.c} id={a.id} cls={lg?'h-64 sm:h-96':'h-44'}/>
      <div className={lg?'p-6 sm:p-8':'p-5'}>
        <h3 className={`f-display font-bold leading-tight group-hover:text-cobalt dark:group-hover:text-sky-300 transition-colors ${lg?'text-3xl sm:text-5xl':'text-xl'}`}>{a.t}</h3>
        <p className={`mt-3 text-slate-600 dark:text-slate-300 ${lg?'text-lg max-w-2xl':'text-sm line-clamp-2'}`}>{a.x}</p>
        <div className="mt-4 flex items-center justify-between">{meta}<BookmarkBtn on={on} onClick={()=>toggle(a.id)}/></div>
      </div>
    </article>);
}
