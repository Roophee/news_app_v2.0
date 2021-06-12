(this.webpackJsonpstyled_news_app=this.webpackJsonpstyled_news_app||[]).push([[0],{26:function(e,n,t){"use strict";t.r(n);var r,c,a=t(1),i=t.n(a),o=t(7),s=t.n(o),l=t(2),u=t(3),d=t(4),j=t(11),b=t(0),h=["children"],p=u.c.a(r||(r=Object(l.a)(["\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(e){return e.hoverColor||"black"}));function f(e){var n=e.children,t=Object(j.a)(e,h);return Object(b.jsx)(p,Object(d.a)(Object(d.a)({},t),{},{children:n}))}var O=Object(u.c)(f)(c||(c=Object(l.a)(["\n  font-size: 2rem;\n  font-family: 'Ubuntu Mono', monospace;\n  font-weight: 700;\n  color: #c62828;\n"])));function m(){return Object(b.jsx)(O,{href:"https://roophee.github.io/news_app_v2.0/",children:Object(b.jsx)("span",{children:"The News App"})})}var x,g,y=["children"],v=u.c.div(x||(x=Object(l.a)(["\n  display: flex;\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  align-self: ",";\n  flex-wrap: ",";\n"])),(function(e){return e.directionColumn?"column":"row"}),(function(e){return e.justifyContent||"center"}),(function(e){return e.alignItems||"center"}),(function(e){return e.alignSelf}),(function(e){return e.wrap?"wrap":"nowrap"}));function w(e){var n=e.children,t=Object(j.a)(e,y);return Object(b.jsx)(v,Object(d.a)(Object(d.a)({},t),{},{children:n}))}var C,_,S,k,E,T,F=u.c.header(g||(g=Object(l.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  width: 100%;\n  height: 50px;\n  border-bottom: 2px solid #000;\n  margin-bottom: 7px;\n\n  div,\n  nav {\n    width: 33%;\n  }\n"]))),I=u.c.nav(C||(C=Object(l.a)(["\n  font-size: 0.9rem;\n  color: #c62828;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  ul {\n    display: flex;\n    list-style: none;\n\n    li {\n      font-weight: 600;\n      margin-right: 15px;\n    }\n  }\n"]))),N=t(5),R=function(e){try{if("undefined"!==typeof localStorage)return JSON.parse(localStorage.getItem(e))}catch(n){console.error(n)}return null},D=function(e,n){try{"undefined"!==typeof localStorage&&localStorage.setItem(e,JSON.stringify(n))}catch(t){console.error(t)}},A=0,z=1,q=t(18),G=u.c.input(_||(_=Object(l.a)(["\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n"]))),L=u.c.button(S||(S=Object(l.a)(["\n  color: #fff;\n  background-color: #007bff;\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n"])));function P(e){return Object(b.jsx)(L,Object(d.a)(Object(d.a)({},e),{},{children:e.children}))}var W=Object(u.c)(q.a)(k||(k=Object(l.a)(["\n  &-overlay {\n    background: rgba(0, 0, 0, 0.5);\n  }\n"]))),B=u.c.form(E||(E=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n  background: #fff;\n\n  & > div {\n    margin-bottom: 1rem;\n  }\n"]))),M=Object(u.c)(P)(T||(T=Object(l.a)(["\n  width: 100%;\n  cursor: pointer;\n"]))),U=function(e){var n=e.open,t=e.onSumbit,r=Object(a.useRef)(),c=Object(a.useCallback)((function(e){e.preventDefault();var n=e.target,c=n.email,a=n.password;c.value.length&&a.value.trim().length&&"test@test.com"===c.value&&"test"===a.value.trim()&&(t(),r.current.close())}),[t]);return Object(b.jsx)(W,{ref:r,open:n,position:"right center",children:Object(b.jsxs)(B,{onSubmit:c,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email address *"}),Object(b.jsx)(G,{required:!0,type:"email",id:"email",placeholder:"name@example.com"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password *"}),Object(b.jsx)(G,{required:!0,id:"password",type:"password"})]}),Object(b.jsx)("div",{children:Object(b.jsx)(M,{type:"submit",children:"Submit"})})]})})},H="#c62828";function K(){var e=Object(a.useState)(R("login_status")===z),n=Object(N.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),i=Object(N.a)(c,2),o=i[0],s=i[1],l=Object(a.useCallback)((function(){return s((function(e){return!e}))}),[]),u=Object(a.useCallback)((function(){r(!0),D("login_status",z)}),[]);return Object(b.jsxs)(b.Fragment,{children:[!t&&Object(b.jsxs)("li",{children:[Object(b.jsx)(f,{href:"#",hoverColor:H,onClick:l,children:"Login"}),Object(b.jsx)(U,{open:o,onSumbit:u})]}),t&&Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:H,onClick:l,children:"Wishlist"})})]})}var J="#c62828";function Y(){return Object(b.jsx)(I,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:J,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:J,children:"Contacts"})}),Object(b.jsx)("li",{children:Object(b.jsx)(K,{})})]})})}function V(){return Object(b.jsxs)(F,{children:[Object(b.jsx)("div",{}),Object(b.jsx)(w,{children:Object(b.jsx)(m,{})}),Object(b.jsx)(Y,{})]})}var X,Z=t(10),Q="Status code more then 200. It could be a connection or server error. Try submitting your request again.",$=function(e){return{articles:[{title:"Response received with an Error",published_date:"1970-01-01 00:00:00",summary:e,media:"https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=6&m=1222806141&s=612x612&w=0&h=7KXHxbzikLbq4MXqxiEPO4wbKkd6ckRVXACDCJUA908="}]}},ee=function(e){return null===e?"":e},ne=function(e){return e?e.replace(" ","T"):null},te=function(e,n){return Date.parse(ne(n.published_date))-Date.parse(ne(e.published_date))},re=function(e){return Date.parse(ne(e.published_date))<=Date.now()},ce=function(e,n){return n.rank-e.rank},ae=function(e,n){return console.log(e,n),e.rank-n.rank},ie=function(e,n){return n._score-e._score},oe=function(e,n){return e._score-n._score},se=function(e,n){return Date.parse(ne(e.published_date))-Date.parse(ne(n.published_date))},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No Image";return"https://via.placeholder.com/450x250.png/F5F5F5/d32f2f?text=".concat(e)},ue=function(e,n){if(ee(e)){var t=e.split("/");return 4===t[0].length||("favicon"===(t=t[t.length-1].split("."))[0].toLowerCase()||"ico"===t[1])?le(ee(n)):e}return le(ee(n))},de=function(e){var n=new Date;return n.setDate(n.getDate()+e),n.toLocaleDateString()},je=function(e){var n=new Date(e).toLocaleDateString();return n===de(0)?"Tooday":n===de(-1)?"Yesterday":n},be=function(e){return ee(e)&&"http"!==e.toLocaleLowerCase()&&"https"!==e.toLocaleLowerCase()?e:""},he="49eea92340msheec5dc13140a88ap1ce853jsn5615cee3407b",pe={q:"*",topic:"default",lang:"default",country:"default",page_size:75,from:""},fe="https://free-news.p.rapidapi.com/v1/search?q=*&lang=uk&country=ua&page_size=100&",Oe=function(e,n){var t,r=n.type,c=n.payload;switch(r){case"SET_KEYWORD":return Object(d.a)(Object(d.a)({},e),{},{q:(t=c,""===t.trim()?"*":t.trim())});case"SET_TOPIC":return Object(d.a)(Object(d.a)({},e),{},{topic:c});case"SET_COUNTRY":return Object(d.a)(Object(d.a)({},e),{},{country:c});case"SET_LANGUAGE":return Object(d.a)(Object(d.a)({},e),{},{lang:c});case"SET_FROM":return Object(d.a)(Object(d.a)({},e),{},{from:c});case"SET_PAGE_SIZE":return Object(d.a)(Object(d.a)({},e),{},{page_size:c});case"RESET":return Object(d.a)({},pe);default:return e}},me=i.a.createContext({setResetWasClicked:function(){},setSubmitWasClicked:function(){},setNewsInStorage:function(){},dispatch:function(){},queryState:null,newsStorage:null});function xe(e){var n=Object(a.useState)(null),t=Object(N.a)(n,2),r=t[0],c=t[1],i=Object(a.useState)(!1),o=Object(N.a)(i,2),s=o[0],l=o[1],u=Object(a.useState)(!1),d=Object(N.a)(u,2),j=d[0],h=d[1],p=Object(a.useReducer)(Oe,pe),f=Object(N.a)(p,2),O=f[0],m=f[1];window.wwwq=r,Object(a.useEffect)((function(){j&&function(){return fetch("".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe),{method:"GET",headers:{"x-rapidapi-key":"".concat(he),"x-rapidapi-host":"free-news.p.rapidapi.com"}}).then((function(e){var n=e.status;if(e.ok)return e.json();if(n>300)throw Error(Q);return null})).then((function(e){var n=e.articles||[];return n.length>0?n:[{title:"No matches for your search.",published_date:"1970-01-01 00:00:00",summary:"No matches",media:"https://via.placeholder.com/450x250.png/F5F5F5/d32f2f?text=No Matches"}]})).catch((function(e){return $(e)}))}(function(e){var n="https://free-news.p.rapidapi.com/v1/search?";return Object.entries(e).filter((function(e){return"from"!==e[0]})).map((function(e){var t=Object(N.a)(e,2),r=t[0],c=t[1];return n+=function(e,n){return!1!==n&&"default"!==n?"".concat(e,"=").concat(n,"&"):""}(r,c)})),""!==e.from?n+="from=".concat(e.from.replaceAll("-","/")):n}(O)).then((function(e){c(Object(Z.a)(e)),h(!1)}))}),[j]),Object(a.useEffect)((function(){s&&(c([]),m({type:"RESET"}),l(!1))}),[s]);var x={setResetWasClicked:l,setSubmitWasClicked:h,setNewsInStorage:c,newsStorage:r,queryState:O,dispatch:m};return Object(b.jsx)(me.Provider,{value:x,children:e.children})}var ge,ye,ve=Object(u.c)(w)(X||(X=Object(l.a)(["\n  width: 70%;\n  margin: 0 auto 10px;\n  ul,\n  li {\n    display: inline-block;\n  }\n  ul {\n    list-style: none;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 100%;\n    font-weight: 500;\n  }\n  li {\n    margin-right: 10px;\n  }\n"]))),we="#c62828";function Ce(){var e=i.a.useContext(me),n=e.queryState,t=e.dispatch,r=e.setSubmitWasClicked,c=n.lang,a=function(e,n){if(e.preventDefault(),"default"===c&&(t({type:"RESET"}),t({type:"SET_TOPIC",payload:n})),"default"!==c){var a=c;t({type:"RESET"}),t({type:"SET_LANGUAGE",payload:a}),t({type:"SET_TOPIC",payload:n})}r(!0)};return Object(b.jsx)(ve,{justifyContent:"space-between",direction:"column",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:we,onClick:function(e){return a(e,"news")},children:"General"})}),Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:we,onClick:function(e){return a(e,"economics")},children:"Economics"})}),Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:we,onClick:function(e){return a(e,"politics")},children:"Politics"})}),Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:we,onClick:function(e){return a(e,"entertainment")},children:"Entertainment"})}),Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:we,onClick:function(e){return a(e,"world")},children:"World"})}),Object(b.jsx)("li",{children:Object(b.jsx)(f,{href:"#",hoverColor:we,onClick:function(e){return a(e,"sport")},children:"Sport"})})]})})}function _e(e){var n=e.value,t=e.text;return Object(b.jsx)("option",{value:n,children:t})}function Se(e){var n=e.optionsType;return Object.entries({topicOptions:{default:"Any",business:"Business",beauty:"Beauty",entertainment:"Entertainment",economics:"Economics",finance:"Finance",food:"Food",news:"General",music:"Music",politics:"Politics",science:"Science",sport:"Sport",tech:"Technology",travel:"Travel",world:"World"},languageOptions:{default:"Any",uk:"Ukrainian",de:"German",en:"English",ru:"Russian",it:"Italian",lt:"Lithuanian",pt:"Portuguese",es:"Spanish",cn:"Chinese"},countryOptions:{default:"Any",ua:"Ukraine",us:"USA",ru:"Russia",de:"Germany",gb:"Great Britain",it:"Italy",lt:"Lithuania",pt:"Portugal",sp:"Spain",ch:"China"},sortByDateOptions:{default:"None",decrease:"First newest",increase:"First latest"},sortBySourseRate:{default:"None",decrease:"First best rate",increase:"First lowest rate"},sortByMatch:{default:"None",decrease:"Fitst best match",increase:"Fitst best match"}}[n]).map((function(e,n){var t=Object(N.a)(e,2),r=t[0],c={value:r,text:t[1]};return Object(b.jsx)(_e,Object(d.a)({},c),"".concat(n,"-").concat(r))}))}var ke,Ee,Te,Fe,Ie=Object(u.c)(w)(ge||(ge=Object(l.a)(["\n  font-size: 0.65rem;\n  align-self: flex-end;\n\n  label,\n  select,\n  button {\n    font-family: inherit;\n  }\n  button {\n    margin: 0 5px;\n    padding: 0 2px;\n    border-radius: 3px;\n  }\n"]))),Ne=Object(u.c)(P)(ye||(ye=Object(l.a)(["\n  align-self: flex-end;\n  padding: 0;\n"])));function Re(e){var n=i.a.useContext(me),t=n.queryState,r=n.dispatch,c=t.lang,a=e.panelIsOpen,o=e.setPanelIsOpen,s=e.refHandler;return Object(b.jsxs)(Ie,{className:"basicSearch__panel",alignItems:"flex-end",children:[Object(b.jsxs)(w,{directionColumn:!0,alignItems:"flex-start",children:[Object(b.jsx)("label",{htmlFor:"lang",children:"Select language: "}),Object(b.jsx)("select",{name:"language",id:"lang",value:c,onChange:function(e){var n=e.target;r({type:"SET_LANGUAGE",payload:n.value})},disabled:a,children:Object(b.jsx)(Se,{optionsType:"languageOptions"})})]}),Object(b.jsx)(Ne,{type:"button",onClick:function(e){e.preventDefault(),o((function(e){return!e})),s(),console.log(a)},children:"Advanced search"})]})}var De,Ae,ze,qe=u.c.div(ke||(ke=Object(l.a)(["\n  display: none;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  div {\n    margin: 0 5px 5px 0;\n  }\n  button,\n  select,\n  input {\n    font-family: inherit;\n    padding: 3px;\n  }\n  button[type='submit'],\n  button[type='reset'] {\n    padding: 5px;\n  }\n  input[id='from'] {\n    padding: 2px;\n  }\n"]))),Ge=Object(u.c)(w)(Ee||(Ee=Object(l.a)(["\n  flex-grow: 1;\n\n  @media screen and (max-width: 1075px) {\n    justify-content: start;\n  }\n"]))),Le=Object(u.c)(P)(Te||(Te=Object(l.a)(["\n  font-size: 0.8rem;\n  background: #4caf50;\n  border-radius: 3px;\n  width: 5vw;\n  min-width: 65px;\n  margin-right: 5px;\n"]))),Pe=Object(u.c)(Le)(Fe||(Fe=Object(l.a)(["\n  background: #f44336;\n"]))),We=i.a.forwardRef((function(e,n){var t,r=i.a.useContext(me),c=r.queryState,a=r.dispatch,o=r.setResetWasClicked,s=r.setSubmitWasClicked,l=c.q,u=c.topic,d=c.lang,j=c.country,h=c.from,p=c.page_size;return Object(b.jsxs)(qe,{wrap:!0,ref:n,children:[Object(b.jsxs)(Ge,{wrap:!0,justifyContent:"space-around",children:[Object(b.jsxs)(w,{directionColumn:!0,alignItems:"start",children:[Object(b.jsx)("label",{htmlFor:"q",children:"Keyword:"}),Object(b.jsx)("input",{type:"text",id:"q",name:"keyword",value:(t=l,"*"===t?"":t),onChange:function(e){var n=e.target;return a({type:"SET_KEYWORD",payload:n.value})}})]}),Object(b.jsxs)(w,{directionColumn:!0,alignItems:"start",children:[Object(b.jsx)("label",{htmlFor:"topic",children:"Category:"}),Object(b.jsx)("select",{name:"topic",id:"topic",value:u,onChange:function(e){var n=e.target;return a({type:"SET_TOPIC",payload:n.value})},children:Object(b.jsx)(Se,{optionsType:"topicOptions"})})]}),Object(b.jsxs)(w,{directionColumn:!0,alignItems:"start",children:[Object(b.jsx)("label",{htmlFor:"lang",children:"Language:"}),Object(b.jsx)("select",{name:"language",id:"lang",value:d,onChange:function(e){var n=e.target;return a({type:"SET_LANGUAGE",payload:n.value})},children:Object(b.jsx)(Se,{optionsType:"languageOptions"})})]}),Object(b.jsxs)(w,{directionColumn:!0,alignItems:"start",children:[Object(b.jsx)("label",{htmlFor:"country",children:"Country:"}),Object(b.jsx)("select",{name:"country",id:"country",value:j,onChange:function(e){var n=e.target;return a({type:"SET_COUNTRY",payload:n.value})},children:Object(b.jsx)(Se,{optionsType:"countryOptions"})})]}),Object(b.jsxs)(w,{directionColumn:!0,alignItems:"start",children:[Object(b.jsx)("label",{htmlFor:"from",children:"From date:"}),Object(b.jsx)("input",{type:"date",id:"from",name:"from",value:h,onChange:function(e){var n=e.target;return a({type:"SET_FROM",payload:n.value})}})]}),Object(b.jsxs)(w,{directionColumn:!0,alignItems:"start",children:[Object(b.jsx)("label",{htmlFor:"page_size",children:"News quantity:"}),Object(b.jsx)("input",{name:"page_size",id:"page_size",type:"range",min:"25",max:"100",value:p,onChange:function(e){var n=e.target;return a({type:"SET_PAGE_SIZE",payload:n.value})}})]})]}),Object(b.jsxs)(w,{alignSelf:"flex-end",children:[Object(b.jsx)(Le,{type:"submit",onClick:function(e){e.preventDefault(),s(!0)},children:"Search"}),Object(b.jsx)(Pe,{type:"reset",onClick:function(e){e.preventDefault(),o(!0)},children:"Reset"})]})]})})),Be=u.c.form(De||(De=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));function Me(e){var n=i.a.useState(!1),t=Object(N.a)(n,2),r=t[0],c=t[1],a=i.a.useRef();return Object(b.jsxs)(Be,{children:[Object(b.jsx)(Ce,{}),Object(b.jsx)(Re,{refHandler:function(){console.log(a),a&&console.log(a.current),a.current.style.display&&"none"!==a.current.style.display?a.current.style.display&&(a.current.style.display="none"):a.current.style.display="flex"},panelIsOpen:r,setPanelIsOpen:c}),Object(b.jsx)(We,{ref:a})]})}var Ue,He=Object(u.c)(w)(Ae||(Ae=Object(l.a)(["\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border-bottom: 2px solid #9e9e9e;\n  font-size: 0.93rem;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 500px) {\n    width: 50%;\n  }\n\n  @media (min-width: 1024px) {\n    width: 33%;\n  }\n\n  @media (min-width: 1224px) {\n    width: 25%;\n  }\n\n  h2 {\n    margin: 10px 0 20px 0;\n    font-family: 'Cormorant Garamond', serif;\n    font-size: 22px;\n  }\n\n  .news {\n    &__picture {\n      width: 100%;\n      height: 200px;\n      margin: 10px 10px 20px 0;\n      border: 2px solid #9e9e9e;\n    }\n    &__content {\n      width: 100%;\n      margin-bottom: 20px;\n    }\n    &__date_authors {\n      margin: 0 0 10px 0;\n      font-weight: 600;\n      color: grey;\n    }\n    &__bookmark {\n      align-self: flex-end;\n    }\n  }\n"]))),Ke=Object(u.c)(w)(ze||(ze=Object(l.a)(["\n  width: 100%;\n"]))),Je=function(){return R("login_status")===z};function Ye(e){var n,t,r=e.item,c=Je(),i=Object(a.useCallback)((function(){D("saved_articles",r)}),[]);return console.log(String(ee(r.summary)).length>50?String(ee(r.summary)).slice(0,100):ee(r.summary)),Object(b.jsxs)(He,{className:"news__item",justifyContent:"start",alignItems:"flex-start",children:[Object(b.jsx)("img",{className:"news__picture",src:ue(r.media,r.clean_url),alt:"News_photo"}),c&&Object(b.jsx)("button",{className:"news__bookmark",onClick:i,children:Object(b.jsx)("svg",{width:"25",height:"25",viewBox:"0 0 25 25",children:Object(b.jsx)("path",{d:"M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z",fillRule:"evenodd"})})}),Object(b.jsxs)("div",{className:"news__content",children:[Object(b.jsx)("h2",{children:Object(b.jsx)(f,{href:r.link,target:"_blank",children:r.title})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)(Ke,{className:"news__date_authors",justifyContent:"space-between",children:[Object(b.jsx)("div",{children:Object(b.jsxs)(w,{directionColumn:!0,alignItems:"flex-start",justifyContent:"start",children:[Object(b.jsx)("span",{children:je(ee(r.published_date))}),Object(b.jsx)("span",{children:new Date(ee(r.published_date)).toLocaleTimeString()})]})}),Object(b.jsxs)(w,{directionColumn:!0,alignSelf:"flex-end",children:[Object(b.jsx)("span",{children:be(r.author)}),Object(b.jsx)("span",{children:(n=r.author,t=r.clean_url,be(n)?ee(t)?" (".concat(t,")"):"":ee(t)?t:"")})]})]}),Object(b.jsxs)("div",{className:"news__summary",children:[ee(r.summary).length>300?ee(r.summary).slice(0,300):ee(r.summary),"..."]})]})]})]})}var Ve=u.c.div(Ue||(Ue=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n"])));var Xe,Ze,Qe=function(e){var n=e.onclickHandler;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(Ve,{children:[Object(b.jsx)("label",{htmlFor:"date"}),Object(b.jsx)("select",{name:"date",id:"date",onChange:function(e){var t=e.target;return n(t.id,t.value)},children:Object(b.jsx)(Se,{optionsType:"sortByDateOptions"})}),Object(b.jsx)("label",{htmlFor:"rate"}),Object(b.jsx)("select",{name:"rate",id:"rate",onChange:function(e){var t=e.target;return n(t.id,t.value)},children:Object(b.jsx)(Se,{optionsType:"sortBySourseRate"})}),Object(b.jsx)("label",{htmlFor:"match"}),Object(b.jsx)("select",{name:"match",id:"match",onChange:function(e){var t=e.target;return n(t.id,t.value)},children:Object(b.jsx)(Se,{optionsType:"sortByMatch"})})]})})},$e=u.c.div(Xe||(Xe=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: 10px auto 0;\n\n  h3 {\n    margin: 150px auto;\n  }\n"])));function en(){var e,n=Object(a.useContext)(me),t=n.setNewsInStorage,r=n.newsStorage;Je(),R("saved_articles");return Object(b.jsxs)($e,{children:[!r&&Object(b.jsx)("h3",{children:"Select filters and search for news"}),r&&Object(b.jsx)(Qe,{onclickHandler:function(e,n){r.sort(function(e){var n=e.key,t=e.value;switch(n){case"date":return"decrease"===t?te:se;case"rate":return"decrease"===t?ce:ae;case"match":return"decrease"===t?ie:oe}}({key:e,value:n})),t(Object(Z.a)(r))}}),r&&(e=r,e.sort(te).filter(re)).map((function(e){return Object(b.jsx)(Ye,{item:e},e._id)}))]})}var nn,tn,rn,cn,an,on=u.c.main(Ze||(Ze=Object(l.a)(["\n  width: 90%;\n  min-height: 700px;\n  display: flex;\n  flex-direction: column;\n"])));function sn(){return Object(b.jsxs)(on,{children:[Object(b.jsx)(Me,{}),Object(b.jsx)(en,{})]})}var ln,un=u.c.footer(nn||(nn=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  flex-grow: 0;\n  font-weight: 500;\n  border-top: 2px solid #000;\n"]))),dn=(Object(u.c)(w)(tn||(tn=Object(l.a)(["\n  width: 80%;\n"]))),Object(u.d)(rn||(rn=Object(l.a)(["\n    from{\n      color: #c62828\n    }\n  65%{\n    color: #00C853; \n  }\n    to {\n      color: #c62828;\n    }\n"])))),jn=Object(u.b)(cn||(cn=Object(l.a)(["\n  animation: "," 10s ease-in infinite;\n"])),dn),bn=Object(u.c)(f)(an||(an=Object(l.a)(["\n  color: #c62828;\n  font-weight: 600;\n  ","\n"])),(function(e){return e.animation?jn:""}));function hn(){return Object(b.jsxs)(un,{children:[Object(b.jsx)(w,{children:Object(b.jsxs)("span",{children:["\xa0\xa0Powered by",Object(b.jsx)(bn,{href:"https://newscatcherapi.com/",children:"\u3008/newscatcher\u3009"})]})}),Object(b.jsx)("span",{}),Object(b.jsx)(w,{children:Object(b.jsxs)("span",{children:["Module task in"," ",Object(b.jsx)(bn,{animation:!0,href:"https://kottans.org",children:"Kottans"})]})})]})}var pn=Object(u.a)(ln||(ln=Object(l.a)(["\n:root {\n  font-family: 'Cormorant Garamond', serif;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 300;\n  font-size: 18px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #EEEEEE;\n}\n\n.App {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n"])));var fn=function(){return Object(a.useEffect)((function(){R("login_status")||D("login_status",A)}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(pn,{}),Object(b.jsx)(V,{}),Object(b.jsx)(xe,{children:Object(b.jsx)(sn,{})}),Object(b.jsx)(hn,{})]})};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(fn,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a7502add.chunk.js.map