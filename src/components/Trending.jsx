import { A } from '../data/articles';

export default function Trending({open,saved,toggle}){
  const top=[...A].sort((a,b)=>b.v-a.v).slice(0,5);
  return (<aside className="rounded-2xl bg-ink p-5 text-white dark:bg-white/5 dark:ring-1 dark:ring-white/10">
    <h2 className="f-display text-2xl font-bold">Trending now</h2>
    <ol className="mt-3 space-y-1">{top.map((a,i)=>(
      <li key={a.id} onClick={()=>open(a.id)} className="group flex cursor-pointer items-start gap-3 rounded-lg p-2 transition hover:bg-white/10">
        <span className="f-display text-3xl font-bold text-sky-300 w-7">{i+1}</span>
        <div><p className="font-bold leading-snug group-hover:underline">{a.t}</p><p className="text-xs text-slate-400">{a.v}k reads · {a.c}</p></div>
      </li>))}</ol>
  </aside>);
}
