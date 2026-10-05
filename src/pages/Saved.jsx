import { A } from '../data/articles';
import ArticleCard from '../components/ArticleCard';

export default function Saved(p){
  const list=A.filter(a=>p.saved.includes(a.id));
  return (<main className="mx-auto max-w-6xl px-4 py-8"><h1 className="f-display text-4xl font-bold">Saved for later</h1>
    {list.length?<div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((a,i)=><ArticleCard key={a.id} a={a} i={i} {...p}/>)}</div>
    :<p className="mt-6 text-slate-500">Nothing saved yet. Tap the bookmark on any story and it will appear here.</p>}</main>);
}
