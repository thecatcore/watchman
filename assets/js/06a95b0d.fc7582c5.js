"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[150],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){return function(n){var t=m(n.components);return r.createElement(e,i({},n,{components:t}))}},m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(t),u=a,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return t?r.createElement(h,c(c({ref:n},s),{},{components:t})):r.createElement(h,c({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},83686:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],c={title:"version",category:"Commands"},l=void 0,s={unversionedId:"cmd/version",id:"cmd/version",title:"version",description:"The version command will tell you the version and build information for the",source:"@site/docs/cmd/version.md",sourceDirName:"cmd",slug:"/cmd/version",permalink:"/watchman/docs/cmd/version",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/cmd/version.md",tags:[],version:"current",frontMatter:{title:"version",category:"Commands"},sidebar:"tutorialSidebar",previous:{title:"unsubscribe",permalink:"/watchman/docs/cmd/unsubscribe"},next:{title:"watch-del-all",permalink:"/watchman/docs/cmd/watch-del-all"}},p={},m=[{value:"Capabilities",id:"capabilities",level:3},{value:"capabilityCheck",id:"capabilitycheck",level:3}],u={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The version command will tell you the version and build information for the\ncurrently running watchman service:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman version\n{\n    "version": "2.9.6",\n    "buildinfo": "git:2727d9a1e47a4a2229c65cbb2f0c7656cbd96270"\n}\n')),(0,i.mdx)("p",null,"To get the version of the client:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman -v\n2.9.8\n")),(0,i.mdx)("p",null,"If the server and client versions don't match up, you should probably restart\nyour server: ",(0,i.mdx)("inlineCode",{parentName:"p"},"watchman shutdown-server ; watchman"),"."),(0,i.mdx)("h3",{id:"capabilities"},"Capabilities"),(0,i.mdx)("p",null,(0,i.mdx)("em",{parentName:"p"},"Since 3.8.")),(0,i.mdx)("p",null,"The version command can be used to check for named capabilities. Capabilities\nmake it easier to check whether the server implements functionality based on the\nname of that function rather than by having the client build up knowledge about\nwhen those functions were introduced."),(0,i.mdx)("p",null,"You can read more about the ",(0,i.mdx)("a",{parentName:"p",href:"/watchman/docs/capabilities"},"available capability names"),"."),(0,i.mdx)("p",null,"To check whether the ",(0,i.mdx)("inlineCode",{parentName:"p"},"relative_root")," capability is supported:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<< \'["version", {"optional":["relative_root"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "relative_root": true\n    }\n}\n')),(0,i.mdx)("p",null,"If the capability is not supported:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<< \'["version", {"optional":["will-never-exist"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "will-never-exist": false\n    }\n}\n')),(0,i.mdx)("p",null,"To have the server generate an error response if a capability is not supported:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<< \'["version", {"required":["will-never-exist"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "will-never-exist": false\n    },\n    "error": "client required capability `will-never-exist` is not supported by this server"\n}\n')),(0,i.mdx)("p",null,"To require one feature and test whether some optional features are supported:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<< \'["version", {"required":["term-match"],"optional":["a","b"]}]\'\n{\n    "version": "3.8.0",\n    "capabilities": {\n        "a": false,\n        "b": false,\n        "term-match": true\n    }\n}\n')),(0,i.mdx)("h3",{id:"capabilitycheck"},"capabilityCheck"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("strong",{parentName:"p"},"node")," and ",(0,i.mdx)("strong",{parentName:"p"},"python")," clients provide a ",(0,i.mdx)("inlineCode",{parentName:"p"},"capabilityCheck")," method that will\nperform the version check above, and that also provide limited support for\ntesting capability support against older versions of the watchman server. This\nfacilitates a smoother transition from version number based checks to capability\nnamed based checks."),(0,i.mdx)("p",null,"In ",(0,i.mdx)("em",{parentName:"p"},"python"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"import pywatchman\nclient = pywatchman.client()\n# will throw an error if any of the required names are not supported\nres = client.capabilityCheck(optional=['a'], required=['term-match'])\nprint res\n# {'version': '3.8.0', 'capabilities': {'term-match': True, 'a': False}}\n")),(0,i.mdx)("p",null,"In ",(0,i.mdx)("em",{parentName:"p"},"node"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"var watchman = require('fb-watchman');\nvar client = new watchman.Client();\nclient.capabilityCheck({optional:['a'], required:['term-match']},\n    function (error, resp) {\n        if (error) {\n          // error will be an Error object if any of the required named\n          // are not supported\n        }\n        console.log(resp);\n        // {'version': '3.8.0', 'capabilities': {'term-match': false, 'a': false}}\n        client.end();\n    });\n")))}d.isMDXComponent=!0}}]);