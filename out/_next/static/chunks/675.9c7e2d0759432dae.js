(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8566:function(e,t,i){"use strict";var n=i(3848),r=i(3115);t.default=function(e){var t=e.src,i=e.sizes,r=e.unoptimized,s=void 0!==r&&r,u=e.priority,d=void 0!==u&&u,p=e.loading,b=e.lazyBoundary,v=void 0===b?"200px":b,y=e.className,w=e.quality,A=e.width,k=e.height,O=e.objectFit,j=e.objectPosition,E=e.onLoadingComplete,_=e.loader,I=void 0===_?x:_,P=e.placeholder,R=void 0===P?"empty":P,q=e.blurDataURL,D=function(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),L=i?"responsive":"intrinsic";"layout"in D&&(D.layout&&(L=D.layout),delete D.layout);var M="";if(function(e){return"object"===typeof e&&(h(e)||function(e){return void 0!==e.src}(e))}(t)){var C=h(t)?t.default:t;if(!C.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(C)));if(q=q||C.blurDataURL,M=C.src,(!L||"fill"!==L)&&(k=k||C.height,A=A||C.width,!C.height||!C.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(C)))}t="string"===typeof t?t:M;var N=S(A),W=S(k),B=S(w),U=!d&&("lazy"===p||"undefined"===typeof p);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,U=!1);g.has(t)&&(U=!1);0;var H,F=l.useIntersection({rootMargin:v,disabled:!U}),T=n(F,2),V=T[0],J=T[1],G=!U||J,Q={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:j},Z="blur"===R?{filter:"blur(20px)",backgroundSize:O||"cover",backgroundImage:'url("'.concat(q,'")'),backgroundPosition:j||"0% 0%"}:{};if("fill"===L)Q.display="block",Q.position="absolute",Q.top=0,Q.left=0,Q.bottom=0,Q.right=0;else if("undefined"!==typeof N&&"undefined"!==typeof W){var $=W/N,ee=isNaN($)?"100%":"".concat(100*$,"%");"responsive"===L?(Q.display="block",Q.position="relative",X=!0,K.paddingTop=ee):"intrinsic"===L?(Q.display="inline-block",Q.position="relative",Q.maxWidth="100%",X=!0,K.maxWidth="100%",H='<svg width="'.concat(N,'" height="').concat(W,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===L&&(Q.display="inline-block",Q.position="relative",Q.width=N,Q.height=W)}else 0;var te={src:m,srcSet:void 0,sizes:void 0};G&&(te=z({src:t,unoptimized:s,layout:L,width:N,quality:B,sizes:i,loader:I}));var ie=t;0;return o.default.createElement("span",{style:Q},X?o.default.createElement("span",{style:K},H?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,o.default.createElement("img",Object.assign({},D,te,{decoding:"async","data-nimg":L,className:y,ref:function(e){V(e),function(e,t,i,n,r){if(!e)return;var o=function(){e.src!==m&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===n&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),g.add(t),r){var i=e.naturalWidth,o=e.naturalHeight;r({naturalWidth:i,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ie,0,R,E)},style:f({},Y,Z)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},D,z({src:t,unoptimized:s,layout:L,width:N,quality:B,sizes:i,loader:I}),{decoding:"async","data-nimg":L,style:Y,className:y,loading:p||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+te.src+te.srcSet+te.sizes,rel:"preload",as:"image",href:te.srcSet?void 0:te.src,imagesrcset:te.srcSet,imagesizes:te.sizes})):null)};var o=d(i(7294)),a=d(i(2717)),c=i(3389),s=i(5809),l=i(639);function u(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){u(e,t,i[t])}))}return e}var g=new Set,m=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var p=new Map([["default",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t).concat(O(i))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.root,i=e.src,n=e.width,r=e.quality,o=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(O(i))}],["akamai",function(e){var t=e.root,i=e.src,n=e.width;return"".concat(t).concat(O(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function h(e){return void 0!==e.default}var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,v=b.deviceSizes,y=b.imageSizes,w=b.loader,A=b.path,k=(b.domains,[].concat(r(v),r(y)));function z(e){var t=e.src,i=e.unoptimized,n=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(i)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,i){if(i&&("fill"===t||"responsive"===t)){for(var n,o=/(^|\s)(1?\d?\d)vw/g,a=[];n=o.exec(i);n)a.push(parseInt(n[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:k.filter((function(e){return e>=v[0]*c})),kind:"w"}}return{widths:k,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return k.find((function(t){return t>=e}))||k[k.length-1]})))),kind:"x"}}(o,n,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,i){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:i+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function x(e){var t=p.get(w);if(t)return t(f({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(w))}function O(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),k.sort((function(e,t){return e-t}))},639:function(e,t,i){"use strict";var n=i(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!a,s=r.useRef(),l=r.useState(!1),u=n(l,2),d=u[0],f=u[1],g=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),i||d||e&&e.tagName&&(s.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=c.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return c.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[i,t,d]);return r.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[g,d]};var r=i(7294),o=i(6286),a="undefined"!==typeof IntersectionObserver;var c=new Map},3389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,i){e.exports=i(8566)}}]);