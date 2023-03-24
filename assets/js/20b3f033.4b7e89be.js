"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[4382],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),m=function(e){return function(n){var t=p(n.components);return a.createElement(e,r({},n,{components:t}))}},p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},34348:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(83117),o=t(80102),r=(t(67294),t(3905)),i=["components"],s={title:"Source Control Aware Queries",category:"Queries"},l=void 0,c={unversionedId:"scm-query",id:"scm-query",title:"Source Control Aware Queries",description:"Since 2021.08.30",source:"@site/docs/scm-query.md",sourceDirName:".",slug:"/scm-query",permalink:"/watchman/docs/scm-query",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/scm-query.md",tags:[],version:"current",frontMatter:{title:"Source Control Aware Queries",category:"Queries"},sidebar:"tutorialSidebar",previous:{title:"File Queries",permalink:"/watchman/docs/file-query"},next:{title:"Simple Pattern Syntax",permalink:"/watchman/docs/simple-query"}},m={},p=[{value:"Source Control Aware Subscriptions",id:"source-control-aware-subscriptions",level:2},{value:"<code>state-enter</code> &amp; <code>state-leave</code>",id:"state-enter--state-leave",level:3}],d={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.mdx)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Since 2021.08.30")),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/watchman/pull/934"},"Git support")," has been added \ud83c\udf8a"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Since 4.9.")),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"The ",(0,r.mdx)("a",{parentName:"em",href:"/watchman/docs/capabilities"},"capability")," name associated with this enhanced\nfunctionality is ",(0,r.mdx)("inlineCode",{parentName:"em"},"scm-since"),".")),(0,r.mdx)("p",null,"The capability name for this is ",(0,r.mdx)("inlineCode",{parentName:"p"},"scm-hg"),". The internal architecture allows\nsupporting other source control systems quite easily; it just needs someone to\nimplement and test them!"),(0,r.mdx)("p",null,"A common pattern for tools that consume watchman is wanting to reason about the\nchanges in a version controlled repository. For most repos it is fine to simply\nreceive information about all changed files as they are updated, even during a\nrebase over several days of work by others."),(0,r.mdx)("p",null,"For very large or very busy repositories, where a great many files can change\nover a short period of time, it can be desirable to get a minimized set of\ninformation about the changes."),(0,r.mdx)("p",null,"For example, if your tool has the ability to load some pre-built data from some\nartifact storage, rather than processing many hundreds of changed files\nincrementally you may want to take the merge base of local changes and use that\nto locate the pre-built data and process only the delta between that state and\nthe current state of the repo."),(0,r.mdx)("p",null,"An illustration may help. Here we see that a user has a stack of two commits\nbased off the symbolic ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," commit. In this scenario, ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," is tracking the\ntip of the repo to which the local repo is published, and the user is checked\nout at the 6b38a5 commit:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"| @  6b38a5  wez\n| |  Add cats.cpp\n| |\n| o  fa2e92  wez\n|/   Add cat.jpg\n|\no f12345 main\n")),(0,r.mdx)("p",null,"Now the user synchronizes their repo with the remote, fetching the commits but\nnot changing their work yet. This is often combined with the step that follows,\nbut we are breaking it out here for the purposes of illustration. This is\nequivalent to running ",(0,r.mdx)("inlineCode",{parentName:"p"},"hg pull")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"git fetch"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"o  fabf87  coworker     main\n.  Amazing new feature\n.\n| @  6b38a5  wez\n| |  Add cats.cpp\n| |\n| o  fa2e92  wez\n|/   Add cat.jpg\n|\no\n")),(0,r.mdx)("p",null,"The ellipsis portion of the DAG represents uninteresting commits to ",(0,r.mdx)("inlineCode",{parentName:"p"},"wez"),"; there\nmay be hundreds of files changed by those commits, but ",(0,r.mdx)("inlineCode",{parentName:"p"},"wez")," only cares about\nthe work in their local branch of the DAG."),(0,r.mdx)("p",null,"Now ",(0,r.mdx)("inlineCode",{parentName:"p"},"wez")," wants to rebase their work on main. This would be done using a command\nlike ",(0,r.mdx)("inlineCode",{parentName:"p"},"hg rebase -d main -s fa2e92"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"| @  bbbbbb  wez\n| |  Add cats.cpp\n| |\n| o  aaaaaa  wez\n|/   Add cat.jpg\n|\no  fabf87  coworker     main\n.  Amazing new feature\n.\n")),(0,r.mdx)("p",null,"The crucial part of this is what happens to the working copy; assuming that we\nnow land on commit ",(0,r.mdx)("inlineCode",{parentName:"p"},"bbbbbb"),", Watchman will observe changes for all of the\nhundreds of files that changed across the rebase and pass this information on to\nthe tools that are subscribed or are querying for this information."),(0,r.mdx)("p",null,"If your tooling is source control aware then you can ask watchman to run since\nqueries in a mode where it will return you information about the merge base with\n",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," and the minimized set of files that changed."),(0,r.mdx)("p",null,"To enable this mode you issue a query using a new ",(0,r.mdx)("em",{parentName:"p"},"fat clock")," as the ",(0,r.mdx)("inlineCode",{parentName:"p"},"since"),"\nparameter for the query:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<-EOT\n["query", "/path/to/root", {\n  "since": {\n      "scm": {\n        "mergebase-with": "main"\n      }\n  },\n  "expression": ["type", "f"],\n  "fields": ["name"]\n}]\nEOT\n')),(0,r.mdx)("p",null,"This particular ",(0,r.mdx)("inlineCode",{parentName:"p"},"since")," value starts with an unspecified clock value and\nrequests that watchman run the query in source control aware mode, using the\nsymbolic name ",(0,r.mdx)("inlineCode",{parentName:"p"},"main")," to compute the merge base for the commit graph."),(0,r.mdx)("p",null,"If we look back to the illustrations above and rewind to the first scenario, the\nresults of this query will look something like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'{\n   "clock": {\n       "clock": "c:123:123",\n       "scm": {\n            "mergebase": "f12345",\n            "mergebase-with": "main"\n       }\n    },\n    "files": ["cat.jpg", "cats.cpp"]\n}\n')),(0,r.mdx)("p",null,"This result informs the client of the merge base with main (which happens to be\nmain itself) and the list of changes since that merge base."),(0,r.mdx)("p",null,"To get the next incremental change the client feeds that clock value back in to\nits next query. Looking back to the second illustration above, if we were to run\nthis query after the running ",(0,r.mdx)("inlineCode",{parentName:"p"},"hg pull")," (note that this doesn't change the\nworking copy):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<-EOT\n["query", "/path/to/root", {\n  "since": {\n       "clock": "c:123:123",\n       "scm": {\n            "mergebase": "f12345",\n            "mergebase-with": "main"\n       }\n  },\n  "expression": ["type", "f"],\n  "fields": ["name"]\n}]\nEOT\n')),(0,r.mdx)("p",null,"we'd get this result:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "clock": {\n       "clock": "c:123:124",\n       "scm": {\n            "mergebase": "f12345",\n            "mergebase-with": "main"\n       }\n    },\n    "files": []\n}\n')),(0,r.mdx)("p",null,"Note that the ",(0,r.mdx)("inlineCode",{parentName:"p"},"files")," list is empty because we didn't change any files, and note\nthat one of the numeric portions of the clock string has changed."),(0,r.mdx)("p",null,"Also note that the mergebase revision remains the same because we also didn't\nrebase the commit yet."),(0,r.mdx)("p",null,"This is a little white lie: the reality is that some files did change in the\nversion control system, and with the expression we're using we would see them,\nbut they are not part of the working copy so we're omitting them for the clarity\nof this example."),(0,r.mdx)("p",null,"Now if we rebase and update to the rebased revision (taking us to the last of\nthe illustrations from above), we'd run this query, feeding in the clock from\nthe last query to get the correct incremental result:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},'$ watchman -j <<-EOT\n["query", "/path/to/root", {\n  "since": {\n       "clock": "c:123:124",\n       "scm": {\n            "mergebase": "f12345",\n            "mergebase-with": "main"\n       }\n  },\n  "expression": ["type", "f"],\n  "fields": ["name"]\n}]\nEOT\n')),(0,r.mdx)("p",null,"we'd get this result:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "clock": {\n       "clock": "c:123:125",\n       "scm": {\n            "mergebase": "fabf87",\n            "mergebase-with": "main"\n       }\n    },\n    "files": ["cat.jpg", "cats.cpp"]\n}\n')),(0,r.mdx)("p",null,"Note that the mergebase reported in the clock has changed and note that the list\nof files reported is just the two from our commit stack despite there being\nhundreds of files that were physically updated on the disk."),(0,r.mdx)("p",null,"Your client can now lookup some state based on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"fabf87")," revision and\ndownload it, and can then incrementally apply the computation for ",(0,r.mdx)("inlineCode",{parentName:"p"},"cat.jpg")," and\n",(0,r.mdx)("inlineCode",{parentName:"p"},"cats.cpp")," on top of that state."),(0,r.mdx)("p",null,"If your client doesn't know how to do this, then you shouldn't use this source\ncontrol aware query mode!"),(0,r.mdx)("h2",{id:"source-control-aware-subscriptions"},"Source Control Aware Subscriptions"),(0,r.mdx)("p",null,"You can also use the same source control awareness in your subscriptions. This\nis basically the same procedure as making queries above, but there are some\npreconditions and things to note:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Watchman needs the cooperation of the source control system to know when it\nshould defer events."),(0,r.mdx)("li",{parentName:"ul"},"Source control aware subscriptions implicitly enable ",(0,r.mdx)("inlineCode",{parentName:"li"},"defer_vcs")," and\n",(0,r.mdx)("inlineCode",{parentName:"li"},'defer:["hg.update"]'),". As with the point above, this is to ensure that you\ndon't get notified about files changing during the working copy update\noperation; that would defeat the point of using source control awareness.")),(0,r.mdx)("p",null,"To initiate a source control aware subscription:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'["subscribe", "/path/to/root", "mysubscriptionname", {\n  "fields": ["name"],\n  "since": {\n    "scm": {\n      "mergebase-with": "main"\n    }\n  }\n}]\n')),(0,r.mdx)("p",null,"You'll then receive subscription responses as files change; those responses will\ncontain ",(0,r.mdx)("em",{parentName:"p"},"fat clock")," values for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"since")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"clock")," fields:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "subscription": "mysubscriptionname",\n  "clock": {\n    "clock": "c:1234:125",\n    "scm": {\n      "mergebase": "fabf87",\n      "mergebase-with": "main",\n    }\n  },\n  "since": {\n    "clock": "c:1234:123",\n    "scm": {\n      "mergebase": "f12345",\n      "mergebase-with": "main",\n    }\n  },\n  "files": ["cat.jpg", "cats.cpp"],\n  "root":  "/path/to/root"\n}\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"clock")," field holds the value of the clock and the merge base as of the\nsubscription notification."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"since")," field holds the ",(0,r.mdx)("em",{parentName:"p"},"fat clock")," that was returned in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"clock")," field\nfrom the prior subscription update. It is present as a convenience for you; you\ncan compare the ",(0,r.mdx)("inlineCode",{parentName:"p"},"mergebase")," fields between the two to determine that the merge\nbase changed in this update. This is an important detail because more files in\nthe working copy have been physically changed than are reflected in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"files"),"\nlist; your tooling will need to so something appropriate to ensure that it\ncomputes a consistent and correct result."),(0,r.mdx)("h3",{id:"state-enter--state-leave"},(0,r.mdx)("inlineCode",{parentName:"h3"},"state-enter")," & ",(0,r.mdx)("inlineCode",{parentName:"h3"},"state-leave")),(0,r.mdx)("p",null,"Source control aware subscriptions will always include a ",(0,r.mdx)("em",{parentName:"p"},"fat clock")," in their\nresponses, however, only the regular clock is provided in ",(0,r.mdx)("inlineCode",{parentName:"p"},"state-enter")," and\n",(0,r.mdx)("inlineCode",{parentName:"p"},"state-leave")," notifications. This is because computing the source control\ninformation is a non-trivial operation and could increase latency."))}u.isMDXComponent=!0}}]);