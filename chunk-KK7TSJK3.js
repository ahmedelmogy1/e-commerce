import{a as O}from"./chunk-6CCJGITW.js";import{l as T}from"./chunk-JNWDCKJO.js";import{a as V,c as F,g as I,l as b,m as k}from"./chunk-SQULTQFB.js";import{h as M}from"./chunk-CUDLAD7E.js";import"./chunk-UQV3BW2P.js";import{Bb as v,Eb as w,Fb as C,Gb as P,Ib as S,Oa as f,Pa as l,aa as d,jb as m,ka as p,kb as g,la as u,lb as _,mb as s,nb as a,ob as x,rb as y,tb as h,ub as c}from"./chunk-ZE6Q3F45.js";function $(i,D){if(i&1){let e=y();s(0,"input",7),P("ngModelChange",function(n){let r=p(e).$index,o=c();return C(o.inputs[r],n)||(o.inputs[r]=n),u(n)}),h("input",function(n){let r=p(e).$index,o=c();return u(o.onInput(r,n))})("keydown",function(n){let r=p(e).$index,o=c();return u(o.onKeyDown(r,n))}),a()}if(i&2){let e=D.$index,t=c();w("ngModel",t.inputs[e])}}var q=(()=>{class i{constructor(e,t,n){this._ForgetPasswordService=e,this._Router=t,this._ToastrService=n,this.inputs=Array(6).fill("")}ngOnInit(){this._ForgetPasswordService.stateForgetPassword.getValue()||this._Router.navigate(["/resetPassword"])}ngOnDestroy(){this._ForgetPasswordService.stateForgetPassword.next(!1)}onInput(e,t){t.target.value.length>0&&e<this.inputs.length-1&&document.querySelectorAll(".verification-input input")[e+1].focus(),this.checkIfComplete()}onKeyDown(e,t){t.key==="Backspace"&&e>0&&!this.inputs[e]&&document.querySelectorAll(".verification-input input")[e-1].focus()}checkIfComplete(){this.inputs.every(e=>e!=="")&&this.verifypassword(this.inputs.join(""))}verifypassword(e){this._ForgetPasswordService.verifyPassword(e).subscribe({next:t=>{this._ToastrService.success("","fresh cart",{closeButton:!0,progressBar:!0}),this._Router.navigate(["resetPassword/resetPasswordPage"]),this._ForgetPasswordService.stateRestPage.next(!0)}})}static{this.\u0275fac=function(t){return new(t||i)(l(O),l(M),l(T))}}static{this.\u0275cmp=d({type:i,selectors:[["app-verify-page"]],standalone:!0,features:[S],decls:10,vars:0,consts:[[1,"container-fluid","container-md"],[1,"text-main","user-select-none","text-center","display-5","mt-4","mb-2","fw-light","main-logo-text"],[1,"fa-regular","fa-envelope"],[1,"text-main","user-select-none","text-center","display-5","mt-1","mb-4","fw-light","main-logo-text"],[1,"container","text-center"],[1,"verification-input"],["type","text","maxlength","1",1,"form-control",3,"ngModel"],["type","text","maxlength","1",1,"form-control",3,"ngModelChange","input","keydown","ngModel"]],template:function(t,n){t&1&&(s(0,"section")(1,"div",0)(2,"p",1),x(3,"i",2),a(),s(4,"p",3),v(5,"Check your email"),a(),s(6,"div",4)(7,"div",5),g(8,$,1,1,"input",6,m),a()()()()),t&2&&(f(8),_(n.inputs))},dependencies:[k,V,F,b,I],styles:[".verification-input[_ngcontent-%COMP%]{display:flex;gap:10px;justify-content:center;margin-top:50px}.verification-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:50px;height:50px;text-align:center;font-size:1.5rem;border-radius:8px;border:2px solid #ddd;transition:border-color .2s}.verification-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#007bff;outline:none}"]})}}return i})();export{q as VerifyPageComponent};
