document.addEventListener('DOMContentLoaded',()=>{
if(window.lucide)lucide.createIcons();
const tb=document.getElementById('theme');if(tb)tb.addEventListener('click',()=>{const d=document.documentElement,cur=d.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'),n=cur==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.setItem('theme',n)}catch(e){}});
const toc=document.getElementById('toc'),pr=document.getElementById('prose');
if(toc&&pr){const hs=pr.querySelectorAll('h2,h3');if(!hs.length)toc.closest('.panel').remove();hs.forEach(h=>{const li=document.createElement('li');li.className=h.tagName.toLowerCase();li.innerHTML='<a href="#'+h.id+'">'+h.textContent+'</a>';toc.appendChild(li)})}
const q=document.getElementById('q'),out=document.getElementById('results');let idx=null;
if(q)q.addEventListener('input',async()=>{if(!idx)idx=await (await fetch(window.SEARCH_URL)).json();const v=q.value.trim().toLowerCase();out.innerHTML='';if(v.length<2)return;
idx.filter(d=>(d.title+' '+(d.tags||[]).join(' ')+' '+d.text).toLowerCase().includes(v)).slice(0,8).forEach(d=>{const li=document.createElement('li');li.innerHTML='<a href="'+d.url+'">'+d.title+'</a>';out.appendChild(li)})});
});