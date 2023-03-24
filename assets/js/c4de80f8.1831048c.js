"use strict";(self.webpackChunkstaticdocs_starter=self.webpackChunkstaticdocs_starter||[]).push([[7943],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return m},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=t.createContext({}),u=function(e){return function(n){var a=d(n.components);return t.createElement(e,r({},n,{components:a}))}},d=function(e){var n=t.useContext(m),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=d(e.components);return t.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(a),c=i,h=u["".concat(l,".").concat(c)]||u[c]||p[c]||r;return a?t.createElement(h,o(o({ref:n},m),{},{components:a})):t.createElement(h,o({ref:n},m))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7520:function(e,n,a){a.r(n),a.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return d}});var t=a(83117),i=a(80102),r=(a(67294),a(3905)),l=["components"],o={title:"Installation",category:"Installation"},s=void 0,m={unversionedId:"install",id:"install",title:"Installation",description:"System Requirements",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/watchman/docs/install",draft:!1,editUrl:"https://github.com/facebook/watchman/tree/main/website/docs/install.md",tags:[],version:"current",frontMatter:{title:"Installation",category:"Installation"},sidebar:"tutorialSidebar",next:{title:"Release Notes",permalink:"/watchman/docs/release-notes"}},u={},d=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Windows",id:"windows",level:2},{value:"Prebuilt Binaries",id:"prebuilt-binaries",level:3},{value:"Installing via Chocolatey",id:"installing-via-chocolatey",level:3},{value:"macOS",id:"macos",level:2},{value:'<a name="homebrew-instructions"></a> Homebrew',id:"-homebrew",level:3},{value:'<a name="macports"></a> MacPorts',id:"-macports",level:3},{value:"Prebuilt Binaries",id:"prebuilt-binaries-1",level:3},{value:"Linux",id:"linux",level:2},{value:"Homebrew",id:"homebrew",level:3},{value:"Fedora (Prebuilt RPMs)",id:"fedora-prebuilt-rpms",level:3},{value:"Ubuntu (Prebuilt Debs)",id:"ubuntu-prebuilt-debs",level:3},{value:'<a name="building-from-source"></a> Building from Source',id:"-building-from-source",level:3},{value:"Prebuilt Binaries",id:"prebuilt-binaries-2",level:3},{value:"System Specific Preparation",id:"system-specific-preparation",level:2},{value:"Linux inotify Limits",id:"linux-inotify-limits",level:3},{value:"macOS File Descriptor Limits",id:"macos-file-descriptor-limits",level:3}],c={toc:d};function p(e){var n=e.components,a=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"system-requirements"},"System Requirements"),(0,r.mdx)("p",null,"Watchman is known to compile and pass its test suite on:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("i",{class:"fa fa-linux"})," Linux systems with `inotify`"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("i",{class:"fa fa-apple"})," macOS (uses `FSEvents` on 10.7+, `kqueue(2)` on earlier versions)"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("i",{class:"fa fa-windows"})," Windows 10 (64-bit) and up. Windows 7 support is provided by community patches")),(0,r.mdx)("p",null,"Watchman used to support the following systems, but no one is actively\nmaintaining them. The core of the code should be OK, but they likely don't\nbuild. We'd love it if someone would step forward to maintain them:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"BSDish systems (FreeBSD 9.1, OpenBSD 5.2) that have the ",(0,r.mdx)("inlineCode",{parentName:"li"},"kqueue(2)")," facility"),(0,r.mdx)("li",{parentName:"ul"},"Illumos and Solaris style systems that have ",(0,r.mdx)("inlineCode",{parentName:"li"},"port_create(3C)"))),(0,r.mdx)("p",null,"Watchman relies on the operating system facilities for file notification, which\nmeans that you will likely have very poor results using it on any kind of remote\nor distributed filesystem."),(0,r.mdx)("p",null,"Watchman does not currently support any other operating system not covered by\nthe list above."),(0,r.mdx)("h2",{id:"windows"},"Windows"),(0,r.mdx)("h3",{id:"prebuilt-binaries"},"Prebuilt Binaries"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Download and extract the windows release from the\n",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/watchman/releases/latest"},"latest release")),(0,r.mdx)("li",{parentName:"ol"},"It will be named something like ",(0,r.mdx)("inlineCode",{parentName:"li"},"watchman-vYYYY.MM.DD.00-windows.zip")),(0,r.mdx)("li",{parentName:"ol"},"It contains a ",(0,r.mdx)("inlineCode",{parentName:"li"},"bin")," folder. Move that somewhere appropriate and update your\n",(0,r.mdx)("inlineCode",{parentName:"li"},"PATH")," environment to reference that location.")),(0,r.mdx)("p",null,"If you encounter issues with the Windows version of watchman, please report them\nvia GitHub!\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/watchman/issues?utf8=%E2%9C%93&q=is%3Aopen+Windows"},"You can find the list of known Windows issues here"),"."),(0,r.mdx)("h3",{id:"installing-via-chocolatey"},"Installing via Chocolatey"),(0,r.mdx)("p",null,"Watchman is available via the\n",(0,r.mdx)("a",{parentName:"p",href:"https://community.chocolatey.org/packages/watchman"},"Chocolatey")," Windows package\nmanager. Installation is as simple as:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-powershell"},"PS C:\\> choco install watchman\n")),(0,r.mdx)("p",null,"The package is maintained by the community rather than by Meta, so if you\nexperience issues with installation or uninstallation, you should\n",(0,r.mdx)("a",{parentName:"p",href:"https://chocolatey.org/packages/watchman/ContactOwners"},"contact the package maintainers"),"\nfor assistance."),(0,r.mdx)("h2",{id:"macos"},"macOS"),(0,r.mdx)("h3",{id:"-homebrew"},(0,r.mdx)("a",{name:"homebrew-instructions"})," Homebrew"),(0,r.mdx)("p",null,"Homebrew's ",(0,r.mdx)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/watchman#default"},"Watchman package"),"\nis community-maintained, but it works well for many."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"$ brew update\n$ brew install watchman\n")),(0,r.mdx)("p",null,"If for some reason you can't wait for the Homebrew package to update, you can\ninstall the latest build from GitHub:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"$ brew install --HEAD watchman\n")),(0,r.mdx)("h3",{id:"-macports"},(0,r.mdx)("a",{name:"macports"})," MacPorts"),(0,r.mdx)("p",null,"To install the package maintained by\n",(0,r.mdx)("a",{parentName:"p",href:"https://ports.macports.org/port/watchman/"},"MacPorts"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"$ sudo port install watchman\n")),(0,r.mdx)("h3",{id:"prebuilt-binaries-1"},"Prebuilt Binaries"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Download and extract the macOS release from the\n",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/watchman/releases/latest"},"latest release")),(0,r.mdx)("li",{parentName:"ol"},"It will be named something like ",(0,r.mdx)("inlineCode",{parentName:"li"},"watchman-vYYYY.MM.DD.00-macos.zip"))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"$ unzip watchman-*-macos.zip\n$ cd watchman-vYYYY.MM.DD.00-macos\n$ sudo mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman\n$ sudo cp bin/* /usr/local/bin\n$ sudo cp lib/* /usr/local/lib\n$ sudo chmod 755 /usr/local/bin/watchman\n$ sudo chmod 2777 /usr/local/var/run/watchman\n")),(0,r.mdx)("p",null,"The Watchman binaries are not signed, so manual approval in Security & Privacy\nin System Preferences may be necessary."),(0,r.mdx)("h2",{id:"linux"},"Linux"),(0,r.mdx)("h3",{id:"homebrew"},"Homebrew"),(0,r.mdx)("p",null,"If you use Homebrew on Linux, it's a great way to get a recent Watchman build."),(0,r.mdx)("p",null,"Follow the ",(0,r.mdx)("a",{parentName:"p",href:"#homebrew-instructions"},"macOS instructions above"),"."),(0,r.mdx)("h3",{id:"fedora-prebuilt-rpms"},"Fedora (Prebuilt RPMs)"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Warning"),": Do not install the Fedora-supplied Watchman package. It is old and\nmissing security, bug, and performance fixes."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"From the\n",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/watchman/releases/latest"},"latest release"),",\ndownload the .rpm corresponding to your Fedora version"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"sudo dnf localinstall watchman-$VERSION.fc$FEDORA_VERSION.x86_64.rpm")),(0,r.mdx)("li",{parentName:"ol"},"Confirm successful installation by running ",(0,r.mdx)("inlineCode",{parentName:"li"},"watchman version"))),(0,r.mdx)("h3",{id:"ubuntu-prebuilt-debs"},"Ubuntu (Prebuilt Debs)"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Warning"),": Do not install the Ubuntu-supplied Watchman package. It is old and\nmissing security, bug, and performance fixes."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"From the\n",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/watchman/releases/latest"},"latest release"),",\ndownload the .deb corresponding to your Ubuntu version"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"sudo dpkg -i watchman_$UBUNTU_RELEASE_$VERSION.deb")),(0,r.mdx)("li",{parentName:"ol"},"You will likely see errors about unresolved dependencies. The next step will\nresolve them."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"sudo apt-get -f install")),(0,r.mdx)("li",{parentName:"ol"},"Confirm successful installation by running ",(0,r.mdx)("inlineCode",{parentName:"li"},"watchman version"))),(0,r.mdx)("h3",{id:"-building-from-source"},(0,r.mdx)("a",{name:"building-from-source"})," Building from Source"),(0,r.mdx)("p",null,"Download a\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/watchman/releases/latest"},"source snapshot from the latest release"),"\nor ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/watchman/"},"clone from GitHub"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"$ cd watchman\n\n# Ensure Cargo is installed. Either through your OS's package manager or https://rustup.rs/\n$ cargo version\n\n# Optionally, to save time, you can ask Watchman's build process to install system dependencies\n$ sudo ./install-system-packages.sh\n\n$ ./autogen.sh\n")),(0,r.mdx)("h3",{id:"prebuilt-binaries-2"},"Prebuilt Binaries"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": Our binaries are built from the main branch only. We don't provide\nbinaries for v4.9.0."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": The Linux binaries are compiled on a GitHub Action VM (ubuntu-20.04 at\nthe time of this writing), and Linux binaries are\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/watchman/issues/1019"},"not generally compatible across distributions"),",\nso try the prebuilt Fedora, Ubuntu, or Homebrew packages first."),(0,r.mdx)("p",null,'Watchman is continuously deployed as it passes our internal test validation\ninside Meta and doesn\'t use manually assigned or "approved" version numbers.'),(0,r.mdx)("p",null,"Outside Meta we have automation that cuts a tag and builds binaries on Monday of\neach week and assigns a tag based on the date. That process is in a beta state;\nsome or all of the binaries may not be present for any given tag."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Download and extract the release for your system from the\n",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/facebook/watchman/releases/latest"},"latest release")),(0,r.mdx)("li",{parentName:"ol"},"It will be named something like ",(0,r.mdx)("inlineCode",{parentName:"li"},"watchman-vYYYY.MM.DD.00-linux.zip"))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"$ unzip watchman-*-linux.zip\n$ cd watchman-vYYYY.MM.DD.00-linux\n$ sudo mkdir -p /usr/local/{bin,lib} /usr/local/var/run/watchman\n$ sudo cp bin/* /usr/local/bin\n$ sudo cp lib/* /usr/local/lib\n$ sudo chmod 755 /usr/local/bin/watchman\n$ sudo chmod 2777 /usr/local/var/run/watchman\n")),(0,r.mdx)("h2",{id:"system-specific-preparation"},"System Specific Preparation"),(0,r.mdx)("h3",{id:"linux-inotify-limits"},"Linux inotify Limits"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"inotify(7)")," subsystem has three important tunings that impact watchman."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/proc/sys/fs/inotify/max_user_instances")," impacts how many different root dirs\nyou can watch."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/proc/sys/fs/inotify/max_user_watches")," impacts how many dirs you can watch\nacross all watched roots."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/proc/sys/fs/inotify/max_queued_events")," impacts how likely it is that your\nsystem will experience a notification overflow.")),(0,r.mdx)("p",null,"You obviously need to ensure that ",(0,r.mdx)("inlineCode",{parentName:"p"},"max_user_instances")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"max_user_watches"),"\nare set so that the system is capable of keeping track of your files."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"max_queued_events")," is important to size correctly; if it is too small, the\nkernel will drop events and watchman won't be able to report on them. Making\nthis value bigger reduces the risk of this happening."),(0,r.mdx)("p",null,"Watchman has two simple strategies for mitigating an overflow of\n",(0,r.mdx)("inlineCode",{parentName:"p"},"max_queued_events"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"It uses a dedicated thread to consume kernel events as quickly as possible"),(0,r.mdx)("li",{parentName:"ul"},"When the kernel reports an overflow, watchman will assume that all the files\nhave been modified and will re-crawl the directory tree as though it had just\nstarted watching the dir.")),(0,r.mdx)("p",null,"This means that if an overflow does occur, you won't miss a legitimate change\nnotification, but instead will get spurious notifications for files that haven't\nactually changed."),(0,r.mdx)("h3",{id:"macos-file-descriptor-limits"},"macOS File Descriptor Limits"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Only applicable on macOS 10.6 and earlier")),(0,r.mdx)("p",null,"The default per-process descriptor limit on macOS is extremely low (256!)."),(0,r.mdx)("p",null,"Watchman will attempt to raise its descriptor limit to match\n",(0,r.mdx)("inlineCode",{parentName:"p"},"kern.maxfilesperproc")," when it starts up, so you shouldn't need to mess with\n",(0,r.mdx)("inlineCode",{parentName:"p"},"ulimit"),"; just raising the sysctl should do the trick."),(0,r.mdx)("p",null,"The following will raise the limits to allow 10 million files total, with 1\nmillion files per process until your next reboot."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"$ sudo sysctl -w kern.maxfiles=10485760\n$ sudo sysctl -w kern.maxfilesperproc=1048576\n")),(0,r.mdx)("p",null,"Putting the following into a file named ",(0,r.mdx)("inlineCode",{parentName:"p"},"/etc/sysctl.conf")," on macOS will cause\nthese values to persist across reboots:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"kern.maxfiles=10485760\nkern.maxfilesperproc=1048576\n")))}p.isMDXComponent=!0}}]);