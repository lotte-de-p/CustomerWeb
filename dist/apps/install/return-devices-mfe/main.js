/******/ var __webpack_modules__ = ({

/***/ 38540:
/*!*****************************************************!*\
  !*** ./apps/install/return-devices-mfe/src/main.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__.e(/*! import() */ "apps_install_return-devices-mfe_src_bootstrap_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ 18833)).catch(err => console.error(err));

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + chunkId + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	var dataWebpackPrefix = "return-devices-mfe:";
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			script.timeout = 120;
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 			script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 	
/******/ 			script.src = __webpack_require__.tu(url);
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		}
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = (msg) => {
/******/ 			if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 		};
/******/ 		var uniqueName = "return-devices-mfe";
/******/ 		var register = (name, version, factory, eager) => {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = (id) => {
/******/ 			var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("@angular/common/http", "17.1.0", () => (__webpack_require__.e("node_modules_angular_common_fesm2022_http_mjs-_f9340").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2022/http.mjs */ 54860))))));
/******/ 				register("@angular/common", "17.1.0", () => (__webpack_require__.e("node_modules_angular_common_fesm2022_common_mjs-_b4621").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/common/fesm2022/common.mjs */ 26575))))));
/******/ 				register("@angular/core/primitives/signals", "17.1.0", () => (__webpack_require__.e("node_modules_angular_core_fesm2022_primitives_signals_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/primitives/signals.mjs */ 38186))))));
/******/ 				register("@angular/core/rxjs-interop", "17.1.0", () => (__webpack_require__.e("node_modules_angular_core_fesm2022_rxjs-interop_mjs-_b06f0").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/rxjs-interop.mjs */ 60839))))));
/******/ 				register("@angular/core", "17.1.0", () => (__webpack_require__.e("node_modules_angular_core_fesm2022_core_mjs").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/core/fesm2022/core.mjs */ 61699))))));
/******/ 				register("@angular/forms", "17.1.0", () => (__webpack_require__.e("node_modules_angular_forms_fesm2022_forms_mjs-_0f7c1").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/forms/fesm2022/forms.mjs */ 28849))))));
/******/ 				register("@angular/router", "17.1.0", () => (__webpack_require__.e("node_modules_angular_router_fesm2022_router_mjs-_5a220").then(() => (() => (__webpack_require__(/*! ./node_modules/@angular/router/fesm2022/router.mjs */ 27947))))));
/******/ 				register("@ngrx/effects", "17.1.0", () => (__webpack_require__.e("node_modules_ngrx_effects_fesm2022_ngrx-effects_mjs-_56480").then(() => (() => (__webpack_require__(/*! ./node_modules/@ngrx/effects/fesm2022/ngrx-effects.mjs */ 1575))))));
/******/ 				register("@ngrx/store", "17.1.0", () => (__webpack_require__.e("node_modules_ngrx_store_fesm2022_ngrx-store_mjs-_da110").then(() => (() => (__webpack_require__(/*! ./node_modules/@ngrx/store/fesm2022/ngrx-store.mjs */ 36270))))));
/******/ 				register("@ngx-translate/core", "15.0.0", () => (__webpack_require__.e("node_modules_ngx-translate_core_dist_fesm2022_ngx-translate-core_mjs-_63780").then(() => (() => (__webpack_require__(/*! ./node_modules/@ngx-translate/core/dist/fesm2022/ngx-translate-core.mjs */ 5939))))));
/******/ 				register("@return-devices/data-access", "24.17.0", () => (__webpack_require__.e("libs_install_return-devices_data-access_src_index_ts-_4f960").then(() => (() => (__webpack_require__(/*! ./libs/install/return-devices/data-access/src/index.ts */ 93125))))));
/******/ 				register("@return-devices/feat-overview", "24.17.0", () => (__webpack_require__.e("libs_install_return-devices_feat-overview_src_index_ts").then(() => (() => (__webpack_require__(/*! ./libs/install/return-devices/feat-overview/src/index.ts */ 76961))))));
/******/ 				register("@return-devices/ui", "24.17.0", () => (__webpack_require__.e("libs_install_return-devices_ui_src_index_ts-_b8cf0").then(() => (() => (__webpack_require__(/*! ./libs/install/return-devices/ui/src/index.ts */ 89085))))));
/******/ 				register("@return-devices/util", "24.17.0", () => (__webpack_require__.e("libs_install_return-devices_util_src_index_ts-_06680").then(() => (() => (__webpack_require__(/*! ./libs/install/return-devices/util/src/index.ts */ 83436))))));
/******/ 				register("@telenet/ng-lib-config", "1.0.0", () => (__webpack_require__.e("libs_shared_config_src_index_ts-_cef30").then(() => (() => (__webpack_require__(/*! ./libs/shared/config/src/index.ts */ 13478))))));
/******/ 				register("@telenet/ng-lib-datalayer", "1.0.0", () => (__webpack_require__.e("libs_shared_datalayer_src_index_ts-_6b2b0").then(() => (() => (__webpack_require__(/*! ./libs/shared/datalayer/src/index.ts */ 68589))))));
/******/ 				register("@telenet/ng-lib-message", "1.0.0", () => (__webpack_require__.e("libs_shared_message_src_index_ts-_15010").then(() => (() => (__webpack_require__(/*! ./libs/shared/message/src/index.ts */ 64976))))));
/******/ 				register("@telenet/ng-lib-ocapi", "1.0.0", () => (__webpack_require__.e("libs_shared_ocapi_src_index_ts-_82a80").then(() => (() => (__webpack_require__(/*! ./libs/shared/ocapi/src/index.ts */ 43421))))));
/******/ 				register("@telenet/ng-lib-omapi-query", "1.0.0", () => (__webpack_require__.e("libs_shared_omapi-query_src_index_ts-_d2f80").then(() => (() => (__webpack_require__(/*! ./libs/shared/omapi-query/src/index.ts */ 45528))))));
/******/ 				register("@telenet/ng-lib-omapi", "1.0.0", () => (__webpack_require__.e("libs_shared_omapi_src_index_ts-_134d0").then(() => (() => (__webpack_require__(/*! ./libs/shared/omapi/src/index.ts */ 70654))))));
/******/ 				register("@telenet/ng-lib-page", "1.0.0", () => (__webpack_require__.e("libs_shared_page_src_index_ts-_25ef0").then(() => (() => (__webpack_require__(/*! ./libs/shared/page/src/index.ts */ 92233))))));
/******/ 				register("@telenet/ng-lib-shared", "1.0.0", () => (__webpack_require__.e("libs_shared_shared_src_index_ts-_5e330").then(() => (() => (__webpack_require__(/*! ./libs/shared/shared/src/index.ts */ 76881))))));
/******/ 				register("rxjs/operators", "7.8.1", () => (__webpack_require__.e("node_modules_rxjs_dist_esm_operators_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/rxjs/dist/esm/operators/index.js */ 78238))))));
/******/ 				register("rxjs", "7.8.1", () => (__webpack_require__.e("node_modules_rxjs_dist_esm_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/rxjs/dist/esm/index.js */ 83946))))));
/******/ 				register("udl", "24.10.627691", () => (__webpack_require__.e("node_modules_udl_dist_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/udl/dist/index.js */ 95597))))));
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types policy */
/******/ (() => {
/******/ 	var policy;
/******/ 	__webpack_require__.tt = () => {
/******/ 		// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 		if (policy === undefined) {
/******/ 			policy = {
/******/ 				createScriptURL: (url) => (url)
/******/ 			};
/******/ 			if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 				policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 			}
/******/ 		}
/******/ 		return policy;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types script url */
/******/ (() => {
/******/ 	__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ (() => {
/******/ 	var parseVersion = (str) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 	}
/******/ 	var versionLt = (a, b) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 	}
/******/ 	var rangeToString = (range) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 	}
/******/ 	var satisfy = (range, version) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 	}
/******/ 	var ensureExistence = (scopeName, key) => {
/******/ 		var scope = __webpack_require__.S[scopeName];
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		return scope;
/******/ 	};
/******/ 	var findVersion = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var findSingletonVersionKey = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		return Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 		}, 0);
/******/ 	};
/******/ 	var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 		return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 	};
/******/ 	var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var findValidVersion = (scope, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			if (!satisfy(requiredVersion, b)) return a;
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 			"Available versions: " + Object.keys(versions).map((key) => {
/******/ 			return key + " from " + versions[key].from;
/******/ 		}).join(", ");
/******/ 	};
/******/ 	var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var entry = findValidVersion(scope, key, requiredVersion);
/******/ 		if(entry) return get(entry);
/******/ 		throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var warn = (msg) => {
/******/ 		if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 	};
/******/ 	var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var get = (entry) => {
/******/ 		entry.loaded = 1;
/******/ 		return entry.get()
/******/ 	};
/******/ 	var init = (fn) => (function(scopeName, a, b, c) {
/******/ 		var promise = __webpack_require__.I(scopeName);
/******/ 		if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 		return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 	});
/******/ 	
/******/ 	var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findVersion(scope, key));
/******/ 	});
/******/ 	var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 	});
/******/ 	var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getValidVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 		return entry ? get(entry) : fallback();
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		33829: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_core_fesm2022_core_mjs").then(() => (() => (__webpack_require__(/*! @angular/core */ 61699))))))),
/******/ 		37934: () => (loadStrictSingletonVersionCheckFallback("default", "rxjs/operators", [4,7,8,1], () => (__webpack_require__.e("node_modules_rxjs_dist_esm_operators_index_js").then(() => (() => (__webpack_require__(/*! rxjs/operators */ 78238))))))),
/******/ 		44946: () => (loadStrictSingletonVersionCheckFallback("default", "rxjs", [4,7,8,1], () => (__webpack_require__.e("node_modules_rxjs_dist_esm_index_js").then(() => (() => (__webpack_require__(/*! rxjs */ 83946))))))),
/******/ 		84569: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_common_fesm2022_common_mjs-_b4620").then(() => (() => (__webpack_require__(/*! @angular/common */ 26575))))))),
/******/ 		66202: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core/primitives/signals", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_core_fesm2022_primitives_signals_mjs").then(() => (() => (__webpack_require__(/*! @angular/core/primitives/signals */ 38186))))))),
/******/ 		1261: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common/http", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_common_fesm2022_http_mjs-_f9341").then(() => (() => (__webpack_require__(/*! @angular/common/http */ 54860))))))),
/******/ 		25288: () => (loadStrictSingletonVersionCheckFallback("default", "@ngrx/store", [4,17,1,0], () => (__webpack_require__.e("node_modules_ngrx_store_fesm2022_ngrx-store_mjs-_da111").then(() => (() => (__webpack_require__(/*! @ngrx/store */ 36270))))))),
/******/ 		24104: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core/rxjs-interop", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_core_fesm2022_rxjs-interop_mjs-_b06f1").then(() => (() => (__webpack_require__(/*! @angular/core/rxjs-interop */ 60839))))))),
/******/ 		12506: () => (loadStrictSingletonVersionCheckFallback("default", "@ngrx/effects", [4,17,1,0], () => (__webpack_require__.e("node_modules_ngrx_effects_fesm2022_ngrx-effects_mjs-_56481").then(() => (() => (__webpack_require__(/*! @ngrx/effects */ 1575))))))),
/******/ 		76158: () => (loadFallback("default", "@telenet/ng-lib-ocapi", () => (__webpack_require__.e("libs_shared_ocapi_src_index_ts-_82a81").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-ocapi */ 43421))))))),
/******/ 		10875: () => (loadStrictSingletonVersionCheckFallback("default", "@ngx-translate/core", [4,15,0,0], () => (__webpack_require__.e("node_modules_ngx-translate_core_dist_fesm2022_ngx-translate-core_mjs-_63781").then(() => (() => (__webpack_require__(/*! @ngx-translate/core */ 5939))))))),
/******/ 		21784: () => (loadFallback("default", "@telenet/ng-lib-page", () => (__webpack_require__.e("libs_shared_page_src_index_ts-_25ef1").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-page */ 92233))))))),
/******/ 		65145: () => (loadFallback("default", "@telenet/ng-lib-message", () => (__webpack_require__.e("libs_shared_message_src_index_ts-_15011").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-message */ 64976))))))),
/******/ 		5109: () => (loadFallback("default", "@return-devices/data-access", () => (__webpack_require__.e("libs_install_return-devices_data-access_src_index_ts-_4f961").then(() => (() => (__webpack_require__(/*! @return-devices/data-access */ 93125))))))),
/******/ 		50746: () => (loadFallback("default", "@return-devices/ui", () => (__webpack_require__.e("libs_install_return-devices_ui_src_index_ts-_b8cf1").then(() => (() => (__webpack_require__(/*! @return-devices/ui */ 89085))))))),
/******/ 		42782: () => (loadFallback("default", "@telenet/ng-lib-datalayer", () => (__webpack_require__.e("libs_shared_datalayer_src_index_ts-_6b2b1").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-datalayer */ 68589))))))),
/******/ 		23302: () => (loadFallback("default", "@return-devices/util", () => (__webpack_require__.e("libs_install_return-devices_util_src_index_ts-_06681").then(() => (() => (__webpack_require__(/*! @return-devices/util */ 83436))))))),
/******/ 		81601: () => (loadFallback("default", "@telenet/ng-lib-config", () => (__webpack_require__.e("libs_shared_config_src_index_ts-_cef31").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-config */ 13478))))))),
/******/ 		77157: () => (loadFallback("default", "@telenet/ng-lib-shared", () => (__webpack_require__.e("libs_shared_shared_src_index_ts-_5e331").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-shared */ 76881))))))),
/******/ 		63975: () => (loadStrictSingletonVersionCheckFallback("default", "udl", [4,24,10,627691], () => (__webpack_require__.e("node_modules_udl_dist_index_js").then(() => (() => (__webpack_require__(/*! udl */ 95597))))))),
/******/ 		64512: () => (loadFallback("default", "@telenet/ng-lib-omapi", () => (__webpack_require__.e("libs_shared_omapi_src_index_ts-_134d1").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-omapi */ 70654))))))),
/******/ 		94761: () => (loadFallback("default", "@telenet/ng-lib-omapi-query", () => (__webpack_require__.e("libs_shared_omapi-query_src_index_ts-_d2f81").then(() => (() => (__webpack_require__(/*! @telenet/ng-lib-omapi-query */ 45528))))))),
/******/ 		44578: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/router", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_router_fesm2022_router_mjs-_5a221").then(() => (() => (__webpack_require__(/*! @angular/router */ 27947))))))),
/******/ 		70782: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/forms", [4,17,1,0], () => (__webpack_require__.e("node_modules_angular_forms_fesm2022_forms_mjs-_0f7c0").then(() => (() => (__webpack_require__(/*! @angular/forms */ 28849))))))),
/******/ 		8767: () => (loadFallback("default", "@return-devices/feat-overview", () => (__webpack_require__.e("libs_install_return-devices_feat-overview_src_index_ts").then(() => (() => (__webpack_require__(/*! @return-devices/feat-overview */ 76961)))))))
/******/ 	};
/******/ 	// no consumes in initial chunks
/******/ 	var chunkMapping = {
/******/ 		"node_modules_angular_common_fesm2022_http_mjs-_f9340": [
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			84569
/******/ 		],
/******/ 		"node_modules_angular_common_fesm2022_common_mjs-_b4621": [
/******/ 			33829
/******/ 		],
/******/ 		"node_modules_angular_core_fesm2022_rxjs-interop_mjs-_b06f0": [
/******/ 			33829,
/******/ 			37934,
/******/ 			44946
/******/ 		],
/******/ 		"node_modules_angular_core_fesm2022_core_mjs": [
/******/ 			66202,
/******/ 			44946,
/******/ 			37934
/******/ 		],
/******/ 		"node_modules_angular_forms_fesm2022_forms_mjs-_0f7c1": [
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			84569
/******/ 		],
/******/ 		"node_modules_angular_router_fesm2022_router_mjs-_5a220": [
/******/ 			1261,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			84569
/******/ 		],
/******/ 		"node_modules_ngrx_effects_fesm2022_ngrx-effects_mjs-_56480": [
/******/ 			25288,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946
/******/ 		],
/******/ 		"node_modules_ngrx_store_fesm2022_ngrx-store_mjs-_da110": [
/******/ 			24104,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946
/******/ 		],
/******/ 		"node_modules_ngx-translate_core_dist_fesm2022_ngx-translate-core_mjs-_63780": [
/******/ 			33829,
/******/ 			37934,
/******/ 			44946
/******/ 		],
/******/ 		"libs_install_return-devices_data-access_src_index_ts-_4f960": [
/******/ 			12506,
/******/ 			25288,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			76158
/******/ 		],
/******/ 		"libs_install_return-devices_feat-overview_src_index_ts": [
/******/ 			33829,
/******/ 			84569,
/******/ 			10875,
/******/ 			76158,
/******/ 			21784,
/******/ 			65145,
/******/ 			5109,
/******/ 			50746,
/******/ 			42782,
/******/ 			44946,
/******/ 			37934
/******/ 		],
/******/ 		"libs_install_return-devices_ui_src_index_ts-_b8cf0": [
/******/ 			5109,
/******/ 			10875,
/******/ 			21784,
/******/ 			23302,
/******/ 			33829,
/******/ 			42782,
/******/ 			84569
/******/ 		],
/******/ 		"libs_install_return-devices_util_src_index_ts-_06680": [
/******/ 			33829,
/******/ 			81601
/******/ 		],
/******/ 		"libs_shared_config_src_index_ts-_cef30": [
/******/ 			33829,
/******/ 			77157
/******/ 		],
/******/ 		"libs_shared_datalayer_src_index_ts-_6b2b0": [
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			63975,
/******/ 			65145
/******/ 		],
/******/ 		"libs_shared_message_src_index_ts-_15010": [
/******/ 			10875,
/******/ 			33829,
/******/ 			77157,
/******/ 			84569
/******/ 		],
/******/ 		"libs_shared_ocapi_src_index_ts-_82a80": [
/******/ 			1261,
/******/ 			10875,
/******/ 			21784,
/******/ 			33829,
/******/ 			37934,
/******/ 			42782,
/******/ 			44946,
/******/ 			64512,
/******/ 			65145,
/******/ 			77157,
/******/ 			81601,
/******/ 			84569,
/******/ 			94761
/******/ 		],
/******/ 		"libs_shared_omapi-query_src_index_ts-_d2f80": [
/******/ 			1261,
/******/ 			21784,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			64512,
/******/ 			65145,
/******/ 			77157,
/******/ 			81601
/******/ 		],
/******/ 		"libs_shared_omapi_src_index_ts-_134d0": [
/******/ 			1261,
/******/ 			21784,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			65145,
/******/ 			77157,
/******/ 			81601
/******/ 		],
/******/ 		"libs_shared_page_src_index_ts-_25ef0": [
/******/ 			1261,
/******/ 			10875,
/******/ 			33829,
/******/ 			37934,
/******/ 			42782,
/******/ 			44578,
/******/ 			44946,
/******/ 			63975,
/******/ 			84569
/******/ 		],
/******/ 		"libs_shared_shared_src_index_ts-_5e330": [
/******/ 			1261,
/******/ 			10875,
/******/ 			33829,
/******/ 			37934,
/******/ 			44946,
/******/ 			70782,
/******/ 			84569
/******/ 		],
/******/ 		"apps_install_return-devices-mfe_src_bootstrap_ts": [
/******/ 			33829,
/******/ 			84569,
/******/ 			8767,
/******/ 			1261
/******/ 		],
/******/ 		"node_modules_angular_common_fesm2022_http_mjs-_f9341": [
/******/ 			37934,
/******/ 			44946,
/******/ 			84569
/******/ 		],
/******/ 		"node_modules_ngrx_store_fesm2022_ngrx-store_mjs-_da111": [
/******/ 			24104
/******/ 		],
/******/ 		"libs_shared_ocapi_src_index_ts-_82a81": [
/******/ 			1261,
/******/ 			10875,
/******/ 			21784,
/******/ 			42782,
/******/ 			64512,
/******/ 			65145,
/******/ 			77157,
/******/ 			81601,
/******/ 			84569,
/******/ 			94761
/******/ 		],
/******/ 		"node_modules_ngx-translate_core_dist_fesm2022_ngx-translate-core_mjs-_63781": [
/******/ 			37934,
/******/ 			44946
/******/ 		],
/******/ 		"libs_shared_page_src_index_ts-_25ef1": [
/******/ 			1261,
/******/ 			10875,
/******/ 			37934,
/******/ 			42782,
/******/ 			44578,
/******/ 			44946,
/******/ 			63975,
/******/ 			84569
/******/ 		],
/******/ 		"libs_shared_message_src_index_ts-_15011": [
/******/ 			10875,
/******/ 			77157,
/******/ 			84569
/******/ 		],
/******/ 		"libs_install_return-devices_data-access_src_index_ts-_4f961": [
/******/ 			12506,
/******/ 			25288,
/******/ 			37934,
/******/ 			44946,
/******/ 			76158
/******/ 		],
/******/ 		"libs_install_return-devices_ui_src_index_ts-_b8cf1": [
/******/ 			23302
/******/ 		],
/******/ 		"libs_shared_datalayer_src_index_ts-_6b2b1": [
/******/ 			37934,
/******/ 			44946,
/******/ 			63975,
/******/ 			65145
/******/ 		],
/******/ 		"libs_install_return-devices_util_src_index_ts-_06681": [
/******/ 			81601
/******/ 		],
/******/ 		"libs_shared_config_src_index_ts-_cef31": [
/******/ 			77157
/******/ 		],
/******/ 		"libs_shared_shared_src_index_ts-_5e331": [
/******/ 			1261,
/******/ 			10875,
/******/ 			37934,
/******/ 			44946,
/******/ 			70782,
/******/ 			84569
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 				var onFactory = (factory) => {
/******/ 					installedModules[id] = 0;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				var onError = (error) => {
/******/ 					delete installedModules[id];
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						throw error;
/******/ 					}
/******/ 				};
/******/ 				try {
/******/ 					var promise = moduleToHandlerMapping[id]();
/******/ 					if(promise.then) {
/******/ 						promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 					} else onFactory(promise);
/******/ 				} catch(e) { onError(e); }
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(true) { // all chunks have JS
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkreturn_devices_mfe"] = self["webpackChunkreturn_devices_mfe"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__(38540);
/******/ 

//# sourceMappingURL=main.js.map