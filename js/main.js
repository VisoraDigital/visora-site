/* VISORA DIGITAL - interações do site */
(function(){
var N="5549988874571",$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
function wa(t){return"https://wa.me/"+N+"?text="+encodeURIComponent(t)}
var bg=document.getElementById("bg"),mn=document.getElementById("mn");
bg.onclick=function(){var o=mn.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
$("#mn a").forEach(function(a){a.onclick=function(){mn.classList.remove("open");bg.setAttribute("aria-expanded","false")}});
document.addEventListener("pointerdown",function(e){var b=e.target.closest(".btn");if(!b)return;var r=b.getBoundingClientRect(),s=Math.max(r.width,r.height)/2,d=document.createElement("span");d.className="rip";d.style.cssText="width:"+s+"px;height:"+s+"px;left:"+(e.clientX-r.left-s/2)+"px;top:"+(e.clientY-r.top-s/2)+"px";b.appendChild(d);setTimeout(function(){d.remove()},650)});
function tg(box,btn){var d=$(".det",box)[0],o=box.classList.toggle("open");d.style.maxHeight=o?d.scrollHeight+"px":"0";btn.setAttribute("aria-expanded",o);var t=$("span",btn)[0];if(btn.classList.contains("more")&&t)t.textContent=o?"Mostrar menos":"Saiba mais"}
$(".more").forEach(function(b){b.onclick=function(){tg(b.closest(".card"),b)}});
$(".q").forEach(function(b){b.onclick=function(){tg(b.closest(".card"),b)}});
$(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.background="radial-gradient(170px circle at "+(e.clientX-r.left)+"px "+(e.clientY-r.top)+"px,rgba(56,189,248,.12),#0F1729)"});c.addEventListener("pointerleave",function(){c.style.background=""})});
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
$(".rv").forEach(function(el,i){el.style.transitionDelay=(i%3)*90+"ms";io.observe(el)});io.observe(document.getElementById("tl"));
var ch=document.getElementById("ch"),cio=new IntersectionObserver(function(es){if(es[0].isIntersecting){cio.disconnect();$(".m",ch).forEach(function(m,i){setTimeout(function(){m.classList.add("show")},rm?0:i*900)})}},{threshold:.4});cio.observe(ch);
document.getElementById("fm").onsubmit=function(e){e.preventDefault();var n=document.getElementById("nm").value.trim(),r=document.getElementById("rt").value.trim(),m=document.getElementById("ms").value.trim(),t="Olá! "+(n?"Meu nome é "+n+". ":"")+"Tenho interesse em: "+document.getElementById("it").value+"."+(r?" Contato: "+r+".":"")+(m?" "+m:"");var a=document.createElement("a");a.href=wa(t);a.target="_blank";a.rel="noopener noreferrer";document.body.appendChild(a);a.click();a.remove()};
var cv=document.getElementById("cv"),x=cv.getContext("2d"),W,H,P=[],ptr={x:-999,y:-999},run=false,dpr=Math.min(devicePixelRatio||1,2);
function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;cv.width=W*dpr;cv.height=H*dpr;x.setTransform(dpr,0,0,dpr,0,0);var n=W<600?34:60;P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35})}
function draw(){x.clearRect(0,0,W,H);var D=W<600?105:140;
for(var i=0;i<P.length;i++){var a=P[i];if(!rm){a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;var dx=ptr.x-a.x,dy=ptr.y-a.y,d=Math.hypot(dx,dy);if(d<130&&d>1){a.x+=dx/d*.7;a.y+=dy/d*.7}}
x.fillStyle="rgba(56,189,248,.7)";x.beginPath();x.arc(a.x,a.y,1.7,0,6.3);x.fill();
for(var j=i+1;j<P.length;j++){var b=P[j],l=Math.hypot(a.x-b.x,a.y-b.y);if(l<D){x.strokeStyle="rgba(56,189,248,"+(.22*(1-l/D))+")";x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
if(ptr.x>0){x.strokeStyle="rgba(56,189,248,.5)";x.beginPath();x.arc(ptr.x,ptr.y,18,0,6.3);x.stroke()}
if(run&&!rm)requestAnimationFrame(draw)}
function mv(e){var r=cv.getBoundingClientRect();ptr.x=e.clientX-r.left;ptr.y=e.clientY-r.top}
cv.addEventListener("pointermove",mv);cv.addEventListener("pointerdown",mv);cv.addEventListener("pointerleave",function(){ptr.x=ptr.y=-999});
size();draw();addEventListener("resize",function(){size();draw()});
new IntersectionObserver(function(es){var v=es[0].isIntersecting;if(v&&!run){run=true;draw()}else if(!v)run=false}).observe(cv);
addEventListener("resize",function(){$(".card.open .det").forEach(function(d){d.style.maxHeight=d.scrollHeight+"px"})});
})();
