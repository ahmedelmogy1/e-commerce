import{a as s}from"./chunk-UQV3BW2P.js";import{T as c,Y as p,uc as d}from"./chunk-BYE5LYHS.js";var o=class extends Error{};o.prototype.name="InvalidTokenError";function f(t){return decodeURIComponent(atob(t).replace(/(.)/g,(r,e)=>{let n=e.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}function u(t){let r=t.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(r)}catch{return atob(r)}}function l(t,r){if(typeof t!="string")throw new o("Invalid token specified: must be a string");r||(r={});let e=r.header===!0?0:1,n=t.split(".")[e];if(typeof n!="string")throw new o(`Invalid token specified: missing part #${e+1}`);let a;try{a=u(n)}catch(i){throw new o(`Invalid token specified: invalid base64 for part #${e+1} (${i.message})`)}try{return JSON.parse(a)}catch(i){throw new o(`Invalid token specified: invalid json for part #${e+1} (${i.message})`)}}var v=(()=>{class t{constructor(e){this._HttpClient=e}registerUser(e){return this._HttpClient.post(`${s.baseUrl}/api/v1/auth/signup`,e)}logInUser(e){return this._HttpClient.post(`${s.baseUrl}/api/v1/auth/signin`,e)}saveDataUser(){sessionStorage.getItem("token")!=="undefined"&&(this.userData=l(sessionStorage.getItem("token")))}static{this.\u0275fac=function(n){return new(n||t)(p(d))}}static{this.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();export{v as a};
