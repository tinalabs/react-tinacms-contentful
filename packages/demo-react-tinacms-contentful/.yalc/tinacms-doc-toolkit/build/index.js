!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("tinacms"),require("bloomer"),require("bloomer/lib/elements/Button"),require("react-syntax-highlighter"),require("prism-react-renderer"),require("@next/mdx")):"function"==typeof define&&define.amd?define(["exports","react","tinacms","bloomer","bloomer/lib/elements/Button","react-syntax-highlighter","prism-react-renderer","@next/mdx"],t):t((e=e||self)["tinacms-doc-toolkit"]={},e.React,e.tinacms,e.bloomer,e.Button,e.reactSyntaxHighlighter,e.Highlight,e.mdx)}(this,function(e,p,m,f,h,t,n,o){"use strict";var y="default"in p?p.default:p,a="default"in n?n.default:n;o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;var b=function(){return(b=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function g(n,o){var a,r,l,c={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(a)throw new TypeError("Generator is already executing.");for(;c;)try{if(a=1,r&&(l=2&t[0]?r.return:t[0]?r.throw||((l=r.return)&&l.call(r),0):r.next)&&!(l=l.call(r,t[1])).done)return l;switch(r=0,l&&(t=[2&t[0],l.value]),t[0]){case 0:case 1:l=t;break;case 4:return c.label++,{value:t[1],done:!1};case 5:c.label++,r=t[1],t=[0];continue;case 7:t=c.ops.pop(),c.trys.pop();continue;default:if(!(l=0<(l=c.trys).length&&l[l.length-1])&&(6===t[0]||2===t[0])){c=0;continue}if(3===t[0]&&(!l||t[1]>l[0]&&t[1]<l[3])){c.label=t[1];break}if(6===t[0]&&c.label<l[1]){c.label=l[1],l=t;break}if(l&&c.label<l[2]){c.label=l[2],c.ops.push(t);break}l[2]&&c.ops.pop(),c.trys.pop();continue}t=o.call(n,c)}catch(e){t=[6,e],r=0}finally{a=l=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function x(n){var e=p.useState(!0),t=e[0],o=e[1],a=(r=p.useState())[0],s=r[1],r=(e=p.useState(void 0))[0],u=e[1];return p.useEffect(function(){var r,l,c,i;i=function(){var t;return g(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),o(!0),[4,n()];case 1:return(t=e.sent()).default&&(u(t),o(!1)),[3,3];case 2:return t=e.sent(),s(t),[3,3];case 3:return[2]}})},new(c=(c=l=r=void 0)||Promise)(function(e,t){function n(e){try{a(i.next(e))}catch(e){t(e)}}function o(e){try{a(i.throw(e))}catch(e){t(e)}}function a(t){t.done?e(t.value):new c(function(e){e(t.value)}).then(n,o)}a((i=i.apply(r,l||[])).next())})},[n]),{Component:r,loading:t,error:a}}var r=l;function l(e){!function(r){var e=r.util.clone(r.languages.javascript);r.languages.jsx=r.languages.extend("markup",e),r.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,r.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,r.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,r.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,r.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},r.languages.jsx.tag),r.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:r.languages.jsx},alias:"language-javascript"}},r.languages.jsx.tag);var l=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(l).join(""):""},c=function(e){for(var t=[],n=0;n<e.length;n++){var o=e[n],a=!1;"string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?0<t.length&&t[t.length-1].tagName===l(o.content[0].content[1])&&t.pop():"/>"===o.content[o.content.length-1].content||t.push({tagName:l(o.content[0].content[1]),openedBraces:0}):0<t.length&&"punctuation"===o.type&&"{"===o.content?t[t.length-1].openedBraces++:0<t.length&&0<t[t.length-1].openedBraces&&"punctuation"===o.type&&"}"===o.content?t[t.length-1].openedBraces--:a=!0),(a||"string"==typeof o)&&0<t.length&&0===t[t.length-1].openedBraces&&(a=l(o),n<e.length-1&&("string"==typeof e[n+1]||"plain-text"===e[n+1].type)&&(a+=l(e[n+1]),e.splice(n+1,1)),0<n&&("string"==typeof e[n-1]||"plain-text"===e[n-1].type)&&(a=l(e[n-1])+a,e.splice(n-1,1),n--),e[n]=new r.Token("plain-text",a,null,a)),o.content&&"string"!=typeof o.content&&c(o.content)}};r.hooks.add("after-tokenize",function(e){"jsx"!==e.language&&"tsx"!==e.language||c(e.tokens)})}(e)}l.displayName="jsx",l.aliases=[];var c={'code[class*="language-"]':{color:"black",background:"none",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"black",background:"#f5f2f0",textShadow:"0 1px white",fontFamily:"Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",fontSize:"1em",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto"},'pre[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::-moz-selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'pre[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"]::selection':{textShadow:"none",background:"#b3d4fc"},'code[class*="language-"] ::selection':{textShadow:"none",background:"#b3d4fc"},':not(pre) > code[class*="language-"]':{background:"#f5f2f0",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},comment:{color:"slategray"},prolog:{color:"slategray"},doctype:{color:"slategray"},cdata:{color:"slategray"},punctuation:{color:"#999"},namespace:{Opacity:".7"},property:{color:"#905"},tag:{color:"#905"},boolean:{color:"#905"},number:{color:"#905"},constant:{color:"#905"},symbol:{color:"#905"},deleted:{color:"#905"},selector:{color:"#690"},"attr-name":{color:"#690"},string:{color:"#690"},char:{color:"#690"},builtin:{color:"#690"},inserted:{color:"#690"},operator:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},entity:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)",cursor:"help"},url:{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".language-css .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},".style .token.string":{color:"#9a6e3a",background:"hsla(0, 0%, 100%, .5)"},atrule:{color:"#07a"},"attr-value":{color:"#07a"},keyword:{color:"#07a"},function:{color:"#DD4A68"},"class-name":{color:"#DD4A68"},regex:{color:"#e90"},important:{color:"#e90",fontWeight:"bold"},variable:{color:"#e90"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}};function w(e){return y.createElement("div",{style:{marginTop:40}},e.show&&y.createElement("div",{style:{width:"100%",fontSize:14}},y.createElement(t.PrismLight,{language:"jsx",style:c},e.children)),e.show&&e.readMoreLink&&y.createElement("a",{href:e.readMoreLink,target:"_blank",rel:"noopener noreferrer"},e.readMoreText))}t.PrismLight.registerLanguage("jsx",r);function v(e){var t={};return e.active&&(t.fontWeight="bold",t.color="hsl(0, 0%, 21%)"),y.createElement(y.Fragment,null,y.createElement("div",{style:t},e.children))}function i(e){var t=e.children,e=e.className.replace(/language-/,"");return y.createElement(a,b({},n.defaultProps,{code:t,language:e}),function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,r=e.getTokenProps;return y.createElement("pre",{className:t,style:b(b({},n),{padding:"20px"})},o.map(function(e,t){return y.createElement("div",b({key:t},a({line:e,key:t})),e.map(function(e,t){return y.createElement("span",b({key:t},r({token:e,key:t})))}))}))})}function k(){return y.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},"Loading...")}function E(e){return e=e.children,y.createElement("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},e)}r={pre:function(e){return y.createElement("div",b({},e))},code:i};var s=o({extension:/\.mdx?$/});e.CodeBlock=i,e.Layout=function(e){var t=e.config,n=e.currentSlug,o=t.components,a=o.Link,r=o.Loading,l=o.RenderError,c=p.useState(!1),i=c[0],s=c[1],u=t.pages.find(function(e){return e.slug===n});if(!u)throw Error("did not find page with slug "+n);var g=u,d=t.pages.findIndex(function(e){return e===g}),e=x(g.loadComponent),o=e.Component,c=e.loading,u=e.error,e=o.TinaConfig||{},e=new m.TinaCMS(b(b({},t.tinaConfig),e));return y.createElement(y.Fragment,null,c&&r&&y.createElement(r,null)||k,u&&l&&y.createElement(l,{error:u})||y.createElement(E,null,(null==u?void 0:u.message)||JSON.stringify(u)),o&&y.createElement(m.TinaProvider,{cms:e},y.createElement(f.Container,{style:{marginTop:40,marginBottom:40,paddingLeft:40,paddingRight:40,maxWidth:1e3}},y.createElement(f.Columns,null,y.createElement(f.Column,{isSize:"3/4"},y.createElement(o.default,null),y.createElement("div",{style:{marginRight:"0px",marginTop:"40px"}},y.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"space-between"}},t.pages[d-1]&&y.createElement(a,{to:t.pages[d-1].slug},y.createElement(h.Button,{type:"button",className:"button is-small"},"Previous")),t.cmsToggle&&y.createElement(h.Button,{onClick:e.toggle,type:"button",className:"button is-small"},"Toggle Edit Mode"),o.code&&y.createElement(h.Button,{type:"button",className:"button is-small",onClick:function(){s(!i)}},i?"Close Code":"Show Code"),t.pages[d+1]&&y.createElement(a,{to:t.pages[d+1].slug},y.createElement(h.Button,{type:"button",className:"button is-small"},"Next"))),y.createElement(w,{show:i},void 0!==o.code&&o.code.toString()||""))),y.createElement(f.Column,{isSize:"1/4"},t.tableOfContentsText||"Table of Contents",y.createElement("ol",{style:{marginTop:20}},t.pages.map(function(e){return y.createElement(v,{active:e.slug===g.slug,key:e.slug},y.createElement(a,{to:e.slug},y.createElement("li",null,e.label)))})))))))},e.Loader=k,e.MDXComponents=r,e.configureNext=function(e){return e.pageExtensions=["js","jsx","ts","tsx","md","mdx"],s(e)},Object.defineProperty(e,"__esModule",{value:!0})});
