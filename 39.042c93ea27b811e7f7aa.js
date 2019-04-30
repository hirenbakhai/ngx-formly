(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"5hWg":function(n,a){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'marvel1\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Normal Select\'</span>,\n        options: [\n          {label: <span class="hljs-string">\'Iron Man\'</span>, value: <span class="hljs-string">\'iron_man\'</span>},\n          {label: <span class="hljs-string">\'Captain America\'</span>, value: <span class="hljs-string">\'captain_america\'</span>},\n          {label: <span class="hljs-string">\'Black Widow\'</span>, value: <span class="hljs-string">\'black_widow\'</span>},\n          {label: <span class="hljs-string">\'Hulk\'</span>, value: <span class="hljs-string">\'hulk\'</span>},\n          {label: <span class="hljs-string">\'Captain Marvel\'</span>, value: <span class="hljs-string">\'captain_marvel\'</span>},\n        ],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'marvel2\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Grouped Select\'</span>,\n        options: [\n          {label: <span class="hljs-string">\'Iron Man\'</span>, value: <span class="hljs-string">\'iron_man\'</span>, group: <span class="hljs-string">\'Male\'</span>},\n          {label: <span class="hljs-string">\'Captain America\'</span>, value: <span class="hljs-string">\'captain_america\'</span>, group: <span class="hljs-string">\'Male\'</span>},\n          {label: <span class="hljs-string">\'Black Widow\'</span>, value: <span class="hljs-string">\'black_widow\'</span>, group: <span class="hljs-string">\'Female\'</span>},\n          {label: <span class="hljs-string">\'Hulk\'</span>, value: <span class="hljs-string">\'hulk\'</span>, group: <span class="hljs-string">\'Male\'</span>},\n          {label: <span class="hljs-string">\'Captain Marvel\'</span>, value: <span class="hljs-string">\'captain_marvel\'</span>, group: <span class="hljs-string">\'Female\'</span>},\n        ],\n      },\n    },\n    {\n      key: <span class="hljs-string">\'marvel3\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Select with custom name/value/group\'</span>,\n        options: [\n          {label: <span class="hljs-string">\'Iron Man\'</span>, id: <span class="hljs-string">\'iron_man\'</span>, gender: <span class="hljs-string">\'Male\'</span>},\n          {label: <span class="hljs-string">\'Captain America\'</span>, id: <span class="hljs-string">\'captain_america\'</span>, gender: <span class="hljs-string">\'Male\'</span>},\n          {label: <span class="hljs-string">\'Black Widow\'</span>, id: <span class="hljs-string">\'black_widow\'</span>, gender: <span class="hljs-string">\'Female\'</span>},\n          {label: <span class="hljs-string">\'Hulk\'</span>, id: <span class="hljs-string">\'hulk\'</span>, gender: <span class="hljs-string">\'Male\'</span>},\n          {label: <span class="hljs-string">\'Captain Marvel\'</span>, id: <span class="hljs-string">\'captain_marvel\'</span>, gender: <span class="hljs-string">\'Female\'</span>},\n        ],\n        groupProp: <span class="hljs-string">\'gender\'</span>,\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'label\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'multiselect\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Multi-select\'</span>,\n        multiple: <span class="hljs-literal">true</span>,\n        options: [\n          {label: <span class="hljs-string">\'Iron Man\'</span>, value: <span class="hljs-string">\'iron_man\'</span>},\n          {label: <span class="hljs-string">\'Captain America\'</span>, value: <span class="hljs-string">\'captain_america\'</span>},\n          {label: <span class="hljs-string">\'Black Widow\'</span>, value: <span class="hljs-string">\'black_widow\'</span>},\n          {label: <span class="hljs-string">\'Hulk\'</span>, value: <span class="hljs-string">\'hulk\'</span>},\n          {label: <span class="hljs-string">\'Captain Marvel\'</span>, value: <span class="hljs-string">\'captain_marvel\'</span>},\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},KOue:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},OnZf:function(n,a){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},TuVD:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'marvel1',\n      type: 'select',\n      templateOptions: {\n        label: 'Normal Select',\n        options: [\n          {label: 'Iron Man', value: 'iron_man'},\n          {label: 'Captain America', value: 'captain_america'},\n          {label: 'Black Widow', value: 'black_widow'},\n          {label: 'Hulk', value: 'hulk'},\n          {label: 'Captain Marvel', value: 'captain_marvel'},\n        ],\n      },\n    },\n    {\n      key: 'marvel2',\n      type: 'select',\n      templateOptions: {\n        label: 'Grouped Select',\n        options: [\n          {label: 'Iron Man', value: 'iron_man', group: 'Male'},\n          {label: 'Captain America', value: 'captain_america', group: 'Male'},\n          {label: 'Black Widow', value: 'black_widow', group: 'Female'},\n          {label: 'Hulk', value: 'hulk', group: 'Male'},\n          {label: 'Captain Marvel', value: 'captain_marvel', group: 'Female'},\n        ],\n      },\n    },\n    {\n      key: 'marvel3',\n      type: 'select',\n      templateOptions: {\n        label: 'Select with custom name/value/group',\n        options: [\n          {label: 'Iron Man', id: 'iron_man', gender: 'Male'},\n          {label: 'Captain America', id: 'captain_america', gender: 'Male'},\n          {label: 'Black Widow', id: 'black_widow', gender: 'Female'},\n          {label: 'Hulk', id: 'hulk', gender: 'Male'},\n          {label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female'},\n        ],\n        groupProp: 'gender',\n        valueProp: 'id',\n        labelProp: 'label',\n      },\n    },\n    {\n      key: 'multiselect',\n      type: 'select',\n      templateOptions: {\n        label: 'Multi-select',\n        multiple: true,\n        options: [\n          {label: 'Iron Man', value: 'iron_man'},\n          {label: 'Captain America', value: 'captain_america'},\n          {label: 'Black Widow', value: 'black_widow'},\n          {label: 'Hulk', value: 'hulk'},\n          {label: 'Captain Marvel', value: 'captain_marvel'},\n        ],\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},Wnfb:function(n,a,s){"use strict";s.r(a);var l=s("CcnG"),e=s("gIcY"),p=function(){function n(){this.form=new e.FormGroup({}),this.model={},this.options={},this.fields=[{key:"marvel1",type:"select",templateOptions:{label:"Normal Select",options:[{label:"Iron Man",value:"iron_man"},{label:"Captain America",value:"captain_america"},{label:"Black Widow",value:"black_widow"},{label:"Hulk",value:"hulk"},{label:"Captain Marvel",value:"captain_marvel"}]}},{key:"marvel2",type:"select",templateOptions:{label:"Grouped Select",options:[{label:"Iron Man",value:"iron_man",group:"Male"},{label:"Captain America",value:"captain_america",group:"Male"},{label:"Black Widow",value:"black_widow",group:"Female"},{label:"Hulk",value:"hulk",group:"Male"},{label:"Captain Marvel",value:"captain_marvel",group:"Female"}]}},{key:"marvel3",type:"select",templateOptions:{label:"Select with custom name/value/group",options:[{label:"Iron Man",id:"iron_man",gender:"Male"},{label:"Captain America",id:"captain_america",gender:"Male"},{label:"Black Widow",id:"black_widow",gender:"Female"},{label:"Hulk",id:"hulk",gender:"Male"},{label:"Captain Marvel",id:"captain_marvel",gender:"Female"}],groupProp:"gender",valueProp:"id",labelProp:"label"}},{key:"multiselect",type:"select",templateOptions:{label:"Multi-select",multiple:!0,options:[{label:"Iron Man",value:"iron_man"},{label:"Captain America",value:"captain_america"},{label:"Black Widow",value:"black_widow"},{label:"Hulk",value:"hulk"},{label:"Captain Marvel",value:"captain_marvel"}]}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Select",description:"\n              Here are all of the options you have available to you with the\n              <code>select</code> type from <code>@ngx-formly/bootstrap</code>\n            ",component:p,files:[{file:"app.component.html",content:s("uMM1"),filecontent:s("KOue")},{file:"app.component.ts",content:s("5hWg"),filecontent:s("TuVD")},{file:"app.module.ts",content:s("OnZf"),filecontent:s("aHAf")}]}]},t=function(){return function(){}}(),r=s("NcP4"),i=s("AcC/"),m=s("htty"),c=s("LgGJ"),u=s("MT1c"),d=s("1Q/V"),g=s("9+aI"),h=s("haId"),b=s("LJsP"),f=s("yR2A"),j=s("UFMs"),v=s("pMnS"),y=s("4o01"),k=s("Dl9q"),w=s("UcnZ"),M=s("DAbo"),_=s("9Glx"),C=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function F(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,9,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var e=!0,p=n.component;return"submit"===a&&(e=!1!==l["\u0275nov"](n,2).onSubmit(s)&&e),"reset"===a&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===a&&(e=!1!==p.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,2,"formly-form",[],null,null,null,k.b,k.a)),l["\u0275prd"](512,null,w.a,w.a,[M.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275did"](7,966656,null,0,_.a,[w.a,M.b,[8,null],[2,e.FormGroupDirective]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](8,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,7,0,s.form,s.model,s.fields,s.options)},function(n,a){var s=a.component;n(a,0,0,l["\u0275nov"](a,4).ngClassUntouched,l["\u0275nov"](a,4).ngClassTouched,l["\u0275nov"](a,4).ngClassPristine,l["\u0275nov"](a,4).ngClassDirty,l["\u0275nov"](a,4).ngClassValid,l["\u0275nov"](a,4).ngClassInvalid,l["\u0275nov"](a,4).ngClassPending),n(a,8,0,!s.form.valid)})}function A(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,F,C)),l["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var x=l["\u0275ccf"]("formly-app-example",p,A,{},{},[]),S=s("Ip0R"),O=s("M2Lx"),I=s("eDkP"),R=s("Fzqc"),G=s("v9Dh"),N=s("ZYjt"),B=s("Wf4p"),W=s("6LlJ"),H=s("F6kA"),P=s("dWZg"),D=s("lLAP"),L=s("4c35"),E=s("qAlS"),J=s("La40"),U=s("SMsm"),Z=s("UodH"),T=s("5QwG"),q=s("qkla"),V=s("iZhS"),Y=s("me7w"),z=s("N3PW"),Q=s("l4pn"),K=s("Fv2i"),X=s("wBYW"),$=s("IE48"),nn=s("Q4Tx"),an=s("XR12"),sn=s("Nsh5"),ln=s("8mMr"),en=s("mqvi"),pn=s("lYui"),on=s("VGFS"),tn=s("1ey0"),rn=function(){return function(){}}(),mn=s("ZYCi"),cn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return un});var un=l["\u0275cmf"](t,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,i.a,m.a,c.a,u.a,d.a,g.a,h.a,b.a,f.a,j.a,v.a,y.a,x]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,S.NgLocalization,S.NgLocaleLocalization,[l.LOCALE_ID,[2,S["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,O.c,O.c,[]),l["\u0275mpd"](4608,I.c,I.c,[I.i,I.e,l.ComponentFactoryResolver,I.h,I.f,l.Injector,l.NgZone,S.DOCUMENT,R.b,[2,S.Location]]),l["\u0275mpd"](5120,I.j,I.k,[I.c]),l["\u0275mpd"](5120,G.b,G.c,[I.c]),l["\u0275mpd"](4608,N.HAMMER_GESTURE_CONFIG,B.c,[[2,B.g],[2,B.l]]),l["\u0275mpd"](4608,W.a,W.a,[]),l["\u0275mpd"](4608,H.a,H.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,w.a,w.a,[M.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,S.CommonModule,S.CommonModule,[]),l["\u0275mpd"](1073742336,P.b,P.b,[]),l["\u0275mpd"](1073742336,O.d,O.d,[]),l["\u0275mpd"](1073742336,D.a,D.a,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,L.g,L.g,[]),l["\u0275mpd"](1073742336,E.c,E.c,[]),l["\u0275mpd"](1073742336,I.g,I.g,[]),l["\u0275mpd"](1073742336,B.l,B.l,[[2,B.d],[2,N.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,G.e,G.e,[]),l["\u0275mpd"](1073742336,B.v,B.v,[]),l["\u0275mpd"](1073742336,J.j,J.j,[]),l["\u0275mpd"](1073742336,U.c,U.c,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,T.b,T.b,[]),l["\u0275mpd"](512,M.b,M.b,[]),l["\u0275mpd"](1024,M.a,function(n){return[{wrappers:[{name:"addons",component:q.a}],extensions:[{name:"addons",extension:{postPopulate:V.a}}]},{types:[{name:"input",component:Y.a,wrappers:["form-field"]},{name:"checkbox",component:z.a,wrappers:["form-field"]},{name:"radio",component:Q.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:X.a,wrappers:["form-field"]},{name:"multicheckbox",component:$.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:nn.a}]},an.b(n),{}]},[M.b]),l["\u0275mpd"](1073742336,an.a,an.a,[M.b,[2,M.a]]),l["\u0275mpd"](1073742336,sn.h,sn.h,[]),l["\u0275mpd"](1073742336,ln.b,ln.b,[]),l["\u0275mpd"](1073742336,en.a,en.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,pn.a,pn.a,[]),l["\u0275mpd"](1073742336,on.a,on.a,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,rn,rn,[]),l["\u0275mpd"](1073742336,mn.s,mn.s,[[2,mn.y],[2,mn.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,mn.n,function(){return[[{path:"",component:cn.a,data:o}]]},[])])})},aHAf:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},uMM1:function(n,a){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);