(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-light-blue-6",attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"fas fa-bars"}})],1),a("q-toolbar-title",[t._v("\n                "+t._s(t.getName?t.getName:"Тимуровцы")+"\n            ")])],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2",height:"100%"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[t._v("Тобольск")]),a("router-link",{attrs:{tag:"span",to:"/"}},[a("q-item",{attrs:{tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"light-blue-6",name:"far fa-newspaper"}})],1),a("q-item-section",[a("q-item-label",[t._v("Новости")])],1)],1)],1),a("router-link",{attrs:{tag:"span",to:"/volonters"}},[a("q-item",{attrs:{tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"light-blue-6",name:"fas fa-users"}})],1),a("q-item-section",[a("q-item-label",[t._v("Волонтёры")])],1)],1)],1),a("router-link",{attrs:{tag:"span",to:"/help"}},[a("q-item",{attrs:{tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"light-blue-6",name:"fas fa-rss"}})],1),a("q-item-section",[a("q-item-label",[t._v("Мне нужна помощь")])],1)],1)],1),a("router-link",{attrs:{tag:"span",to:t.getName?"/profile":"/sigin"}},[a("q-item",{attrs:{tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"light-blue-6",name:"far fa-hand-paper"}})],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.getName?"Профиль":"Я хочу помочь"))])],1)],1)],1),a("router-link",{attrs:{tag:"span",to:"/support"}},[a("q-item",{attrs:{tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"light-blue-6",name:"far fa-thumbs-up"}})],1),a("q-item-section",[a("q-item-label",[t._v("Поддержка")])],1)],1)],1),a("router-link",{attrs:{tag:"span",to:"/Draft"}},[a("q-item",{attrs:{tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"light-blue-6",name:"far fa-thumbs-up"}})],1),a("q-item-section",[a("q-item-label",[t._v("Черновик")])],1)],1)],1)],1)],1),a("q-page-container",[a("router-view")],1),a("q-dialog",{attrs:{seamless:"",position:"top"},model:{value:t.dialog.to,callback:function(e){t.$set(t.dialog,"to",e)},expression:"dialog.to"}},[a("q-card",{staticClass:"text-center text-white",class:t.dialog.color?"bg-positive":"bg-negative"},[a("q-card-section",{staticClass:"row items-center"},[t._v("\n                "+t._s(t.dialog.msg)+"\n                "),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}})],1)],1)],1)],1)},o=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),i=a.n(n),s=a("0967"),l=a("2b0e"),c=function(t,e){var a=window.open;if(!0===s["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==l["a"].prototype.$q.electron)return l["a"].prototype.$q.electron.shell.openExternal(t);var r=a(t,"_blank");if(r)return r.focus(),r;e&&e()},p=a("2f62");function u(t){for(var e=1;e<arguments.length;e++)if(e%2){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),r.forEach(function(e){i()(t,e,a[e])})}else Object.defineProperties(t,Object.getOwnPropertyDescriptors(arguments[e]));return t}var f={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:u({openURL:c},Object(p["b"])(["greeting"])),mounted:function(){this.greeting()},computed:Object(p["c"])(["dialog","getName"])},m=f,g=a("2877"),d=Object(g["a"])(m,r,o,!1,null,null,null);e["default"]=d.exports}}]);