import{defineComponent as o,openBlock as t,createElementBlock as n,createStaticVNode as p}from"vue";const r={class:"markdown-body"},s=p(`<h6>开发指南</h6><h1>快速上手</h1><p>跟随以下的步骤，快速上手组件库的使用。</p><hr><h3>安装</h3><pre>    <code class="">
        npm install iuniko-ui
    </code>
</pre><h3>引用</h3><pre>    <code class="">
        import { createApp } from &#39;vue&#39;;
        import App from &quot;./App.vue&quot;;
        import &#39;/node_modules/iuniko-ui/dist/style.css&#39;
        import Iuniko from &#39;iuniko-ui&#39;;

        const app = createApp(App);
        app.use(Iuniko);
        app.mount(&#39;#app&#39;);
    </code>
</pre>`,8),c=[s],d={},_="",h=o({__name:"start",setup(i,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(a,m)=>(t(),n("div",r,c))}});export{h as default,_ as excerpt,d as frontmatter};
