import { A, CATS, byId } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Trending from '../components/Trending';

export default function Home(p){
  const feat=byId(3);
  const rest=A.filter(a=>a.id!==3);
  return (<main className="mx-auto max-w-6xl px-4 py-8">
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2"><ArticleCard a={feat} v="lg" {...p}/></div>
      <Trending {...p}/>
    </div>
    {CATS.map(c=>{const items=rest.filter(a=>a.c===c).slice(0,3);return (
      <section key={c} className="mt-14">
        <div className="mb-4 flex items-end justify-between border-b border-black/10 pb-2 dark:border-white/10">
          <h2 className="f-display text-3xl font-bold">{c}</h2>
          <button onClick={()=>p.go({n:'browse',cat:c})} className="text-sm font-bold text-cobalt hover:underline dark:text-sky-300">See all {c.toLowerCase()} stories</button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((a,i)=><ArticleCard key={a.id} a={a} i={i} {...p}/>)}</div>
      </section>)})}
  </main>);
}
