import{$ as d,A as a,B as k,C as ie,D as _,E as ne,F as re,G as ae,H as se,I as pe,J as ce,K as le,L as T,M as O,N as me,O as R,P as de,Q as ue,R as fe,S as ge,T as ve,U as he,V as be,W as S,X as Ce,Y as v,Z as g,_ as ye,a as L,aa as w,b as $,ba as F,c as W,d as J,e as Q,f as G,g as Y,h as q,i as b,j as p,k as l,l as m,m as V,n as f,o as X,p as c,r as Z,s as n,t as r,u as i,v as K,w as x,x as ee,y as te,z as oe}from"./chunk-PMCLOV53.js";var I=class t{ngOnInit(){}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-landing"]],decls:14,vars:3,consts:[["rel","preload","fetchpriority","high","as","image","href",b`../assets/img/May23/059610010030.webp`,"type","image/webp"],["rel","preload","fetchpriority","high","as","image","href",b`../assets/digital/japan/c/DSCF1170.webp`,"type","image/webp"],["rel","preload","fetchpriority","high","as","image","href",b`assets/media/portisheadLandscape2.mp4`,"type","image/webp"],[1,"container"],["poster","assets/media/compressed.webp","autoplay","","playsinline","","muted","","src","assets/media/portisheadLandscape2.mp4",1,"backgroundImage",3,"autoplay","muted","loop"],[1,"row","centreClass"],[1,"col-12",2,"text-align","center"],["routerLink","/choose","onmouseover","changeImageOpacityLanding(0.3)","onmouseout","changeImageOpacityLanding(0.8)",1,"frontCTA"],[1,"row","centreHorizontal"],[1,"col-1-sm",2,"padding-top","20px","text-align","center"],["role","button","id","landingText",1,"button-53"]],template:function(e,s){e&1&&(i(0,"link",0)(1,"link",1)(2,"link",2),n(3,"div",3)(4,"video",4),a(5," Your browser does not support the video tag. "),r(),n(6,"div",5)(7,"div",6)(8,"a",7),a(9,"harry fresco "),n(10,"div",8)(11,"div",9)(12,"button",10),a(13,"Entry, please"),r()()()()()()()),e&2&&(p(4),c("autoplay",!0)("muted",!0)("loop",!0))},dependencies:[d,g],encapsulation:2})};var P=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-choose"]],decls:23,vars:0,consts:[["rel","preload","fetchpriority","high","as","image","href",b`../assets/digital/japan/DSCF1865-2.webp`,"type","image/webp"],["rel","preload","fetchpriority","high","as","image","href",b`../assets/img/May23/059610010030.webp`,"type","image/webp"],[1,"container","affectedByLoad",2,"position","inherit"],[1,"row","centreClass"],[1,"col-lg-6"],["src","assets/digital/japan/c/DSCF1170.webp",1,"backgroundImageChoose","row2"],[1,"ribbon","ribbon-top-left"],[1,"row","centreClassChoose",2,"text-align","center"],["routerLink","/digital/japan","onmouseover","changeImageOpacity(0.3, '.row2')","onmouseout","changeImageOpacity(0.8, '.row2')",1,"frontCTA"],[1,"row","centreHorizontalChoose"],[1,"col-1-sm",2,"text-align","center"],["role","button","id","musicText",1,"button-53"],["src","assets/img/May23/059610010030.webp",1,"backgroundImageChoose","row1"],["routerLink","/analogue/may23","onmouseover","changeImageOpacity(0.3, '.row1')","onmouseout","changeImageOpacity(0.8, '.row1')",1,"frontCTA"]],template:function(e,s){e&1&&(i(0,"link",0)(1,"link",1),n(2,"div",2)(3,"div",3)(4,"div",4),i(5,"img",5),n(6,"div",6)(7,"span"),a(8,"new japan pics"),r()(),n(9,"div",7)(10,"a",8)(11,"div",9)(12,"div",10)(13,"button",11),a(14,"digital"),r()()()()()(),n(15,"div",4),i(16,"img",12),n(17,"div",7)(18,"a",13)(19,"div",9)(20,"div",10)(21,"button",11),a(22,"analogue"),r()()()()()()()())},dependencies:[d,g],encapsulation:2})};var Le=t=>({active:t}),xe=t=>({dark:t}),_e=t=>({darkText:t});function ke(t,o){if(t&1&&i(0,"button",12),t&2){let e=o.index;c("ngClass",_(2,Le,e==0)),X("data-bs-slide-to",e)}}function Ie(t,o){if(t&1&&(n(0,"div",13)(1,"button",14),i(2,"span",15),n(3,"span",16),a(4,"Previous"),r()(),n(5,"button",17),i(6,"span",18),n(7,"span",16),a(8,"Next"),r()(),i(9,"img",19),n(10,"div",20),i(11,"h5",21)(12,"p",22),r()()),t&2){let e=o.$implicit,s=o.index;c("ngClass",_(10,Le,s==0)),p(),c("ngClass",_(12,xe,e.darkButtons==!0)),p(4),c("ngClass",_(14,xe,e.darkButtons==!0)),p(4),x("id",e.imgPath),c("src",e.imgPath,q)("alt",e.imgTitle),p(2),c("textContent",e.imgTitle)("ngClass",_(16,_e,e.darkText==!0)),p(),c("textContent",e.imgDesc)("ngClass",_(18,_e,e.darkText==!0))}}function Te(t,o){if(t&1&&(n(0,"div",2)(1,"div",3)(2,"h1",4),a(3),r(),i(4,"p",5),r(),n(5,"div",3)(6,"div",6)(7,"div",7),f(8,ke,1,4,"button",8),r(),n(9,"div",9),f(10,Ie,13,20,"div",10),r()()(),i(11,"div",11),r()),t&2){let e=K();p(3),k(e.pageData.title),p(),c("innerHTML",e.pageData.desc,Y),p(4),c("ngForOf",e.pageData.images),p(2),c("ngForOf",e.pageData.images)}}var u=class t{constructor(o,e,s,U){this.dataService=o;this.route=e;this.router=s;this.loadingService=U;this.__URL=this.router.url}pageData={};routeSubscription=new L;__URL="";ngOnInit(){this.loadingService.loadingOn(),this.__URL&&this.dataService.getData(this.__URL).subscribe(o=>{this.pageData=o,this.loadingService.loadingOff()})}static \u0275fac=function(e){return new(e||t)(l(w),l(S),l(v),l(F))};static \u0275cmp=m({type:t,selectors:[["app-photo"]],decls:2,vars:1,consts:[["class","container affectedByLoad",4,"ngIf"],["id","fullpage","onclick","this.style.display='none';"],[1,"container","affectedByLoad"],[1,"row"],[1,"galleryTitle"],[1,"galleryDesc",3,"innerHTML"],["id","carouselExampleCaptions",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#carouselExampleCaptions",3,"ngClass",4,"ngFor","ngForOf"],[1,"carousel-inner"],["class","carousel-item",3,"ngClass",4,"ngFor","ngForOf"],["id","footer-placeholder"],["type","button","data-bs-target","#carouselExampleCaptions",3,"ngClass"],[1,"carousel-item",3,"ngClass"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","prev",1,"carousel-control-prev",3,"ngClass"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExampleCaptions","data-bs-slide","next",1,"carousel-control-next",3,"ngClass"],["aria-hidden","true",1,"carousel-control-next-icon"],["onClick","fullscreen(this.id)",1,"d-block","w-100",3,"id","src","alt"],[1,"carousel-caption","d-none","d-md-block"],[3,"textContent","ngClass"],[2,"color","aliceblue",3,"textContent","ngClass"]],template:function(e,s){e&1&&(f(0,Te,12,4,"div",0),i(1,"div",1)),e&2&&c("ngIf",s.pageData)},dependencies:[O,T,le],encapsulation:2})};var D=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-about"]],decls:37,vars:0,consts:[[1,"container","centreClass"],[1,"row"],[1,"col-md-12",2,"text-align","center"],[1,"aboutText"],["routerLink","/landing"],["href","https://timepiecetherapy.etsy.com","target","_blank"],[1,"col-md-12",2,"text-align","center","align-items","center","display","grid"],["href","https://www.instagram.com/harryfresco1/","target","_blank",1,"aboutText"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24"],["d","M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"]],template:function(e,s){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"p",3),a(4," These are all of my pictures that I've taken with either a "),i(5,"br"),a(6,"Canon AE-1 Program."),i(7,"br"),a(8,"or"),i(9,"br"),a(10,"Fujifilm X-T20 "),i(11,"br"),a(12," Yes, that drone shot "),n(13,"a",4),a(14,"here"),r(),a(15," was filmed by me"),i(16,"br")(17,"br"),a(18," Also, yes, this website was developed entirely by me using Angular, TypeScript, and HTML"),i(19,"br")(20,"br"),a(21," If you want to hire me for an event..."),i(22,"br"),a(23,"I'll only do it for free beer the whole night"),i(24,"br")(25,"br")(26,"br")(27,"br"),a(28,"Did you know, I also "),n(29,"a",5),a(30,"build watches?"),r()()()(),n(31,"div",1)(32,"div",6)(33,"a",7),Q(),n(34,"svg",8),i(35,"path",9),r(),G(),i(36,"br"),r()()()())},dependencies:[d,g],encapsulation:2})};var M=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-footer"]],decls:9,vars:0,consts:[[1,"footer"],["routerLink","/about",1,"footerRight"],["routerLink","/gallery",1,"footerCentre"],["routerLink","/",1,"footerLeft"]],template:function(e,s){e&1&&(i(0,"br"),n(1,"div",0)(2,"a",1),a(3,"about."),r(),n(4,"a",2),a(5,"view all"),r(),n(6,"a",3),a(7,"home."),r()(),i(8,"br"))},dependencies:[d,g],styles:[".footer[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:100;color:#a0a0a0;font-size:15pt;text-decoration:none;transition:color .2s ease-in-out;position:fixed;bottom:0;padding:10px;left:0;right:0;height:50px;z-index:11}.footerRight[_ngcontent-%COMP%]{font-family:Futura PT Light,Trebuchet MS,Arial,sans-serif;font-weight:400;font-style:normal;font-size:22px;letter-spacing:2px;color:#000;text-decoration:none;transition:color .2s ease-in-out;position:fixed;bottom:0;padding:10px;left:100;right:0}.footerLeft[_ngcontent-%COMP%]{font-family:Futura PT Light,Trebuchet MS,Arial,sans-serif;font-weight:400;font-style:normal;font-size:22px;letter-spacing:2px;color:#000;text-decoration:none;transition:color .2s ease-in-out;position:fixed;bottom:0;padding:10px;left:0;right:100}.footerCentre[_ngcontent-%COMP%]{font-family:Futura PT Light,Trebuchet MS,Arial,sans-serif;font-weight:400;font-style:normal;font-size:22px;letter-spacing:2px;color:#000;text-decoration:none;transition:color .2s ease-in-out;position:fixed;bottom:0;padding-bottom:15px;left:50%;transform:translate(-50%)}.footerText[_ngcontent-%COMP%]:hover{color:#d3d3d3}"]})};var N=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-notfound"]],decls:4,vars:0,consts:[[1,"centreHorizontalChoose"],["src","../../assets/img/404.webp","id","notfoundlarge",1,"notfound"],["src","../../assets/img/404-mobile.webp","id","notfoundmobile",1,"notfound"]],template:function(e,s){e&1&&(n(0,"div",0),i(1,"img",1),r(),i(2,"img",2)(3,"app-footer"))},dependencies:[R,M],encapsulation:2})};var B=[{path:"analogue/june22",component:u,title:"Harry Fresco | June 22"},{path:"analogue/jan23",component:u,title:"Harry Fresco | Jan 23"},{path:"analogue/may23",component:u,title:"Harry Fresco | May 23"},{path:"analogue/aug23",component:u,title:"Harry Fresco | Aug 23"},{path:"analogue/june24",component:u,title:"Harry Fresco | June 23"},{path:"",component:I,title:"Harry Fresco"},{path:"landing",component:I,title:"Harry Fresco"},{path:"choose",component:P,title:"Harry Fresco | Choose"},{path:"digital/wizard",component:u,title:"Harry Fresco | Wizard"},{path:"digital/june24d",component:u,title:"Harry Fresco | June 24"},{path:"digital/japan",component:u,title:"Harry Fresco | Japan"},{path:"digital/sky",component:u,title:"Harry Fresco | Sky"},{path:"digital/nov24",component:u,title:"Harry Fresco | Nov 24"},{path:"gallery",loadComponent:()=>import("./chunk-66YVEZO4.js").then(t=>t.GalleryComponent),title:"Harry Fresco | Gallery"},{path:"about",component:D,title:"Harry Fresco | About"},{path:"**",component:N,title:"Harry Fresco | 404"}],Re=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=V({type:t});static \u0275inj=J({imports:[d.forRoot(B,{useHash:!0}),d]})};var we={providers:[ae({eventCoalescing:!0}),ye(B),ge(fe()),de()]};function Fe(t,o){if(t&1&&(n(0,"div")(1,"a",14),a(2),r()()),t&2){let e=o.$implicit;p(),x("id",e.route),x("routerLink",e.route),p(),k(e.navbarTitle)}}function Pe(t,o){if(t&1&&(n(0,"div",15)(1,"a",14),a(2),r()()),t&2){let e=o.$implicit;p(),x("id",e.route),x("routerLink",e.route),p(),k(e.navbarTitle)}}var E=class t{constructor(o,e,s){this.router=o;this.dataService=e;this.route=s;this.__URL=this.router.url}routeSubscription=new L;__URL="";nav;routeOut="";ngOnInit(){this.__URL&&this.dataService.getNavFromFormat(this.__URL).subscribe(o=>{this.nav=o})}static \u0275fac=function(e){return new(e||t)(l(v),l(w),l(S))};static \u0275cmp=m({type:t,selectors:[["app-navbar"]],decls:16,vars:2,consts:[["rel","stylesheet","href",b`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`],[1,"topnav"],["id","title",1,"active","navbarText","mobileTitle"],["id","myLinks"],[4,"ngFor","ngForOf"],["onClick","myFunction()",1,"icon"],[1,"fa","fa-bars"],[1,"container","text-center"],[1,"row","desktopNav"],["class","col","style","text-align: center;",4,"ngFor","ngForOf"],[1,"row"],[1,"col-3-md"],["id","musicContainer"],["id","musicText","onclick","showMusic()",1,"newButton"],["onClick","changeNavLinks(this.id)",1,"navbarText",3,"id","routerLink"],[1,"col",2,"text-align","center"]],template:function(e,s){e&1&&(i(0,"link",0),n(1,"div",1)(2,"a",2),a(3,"Harry Fresco"),r(),n(4,"div",3),f(5,Fe,3,3,"div",4),r(),n(6,"a",5),i(7,"i",6),r()(),n(8,"div",7)(9,"div",8),f(10,Pe,3,3,"div",9),r(),n(11,"div",10)(12,"div",11)(13,"div",12)(14,"h1",13),a(15,"click here for music"),r()()()()()),e&2&&(p(5),c("ngForOf",s.nav),p(5),c("ngForOf",s.nav))},dependencies:[d,g,R,T],styles:[".navbarText[_ngcontent-%COMP%]{font-family:Futura PT Light,Trebuchet MS,Arial,sans-serif;font-weight:400;font-style:normal;font-size:40px;letter-spacing:2px;color:#000;text-decoration:none;transition:color .2s ease-in-out}.navbarText[_ngcontent-%COMP%]:hover{color:#d3d3d3;cursor:pointer}#musicText[_ngcontent-%COMP%]{cursor:pointer;transition:color .2s ease-in-out}#musicText[_ngcontent-%COMP%]:hover{color:#d3d3d3}.rainbowText[_ngcontent-%COMP%]{background-image:linear-gradient(to left,#d3b5d3,#ac9aba,#9c9cf1,#6b9c6b,#d5d577,#efd8ae,#fd8b8b);color:#0000001a;background-clip:text;-webkit-background-clip:text}.desktopNavActive[_ngcontent-%COMP%]{text-decoration:underline!important}.topnav[_ngcontent-%COMP%]{overflow:hidden;position:relative;visibility:hidden;display:none}.topnav[_ngcontent-%COMP%]   #myLinks[_ngcontent-%COMP%]{display:none}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;padding:14px 16px;text-decoration:none;font-size:17px;display:none}.topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%]{display:block;position:absolute;right:0;top:0}.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#949494;color:#000}.desktopNav[_ngcontent-%COMP%]{visibility:visible}.mobileTitle[_ngcontent-%COMP%]{visibility:hidden;display:none;text-decoration:underline!important}@media (max-width: 667px){.topnav[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{visibility:visible;display:block}.desktopNav[_ngcontent-%COMP%]{visibility:hidden;display:none}.mobileTitle[_ngcontent-%COMP%]{visibility:visible;display:block}}"]})};var A=class t{constructor(o){this.router=o;this.__URL=this.router.url}__URL="";static \u0275fac=function(e){return new(e||t)(l(v))};static \u0275cmp=m({type:t,selectors:[["app-header"]],decls:10,vars:0,consts:[[1,"header"],["routerLink","/about",1,"headerRight"],["id","musicContainer",1,"headerCentre"],["id","musicText","onclick","showMusic()",1,"newButton"],["routerLink","/",1,"headerLeft"]],template:function(e,s){e&1&&(i(0,"br"),n(1,"div",0)(2,"a",1),a(3,"about."),r(),n(4,"div",2)(5,"h1",3),a(6,"click here for music"),r()(),n(7,"a",4),a(8,"home."),r()(),i(9,"br"))},dependencies:[d,g],encapsulation:2})};var De=["loading"];function Ne(t,o){t&1&&(n(0,"div",0),i(1,"div",1),r())}var H=class t{constructor(o,e){this.loadingService=o;this.router=e;this.loading$=this.loadingService.loading$}loading$;detectRouteTransitions=!1;customLoadingIndicator=null;ngOnInit(){this.detectRouteTransitions&&this.router.events.pipe(W(o=>{o instanceof he?(console.log("Loading"),this.loadingService.loadingOn()):o instanceof be&&(console.log("Loading Off"),this.loadingService.loadingOff())})).subscribe()}static \u0275fac=function(e){return new(e||t)(l(F),l(v))};static \u0275cmp=m({type:t,selectors:[["app-loader"]],contentQueries:function(e,s,U){if(e&1&&ee(U,De,5),e&2){let z;te(z=oe())&&(s.customLoadingIndicator=z.first)}},inputs:{detectRouteTransitions:"detectRouteTransitions"},decls:2,vars:3,consts:[[1,"fullscreen"],[1,"loader","centreClass"]],template:function(e,s){e&1&&(f(0,Ne,2,0,"div",0),ne(1,"async")),e&2&&Z(re(1,1,s.loading$)?0:-1)},dependencies:[me],styles:['.loader[_ngcontent-%COMP%]{display:inline-grid;z-index:1000}.loader[_ngcontent-%COMP%]:before, .loader[_ngcontent-%COMP%]:after{content:"";height:27px;aspect-ratio:5;--c: #000 90deg,#0000 0;background:conic-gradient(from 135deg at top,var(--c)),conic-gradient(from -45deg at bottom,var(--c)) 12.5% 100%;background-size:20% 50%;background-repeat:repeat-x;-webkit-mask:repeating-linear-gradient(90deg,#000 0 15%,#0000 0 50%) 0 0/200%;animation:_ngcontent-%COMP%_l8 .8s infinite linear}.loader[_ngcontent-%COMP%]:after{animation-delay:-.2s;animation-direction:reverse}@keyframes _ngcontent-%COMP%_l8{to{-webkit-mask-position:-100% 0}}']})};function Ee(t,o){t&1&&i(0,"app-navbar")}function Ae(t,o){t&1&&i(0,"app-header")}function He(t,o){t&1&&i(0,"app-footer")}var j=class t{constructor(o,e,s,U,z){this.router=o;this.activatedRoute=e;this.location=s;this.dataService=U;this.route=z}routeSubscription=new L;__URL="";pageData={};nav="";ngOnInit(){this.routeSubscription=this.router.events.pipe($(o=>o instanceof ve)).subscribe(o=>{this.__URL=o.urlAfterRedirects})}ngOnDestroy(){this.routeSubscription&&this.routeSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||t)(l(v),l(S),l(ce),l(w),l(S))};static \u0275cmp=m({type:t,selectors:[["app-root"]],features:[ie([{provide:se,useClass:pe}])],decls:5,vars:3,consts:[[4,"ngIf"]],template:function(e,s){e&1&&(i(0,"app-loader"),f(1,Ee,1,0,"app-navbar",0)(2,Ae,1,0,"app-header",0),i(3,"router-outlet"),f(4,He,1,0,"app-footer",0)),e&2&&(p(),c("ngIf",s.__URL.startsWith("/analogue/")||s.__URL.startsWith("/digital/")),p(),c("ngIf",s.__URL.startsWith("/gallery")),p(2),c("ngIf",s.__URL.startsWith("/analogue/")||s.__URL.startsWith("/digital/")||s.__URL.startsWith("/about")))},dependencies:[Ce,d,E,M,R,O,A,H],encapsulation:2})};ue(j,we).catch(t=>console.error(t));