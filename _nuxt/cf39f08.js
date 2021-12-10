(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{316:function(e,t,n){var r=n(3);e.exports=r(1..valueOf)},317:function(e,t,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(102).default)("3c83c44d",content,!0,{sourceMap:!1})},323:function(e,t,n){"use strict";n.r(t);var r=n(9),o=(n(58),n(40),n(13),n(32),n(335),n(338),n(27),n(74),{name:"BaseMoveStats",data:function(){return{blockchains:{value:0},users:{value:0},price:{value:0},done:{value:0},cap:{value:0},total:{value:0},transfersin:{value:0},transfersout:{value:0},valuein:{value:0},valueout:{value:0},crosschain:{value:0},circulating:{value:0},hasAnimationPlayed:!1}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.get("https://api.elk.finance/v1/info/circulation");case 3:return r=t.sent,t.next=6,n.get("https://api.elk.finance/v1/info/elknet");case 6:o=t.sent,e.circulating.value=r.data.total,e.done.value=o.data.total["num-transfers"],e.total.value=o.data.total["amount-transfers"],e.users.value=o.data.total.users,t.t0=regeneratorRuntime.keys(o.data);case 12:if((t.t1=t.t0()).done){t.next=24;break}if("total"!==(l=t.t1.value)){t.next=16;break}return t.abrupt("continue",12);case 16:f=o.data[l],e.transfersin.value=f["num-transfers-in"],e.transfersout.value=f["num-transfers-out"],e.valuein.value=f["amount-transfers-in"],e.valueout.value=f["amount-transfers-out"],e.blockchains.value=(null!==(c=Object.keys(null==o?void 0:o.data).length)&&void 0!==c?c:1)-1,t.next=12;break;case 24:case"end":return t.stop()}}),t)})))()},methods:{getNumberBase:function(e){return Math.abs(Number(e))>=1e12?{symbol:"T",base:1e12}:Math.abs(Number(e))>=1e9?{symbol:"B",base:1e9}:Math.abs(Number(e))>=1e6?{symbol:"M",base:1e6}:Math.abs(Number(e))>=1e3?{symbol:"k",base:1e3}:{symbol:"",base:1}},formatNumber:function(e,t){var symbol=t.symbol,base=t.base,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2;return(e/base).toFixed(n)+symbol},animateValue:function(e,t,n,r){var o=this,l=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],c=null,f=2e3;n=parseFloat(n);var v=this.getNumberBase(n);l||(v={symbol:"",base:1});var m=function l(m){c||(c=m);var progress=Math.min((m-c)/f,1),h=progress*(n-t)+t;n%1==0&&(h=Math.floor(h));var _=o.formatNumber(h,v,r);e.innerHTML=_.replace(".00","").replace(/\.0$/,""),progress<1&&window.requestAnimationFrame(l)};window.requestAnimationFrame(m)},intersectionCallback:function(e){e[0].isIntersecting&&!this.hasAnimationPlayed&&(this.animateValue(document.querySelector("#blockchains"),0,this.blockchains.value),this.animateValue(document.querySelector("#users"),0,this.users.value),this.animateValue(document.querySelector("#price"),0,this.price.value),this.animateValue(document.querySelector("#done"),0,this.done.value),this.animateValue(document.querySelector("#cap"),0,this.cap.value),this.animateValue(document.querySelector("#total"),0,this.total.value),this.animateValue(document.querySelector("#transfersin"),0,this.transfersin.value,1),this.animateValue(document.querySelector("#transfersout"),0,this.transfersout.value,1),this.animateValue(document.querySelector("#valuein"),0,this.valuein.value,1),this.animateValue(document.querySelector("#valueout"),0,this.valueout.value,1),this.animateValue(document.querySelector("#crosschain"),0,this.crosschain.value,2,!1),this.hasAnimationPlayed=!0)},getCurrencyPrice:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={BSC:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-bsc",AVAX:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-avax",HECO:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-heco",MATIC:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-matic",FTM:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-ftm",XDAI:"https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-xdai",HARMONY:"https://graph.t.hmny.io/subgraphs/name/elkfinance/elkdex-harmony",KCC:"https://kcc-graph.elk.finance/subgraphs/name/elkfinance/elkdex-kcc",OKEX:"https://okex-graph.elk.finance/subgraphs/name/elkfinance/elkdex-okex",HOO:"https://hoo-graph.elk.finance/subgraphs/name/elkfinance/elkdex-hoo",ELASTOS:"https://elastos-graph.elk.finance/subgraphs/name/elkfinance/elkdex-elastos",MOONRIVER:"https://moonriver-graph.elk.finance/subgraphs/name/elkfinance/elkdex-moonriver"},n.next=3,t.$axios({url:r[e],method:"POST",data:{query:'\n            query {\n                tokens(first: 1, where: {symbol: "ELK"}) {\n                    id,\n                    symbol,\n                    name,\n                    decimals,\n                    tokenDayData(orderBy:date, orderDirection:desc, first:1){\n                        date,\n                        priceUSD\n                    }\n                }\n            }\n        '}},{headers:{"Content-Type":"application/json"}});case 3:return o=n.sent,n.abrupt("return",o.data.data.tokens[0].tokenDayData[0].priceUSD);case 5:case"end":return n.stop()}}),n)})))()},averageArray:function(e){return e.reduce((function(a,b){return a+b}),0)/e.length}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,symbol,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:new IntersectionObserver(e.intersectionCallback,{threshold:.33}).observe(document.querySelector(".move-stats")),n=["AVAX","BSC","XDAI"],r=[],t.t0=regeneratorRuntime.keys(n);case 5:if((t.t1=t.t0()).done){t.next=14;break}return o=t.t1.value,symbol=n[o],t.next=10,e.getCurrencyPrice(symbol);case 10:l=t.sent,r.push(parseFloat(l)),t.next=5;break;case 14:c=e.averageArray(r).toFixed(2),e.price.value=c,e.crosschain.value=parseInt(e.total.value)*c,e.cap.value=parseInt(e.circulating.value)*c;case 18:case"end":return t.stop()}}),t)})))()}}),l=o,c=(n(339),n(45)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"move-stats fs--12"},[n("div",{staticClass:"move-stats__global-stats pos--rel"},[n("div",{staticClass:"move-stats__global-stat--blockchains flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        blockchains\n      ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"blockchains"}},[e._v("\n        0\n      ")])]),e._v(" "),n("div",{staticClass:"move-stats__global-stat--users flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        unique users\n      ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"users"}},[e._v("\n        0\n      ")])]),e._v(" "),n("div",{staticClass:"move-stats__global-stat--price flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        price (average)\n      ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"price"}},[e._v("\n        0\n      ")])]),e._v(" "),n("div",{staticClass:"move-stats__global-stat--done flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        total transfers done\n      ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"done"}},[e._v("\n        0\n      ")])]),e._v(" "),n("div",{staticClass:"move-stats__global-stat--cap flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        total market cap\n      ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"cap"}},[e._v("\n        0\n      ")])]),e._v(" "),n("div",{staticClass:"move-stats__global-stat--total flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        elk transfered total\n      ")]),e._v(" "),n("p",{staticClass:"move-stast__stat-value fs--34 fw--700 flex flex--x-between",attrs:{id:"total"}},[e._v("\n        0\n      ")])])]),e._v(" "),n("div",{staticClass:"move-stats__elknet-stats flex pos--rel"},[n("div",{staticClass:"move-stats__elknet-stat--transfers flex flex--x-between"},[n("p",{staticClass:"move-stat-title fs--12 lh--180"},[e._v("\n        total transfers\n      ")]),e._v(" "),n("div",{staticClass:"move-stats__stat-group flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"transfersin"}},[e._v("\n          0\n        ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"transfersout"}},[e._v("\n          0\n        ")])])]),e._v(" "),n("div",{staticClass:"move-stats__elknet-stat--value flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n        total value transfered\n      ")]),e._v(" "),n("div",{staticClass:"move-stats__stat-group flex flex--x-between"},[n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"valuein"}},[e._v("\n          0\n        ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"valueout"}},[e._v("\n          0\n        ")])])])]),e._v(" "),n("div",{staticClass:"move-stats__crosschain-stat flex flex--x-between fc--green"},[n("p",{staticClass:"move-stats__stat-title fs--12 lh--180"},[e._v("\n      total value moved cross-chain\n    ")]),e._v(" "),n("p",{staticClass:"move-stats__stat-value fw--700 fs--34 flex flex--x-between",attrs:{id:"crosschain"}},[e._v("\n      0\n    ")])])])}],!1,null,null,null);t.default=component.exports},335:function(e,t,n){"use strict";var r=n(14),o=n(0),l=n(3),c=n(104),f=n(19),v=n(15),m=n(184),h=n(39),_=n(103),d=n(183),x=n(5),k=n(73).f,w=n(35).f,y=n(18).f,C=n(316),N=n(336).trim,A="Number",S=o.Number,I=S.prototype,E=o.TypeError,M=l("".slice),O=l("".charCodeAt),V=function(e){var t=d(e,"number");return"bigint"==typeof t?t:R(t)},R=function(e){var t,n,r,o,l,c,f,code,v=d(e,"number");if(_(v))throw E("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(v=N(v),43===(t=O(v,0))||45===t){if(88===(n=O(v,2))||120===n)return NaN}else if(48===t){switch(O(v,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+v}for(c=(l=M(v,2)).length,f=0;f<c;f++)if((code=O(l,f))<48||code>o)return NaN;return parseInt(l,r)}return+v};if(c(A,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var F,T=function(e){var t=arguments.length<1?0:S(V(e)),n=this;return h(I,n)&&x((function(){C(n)}))?m(Object(t),n,T):t},P=r?k(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;P.length>D;D++)v(S,F=P[D])&&!v(T,F)&&y(T,F,w(S,F));T.prototype=I,I.constructor=T,f(o,A,T)}},336:function(e,t,n){var r=n(3),o=n(22),l=n(11),c=n(337),f=r("".replace),v="["+c+"]",m=RegExp("^"+v+v+"*"),h=RegExp(v+v+"*$"),_=function(e){return function(t){var n=l(o(t));return 1&e&&(n=f(n,m,"")),2&e&&(n=f(n,h,"")),n}};e.exports={start:_(1),end:_(2),trim:_(3)}},337:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},338:function(e,t,n){"use strict";var r=n(6),o=n(0),l=n(3),c=n(50),f=n(316),v=n(185),m=n(5),h=o.RangeError,_=o.String,d=Math.floor,x=l(v),k=l("".slice),w=l(1..toFixed),y=function(e,t,n){return 0===t?n:t%2==1?y(e,t-1,n*e):y(e*e,t/2,n)},C=function(data,e,t){for(var n=-1,r=t;++n<6;)r+=e*data[n],data[n]=r%1e7,r=d(r/1e7)},N=function(data,e){for(var t=6,n=0;--t>=0;)n+=data[t],data[t]=d(n/e),n=n%e*1e7},A=function(data){for(var e=6,s="";--e>=0;)if(""!==s||0===e||0!==data[e]){var t=_(data[e]);s=""===s?t:s+x("0",7-t.length)+t}return s};r({target:"Number",proto:!0,forced:m((function(){return"0.000"!==w(8e-5,3)||"1"!==w(.9,0)||"1.25"!==w(1.255,2)||"1000000000000000128"!==w(0xde0b6b3a7640080,0)}))||!m((function(){w({})}))},{toFixed:function(e){var t,n,r,o,l=f(this),v=c(e),data=[0,0,0,0,0,0],m="",d="0";if(v<0||v>20)throw h("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return _(l);if(l<0&&(m="-",l=-l),l>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(l*y(2,69,1))-69)<0?l*y(2,-t,1):l/y(2,t,1),n*=4503599627370496,(t=52-t)>0){for(C(data,0,n),r=v;r>=7;)C(data,1e7,0),r-=7;for(C(data,y(10,r,1),0),r=t-1;r>=23;)N(data,1<<23),r-=23;N(data,1<<r),C(data,1,1),N(data,2),d=A(data)}else C(data,0,n),C(data,1<<-t,0),d=A(data)+x("0",v);return d=v>0?m+((o=d.length)<=v?"0."+x("0",v-o)+d:k(d,0,o-v)+"."+k(d,o-v)):m+d}})},339:function(e,t,n){"use strict";n(317)},340:function(e,t,n){var r=n(101),o=n(179),l=n(180),c=n(181),f=n(182),v=r(!1),m=o(l),h=o(c),_=o(f);v.push([e.i,'@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:400;font-display:swap;src:url('+m+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:700;font-display:swap;src:url('+h+') format("opentype")}@font-face{font-family:"Aeonik Pro";font-style:normal;font-weight:900;font-display:swap;src:url('+_+') format("opentype")}.move-stats{display:grid;grid-template-areas:"global" "elknet" "crosschain";grid-gap:8px;gap:8px;margin:0 0 48px;width:100%;max-width:1160px;text-transform:uppercase}.move-stats__global-stats{display:grid;grid-area:global;grid-template-areas:"blockchains users" "price done" "cap done" "total total";grid-gap:8px;gap:8px;margin:48px 0 0}.move-stats__global-stats:before{content:"GLOBAL";position:absolute;left:0;bottom:calc(100% + 16px)}.move-stats__global-stat--blockchains{grid-area:blockchains}.move-stats__global-stat--users{grid-area:users}.move-stats__global-stat--price{grid-area:price}.move-stats__global-stat--done{grid-area:done}.move-stats__global-stat--cap{grid-area:cap}.move-stats__global-stat--total{grid-area:total}.move-stats__elknet-stats{grid-area:elknet;flex-direction:column;margin:48px 0 0}.move-stats__elknet-stats:before{content:"ELKNET";position:absolute;left:0;bottom:calc(100% + 16px)}.move-stats__elknet-stat--transfers{margin:0 0 8px}.move-stats__crosschain-stat{grid-area:crosschain;background:#fff}.move-stats__crosschain-stat,.move-stats__elknet-stats>*,.move-stats__global-stats>*{padding:12px 10px 10px;min-height:96px;flex-direction:column}.move-stats__global-stats>*{background:#521ea0}.move-stats__elknet-stats>*{background:#01522c}.move-stats__stat-value:before{margin:0 8px 0 0;font-size:15px}#cap:before,#crosschain:before,#price:before{content:"usd"}#transfersin:before,#valuein:before{content:"in"}#transfersout:before,#valueout:before{content:"out"}@media (min-width:1160px){.move-stats{grid-template-areas:"global elknet" "crosschain crosschain"}.move-stats__global-stats{grid-template-areas:"blockchains cap done" "price users total"}.move-stats__global-stats>*{width:260px}.move-stats__elknet-stats>*{width:356px}}',""]),e.exports=v}}]);