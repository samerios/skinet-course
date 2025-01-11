import{a as T,b as J}from"./chunk-XDPWG3EN.js";import{a as F}from"./chunk-BQFMFUMJ.js";import{b as L}from"./chunk-S2JH6FRX.js";import{A as N,C as d,D as $,E as f,F as _,I as E,K as z,L as I,M as w,O as R,Q as g,S as M,T as H,W as D}from"./chunk-KFGLDAJK.js";import{h as O,ia as h,j as y}from"./chunk-AVC5AARJ.js";import"./chunk-6XXA7HXI.js";import{Db as v,Eb as P,Gb as U,Hb as j,Ib as i,Jb as r,Kb as s,Rb as C,Tb as x,Wb as q,db as a,dc as m,eb as B,ec as S,fc as k,ka as l,lc as c,oa as u,ub as b,yb as p}from"./chunk-55L6EDGV.js";var A=class t{fb=l(R);accountService=l(L);router=l(y);activatedRoute=l(O);returnUrl="/shop";constructor(){let o=this.activatedRoute.snapshot.queryParams.returnUrl;o&&(this.returnUrl=o)}loginForm=this.fb.group({email:[""],password:[""]});onSubmit(){this.accountService.login(this.loginForm.value).subscribe({next:()=>{this.accountService.getUserInfo().subscribe(),this.router.navigateByUrl(this.returnUrl)}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-login"]],standalone:!0,features:[c],decls:15,vars:1,consts:[[1,"max-w-lg","mx-auto","mt-32","p-8","bg-white"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-6"],[1,"text-3xl","font-semibold","text-primary"],["appearance","outline",1,"w-full","mb-4"],["formControlName","email","type","email","placeholder","name@example.com","matInput",""],["formControlName","password","type","password","placeholder","Password","matInput",""],["mat-flat-button","","type","submit",1,"w-full","py-2"]],template:function(e,n){e&1&&(i(0,"mat-card",0)(1,"form",1),C("ngSubmit",function(){return n.onSubmit()}),i(2,"div",2)(3,"h1",3),m(4,"Login"),r()(),i(5,"mat-form-field",4)(6,"mat-label"),m(7,"Email address"),r(),s(8,"input",5),r(),i(9,"mat-form-field",4)(10,"mat-label"),m(11,"Password"),r(),s(12,"input",6),r(),i(13,"button",7),m(14,"Sign in"),r()()()),e&2&&(a(),p("formGroup",n.loginForm))},dependencies:[g,E,N,f,_,I,w,F,D,T,M,h]})};function Y(t,o){if(t&1&&(i(0,"mat-error"),m(1),r()),t&2){let e=x();a(),k("",e.label," is required")}}function Z(t,o){t&1&&(i(0,"mat-error"),m(1,"Email is invalid"),r())}var G=class t{constructor(o){this.controlDir=o;this.controlDir.valueAccessor=this}label="";type="text";writeValue(o){}registerOnChange(o){}registerOnTouched(o){}get control(){return this.controlDir.control}static \u0275fac=function(e){return new(e||t)(B($,2))};static \u0275cmp=u({type:t,selectors:[["app-text-input"]],inputs:{label:"label",type:"type"},standalone:!0,features:[c],decls:6,vars:6,consts:[["appearance","outline",1,"w-full","mb-4"],["matInput","",3,"formControl","type","placeholder"]],template:function(e,n){e&1&&(i(0,"mat-form-field",0)(1,"mat-label"),m(2),r(),s(3,"input",1),b(4,Y,2,1,"mat-error")(5,Z,2,0,"mat-error"),r()),e&2&&(a(2),S(n.label),a(),q("type",n.type),q("placeholder",n.label),p("formControl",n.control),a(),v(n.control.hasError("required")?4:-1),a(),v(n.control.hasError("email")?5:-1))},dependencies:[g,N,f,z,D,T,H,M]})};function ee(t,o){if(t&1&&(i(0,"li"),m(1),r()),t&2){let e=o.$implicit;a(),S(e)}}function te(t,o){if(t&1&&(i(0,"div",8)(1,"ul",10),U(2,ee,2,1,"li",null,P),r()()),t&2){let e=x();a(2),j(e.validationErrors)}}var V=class t{fb=l(R);accountService=l(L);router=l(y);snack=l(J);validationErrors;registerForm=this.fb.group({firstName:["",d.required],lastName:["",d.required],email:["",[d.required,d.email]],password:["",d.required]});onSubmit(){this.accountService.register(this.registerForm.value).subscribe({next:()=>{this.snack.success("Registration successful - you can now login"),this.router.navigateByUrl("/account/login")},error:o=>this.validationErrors=o})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=u({type:t,selectors:[["app-register"]],standalone:!0,features:[c],decls:12,vars:3,consts:[[1,"max-w-lg","mx-auto","mt-32","p-8","bg-white"],[3,"ngSubmit","formGroup"],[1,"text-center","mb-6"],[1,"text-3xl","font-semibold","text-primary"],["label","First name","formControlName","firstName"],["label","Last name","formControlName","lastName"],["label","Email address","formControlName","email"],["label","Password","formControlName","password","type","password"],[1,"mb-3","p-4","bg-red-100","text-red-600"],["mat-flat-button","","type","submit",1,"w-full","py-2",3,"disabled"],[1,"list-disc","px-3"]],template:function(e,n){e&1&&(i(0,"mat-card",0)(1,"form",1),C("ngSubmit",function(){return n.onSubmit()}),i(2,"div",2)(3,"h1",3),m(4,"Register"),r()(),s(5,"app-text-input",4)(6,"app-text-input",5)(7,"app-text-input",6)(8,"app-text-input",7),b(9,te,4,0,"div",8),i(10,"button",9),m(11,"Register"),r()()()),e&2&&(a(),p("formGroup",n.registerForm),a(8),v(n.validationErrors?9:-1),a(),p("disabled",n.registerForm.invalid))},dependencies:[g,E,f,_,I,w,F,h,G]})};var De=[{path:"login",component:A},{path:"register",component:V}];export{De as accountRoutes};
