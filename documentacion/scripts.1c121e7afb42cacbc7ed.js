import $ from"jquery";import numerar from"./Numeracion";!function(){let s=0;const o=["+","/","="],a=['"',"'"],n=s=>-1!==o.indexOf(s),e=(s,o)=>("<"===s[o]||"&lt;"===s[o])&&"!"===s[o+1]&&"-"===s[o+2],r=(o,a,n)=>{for(a+="<span class='show-com'>"+o[n]+"</span>",n++;">"!==o[n]&&"&gt;"!==o[n];)a+="<span class='show-com'>"+o[n]+"</span>",n++;return">"===o[n]&&"&gt;"===o[n]||(a+="<span class='show-com'>"+o[n]+"</span>"),s=n,a},t=(o,e,r)=>("<"!==o[r]&&"&lt;"!==o[r]||(e=((o,a,n)=>{for("<"===o[n]&&(a+="<span class='show-ang'>"+o[n]+"</span>",n++);" "!==o[n]&&">"!==o[n]&&"&gt;"!==o[n]&&n<o.length;)a+="/"===o[n]?"<span class='show-ang'>"+o[n]+"</span>":"<span class='show-eti'>"+o[n]+"</span>",n++;return" "===o[n]&&(a+=" "),s=n,a})(o,e,r))," "===o[r=s]&&(e=((o,a,e)=>{for(;!n(o[e])&&" "!==o[e]&&">"!==o[e]&&"&gt;"!==o[e];)a+="<span class='show-attr'>"+o[e]+"</span>",e++;return" "===o[e]&&(a+=" "),s=e,a})(o,e+=" ",++r)),n(o[r=s])&&(e+="<span class='c-negro'>"+o[r]+"</span>",r++),-1!==a.indexOf(o[r])&&(e=((o,a,n)=>{let e=o[n];for(a+="<span class='show-string'>"+o[n]+"</span>",n++;o[n]!==e;)a+="<span class='show-string'>"+o[n]+"</span>",n++;return a+="<span class='show-string'>"+o[n]+"</span>"," "===o[++n]&&(a+=" "),"\n"===o[n]&&(a+="\n"),s=n,a})(o,e,r)),">"!==o[r=s]&&"&gt;"!==o[r]||(e+="<span class='show-ang'>"+o[r]+"</span>"),r=s,e);window.CodigoHtml={iniciar:o=>{(({tipo:o="html",lineas:a=!0}={})=>{$(".cod-html").each((n,l)=>{let p="";"html"===o?(p=$(l).html(),$(l).text(p)):(p=$(l).text(),$(l).text(p));let c="";for(let o=0;o<p.length;o++)if("<"===p[o]||"&lt;"===p[o]){for(;!e(p,o)&&">"!==p[o]&&"&gt;"!==p[o];)c=t(p,c,o),o=s;e(p,o)&&(c=r(p,c,o),o=s)}else c+=p[o];$(l).html(c),a&&numerar(l,p)})})(o)}}}();export default CodigoHtml;import $ from"jquery";import numerar from"./Numeracion";window.CodigoJs={iniciar:s=>{(({lineas:s=!0}={})=>{$(".cod-js").each((o,a)=>{let n=$(a).html();$(a).text(n);let e=(s=>{let o="";for(let a=0;a<s.length;a++)if('"'===s[a]||"'"===s[a]||"`"===s[a]){let n=s[a];for(o+="<span class='show-string'>"+s[a]+"</span>",a++;a<s.length&&s[a]!==n;)if("`"===n)if("$"===s[a]){for(;a<s.length&&"}"!==s[a];)o+="<span class='show-res'>"+s[a]+"</span>",a++;"}"===s[a]&&(o+="<span class='show-res'>"+s[a]+"</span>",a++)}else o+="<span class='show-string'>"+s[a]+"</span>",a++;else o+="<span class='show-string'>"+s[a]+"</span>",a++;s[a]===n&&(o+="<span class='show-string'>"+s[a]+"</span>",a++),o+=s[a]}else o+=s[a];return o})(n);e=(s=>{let o="";for(var a=0;a<s.length;a++)if("/"===s[a]&&"/"===s[a+1]){for(o+="<span class='show-com'>"+s[a]+"</span>",a++;"\n"!==s[a]&&a<s.length;)o+="<span class='show-com'>"+s[a]+"</span>",a++;o+=s[a]}else if("/"===s[a]&&"*"===s[a+1]){for(o+="<span class='show-com'>"+s[a]+"</span>",a++;"/"!==s[a]&&a<s.length;)o+="<span class='show-com'>"+s[a]+"</span>",a++;"/"===s[a]&&(o+="<span class='show-com'>"+s[a]+"</span>",a++),o+=s[a]}else o+=s[a];return o})(e),e=(s=>{let o=/[a-z]+ *[a-zA-Z0-9\$-_]+ *= *\(.*\) *=&gt; *\n*{/,a=s.search(o),n=s.substring(a,s.length),e=0;for(;-1!==a;){let r="";for(;" "!==n[e]&&e<n.length;)e++;for(;" "===n[e]&&e<n.length;)e++;for(;"="!==n[e];)r+=n[e],e++;s=s.replace(r,`<span class='show-met'>${r}</span>`),n=n.substring(e+1,n.length),a=n.search(o),e=a}return s})(e),e=(s=>{let o=/function[\t ]+[a-zA-Z0-9-_\$]+[\t ]*\([\t ]*.*[\t ]*\)[\t ]*{/,a=s.search(o),n=s.substring(a,s.length),e=0;for(;-1!==a;){let r="";for(;" "!==n[e]&&e<n.length;)e++;for(;" "===n[e]&&e<n.length;)e++;for(;"("!==n[e];)r+=n[e],e++;s=s.replace(r,`<span class='show-met'>${r}</span>`),n=n.substring(e+1,n.length),a=n.search(o),e=a}return s})(e),e=(s=>{let o=/[a-zA-Z0-9_]+[\t ]*\([\n\t ]*[ a-zA-Z0-9_\:{}"=#,\t\n-]*,*\)[\t\n ]*{/,a=s.search(o),n=s.substring(a,s.length),e=0;for(;-1!==a;){let r="";for(;"("!==n[e];)r+=n[e],e++;s=s.replace(new RegExp(`${r}`),`<span class='show-var'>${r}</span>`),n=n.substring(e+1,n.length),a=n.search(o),e=a}return s})(e),e=e.replace(/=&gt;/g,"<span class='show-res'>=></span>"),e=e.replace(/undefined/g,"<span class='show-res'>undefined</span>"),e=e.replace(/const /g,"<span class='show-res'>const </span>"),e=e.replace(/let /g,"<span class='show-res'>let </span>"),e=e.replace(/var /g,"<span class='show-res'>var </span>"),e=e.replace(/class /g,"<span class='show-res'>class </span>"),e=e.replace(/function/g,"<span class='show-res'>function</span>"),e=e.replace(/constructor/g,"<span class='show-res'>constructor</span>"),e=e.replace(/this/g,"<span class='show-res'>this</span>"),e=e.replace(/typeof/g,"<span class='show-res'>typeof</span>"),e=e.replace(/import /g,"<span class='show-res'>import </span>"),e=e.replace(/export /g,"<span class='show-res'>export </span>"),e=e.replace(/from /g,"<span class='show-res'>from </span>"),e=e.replace(/true/g,"<span class='show-res'>true </span>"),e=e.replace(/false/g,"<span class='show-res'>false </span>"),e=e.replace(/new /g,"<span class='show-res'>new </span>"),e=e.replace(/interface/g,"<span class='show-res'>interface</span>"),e=e.replace(/require/g,"<span class='show-met'>require</span>"),e=e.replace(/if[\n ]*\(/g,"<span class='show-control'>if</span>&nbsp;<span class='show-neutro'>(</span>"),e=e.replace(/else/g,"<span class='show-control'>else</span>"),e=e.replace(/while[\n ]*\(/g,"<span class='show-control'>while</span>&nbsp;<span class='show-neutro'>(</span>"),e=e.replace(/switch/g,"<span class='show-control'>switch</span>"),e=e.replace(/case/g,"<span class='show-control'>case</span>"),e=e.replace(/default/g,"<span class='show-control'>default</span>"),e=e.replace(/extends/g,"<span class='show-control'>extends</span>"),e=e.replace(/static/g,"<span class='show-control'>static</span>"),e=e.replace(/return/g,"<span class='show-control'>return </span>"),e=e.replace(/do[\n ]*{/g,"<span class='show-control'>do</span>&nbsp;<span class='show-neutro'>{</span>"),e=e.replace(/forEach/g,"<span class='show-control'>forEach</span>"),e=e.replace(/for[\n ]*\(/g,"<span class='show-control'>for</span>&nbsp;<span class='show-neutro'>(</span>"),e=e.replace(/break/g,"<span class='show-control'>break</span>"),e=e.replace(/!/g,"<span class='show-op'>!</span>"),e=e.replace(/console\.log/g,"<span class='show-sistema'>console</span><span class='show-neutro'>.</span><span class='show-control'>log</span>"),e=e.replace(/console\.error/g,"<span class='show-sistema'>console</span><span class='show-neutro'>.</span><span class='show-error'>error</span>"),e=e.replace(/console\./g,"<span class='show-sistema'>console</span><span class='show-neutro'>.</span>"),e=e.replace(/window\./g,"<span class='show-sistema'>window</span><span class='show-neutro'>.</span>"),e=e.replace(/\( *window *\)/g,"<span class='show-neutro'>( </span><span class='show-sistema'>window</span><span class='show-neutro'> )</span>"),e=e.replace(/document\./g,"<span class='show-sistema'>document</span><span class='show-neutro'>.</span>"),e=e.replace(/\( *document *\)/g,"<span class='show-neutro'>( </span><span class='show-sistema'>document</span><span class='show-neutro'> )</span>"),e=e.replace(/alert\./g,"<span class='show-sistema'>alert</span><span class='show-neutro'>.</span>"),$(a).html(e),s&&numerar(a,n)})})(s)}};export default CodigoJs;import $ from"jquery";import numerar from"./Numeracion";!function(){let s=0;const o=(s,o)=>"@"===s[o],a=(s,o)=>'"'===s[o]||"'"===s[o],n=(s,o)=>"{"===s[o],e=(s,o)=>" "!==s[o]&&"\t"!==s[o]&&/(\.*\#*[^ @ ][a-zA-Z0-9-_\(\)\[\])]+ *\n*{)/.test(s.substring(o,s.length)),r=(o,a,n)=>{for(;" "!==o[n]&&n<o.length;)a+="<span class='show-claves'>"+o[n]+"</span>",n++;return s=n,a+o[n]},t=(o,a,n)=>{for(a+="<span class='show-llaves'>"+o[n]+"</span>",n++;"}"!==o[n]&&n<o.length;){for(;!p(o,n)&&":"!==o[n]&&"}"!==o[n]&&n<o.length;)a+="<span class='show-prop'>"+o[n]+"</span>",n++;for(;!p(o,n)&&"\n"!==o[n]&&"}"!==o[n]&&n<o.length;)if("!"===o[n])for(;";"!==o[n]&&"\n"!==o[n]&&" "!==o[n]&&n<o.length;)a+="<span class='show-res'>"+o[n]+"</span>",n++;else a+="<span class='show-valor'>"+o[n]+"</span>",n++;p(o,n)&&(a=c(o,a,n),n=s)}return s=n,a+o[n]},l=(o,a,n)=>{let e=o[n];for(a+="<span class='show-string'>"+o[n]+"</span>",n++;o[n]!==e&&n<o.length;)a+="<span class='show-string'>"+o[n]+"</span>",n++;return a+=o[n]===e?"<span class='show-string'>"+o[n]+"</span>":o[n],"}"===o[n]&&(a+="<span class='show-llaves'>"+o[n]+"</span>",n++),s=n,a},p=(s,o)=>"/"===s[o]&&"*"===s[o+1],c=(o,a,n)=>{for(a+="<span class='show-com'>"+o[n]+"</span>",a+="<span class='show-com'>"+o[++n]+"</span>",n++;"*/"!==o.substring(n,n+2)&&n<o.length;)a+="<span class='show-com'>"+o[n]+"</span>",n++;return"*"===o[n]&&"/"===o[n+1]&&(a+="<span class='show-com'>"+o[n]+"</span>",a+="<span class='show-com'>"+o[++n]+"</span>",n++),s=n,a+o[n]},i=(e,r,t)=>{for(;!p(e,t)&&"}"!==e[t]&&!n(e,t)&&!o(e,t)&&!a(e,t)&&"{"!==e[t]&&t<e.length;)r+="<span class='show-selectores'>"+e[t]+"</span>",t++;return p(e,t)||a(e,t)||o(e,t)||n(e,t)?(s=t,r):(s=t,r+=e[t])};window.CodigoCss={iniciar:m=>{(({lineas:m=!0}={})=>{$(".cod-css").each((d,h)=>{let g=$(h).html();$(h).text(g);let w="";for(let m=0;m<g.length;m++)e(g,m)?(w=i(g,w,m),m=s,a(g,m)&&(w=l(g,w,m),m=s),o(g,m)&&(w=r(g,w,m),m=s),n(g,m)&&(w=t(g,w,m),m=s),p(g,m)&&(w=c(g,w,m),m=s)):w+=g[m];w=w.replace(/!important/g,"<span class='show-res'>!important</span>"),$(h).html(w),m&&numerar(h,g)})})(m)}}}();export default CodigoCss;import App from"./app";window.Dynamics={initDrop:()=>{App.drop()},destroyDrop:()=>{App.dropDestroy()},init:()=>{App.cover(),App.drop(),App.tips(),App.comment(),App.personal()},destroy:()=>{App.dropDestroy()},toast:(s={})=>{App.toast(s)}};export default Dynamics;import Modal from"./modulos/Modal";import Waves from"./modulos/Waves";import DropDown from"./modulos/Dropdown";import BotonFlotante from"./modulos/BotonFlotante";import Toast from"./modulos/Toast";import ScrollSpy from"./modulos/ScrollSpy";import ToolTips from"./modulos/ToolTips";import Imagenes from"./modulos/Imagenes";import Range from"./modulos/Range";import Slider from"./modulos/Slider";import Paralax from"./modulos/Paralax";import BotonInicio from"./modulos/BotonInicio";import Alerta from"./modulos/Alerta";import Template from"./modulos/Template";import Tab from"./modulos/Tabs";import GruposInput from"./modulos/GruposInput";import Desactivado from"./modulos/Desactivado";import Coleccion from"./modulos/Colecciones";import ColeccionFlotante from"./modulos/ColeccionFlotante";import EfectoHoverBorde from"./modulos/EfectoHoverBorde";import InputHandler from"./modulos/InputHandler";import Select from"./modulos/Select";import Contenedores from"./modulos/Contenedores";import Nav from"./modulos/Nav";import Html from"./modulos/CodigoHtml";import Js from"./modulos/CodigoJs";import Css from"./modulos/CodigoCss";import Java from"./modulos/CodigoJava";import C from"./modulos/CodigoC";import ComentarioDinamico from"./modulos/ComentarioDinamico";import Personalizado from"./modulos/Personalizado";!function(){Waves.iniciar(),Range.iniciar(),Alerta.iniciar(),Template.iniciar(),GruposInput.iniciar(),Desactivado.iniciar(),InputHandler.iniciar(),ComentarioDinamico.iniciar();const s=()=>{Nav.iniciar()},o=()=>Paralax.iniciar(),a=s=>{BotonFlotante.iniciar(s)},n=s=>ScrollSpy.iniciar(s),e=function(s){Modal.iniciar(s)},r=()=>{Imagenes.iniciar()},t=s=>{Slider.iniciar(s)},l=s=>{DropDown.iniciar(s)},p=()=>{ToolTips.iniciar()};window.BS={AutoInit:()=>(e(),l({}),n({}),a({}),r(),t({}),o(),p(),void s()),ModalInit:s=>e(s),ModalDestroy:()=>{Modal.destroy()},DropDownInit:s=>l(s),DropDownDestroy:s=>(s=>{DropDown.destroy(s)})(s),Toast:s=>Toast.ejecutar(s),ScrollSpyInit:s=>n(s),ScrollSpyDestroy:()=>ScrollSpy.destroy(),BotonFlotanteInit:s=>a(s),BotonFlotanteDestroy:()=>{BotonFlotante.destroy()},ImagenesInit:()=>r(),ImagenesDestroy:()=>{Imagenes.destroy()},Deshabilitar:()=>(desactivar(".deshabilitado"),desactivar(".input-cargando"),desactivar(".input-cargando input"),desactivar(".b-rojo-cargando"),desactivar(".b-verde-cargando"),desactivar(".b-azul-cargando"),desactivar(".b-gris-cargando"),desactivar(".b-negro-cargando"),void desactivar(".b-blanco-cargando")),SliderInit:(s={})=>t(s),SliderDestroy:()=>{Slider.destroy()},ParalaxInit:()=>o(),BotonInicioInit:()=>{BotonInicio.iniciar()},BotonInicioDestroy:()=>{BotonInicio.destroy()},TabInit:()=>new Tab,ToolTipsInit:()=>p(),ToolTipsDestroy:()=>{ToolTips.destroy()},Colecciones:()=>new Coleccion,ColeccionFlot:()=>new ColeccionFlotante,EfectoHoverBordeInit:()=>new EfectoHoverBorde,SelectInit:()=>new Select,ContenedoresInit:()=>Contenedores.iniciar(),NavInit:()=>s(),NavDestroy:()=>{Nav.destroy()},TemplateDestroy:()=>{Template.destroy()},PersonalizadoInit:s=>(s=>{Personalizado.iniciar(s)})(s),PersonalizadoDestroy:()=>{Personalizado.destroy()},CodigoHtmlInit:s=>(s=>{Html.iniciar(s)})(s),CodigoCssInit:s=>(s=>{Css.iniciar(s)})(s),CodigoJsInit:s=>(s=>{Js.iniciar(s)})(s),CodigoJavaInit:s=>(s=>{Java.iniciar(s)})(s),CodigoCInit:s=>(s=>{C.iniciar(s)})(s)}}();export default BS;import $ from"jquery";class Toast{static show({html:s="Este es un toast",bg:o="red",color:a="white",time:n=3e3,classes:e=[]}={}){$(".toast").remove();let r=$(`<div class='toast'>${s}</div>`);$(r).css("background-color",o),$(r).css("color",a),e.forEach(s=>$(r).addClass(s)),$("body").append(r),$(r).animate({top:30},1500,()=>{setTimeout(()=>{$(r).remove()},n)})}}export default Toast;