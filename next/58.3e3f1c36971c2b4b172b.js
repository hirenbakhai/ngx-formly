(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"1+uE":function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\nimport { AppComponent } from './app.component';\n\nexport function minlengthValidationMessage(err, field) {\n  return `Should have atleast ${field.templateOptions.minLength} characters`;\n}\n\nexport function maxlengthValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.maxLength} characters`;\n}\n\nexport function minValidationMessage(err, field) {\n  return `This value should be more than ${field.templateOptions.min}`;\n}\n\nexport function maxValidationMessage(err, field) {\n  return `This value should be less than ${field.templateOptions.max}`;\n}\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n        { name: 'minlength', message: minlengthValidationMessage },\n        { name: 'maxlength', message: maxlengthValidationMessage },\n        { name: 'min', message: minValidationMessage },\n        { name: 'max', message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},QIhm:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'},S1ho:function(s,n){s.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button">Submit</button>\n</form>\n'},eK7C:function(s,n){s.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'name',\n      type: 'input',\n      templateOptions: {\n        label: 'Name (custom validation message declared in ngModule)',\n        required: true,\n        maxLength: 5,\n      },\n    },\n    {\n      key: 'ip',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (custom validation message through `validation` property)',\n        required: true,\n        pattern: /(\\d{1,3}\\.){3}\\d{1,3}/,\n      },\n      validation: {\n        messages: {\n          pattern: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n    {\n      key: 'ip2',\n      type: 'input',\n      templateOptions: {\n        label: 'IP Address (custom validation message through `validators` property)',\n        required: true,\n      },\n      validators: {\n        ip: {\n          expression: (c) => !c.value || /(\\d{1,3}\\.){3}\\d{1,3}/.test(c.value),\n          message: (error, field: FormlyFieldConfig) => `\"${field.formControl.value}\" is not a valid IP Address`,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    if (this.form.valid) {\n      alert(JSON.stringify(this.model));\n    }\n  }\n}\n"},fj2w:function(s,n,a){"use strict";a.r(n);var l=a("CcnG"),e=a("gIcY"),o=function(){function s(){this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"name",type:"input",templateOptions:{label:"Name (custom validation message declared in ngModule)",required:!0,maxLength:5}},{key:"ip",type:"input",templateOptions:{label:"IP Address (custom validation message through `validation` property)",required:!0,pattern:/(\d{1,3}\.){3}\d{1,3}/},validation:{messages:{pattern:function(s,n){return'"'+n.formControl.value+'" is not a valid IP Address'}}}},{key:"ip2",type:"input",templateOptions:{label:"IP Address (custom validation message through `validators` property)",required:!0},validators:{ip:{expression:function(s){return!s.value||/(\d{1,3}\.){3}\d{1,3}/.test(s.value)},message:function(s,n){return'"'+n.formControl.value+'" is not a valid IP Address'}}}}]}return s.prototype.submit=function(){this.form.valid&&alert(JSON.stringify(this.model))},s}(),t={examples:[{title:"Validation message",description:"\n              This demonstrates the different ways to define a custom validation message, globally or for a specific field.\n            ",component:o,files:[{file:"app.component.html",content:a("QIhm"),filecontent:a("S1ho")},{file:"app.component.ts",content:a("snFQ"),filecontent:a("eK7C")},{file:"app.module.ts",content:a("w9Od"),filecontent:a("1+uE")}]}]},p=function(){return function(){}}(),r=a("NcP4"),i=a("AcC/"),m=a("htty"),d=a("5yjx"),c=a("bg4O"),u=a("1C3p"),h=a("aMyW"),g=a("cD0v"),f=a("FZbr"),j=a("jYRx"),y=a("YBPd"),v=a("pMnS"),b=a("4o01"),w=a("Dl9q"),x=a("UcnZ"),k=a("DAbo"),F=a("9Glx"),C=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function M(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(s,n,a){var e=!0,o=s.component;return"submit"===n&&(e=!1!==l["\u0275nov"](s,2).onSubmit(a)&&e),"reset"===n&&(e=!1!==l["\u0275nov"](s,2).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(s()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,w.b,w.a)),l["\u0275prd"](512,null,x.a,x.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,F.a,[x.a,k.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(s()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],null,null,null,null,null)),(s()(),l["\u0275ted"](-1,null,["Submit"]))],function(s,n){var a=n.component;s(n,2,0,a.form),s(n,7,0,a.form,a.model,a.fields,a.options)},function(s,n){s(n,0,0,l["\u0275nov"](n,4).ngClassUntouched,l["\u0275nov"](n,4).ngClassTouched,l["\u0275nov"](n,4).ngClassPristine,l["\u0275nov"](n,4).ngClassDirty,l["\u0275nov"](n,4).ngClassValid,l["\u0275nov"](n,4).ngClassInvalid,l["\u0275nov"](n,4).ngClassPending)})}function O(s){return l["\u0275vid"](0,[(s()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,M,C)),l["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)}var _=l["\u0275ccf"]("formly-app-example",o,O,{},{},[]),A=a("Ip0R"),S=a("M2Lx"),I=a("eDkP"),R=a("Fzqc"),q=a("v9Dh"),L=a("ZYjt"),N=a("Wf4p"),P=a("6LlJ"),V=a("F6kA"),T=a("dWZg"),G=a("lLAP"),D=a("4c35"),$=a("qAlS"),E=a("La40"),B=a("SMsm"),J=a("UodH"),U=a("5QwG"),W=a("vqwi"),Z=a("WJWa"),Q=a("aD/X"),Y=a("rxDs"),z=a("bCbW"),H=a("7yie"),K=a("xWhi"),X=a("owZ6"),ss=a("DwvE"),ns=a("XR12");function as(s,n){return"Should have atleast "+n.templateOptions.minLength+" characters"}function ls(s,n){return"This value should be less than "+n.templateOptions.maxLength+" characters"}function es(s,n){return"This value should be more than "+n.templateOptions.min}function os(s,n){return"This value should be less than "+n.templateOptions.max}var ts=function(){return function(){}}(),ps=a("Nsh5"),rs=a("8mMr"),is=a("mqvi"),ms=a("lhp3"),ds=a("izcw"),cs=a("z6f/"),us=a("lYui"),hs=a("QcTH"),gs=a("82Si"),fs=a("cJUE"),js=a("eqw4"),ys=a("nyVy"),vs=a("7BuT"),bs=a("ZYCi"),ws=a("cIcG");a.d(n,"ConfigModuleNgFactory",function(){return xs});var xs=l["\u0275cmf"](p,[],function(s){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,d.a,c.a,u.a,h.a,g.a,f.a,j.a,y.a,v.a,b.a,_]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,A.NgLocalization,A.NgLocaleLocalization,[l.LOCALE_ID,[2,A["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,I.c,I.c,[I.i,I.e,l.ComponentFactoryResolver,I.h,I.f,l.Injector,l.NgZone,A.DOCUMENT,R.b,[2,A.Location]]),l["\u0275mpd"](5120,I.j,I.k,[I.c]),l["\u0275mpd"](5120,q.b,q.c,[I.c]),l["\u0275mpd"](4608,L.HAMMER_GESTURE_CONFIG,N.c,[[2,N.g],[2,N.l]]),l["\u0275mpd"](4608,P.a,P.a,[]),l["\u0275mpd"](4608,V.a,V.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,x.a,x.a,[k.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,A.CommonModule,A.CommonModule,[]),l["\u0275mpd"](1073742336,T.b,T.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,G.a,G.a,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,D.g,D.g,[]),l["\u0275mpd"](1073742336,$.c,$.c,[]),l["\u0275mpd"](1073742336,I.g,I.g,[]),l["\u0275mpd"](1073742336,N.l,N.l,[[2,N.d],[2,L.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,q.e,q.e,[]),l["\u0275mpd"](1073742336,N.v,N.v,[]),l["\u0275mpd"](1073742336,E.j,E.j,[]),l["\u0275mpd"](1073742336,B.c,B.c,[]),l["\u0275mpd"](1073742336,J.c,J.c,[]),l["\u0275mpd"](1073742336,U.b,U.b,[]),l["\u0275mpd"](512,k.b,k.b,[]),l["\u0275mpd"](1024,k.a,function(s){return[{wrappers:[{name:"form-field",component:W.a}]},{types:[{name:"input",component:Z.a,wrappers:["form-field"]}]},{types:[{name:"textarea",component:Q.a,wrappers:["form-field"]}]},{types:[{name:"radio",component:Y.a,wrappers:["form-field"]}]},{types:[{name:"checkbox",component:z.a,wrappers:["form-field"]}]},{types:[{name:"multicheckbox",component:H.a,wrappers:["form-field"]}]},{types:[{name:"select",component:K.a,wrappers:["form-field"]}]},{wrappers:[{name:"addons",component:X.a}],extensions:[{name:"addons",extension:{postPopulate:ss.a}}]},ns.b(s),{validationMessages:[{name:"required",message:"This field is required"},{name:"minlength",message:as},{name:"maxlength",message:ls},{name:"min",message:es},{name:"max",message:os}]}]},[k.b]),l["\u0275mpd"](1073742336,ns.a,ns.a,[k.b,[2,k.a]]),l["\u0275mpd"](1073742336,ps.h,ps.h,[]),l["\u0275mpd"](1073742336,rs.b,rs.b,[]),l["\u0275mpd"](1073742336,is.a,is.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,ms.a,ms.a,[]),l["\u0275mpd"](1073742336,ds.a,ds.a,[]),l["\u0275mpd"](1073742336,cs.a,cs.a,[]),l["\u0275mpd"](1073742336,us.a,us.a,[]),l["\u0275mpd"](1073742336,hs.a,hs.a,[]),l["\u0275mpd"](1073742336,gs.a,gs.a,[]),l["\u0275mpd"](1073742336,fs.a,fs.a,[]),l["\u0275mpd"](1073742336,js.a,js.a,[]),l["\u0275mpd"](1073742336,ys.a,ys.a,[]),l["\u0275mpd"](1073742336,vs.a,vs.a,[]),l["\u0275mpd"](1073742336,ts,ts,[]),l["\u0275mpd"](1073742336,bs.s,bs.s,[[2,bs.y],[2,bs.p]]),l["\u0275mpd"](1073742336,p,p,[]),l["\u0275mpd"](1024,bs.n,function(){return[[{path:"",component:ws.a,data:t}]]},[])])})},snFQ:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'name\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Name (custom validation message declared in ngModule)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        maxLength: <span class="hljs-number">5</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (custom validation message through `validation` property)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n        pattern: <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>,\n      },\n      validation: {\n        messages: {\n          pattern: <span class="hljs-function">(<span class="hljs-params">error, field: FormlyFieldConfig</span>) =&gt;</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>,\n        },\n      },\n    },\n    {\n      key: <span class="hljs-string">\'ip2\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'input\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'IP Address (custom validation message through `validators` property)\'</span>,\n        required: <span class="hljs-literal">true</span>,\n      },\n      validators: {\n        ip: {\n          expression: <span class="hljs-function">(<span class="hljs-params">c</span>) =&gt;</span> !c.value || <span class="hljs-regexp">/(\\d{1,3}\\.){3}\\d{1,3}/</span>.test(c.value),\n          message: <span class="hljs-function">(<span class="hljs-params">error, field: FormlyFieldConfig</span>) =&gt;</span> <span class="hljs-string">`"<span class="hljs-subst">${field.formControl.value}</span>" is not a valid IP Address`</span>,\n        },\n      },\n    },\n  ];\n\n  submit() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.form.valid) {\n      alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n    }\n  }\n}\n'},w9Od:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minlengthValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`Should have atleast <span class="hljs-subst">${field.templateOptions.minLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">maxlengthValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be less than <span class="hljs-subst">${field.templateOptions.maxLength}</span> characters`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">minValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be more than <span class="hljs-subst">${field.templateOptions.min}</span>`</span>;\n}\n\n<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">maxValidationMessage</span>(<span class="hljs-params">err, field</span>) </span>{\n  <span class="hljs-keyword">return</span> <span class="hljs-string">`This value should be less than <span class="hljs-subst">${field.templateOptions.max}</span>`</span>;\n}\n\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      validationMessages: [\n        { name: <span class="hljs-string">\'required\'</span>, message: <span class="hljs-string">\'This field is required\'</span> },\n        { name: <span class="hljs-string">\'minlength\'</span>, message: minlengthValidationMessage },\n        { name: <span class="hljs-string">\'maxlength\'</span>, message: maxlengthValidationMessage },\n        { name: <span class="hljs-string">\'min\'</span>, message: minValidationMessage },\n        { name: <span class="hljs-string">\'max\'</span>, message: maxValidationMessage },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'}}]);