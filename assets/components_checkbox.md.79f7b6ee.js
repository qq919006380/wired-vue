import{r as a,o as n,c as s,a as t,w as e,b as p,d as o}from"./app.f6d497cd.js";const c='{"title":"基础用法","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础用法","slug":"基础用法"}],"relativePath":"components/checkbox.md","lastUpdated":1622714055488}',l={},u=t("h2",{id:"基础用法"},"基础用法",-1),k=p("选择"),d=p("可禁用"),i=o('<div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>选择<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>  \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">disabled</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>可禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">&gt;</span></span>   \n</code></pre></div>',1);l.render=function(p,o,c,l,r,h){const m=a("Checkbox",!0),g=a("checkbox",!0);return n(),s("div",null,[u,t(m,{modelValue:p.checked,"onUpdate:modelValue":o[1]||(o[1]=a=>p.checked=a)},{default:e((()=>[k])),_:1},8,["modelValue"]),t("p",null,[t(g,{disabled:"",modelValue:p.checked,"onUpdate:modelValue":o[2]||(o[2]=a=>p.checked=a)},{default:e((()=>[d])),_:1},8,["modelValue"])]),i])};export default l;export{c as __pageData};
