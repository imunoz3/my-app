(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(t,e,n){},104:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(34),a=n.n(i),c=n(15),o=n(16),r=n(18),l=n(17),h=n(31),j=n(2),u=n(5),d=n(29),b=n(105),p=n(109),O=n(110),m=n(106),g=n(107),f=n(108),v=n(4),x=n.n(v),w=n(22),y=n.n(w),S=n(1),k={color:"lime"},C=new x.a.Icon({iconUrl:"https://i.ya-webdesign.com/images/sample-png-image-download-3.png",iconRetinaUrl:"https://i.ya-webdesign.com/images/sample-png-image-download-3.png",iconAnchor:new x.a.Point(0,0),popupAnchor:new x.a.Point(16,0),shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new x.a.Point(32,32),className:"leaflet-div-icon"}),A=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={flights:[],positions:[]},t.ws=y()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.ws.on("FLIGHTS",(function(e){t.setState({flights:e})})),this.ws.on("POSITION",(function(e){var n=t.state.positions.findIndex((function(t){return t.code==e.code}));if(-1==n)t.setState({positions:[].concat(Object(d.a)(t.state.positions),[e])});else{var s=Object(d.a)(t.state.positions);s[n]=Object(u.a)(Object(u.a)({},s[n]),{},{position:e.position}),t.setState({positions:s})}}))}},{key:"emitFlights",value:function(){this.ws.emit("FLIGHTS",{})}},{key:"render",value:function(){this.state.response;return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{onClick:this.emitFlights(),children:" Show Flights "}),Object(S.jsx)("div",{children:Object(S.jsxs)(b.a,{center:[45.4,-75.7],zoom:1.5,children:[Object(S.jsx)(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),this.state.flights.map((function(t){return Object(S.jsxs)("div",{children:[Object(S.jsx)(O.a,{center:[t.destination[0],t.destination[1]],children:Object(S.jsxs)(m.a,{children:["Origen:",t.code]})}),Object(S.jsx)(O.a,{position:[t.origin[0],t.origin[1]],children:Object(S.jsxs)(m.a,{children:["Origen:",t.code]})}),Object(S.jsx)(g.a,{pathOptions:k,positions:[[t.origin[0],t.origin[1]],[t.destination[0],t.destination[1]]]})]})})),this.state.positions.map((function(t){return Object(S.jsx)("div",{children:Object(S.jsx)(f.a,{position:[t.position[0],t.position[1]],icon:C,children:Object(S.jsxs)(m.a,{children:["Avi\xf3n:",t.code]})})})}))]})})]})}}]),n}(s.Component),F=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={flights:[]},t.ws=y()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.ws.on("FLIGHTS",(function(e){t.setState({flights:e})}))}},{key:"emitFlights",value:function(){this.ws.emit("FLIGHTS",{})}},{key:"render",value:function(){this.state.response;return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{onClick:this.emitFlights(),children:" Show Flights "}),Object(S.jsx)("div",{children:this.state.flights.map((function(t){return Object(S.jsxs)("p",{children:["Vuelo: ",t.code,Object(S.jsxs)("div",{children:["Aerol\xednea: ",t.airline]}),Object(S.jsxs)("div",{children:["Avi\xf3n: ",t.plane]}),Object(S.jsxs)("div",{children:["Asientos: ",t.seats]}),Object(S.jsxs)("div",{children:["Pasajeros:",t.passengers.map((function(t){return Object(S.jsxs)("div",{children:[t.name,", ",t.age]})}))]})]})}))})]})}}]),n}(s.Component),I=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={message:""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(S.jsxs)("form",{action:".",onSubmit:function(e){e.preventDefault(),t.props.onSubmitMessage(t.state.message),t.setState({message:""})},children:[Object(S.jsx)("input",{type:"text",placeholder:"Enter message...",value:this.state.message,onChange:function(e){return t.setState({message:e.target.value})}}),Object(S.jsx)("input",{type:"submit",value:"Send"})]})}}]),n}(s.Component),M=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={name:"Bob",chat:[]},t.ws=y()("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}),t.submitMessage=function(e){t.ws.emit("CHAT",{name:t.state.name,message:e})},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.ws.on("CHAT",(function(e){e.date=new Date(e.date).toLocaleDateString("en-GB"),t.setState({chat:[].concat(Object(d.a)(t.state.chat),[e])})}))}},{key:"renderChat",value:function(){return this.state.chat.map((function(t,e){return Object(S.jsxs)("div",{children:[Object(S.jsxs)("span",{style:{color:"green"},children:[t.name," (",t.date,"): "]}),Object(S.jsx)("span",{children:t.message})]},e)}))}},{key:"render",value:function(){var t=this;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("label",{htmlFor:"name",children:["Name:\xa0",Object(S.jsx)("input",{type:"text",id:"name",placeholder:"Enter your name...",value:this.state.name,onChange:function(e){return t.setState({name:e.target.value})}})]}),Object(S.jsx)(I,{onSubmitMessage:function(e){return t.submitMessage(e)}}),Object(S.jsx)("div",{children:this.renderChat()})]})}}]),n}(s.Component),T=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(S.jsx)(h.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"FLIGHTS"}),Object(S.jsxs)("ul",{className:"header",children:[Object(S.jsx)("li",{children:Object(S.jsx)(h.b,{exact:!0,to:"/",children:"Mapa"})}),Object(S.jsx)("li",{children:Object(S.jsx)(h.b,{to:"/flight_info",children:"Flight Info"})}),Object(S.jsx)("li",{children:Object(S.jsx)(h.b,{to:"/chat",children:"Chat"})})]}),Object(S.jsxs)("div",{className:"content",children:["\xa0\xa0",Object(S.jsx)(j.a,{exact:!0,path:"/",component:A}),Object(S.jsx)(j.a,{path:"/flight_info",component:F}),Object(S.jsx)(j.a,{path:"/chat",component:M})]})]})})}}]),n}(s.Component);n(103);a.a.render(Object(S.jsx)(T,{}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.03705771.chunk.js.map