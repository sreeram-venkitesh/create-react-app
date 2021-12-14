/*! For license information please see eae9715f.84a478ac.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5749],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5274:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(2784),n(3905)),i=["components"],c={id:"code-splitting",title:"Code Splitting"},l=void 0,u={unversionedId:"code-splitting",id:"code-splitting",title:"Code Splitting",description:"Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand.",source:"@site/../docs/code-splitting.md",sourceDirName:".",slug:"/code-splitting",permalink:"/docs/code-splitting",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/code-splitting.md",tags:[],version:"current",lastUpdatedBy:"Max Romanyuta",lastUpdatedAt:1618194630,formattedLastUpdatedAt:"4/11/2021",frontMatter:{id:"code-splitting",title:"Code Splitting"},sidebar:"docs",previous:{title:"Using the Public Folder",permalink:"/docs/using-the-public-folder"},next:{title:"Installing a Dependency",permalink:"/docs/installing-a-dependency"}},s=[{value:"<code>moduleA.js</code>",id:"moduleajs",children:[],level:2},{value:"<code>App.js</code>",id:"appjs",children:[],level:2},{value:"With React Router",id:"with-react-router",children:[],level:2}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Instead of downloading the entire app before users can use it, code splitting allows you to split your code into small chunks which you can then load on demand."),(0,a.kt)("p",null,"This project setup supports code splitting via ",(0,a.kt)("a",{parentName:"p",href:"https://2ality.com/2017/01/import-operator.html#loading-code-on-demand"},"dynamic ",(0,a.kt)("inlineCode",{parentName:"a"},"import()")),". Its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-dynamic-import"},"proposal")," is in stage 4. The ",(0,a.kt)("inlineCode",{parentName:"p"},"import()")," function-like form takes the module name as an argument and returns a ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},(0,a.kt)("inlineCode",{parentName:"a"},"Promise"))," which always resolves to the namespace object of the module."),(0,a.kt)("p",null,"Here is an example:"),(0,a.kt)("h2",{id:"moduleajs"},(0,a.kt)("inlineCode",{parentName:"h2"},"moduleA.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const moduleA = 'Hello';\n\nexport { moduleA };\n")),(0,a.kt)("h2",{id:"appjs"},(0,a.kt)("inlineCode",{parentName:"h2"},"App.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react';\n\nclass App extends Component {\n  handleClick = () => {\n    import('./moduleA')\n      .then(({ moduleA }) => {\n        // Use moduleA\n      })\n      .catch(err => {\n        // Handle failure\n      });\n  };\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.handleClick}>Load</button>\n      </div>\n    );\n  }\n}\n\nexport default App;\n")),(0,a.kt)("p",null,"This will make ",(0,a.kt)("inlineCode",{parentName:"p"},"moduleA.js")," and all its unique dependencies as a separate chunk that only loads after the user clicks the 'Load' button. For more information on the chunks that are created, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/production-build"},"production build")," section."),(0,a.kt)("p",null,"You can also use it with ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"await")," syntax if you prefer it."),(0,a.kt)("h2",{id:"with-react-router"},"With React Router"),(0,a.kt)("p",null,"If you are using React Router check out ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html#route-based-code-splitting"},"this tutorial")),(0,a.kt)("p",null,"Also check out the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/code-splitting.html"},"Code Splitting")," section in React documentation."))}f.isMDXComponent=!0},7320:function(e){var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,l=o(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))n.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(l[c[p]]=i[c[p]])}}return l}},3426:function(e,t,n){var r=n(7320),o=60103,a=60106;var i=60109,c=60110,l=60112;var u=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;o=p("react.element"),a=p("react.portal"),p("react.fragment"),p("react.strict_mode"),p("react.profiler"),i=p("react.provider"),c=p("react.context"),l=p("react.forward_ref"),p("react.suspense"),u=p("react.memo"),s=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function b(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var v=g.prototype=new b;v.constructor=g,r(v,y.prototype),v.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:k.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(S,"$&/")+"/"),N(i,t,n,"",(function(e){return e}))):null!=i&&(C(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var s=r+P(c=e[u],u);l+=N(c,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(c=e.next()).done;)l+=N(c=c.value,t,n,s=r+P(c,u++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var r=[],o=0;return N(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function E(){var e=A.current;if(null===e)throw Error(d(321));return e}},2784:function(e,t,n){n(3426)}}]);