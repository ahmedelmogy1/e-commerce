import{a as I,b as L}from"./chunk-RYO6KTXE.js";import{l as B}from"./chunk-DSZGJGO5.js";import{i as P}from"./chunk-3YXHMWOF.js";import{a as E}from"./chunk-CF3AE6RC.js";import"./chunk-UQV3BW2P.js";import{Ab as c,Bb as y,Cb as W,Hb as F,Ib as b,Ja as w,Na as n,Z as m,aa as T,bb as f,db as h,hb as x,ib as v,jb as g,ka as u,kb as S,la as _,lb as i,mb as o,nb as s,qb as k,sb as C,tb as d}from"./chunk-BYE5LYHS.js";var V=()=>["/home"],$=()=>[1,2,3,4,5];function j(r,l){r&1&&s(0,"i",16)}function O(r,l){r&1&&s(0,"i",17)}function M(r,l){r&1&&s(0,"hr")}function U(r,l){if(r&1){let e=k();i(0,"div",10)(1,"div",11),s(2,"img",12),o(),i(3,"div",13),s(4,"h3",14),c(5),i(6,"h4",15),c(7," Rate: "),g(8,j,1,0,"i",16,v),f(10,O,1,0,"i",17),o(),i(11,"h5",15),c(12,"Category : "),i(13,"span",18),c(14),o()(),i(15,"h4",15),c(16,"Price: "),i(17,"span",18),c(18),o()()(),i(19,"div",19)(20,"span",20),C("click",function(){let a=u(e).$implicit,p=d();return _(p.addProductToCart(a._id))}),s(21,"i",21),i(22,"div",22),c(23,"add to cart"),o()()(),i(24,"div",23)(25,"span",24),C("click",function(){let a=u(e).$implicit,p=d();return _(p.removerProductFromWishlist(a._id))}),s(26,"i",25),o()()(),f(27,M,1,0,"hr")}if(r&2){let e=l.$implicit,t=l.$index,a=d();n(2),h("src",e.imageCover,w),n(3),W(" ",e.title," "),n(3),S(b(6,$).slice(0,e.ratingsAverage)),n(2),x(10,e.ratingsAverage%1!==0?10:-1),n(4),W(" ",e.category.name,""),n(4),y(e.price),n(9),x(27,t<a.products.length-1?27:-1)}}var K=(()=>{class r{constructor(){this._WishService=m(I),this._ToastrService=m(B),this._ProductsService=m(L),this._CartService=m(E)}ngOnInit(){this._WishService.getLoggedUserWish().subscribe({next:e=>{this.products=e.data}})}addProductToCart(e){this._ProductsService.addProductToCart(e).subscribe({next:t=>{this._ToastrService.success(t.message,"fresh cart",{closeButton:!0,progressBar:!0}),this._CartService.countOfCart.next(t.numOfCartItems)},error:t=>{this._ToastrService.warning(t.message,"fresh cart",{closeButton:!0,progressBar:!0})}})}removerProductFromWishlist(e){this._WishService.removerProductFromWishlist(e).subscribe({next:t=>{this._ToastrService.success(t.message,"fresh cart",{closeButton:!0,progressBar:!0}),this._WishService.getLoggedUserWish().subscribe({next:a=>{this.products=a.data}})}})}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=T({type:r,selectors:[["app-wish"]],standalone:!0,features:[F],decls:14,vars:2,consts:[[1,"container-fluid","container-md"],[1,"cart","bg-main-light","my-5","p-3","rounded-4"],[1,"cartTitle","shadow-lg","p-3","rounded-4","mb-5"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex"],[1,"arrExit"],[1,"fa-solid","fa-arrow-left","bg-main","text-white","p-2","rounded","rounded-pill","cursor-pointer",3,"routerLink"],[1,"me-2"],[1,"fa-brands","fa-opencart","text-main","fa-1x","mx-2"],[1,"fs-5","user-select-none","fa-angellist","d-inline-block","mx-1","main-logo-text"],[1,"row","align-items-center","p-4","p-sm-0","mt-2"],[1,"col-12","col-sm-2"],["alt","",1,"w-100","imgS",3,"src"],[1,"col-12","col-sm-5","col-xlg-7","text-center","text-sm-start"],[1,"fs-5"],[1,"fs-6"],[1,"fa-solid","fa-star","text-warning"],[1,"fa-solid","fa-star-half-stroke","text-warning"],[1,"text-main"],[1,"col-10","col-sm-4","col-xlg-2"],[1,"btn","btn-success","d-flex","justify-content-center","align-items-center",3,"click"],[1,"fa-solid","fa-cart-plus"],[1,"mx-2"],[1,"col-2","col-sm-1"],[1,"icon-exit",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(t,a){t&1&&(i(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),s(7,"i",6),o(),i(8,"div",7),s(9,"i",8),i(10,"span",9),c(11,"Wish List"),o()()()()(),g(12,U,28,7,null,null,v),o()()()),t&2&&(n(7),h("routerLink",b(1,V)),n(5),S(a.products))},dependencies:[P],styles:[".imgS[_ngcontent-%COMP%]{object-fit:contain;display:inline-block;margin:0 auto;height:100px}"]})}}return r})();export{K as WishComponent};
