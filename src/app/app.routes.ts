import { LoginComponent } from './components/login/login.component';
import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { CheckOutComponent } from './components/check-out/check-out.component';


export const routes: Routes = [
  
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'',component:AuthComponent, title:'auth',children:[
        {path:"",redirectTo:'login', pathMatch:'full'},
        {path:'login',component:LoginComponent ,  title:'login'},
        {path:'register',loadComponent:()=>import('./components/register/register.component').then((classes)=>classes.RegisterComponent),  title:'register'},
        {path:'resetPassword', loadComponent:()=>import('./layout/auth/reset-password/reset-password.component').then((classes)=>classes.ResetPasswordComponent), title:'resetPassword', children:[
            {path:"",redirectTo:'forgetPassword', pathMatch:'full'},
            {path:'forgetPassword', loadComponent:()=>import('./components/forget-password/forget-password.component').then((classes)=>classes.ForgetPasswordComponent), title:'forgetPassword'},
            {path:'verifyPage',loadComponent:()=>import('./components/verify-page/verify-page.component').then((classes)=>classes.VerifyPageComponent),title:'verifyPage'},
            {path:'resetPasswordPage',loadComponent:()=>import('./components/rest-password-page/rest-password-page.component').then((classes)=>classes.RestPasswordPageComponent),title:'resetPassword'}
        ]
    },
      
    ]
   },
    {path:'', component:MainComponent ,title:'main',canActivate:[authGuard],children:[
        {path:"",redirectTo:'home', pathMatch:'full'},
        {path:'home',component:HomeComponent ,  title:'home'},
        {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((classes)=>classes.BrandsComponent) ,  title:'brand'},
        {path:'allorders',loadComponent:()=>import('./components/orders/orders.component').then((classes)=>classes.OrdersComponent),title:'orders'},
        {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((classes)=>classes.CartComponent),  title:'cart'},
        {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((classes)=>classes.CategoriesComponent),  title:'categories'},
        {path:'products',component:ProductsComponent ,  title:'products'},
        {path:'productDetails/:pId',component:ProductDetailsComponent, title:'details'},
        {path:'checkOut/:cartId',component:CheckOutComponent,title:'check-out'},
        {path:'wish',loadComponent:()=>import('./components/wish/wish.component').then((classes)=>classes.WishComponent), title:'Wish'}
        

    ]},
   {path:'**', component:NotFoundComponent,title:'error 404'}

];
