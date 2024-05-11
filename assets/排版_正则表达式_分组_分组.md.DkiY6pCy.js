import{_,D as c,c as n,l as t,I as a,w as l,a as s,aQ as d,o}from"./chunks/framework.CR4cMJKz.js";const w=JSON.parse('{"title":"分组","description":"","frontmatter":{},"headers":[],"relativePath":"排版/正则表达式/分组/分组.md","filePath":"排版/正则表达式/分组/分组.md"}'),i={name:"排版/正则表达式/分组/分组.md"},r=d('<h1 id="分组" tabindex="-1">分组 <a class="header-anchor" href="#分组" aria-label="Permalink to &quot;分组&quot;">​</a></h1><h2 id="层级分组" tabindex="-1">层级分组 <a class="header-anchor" href="#层级分组" aria-label="Permalink to &quot;层级分组&quot;">​</a></h2><table><thead><tr><th>字符</th><th>描述</th></tr></thead><tbody><tr><td>|</td><td>或</td></tr><tr><td>( )</td><td>匹配层级中的部分</td></tr></tbody></table>',3),u={class:"details custom-block"},h=t("summary",null,"点我查看示例",-1),p=t("p",null,"狗",-1),b=t("p",null,"猫",-1),m=d('<div class="language-正则表达式 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">正则表达式</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>(狗|猫)粮</span></span></code></pre></div>',1),T=t("h2",{id:"集合分组",tabindex:"-1"},[s("集合分组 "),t("a",{class:"header-anchor",href:"#集合分组","aria-label":'Permalink to "集合分组"'},"​")],-1),g=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"字符"),t("th",null,"描述")])]),t("tbody",null,[t("tr",null,[t("td",null,"[ ]"),t("td",null,"匹配集合中的单个字符")])])],-1),f={class:"details custom-block"},y=t("summary",null,"点我查看示例",-1),x=t("br",null,null,-1),A=t("br",null,null,-1),C=d('<div class="language-正则表达式 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">正则表达式</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>喝[酒水]</span></span></code></pre></div><hr>',2),v=t("br",null,null,-1),k=t("br",null,null,-1),S=t("br",null,null,-1),P=t("br",null,null,-1),V=d('<div class="language-正则表达式 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">正则表达式</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>第[A-Za-z]版</span></span></code></pre></div>',1),I=d('<h2 id="常用分组" tabindex="-1">常用分组 <a class="header-anchor" href="#常用分组" aria-label="Permalink to &quot;常用分组&quot;">​</a></h2><table><thead><tr><th>字符</th><th>描述</th></tr></thead><tbody><tr><td>[0-9]</td><td>匹配数字</td></tr><tr><td>[a-z]</td><td>匹配小写字母</td></tr><tr><td>[A-Z]</td><td>匹配大写字母</td></tr><tr><td>[\\u4E00-\\u9FFF]</td><td>匹配中文</td></tr><tr><td>[\\u30A1-\\u30FA]</td><td>匹配平假名</td></tr><tr><td>[\\u30FC-\\u30FF]</td><td>匹配片假名</td></tr></tbody></table>',2);function N(D,E,F,q,R,B){const e=c("el-text");return o(),n("div",null,[r,t("details",u,[h,p,a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("狗粮")]),_:1}),b,a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("猫粮")]),_:1}),t("p",null,[s("狗"),a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("猫粮")]),_:1})]),a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("狗粮")]),_:1}),s("和"),a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("狗粮")]),_:1}),m]),T,g,t("details",f,[y,t("p",null,[s("要"),a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("喝酒")]),_:1}),s("吗 "),x]),a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("喝酒")]),_:1}),s("水"),A,s(" 自带酒水 "),C,a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("第 B 版")]),_:1}),v,a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("第 b 版")]),_:1}),k,a(e,{class:"mx-1",type:"success",tag:"b"},{default:l(()=>[s("第 fD 版")]),_:1}),S,s(" 第 2c 版 "),P,s(" 第 2 版 "),V]),I])}const z=_(i,[["render",N]]);export{w as __pageData,z as default};
