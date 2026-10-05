import { A } from '../data/articles';

export default function Ticker(){
  const items=A.slice(0,6).map(a=>a.t);
  return (<div className="overflow-hidden bg-cobalt text-white text-sm"><div className="ticker flex w-max gap-10 whitespace-nowrap py-2 pr-10">
    {[...items,...items].map((t,i)=><span key={i}><b>Latest</b> &nbsp;{t}</span>)}</div></div>);
}
