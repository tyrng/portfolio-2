(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function i(t,r,a){return o()?(e.exports=i=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e,t,r){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return r&&n(i,r.prototype),i},e.exports.default=e.exports,e.exports.__esModule=!0),i.apply(null,arguments)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),i=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),i=r(9713),a=r(7316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),f=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=a(e,l),c=p(t),d=s.useMemo((function(){if(!r)return null;var e=u({React:s,mdx:f},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(i)))}),[r,t]);return s.createElement(d,u({},i))}},9120:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n={};r.r(n),r.d(n,{Highlighted:function(){return y}});var o=r(7294),i=r(9),a=(0,i.createGlobalStyle)(['*{box-sizing:border-box;}html{width:100%;height:100%;}body{width:100%;height:100%;margin:0;padding:0;background-color:white;color:black;font-size:1.125rem;font-family:"Roboto",Arial,Helvetica,sans-serif;line-height:1.5rem;font-weight:400;}h1{font-weight:700;font-size:2rem;line-height:2.375rem;color:black;@media (min-width:1200px){font-size:2.625rem;line-height:4rem;}}h2{font-weight:700;font-size:1.25rem;line-height:1.5rem;color:black;@media (min-width:1200px){font-size:2rem;line-height:3rem;}}a{display:inline-block;text-decoration:none;text-decoration-skip-ink:auto;color:inherit;cursor:pointer;&:hover,&:focus{outline:0;}}']),l=r(5444),c=i.default.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-31ozxh-0"})(["width:100%;max-width:62.5rem;height:6.25rem;margin:0 auto;padding:0 2.5rem;background:white;display:flex;justify-content:flex-start;align-items:center;"]),u=i.default.div.withConfig({displayName:"header__StyledLogo",componentId:"sc-31ozxh-1"})(["font-size:2rem;font-weight:900;color:black;"]),s=function(){return o.createElement(c,null,o.createElement(l.Link,{to:"/","aria-label":"home"},o.createElement(u,null,"ty.")))},f=i.default.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-r54yyk-0"})(["width:100%;height:6.25rem;margin:0 auto;padding:0 2.5rem;background:black;color:white;display:flex;justify-content:center;align-items:center;font-size:0.8rem;text-transform:uppercase;letter-spacing:+1px;font-weight:700;"]),p=function(){return o.createElement(f,null,o.createElement("a",{href:"https://github.com/tyrng",target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"External Link"},o.createElement("span",{role:"img","aria-label":"emoji"},"😎")," Visit my GitHub"))},d=r.p+"static/wallpaper-034d914f391642406f3f8e84e97119de.jpg",m=i.default.div.withConfig({displayName:"layout__StyledLayout",componentId:"sc-ii2kc2-0"})(["width:100%;min-height:100vh;margin:0 auto;display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:100%;background-image:url(",");background-color:#cccccc;#main-content{width:100%;max-width:62.5rem;margin:0 auto;padding:0 2.5rem;background-color:rgba(255,255,255,0.95);}"],d),h=function(e){var t=e.children;return o.createElement(m,null,o.createElement(a,null),o.createElement(s,null),o.createElement("main",{id:"main-content"},t),o.createElement(p,null))},g=r(4983),x=r(6725),y=i.default.span.withConfig({displayName:"highlighted",componentId:"sc-h7dbfz-0"})(["box-shadow:inset 0 -2.5rem 0 #cdf3e1;"]),b=function(e){var t=e.content.body;return o.createElement(g.MDXProvider,{components:n},o.createElement(x.MDXRenderer,null,t))},w=function(e){var t=e.data;return o.createElement(h,null,o.createElement(b,{content:t.hero.edges[0].node}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c9ccb2c1b06c4a2f2fd2.js.map