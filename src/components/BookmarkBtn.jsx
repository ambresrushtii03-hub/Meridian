import { useState } from 'react';
import { Icon, ICON } from './Icon';

export default function BookmarkBtn({on,onClick,cls=''}){
  const [k,setK]=useState(0);
  return (<button aria-label={on?'Remove bookmark':'Save article'} aria-pressed={on} onClick={e=>{e.stopPropagation();setK(k+1);onClick()}}
    className={`rounded-full p-2 transition hover:bg-black/10 dark:hover:bg-white/10 ${on?'text-cobalt dark:text-sky-300':''} ${cls}`}>
    <span key={k} className={k?'pop inline-block':'inline-block'}><Icon d={ICON.bm} fill={on?'currentColor':'none'}/></span></button>);
}
