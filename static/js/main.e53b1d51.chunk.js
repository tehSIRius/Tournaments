(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a(342)},342:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=a(19),i=a(20),l=a(22),m=a(21),h=a(23),u=a(12),b=a(17),d=Object(b.createMuiTheme)({palette:{primary:{main:"#ff5722"},type:"dark"},typography:{useNextVariants:!0}}),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.MuiThemeProvider,{theme:d},this.props.children)}}]),t}(r.a.Component),f=a(49),g=a.n(f),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(g.a,null),r.a.createElement(u.a,{position:"static",className:"toolBar"},r.a.createElement(u.f,null,r.a.createElement(u.g,{variant:"h6",color:"inherit"},"Tournaments"),r.a.createElement("a",{href:"https://github.com/tehSIRius/tournaments",target:"blank",className:"githubLink"},r.a.createElement("img",{src:"Github.png",width:"36",height:"36",title:"This project is available on Github!",alt:"Github link"})))),r.a.createElement(u.d,{container:!0},this.props.children))}}]),t}(r.a.Component),O=a(6),v=a(32),k=a.n(v),y=a(50),S=a.n(y),E=a(38),T=a.n(E),C=a(51),w=a.n(C),B=a(123),N=a.n(B),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).createTeam=a.createTeam.bind(Object(O.a)(Object(O.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"createTeam",value:function(e){var t=this;return r.a.createElement(w.a,{key:e.key},e.name,r.a.createElement(N.a,{className:"delete",onClick:function(){return t.handleDelete(e.key)}}))}},{key:"handleDelete",value:function(e){this.props.delete(e)}},{key:"render",value:function(){var e=this.props.teams.map(this.createTeam);return r.a.createElement(u.d,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"listOfTeams"},Object.keys(this.props.teams).length>0?r.a.createElement(u.b,null,r.a.createElement(u.c,null,r.a.createElement(u.g,{variant:"h4",gutterBottom:!0},"Selected Teams"),r.a.createElement(T.a,{className:"theList"},e))):null)}}]),t}(r.a.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={topScore:0,bottomScore:0},a.handleScoreChange=a.handleScoreChange.bind(Object(O.a)(Object(O.a)(a))),a.handleBottomScoreChange=a.handleBottomScoreChange.bind(Object(O.a)(Object(O.a)(a))),a.handleTopScoreChange=a.handleTopScoreChange.bind(Object(O.a)(Object(O.a)(a))),""===a.props.bottomTeam&&(a.state.bottomScore=-1,a.handleScoreChange()),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleTopScoreChange",value:function(e){Number(e.target.value)>=0&&Number(e.target.value)<=1e3?this.setState({topScore:Number(e.target.value)}):alert("Score must be in the range between 0 and 1000!")}},{key:"handleBottomScoreChange",value:function(e){Number(e.target.value)>=0&&Number(e.target.value)<=1e3?this.setState({bottomScore:Number(e.target.value)}):alert("Score must be in the range between 0 and 1000!")}},{key:"handleScoreChange",value:function(){Number(this.state.topScore)>Number(this.state.bottomScore)?this.props.scoreChange(this.props.topTeam,this.props.next):Number(this.state.bottomScore)>Number(this.state.topScore)&&this.props.scoreChange(this.props.bottomTeam,this.props.next)}},{key:"render",value:function(){return r.a.createElement(u.d,{container:!0,direction:"column",justify:"space-between",alignItems:"flex-end",className:"matchWrapper"},r.a.createElement(u.e,{variant:"filled",label:this.props.topTeam,value:this.state.topScore,onChange:this.handleTopScoreChange,onBlur:this.handleScoreChange}),""===this.props.bottomTeam?r.a.createElement(u.e,{disabled:!0,label:"Empty Seed",value:this.state.bottomScore}):r.a.createElement(u.e,{variant:"filled",label:this.props.bottomTeam,value:this.state.bottomScore,onChange:this.handleBottomScoreChange,onBlur:this.handleScoreChange}))}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={teams:[],numOfTeams:Object.keys(a.props.teams).length},a.addTempTeams(),a.createRound=a.createRound.bind(Object(O.a)(Object(O.a)(a))),a.createBracket=a.createBracket.bind(Object(O.a)(Object(O.a)(a))),a.handleScoreChange=a.handleScoreChange.bind(Object(O.a)(Object(O.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"calculateByes",value:function(){for(var e=2;e<this.state.numOfTeams;e*=2);return this.state.numOfTeams%e===0?0:this.state.numOfTeams-e/2}},{key:"addTempTeams",value:function(){for(var e=0;e<Object.keys(this.props.teams).length;++e)this.state.teams.push(this.props.teams[e].name);for(e=1;e<=this.state.numOfTeams-1;++e)this.state.teams.push("Winner of match #"+e)}},{key:"createRound",value:function(e,t){for(var a=[],n=e,c=e;c<t;c+=2)a.push(r.a.createElement("span",{className:"roundSpacer"},"\xa0")),a.push(r.a.createElement(I,{topTeam:this.state.teams[c],bottomTeam:this.state.teams[c+1],scoreChange:this.handleScoreChange,next:t-e+n})),++n;return a.push(r.a.createElement("span",{className:"roundSpacer"},"\xa0")),a}},{key:"createBracket",value:function(){for(var e=[],t=0,a=this.state.numOfTeams;a>1;a=Math.round(a/2))e.push(r.a.createElement("ul",{className:"round"},this.createRound(t,t+a))),t+=a;return e.push(r.a.createElement("ul",{className:"winner round"},r.a.createElement(u.d,{container:!0,direction:"row",alignItems:"center",justify:"center"},r.a.createElement("img",{src:"trophy.png",alt:"Winner",width:"46",height:"46"}),r.a.createElement(u.g,{variant:"h6",gutterBottom:!0},this.state.teams[Object.keys(this.state.teams).length-1])))),e}},{key:"handleScoreChange",value:function(e,t){var a=this.state.teams.slice();a[t]=e,this.setState({teams:a})}},{key:"render",value:function(){var e=this.createBracket();return r.a.createElement("div",{id:"bracket"},e)}}]),t}(r.a.Component),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={newTeam:"",showBracket:!1,teams:[]},a.handleAddTeam=a.handleAddTeam.bind(Object(O.a)(Object(O.a)(a))),a.handleChange=a.handleChange.bind(Object(O.a)(Object(O.a)(a))),a.handleDelete=a.handleDelete.bind(Object(O.a)(Object(O.a)(a))),a.handleCreateBracket=a.handleCreateBracket.bind(Object(O.a)(Object(O.a)(a))),a.teamIsDuplicate=a.teamIsDuplicate.bind(Object(O.a)(Object(O.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleAddTeam",value:function(e){if(""===this.state.newTeam||this.teamIsDuplicate(this.state.newTeam))window.alert("Invalid team name was selected!\nNames have to be at least 1 character long!\nNames cannot be duplicate!");else{var t={name:this.state.newTeam,key:Date.now()};this.setState(function(e){return{teams:e.teams.concat(t)}}),this.setState({newTeam:""})}e.preventDefault()}},{key:"teamIsDuplicate",value:function(e){for(var t=!1,a=0;a<Object.keys(this.state.teams).length;++a)this.state.teams[a].name===e&&(t=!0);return t}},{key:"handleDelete",value:function(e){var t=this.state.teams.filter(function(t){return t.key!==e});this.setState({teams:t})}},{key:"handleChange",value:function(e){e.target.value.length<=20&&this.setState({newTeam:e.target.value})}},{key:"handleCreateBracket",value:function(e){Object.keys(this.state.teams).length>1?this.setState({showBracket:!this.state.showBracket}):alert("Not enough teams were selected!\nThere need to be at least 2 teams to generate a tournament!"),e.preventDefault()}},{key:"render",value:function(){return r.a.createElement(u.d,{container:!0,direction:"column",justify:"center",alignItems:"center"},this.state.showBracket?r.a.createElement(u.d,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("form",{onSubmit:this.handleCreateBracket},r.a.createElement(k.a,{className:"bracketButton",type:"submit",variant:"contained",color:"primary"},"Change Teams")),r.a.createElement(x,{teams:this.state.teams})):r.a.createElement(u.d,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("form",{onSubmit:this.handleAddTeam},r.a.createElement(S.a,{placeholder:"Enter a team name",value:this.state.newTeam,onChange:this.handleChange}),r.a.createElement(k.a,{id:"teamButton",type:"submit",variant:"contained",color:"primary"},"Add team")),r.a.createElement(D,{teams:this.state.teams,delete:this.handleDelete}),r.a.createElement("form",{onSubmit:this.handleCreateBracket},r.a.createElement(k.a,{className:"bracketButton",type:"submit",variant:"contained",color:"primary"},"Create Tournament"))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(function(){return r.a.createElement(j,null,r.a.createElement(A,null))},null),document.querySelector("#app"))}},[[199,2,1]]]);
//# sourceMappingURL=main.e53b1d51.chunk.js.map