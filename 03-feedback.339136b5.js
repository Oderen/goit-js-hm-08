!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var r,o,a,u,f,l,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,s=t,u=e.apply(i,n)}function j(e){return s=e,f=setTimeout(T,t),c?y(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-s>=a}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?v(n,a-(e-s)):n}(e))}function h(e){return f=void 0,d&&r?y(e):(r=o=void 0,u)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(m)return f=setTimeout(T,t),y(l)}return void 0===f&&(f=setTimeout(T,t)),u}return t=S(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?g(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=l=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var j,O="feedback-form-state",T={},h={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),message:document.querySelector('textarea[name="message"]')};(j=JSON.parse(localStorage.getItem(O)))&&(j.message&&(T.message=j.message,h.message.value=j.message),j.email&&(T.email=j.email,h.email.value=j.email)),h.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email.value,r=t.message.value,i={email:n,message:r};console.log(i),e.currentTarget.reset(),delete T.message,delete T.email,localStorage.removeItem(O)})),h.form.addEventListener("input",e(t)((function(e){if(e.target!==h.message)return;T.message=e.target.value,localStorage.setItem(O,JSON.stringify(T))}),500)),h.form.addEventListener("input",e(t)((function(e){if(e.target!==h.email)return;T.email=e.target.value,localStorage.setItem(O,JSON.stringify(T))}),500))}();
//# sourceMappingURL=03-feedback.339136b5.js.map
