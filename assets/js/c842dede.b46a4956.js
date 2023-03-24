"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[7181],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),u=function(e){return function(t){var n=p(t.components);return i.createElement(e,a({},t,{components:n}))}},p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(h,l(l({ref:t},c),{},{components:n})):i.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75273:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"watchman-replicate-subscription",category:"Invocation",sidebar_position:4},s=void 0,c={unversionedId:"watchman-replicate-subscription",id:"watchman-replicate-subscription",title:"watchman-replicate-subscription",description:"Since 5.0",source:"@site/docs/watchman-replicate-subscription.md",sourceDirName:".",slug:"/watchman-replicate-subscription",permalink:"/watchman/docs/watchman-replicate-subscription",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/watchman-replicate-subscription.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"watchman-replicate-subscription",category:"Invocation",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"watchman-wait",permalink:"/watchman/docs/watchman-wait"},next:{title:"C++ Client",permalink:"/watchman/docs/cppclient"}},u={},p=[{value:"Source subscription",id:"source-subscription",level:3},{value:"Controlling lifetime",id:"controlling-lifetime",level:3},{value:"Controlling output",id:"controlling-output",level:3},{value:"Exit Status",id:"exit-status",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.mdx)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("em",{parentName:"p"},"Since 5.0")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"watchman-replicate-subscription")," can replicate an existing watchman\nsubscription. It queries watchman for a list of subscriptions, identifies the\nsource subscription (the subscription to replicate) and subscribes to watchman\nusing the same query."),(0,a.mdx)("p",null,"Integrators can use this client to validate the watchman notifications their\nclient is receiving to localize anomalous behavior."),(0,a.mdx)("p",null,"The source subscription is identified using any combination of the 'name',\n'pid', and 'client' arguments. The provided combination must uniquely identify a\nsubscription. Source subscription details for a watched root can be retrieved by\nrunning the command 'watchman-replicate-subscription --list PATH'."),(0,a.mdx)("p",null,"By default, the replicated subscription will take the source subscription name\nand prepend the substring 'replicate: ' to it. The 'qname' option can be used to\nspecify the replicated subscription name."),(0,a.mdx)("p",null,"The subscription can stop after a configurable number of events are observed.\nThe default is a single event. You may also remove the limit and allow it to\nexecute continuously."),(0,a.mdx)("p",null,"watchman-replicate-subscription will print one event per line. The event\ninformation is determined by the fields in the identified subscription, with\neach field separated by a space (or your choice of --separator)."),(0,a.mdx)("p",null,"Subscription state-enter and state-leave PDUs will be interleaved with other\nevents. Known subscription PDUs (currently only those generated by the mercurial\nfsmonitor extension) will be enclosed in square brackets. All others will be\noutput in JSON format."),(0,a.mdx)("p",null,"Events are consolidated and settled by the watchman server before they are\ndispatched to watchman-replicate-subscription."),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"watchman-replicate-subscription")," requires pywatchman (and thus requires python)\nas well as watchman."),(0,a.mdx)("h3",{id:"source-subscription"},"Source subscription"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman-replicate-subscription PATH -n NAME\n")),(0,a.mdx)("p",null,"The source subscription must be an existing subscription for the provided path.\nAny combination of the 'name', 'pid', and 'client' arguments can be used\nprovided they uniquely identify a subscription. Source subscription details for\na watched root can be retrieved as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman-replicate-subscriptions PATH --list\n")),(0,a.mdx)("p",null,"The subscription name, pid and client can then used to replicate the\nsubscription."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ watchman-replicate-subscription PATH -n NAME -c CLIENT -p PID\n")),(0,a.mdx)("h3",{id:"controlling-lifetime"},"Controlling lifetime"),(0,a.mdx)("p",null,"There are two primary controls for how long ",(0,a.mdx)("inlineCode",{parentName:"p"},"watchman-replicate-subscription"),"\nwill run:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"-t")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"--timeout")," places a time limit on execution"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"-m")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"--max-events")," places a limit on the number of events to process")),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"watchman-replicate-subscription")," will terminate when either the timeout is hit\nor the max events limit is hit."),(0,a.mdx)("p",null,"By default there is no time limit, but there is a default limit of a single\nevent."),(0,a.mdx)("p",null,"You may specify ",(0,a.mdx)("inlineCode",{parentName:"p"},"--max-events 0")," to disable the event limit."),(0,a.mdx)("h3",{id:"controlling-output"},"Controlling output"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"watchman-replicate-subscription")," will output one line per event. The following\noptions influence the output:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"--separator STRING")," - if you specified multiple fields, the separator string\nwill be used when printing them. The default is ",(0,a.mdx)("inlineCode",{parentName:"li"},'--separator " "')," which will\nprint the fields with spaces between them.")),(0,a.mdx)("h3",{id:"exit-status"},"Exit Status"),(0,a.mdx)("p",null,"The following exit status codes can be used to determine what caused\n",(0,a.mdx)("inlineCode",{parentName:"p"},"watchman-replicate-subscription")," to exit:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"0")," is returned after successfully waiting for event(s) or listing matching\nsubscriptions"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"1")," in case of a runtime error of some kind"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"2")," the ",(0,a.mdx)("inlineCode",{parentName:"li"},"-t"),"/",(0,a.mdx)("inlineCode",{parentName:"li"},"--timeout")," option was used and that amount of time passed before\nan event was received"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"3")," if execution was interrupted (Ctrl-C)")))}d.isMDXComponent=!0}}]);