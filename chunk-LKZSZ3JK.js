import{l as B}from"./chunk-DSZGJGO5.js";import{i as D}from"./chunk-3YXHMWOF.js";import{a as F}from"./chunk-CF3AE6RC.js";import"./chunk-UQV3BW2P.js";import{Ab as c,Bb as _,Cb as k,Hb as y,Ib as w,Ja as O,Jb as E,Na as o,Z as x,aa as I,bb as v,db as m,hb as g,ib as h,jb as S,ka as f,kb as b,kc as P,la as C,lb as i,mb as r,nb as l,qb as T,sb as u,tb as p}from"./chunk-BYE5LYHS.js";var A=()=>["/home"],V=a=>["/checkOut",a],L=()=>[1,2,3,4,5];function $(a,d){a&1&&l(0,"i",21)}function j(a,d){a&1&&l(0,"i",22)}function M(a,d){a&1&&l(0,"hr")}function R(a,d){if(a&1){let t=T();i(0,"div",15)(1,"div",16),l(2,"img",17),r(),i(3,"div",18)(4,"h3",19),c(5),r(),i(6,"h4",20),c(7,"Rate: "),S(8,$,1,0,"i",21,h),v(10,j,1,0,"i",22),r(),i(11,"h4",20),c(12,"Price: "),i(13,"span",23),c(14),r()(),i(15,"h5",20),c(16,"Category : "),i(17,"span",23),c(18),r()()(),i(19,"div",24)(20,"div",25)(21,"i",26),u("click",function(){let e=f(t).$implicit,s=p();return C(s.changeCountOfProduct(e.product._id,e.count+1))}),r(),i(22,"span",27),c(23),r(),i(24,"i",28),u("click",function(){let e=f(t).$implicit,s=p();return C(s.changeCountOfProduct(e.product._id,e.count-1))}),r()()(),i(25,"div",29)(26,"div",10),c(27,"Total Price"),r(),i(28,"div",23),c(29),r()(),i(30,"div",30)(31,"span",31),u("click",function(){let e=f(t).$implicit,s=p();return C(s.deleteProduct(e.product._id))}),l(32,"i",32),r()()(),v(33,M,1,0,"hr")}if(a&2){let t=d.$implicit,n=d.$index,e=p();o(2),m("src",t.product.imageCover,O),o(3),_(t.product.title),o(3),b(w(8,L).slice(0,t.product.ratingsAverage)),o(2),g(10,t.product.ratingsAverage%1!==0?10:-1),o(4),_(t.price),o(4),k(" ",t.product.category.name,""),o(5),_(t.count),o(6),k(" ",t.count*t.price," "),o(4),g(33,n<e.cartData.data.products.length-1?33:-1)}}var K=(()=>{class a{constructor(){this._CartService=x(F),this._ToastrService=x(B),this.cartData={status:"",numOfCartItems:0,cartId:"",data:{_id:"",cartOwner:"",products:[],createdAt:"",updatedAt:"",__v:0,totalCartPrice:0}}}ngOnInit(){this._CartService.getLoggedUserCart().subscribe({next:t=>{this.cartData=t,this.cartId=t.cartId,this._CartService.cartOwnerId=t.data.cartOwner,console.log(t)},error:t=>{console.log(t)}})}deleteProduct(t){this._CartService.deletsSpacificProduct(t).subscribe({next:n=>{console.log(n.numOfCartItems),this.cartData=n,this._CartService.countOfCart.next(n.numOfCartItems)},error:n=>{console.log(n)}})}deleteAllProducts(){this._CartService.deleteAllProducts().subscribe({next:t=>{console.log(t),this.cartData={status:"",numOfCartItems:0,cartId:"",data:{_id:"",cartOwner:"",products:[],createdAt:"",updatedAt:"",__v:0,totalCartPrice:0}},this._ToastrService.success("","fresh cart",{closeButton:!0,progressBar:!0}),this._CartService.countOfCart=t.numOfCartItems},error:t=>{console.log(t),this._ToastrService.error(t.message,"fresh cart",{closeButton:!0,progressBar:!0})}})}changeCountOfProduct(t,n){this._CartService.changeCountOfProduct(t,n).subscribe({next:e=>{console.log(e),this.cartData=e,this._ToastrService.success("","fresh cart",{closeButton:!0,progressBar:!0})},error:e=>{console.log(e),this._ToastrService.error(e.message,"fresh cart",{closeButton:!0,progressBar:!0})}})}static{this.\u0275fac=function(n){return new(n||a)}}static{this.\u0275cmp=I({type:a,selectors:[["app-cart"]],standalone:!0,features:[y],decls:24,vars:8,consts:[[1,"container-fluid","container-md"],[1,"cart","bg-main-light","my-5","p-3","rounded-4"],[1,"cartTitle","shadow-lg","p-3","rounded-4","mb-5"],[1,"d-flex","justify-content-between","align-items-center"],[1,"d-flex"],[1,"arrExit"],[1,"fa-solid","fa-arrow-left","bg-main","text-white","p-2","rounded","rounded-pill","cursor-pointer",3,"routerLink"],[1,"me-2"],[1,"fa-brands","fa-opencart","text-main","fa-1x","mx-2"],[1,"fs-5","user-select-none","fa-angellist","d-inline-block","mx-1","main-logo-text"],[1,""],[1,"main-logo-text"],[1,"d-flex","justify-content-between","mt-3"],[1,"btn","btn-outline-danger","px-4","d-block",3,"click","ngClass"],[1,"btn","btn-outline-primary","ms-auto","d-block",3,"ngClass","routerLink"],[1,"row","align-items-center","p-4","p-sm-0","mt-2"],[1,"col-12","col-sm-2"],["alt","",1,"w-100","imgS",3,"src"],[1,"col-12","col-sm-5","text-center","text-sm-start"],[1,"fs-5"],[1,"fs-6"],[1,"fa-solid","fa-star","text-warning"],[1,"fa-solid","fa-star-half-stroke","text-warning"],[1,"text-main"],[1,"col-5","col-sm-2"],[1,"iconPlusMinus","text-center","d-flex","align-items-center","justify-content-between","w-75","py-1","p-1"],[1,"fa-solid","fa-plus","icon-hover",3,"click"],[1,"user-select-none"],[1,"fa-solid","fa-minus","icon-hover",3,"click"],[1,"col-5","col-sm-2","text-center"],[1,"col-2","col-sm-1"],[1,"icon-exit",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(n,e){n&1&&(i(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5),l(7,"i",6),r(),i(8,"div",7),l(9,"i",8),i(10,"span",9),c(11,"Shop Cart"),r()()(),i(12,"div",10)(13,"h5"),c(14,"Total price : "),i(15,"span",11),c(16),r()()()(),i(17,"div",12)(18,"button",13),u("click",function(){return e.deleteAllProducts()}),c(19,"Delete"),r(),i(20,"button",14),c(21,"Check Out"),r()()(),S(22,R,34,9,null,null,h),r()()()),n&2&&(o(7),m("routerLink",w(5,A)),o(9),_(e.cartData.data.totalCartPrice),o(2),m("ngClass",e.cartData.numOfCartItems?"":"disabled"),o(2),m("ngClass",e.cartData.numOfCartItems?"":"disabled")("routerLink",E(6,V,e.cartId)),o(2),b(e.cartData.data.products))},dependencies:[D,P],styles:[".imgS[_ngcontent-%COMP%]{object-fit:contain;display:inline-block;margin:0 auto;height:100px}"]})}}return a})();export{K as CartComponent};
