import{_,D as l,c as n,l as t,I as s,w as o,a,aQ as c,o as d}from"./chunks/framework.CR4cMJKz.js";const S=JSON.parse('{"title":"模式","description":"","frontmatter":{},"headers":[],"relativePath":"排版/正则表达式/模式/模式.md","filePath":"排版/正则表达式/模式/模式.md"}'),i={name:"排版/正则表达式/模式/模式.md"},r=c('<h1 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-label="Permalink to &quot;模式&quot;">​</a></h1><h2 id="贪婪模式" tabindex="-1">贪婪模式 <a class="header-anchor" href="#贪婪模式" aria-label="Permalink to &quot;贪婪模式&quot;">​</a></h2><p>默认为贪婪匹配</p><h2 id="收敛模式" tabindex="-1">收敛模式 <a class="header-anchor" href="#收敛模式" aria-label="Permalink to &quot;收敛模式&quot;">​</a></h2><table><thead><tr><th>字符</th><th>描述</th></tr></thead><tbody><tr><td>?</td><td>匹配范围后加上为收敛匹配</td></tr></tbody></table>',5),h={class:"details custom-block"},p=t("summary",null,"点我查看示例",-1),u=c('<br><div class="language-正则表达式 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">正则表达式</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>（.+?）</span></span></code></pre></div><hr>',3),b=c('<br><div class="language-正则表达式 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">正则表达式</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>（.+）</span></span></code></pre></div>',2),m=t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"提示"),t("p",null,"当匹配范围较大时可能会超出预期，此时通常需要使用收敛模式")],-1);function T(g,f,k,v,x,C){const e=l("el-text");return d(),n("div",null,[r,t("details",h,[p,s(e,{class:"mx-1",type:"success",tag:"b"},{default:o(()=>[a("（1+2）")]),_:1}),a("+3+4+"),s(e,{class:"mx-1",type:"success",tag:"b"},{default:o(()=>[a("（5+6）")]),_:1}),u,s(e,{class:"mx-1",type:"success",tag:"b"},{default:o(()=>[a("（1+2）+3+4+（5+6）")]),_:1}),b]),m])}const y=_(i,[["render",T]]);export{S as __pageData,y as default};
