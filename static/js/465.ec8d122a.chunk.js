"use strict";(self.webpackChunktonswap_web=self.webpackChunktonswap_web||[]).push([[465],{92066:function(e,n,t){var r=t(22112),o=t(75859);n.Z=function(e){var n=e.value,t=e.decimalScale,a=void 0===t?4:t,i=e.prefix;return n?(0,o.jsx)(r.Z,{prefix:i,displayType:"text",value:n,thousandSeparator:!0,decimalScale:a}):(0,o.jsx)(o.Fragment,{children:"0"})}},17099:function(e,n,t){var r=t(29016),o=t(75859);n.Z=function(e){var n=e.height,t=e.bgcolor,a=void 0===t?"rgba(255,255,255, 0.15)":t,i=e.variant,s=e.width,c=e.style,l=void 0===c?{}:c,u=e.borderRadius,d=void 0===u?6:u;return(0,o.jsx)(r.Z,{style:l,height:n,sx:{bgcolor:a,borderRadius:d},variant:i,width:s})}},94659:function(e,n,t){var r=t(56085),o=t(83509),a=t(54308),i=t(54276),s=t(55204),c=t(99581),l=t(75),u=t(39417),d=t(55195),x=t(75859),p=(0,a.ZP)(s.Z)({display:"flex",flexDirection:"column",alignItems:"center",gap:10});n.Z=function(e){var n=e.open,t=e.children,a=(0,u.X)().adapterId,s=(0,d.$)().t,f=!c.tq&&a===l.ht.TON_HUB;return(0,x.jsx)(r.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},backdropFilter:"blur(5px) "},open:n,children:(0,x.jsxs)(p,{children:[(0,x.jsx)(o.Z,{color:"inherit"}),t,f&&(0,x.jsx)(i.Z,{children:s("check-tonhub")})]})})}},30357:function(e,n,t){var r=t(29439),o=t(54276),a=t(6114),i=t(55204),s=t(68963),c=t(55195),l=t(19867),u=t(75859),d=(0,a.Z)(i.Z)({maxWidth:"320px",display:"flex",background:"rgba(118, 118, 128, 0.12)",borderRadius:8.91,height:32,marginLeft:"auto",marginRight:"auto",overflow:"auto",position:"relative",padding:2,width:"100%",marginTop:10,"::-webkit-scrollbar":{height:0,display:"none"}}),x=(0,a.Z)("a")({height:"100%",display:"flex",alignItems:"center",cursor:"pointer",zIndex:10,justifyContent:"center",p:{fontSize:13,pointerEvents:"none"}}),p=(0,a.Z)(i.Z)((function(e){return{transition:e.allowTransition?"0.2s all":"",position:"absolute",border:"0.5px solid rgba(0, 0, 0, 0.04)",boxShadow:" 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)",borderRadius:6.93,height:"calc(100% - 4px)",top:"50%",transform:"translate(0, -50%)",pointerEvents:"none",background:"white"}}));var f=function(e){var n=e.width,t=e.item,r=e.onSelect,a=e.selected,i=e.index,l=e.symbol,d=(0,c.$)().t;(0,s.useEffect)((function(){a&&r(i)}),[a]);return(0,u.jsx)(x,{style:{width:n},onClick:function(){a||t.method()},children:(0,u.jsx)(o.Z,{style:{fontWeight:500},children:d(t.text,{token:l})})})};n.Z=function(e){var n=e.items,t=e.action,o=e.symbol,a=(0,s.useState)(0),i=(0,r.Z)(a,2),c=i[0],x=i[1],h=(0,s.useState)(0),m=(0,r.Z)(h,2),g=m[0],Z=m[1],v=(0,s.useState)(!1),j=(0,r.Z)(v,2),k=j[0],b=j[1],w=(0,s.useRef)(),y=(0,s.useRef)(!0),T=(0,l.x)(),A=T.srcLoading,I=T.destLoading,S=T.txPending,C=function(e){if(y.current){var t=w.current.getBoundingClientRect().width/n.length-2;x(t*e+2),Z(t)}};(0,s.useEffect)((function(){return function(){y.current=!1}}),[]),(0,s.useEffect)((function(){k||setTimeout((function(){b(!0)}),500)}),[c]);var N=A||I||S;return(0,u.jsxs)(d,{ref:w,style:{pointerEvents:N?"none":"all"},children:[(0,u.jsx)(p,{allowTransition:k,style:{left:"".concat(c,"px"),width:"".concat(g,"px")}}),n.map((function(e,r){var a=t===e.text.toLowerCase();return(0,u.jsx)(f,{symbol:o,onSelect:C,selected:a,index:r,item:e,width:"calc(100% / ".concat(n.length,")")},e.text)}))]})}},45948:function(e,n,t){var r=t(37122),o=t(54276),a=t(18366),i=t(68541),s=t(75859),c=(0,a.Z)(r.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center","& .token-name":{fontSize:14,fontWeight:600,marginLeft:10},"& .token-image":{width:20,height:20,objectFit:"contain"}});n.Z=function(e){var n=e.image,t=e.name;return(0,s.jsxs)(c,{className:"token-preview",children:[(0,s.jsx)("img",{className:"token-image",src:n||i}),(0,s.jsx)(o.Z,{className:"token-name",children:t.toUpperCase()})]})}},18062:function(e,n,t){var r=t(68963),o=t(42247),a=t(54308),i=t(83227),s=t(55204),c=t(97719),l=t(75859),u=(0,a.ZP)(s.Z)({"& &":{color:"white"},"& a":{color:"white"}});n.Z=function(){var e=(0,o.Ds)(),n=e.enqueueSnackbar,t=e.closeSnackbar;return{showNotification:(0,r.useCallback)((function(e){var r=e.message,o=e.variant,a=e.onClose,s=e.autoHideDuration,d=e.anchorOrigin,x=e.className,p=void 0===x?"":x,f=n((0,l.jsx)(u,{children:r}),{className:p,anchorOrigin:d,variant:o,autoHideDuration:s||5e3,onClose:a,onClick:function(){return t(f)},action:function(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)(c.Z,{style:{width:20,height:20}})})}})}),[t,n])}}},84672:function(e,n,t){var r=t(68963),o=t(79711),a=t(80124),i=t(19867),s=t(17464),c=t(18740);n.Z=function(){var e=(0,o.UO)().id,n=(0,s._)().getTokenById,t=(0,i.O)().selectToken,l=(0,c.Z)();(0,r.useEffect)((function(){if(e){var r=n(e);r?t(r):l(a.Z.swap.navigateToTokens)}}),[e,l])}},91691:function(e,n,t){var r=t(74165),o=t(15861),a=t(29439),i=t(68963),s=t(3789);n.Z=function(e,n,t,c){var l=(0,i.useState)("0"),u=(0,a.Z)(l,2),d=u[0],x=u[1],p=(0,i.useState)(!1),f=(0,a.Z)(p,2),h=f[0],m=f[1],g=t&&t>0?t:300,Z=(0,i.useRef)();return(0,i.useEffect)((function(){if(clearTimeout(Z.current),!n||"0"===n)return m(!1),void x("0");m(!0),Z.current=setTimeout((function(){(0,o.Z)((0,r.Z)().mark((function t(){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.wG)(e,n,c);case 3:o=t.sent,x(o),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.prev=9,m(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,7,9,12]])})))()}),g)}),[e,n,g]),{usd:d,loading:h}}},63317:function(e,n,t){t.d(n,{Z:function(){return Le}});var r=t(74165),o=t(15861),a=t(29439),i=t(37122),s=t(68963),c=t(42200),l=t(80149),u=t(4942),d=(0,t(53754).Z)((function(e){return{content:{flex:1,display:"flex",flexDirection:"column",width:"100%"},cards:{},button:(0,u.Z)({marginTop:"auto",width:"100%",marginBottom:30},e.breakpoints.down("sm"),{})}})),x=t(12358),p=t(22112),f=t(17099),h=t(6114),m=t(71451),g=t(75859),Z=(0,h.Z)(i.Z)({height:"100%",width:"100%",position:"relative",display:"flex",alignItems:"center","& .MuiOutlinedInput-notchedOutline":{border:"none"}}),v=(0,h.Z)(i.Z)({position:"absolute",left:15,top:"50%",transform:"translate(0, -50%)"});function j(e){var n=e.value,t=e.onChange,r=e.isLoading,o=e.placeholder;return(0,g.jsxs)(Z,{className:"input-container",children:[r&&(0,g.jsx)(v,{children:(0,g.jsx)(f.Z,{width:140,height:30,borderRadius:3})}),(0,g.jsx)(p.Z,{inputProps:{sx:{padding:0,border:"none",textIndent:"16px",background:"transparent"},inputMode:"decimal"},className:"input",placeholder:r?"":o,autoComplete:"off",value:r?"":n||"",customInput:x.Z,decimalScale:m.dg,decimalSeparator:".",thousandSeparator:",",onValueChange:function(e,n){var r=e.value;"prop"!==n.source&&(console.log(r),t("."===r?"0.":r))}})]})}var k=t(80124),b=(t(24713).Z,"ton"),w=t(55204),y=t(54276),T=t(96654),A=t(92066),I=t(55195),S=(0,h.Z)(w.Z)({height:"100%",display:"flex",alignItems:"center",gap:5,marginRight:12}),C=(0,h.Z)("button")({background:"rgba(255,255,255, 0.1)",padding:"0px 10px",borderRadius:10,height:"100%",cursor:"pointer",p:{color:"white",fontSize:12,fontWeight:500}});var N=function(e){var n=e.loading,t=e.availableAmount,r=e.onMaxAmountClick,o=e.showMax,a=(0,I.$)().t;return(0,g.jsx)(S,{children:n?(0,g.jsx)(f.Z,{width:40,height:15,borderRadius:"4px"}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(y.Z,{component:"p",textAlign:"right",children:[(0,g.jsx)("strong",{children:"".concat(a("balance"),": ")}),(0,g.jsx)(A.Z,{value:t})]}),o&&r&&(0,g.jsx)(C,{onClick:r,children:(0,g.jsxs)(y.Z,{children:[" ",a("max")]})})]})})},E=t(91691),R=(0,h.Z)(w.Z)({height:"100%"});var D=function(e){var n=e.tokenId,t=e.value,r=e.isLoading,o=(0,E.Z)(n,t),a=o.loading,i=o.usd;return(0,g.jsx)(R,{children:r||a?(0,g.jsx)(f.Z,{width:40,height:"15px",borderRadius:"4px"}):(0,g.jsxs)(y.Z,{component:"p",children:["~$",(0,g.jsx)(A.Z,{value:i,decimalScale:5})]})})},U=t(18740),L=t(74650),M=t(88027),O=t(39417),F=t(94361),W=t(96193),B=t(77563),X=t(75),K=t(19867),z=t(45022),H=t(54308),P=t(96421),Y=t(3109),G=t(48604),q=(0,H.ZP)(i.Z)({display:"flex",flexDirection:"row",justifyContent:"baseline",position:"relative",top:8,left:8}),V=(0,H.ZP)(i.Z)({position:"relative",bottom:2,color:"white"}),J=function(e){var n=e.show,t=e.changeShow,r=(0,I.$)().t;return(0,g.jsx)(P.Z,{onClick:t,children:(0,g.jsxs)(q,{onClick:t,children:[(0,g.jsx)(y.Z,{children:r(n?"less-info":"more-info")}),(0,g.jsx)(V,{children:n?(0,g.jsx)(Y.Z,{}):(0,g.jsx)(G.Z,{})})]})})},Q=(0,H.ZP)(i.Z)({display:"flex",flexDirection:"row",justifyContent:"space-between"}),_=function(e){var n=e.title,t=e.value;return(0,g.jsxs)(Q,{children:[(0,g.jsx)(y.Z,{component:"p",textAlign:"left",children:n}),(0,g.jsx)(y.Z,{component:"p",textAlign:"right",children:t})]})},$=(0,h.Z)(w.Z)({borderRadius:12,paddingRight:12,display:"flex",position:"relative",overflow:"hidden",flexDirection:"column"}),ee=function(e){var n=e.delta,t=e.actionType,i=(0,I.$)().t,c=(0,K.x)().selectedToken,l=(0,s.useState)(),u=(0,a.Z)(l,2),d=u[0],x=u[1],p=(0,s.useState)(!1),f=(0,a.Z)(p,2),h=f[0],m=f[1],Z=function(e){var n=e.X,t=e.gamma,r=e.deltaX;return(100*((n*(1-t)+r*t)/(n+r*t))).toFixed(2)},v=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(o){var a,i,s,c,l,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=14;break}return e.next=3,B.kI(null===o||void 0===o?void 0:o.tokenMinter);case 3:a=e.sent,i=Number(n),s=t===X.Us.BUY?parseFloat((0,z.fromNano)(a.tonReserves)):parseFloat((0,z.fromNano)(a.tokenReserves)),.003,.997,c=B.et.SWAP,.005,l=Z({X:s,gamma:.997,deltaX:i}),u=.3.toFixed(2),d=.5.toFixed(2),x({tradeFee:u,gasFee:c,slippage:d,impact:l});case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){v(c)}),[n]),(0,g.jsxs)($,{className:"swap-card",children:[(0,g.jsx)(J,{show:h,changeShow:function(){m(!h)}}),(0,g.jsxs)(W.Z,{orientation:"vertical",in:h,children:[(0,g.jsx)(_,{title:i("gas-fee"),value:"".concat(null===d||void 0===d?void 0:d.gasFee," TON")}),(0,g.jsx)(_,{title:i("trade-fee"),value:"".concat(null===d||void 0===d?void 0:d.tradeFee,"%")}),(0,g.jsx)(_,{title:i("max-slippage"),value:"".concat(null===d||void 0===d?void 0:d.slippage,"%")}),(0,g.jsx)(_,{title:i("price-impact"),value:"".concat(null===d||void 0===d?void 0:d.impact,"%")})]})]})};var ne=function(e){var n=e.inputAmount,t=e.onChange,r=e.token,o=e.isLoading,a=e.balanceLoading,i=e.balance,s=e.onMaxAmount,c=e.showMax,l=e.srcTokenAmount,u=e.actionType,d=(0,L.Pt)(),x=(0,U.Z)(),p=(0,L.sy)().operationType,f=(0,O.X)().address,h=r.name===b;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(te,{className:"swap-card",children:[(0,g.jsx)(ce,{color:r.color}),(0,g.jsxs)("div",{style:{position:"relative"},children:[(0,g.jsxs)(se,{expanded:d,children:[(0,g.jsx)(j,{placeholder:"0",isLoading:o,value:n,onChange:function(e){return t(e)}}),(0,g.jsxs)(re,{style:{cursor:h?"":"pointer",userSelect:h?"none":"all"},onClick:function(){h||(p===M.C8.SWAP?(F.Z.changeTokenInTrade(r.name),x(k.Z.swap.navigateToTokens)):(F.Z.changeTokenInManageLiquidity(r.name),x(k.Z.manageLiquidity.navigateToTokens)))},children:[r.image&&(0,g.jsx)(oe,{src:r.image,alt:"token"}),(0,g.jsx)(y.Z,{className:"name",children:r.displayName}),!h&&(0,g.jsx)("div",{className:"arrow"})]})]}),(0,g.jsx)(ae,{children:f&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(D,{isLoading:o,value:n,tokenId:r.tokenMinter}),(0,g.jsx)(N,{availableAmount:i,displayName:r.displayName,loading:a,onMaxAmountClick:function(){F.Z.onMaxClick(),null===s||void 0===s||s()},showMax:c})]})})]}),l&&(u===X.Us.BUY||u===X.Us.SELL)&&(0,g.jsx)(ie,{children:(0,g.jsx)(ee,{delta:l,actionType:u})})]})})},te=(0,h.Z)(w.Z)({borderRadius:12,padding:"18px",display:"flex",position:"relative",overflow:"hidden",flexDirection:"column"}),re=(0,h.Z)(w.Z)({padding:"0px 8px",display:"flex",alignItems:"center",gap:10,position:"relative",background:"rgba(255,255,255, 0.1)",borderRadius:12,height:"100%",boxShadow:"rgb(0 0 0 / 8%) 0px 6px 10px",".name":{maxWidth:70,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},".arrow":{width:7,height:7,borderLeft:"2px solid white",borderBottom:"2px solid white",transform:"rotate(-45deg)",position:"relative",top:"-2px"},p:{color:"white",fontSize:12,fontWeight:600}}),oe=(0,h.Z)(T.Z)({width:24,height:24}),ae=(0,h.Z)(w.Z)({display:"flex",justifyContent:"space-between",alignItems:"center",height:25,marginTop:10,p:{color:"white",fontSize:12,fontWeight:400}}),ie=(0,h.Z)(w.Z)({alignItems:"center",position:"relative",p:{color:"white",fontSize:12,fontWeight:400}}),se=(0,h.Z)(w.Z)((function(e){var n=e.expanded;return{paddingRight:10,position:"relative",background:"rgba(255,255,255, 0.1)",width:"100%",borderRadius:"12px",display:"flex",alignItems:"center",height:n?54:42,padding:n?10:5,".input-container":{width:"100%",height:"100%",input:{color:"white",fontSize:29,fontWeight:600,height:"100%",paddingRight:10,textIndent:5}}}})),ce=(0,h.Z)(w.Z)((function(e){return{background:e.color,width:"100%",position:"absolute",height:"100%",left:0,top:0,pointerEvents:"none",opacity:.93}})),le=t(90021),ue=t(9792),de=t(3789);var xe=function(e){var n=e.token,t=e.srcTokenName,a=e.getAmountFunc,i=e.disableInputDependency,c=e.srcTokenAmount,l=e.actionType,u=(0,K.x)(),d=u.destTokenAmount,x=u.totalBalances,p=u.destLoading,f=u.destAvailableAmountLoading,h=u.inInput,m=(0,K.O)(),Z=m.updateDestTokenAmount,v=m.updateSrcTokenAmount,j=m.updateSrcTokenLoading,k=m.onInputChange,b=(0,s.useRef)(""),w=(0,ue.Z)((0,o.Z)((0,r.Z)().mark((function e(){var o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.current){e.next=2;break}return e.abrupt("return");case 2:return o=0,i="ton"===t?n.tokenMinter:t,e.prev=4,e.next=7,(0,de.NX)(i,"ton"!==t,null,(0,z.toNano)(b.current||"0"),a);case 7:if(o=e.sent,b.current){e.next=10;break}return e.abrupt("return");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:if(e.prev=15,b.current){e.next=18;break}return e.abrupt("return");case 18:if(j(!1),0!==o){e.next=23;break}return e.abrupt("return");case 23:v((0,z.fromNano)(o));case 24:return e.finish(15);case 25:case"end":return e.stop()}}),e,null,[[4,12,15,25]])}))),600),y=function(e){Z(e),i||(k(le.jM.DEST),b.current=e,e?(j(!0),w()):(j(!1),v("")))};return(0,s.useEffect)((function(){d&&h===le.jM.DEST&&y(d)}),[]),(0,g.jsx)("div",{style:{marginBottom:35},children:(0,g.jsx)(ne,{isLoading:p,onChange:y,inputAmount:d,token:n,balance:x.destBalance,balanceLoading:f,srcTokenAmount:c,actionType:l})})},pe=function(e){var n=e.token,t=e.getAmountFunc,a=e.destTokenName,i=e.maxAmount,c=e.disableInputDependency,l=(0,K.x)(),u=l.srcTokenAmount,d=l.totalBalances,x=l.srcLoading,p=l.srcAvailableAmountLoading,f=l.inInput,h=(0,O.X)().address,m=(0,K.O)(),Z=m.updateDestTokenAmount,v=m.updateSrcTokenAmount,j=m.updateDestTokenLoading,k=m.onInputChange,b=(0,s.useRef)(""),w=(0,ue.Z)((0,o.Z)((0,r.Z)().mark((function e(){var o,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.current){e.next=2;break}return e.abrupt("return");case 2:return o=0,i="ton"===n.name?a:n.tokenMinter,e.prev=4,e.next=7,(0,de.NX)(i,"ton"!==n.name,(0,z.toNano)(b.current||"0"),null,t);case 7:if(o=e.sent,b.current){e.next=10;break}return e.abrupt("return");case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:if(e.prev=15,b.current){e.next=18;break}return e.abrupt("return");case 18:if(j(!1),0!==o){e.next=23;break}return e.abrupt("return");case 23:Z((0,z.fromNano)(o));case 24:return e.finish(15);case 25:case"end":return e.stop()}}),e,null,[[4,12,15,25]])}))),600),y=function(e){v(e),c||(k(le.jM.SOURCE),b.current=e,e&&0!==Number(e)?(j(!0),w()):(Z(""),j(!1)))};return(0,s.useEffect)((function(){u&&f===le.jM.SOURCE&&y(u)}),[]),(0,g.jsx)(ne,{onMaxAmount:function(){return y(i)},isLoading:x,onChange:y,inputAmount:u,balance:d.srcBalance,token:n,balanceLoading:p,showMax:u!==i&&!!h})},fe=t(47079),he=t(71545),me=(0,h.Z)(w.Z)((function(e){var n=e.color,t=e.expanded;return{marginLeft:"auto",marginRight:"auto",width:t?33:28,height:t?33:28,marginTop:8,borderRadius:"50%",marginBottom:8,display:"flex",alignItems:"center",justifyContent:"center","& svg":{width:"70%","& path":{fill:n}}}}));var ge=function(e){var n=e.icon,t=e.color,r=(0,L.Pt)();return(0,g.jsx)(me,{color:t,expanded:r,children:n})};var Ze=t.p+"static/media/success.79a5c2f6fcc496326c3a8261c4463432.svg";var ve=function(e){var n=e.actionType,t=(0,K.x)(),r=t.txConfirmation,o=t.txSuccess,a=(0,K.O)().closeSuccessModal,i=(0,I.$)().t,l=(0,s.useCallback)((function(){switch(n){case X.Us.BUY:return(0,g.jsxs)(je,{title:i("purchase-confirmation"),children:[(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("token-purchased",{token:r.tokenName})}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.destTokenAmount})})]}),(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("ton-paid")}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.srcTokenAmount})})]})]});case X.Us.SELL:return(0,g.jsxs)(je,{title:i("purchase-confirmation"),children:[(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("token-received",{token:r.tokenName})}),(0,g.jsxs)(y.Z,{children:[(0,g.jsx)(A.Z,{value:r.srcTokenAmount})," "]})]}),(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("ton-received")}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.destTokenAmount})})]})]});case X.Us.REMOVE_LIQUIDITY:return(0,g.jsxs)(je,{title:i("liquidity-removed"),children:[(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("ton-removed-pool")}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.srcTokenAmount})})]}),(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("token-removed-pool",{token:r.tokenName})}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.destTokenAmount})})]})]});case X.Us.ADD_LIQUIDITY:return(0,g.jsxs)(je,{title:i("liquidity-added"),children:[(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("ton-added-pool")}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.srcTokenAmount})})]}),(0,g.jsxs)(w.Z,{className:"row",children:[(0,g.jsx)(y.Z,{children:i("token-added-pool",{token:r.tokenName})}),(0,g.jsx)(y.Z,{children:(0,g.jsx)(A.Z,{value:r.destTokenAmount})})]})]});default:return(0,g.jsx)(g.Fragment,{})}}),[n,r]);return(0,g.jsx)(c.GI,{open:o,onClose:a,maxWidth:400,children:l()})};function je(e){var n=e.children,t=e.title;return(0,g.jsxs)(we,{children:[(0,g.jsxs)(ke,{children:[(0,g.jsx)("img",{src:Ze,className:"icon"}),(0,g.jsx)(y.Z,{children:t})]}),(0,g.jsx)(be,{children:n})]})}var ke=(0,h.Z)(w.Z)({display:"flex",alignItems:"center",gap:22,flexDirection:"column","& p":{fontSize:19,fontWeight:500},"& .icon":{width:45,height:45,objectFit:"contain"}}),be=(0,h.Z)(w.Z)({display:"flex",flexDirection:"column",gap:13,width:"100%"}),we=(0,h.Z)(w.Z)({display:"flex",flexDirection:"column",gap:19,alignItems:"center",width:"100%","& *":{color:"black"},"& .row":{display:"flex",gap:40,background:"#EEEEEE",borderRadius:12,minHeight:49,width:"100%",alignItems:"center",justifyContent:"space-between",padding:"10px 20px","& p":{fontSize:14}}}),ye=t(5922);var Te=function(e,n,t){var r=(0,K.x)(),o=r.totalBalances,a=r.srcTokenAmount,i=r.destTokenAmount,c=r.txPending;return(0,s.useMemo)((function(){var t=o.srcBalance,r=!a||"0"===a||!i||"0"===i||c,s=Number(n+.01).toFixed(2),l=!1;if(e===X.Us.BUY){var u=(0,ye.xI)(o.srcBalance).sub((0,ye.xI)(s));t=(0,z.fromNano)(u),l=(0,ye.xI)(a).gt(u)}if(e===X.Us.SELL&&(l=(0,ye.xI)(a).gt((0,ye.xI)(o.srcBalance))),e===X.Us.ADD_LIQUIDITY){var d=(0,ye.xI)(o.srcBalance).sub((0,ye.xI)(s));t=(0,z.fromNano)(d);var x=(0,ye.xI)(a).gt(d),p=(0,ye.xI)(i).gt((0,ye.xI)(o.destBalance));l=x||p}if(e===X.Us.REMOVE_LIQUIDITY){var f=(0,ye.xI)(a).gt((0,ye.xI)(o.destBalance)),h=(0,ye.xI)(i).gt((0,ye.xI)(o.destBalance));l=f||h}return{insufficientFunds:!r&&l,disabled:r,maxAmount:t}}),[t,a,n,o,i,e])};var Ae=function(){var e=(0,K.x)().txError,n=(0,K.O)().hideTxError,t=(0,s.useState)(!1),i=(0,a.Z)(t,2),l=i[0],u=i[1];(0,s.useEffect)((function(){e&&u(!0)}),[e]);var d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.next=3,(0,ye.gw)(500);case 3:n();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsx)(c.GI,{open:l,onClose:d,maxWidth:400,children:(0,g.jsxs)(Ie,{children:[(0,g.jsx)("img",{src:"data:image/png;base64,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",className:"icon"}),(0,g.jsx)(y.Z,{children:e})]})})},Ie=(0,h.Z)(w.Z)({p:{fontSize:19,fontWeight:500},display:"flex",flexDirection:"column",alignItems:"center",gap:22,img:{width:45,height:45,objectFit:"contain"}});var Se=function(e,n){var t=(0,K.x)(),r=t.srcTokenAmount,o=t.destTokenAmount,a=t.selectedToken;return(0,s.useCallback)((function(){var t="";if(n===X.Us.BUY&&(t="Swapped ".concat(r," TON for ").concat(o," ").concat(null===a||void 0===a?void 0:a.name)),n===X.Us.SELL&&(t="Swapped ".concat(r," ").concat(null===a||void 0===a?void 0:a.name," for ").concat(o," TON")),n===X.Us.ADD_LIQUIDITY&&(t="Added ".concat(r," TON and ").concat(o," ").concat(null===a||void 0===a?void 0:a.name," liquidity")),n===X.Us.REMOVE_LIQUIDITY&&(t="Removed ".concat(r," TON and ").concat(o," ").concat(null===a||void 0===a?void 0:a.name," liquidity")),t)return F.Z.sendEvent(e,n,t)}),[e,n,r,o,a])},Ce=t(56085),Ne=t(7913),Ee=t(9639),Re=(0,H.ZP)(i.Z)({display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"space-between",textAlign:"center",backgroundColor:"white",color:"#000",width:250,gap:20,borderRadius:10});function De(e){return e===X.ht.TON_HUB?"Please approve this transaction in your wallet app (Tonhub)":"Wallet App"}var Ue=function(e){var n=e.open,t=e.close,a=e.confirm,i=e.getTxRequest,s=e.adapterId,c=(0,K.x)().srcTokenAmount,l=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(),e.next=3,i();case 3:n=e.sent,o="https://tonhub.com/transfer/".concat(n.to,"?amount=").concat(c),window.location.replace(o),t();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,g.jsx)(Ce.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1},backdropFilter:"blur(5px) "},open:n,children:(0,g.jsxs)(Re,{children:[(0,g.jsx)(y.Z,{sx:{p:1.5},children:De(s)}),(0,g.jsx)(Ne.Z,{orientation:"horizontal",sx:{position:"relative",top:20},flexItem:!0}),(0,g.jsxs)(Ee.Z,{spacing:4,direction:"row",divider:(0,g.jsx)(Ne.Z,{orientation:"vertical",variant:"fullWidth",flexItem:!0}),children:[(0,g.jsx)(P.Z,{variant:"text",sx:{m:.8,position:"relative",left:6},onClick:t,children:"Cancel"}),(0,g.jsx)(P.Z,{variant:"text",sx:{m:.8,position:"relative",right:6},onClick:l,children:"Wallet App"})]})]})})},Le=function(e){var n=e.srcToken,t=e.destToken,u=e.submitButtonText,x=e.icon,p=e.getBalances,f=e.getAmountFunc,h=e.getTxRequest,m=e.refreshAmountsOnActionChange,Z=e.actionCategory,v=e.actionType,j=e.gasFee,k=e.disableInputDependency,b=(0,L.Pt)(),w=d({color:(null===n||void 0===n?void 0:n.color)||"",expanded:b}),y=(0,s.useState)(!1),T=(0,a.Z)(y,2),A=T[0],S=T[1],C=(0,K.x)(),N=C.txPending,E=C.srcTokenAmount,R=(0,L.mq)(),D=(0,O.X)(),U=D.address,M=D.adapterId,W=D.session,H=Se(Z,v),P=Te(v,j,n),Y=P.insufficientFunds,G=P.disabled,q=P.maxAmount,V=(0,K.O)(),J=V.onResetAmounts,Q=V.getTokensBalance,_=V.resetTokensBalance,$=V.sendTransaction,ee=(0,I.$)().t;var ne=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=e.sent,e.next=5,(0,B.GO)(B.Lp.openWalletFromAddress({source:z.Address.parse(U)}));case 5:return t=e.sent,e.next=8,fe.z.requestTransaction(M,W,n);case 8:return e.next=10,t();case 10:H(),J(),Q(p);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){U&&m?Q(p):U||_()}),[U]);return(0,g.jsxs)(he.p7,{children:[(0,g.jsx)(Ae,{}),(0,g.jsx)(Ue,{open:A,adapterId:M,close:function(){S(!1)},confirm:ne,getTxRequest:h}),(0,g.jsx)(ve,{actionType:v}),(0,g.jsxs)(i.Z,{className:w.content,children:[(0,g.jsxs)(i.Z,{className:w.cards,style:{pointerEvents:N?"none":"all"},children:[(0,g.jsx)(pe,{token:n,getAmountFunc:f,destTokenName:t.tokenMinter,maxAmount:q,disableInputDependency:k}),(0,g.jsx)(ge,{icon:x,color:t.color}),(0,g.jsx)(xe,{getAmountFunc:f,token:t,srcTokenName:n.tokenMinter,disableInputDependency:k,srcTokenAmount:E,actionType:v})]}),(0,g.jsx)(i.Z,{className:w.button,children:U?Y?(0,g.jsxs)(c.Kk,{isDisabled:G||Y,onClick:function(){},children:[(0,g.jsx)(l.Z,{style:{color:"#7D7D7D",top:"-2px",position:"relative"}}),ee("insufficient-funds")]}):(0,g.jsx)(c.Kk,{isLoading:A||N,isDisabled:G||Y,onClick:function(){M===X.ht.TON_HUB?S(!0):ne()},children:u}):(0,g.jsx)(c.Kk,{onClick:function(){R(),F.Z.connect()},children:ee("connect-wallet")})})]})]})}},3789:function(e,n,t){t.d(n,{NX:function(){return s},wG:function(){return i}});var r=t(74165),o=t(15861),a=t(77563),i=(t(75),function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t,o){var i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!o){e.next=7;break}return e.next=4,a.wv(n);case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,a.mN(n,t);case 9:i=e.sent;case 10:return e.abrupt("return",i);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","0");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n,t,r){return e.apply(this,arguments)}}()),s=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n,t,o,a,i){var s,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==o){e.next=7;break}return e.next=3,i(n,t,o,null!=a?a:null);case 3:return s=e.sent,e.abrupt("return",s);case 7:if(null==a){e.next=12;break}return e.next=10,i(n,t,o,a.toString());case 10:return c=e.sent,e.abrupt("return",c);case 12:case"end":return e.stop()}}),e)})));return function(n,t,r,o,a){return e.apply(this,arguments)}}()},30371:function(e,n,t){t.d(n,{n:function(){return oe}});var r=t(29439),o=t(37122),a=t(42200),i=t(4942),s=t(96654),c=t(54276),l=t(53754),u=t(6114),d=t(55204),x=(0,l.Z)((function(e){return{root:(0,i.Z)({textAlign:"center",width:"100%",paddingBottom:50},e.breakpoints.down("sm"),{paddingBottom:30}),lists:{},list:{},token:{},menu:{borderRadius:"10px",padding:15,transition:"0.1s all"}}})),p=(0,u.Z)(s.Z)({width:43,height:43}),f=(0,u.Z)(d.Z)({marginLeft:"auto",opacity:.6}),h=(0,u.Z)(d.Z)((function(e){return{overflow:"hidden",position:"relative",transition:"0.2s all",background:e.color,borderRadius:12,display:"flex",gap:14,alignItems:"center",justifyContent:"flex-start",padding:"8px 20px 8px 14px","& p":{fontSize:14,fontWeight:500,color:"white"}}})),m=((0,u.Z)(d.Z)({width:"100%",height:"100%",borderRadius:12,borderSpacing:"20px",borderStyle:"dashed",borderWidth:"1px",borderColor:"rgba(0,0,0, 0.2)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer"}),(0,u.Z)(c.Z)({marginTop:20,fontWeight:500,fontSize:14}),(0,u.Z)(d.Z)({display:"flex",flexDirection:"column",alignItems:"flex-start","& .symbol":{fontWeight:500,fontSize:17},"& .name":{fontSize:12,opacity:.6,fontWeight:400}})),g=t(75464),Z=t(68963),v=t(92066),j=t(17099),k=t(91691),b=t(55195),w=t(75859),y=function(e){var n=e.token,t=e.onSelect,r=x(),o=(0,k.Z)(n.tokenMinter,"1",0,n.isDisabled),a=o.loading,i=o.usd,s=(0,b.$)().t;return(0,w.jsxs)(h,{color:n.color,onClick:n.isDisabled?function(){}:t,className:r.token,style:{cursor:n.isDisabled?"":"pointer",opacity:n.isDisabled?.4:1},children:[n.image&&(0,w.jsx)(p,{src:n.image,alt:"token"}),(0,w.jsxs)(m,{children:[(0,w.jsxs)(c.Z,{className:"symbol",children:[n.displayName," ",n.isDisabled?s("coming-soon"):""]}),(0,w.jsx)(c.Z,{className:"name",children:n.name})]}),(0,w.jsx)(f,{children:a?(0,w.jsx)(j.Z,{borderRadius:"8px",width:40,height:20}):(0,w.jsx)(c.Z,{children:(0,w.jsx)(v.Z,{prefix:"$",value:i,decimalScale:7})})})]})},T=t(74165),A=t(1413),I=t(15861),S=t(12358),C=t(18366),N=t(45022),E=t(5922),R=t(77563),D=t(45731),U=t(45948),L=t(24713),M=t(33507),O=t(83227),F=t(15942),W=t.n(F),B=t(21802),X=t(18062),K=(0,C.Z)(o.Z)({display:"flex",flex:1,alignItems:"center","& a":{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",flex:1,paddingRight:30}}),z=function(e){var n=e.address,t=(0,X.Z)().showNotification,r=(0,b.$)().t;return(0,w.jsxs)(K,{className:"address",children:[(0,w.jsx)(M.Z,{href:"https://tonscan.org/address/".concat(n),target:"_blank",children:n}),(0,w.jsx)(W(),{text:n,onCopy:function(){t({message:(0,w.jsx)(w.Fragment,{children:r("address-copy")}),variant:"success",autoHideDuration:4e3})},children:(0,w.jsx)(O.Z,{sx:{padding:0},children:(0,w.jsx)(B.Z,{style:{color:"#50A7EA",width:20,height:20}})})})]})},H=t(94659),P=t(17464),Y=(0,C.Z)(d.Z)({maxWidth:"500px",width:"100%",height:"auto",background:"white",marginLeft:"auto",marginRight:"auto",padding:20,display:"flex",flexDirection:"column"}),G=((0,C.Z)(d.Z)({display:"flex",flexDirection:"column",gap:15,marginTop:30}),(0,C.Z)(c.Z)({fontSize:26,textAlign:"center",fontWeight:500,marginBottom:20})),q=(0,C.Z)(d.Z)({width:"100%",display:"flex",flexDirection:"column","& input":{}});var V=function(e){var n=e.open,t=e.onClose,o=(0,Z.useState)(!1),i=(0,r.Z)(o,2),s=i[0],l=i[1],u=(0,Z.useState)(),x=(0,r.Z)(u,2),p=x[0],f=x[1],h=(0,Z.useState)(),m=(0,r.Z)(h,2),g=m[0],v=m[1],j=(0,Z.useState)(!1),k=(0,r.Z)(j,2),y=k[0],C=k[1],M=(0,Z.useState)(""),O=(0,r.Z)(M,2),F=O[0],W=O[1],B=(0,X.Z)().showNotification,K=(0,P._)().addToken,V=(0,b.$)().t,re=function(){var e=(0,I.Z)((0,T.Z)().mark((function e(n){var t,r,o,a,i,s,c;return(0,T.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.target.value,W(t),48===t.length){e.next=4;break}return e.abrupt("return");case 4:e.prev=4,r=N.Address.parse(t),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(4),B({message:"Invalid address",variant:"error"}),e.abrupt("return");case 12:return e.prev=12,C(!0),e.next=16,(0,R.wl)(r);case 16:return o=e.sent,e.next=19,(0,D.J6)(t,0);case 19:if(a=e.sent,i=a.futureAddress,!(s=a.isDeployed)){e.next=27;break}return e.next=25,R.E3(i);case 25:c=e.sent,v({tokenReserves:parseFloat((0,N.fromNano)(c.tokenReserves)).toFixed(2),tonReserves:parseFloat((0,N.fromNano)(c.tonReserves)).toFixed(2)});case 27:f((0,A.Z)((0,A.Z)({},o),{},{tokenMinter:t,ammMinter:i.toFriendly()})),l(s),e.next=34;break;case 31:e.prev=31,e.t1=e.catch(12),console.log(e.t1);case 34:return e.prev=34,C(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,8],[12,31,34,37]])})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsxs)(a.GI,{open:n,onClose:t,children:[(0,w.jsx)(H.Z,{open:y,children:(0,w.jsx)(c.Z,{children:V("loading")})}),(0,w.jsxs)(Y,{children:[(0,w.jsx)(G,{children:V("add-custom-token")}),(0,w.jsx)(q,{children:(0,w.jsx)(S.Z,{label:V("jetton-address"),onChange:re,value:F})}),p&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(J,{children:[(0,w.jsx)(U.Z,{name:p.name.toUpperCase(),image:p.image}),(0,w.jsxs)(Q,{children:[(0,w.jsx)(_,{children:V("amm-minter")}),(0,w.jsx)(z,{address:p.ammMinter})]})]}),g&&(0,w.jsxs)(ee,{children:[(0,w.jsx)(_,{children:V("pool-reservers",{token:p.name.toUpperCase()})}),(0,w.jsxs)($,{children:[(0,w.jsxs)(ne,{children:[(0,w.jsx)(U.Z,{name:p.name.toUpperCase(),image:p.image}),(0,w.jsx)(te,{children:(0,E.jS)(g.tokenReserves)})]}),(0,w.jsxs)(ne,{children:[(0,w.jsx)(U.Z,{name:"TON",image:L.Z}),(0,w.jsx)(te,{children:(0,E.jS)(g.tonReserves)})]})]})]})]}),(0,w.jsx)(d.Z,{marginTop:"50px",children:(0,w.jsx)(a.Kk,{isDisabled:!s,onClick:function(){p&&function(e){try{var n={name:e.name,ammMinter:e.ammMinter,tokenMinter:e.tokenMinter,color:(0,E.mr)(),displayName:e.symbol.toUpperCase(),image:e.image,isCustom:!0};K(n),t()}catch(r){}}(p)},children:V("add-token")})})]})]})},J=(0,C.Z)(d.Z)({marginTop:30}),Q=(0,C.Z)(d.Z)({marginTop:20}),_=(0,C.Z)(c.Z)({fontSize:16,fontWeight:500,marginBottom:10}),$=(0,C.Z)(d.Z)({display:"flex",flexDirection:"column",gap:20}),ee=(0,C.Z)(d.Z)({marginTop:20}),ne=(0,C.Z)(d.Z)({display:"flex",alignItems:"center"}),te=(0,C.Z)(d.Z)({marginLeft:10}),re=t(19867),oe=function(e){var n=e.title,t=e.onTokenSelect,i=x(),s=(0,Z.useState)(!1),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,re.O)().selectToken,p=(0,re.O)().clearStore,f=(0,P.u)().tokens;return(0,Z.useEffect)((function(){d(void 0),p()}),[]),(0,w.jsx)(g.Z,{in:!0,timeout:300,children:(0,w.jsxs)(o.Z,{className:i.root,children:[(0,w.jsx)(V,{open:l,onClose:function(){return u(!1)}}),(0,w.jsx)(ie,{children:(0,w.jsx)(a.Dx,{children:n})}),(0,w.jsx)(o.Z,{className:i.lists,children:(0,w.jsx)(ae,{children:f.map((function(e){return(0,w.jsx)(y,{onSelect:function(){return t(e)},token:e},e.tokenMinter)}))})})]})})},ae=(0,u.Z)(o.Z)({display:"flex",flexDirection:"column",gap:11,maxWidth:380,marginLeft:"auto",marginRight:"auto",minHeight:300}),ie=(0,u.Z)(o.Z)({position:"sticky",top:54,background:"white",zIndex:1,paddingBottom:10})},17464:function(e,n,t){t.d(n,{_:function(){return s},u:function(){return i}});var r=t(68963),o=t(93431),a=t(79869);function i(){return(0,o.v9)((function(e){return e.tokens}))}var s=function(){var e=i().tokens,n=(0,o.I0)();return{addToken:(0,r.useCallback)((function(e){n((0,a.Z)(e))}),[n]),getTokenById:(0,r.useCallback)((function(n){return e.find((function(e){return e.tokenMinter===n}))}),[e])}}},68541:function(e,n,t){e.exports=t.p+"static/media/default-token-image.7f04508e9bb03b76f258.png"}}]);