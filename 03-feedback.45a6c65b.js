function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function j(){var e=g();if(T(e))return x(e);u=setTimeout(j,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function x(e){return u=void 0,v&&o?b(e):(o=r=void 0,a)}function O(){var e=g(),n=T(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},O.flush=function(){return void 0===u?a:x(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b={},S={form:document.querySelector(".feedback-form"),email:document.querySelector('input[type="email"]'),textarea:document.querySelector('textarea[name="message"]')};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e),console.log(e.message)}(),S.form.addEventListener("submit",e(t)((function(e){e.preventDefault();const t=e.currentTarget.elements,n=t.email.value,o=t.message.value,r={email:n,message:o};console.log(r),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}),500)),S.textarea.addEventListener("input",e(t)((function(e){b.message=e.target.value,console.log(b),localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),S.email.addEventListener("input",e(t)((function(e){b.email=e.target.value,console.log(b),localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500));
//# sourceMappingURL=03-feedback.45a6c65b.js.map