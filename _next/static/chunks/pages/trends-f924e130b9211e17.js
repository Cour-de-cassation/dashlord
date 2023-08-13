(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return A}});var l=t(85893),u=t(9008),d=t.n(u),r=t(67294),s=t(45697),v=t.n(s);function T(){return T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},T.apply(this,arguments)}function Z(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=(0,r.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,s=Z(e,["color","size"]);return r.createElement("svg",T({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),r.createElement("polyline",{points:"17 6 23 6 23 12"}))}));o.propTypes={color:v().string,size:v().oneOfType([v().string,v().number])},o.displayName="TrendingUp";var n=o;function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var h=(0,r.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,s=c(e,["color","size"]);return r.createElement("svg",i({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),r.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:v().string,size:v().oneOfType([v().string,v().number])},h.displayName="TrendingDown";var p=h,g=t(74041),f=t(18121),_=t(49384),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},b=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=m[e],l=a[0],u=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(u)-(0,_.BE)(l):t.reverse?l-u:u-l}(e.key,e.values)>0?(0,l.jsx)(n,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],G=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var u=l[0],d=l[l.length-1],r=m[t].treshold;(!r||Math.abs(u-d)>(r||0))&&u!==d&&(a[t]=[u,d])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:b,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-11-26T20:06:57.000Z","value":6}],"httpGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A+"}],"nmapGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-26T20:06:57.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"dependabotGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"D"}],"dependabotCount":[{"date":"2021-11-26T20:06:57.000Z","value":6}],"testsslExpireSoon":[{"date":"2021-11-26T20:06:57.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-26T20:06:57.000Z","value":"2021-12-26T11:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-26T20:06:57.000Z","value":2}],"trackersGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-26T20:06:57.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-26T20:06:57.000Z","value":0.45}],"lighthouse_performanceGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-11-26T20:06:57.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-26T20:06:57.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-26T20:06:57.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-26T20:06:57.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"D"}]},"https://beta.gouv.fr":{"404":[{"date":"2021-11-26T20:06:57.000Z","value":2}],"httpGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"D"}],"nmapGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-26T20:06:57.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-26T20:06:57.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-26T20:06:57.000Z","value":"2022-01-23T13:00:00.000Z"}],"testsslGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-26T20:06:57.000Z","value":2}],"trackersGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"C"}],"trackersCount":[{"date":"2021-11-26T20:06:57.000Z","value":6}],"lighthouse_performance":[{"date":"2021-11-26T20:06:57.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-26T20:06:57.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-26T20:06:57.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-26T20:06:57.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-26T20:06:57.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-11-26T20:06:57.000Z","value":"B"}]},"https://search.judilibre.io":{"404":[{"date":"2022-01-16T00:54:38.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"}],"nmapGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T02:23:04.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-27T02:23:04.000Z","value":false},{"date":"2022-01-02T00:54:28.000Z","value":true},{"date":"2022-01-30T00:51:20.000Z","value":false},{"date":"2022-03-27T01:05:42.000Z","value":true},{"date":"2022-04-17T01:22:34.000Z","value":false},{"date":"2022-06-19T01:27:45.000Z","value":true},{"date":"2022-07-10T01:32:50.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T02:23:04.000Z","value":"2022-01-27T02:08:00.000Z"},{"date":"2022-01-30T00:51:20.000Z","value":"2022-04-25T18:52:00.000Z"},{"date":"2022-04-17T01:22:34.000Z","value":"2022-07-12T14:19:00.000Z"},{"date":"2022-07-10T01:32:50.000Z","value":"2022-10-07T17:13:00.000Z"},{"date":"2022-09-11T01:40:50.000Z","value":"2022-12-06T16:13:00.000Z"},{"date":"2022-11-13T04:09:37.000Z","value":"2023-02-04T15:14:00.000Z"},{"date":"2023-01-08T06:57:05.000Z","value":"2023-04-05T14:14:00.000Z"},{"date":"2023-03-12T06:58:05.000Z","value":"2023-06-04T13:15:00.000Z"},{"date":"2023-04-30T05:27:35.000Z","value":"2023-07-26T23:47:00.000Z"},{"date":"2023-05-07T05:37:06.000Z","value":"2023-08-03T12:15:00.000Z"},{"date":"2023-07-09T05:32:28.000Z","value":"2023-10-02T11:16:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T02:23:04.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-27T02:23:04.000Z","value":0}],"declaration-a11y":[],"declaration-rgpd":[]},"https://stats.judilibre.io":{"404":[{"date":"2022-01-16T00:54:38.000Z","value":"A+"}],"httpGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"D+"},{"date":"2021-11-28T00:52:12.000Z","value":"C-"},{"date":"2022-10-23T04:34:18.000Z","value":"D+"}],"nmapGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T02:23:04.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-27T02:23:04.000Z","value":false},{"date":"2022-10-16T04:53:38.000Z","value":true},{"date":"2022-10-23T04:34:18.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T02:23:04.000Z","value":"2022-01-18T09:09:00.000Z"},{"date":"2021-12-26T00:52:28.000Z","value":"2022-03-19T08:30:00.000Z"},{"date":"2022-02-20T01:00:08.000Z","value":"2022-05-18T08:23:00.000Z"},{"date":"2022-04-24T01:19:10.000Z","value":"2022-07-17T08:00:00.000Z"},{"date":"2022-06-19T01:27:45.000Z","value":"2022-09-15T07:53:00.000Z"},{"date":"2022-08-21T01:28:19.000Z","value":"2022-11-14T07:46:00.000Z"},{"date":"2022-10-23T04:34:18.000Z","value":"2023-01-14T19:47:00.000Z"},{"date":"2022-12-18T06:50:38.000Z","value":"2023-03-15T21:29:00.000Z"},{"date":"2023-02-19T05:04:34.000Z","value":"2023-05-14T20:43:00.000Z"},{"date":"2023-04-16T06:52:47.000Z","value":"2023-07-13T21:50:00.000Z"},{"date":"2023-06-18T06:15:14.000Z","value":"2023-09-11T22:08:00.000Z"},{"date":"2023-08-13T04:57:03.028Z","value":"2023-11-10T23:30:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"cookiesCount":[{"date":"2021-11-27T02:23:04.000Z","value":0}],"trackersGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"F"}],"trackersCount":[{"date":"2021-11-27T02:23:04.000Z","value":17}],"lighthouse_performance":[{"date":"2021-11-27T02:23:04.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T02:23:04.000Z","value":1}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T02:23:04.000Z","value":1},{"date":"2021-11-27T09:24:06.000Z","value":0.87},{"date":"2021-11-28T00:52:12.000Z","value":0.93},{"date":"2023-02-19T05:04:34.000Z","value":0.87},{"date":"2023-02-26T05:21:56.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T02:23:04.000Z","value":0.92},{"date":"2021-11-27T09:24:06.000Z","value":0.85},{"date":"2021-11-28T00:52:12.000Z","value":0.77},{"date":"2021-12-12T00:49:23.000Z","value":0.85},{"date":"2021-12-19T00:53:05.000Z","value":0.77},{"date":"2022-01-02T00:54:28.000Z","value":0.85},{"date":"2022-05-29T01:19:46.000Z","value":0.77},{"date":"2022-06-12T01:24:57.000Z","value":0.85},{"date":"2022-09-25T01:40:20.000Z","value":0.77},{"date":"2022-10-02T04:39:41.000Z","value":0.85},{"date":"2022-10-23T04:34:18.000Z","value":0.77},{"date":"2022-11-06T03:32:59.000Z","value":0.85},{"date":"2022-12-18T06:50:38.000Z","value":0.77},{"date":"2023-01-01T04:05:42.000Z","value":0.85},{"date":"2023-06-04T05:29:38.000Z","value":0.77},{"date":"2023-06-11T05:34:47.000Z","value":0.85}],"lighthouse_seoGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"},{"date":"2021-11-28T00:52:12.000Z","value":"B"},{"date":"2021-12-12T00:49:23.000Z","value":"A"},{"date":"2021-12-19T00:53:05.000Z","value":"B"},{"date":"2022-01-02T00:54:28.000Z","value":"A"},{"date":"2022-05-29T01:19:46.000Z","value":"B"},{"date":"2022-06-12T01:24:57.000Z","value":"A"},{"date":"2022-09-25T01:40:20.000Z","value":"B"},{"date":"2022-10-02T04:39:41.000Z","value":"A"},{"date":"2022-10-23T04:34:18.000Z","value":"B"},{"date":"2022-11-06T03:32:59.000Z","value":"A"},{"date":"2022-12-18T06:50:38.000Z","value":"B"},{"date":"2023-01-01T04:05:42.000Z","value":"A"},{"date":"2023-06-04T05:29:38.000Z","value":"B"},{"date":"2023-06-11T05:34:47.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T02:23:04.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"D"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://piste.gouv.fr":{"404":[{"date":"2021-11-27T02:23:04.000Z","value":7}],"httpGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B+"}],"nmapGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-11-27T02:23:04.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-11-27T02:23:04.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T02:23:04.000Z","value":"2022-08-17T18:11:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"}],"cookiesCount":[{"date":"2021-11-27T02:23:04.000Z","value":1}],"trackersGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"trackersCount":[{"date":"2021-11-27T02:23:04.000Z","value":0}],"lighthouse_performance":[{"date":"2021-11-27T02:23:04.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-11-27T02:23:04.000Z","value":0.82}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2021-11-27T02:23:04.000Z","value":0.8}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"}],"lighthouse_seo":[{"date":"2021-11-27T02:23:04.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T02:23:04.000Z","value":0.33}],"lighthouse_pwaGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"E"}]},"https://www.justice.fr":{"404":[{"date":"2022-01-16T00:54:38.000Z","value":"A+"},{"date":"2022-10-02T04:39:41.000Z","value":23},{"date":"2022-10-09T04:25:58.000Z","value":26},{"date":"2022-11-20T03:08:28.000Z","value":23},{"date":"2022-12-11T04:06:30.000Z","value":25},{"date":"2022-12-25T04:24:59.000Z","value":26},{"date":"2023-01-01T04:05:42.000Z","value":25},{"date":"2023-02-05T05:19:12.000Z","value":26},{"date":"2023-02-12T03:59:41.000Z","value":28},{"date":"2023-04-23T04:49:54.000Z","value":29},{"date":"2023-04-30T05:27:35.000Z","value":32},{"date":"2023-05-28T05:31:26.000Z","value":33},{"date":"2023-06-25T05:39:10.000Z","value":32},{"date":"2023-07-02T05:43:47.000Z","value":35},{"date":"2023-08-06T05:49:17.000Z","value":36}],"httpGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"C+"},{"date":"2022-12-25T04:24:59.000Z","value":"F"},{"date":"2023-01-01T04:05:42.000Z","value":"C+"}],"nmapGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"},{"date":"2023-07-30T06:30:48.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2021-11-27T02:23:04.000Z","value":2},{"date":"2023-07-30T06:30:48.000Z","value":3}],"nmapOpenPortsGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"},{"date":"2023-07-30T06:30:48.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2021-11-27T02:23:04.000Z","value":false},{"date":"2022-02-13T00:57:36.000Z","value":true},{"date":"2022-03-13T00:56:49.000Z","value":false},{"date":"2023-02-12T03:59:41.000Z","value":true},{"date":"2023-03-26T05:44:32.000Z","value":false}],"testsslExpireDate":[{"date":"2021-11-27T02:23:04.000Z","value":"2022-03-10T22:59:00.000Z"},{"date":"2022-03-13T00:56:49.000Z","value":"2023-03-10T22:59:00.000Z"},{"date":"2023-03-26T05:44:32.000Z","value":"2024-03-06T22:59:00.000Z"}],"testsslGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"},{"date":"2023-02-05T05:19:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"C"},{"date":"2022-12-25T04:24:59.000Z","value":"A"},{"date":"2023-01-01T04:05:42.000Z","value":"C"}],"cookiesCount":[{"date":"2021-11-27T02:23:04.000Z","value":4},{"date":"2022-12-25T04:24:59.000Z","value":0},{"date":"2023-01-01T04:05:42.000Z","value":4},{"date":"2023-06-04T05:29:38.000Z","value":3}],"trackersGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"C"},{"date":"2022-12-25T04:24:59.000Z","value":"A"},{"date":"2023-01-01T04:05:42.000Z","value":"C"},{"date":"2023-06-04T05:29:38.000Z","value":"B"}],"trackersCount":[{"date":"2021-11-27T02:23:04.000Z","value":4},{"date":"2021-11-27T09:10:58.000Z","value":3},{"date":"2021-11-28T00:52:12.000Z","value":4},{"date":"2021-12-19T00:53:05.000Z","value":3},{"date":"2022-01-23T00:52:18.000Z","value":4},{"date":"2022-02-13T00:57:36.000Z","value":3},{"date":"2022-02-20T01:00:08.000Z","value":4},{"date":"2022-02-27T00:58:37.000Z","value":3},{"date":"2022-03-27T01:05:42.000Z","value":4},{"date":"2022-04-03T01:06:49.000Z","value":3},{"date":"2022-04-17T01:22:34.000Z","value":4},{"date":"2022-04-24T01:19:10.000Z","value":3},{"date":"2022-05-08T01:25:53.000Z","value":4},{"date":"2022-05-22T01:26:10.000Z","value":3},{"date":"2022-05-29T01:19:46.000Z","value":4},{"date":"2022-06-19T01:27:45.000Z","value":3},{"date":"2022-11-13T04:09:37.000Z","value":4},{"date":"2022-11-20T03:08:28.000Z","value":3},{"date":"2022-11-27T06:23:38.000Z","value":4},{"date":"2022-12-04T03:35:27.000Z","value":3},{"date":"2022-12-11T04:06:30.000Z","value":4},{"date":"2022-12-25T04:24:59.000Z","value":0},{"date":"2023-01-01T04:05:42.000Z","value":4},{"date":"2023-02-12T03:59:41.000Z","value":3},{"date":"2023-04-23T04:49:54.000Z","value":4},{"date":"2023-04-30T05:27:35.000Z","value":3},{"date":"2023-05-14T05:43:57.000Z","value":4},{"date":"2023-05-21T05:02:50.000Z","value":3},{"date":"2023-06-04T05:29:38.000Z","value":1}],"lighthouse_performance":[{"date":"2021-11-27T02:23:04.000Z","value":1},{"date":"2022-01-23T00:52:18.000Z","value":0.9984861373901367},{"date":"2022-01-30T00:51:20.000Z","value":0.9984859466552735},{"date":"2022-02-13T00:57:36.000Z","value":0.998486328125},{"date":"2022-02-20T01:00:08.000Z","value":0.9983406066894531},{"date":"2022-02-27T00:58:37.000Z","value":0.9984857559204101},{"date":"2022-03-06T01:00:02.000Z","value":0.9984861373901367},{"date":"2022-03-13T00:56:49.000Z","value":0.9983367919921875},{"date":"2022-03-20T00:58:49.000Z","value":0.9984846115112305},{"date":"2022-03-27T01:05:42.000Z","value":0.9983377456665039},{"date":"2022-04-03T01:06:49.000Z","value":0.9984853744506836},{"date":"2022-04-10T01:06:32.000Z","value":0.9984851837158203},{"date":"2022-04-17T01:22:34.000Z","value":0.99833984375},{"date":"2022-04-24T01:19:10.000Z","value":0.9983333587646485},{"date":"2022-05-01T01:35:29.000Z","value":0.9983314514160156},{"date":"2022-05-08T01:25:53.000Z","value":0.9983325958251953},{"date":"2022-05-15T01:43:50.000Z","value":0.9148193359375},{"date":"2022-05-22T01:26:10.000Z","value":0.9146738052368164},{"date":"2022-05-29T01:19:46.000Z","value":0.9146804809570312},{"date":"2022-06-05T01:29:55.000Z","value":0.9148256301879882},{"date":"2022-06-12T01:24:57.000Z","value":0.9146820068359375},{"date":"2022-06-19T01:27:45.000Z","value":0.914678955078125},{"date":"2022-06-26T01:27:23.000Z","value":0.9148248672485352},{"date":"2022-07-03T01:20:59.000Z","value":0.9654087066650391},{"date":"2022-07-10T01:32:50.000Z","value":0.9652652740478516},{"date":"2022-07-17T01:36:35.000Z","value":0.9654087066650391},{"date":"2022-07-24T01:29:50.000Z","value":0.9652576446533203},{"date":"2022-08-07T01:38:54.000Z","value":1},{"date":"2023-04-30T05:27:35.000Z","value":0.7504684448242187},{"date":"2023-05-07T05:37:06.000Z","value":0.750324821472168},{"date":"2023-05-14T05:43:57.000Z","value":0.7503240585327149},{"date":"2023-05-21T05:02:50.000Z","value":0.6493043899536133},{"date":"2023-05-28T05:31:26.000Z","value":0.6493030548095703},{"date":"2023-06-04T05:29:38.000Z","value":0.6626487731933594},{"date":"2023-06-11T05:34:47.000Z","value":0.6626482009887695},{"date":"2023-06-18T06:15:14.000Z","value":0.6626485824584961},{"date":"2023-06-25T05:39:10.000Z","value":0.6626489639282227},{"date":"2023-07-02T05:43:47.000Z","value":0.6626472473144531},{"date":"2023-07-09T05:32:28.000Z","value":0.6626491546630859},{"date":"2023-07-16T05:50:06.000Z","value":0.6626485824584961},{"date":"2023-07-23T05:00:44.000Z","value":0.6625335693359375},{"date":"2023-07-30T06:30:48.000Z","value":0.6625343322753906},{"date":"2023-08-13T04:57:03.028Z","value":0.662533950805664}],"lighthouse_performanceGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"},{"date":"2023-04-30T05:27:35.000Z","value":"B"},{"date":"2023-05-21T05:02:50.000Z","value":"C"}],"lighthouse_accessibility":[{"date":"2021-11-27T02:23:04.000Z","value":0.81},{"date":"2022-12-25T04:24:59.000Z","value":0.78},{"date":"2023-01-01T04:05:42.000Z","value":0.81},{"date":"2023-04-30T05:27:35.000Z","value":0.94}],"lighthouse_accessibilityGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"},{"date":"2023-04-30T05:27:35.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-11-27T02:23:04.000Z","value":0.73},{"date":"2022-05-08T01:25:53.000Z","value":0.8},{"date":"2022-12-25T04:24:59.000Z","value":0.93},{"date":"2023-01-01T04:05:42.000Z","value":0.8},{"date":"2023-06-04T05:29:38.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"B"},{"date":"2022-12-25T04:24:59.000Z","value":"A"},{"date":"2023-01-01T04:05:42.000Z","value":"B"},{"date":"2023-06-04T05:29:38.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-11-27T02:23:04.000Z","value":0.87},{"date":"2022-02-20T01:00:08.000Z","value":0.88},{"date":"2022-02-27T00:58:37.000Z","value":0.87},{"date":"2022-03-06T01:00:02.000Z","value":0.88},{"date":"2022-03-20T00:58:49.000Z","value":0.87},{"date":"2022-04-03T01:06:49.000Z","value":0.88},{"date":"2022-04-10T01:06:32.000Z","value":0.87},{"date":"2022-04-17T01:22:34.000Z","value":0.88},{"date":"2022-04-24T01:19:10.000Z","value":0.87},{"date":"2022-12-25T04:24:59.000Z","value":0.54},{"date":"2023-01-01T04:05:42.000Z","value":0.87},{"date":"2023-04-30T05:27:35.000Z","value":0.99}],"lighthouse_seoGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"A"},{"date":"2022-12-25T04:24:59.000Z","value":"C"},{"date":"2023-01-01T04:05:42.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-11-27T02:23:04.000Z","value":0.42},{"date":"2022-12-25T04:24:59.000Z","value":0.17},{"date":"2023-01-01T04:05:42.000Z","value":0.42},{"date":"2023-04-30T05:27:35.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-11-27T02:23:04.000Z","value":"D"},{"date":"2022-12-25T04:24:59.000Z","value":"E"},{"date":"2023-01-01T04:05:42.000Z","value":"D"},{"date":"2023-04-30T05:27:35.000Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),A=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,l.jsx)(G,{trends:y})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return i}});var l=t(85893),u=(t(67294),t(94184)),d=t.n(u),r=t(659),s=t(73973),v=t(83206),T=t(41664),Z=t.n(T),o=t(75670),n=t.n(o),i=function(e){var a=e.title,t=e.children,u=e.info,T=e.url,o=e.urlText,i=void 0===o?"":o,c=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:d()(n().container,c),children:[(0,l.jsxs)("div",{className:n().banner,children:[(0,l.jsx)("h5",{className:n().mainTitle,children:a}),u&&(0,l.jsx)(r.Z,{overlay:u,children:(0,l.jsx)(s.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),T&&(p?(0,l.jsx)("a",{style:{float:"right"},href:T,target:"_blank",rel:"noreferrer noopener",children:i}):(0,l.jsx)(Z(),{prefetch:!1,href:T,children:(0,l.jsxs)("a",{style:{float:"right"},children:[i,(0,l.jsx)(v.Z,{})]})}))]}),(0,l.jsx)("div",{className:n().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);