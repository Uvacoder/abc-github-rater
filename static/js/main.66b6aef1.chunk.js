(this["webpackJsonpgithub-rater"]=this["webpackJsonpgithub-rater"]||[]).push([[0],{66:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var s=r(3),a=r(18),i=r(15),n=r.n(i),o=r(9),c=r(31),u=r(14),l=r(11),h=r(1),d=function(){var e=Object(s.useRef)(),t=localStorage.getItem("theme")||"light",r=Object(s.useState)("light"),a=Object(u.a)(r,2),i=a[0],n=a[1];Object(s.useEffect)((function(){n(t)}),[t]),Object(s.useEffect)((function(){document.documentElement.setAttribute("data-theme",i),"dark"===i?e.current.style.transform="translate(210%)":"light"===i&&(e.current.style.transform="translate(40%)")}),[i]);var o=function(){"dark"===i?(localStorage.setItem("theme","light"),n("light")):"light"===i&&(localStorage.setItem("theme","dark"),n("dark"))};return Object(h.jsxs)("div",{className:"theme-toggler",children:[Object(h.jsx)("div",{className:"picker",ref:e}),Object(h.jsx)(l.c,{size:20,className:"icon",onClick:o}),Object(h.jsx)(l.b,{size:20,className:"icon",onClick:o})]})},p=function(){return Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsxs)("a",{href:"https://aykutsarac.github.io/github-rater",className:"logo",children:[Object(h.jsx)(c.a,{className:"icon",size:28})," GitHub Rater"]}),Object(h.jsx)(d,{})]})},b=function(e){return e.userState},j=function(e){return Object(h.jsx)("div",{className:"alert",children:e.children})},g=r.p+"static/media/404.04bf1677.svg",f=function(){return Object(h.jsx)("div",{className:"notfound",children:Object(h.jsx)("img",{width:"300",height:"auto",src:g,alt:"not found"})})},m=function(){return Object(h.jsx)("div",{className:"default",children:Object(h.jsxs)("div",{className:"default-wrapper",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"header",children:"What Is GitHub Rater"}),"GitHub Rater, rates your GitHub profile upon data received from ",Object(h.jsx)("a",{href:"https://docs.github.com/en/rest",target:"_blank",rel:"noreferrer",children:"GitHub API"})," with our own algorithm."]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"header",children:"How Do We Calculate"}),"Learn more about ",Object(h.jsx)("a",{href:"https://github.com/AykutSarac/github-rater#how-it-calculates",target:"_blank",rel:"noreferrer",children:"our algorithm used at GitHub Rater"}),"."]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"header",children:"Help Us Improving Accuracy"}),"We're doing our best to write the best algorithm in order to accurately rate your GitHub profile. We appreciate your contributions, see our ",Object(h.jsx)("a",{href:"https://github.com/AykutSarac/github-rater",target:"_blank",rel:"noreferrer",children:"GitHub repository"})," here to learn how you can help us."]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:"header",children:"Check GitHub Repository"}),"Check out ",Object(h.jsx)("a",{href:"https://github.com/AykutSarac/github-rater",target:"_blank",rel:"noreferrer",children:"GitHub Rater's Repository"})," at GitHub!"]})]})})},v=function(){return Object(h.jsx)("progress",{className:"loading"})},x=r(12),y=function(){var e=Object(o.c)(b),t=e.rating,r=e.starred,s=e.user,a=function(e){if(r){var t=e.target.closest(".expand").children[1];t&&t.classList.toggle("show")}};return Object(h.jsxs)("div",{className:"opportunities",children:[Object(h.jsx)("h4",{children:"Opportunities"}),!r&&Object(h.jsx)("div",{className:"block-message",children:Object(h.jsxs)("h3",{children:[s&&s.login," should star ",Object(h.jsx)("a",{href:"https://github.com/aykutsarac/github-rater",target:"_blank",rel:"noreferrer",children:"GitHub Rater's repository at GitHub"})," to view opportunities that can improve GitHub rating efficiently!"]})}),Object(h.jsxs)("div",{className:"opportunity".concat(!r&&" blocked"),children:[Object(h.jsx)("span",{className:"header",children:"Opportunity"}),Object(h.jsx)("ul",{children:t&&t.filter((function(e){return e.Score<90})).map((function(e,t){return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"expand",onClick:a,children:[(s=e.Score,s>=90?Object(h.jsx)(l.a,{size:13,className:"success"}):s>=50?Object(h.jsx)(x.a,{size:14,className:"warning"}):Object(h.jsx)(x.b,{size:15,className:"danger"}))," ",e.Name,r&&Object(h.jsx)("div",{className:"data",children:e.Message})]})},t);var s}))})]})]})},O=function(e){var t=e.results;return Object(h.jsxs)("div",{className:"lab-results",children:[Object(h.jsxs)("div",{className:"labdata",children:[Object(h.jsxs)("div",{className:"metric-container",children:[Object(h.jsx)("h4",{children:"Lab Results"}),Object(h.jsx)("div",{className:"metric-grid"}),t.map((function(e,t){return Object(h.jsxs)("div",{className:"metric-wrapper",children:[Object(h.jsxs)("span",{className:"metric-title",children:[(s=e.Score,s>=90?Object(h.jsx)(l.a,{size:13,className:"success"}):s>=50?Object(h.jsx)(x.a,{size:14,className:"warning"}):Object(h.jsx)(x.b,{size:15,className:"danger"}))," ",e.Name]}),Object(h.jsx)("span",{className:"metric-result ".concat((r=e.Score,r>=90?"success":r>=50?"warning":"danger")),children:e.Score})]},t);var r,s}))]}),Object(h.jsxs)("div",{className:"muted results-info",children:["Values are estimated and may vary. The ",Object(h.jsx)("a",{href:"https://github.com/AykutSarac/github-rater#how-it-calculates",children:"rating score is calculated"})," directly ",Object(h.jsx)("br",{})," from these metrics."]})]}),Object(h.jsx)(y,{})]})},k=function(e){var t=e.percentage,r=void 0===t?0:t,a=e.title,i=Object(s.useState)("#0cce6b"),n=Object(u.a)(i,2),o=n[0],c=n[1];return Object(s.useEffect)((function(){return c(r>=90?"#0cce6b":r>=50?"#ffa400":"#ff4e42")}),[r]),Object(h.jsxs)("div",{className:"progressbar",children:[Object(h.jsxs)("div",{className:"percent",children:[Object(h.jsxs)("svg",{children:[Object(h.jsx)("circle",{cx:"60",cy:"60",r:"60"}),Object(h.jsx)("circle",{cx:"60",cy:"60",r:"60",style:{strokeDashoffset:"".concat(377-377*r/100),stroke:"".concat(o),fill:"".concat(o)}})]}),Object(h.jsx)("div",{className:"number",children:Object(h.jsx)("span",{style:{color:o},children:r})})]}),Object(h.jsx)("h2",{className:"title",children:a}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(x.b,{size:15,className:"danger"})," 0-49"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(x.a,{size:15,className:"warning"})," 50-89"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(l.a,{size:13,className:"success"})," 90-100"]})]})]})},N=function(e){var t,r=e.results,s=(t=r.map((function(e){return e.Score})).reduce((function(e,t){return e+t}))/6*1.12,parseInt(t.toFixed(0))),a=s>100?100:s;return Object(h.jsxs)("div",{className:"show-results",children:[Object(h.jsx)(k,{percentage:a,title:"Overall Score"}),Object(h.jsx)(O,{results:r})]})},w=function(){var e=Object(o.c)(b),t=e.user,r=e.error,a=e.loading,i=e.rating,n=Object(s.useState)([]),c=Object(u.a)(n,2),l=c[0],d=c[1];return Object(s.useEffect)((function(){d(i)}),[i]),Object(h.jsxs)("section",{id:"results",children:[(null===t||void 0===t?void 0:t.login)?Object(h.jsxs)(j,{children:["Results for user: ",Object(h.jsx)("a",{href:t.html_url,target:"_blank",rel:"noreferrer",className:"highlight",children:t.login})]}):r&&Object(h.jsx)(j,{children:r}),Object(h.jsxs)("div",{className:"results-wrapper",children:[a&&Object(h.jsx)(v,{}),l.length>0?Object(h.jsx)(N,{results:l}):r&&Object(h.jsx)(f,{}),Object(h.jsx)(m,{})]})]})},S=r(13),R=r.n(S),E=r(17),G=r(32),H=r(33),I=function(e,t){return[{Name:"User Popularity",Message:"Typically, GitHub isn\u2019t primary place decision-makers look to fill roles in programming. Rather, it\u2019s a handy tool for fine-matching skills and verifying that a candidate possesses them. If you\u2019re using GitHub for advancement, you will want to present your projects and account activity in a way that\u2019s clear and accessible.",Score:e.userPopularity},{Name:"Repository Description",Message:"You should provide brief description about your repository.\n\nNobody should spend their time going straight into the code and trying to understand what is the purpose from there. Instead, make sure that every repository you work on has the description field filled in. At the description part and the README file you want to talk about the features you wrote into the project. Demonstrate business acumen by articulating your role in the Git in one or two sentences that capture how you helped along the project. Think of Description as the headline, on which you\u2019ll elaborate further in the ReadMe. ".concat(t.repoSuggestions.length>0?"\n\n\u2022 "+t.repoSuggestions.join("\n\u2022 "):""),Score:e.repoDescriptionRating},{Name:"Biography",Message:"It is suggested to have a proper biography with at least 5 words - past and present employers, projects you have worked on, or languages and frameworks you enjoy using, or are currently learning. Include the type of company or kind of projects you would be interested in the future.",Score:e.bioRating},{Name:"Repository Popularity",Message:"It's worth taking the time to sort your pinned repositories so that they make the best possible impression on the viewer.\n\nYou can change the position in which they appear by dragging and dropping. When you click on each repository you can add a brief description that will be visible on your profile. So you want to add something that tells them a little bit about the project and piques their interest.",Score:e.repoPopularity},{Name:"Backlinks & Information",Message:"Provide general information about yourself such as what is your current company, email address and links to your portfolio, GitLab, CodePen, or blog. ".concat(t.backlinkSuggestions.length>0?"\n\nConsider adding following to your profile:\n\u2022 "+t.backlinkSuggestions.join("\n\u2022 "):""),Score:e.backlinkRating},{Name:"Providing Web Pages",Message:"It's important to provide a webpage if your repository is especially a library. You can use gitbook or similar tools to documante your project or provide a demo of how it works.",Score:e.webpageRating}]},P=function(){function e(t,r,s){Object(G.a)(this,e),this.user=void 0,this.repos=void 0,this.isStarred=void 0,this.result=[],this.rating={bioExists:!1,companyExists:!1,bioRating:0,locExists:!1,blogExists:!1,userPopularity:0,repoPopularity:0,repoDescriptionRating:0,webpageRating:0,totalForks:0,totalStars:0,repoCount:0,backlinkRating:0};var a=r.map((function(e){return e.stargazers_count})).reduce((function(e,t){return e+t})),i=r.map((function(e){return e.forks_count})).reduce((function(e,t){return e+t}));this.user=t,this.repos=r.filter((function(e){return!e.fork})),this.isStarred=s,this.rating.totalStars=a,this.rating.totalForks=i,this.rating.locExists=Boolean(t.location),this.rating.blogExists=Boolean(t.blog),this.rating.bioExists=Boolean(t.bio),this.rating.companyExists=Boolean(t.company),this.rating.repoCount=t.public_repos}return Object(H.a)(e,[{key:"rateBio",value:function(){if(this.user.bio){var e=8*this.user.bio.split(" ").length;this.rating.bioRating=e>100?100:e}}},{key:"ratePopularity",value:function(){var e=this.repos.map((function(e){return e.stargazers_count})).reduce((function(e,t){return e+t}))/this.repos.length,t=this.user.followers/this.repos.length+e,r=parseInt((15*t).toFixed(0));this.rating.userPopularity=r>=100?100:r}},{key:"rateRepoPopularity",value:function(){var e=(this.repos.map((function(e){return e.stargazers_count})).reduce((function(e,t){return e+t}))+1.2*this.repos.map((function(e){return e.forks_count})).reduce((function(e,t){return e+t})))/this.repos.length,t=parseInt((16*e).toFixed(0));this.rating.repoPopularity=t>=100?100:t}},{key:"rateRepoDescription",value:function(){var e=this.repos.filter((function(e){var t;return(null===(t=e.description)||void 0===t?void 0:t.split(" ").length)>4})),t=this.repos.length/e.length,r=parseInt((100/t).toFixed(0));this.rating.repoDescriptionRating=r>=100?100:r}},{key:"rateWebpage",value:function(){var e=this.repos.map((function(e){return e.homepage})).filter((function(e){return e})).length/this.repos.length*100,t=parseInt((1.8*e).toFixed(0));this.rating.webpageRating=t>=100?100:t}},{key:"rateBacklinks",value:function(){var e=((this.rating.bioExists?1:0)+(this.rating.locExists?1:0)+(this.rating.blogExists?1:0)+(this.rating.companyExists?1:0))/4;this.rating.backlinkRating=100*e}},{key:"getResult",value:function(){this.rateBio(),this.ratePopularity(),this.rateRepoDescription(),this.rateRepoPopularity(),this.rateWebpage(),this.rateBacklinks();var e=this.repos.filter((function(e){var t;return(null===(t=e.description)||void 0===t?void 0:t.split(" ").length)<5||!e.description})),t=[{type:this.rating.bioExists,Name:"Biography"},{type:this.rating.blogExists,Name:"Blog"},{type:this.rating.locExists,Name:"Location"},{type:this.rating.companyExists,Name:"Company Name"}].filter((function(e){return!e.type})).map((function(e){return e.Name})),r={repoSuggestions:e.map((function(e){return e.full_name})),backlinkSuggestions:t};return I(this.rating,r)}}]),e}(),z=r(19),D=r.n(z),_=function(){var e=Object(E.a)(R.a.mark((function e(t){var r,s,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("https://api.github.com/users/".concat(t)).then((function(e){return null===e||void 0===e?void 0:e.data}));case 3:return r=e.sent,e.next=6,D.a.get("https://api.github.com/users/".concat(t,"/repos")).then((function(e){return null===e||void 0===e?void 0:e.data}));case 6:return s=e.sent,e.next=9,D.a.get("https://api.github.com/users/".concat(t,"/starred")).then((function(e){return null===e||void 0===e?void 0:e.data}));case 9:return a=e.sent,i=a.map((function(e){return e.id})).includes(389782256),e.abrupt("return",{user:r,repos:s,isStarred:i});case 14:throw e.prev=14,e.t0=e.catch(0),e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),B=Object(a.b)({name:"user",initialState:{user:{},starred:!1,repos:[],rating:{},loading:!1,error:null},reducers:{setData:function(e,t){var r=t.payload;e.user=r.user,e.repos=r.repos,e.starred=r.isStarred},setRating:function(e,t){var r=t.payload;e.rating=r},setLoading:function(e,t){var r=t.payload;e.loading=r},setError:function(e,t){var r=t.payload;e.user={},e.repos=[],e.rating=[],e.loading=!1,e.error=r}}}),C=B.actions,A=C.setData,M=C.setRating,F=C.setLoading,L=C.setError,W=B.reducer,T=function(){var e=Object(o.b)(),t=Object(s.useState)(""),r=Object(u.a)(t,2),a=r[0],i=r[1],n=function(t){var r;t.preventDefault(),""!==a&&(a&&e((r=a,function(){var e=Object(E.a)(R.a.mark((function e(t){var s,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F(!0)),e.next=4,_(r);case 4:(null===(s=e.sent)||void 0===s?void 0:s.user)&&(a=new P(s.user,s.repos,s.isStarred).getResult(),t(M(a)),t(F(!1)),t(A(s))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(L((null===(i=e.t0.response)||void 0===i?void 0:i.data.message)||"User Not Found"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),i(""))};return Object(h.jsxs)("form",{onSubmit:n,children:[Object(h.jsx)("input",{type:"text",placeholder:"GitHub Username...",value:a,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)("button",{type:"submit",onClick:n,children:"ANALYZE"})]})},U=function(){var e=Object(o.c)(b).user;return Object(h.jsxs)("div",{className:"search-user",children:[!(null===e||void 0===e?void 0:e.login)&&Object(h.jsx)("h2",{children:"View your GitHub profile rating and improve your profile upon results"}),Object(h.jsx)(T,{})]})};r(66);var Y=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)(U,{}),Object(h.jsx)(w,{})]})},J=r(34),V=r(7),q=Object(V.b)({userState:W}),Z=r(35),K=R.a.mark(Q);function Q(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)([]);case 2:case"end":return e.stop()}}),K)}var X=Q,$=Object(J.a)(),ee=Object(a.a)({reducer:q,middleware:function(e){return e().concat($)},devTools:!1});$.run(X),n.a.render(Object(h.jsx)(o.a,{store:ee,children:Object(h.jsx)(Y,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.66b6aef1.chunk.js.map