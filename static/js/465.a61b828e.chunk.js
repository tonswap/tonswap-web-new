"use strict";(self.webpackChunktonswap_web=self.webpackChunktonswap_web||[]).push([[465],{92066:function(e,n,t){var r=t(22112),i=t(75859);n.Z=function(e){var n=e.value,t=e.decimalScale,a=void 0===t?4:t,o=e.prefix;return n?(0,i.jsx)(r.Z,{prefix:o,displayType:"text",value:n,thousandSeparator:!0,decimalScale:a}):(0,i.jsx)(i.Fragment,{children:"0"})}},17099:function(e,n,t){var r=t(15833),i=t(75859);n.Z=function(e){var n=e.height,t=e.bgcolor,a=void 0===t?"rgba(255,255,255, 0.15)":t,o=e.variant,s=e.width,c=e.style,l=void 0===c?{}:c,u=e.borderRadius,d=void 0===u?6:u;return(0,i.jsx)(r.Z,{style:l,height:n,sx:{bgcolor:a,borderRadius:d},variant:o,width:s})}},94659:function(e,n,t){var r=t(39736),i=t(75926),a=t(75174),o=t(39910),s=t(55204),c=t(99581),l=t(75),u=t(39417),d=t(55195),x=t(75859),p=(0,a.ZP)(s.Z)({display:"flex",flexDirection:"column",alignItems:"center",gap:10});n.Z=function(e){var n=e.open,t=e.children,a=(0,u.X)().adapterId,s=(0,d.$)().t,f=!c.tq&&a===l.ht.TON_HUB;return(0,x.jsx)(r.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},backdropFilter:"blur(5px) "},open:n,children:(0,x.jsxs)(p,{children:[(0,x.jsx)(i.Z,{color:"inherit"}),t,f&&(0,x.jsx)(o.Z,{children:s("check-tonhub")})]})})}},30357:function(e,n,t){var r=t(29439),i=t(39910),a=t(6114),o=t(55204),s=t(68963),c=t(55195),l=t(19867),u=t(75859),d=(0,a.Z)(o.Z)({maxWidth:"320px",display:"flex",background:"rgba(118, 118, 128, 0.12)",borderRadius:8.91,height:32,marginLeft:"auto",marginRight:"auto",overflow:"auto",position:"relative",padding:2,width:"100%",marginTop:10,"::-webkit-scrollbar":{height:0,display:"none"}}),x=(0,a.Z)("a")({height:"100%",display:"flex",alignItems:"center",cursor:"pointer",zIndex:10,justifyContent:"center",p:{fontSize:13,pointerEvents:"none"}}),p=(0,a.Z)(o.Z)((function(e){return{transition:e.allowTransition?"0.2s all":"",position:"absolute",border:"0.5px solid rgba(0, 0, 0, 0.04)",boxShadow:" 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)",borderRadius:6.93,height:"calc(100% - 4px)",top:"50%",transform:"translate(0, -50%)",pointerEvents:"none",background:"white"}}));var f=function(e){var n=e.width,t=e.item,r=e.onSelect,a=e.selected,o=e.index,l=e.symbol,d=(0,c.$)().t;(0,s.useEffect)((function(){a&&r(o)}),[a]);return(0,u.jsx)(x,{style:{width:n},onClick:function(){a||t.method()},children:(0,u.jsx)(i.Z,{style:{fontWeight:500},children:d(t.text,{token:l})})})};n.Z=function(e){var n=e.items,t=e.action,i=e.symbol,a=(0,s.useState)(0),o=(0,r.Z)(a,2),c=o[0],x=o[1],h=(0,s.useState)(0),m=(0,r.Z)(h,2),g=m[0],v=m[1],Z=(0,s.useState)(!1),j=(0,r.Z)(Z,2),k=j[0],b=j[1],w=(0,s.useRef)(),y=(0,s.useRef)(!0),T=(0,l.x)(),A=T.srcLoading,I=T.destLoading,S=T.txPending,C=function(e){if(y.current){var t=w.current.getBoundingClientRect().width/n.length-2;x(t*e+2),v(t)}};(0,s.useEffect)((function(){return function(){y.current=!1}}),[]),(0,s.useEffect)((function(){k||setTimeout((function(){b(!0)}),500)}),[c]);var N=A||I||S;return(0,u.jsxs)(d,{ref:w,style:{pointerEvents:N?"none":"all"},children:[(0,u.jsx)(p,{allowTransition:k,style:{left:"".concat(c,"px"),width:"".concat(g,"px")}}),n.map((function(e,r){var a=t===e.text.toLowerCase().replace("-"," ");return(0,u.jsx)(f,{symbol:i,onSelect:C,selected:a,index:r,item:e,width:"calc(100% / ".concat(n.length,")")},e.text)}))]})}},45948:function(e,n,t){var r=t(62399),i=t(39910),a=t(18366),o=t(68541),s=t(75859),c=(0,a.Z)(r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center","& .token-name":{fontSize:14,fontWeight:600,marginLeft:10},"& .token-image":{width:20,height:20,objectFit:"contain"}});n.Z=function(e){var n=e.image,t=e.name;return(0,s.jsxs)(c,{className:"token-preview",children:[(0,s.jsx)("img",{className:"token-image",src:n||o}),(0,s.jsx)(i.Z,{className:"token-name",children:t.toUpperCase()})]})}},18062:function(e,n,t){var r=t(68963),i=t(42247),a=t(75174),o=t(51998),s=t(55204),c=t(97719),l=t(75859),u=(0,a.ZP)(s.Z)({"& &":{color:"white"},"& a":{color:"white"}});n.Z=function(){var e=(0,i.Ds)(),n=e.enqueueSnackbar,t=e.closeSnackbar;return{showNotification:(0,r.useCallback)((function(e){var r=e.message,i=e.variant,a=e.onClose,s=e.autoHideDuration,d=e.anchorOrigin,x=e.className,p=void 0===x?"":x,f=n((0,l.jsx)(u,{children:r}),{className:p,anchorOrigin:d,variant:i,autoHideDuration:s||5e3,onClose:a,onClick:function(){return t(f)},action:function(){return(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.Z,{style:{width:20,height:20}})})}})}),[t,n])}}},84672:function(e,n,t){var r=t(68963),i=t(79711),a=t(80124),o=t(19867),s=t(17464),c=t(18740);n.Z=function(){var e=(0,i.UO)().id,n=(0,s._)().getTokenById,t=(0,o.O)().selectToken,l=(0,c.Z)();(0,r.useEffect)((function(){if(e){var r=n(e);r?t(r):l(a.Z.swap.navigateToTokens)}}),[e,l])}},91691:function(e,n,t){var r=t(74165),i=t(15861),a=t(29439),o=t(68963),s=t(3789);n.Z=function(e,n,t,c){var l=(0,o.useState)("0"),u=(0,a.Z)(l,2),d=u[0],x=u[1],p=(0,o.useState)(!1),f=(0,a.Z)(p,2),h=f[0],m=f[1],g=t&&t>0?t:300,v=(0,o.useRef)();return(0,o.useEffect)((function(){if(clearTimeout(v.current),!n||"0"===n)return m(!1),void x("0");m(!0),v.current=setTimeout((function(){(0,i.Z)((0,r.Z)().mark((function t(){var i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=parseFloat,t.next=4,(0,s.wG)(e,n,c);case 4:t.t1=t.sent,i=(0,t.t0)(t.t1),x((function(){return i>1?i.toFixed(2):i<.01?i.toFixed(6):i.toFixed(4)})),t.next=11;break;case 9:t.prev=9,t.t2=t.catch(0);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,9,11,14]])})))()}),g)}),[e,n,g]),{usd:d,loading:h}}},63317:function(e,n,t){t.d(n,{Z:function(){return Oe}});var r=t(74165),i=t(15861),a=t(29439),o=t(62399),s=t(75174),c=t(68963),l=t(72305),u=t(80149),d=t(4942),x=(0,t(53754).Z)((function(e){return{content:{flex:1,display:"flex",flexDirection:"column",width:"100%"},cards:{},button:(0,d.Z)({marginTop:"auto",width:"100%",marginBottom:30},e.breakpoints.down("sm"),{})}})),p=t(91478),f=t(22112),h=t(17099),m=t(6114),g=t(71451),v=t(75859),Z=(0,m.Z)(o.Z)({height:"100%",width:"100%",position:"relative",display:"flex",alignItems:"center","& .MuiOutlinedInput-notchedOutline":{border:"none"}}),j=(0,m.Z)(o.Z)({position:"absolute",left:15,top:"50%",transform:"translate(0, -50%)"});function k(e){var n=e.value,t=e.onChange,r=e.isLoading,i=e.placeholder;return(0,v.jsxs)(Z,{className:"input-container",children:[r&&(0,v.jsx)(j,{children:(0,v.jsx)(h.Z,{width:140,height:30,borderRadius:3})}),(0,v.jsx)(f.Z,{inputProps:{sx:{padding:0,border:"none",textIndent:"16px",background:"transparent"},inputMode:"decimal"},className:"input",placeholder:r?"":i,autoComplete:"off",value:r?"":n||"",customInput:p.Z,decimalScale:g.dg,decimalSeparator:".",thousandSeparator:",",onValueChange:function(e,n){var r=e.value;"prop"!==n.source&&(console.log(r),t("."===r?"0.":r))}})]})}var b=t(80124),w=(t(24713).Z,"ton"),y=t(55204),T=t(39910),A=t(54958),I=t(92066),S=t(55195),C=(0,m.Z)(y.Z)({height:"100%",display:"flex",alignItems:"center",gap:5,marginRight:12}),N=(0,m.Z)("button")({background:"rgba(255,255,255, 0.1)",padding:"0px 10px",borderRadius:10,height:"100%",cursor:"pointer",p:{color:"white",fontSize:12,fontWeight:500}});var E=function(e){var n=e.loading,t=e.availableAmount,r=e.onMaxAmountClick,i=e.showMax,a=(0,S.$)().t;return(0,v.jsx)(C,{children:n?(0,v.jsx)(h.Z,{width:40,height:15,borderRadius:"4px"}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(T.Z,{component:"p",textAlign:"right",children:[(0,v.jsx)("strong",{children:"".concat(a("balance"),": ")}),(0,v.jsx)(I.Z,{value:t})]}),i&&r&&(0,v.jsx)(N,{onClick:r,children:(0,v.jsxs)(T.Z,{children:[" ",a("max")]})})]})})},D=t(91691),R=(0,m.Z)(y.Z)({height:"100%"});var L=function(e){var n=e.tokenId,t=e.value,r=e.isLoading,i=(0,D.Z)(n,t),a=i.loading,o=i.usd;return(0,v.jsx)(R,{children:r||a?(0,v.jsx)(h.Z,{width:40,height:"15px",borderRadius:"4px"}):(0,v.jsxs)(T.Z,{component:"p",children:["~$",(0,v.jsx)(I.Z,{value:o,decimalScale:2})]})})},U=t(18740),F=t(74650),M=t(88027),O=t(39417),W=t(94361),B=t(11480),X=t(77563),z=t(75),K=t(19867),H=t(84596),P=t(42117),Y=t(3109),G=t(48604),q=(0,s.ZP)(o.Z)({display:"flex",flexDirection:"row",justifyContent:"baseline",position:"relative",top:8,left:8}),V=(0,s.ZP)(o.Z)({position:"relative",bottom:2,color:"white"}),J=function(e){var n=e.show,t=e.changeShow,r=(0,S.$)().t;return(0,v.jsx)(P.Z,{onClick:t,children:(0,v.jsxs)(q,{onClick:t,children:[(0,v.jsx)(T.Z,{children:r(n?"less-info":"more-info")}),(0,v.jsx)(V,{children:n?(0,v.jsx)(Y.Z,{}):(0,v.jsx)(G.Z,{})})]})})},Q=(0,s.ZP)(o.Z)({display:"flex",flexDirection:"row",justifyContent:"space-between"}),_=function(e){var n=e.title,t=e.value;return(0,v.jsxs)(Q,{children:[(0,v.jsx)(T.Z,{component:"p",textAlign:"left",children:n}),(0,v.jsx)(T.Z,{component:"p",textAlign:"right",children:t})]})},$=t(71321),ee=(0,m.Z)(y.Z)({borderRadius:12,paddingRight:12,display:"flex",position:"relative",overflow:"hidden",flexDirection:"column"}),ne=function(e){var n=e.delta,t=e.actionType,o=(0,S.$)().t,s=(0,K.x)().selectedToken,l=(0,c.useState)(),u=(0,a.Z)(l,2),d=u[0],x=u[1],p=(0,c.useState)(!1),f=(0,a.Z)(p,2),h=f[0],m=f[1],g=Number(null===d||void 0===d?void 0:d.impact)>5?(0,v.jsxs)("span",{children:[o("price-impact")," ",(0,v.jsx)("span",{style:{color:"#FC5656",fontSize:13},children:o("warning")})]}):o("price-impact"),Z=Number(null===d||void 0===d?void 0:d.impact)>5?(0,v.jsxs)("span",{style:{color:"#FC5656",fontSize:13},children:[null===d||void 0===d?void 0:d.impact,"%"]}):(null===d||void 0===d?void 0:d.impact)+"%",j=function(e){var n=e.X,t=e.gamma,r=e.deltaX;return(100*((n*(1-t)+r*t)/(n+r*t))).toFixed(2)},k=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(i){var a,o,s,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=14;break}return e.next=3,X.kI(null===i||void 0===i?void 0:i.tokenMinter);case 3:a=e.sent,o=Number(n),s=t===z.Us.BUY?parseFloat((0,H.wE)(a.tonReserves,9)):parseFloat((0,H.wE)(a.tokenReserves,i.decimals)),.003,.997,c=X.et.SWAP,.005,l=j({X:s,gamma:.997,deltaX:o}),u=.3.toFixed(2),d=.5.toFixed(2),x({tradeFee:u,gasFee:c,slippage:d,impact:l});case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){k(s)}),[n]),(0,v.jsxs)(ee,{className:"swap-card",children:[Number(null===d||void 0===d?void 0:d.impact)>5&&!h&&(0,v.jsx)($.Z,{timeout:200,in:!h,children:(0,v.jsxs)(y.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,v.jsx)(T.Z,{component:"span",sx:{color:"#FC5656",fontSize:13},children:o("impact-warning")})," ",Z]})}),(0,v.jsx)(J,{show:h,changeShow:function(){m(!h)}}),(0,v.jsxs)(B.Z,{orientation:"vertical",in:h,children:[(0,v.jsx)(_,{title:o("gas-fee"),value:"".concat(null===d||void 0===d?void 0:d.gasFee," TON")}),(0,v.jsx)(_,{title:o("trade-fee"),value:"".concat(null===d||void 0===d?void 0:d.tradeFee,"%")}),(0,v.jsx)(_,{title:o("max-slippage"),value:"".concat(null===d||void 0===d?void 0:d.slippage,"%")}),(0,v.jsx)(_,{title:g,value:Z})]})]})};var te=function(e){var n=e.inputAmount,t=e.onChange,r=e.token,i=e.isLoading,a=e.balanceLoading,o=e.balance,s=e.onMaxAmount,c=e.showMax,l=e.srcTokenAmount,u=e.actionType,d=(0,F.Pt)(),x=(0,U.Z)(),p=(0,F.sy)().operationType,f=(0,O.X)().address,h=r.name===w;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(re,{className:"swap-card",children:[(0,v.jsx)(le,{color:r.color}),(0,v.jsxs)("div",{style:{position:"relative"},children:[(0,v.jsxs)(ce,{expanded:d,children:[(0,v.jsx)(k,{placeholder:"0",isLoading:i,value:n,onChange:function(e){return t(e)}}),(0,v.jsxs)(ie,{style:{cursor:h?"":"pointer",userSelect:h?"none":"all"},onClick:function(){h||(p===M.C8.SWAP?(W.Z.changeTokenInTrade(r.name),x(b.Z.swap.navigateToTokens)):(W.Z.changeTokenInManageLiquidity(r.name),x(b.Z.manageLiquidity.navigateToTokens)))},children:[r.image&&(0,v.jsx)(ae,{src:r.image,alt:"token"}),(0,v.jsx)(T.Z,{className:"name",children:r.displayName}),!h&&(0,v.jsx)("div",{className:"arrow"})]})]}),(0,v.jsx)(oe,{children:f&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(L,{isLoading:i,value:n,tokenId:r.tokenMinter}),(0,v.jsx)(E,{availableAmount:o,displayName:r.displayName,loading:a,onMaxAmountClick:function(){W.Z.onMaxClick(),null===s||void 0===s||s()},showMax:c})]})})]}),l&&(u===z.Us.BUY||u===z.Us.SELL)&&f&&(0,v.jsx)(se,{children:(0,v.jsx)(ne,{delta:l,actionType:u})})]})})},re=(0,m.Z)(y.Z)({borderRadius:12,padding:"18px",display:"flex",position:"relative",overflow:"hidden",flexDirection:"column"}),ie=(0,m.Z)(y.Z)({padding:"0px 8px",display:"flex",alignItems:"center",gap:10,position:"relative",background:"rgba(255,255,255, 0.1)",borderRadius:12,height:"100%",boxShadow:"rgb(0 0 0 / 8%) 0px 6px 10px",".name":{maxWidth:70,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},".arrow":{width:7,height:7,borderLeft:"2px solid white",borderBottom:"2px solid white",transform:"rotate(-45deg)",position:"relative",top:"-2px"},p:{color:"white",fontSize:12,fontWeight:600}}),ae=(0,m.Z)(A.Z)({width:24,height:24}),oe=(0,m.Z)(y.Z)({display:"flex",justifyContent:"space-between",alignItems:"center",height:25,marginTop:10,p:{color:"white",fontSize:12,fontWeight:400}}),se=(0,m.Z)(y.Z)({alignItems:"center",position:"relative",p:{color:"white",fontSize:12,fontWeight:400}}),ce=(0,m.Z)(y.Z)((function(e){var n=e.expanded;return{paddingRight:10,position:"relative",background:"rgba(255,255,255, 0.1)",width:"100%",borderRadius:"12px",display:"flex",alignItems:"center",height:n?54:42,padding:n?10:5,".input-container":{width:"100%",height:"100%",input:{color:"white",fontSize:29,fontWeight:600,height:"100%",paddingRight:10,textIndent:5}}}})),le=(0,m.Z)(y.Z)((function(e){return{background:e.color,width:"100%",position:"absolute",height:"100%",left:0,top:0,pointerEvents:"none",opacity:.93}})),ue=t(90021),de=t(9792),xe=t(3789);var pe=function(e){var n=e.token,t=e.srcTokenName,a=e.getAmountFunc,o=e.disableInputDependency,s=e.srcTokenAmount,l=e.actionType,u=e.srcDecimals,d=e.destDecimals,x=(0,K.x)(),p=x.destTokenAmount,f=x.totalBalances,h=x.destLoading,m=x.destAvailableAmountLoading,g=x.inInput,Z=(0,K.O)(),j=Z.updateDestTokenAmount,k=Z.updateSrcTokenAmount,b=Z.updateSrcTokenLoading,w=Z.onInputChange,y=(0,c.useRef)(""),T=(0,de.Z)((0,i.Z)((0,r.Z)().mark((function e(){var i,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.current){e.next=2;break}return e.abrupt("return");case 2:return i=0,o="ton"===t?n.tokenMinter:t,e.prev=4,e.next=7,(0,xe.NX)(o,"ton"!==t,null,(0,H.t1)(y.current||"0",d),a);case 7:if(i=e.sent,y.current){e.next=10;break}return e.abrupt("return");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:if(e.prev=15,y.current){e.next=18;break}return e.abrupt("return");case 18:if(b(!1),0!==i){e.next=23;break}return e.abrupt("return");case 23:k((0,H.wE)(i,u));case 24:return e.finish(15);case 25:case"end":return e.stop()}}),e,null,[[4,12,15,25]])}))),600),A=function(e){j(e),o||(w(ue.jM.DEST),y.current=e,e?(b(!0),T()):(b(!1),k("")))};return(0,c.useEffect)((function(){p&&g===ue.jM.DEST&&A(p)}),[]),(0,v.jsx)("div",{style:{marginBottom:35},children:(0,v.jsx)(te,{isLoading:h,onChange:A,inputAmount:p,token:n,balance:f.destBalance,balanceLoading:m,srcTokenAmount:s,actionType:l})})},fe=function(e){var n=e.token,t=e.getAmountFunc,a=e.destTokenName,o=e.maxAmount,s=e.disableInputDependency,l=e.srcDecimals,u=e.destDecimals,d=(0,K.x)(),x=d.srcTokenAmount,p=d.totalBalances,f=d.srcLoading,h=d.srcAvailableAmountLoading,m=d.inInput,g=(0,O.X)().address,Z=(0,K.O)(),j=Z.updateDestTokenAmount,k=Z.updateSrcTokenAmount,b=Z.updateDestTokenLoading,w=Z.onInputChange,y=(0,c.useRef)(""),T=(0,de.Z)((0,i.Z)((0,r.Z)().mark((function e(){var i,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.current){e.next=2;break}return e.abrupt("return");case 2:return i=0,o="ton"===n.name?a:n.tokenMinter,e.prev=4,console.log("--\x3e",y.current,l,u),e.next=8,(0,xe.NX)(o,"ton"!==n.name,(0,H.t1)(y.current||"0",l),null,t);case 8:if(i=e.sent,y.current){e.next=11;break}return e.abrupt("return");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:if(e.prev=16,y.current){e.next=19;break}return e.abrupt("return");case 19:if(b(!1),0!==i){e.next=24;break}return e.abrupt("return");case 24:j((0,H.wE)(i,u));case 25:return e.finish(16);case 26:case"end":return e.stop()}}),e,null,[[4,13,16,26]])}))),600),A=function(e){k(e),s||(w(ue.jM.SOURCE),y.current=e,e&&0!==Number(e)?(b(!0),T()):(j(""),b(!1)))};return(0,c.useEffect)((function(){x&&m===ue.jM.SOURCE&&A(x)}),[]),(0,v.jsx)(te,{onMaxAmount:function(){return A(o)},isLoading:f,onChange:A,inputAmount:x,balance:p.srcBalance,token:n,balanceLoading:h,showMax:x!==o&&!!g})},he=t(45523),me=t(71545),ge=(0,m.Z)(y.Z)((function(e){var n=e.color,t=e.expanded;return{marginLeft:"auto",marginRight:"auto",width:t?33:28,height:t?33:28,marginTop:8,borderRadius:"50%",marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center","& svg":{width:"70%","& path":{fill:n}}}}));var ve=function(e){var n=e.icon,t=e.color,r=(0,F.Pt)();return(0,v.jsx)(ge,{color:t,expanded:r,children:n})},Ze=t(45022);var je=t.p+"static/media/success.79a5c2f6fcc496326c3a8261c4463432.svg";var ke=function(e){var n=e.actionType,t=(0,K.x)(),r=t.txConfirmation,i=t.txSuccess,a=(0,K.O)().closeSuccessModal,o=(0,S.$)().t,s=(0,c.useCallback)((function(){switch(n){case z.Us.BUY:return(0,v.jsxs)(be,{title:o("purchase-confirmation"),children:[(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("token-purchased",{token:r.tokenName})}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.destTokenAmount})})]}),(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("ton-paid")}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.srcTokenAmount})})]})]});case z.Us.SELL:return(0,v.jsxs)(be,{title:o("purchase-confirmation"),children:[(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("token-received",{token:r.tokenName})}),(0,v.jsxs)(T.Z,{children:[(0,v.jsx)(I.Z,{value:r.srcTokenAmount})," "]})]}),(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("ton-received")}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.destTokenAmount})})]})]});case z.Us.REMOVE_LIQUIDITY:return(0,v.jsxs)(be,{title:o("liquidity-removed"),children:[(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("ton-removed-pool")}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.srcTokenAmount})})]}),(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("token-removed-pool",{token:r.tokenName})}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.destTokenAmount})})]})]});case z.Us.ADD_LIQUIDITY:return(0,v.jsxs)(be,{title:o("liquidity-added"),children:[(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("ton-added-pool")}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.srcTokenAmount})})]}),(0,v.jsxs)(y.Z,{className:"row",children:[(0,v.jsx)(T.Z,{children:o("token-added-pool",{token:r.tokenName})}),(0,v.jsx)(T.Z,{children:(0,v.jsx)(I.Z,{value:r.destTokenAmount})})]})]});default:return(0,v.jsx)(v.Fragment,{})}}),[n,r]);return(0,v.jsx)(l.GI,{open:i,onClose:a,maxWidth:400,children:s()})};function be(e){var n=e.children,t=e.title;return(0,v.jsxs)(Te,{children:[(0,v.jsxs)(we,{children:[(0,v.jsx)("img",{src:je,className:"icon"}),(0,v.jsx)(T.Z,{children:t})]}),(0,v.jsx)(ye,{children:n})]})}var we=(0,m.Z)(y.Z)({display:"flex",alignItems:"center",gap:22,flexDirection:"column","& p":{fontSize:19,fontWeight:500},"& .icon":{width:45,height:45,objectFit:"contain"}}),ye=(0,m.Z)(y.Z)({display:"flex",flexDirection:"column",gap:13,width:"100%"}),Te=(0,m.Z)(y.Z)({display:"flex",flexDirection:"column",gap:19,alignItems:"center",width:"100%","& *":{color:"black"},"& .row":{display:"flex",gap:40,background:"#EEEEEE",borderRadius:12,minHeight:49,width:"100%",alignItems:"center",justifyContent:"space-between",padding:"10px 20px","& p":{fontSize:14}}});var Ae=function(e,n,t,r){var i=(0,K.x)(),a=i.totalBalances,o=i.srcTokenAmount,s=i.destTokenAmount,l=i.txPending;return(0,c.useMemo)((function(){var i=a.srcBalance,c=!o||"0"===o||!s||"0"===s||l,u=Number(n+.01).toFixed(2),d=!1;if(e===z.Us.BUY){var x=(0,H.xI)(a.srcBalance,t.decimals).sub((0,H.xI)(u));i=(0,H.wE)(x,9),d=(0,H.xI)(o,t.decimals).gt(x)}if(e===z.Us.SELL&&(d=(0,H.xI)(o,t.decimals).gt((0,H.xI)(a.srcBalance,t.decimals))),e===z.Us.ADD_LIQUIDITY){var p=(0,H.xI)(a.srcBalance,t.decimals).sub((0,H.xI)(u));i=(0,H.wE)(p,t.decimals);var f=(0,H.xI)(o,t.decimals).gt(p),h=(0,H.xI)(s,r.decimals).gt((0,H.xI)(a.destBalance,r.decimals));d=f||h}if(e===z.Us.REMOVE_LIQUIDITY){var m=(0,H.xI)(o,t.decimals).gt((0,H.xI)(a.srcBalance,t.decimals)),g=(0,H.xI)(s,r.decimals).gt((0,H.xI)(a.destBalance,r.decimals));d=m||g}return{insufficientFunds:!c&&d,disabled:c,maxAmount:i}}),[t,o,n,a,s,e])};var Ie=function(){var e=(0,K.x)().txError,n=(0,K.O)().hideTxError,t=(0,c.useState)(!1),o=(0,a.Z)(t,2),s=o[0],u=o[1];(0,c.useEffect)((function(){e&&u(!0)}),[e]);var d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.next=3,(0,H.gw)(500);case 3:n();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)(l.GI,{open:s,onClose:d,maxWidth:400,children:(0,v.jsxs)(Se,{children:[(0,v.jsx)("img",{src:"data:image/png;base64,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",className:"icon"}),(0,v.jsx)(T.Z,{children:e})]})})},Se=(0,m.Z)(y.Z)({p:{fontSize:19,fontWeight:500},display:"flex",flexDirection:"column",alignItems:"center",gap:22,img:{width:45,height:45,objectFit:"contain"}});var Ce=function(e,n){var t=(0,K.x)(),r=t.srcTokenAmount,i=t.destTokenAmount,a=t.selectedToken;return(0,c.useCallback)((function(){var t="";if(n===z.Us.BUY&&(t="Swapped ".concat(r," TON for ").concat(i," ").concat(null===a||void 0===a?void 0:a.name)),n===z.Us.SELL&&(t="Swapped ".concat(r," ").concat(null===a||void 0===a?void 0:a.name," for ").concat(i," TON")),n===z.Us.ADD_LIQUIDITY&&(t="Added ".concat(r," TON and ").concat(i," ").concat(null===a||void 0===a?void 0:a.name," liquidity")),n===z.Us.REMOVE_LIQUIDITY&&(t="Removed ".concat(r," TON and ").concat(i," ").concat(null===a||void 0===a?void 0:a.name," liquidity")),t)return W.Z.sendEvent(e,n,t)}),[e,n,r,i,a])},Ne=t(39736),Ee=t(47507),De=t(77696),Re=(0,s.ZP)(o.Z)({display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"space-between",textAlign:"center",backgroundColor:"white",color:"#000",width:250,gap:20,borderRadius:10});function Le(e){return e===z.ht.TON_HUB?"Please approve this transaction in your wallet app (Tonhub)":"Wallet App"}var Ue=function(e){var n=e.open,t=e.close,a=e.confirm,o=e.adapterId,s=((0,K.x)().srcTokenAmount,function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(),"https://tonhub.com/transfer",window.location.replace("https://tonhub.com/transfer"),t();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return(0,v.jsx)(Ne.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},backdropFilter:"blur(5px) "},open:n,children:(0,v.jsxs)(Re,{children:[(0,v.jsx)(T.Z,{sx:{p:1.5},children:Le(o)}),(0,v.jsx)(Ee.Z,{orientation:"horizontal",sx:{position:"relative",top:20},flexItem:!0}),(0,v.jsxs)(De.Z,{spacing:4,direction:"row",divider:(0,v.jsx)(Ee.Z,{orientation:"vertical",variant:"fullWidth",flexItem:!0}),children:[(0,v.jsx)(P.Z,{variant:"text",sx:{m:.8,position:"relative",left:6},onClick:t,children:"Cancel"}),(0,v.jsx)(P.Z,{variant:"text",sx:{m:.8,position:"relative",right:6},onClick:s,children:"Wallet App"})]})]})})},Fe=t(99581),Me=t(25514),Oe=function(e){var n=e.srcToken,t=e.destToken,s=e.submitButtonText,d=e.icon,p=e.getBalances,f=e.getAmountFunc,h=e.getTxRequest,m=e.refreshAmountsOnActionChange,g=e.actionCategory,Z=e.actionType,j=e.gasFee,k=e.disableInputDependency,b=e.onSuccess,w=(0,F.Pt)(),y=x({color:(null===n||void 0===n?void 0:n.color)||"",expanded:w}),T=(0,c.useState)(!1),A=(0,a.Z)(T,2),I=A[0],C=A[1],N=(0,c.useState)(""),E=(0,a.Z)(N,2),D=E[0],R=E[1],L=(0,K.x)(),U=L.txPending,M=L.srcTokenAmount,B=(0,F.mq)(),H=(0,O.X)(),P=H.address,Y=H.adapterId,G=H.session,q=Ce(g,Z),V=Ae(Z,j,n,t),J=V.insufficientFunds,Q=V.disabled,_=V.maxAmount,$=(0,K.O)(),ee=$.onResetAmounts,ne=$.getTokensBalance,te=$.resetTokensBalance,re=$.sendTransaction,ie=(0,S.$)().t,ae=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=e.sent,e.next=5,(0,X.GO)(X.Lp.openWalletFromAddress({source:Ze.Address.parse(P)}));case 5:return t=e.sent,e.next=8,he.z.requestTransaction(Y,G,n);case 8:return"string"==typeof(i=e.sent)&&(Fe.tq?window.location.href=i:R(i)),e.next=12,t();case 12:setTimeout((function(){null===b||void 0===b||b()}),7e3),R(""),q(),ee(),ne(p);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){P&&m?ne(p):P||te()}),[P]);function oe(){R("")}return(0,v.jsxs)(me.p7,{children:[(0,v.jsx)(Ie,{}),(0,v.jsx)(Ue,{open:I,adapterId:Y,close:function(){C(!1),R("")},confirm:ae}),function(){var e=(0,v.jsx)(l.GI,{open:!0,onClose:oe,children:(0,v.jsxs)(We,{children:[(0,v.jsx)("p",{children:"Please Scan using the QR code using TonKeeper"}),(0,v.jsx)(Me.QRCode,{logoOpacity:.5,ecLevel:"H",size:250,value:D})]})});return D&&!Fe.tq?e:null}(),(0,v.jsx)(ke,{actionType:Z}),(0,v.jsxs)(o.Z,{className:y.content,children:[(0,v.jsxs)(o.Z,{className:y.cards,style:{pointerEvents:U?"none":"all"},children:[(0,v.jsx)(fe,{token:n,getAmountFunc:f,destTokenName:t.tokenMinter,maxAmount:_,disableInputDependency:k,srcDecimals:n.decimals,destDecimals:t.decimals}),(0,v.jsx)(ve,{icon:d,color:t.color}),(0,v.jsx)(pe,{getAmountFunc:f,token:t,srcTokenName:n.tokenMinter,disableInputDependency:k,srcTokenAmount:M,actionType:Z,srcDecimals:n.decimals,destDecimals:t.decimals})]}),(0,v.jsx)(o.Z,{className:y.button,children:P?J?(0,v.jsxs)(l.Kk,{isDisabled:Q||J,onClick:function(){},children:[(0,v.jsx)(u.Z,{style:{color:"#7D7D7D",top:"-2px",position:"relative"}}),ie("insufficient-funds")]}):(0,v.jsx)(l.Kk,{isLoading:I||U,isDisabled:Q||J,onClick:function(){Y===z.ht.TON_HUB&&Fe.tq?C(!0):ae()},children:s}):(0,v.jsx)(l.Kk,{onClick:function(){B(),W.Z.connect()},children:ie("connect-wallet")})})]})]})},We=(0,s.ZP)(o.Z)({display:"flex",flexDirection:"column",alignItems:"center",position:"relative",overflow:"hidden",width:"fit-content"})},3789:function(e,n,t){t.d(n,{NX:function(){return s},wG:function(){return o}});var r=t(74165),i=t(15861),a=t(77563),o=(t(75),function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i){var o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!i){e.next=7;break}return e.next=4,a.wv(n);case 4:o=e.sent,e.next=10;break;case 7:return e.next=9,a.mN(n,t);case 9:o=e.sent;case 10:return e.abrupt("return",o);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","0");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n,t,r){return e.apply(this,arguments)}}()),s=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,t,i,a,o){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==i){e.next=7;break}return e.next=3,o(n,t,i,null!=a?a:null);case 3:return s=e.sent,e.abrupt("return",s);case 7:if(null==a){e.next=12;break}return e.next=10,o(n,t,i,a.toString());case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(n,t,r,i,a){return e.apply(this,arguments)}}()},30371:function(e,n,t){t.d(n,{n:function(){return ie}});var r=t(29439),i=t(62399),a=t(72305),o=t(4942),s=t(54958),c=t(39910),l=t(53754),u=t(6114),d=t(55204),x=(0,l.Z)((function(e){return{root:(0,o.Z)({textAlign:"center",width:"100%",paddingBottom:50},e.breakpoints.down("sm"),{paddingBottom:30}),lists:{},list:{},token:{},menu:{borderRadius:"10px",padding:15,transition:"0.1s all"}}})),p=(0,u.Z)(s.Z)({width:43,height:43}),f=(0,u.Z)(d.Z)({marginLeft:"auto",opacity:.6}),h=(0,u.Z)(d.Z)((function(e){return{overflow:"hidden",position:"relative",transition:"0.2s all",background:e.color,borderRadius:12,display:"flex",gap:14,alignItems:"center",justifyContent:"flex-start",padding:"8px 20px 8px 14px","& p":{fontSize:14,fontWeight:500,color:"white"}}})),m=((0,u.Z)(d.Z)({width:"100%",height:"100%",borderRadius:12,borderSpacing:"20px",borderStyle:"dashed",borderWidth:"1px",borderColor:"rgba(0,0,0, 0.2)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer"}),(0,u.Z)(c.Z)({marginTop:20,fontWeight:500,fontSize:14}),(0,u.Z)(d.Z)({display:"flex",flexDirection:"column",alignItems:"flex-start","& .symbol":{fontWeight:500,fontSize:17},"& .name":{fontSize:12,opacity:.6,fontWeight:400}})),g=t(71321),v=t(68963),Z=t(92066),j=t(17099),k=t(91691),b=t(55195),w=t(75859),y=function(e){var n=e.token,t=e.onSelect,r=x(),i=(0,k.Z)(n.tokenMinter,"1",0,n.isDisabled),a=i.loading,o=i.usd,s=(0,b.$)().t;return(0,w.jsxs)(h,{color:n.color,onClick:n.isDisabled?function(){}:t,className:r.token,style:{cursor:n.isDisabled?"":"pointer",opacity:n.isDisabled?.4:1},children:[n.image&&(0,w.jsx)(p,{src:n.image,alt:"token"}),(0,w.jsxs)(m,{children:[(0,w.jsxs)(c.Z,{className:"symbol",children:[n.displayName," ",n.isDisabled?s("coming-soon"):""]}),(0,w.jsx)(c.Z,{className:"name",children:n.name})]}),(0,w.jsx)(f,{children:a?(0,w.jsx)(j.Z,{borderRadius:"8px",width:40,height:20}):(0,w.jsx)(c.Z,{children:(0,w.jsx)(Z.Z,{prefix:"$",value:o,decimalScale:6})})})]})},T=t(74165),A=t(1413),I=t(15861),S=t(91478),C=t(18366),N=t(45022),E=t(84596),D=t(77563),R=t(45731),L=t(45948),U=t(24713),F=t(9354),M=t(51998),O=t(15942),W=t.n(O),B=t(21802),X=t(18062),z=(0,C.Z)(i.Z)({display:"flex",flex:1,alignItems:"center","& a":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",flex:1,paddingRight:30}}),K=function(e){var n=e.address,t=(0,X.Z)().showNotification,r=(0,b.$)().t;return(0,w.jsxs)(z,{className:"address",children:[(0,w.jsx)(F.Z,{href:"https://tonscan.org/address/".concat(n),target:"_blank",children:n}),(0,w.jsx)(W(),{text:n,onCopy:function(){t({message:(0,w.jsx)(w.Fragment,{children:r("address-copy")}),variant:"success",autoHideDuration:4e3})},children:(0,w.jsx)(M.Z,{sx:{padding:0},children:(0,w.jsx)(B.Z,{style:{color:"#50A7EA",width:20,height:20}})})})]})},H=t(94659),P=t(17464),Y=(0,C.Z)(d.Z)({maxWidth:"500px",width:"100%",height:"auto",background:"white",marginLeft:"auto",marginRight:"auto",padding:20,display:"flex",flexDirection:"column"}),G=((0,C.Z)(d.Z)({display:"flex",flexDirection:"column",gap:15,marginTop:30}),(0,C.Z)(c.Z)({fontSize:26,textAlign:"center",fontWeight:500,marginBottom:20})),q=(0,C.Z)(d.Z)({width:"100%",display:"flex",flexDirection:"column","& input":{}});var V=function(e){var n=e.open,t=e.onClose,i=(0,v.useState)(!1),o=(0,r.Z)(i,2),s=o[0],l=o[1],u=(0,v.useState)(),x=(0,r.Z)(u,2),p=x[0],f=x[1],h=(0,v.useState)(),m=(0,r.Z)(h,2),g=m[0],Z=m[1],j=(0,v.useState)(!1),k=(0,r.Z)(j,2),y=k[0],C=k[1],F=(0,v.useState)(""),M=(0,r.Z)(F,2),O=M[0],W=M[1],B=(0,X.Z)().showNotification,z=(0,P._)().addToken,V=(0,b.$)().t,re=function(){var e=(0,I.Z)((0,T.Z)().mark((function e(n){var t,r,i,a,o,s,c;return(0,T.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.value,W(t),48===t.length){e.next=4;break}return e.abrupt("return");case 4:e.prev=4,r=N.Address.parse(t),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(4),B({message:"Invalid address",variant:"error"}),e.abrupt("return");case 12:return e.prev=12,C(!0),e.next=16,(0,D.wl)(r);case 16:return i=e.sent,e.next=19,(0,R.J6)(t,0);case 19:if(a=e.sent,o=a.futureAddress,!(s=a.isDeployed)){e.next=27;break}return e.next=25,D.E3(o);case 25:c=e.sent,Z({tokenReserves:parseFloat((0,E.wE)(c.tokenReserves,i.decimals)).toFixed(2),tonReserves:parseFloat((0,E.wE)(c.tonReserves,9)).toFixed(2)});case 27:f((0,A.Z)((0,A.Z)({},i),{},{tokenMinter:t,ammMinter:o.toFriendly()})),l(s),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(12),console.log(e.t1);case 34:return e.prev=34,C(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,8],[12,31,34,37]])})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsxs)(a.GI,{open:n,onClose:t,children:[(0,w.jsx)(H.Z,{open:y,children:(0,w.jsx)(c.Z,{children:V("loading")})}),(0,w.jsxs)(Y,{children:[(0,w.jsx)(G,{children:V("add-custom-token")}),(0,w.jsx)(q,{children:(0,w.jsx)(S.Z,{label:V("jetton-address"),onChange:re,value:O})}),p&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(J,{children:[(0,w.jsx)(L.Z,{name:p.name.toUpperCase(),image:p.image}),(0,w.jsxs)(Q,{children:[(0,w.jsx)(_,{children:V("amm-minter")}),(0,w.jsx)(K,{address:p.ammMinter})]})]}),g&&(0,w.jsxs)(ee,{children:[(0,w.jsx)(_,{children:V("pool-reservers",{token:p.name.toUpperCase()})}),(0,w.jsxs)($,{children:[(0,w.jsxs)(ne,{children:[(0,w.jsx)(L.Z,{name:p.name.toUpperCase(),image:p.image}),(0,w.jsx)(te,{children:(0,E.jS)(g.tokenReserves)})]}),(0,w.jsxs)(ne,{children:[(0,w.jsx)(L.Z,{name:"TON",image:U.Z}),(0,w.jsx)(te,{children:(0,E.jS)(g.tonReserves)})]})]})]})]}),(0,w.jsx)(d.Z,{marginTop:"50px",children:(0,w.jsx)(a.Kk,{isDisabled:!s,onClick:function(){p&&function(e){try{var n={name:e.name,ammMinter:e.ammMinter,tokenMinter:e.tokenMinter,color:(0,E.mr)(),displayName:e.symbol.toUpperCase(),image:e.image,isCustom:!0,decimals:e.decimals};z(n),t()}catch(r){}}(p)},children:V("add-token")})})]})]})},J=(0,C.Z)(d.Z)({marginTop:30}),Q=(0,C.Z)(d.Z)({marginTop:20}),_=(0,C.Z)(c.Z)({fontSize:16,fontWeight:500,marginBottom:10}),$=(0,C.Z)(d.Z)({display:"flex",flexDirection:"column",gap:20}),ee=(0,C.Z)(d.Z)({marginTop:20}),ne=(0,C.Z)(d.Z)({display:"flex",alignItems:"center"}),te=(0,C.Z)(d.Z)({marginLeft:10}),re=t(19867),ie=function(e){var n=e.title,t=e.onTokenSelect,o=x(),s=(0,v.useState)(!1),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,re.O)().selectToken,p=(0,re.O)().clearStore,f=(0,P.u)().tokens;return(0,v.useEffect)((function(){d(void 0),p()}),[]),(0,w.jsx)(g.Z,{in:!0,timeout:300,children:(0,w.jsxs)(i.Z,{className:o.root,children:[(0,w.jsx)(V,{open:l,onClose:function(){return u(!1)}}),(0,w.jsx)(oe,{children:(0,w.jsx)(a.Dx,{children:n})}),(0,w.jsx)(i.Z,{className:o.lists,children:(0,w.jsx)(ae,{children:f.map((function(e){return(0,w.jsx)(y,{onSelect:function(){return t(e)},token:e},e.tokenMinter)}))})})]})})},ae=(0,u.Z)(i.Z)({display:"flex",flexDirection:"column",gap:11,maxWidth:380,marginLeft:"auto",marginRight:"auto",minHeight:300}),oe=(0,u.Z)(i.Z)({position:"sticky",top:54,background:"white",zIndex:1,paddingBottom:10})},17464:function(e,n,t){t.d(n,{_:function(){return s},u:function(){return o}});var r=t(68963),i=t(93431),a=t(79869);function o(){return(0,i.v9)((function(e){return e.tokens}))}var s=function(){var e=o().tokens,n=(0,i.I0)();return{addToken:(0,r.useCallback)((function(e){n((0,a.Z)(e))}),[n]),getTokenById:(0,r.useCallback)((function(n){return e.find((function(e){return e.tokenMinter===n}))}),[e])}}},68541:function(e,n,t){e.exports=t.p+"static/media/default-token-image.7f04508e9bb03b76f258.png"}}]);