import { useState } from 'react';
import Scene from './Scene';
import { KW } from '../data/articles';

export default function Cover({c,id,cls=''}){
  const [ok,setOk]=useState(false),[bad,setBad]=useState(false);
  return (<div className={`relative overflow-hidden bg-slate-800 ${cls}`}>
    <div className="cv absolute inset-0"><Scene c={c} id={id}/>
      {!bad&&<img src={`https://loremflickr.com/800/500/${KW[id]}?lock=${id}`} alt={`${c} story photo`} loading="lazy" onLoad={()=>setOk(true)} onError={()=>setBad(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ok?'opacity-100':'opacity-0'}`}/>}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"/>
    </div>
    <span className="absolute left-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur">{c}</span>
  </div>);
}
