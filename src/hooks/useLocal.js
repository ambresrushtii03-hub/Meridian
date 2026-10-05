import { useState, useEffect } from 'react';

export default function useLocal(k,init){
  const [v,s]=useState(()=>{try{const x=localStorage.getItem(k);return x?JSON.parse(x):init}catch(e){return init}});
  useEffect(()=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},[k,v]);
  return [v,s];
}
