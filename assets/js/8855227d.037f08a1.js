"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[8480],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return s},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){return function(t){var n=p(t.components);return a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,f=c["".concat(o,".").concat(s)]||c[s]||u[s]||i;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Capabilities",category:"Compatibility"},m=void 0,d={unversionedId:"capabilities",id:"capabilities",title:"Capabilities",description:"Since 3.8",source:"@site/docs/capabilities.md",sourceDirName:".",slug:"/capabilities",permalink:"/watchman/docs/capabilities",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/capabilities.md",tags:[],version:"current",frontMatter:{title:"Capabilities",category:"Compatibility"},sidebar:"tutorialSidebar",previous:{title:"Socket Interface",permalink:"/watchman/docs/socket-interface"},next:{title:"Compatibility Rules",permalink:"/watchman/docs/compatibility"}},c={},p=[{value:"Commands",id:"commands",level:3},{value:"Expression Terms",id:"expression-terms",level:3},{value:"File Result Fields",id:"file-result-fields",level:3},{value:"Feature Enhancements",id:"feature-enhancements",level:3}],s={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Since 3.8")),(0,i.mdx)("p",null,"Capability names are used to identify modules that are either conditionally\nconfigured or that are introduced over time."),(0,i.mdx)("p",null,"You can use the ",(0,i.mdx)("a",{parentName:"p",href:"/watchman/docs/cmd/version"},"expanded version command")," to query capabilities\nand avoid building knowledge of version numbers in your client application(s)."),(0,i.mdx)("p",null,"You can use ",(0,i.mdx)("a",{parentName:"p",href:"/watchman/docs/cmd/list-capabilities"},"list-capabilities")," command to obtain a\nlist of capabilities supported by your watchman server."),(0,i.mdx)("h3",{id:"commands"},"Commands"),(0,i.mdx)("p",null,"Every command is identified by the command name prefixed by the string ",(0,i.mdx)("inlineCode",{parentName:"p"},"cmd-"),".\nFor example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"watch-project")," command is indicated by the capability name\n",(0,i.mdx)("inlineCode",{parentName:"p"},"cmd-watch-project"),"."),(0,i.mdx)("h3",{id:"expression-terms"},"Expression Terms"),(0,i.mdx)("p",null,"Every expression term is identified by the term name prefixed by the string\n",(0,i.mdx)("inlineCode",{parentName:"p"},"term-"),". For example, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"match")," term is indicated by the capability name\n",(0,i.mdx)("inlineCode",{parentName:"p"},"term-match"),"."),(0,i.mdx)("h3",{id:"file-result-fields"},"File Result Fields"),(0,i.mdx)("p",null,"Every field is identified by the field name prefixed by the string ",(0,i.mdx)("inlineCode",{parentName:"p"},"field-"),". For\nexample, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"size")," field is indicated by the capability name ",(0,i.mdx)("inlineCode",{parentName:"p"},"field-size"),"."),(0,i.mdx)("h3",{id:"feature-enhancements"},"Feature Enhancements"),(0,i.mdx)("p",null,"Sometimes we will enhance existing functionality by adding new options to\nexisting commands. Since these changes won't result in adding a new command they\nwon't implicitly gain a capability name. In these cases we'll assign an\nappropriate capability name by hand."),(0,i.mdx)("p",null,"The following feature capabilities are possible / released:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Capability Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Since version"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"relative_root")),(0,i.mdx)("td",{parentName:"tr",align:null},"3.3"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"relative_root")," query option")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"wildmatch")),(0,i.mdx)("td",{parentName:"tr",align:null},"3.7"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/watchman/docs/expr/match#wildmatch"},"Expanded ",(0,i.mdx)("inlineCode",{parentName:"a"},"match")," term with recursive globs"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"suffix-set")),(0,i.mdx)("td",{parentName:"tr",align:null},"5.0"),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("a",{parentName:"td",href:"/watchman/docs/expr/suffix#suffixset"},"Expanded ",(0,i.mdx)("inlineCode",{parentName:"a"},"suffix")," to support set of suffixes"))))))}u.isMDXComponent=!0}}]);