import { useState, useEffect } from 'react';
import { byId } from './data/articles';
import useLocal from './hooks/useLocal';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Prefs from './components/Prefs';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Saved from './pages/Saved';
import Article from './pages/Article';

export default function App(){
  const [dark,setDark]=useLocal('mer-dark',window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [saved,setSaved]=useLocal('mer-saved',[]);
  const [prefs,setPrefs]=useLocal('mer-prefs',{size:19,font:'serif',wide:false});
  const [view,setView]=useState({n:'home'});
  const [q,setQ]=useState('');
  const [showP,setShowP]=useState(false);
  useEffect(()=>{document.documentElement.classList.toggle('dark',dark)},[dark]);
  const go=(v,keep)=>{setView(v);if(!keep)window.scrollTo({top:0})};
  const open=id=>go({n:'article',id});
  const toggle=id=>setSaved(s=>s.includes(id)?s.filter(x=>x!==id):[...s,id]);
  const p={open,saved,toggle,go};
  return (<div className="min-h-screen">
    <Ticker/>
    <Header dark={dark} setDark={setDark} q={q} setQ={setQ} go={go} cat={view.cat} count={saved.length} openPrefs={()=>setShowP(true)} view={view}/>
    {view.n==='home'&&<Home {...p}/>}
    {view.n==='browse'&&<Browse q={q} cat={view.cat||'All'} {...p}/>}
    {view.n==='saved'&&<Saved {...p}/>}
    {view.n==='article'&&<Article a={byId(view.id)} prefs={prefs} {...p}/>}
    <footer className="mt-16 border-t border-black/10 py-10 text-center text-sm text-slate-500 dark:border-white/10"><span className="f-display text-lg font-bold text-ink dark:text-white">Meridian.</span><br/>Independent reporting, built for reading. Sample content for demonstration.</footer>
    {showP&&<Prefs prefs={prefs} setPrefs={setPrefs} dark={dark} setDark={setDark} close={()=>setShowP(false)}/>}
  </div>);
}
