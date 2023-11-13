"use strict";(self.webpackChunkmicrosite=self.webpackChunkmicrosite||[]).push([[569],{1460:(e,t,s)=>{s.d(t,{Z:()=>f});var a=s(7294),n=s(6010),r=s(7961),i=s(7524),l=s(9960),o=s(5999),c=s(6550),m=s(8596);function d(e){const{pathname:t}=(0,c.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(5893);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,n.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,n.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,n.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(3102);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.Zo,{component:x,props:e})}function b(e){let{sidebar:t}=e;const s=(0,i.i)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:a,...i}=e,l=t&&t.items.length>0;return(0,h.jsx)(r.Z,{...i,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,n.Z)("col",{"col--7":l,"col--9 col--offset-1":!l}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},756:(e,t,s)=>{s.d(t,{Z:()=>D});var a=s(7294),n=s(6010),r=s(9460),i=s(4996),l=s(5893);function o(e){let{children:t,className:s}=e;const{frontMatter:a,assets:n,metadata:{description:o}}=(0,r.C)(),{withBaseUrl:c}=(0,i.C)(),m=n.image??a.image,d=a.keywords??[];return(0,l.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,l.jsx)("meta",{itemProp:"description",content:o}),m&&(0,l.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,l.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var c=s(9960);const m={title:"title_f1Hy"};function d(e){let{className:t}=e;const{metadata:s,isBlogPostPage:a}=(0,r.C)(),{permalink:i,title:o}=s,d=a?"h1":"h2";return(0,l.jsx)(d,{className:(0,n.Z)(m.title,t),itemProp:"headline",children:a?o:(0,l.jsx)(c.Z,{itemProp:"url",to:i,children:o})})}var u=s(5999),h=s(2263);const g=["zero","one","two","few","many","other"];function p(e){return g.filter((t=>e.includes(t)))}const x={locale:"en",pluralForms:p(["one","other"]),select:e=>1===e?"one":"other"};function j(){const{i18n:{currentLocale:e}}=(0,h.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:p(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),x}}),[e])}function b(){const e=j();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(s,t,e)}}const f={container:"container_mt6G"};function v(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=b();return t=>{const s=Math.ceil(t);return e(s,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,l.jsx)(l.Fragment,{children:s(t)})}function N(e){let{date:t,formattedDate:s}=e;return(0,l.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function _(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function P(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:a,formattedDate:i,readingTime:o}=s;return(0,l.jsxs)("div",{className:(0,n.Z)(f.container,"margin-vert--md",t),children:[(0,l.jsx)(N,{date:a,formattedDate:i}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_,{}),(0,l.jsx)(v,{readingTime:o})]})]})}function Z(e){return e.href?(0,l.jsx)(c.Z,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function k(e){let{author:t,className:s}=e;const{name:a,title:r,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,n.Z)("avatar margin-bottom--sm",s),children:[o&&(0,l.jsx)(Z,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(Z,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:a})})}),r&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:r})]})]})}const C={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function T(e){let{className:t}=e;const{metadata:{authors:s},assets:a}=(0,r.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",i?C.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,l.jsx)("div",{className:(0,n.Z)(!i&&"col col--6",i?C.imageOnlyAuthorCol:C.authorCol),children:(0,l.jsx)(k,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})},t)))})}function w(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(d,{}),(0,l.jsx)(P,{}),(0,l.jsx)(T,{})]})}var I=s(8780),F=s(8828);function L(e){let{children:t,className:s}=e;const{isBlogPostPage:a}=(0,r.C)();return(0,l.jsx)("div",{id:a?I.blogPostContainerID:void 0,className:(0,n.Z)("markdown",s),itemProp:"articleBody",children:(0,l.jsx)(F.Z,{children:t})})}var y=s(4881),B=s(6233);function R(){return(0,l.jsx)("b",{children:(0,l.jsx)(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function M(e){const{blogPostTitle:t,...s}=e;return(0,l.jsx)(c.Z,{"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,l.jsx)(R,{})})}const A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function O(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:s,title:a,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,l.jsxs)("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&A.blogPostFooterDetailsFull),children:[m&&(0,l.jsx)("div",{className:(0,n.Z)("col",{"col--9":c}),children:(0,l.jsx)(B.Z,{tags:s})}),t&&i&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(y.Z,{editUrl:i})}),c&&(0,l.jsx)("div",{className:(0,n.Z)("col text--right",{"col--3":m}),children:(0,l.jsx)(M,{blogPostTitle:a,to:e.permalink})})]}):null}function D(e){let{children:t,className:s}=e;const a=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(o,{className:(0,n.Z)(a,s),children:[(0,l.jsx)(w,{}),(0,l.jsx)(L,{children:t}),(0,l.jsx)(O,{})]})}},4881:(e,t,s)=>{s.d(t,{Z:()=>m});s(7294);var a=s(5999),n=s(5281),r=s(9960),i=s(6010);const l={iconEdit:"iconEdit_Z9Sw"};var o=s(5893);function c(e){let{className:t,...s}=e;return(0,o.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(l.iconEdit,t),"aria-hidden":"true",...s,children:(0,o.jsx)("g",{children:(0,o.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function m(e){let{editUrl:t}=e;return(0,o.jsxs)(r.Z,{to:t,className:n.k.common.editThisPage,children:[(0,o.jsx)(c,{}),(0,o.jsx)(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2244:(e,t,s)=>{s.d(t,{Z:()=>i});s(7294);var a=s(6010),n=s(9960),r=s(5893);function i(e){const{permalink:t,title:s,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.Z,{className:(0,a.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:s})]})}},6233:(e,t,s)=>{s.d(t,{Z:()=>m});s(7294);var a=s(6010),n=s(5999),r=s(9960);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(5893);function o(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(r.Z,{href:t,className:(0,a.Z)(i.tag,n?i.tagWithCount:i.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}const c={tags:"tags_jXut",tag:"tag_QGVx"};function m(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.Z)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:s}=e;return(0,l.jsx)("li",{className:c.tag,children:(0,l.jsx)(o,{label:t,permalink:s})},s)}))})]})}},9460:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>l});var a=s(7294),n=s(902),r=s(5893);const i=a.createContext(null);function l(e){let{children:t,content:s,isBlogPostPage:n=!1}=e;const l=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:n});return(0,r.jsx)(i.Provider,{value:l,children:t})}function o(){const e=(0,a.useContext)(i);if(null===e)throw new n.i6("BlogPostProvider");return e}}}]);