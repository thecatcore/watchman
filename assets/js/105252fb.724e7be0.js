"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[2221],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return m},withMDXComponents:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){return function(t){var n=m(t.components);return r.createElement(e,c({},t,{components:n}))}},m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),p=o,f=s["".concat(a,".").concat(p)]||s[p]||d[p]||c;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21695:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(83117),o=n(80102),c=(n(67294),n(3905)),a=["components"],i={title:"clock",category:"Commands"},l=void 0,u={unversionedId:"cmd/clock",id:"cmd/clock",title:"clock",description:"Returns the current clock value for a watched root.",source:"@site/docs/cmd/clock.md",sourceDirName:"cmd",slug:"/cmd/clock",permalink:"/watchman/docs/cmd/clock",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/clock.md",tags:[],version:"current",frontMatter:{title:"clock",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"Compatibility Rules",permalink:"/watchman/docs/compatibility"},next:{title:"find",permalink:"/watchman/docs/cmd/find"}},s={},m=[],p={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("p",null,"Returns the current clock value for a watched root."),(0,c.mdx)("p",null,(0,c.mdx)("em",{parentName:"p"},"Since 3.9.")),(0,c.mdx)("p",null,(0,c.mdx)("em",{parentName:"p"},"The ",(0,c.mdx)("a",{parentName:"em",href:"/watchman/docs/capabilities"},"capability")," name associated with this enhanced\nfunctionality is ",(0,c.mdx)("inlineCode",{parentName:"em"},"clock-sync-timeout"),".")),(0,c.mdx)("p",null,(0,c.mdx)("inlineCode",{parentName:"p"},"sync_timeout")," specifies the number of milliseconds that you want to wait to\nobserve a synchronization cookie. The synchronization cookie is created at the\nstart of your clock call and, once the cookie is observed, means that the clock\nvalue returned by this command is at least as current as the time of your clock\ncall."),(0,c.mdx)("p",null,"If no ",(0,c.mdx)("inlineCode",{parentName:"p"},"sync_timeout")," is specified, the returned clock value is the instantaneous\nvalue of the clock associated with the watched root, and may be almost\nimmediately invalidated if there are any filesystem notifications that are yet\nto be processed."),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman clock /path/to/dir\n")),(0,c.mdx)("p",null,"JSON:"),(0,c.mdx)("p",null,"Note the third options argument is optional."),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-json"},'["clock", "/path/to/dir", {"sync_timeout": 100}]\n')))}d.isMDXComponent=!0}}]);