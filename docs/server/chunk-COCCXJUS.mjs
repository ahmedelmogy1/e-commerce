import './polyfills.server.mjs';
import{a as y}from"./chunk-JERYYHFW.mjs";import"./chunk-CNHVUDDN.mjs";import{Bb as C,Cb as v,Ib as f,Ka as g,Oa as i,W as c,_ as s,eb as m,kb as l,lb as p,mb as r,nb as a,ob as d}from"./chunk-73DWNJ7F.mjs";import"./chunk-VVCT4QZE.mjs";var h=(e,n)=>n._id;function _(e,n){if(e&1&&(r(0,"div",2)(1,"div",3),d(2,"img",4),r(3,"h4",5),C(4),a()()()),e&2){let t=n.$implicit;i(2),m("src",t.image,g),i(2),v(t.name)}}var O=(()=>{class e{constructor(){this._CategoriesService=c(y)}ngOnInit(){this.Category=this._CategoriesService.getAllCaregories().subscribe({next:t=>{this.categoriesData=t.data,console.log(t)},error:()=>{console.log("error in service categories")}})}ngOnDestroy(){this.Category.unsubscribe()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=s({type:e,selectors:[["app-categories"]],standalone:!0,features:[f],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-12","col-sm-6","col-lg-3","p-2","category"],[1,"shadow-sm","category-m","my-2","mx-2"],["alt","",1,"w-100","category-img",3,"src"],[1,"text-center","bg-main-light"]],template:function(o,u){o&1&&(r(0,"section")(1,"div",0)(2,"div",1),l(3,_,5,2,"div",2,h),a()()()),o&2&&(i(3),p(u.categoriesData))},styles:[".category-img[_ngcontent-%COMP%]{object-fit:cover;height:400px}.category-m[_ngcontent-%COMP%]{transition:transform .4s}.category-m[_ngcontent-%COMP%]:hover{transform:scale(1.04)}.category[_ngcontent-%COMP%]{cursor:pointer}"]})}}return e})();export{O as CategoriesComponent};
