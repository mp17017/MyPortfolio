import{S as n,P as e,W as o,T as a,M as t,a as i,b as s,c as d,d as r,A as w,e as c,G as l,O as p,f as m}from"./vendor.45b58ba9.js";const u=new n,g=new e(75,window.innerWidth/window.innerHeight,.1,1e3),f=new o({canvas:document.querySelector("#bg")});f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),g.position.setZ(30),f.render(u,g);const b=new a(10,1,16,100),h=new t({color:246524}),j=new i(b,h);u.add(j);const y=(new s).load("jupiter.jpg"),x=(new s).load("JupNorm.jpg"),A=new i(new d(3,32,32),new t({map:y,normalMap:x}));u.add(A);const S=new r(16777215);S.position.set(25,25,25),u.add(S);const v=new w(16777215);u.add(v),new c(S),new l(200,50);const P=new p(g,f.domElement);Array(200).fill().forEach((function(){const n=new d(.25,24,24),e=new t({color:16777215}),o=new i(n,e),[a,s,r]=Array(3).fill().map((()=>m.randFloatSpread(100)));o.position.set(a,s,r),u.add(o)}));const W=(new s).load("galaxy.jpg");u.background=W,function n(){requestAnimationFrame(n),j.rotation.x+=.01,j.rotation.y+=.005,j.rotation.z+=.01,P.update(),f.render(u,g)}();
