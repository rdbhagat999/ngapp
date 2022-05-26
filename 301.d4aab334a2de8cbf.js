"use strict";(self.webpackChunkngapp=self.webpackChunkngapp||[]).push([[301],{301:(x,a,c)=>{c.r(a),c.d(a,{ClipboardModule:()=>S});var p=c(9808),t=c(1223);const l=new t.OlP("WindowToken","undefined"!=typeof window&&window.document?{providedIn:"root",factory:()=>window}:{providedIn:"root",factory:()=>{}});var u=c(7579);let h=(()=>{class o{constructor(e,i,n){this.ngZone=e,this.document=i,this.window=n,this.copySubject=new u.x,this.copyResponse$=this.copySubject.asObservable(),this.config={}}configure(e){this.config=e}copy(e){if(!this.isSupported||!e)return this.pushCopyResponse({isSuccess:!1,content:e});const i=this.copyFromContent(e);return this.pushCopyResponse(i?{content:e,isSuccess:i}:{isSuccess:!1,content:e})}get isSupported(){return!!this.document.queryCommandSupported&&!!this.document.queryCommandSupported("copy")&&!!this.window}isTargetValid(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){if(e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');return!0}throw new Error("Target should be input or textarea")}copyFromInputElement(e,i=!0){try{this.selectTarget(e);const n=this.copyText();return this.clearSelection(i?e:void 0,this.window),n&&this.isCopySuccessInIE11()}catch(n){return!1}}isCopySuccessInIE11(){const e=this.window.clipboardData;return!(e&&e.getData&&!e.getData("Text"))}copyFromContent(e,i=this.document.body){if(this.tempTextArea&&!i.contains(this.tempTextArea)&&this.destroy(this.tempTextArea.parentElement||void 0),!this.tempTextArea){this.tempTextArea=this.createTempTextArea(this.document,this.window);try{i.appendChild(this.tempTextArea)}catch(r){throw new Error("Container should be a Dom element")}}this.tempTextArea.value=e;const n=this.copyFromInputElement(this.tempTextArea,!1);return this.config.cleanUpAfterCopy&&this.destroy(this.tempTextArea.parentElement||void 0),n}destroy(e=this.document.body){this.tempTextArea&&(e.removeChild(this.tempTextArea),this.tempTextArea=void 0)}selectTarget(e){return e.select(),e.setSelectionRange(0,e.value.length),e.value.length}copyText(){return this.document.execCommand("copy")}clearSelection(e,i){var n;e&&e.focus(),null===(n=i.getSelection())||void 0===n||n.removeAllRanges()}createTempTextArea(e,i){const n="rtl"===e.documentElement.getAttribute("dir");let r;return r=e.createElement("textarea"),r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[n?"right":"left"]="-9999px",r.style.top=(i.pageYOffset||e.documentElement.scrollTop)+"px",r.setAttribute("readonly",""),r}pushCopyResponse(e){this.copySubject.observers.length>0&&this.ngZone.run(()=>{this.copySubject.next(e)})}pushCopyReponse(e){this.pushCopyResponse(e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(t.R0b),t.LFG(p.K0),t.LFG(l,8))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),f=(()=>{class o{constructor(e,i,n,r){this.ngZone=e,this.host=i,this.renderer=n,this.clipboardSrv=r,this.cbOnSuccess=new t.vpe,this.cbOnError=new t.vpe,this.onClick=d=>{this.clipboardSrv.isSupported?this.targetElm&&this.clipboardSrv.isTargetValid(this.targetElm)?this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm),this.targetElm.value,d):this.cbContent&&this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent,this.container),this.cbContent,d):this.handleResult(!1,void 0,d)}}ngOnInit(){this.ngZone.runOutsideAngular(()=>{this.clickListener=this.renderer.listen(this.host.nativeElement,"click",this.onClick)})}ngOnDestroy(){this.clickListener&&this.clickListener(),this.clipboardSrv.destroy(this.container)}handleResult(e,i,n){let r={isSuccess:e,content:i,successMessage:this.cbSuccessMsg,event:n};e?this.cbOnSuccess.observed&&this.ngZone.run(()=>{this.cbOnSuccess.emit(r)}):this.cbOnError.observed&&this.ngZone.run(()=>{this.cbOnError.emit(r)}),this.clipboardSrv.pushCopyResponse(r)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(t.R0b),t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(h))},o.\u0275dir=t.lG2({type:o,selectors:[["","ngxClipboard",""]],inputs:{targetElm:["ngxClipboard","targetElm"],container:"container",cbContent:"cbContent",cbSuccessMsg:"cbSuccessMsg"},outputs:{cbOnSuccess:"cbOnSuccess",cbOnError:"cbOnError"}}),o})(),b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez]]}),o})();function C(o,s){1&o&&(t.ynx(0),t.TgZ(1,"div",4),t._uU(2,"Copied!"),t.qZA(),t.BQk())}function m(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",5),t.NdJ("cbOnSuccess",function(n){return t.CHM(e),t.oxw().copied(n)}),t._UZ(1,"i",6),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("cbContent",e.couponText)}}let g=(()=>{class o{constructor(){this.couponText="SUPER DISCOUNT 50%",this.isCopied=!1}ngOnInit(){}copied(e){this.isCopied=e.isSuccess}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-clipboard"]],decls:8,vars:4,consts:[[3,"ngClass"],[1,"lucky-coupon-code"],[4,"ngIf","ngIfElse"],["elseTemplateCopied",""],[1,"coupon-copied"],["ngxClipboard","",3,"cbContent","cbOnSuccess"],[1,"fa","fa-copy",2,"cursor","pointer"]],template:function(e,i){if(1&e&&(t.TgZ(0,"h4"),t._uU(1,"Today's Lucky Coupon"),t.qZA(),t.TgZ(2,"div",0)(3,"div",1),t._uU(4),t.qZA(),t.YNc(5,C,3,0,"ng-container",2),t.YNc(6,m,2,1,"ng-template",null,3,t.W1O),t.qZA()),2&e){const n=t.MAs(7);t.xp6(2),t.Q6J("ngClass",i.isCopied?"lucky-coupon coupon-applied":"lucky-coupon"),t.xp6(2),t.Oqu(i.couponText),t.xp6(1),t.Q6J("ngIf",i.isCopied)("ngIfElse",n)}},directives:[p.mk,p.O5,f],styles:[".coupon-applied[_ngcontent-%COMP%]{border-color:green!important;background:#bdffb4}.lucky-coupon[_ngcontent-%COMP%]{border:5px dashed #ccc;width:320px;display:inline-block;font-size:1.2em}.lucky-coupon-code[_ngcontent-%COMP%]{padding:15px;display:inline-block;font-weight:700}.copy-code[_ngcontent-%COMP%]{padding:10px;display:flex;align-items:center;justify-content:center;cursor:pointer}.coupon-copied[_ngcontent-%COMP%]{padding:13px 0;display:inline-block;color:green;font-size:19px}"]}),o})();var y=c(5298);const v=[{path:"",component:g}];let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,b,y.Bz.forChild(v)]]}),o})()}}]);