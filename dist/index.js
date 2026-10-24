"use strict";var c=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var y=c(function(I,j){
var b=require('@stdlib/blas-base-dcopy/dist').ndarray,o=5;function g(i,r,u,t,q,e,f,m){var n,a,s,v;if(i<=0)return e;if(r===0)return b(i,u,t,q,e,f,m);if(n=q,a=m,t===1&&f===1){if(s=i%o,s>0)for(v=0;v<s;v++)e[a]=u[n]+r,n+=t,a+=f;if(i<o)return e;for(v=s;v<i;v+=o)e[a]=u[n]+r,e[a+1]=u[n+1]+r,e[a+2]=u[n+2]+r,e[a+3]=u[n+3]+r,e[a+4]=u[n+4]+r,n+=o,a+=o;return e}for(v=0;v<i;v++)e[a]=u[n]+r,n+=t,a+=f;return e}j.exports=g
});var R=c(function(J,x){
var p=require('@stdlib/strided-base-stride2offset/dist'),k=y();function z(i,r,u,t,q,e){return k(i,r,u,t,p(i,t),q,e,p(i,e))}x.exports=z
});var M=c(function(K,E){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),B=y();A(_,"ndarray",B);E.exports=_
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=M(),d,O=D(C(__dirname,"./native.js"));F(O)?d=G:d=O;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
