import{W as n,j as t,a as e,b as d}from"./app-06ebd97b.js";import{G as u,P as c}from"./PrimaryButton-72a867dc.js";import{T as p,I as w}from"./TextInput-c0936026.js";import"./ApplicationLogo-59c26ec0.js";function y({status:s}){const{data:o,setData:r,post:l,processing:m,errors:i}=n({email:""});return t(u,{children:[e(d,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),l(route("password.email"))},children:[e(p,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,onChange:a=>r("email",a.target.value)}),e(w,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(c,{className:"ml-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{y as default};
