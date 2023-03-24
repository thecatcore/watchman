"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[1095],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return l},mdx:function(){return g},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),m=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),l=o,d=m["".concat(c,".").concat(l)]||m[l]||f[l]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75776:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),c=["components"],i={title:"get-sockname",category:"Commands"},s=void 0,u={unversionedId:"cmd/get-sockname",id:"cmd/get-sockname",title:"get-sockname",description:"If you're integrating against watchman using the unix socket and either the JSON",source:"@site/docs/cmd/get-sockname.md",sourceDirName:"cmd",slug:"/cmd/get-sockname",permalink:"/watchman/docs/cmd/get-sockname",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/get-sockname.md",tags:[],version:"current",frontMatter:{title:"get-sockname",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"get-config",permalink:"/watchman/docs/cmd/get-config"},next:{title:"list-capabilities",permalink:"/watchman/docs/cmd/list-capabilities"}},m={},p=[],l={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"If you're integrating against watchman using the unix socket and either the JSON\nor BSER protocol, you may need to discover the correct socket path. Rather than\nhard-coding the path or replicating the logic discussed in\n",(0,a.mdx)("a",{parentName:"p",href:"/watchman/docs/cli-options"},"Command Line"),", you can simply execute the CLI to determine the\npath. This has the side effect of spawning the service for your user if it was\nnot already running--bonus!"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman get-sockname\n{\n  "version": "2.5",\n  "sockname": "/tmp/.watchman.wez"\n}\n')))}f.isMDXComponent=!0}}]);