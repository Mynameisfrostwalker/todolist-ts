/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/displayItems.ts":
/*!*************************************!*\
  !*** ./src/scripts/displayItems.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");


function getCurrentProject() {
    var project = document.querySelector(".active");
    return project === null || project === void 0 ? void 0 : project.id;
}
function createInfo(item) {
    var info = document.createElement("div");
    info.classList.add("info");
    var p1 = document.createElement("p");
    p1.textContent = item.getProperty("title");
    info.appendChild(p1);
    var p2 = document.createElement("p");
    p2.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(item.getProperty("dueDate")), { addSuffix: true });
    info.appendChild(p2);
    return info;
}
function createControls(item) {
    var controls = document.createElement("div");
    controls.classList.add("control");
    var input = document.createElement("input");
    input.type = "checkbox";
    input.checked = item.getProperty("complete") === "complete" ? true : false;
    input.name = "complete";
    input.id = "complete";
    controls.appendChild(input);
    var alterDiv = document.createElement("div");
    alterDiv.classList.add("alter-items");
    var i1 = document.createElement("i");
    i1.classList.add("fas", "fa-edit");
    alterDiv.appendChild(i1);
    var i2 = document.createElement("i");
    i2.classList.add("fas", "fa-trash-alt");
    alterDiv.appendChild(i2);
    controls.appendChild(alterDiv);
    return controls;
}
function displayTodo() {
    var projectName = getCurrentProject();
    var main = document.querySelector("main");
    var add = document.querySelector(".add-item");
    if (projectName) {
        var items = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectName);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var priority = item.getProperty("priority");
            var divItem = document.createElement("div");
            divItem.classList.add("item");
            divItem.classList.add(priority);
            divItem.appendChild(createInfo(item));
            divItem.appendChild(createControls(item));
            main === null || main === void 0 ? void 0 : main.insertBefore(divItem, add);
        }
    }
}



/***/ }),

/***/ "./src/scripts/projects.ts":
/*!*********************************!*\
  !*** ./src/scripts/projects.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "correctDateProjects": () => (/* binding */ correctDateProjects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "replaceProject": () => (/* binding */ replaceProject),
/* harmony export */   "updateProject": () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");

var projectsObj = {
    default: [],
    today: [],
    thisWeek: []
};
/**Ensures today and this week project arrays are filled with objects with appropriate date */
function correctDateProjects() {
    var today = [];
    var thisWeek = [];
    var keys = Object.keys(projectsObj);
    for (var i = 0; i < keys.length; i++) {
        if (keys[i] !== "today" && keys[i] !== "thisWeek") {
            var key = projectsObj[keys[i]];
            for (var j = 0; j < key.length; j++) {
                var obj = key[j];
                var date = new Date(obj.getProperty("dueDate"));
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date)) {
                    thisWeek.push(obj);
                }
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) {
                    today.push(obj);
                }
            }
        }
    }
    projectsObj.thisWeek = thisWeek;
    projectsObj.today = today;
}
function putIntoDateProjects(para) {
    if (Array.isArray(para)) {
        for (var _i = 0, para_1 = para; _i < para_1.length; _i++) {
            var element = para_1[_i];
            var date_1 = new Date(element.getProperty("dueDate"));
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date_1)) {
                projectsObj.thisWeek.push(element);
            }
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date_1)) {
                projectsObj.today.push(element);
            }
        }
        return;
    }
    var date = new Date(para.getProperty("dueDate"));
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date)) {
        projectsObj.thisWeek.push(para);
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) {
        projectsObj.today.push(para);
    }
}
function createProject(name) {
    projectsObj[name] = [];
}
;
function getProject(name) {
    return projectsObj[name];
}
function updateProject(name, value) {
    projectsObj[name].push(value);
    putIntoDateProjects(value);
}
function deleteProject(name) {
    delete projectsObj[name];
}
function replaceProject(name, value) {
    projectsObj[name] = value;
    putIntoDateProjects(value);
}
function getAllProjects() {
    return Object.assign({}, projectsObj);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"displayItems": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodolist_ts"] = self["webpackChunktodolist_ts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_date-fns_esm_isThisWeek_index_js-node_modules_date-fns_esm_isToday_index_js","vendors-node_modules_date-fns_esm_formatDistanceToNow_index_js"], () => (__webpack_require__("./src/scripts/displayItems.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9kaXNwbGF5SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvZG9saXN0LXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0LXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiXG5pbXBvcnQgeyBnZXRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIHJldHVybiBwcm9qZWN0Py5pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gaXRlbS5nZXRQcm9wZXJ0eShcInRpdGxlXCIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIudGV4dENvbnRlbnQgPSBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGl0ZW0uZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKSwge2FkZFN1ZmZpeDogdHJ1ZX0pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICAgIHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250cm9scyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0LmNoZWNrZWQgPSBpdGVtLmdldFByb3BlcnR5KFwiY29tcGxldGVcIikgPT09IFwiY29tcGxldGVcIiA/IHRydWUgOiBmYWxzZTtcbiAgICBpbnB1dC5uYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgIGlucHV0LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGFsdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbHRlckRpdi5jbGFzc0xpc3QuYWRkKFwiYWx0ZXItaXRlbXNcIik7XG4gICAgY29uc3QgaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpMS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtZWRpdFwiKVxuICAgIGFsdGVyRGl2LmFwcGVuZENoaWxkKGkxKTtcbiAgICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS10cmFzaC1hbHRcIik7XG4gICAgYWx0ZXJEaXYuYXBwZW5kQ2hpbGQoaTIpO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGFsdGVyRGl2KTtcblxuICAgIHJldHVybiBjb250cm9sc1xuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbygpIHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcblxuICAgIGlmKHByb2plY3ROYW1lKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKGl0ZW0pKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udHJvbHMoaXRlbSkpO1xuICAgICAgICAgICAgbWFpbj8uaW5zZXJ0QmVmb3JlKGRpdkl0ZW0sIGFkZCk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgZGlzcGxheVRvZG8gfSIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuXG5pbnRlcmZhY2UgUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgIFtpbmRleDogc3RyaW5nXTogSXRlbXNbXSxcbiAgICBkZWZhdWx0OiBJdGVtc1tdLFxuICAgIHRvZGF5OiBJdGVtc1tdLFxuICAgIHRoaXNXZWVrOiBJdGVtc1tdLFxufVxuXG5jb25zdCBwcm9qZWN0c09iajogUHJvamVjdHNJbnRlcmZhY2UgPSB7XG4gICAgZGVmYXVsdDogW10sXG4gICAgdG9kYXk6IFtdLFxuICAgIHRoaXNXZWVrOiBbXVxufVxuXG4vKipFbnN1cmVzIHRvZGF5IGFuZCB0aGlzIHdlZWsgcHJvamVjdCBhcnJheXMgYXJlIGZpbGxlZCB3aXRoIG9iamVjdHMgd2l0aCBhcHByb3ByaWF0ZSBkYXRlICovXG5mdW5jdGlvbiBjb3JyZWN0RGF0ZVByb2plY3RzKCkge1xuXG4gICAgbGV0IHRvZGF5OiBJdGVtc1tdID0gW107XG4gICAgbGV0IHRoaXNXZWVrOiBJdGVtc1tdID0gW107XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdHNPYmopO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBpZihrZXlzW2ldICE9PSBcInRvZGF5XCIgJiYga2V5c1tpXSAhPT0gXCJ0aGlzV2Vla1wiKSB7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSBwcm9qZWN0c09ialtrZXlzW2ldXTtcblxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ga2V5W2pdO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUob2JqLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG5cbiAgICAgICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3RzT2JqLnRoaXNXZWVrID0gdGhpc1dlZWs7XG4gICAgcHJvamVjdHNPYmoudG9kYXkgPSB0b2RheTtcbn1cblxuZnVuY3Rpb24gcHV0SW50b0RhdGVQcm9qZWN0cyhwYXJhOiBJdGVtcyB8IEl0ZW1zW10pIHtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkocGFyYSkpIHtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcGFyYSkge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShlbGVtZW50LmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG4gICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmoudGhpc1dlZWsucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmoudG9kYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUocGFyYS5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuICAgIGlmKGlzVGhpc1dlZWsoZGF0ZSkpIHtcbiAgICAgICAgcHJvamVjdHNPYmoudGhpc1dlZWsucHVzaChwYXJhKTtcbiAgICB9IFxuICAgIGlmKGlzVG9kYXkoZGF0ZSkpIHtcbiAgICAgICAgcHJvamVjdHNPYmoudG9kYXkucHVzaChwYXJhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0gPSBbXTtcbn07XG4gICAgXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWU6IHN0cmluZyk6IEl0ZW1zW10ge1xuICAgIHJldHVybiBwcm9qZWN0c09ialtuYW1lXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KG5hbWU6IHN0cmluZywgdmFsdWU6IEl0ZW1zKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgcHV0SW50b0RhdGVQcm9qZWN0cyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHByb2plY3RzT2JqW25hbWVdO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBJdGVtc1tdKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0gPSB2YWx1ZTtcbiAgICBwdXRJbnRvRGF0ZVByb2plY3RzKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKTogUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm9qZWN0c09iailcbn1cblxuXG5leHBvcnQgeyAgXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICByZXBsYWNlUHJvamVjdCxcbiAgICBnZXRBbGxQcm9qZWN0cywgXG4gICAgY29ycmVjdERhdGVQcm9qZWN0c1xuIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImRpc3BsYXlJdGVtc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvbGlzdF90c1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvbGlzdF90c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2lzVGhpc1dlZWtfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9pc1RvZGF5X2luZGV4X2pzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19kYXRlLWZuc19lc21fZm9ybWF0RGlzdGFuY2VUb05vd19pbmRleF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2Rpc3BsYXlJdGVtcy50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9