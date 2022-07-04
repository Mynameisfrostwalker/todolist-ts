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

/***/ "./src/scripts/domEvents.ts":
/*!**********************************!*\
  !*** ./src/scripts/domEvents.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items */ "./src/scripts/todo-items.ts");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");


var formShowButton = document.querySelector(".form-show");
function getCurrentProject() {
    var project = document.querySelector(".active");
    return project === null || project === void 0 ? void 0 : project.id;
}
function showForm() {
    var formContainer = document.querySelector(".form");
    formShowButton === null || formShowButton === void 0 ? void 0 : formShowButton.classList.add("none");
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.classList.remove("none");
    var form = document.querySelector("form");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", submitForm);
}
function removeForm() {
    var formContainer = document.querySelector(".form");
    formShowButton === null || formShowButton === void 0 ? void 0 : formShowButton.classList.remove("none");
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.classList.add("none");
    var form = document.querySelector("form");
}
function submitForm(e) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
        console.log(e.target[0]);
        var arr = [];
        for (var i = 0; i < 4; i++) {
            var element = e.target[i];
            if (element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement) {
                arr[i] = element.value;
                element.value = "";
            }
        }
        var title = arr[0];
        var dueDate = arr[1];
        var priority = arr[2];
        var description = arr[3];
        var item = new _todo_items__WEBPACK_IMPORTED_MODULE_0__.Items(title, description, dueDate, priority, "incomplete");
        var project = getCurrentProject();
        if (project) {
            (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateProject)(project, item);
            removeForm();
        }
    }
}
window.addEventListener("DOMContentLoaded", function () {
    formShowButton === null || formShowButton === void 0 ? void 0 : formShowButton.addEventListener("click", showForm);
});


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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems */ "./src/scripts/displayItems.ts");


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
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) {
                    thisWeek.push(obj);
                }
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
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
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date_1)) {
                projectsObj.thisWeek.push(element);
            }
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date_1)) {
                projectsObj.today.push(element);
            }
        }
        return;
    }
    var date = new Date(para.getProperty("dueDate"));
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(date)) {
        projectsObj.thisWeek.push(para);
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
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
    (0,_displayItems__WEBPACK_IMPORTED_MODULE_0__.displayTodo)();
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



/***/ }),

/***/ "./src/scripts/todo-items.ts":
/*!***********************************!*\
  !*** ./src/scripts/todo-items.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Items": () => (/* binding */ Items)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");

var Items = /** @class */ (function () {
    function Items(title, description, dueDate, priority, complete) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.complete = complete;
    }
    Items.prototype.getProperty = function (name) {
        return this[name];
    };
    Items.prototype.setProperty = function (name, value) {
        this[name] = value;
        (0,_projects__WEBPACK_IMPORTED_MODULE_0__.correctDateProjects)();
    };
    return Items;
}());



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
/******/ 			"domEvents": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_date-fns_esm_formatDistanceToNow_index_js-node_modules_date-fns_esm_isTh-863a0b"], () => (__webpack_require__("./src/scripts/domEvents.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlJdGVtcy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL2RvbUV2ZW50cy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL3Byb2plY3RzLnRzIiwid2VicGFjazovL3RvZG9saXN0LXRzLy4vc3JjL3NjcmlwdHMvdG9kby1pdGVtcy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvZG9saXN0LXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0LXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiXG5pbXBvcnQgeyBnZXRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIHJldHVybiBwcm9qZWN0Py5pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gaXRlbS5nZXRQcm9wZXJ0eShcInRpdGxlXCIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIudGV4dENvbnRlbnQgPSBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGl0ZW0uZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKSwge2FkZFN1ZmZpeDogdHJ1ZX0pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICAgIHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250cm9scyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0LmNoZWNrZWQgPSBpdGVtLmdldFByb3BlcnR5KFwiY29tcGxldGVcIikgPT09IFwiY29tcGxldGVcIiA/IHRydWUgOiBmYWxzZTtcbiAgICBpbnB1dC5uYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgIGlucHV0LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGFsdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbHRlckRpdi5jbGFzc0xpc3QuYWRkKFwiYWx0ZXItaXRlbXNcIik7XG4gICAgY29uc3QgaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpMS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtZWRpdFwiKVxuICAgIGFsdGVyRGl2LmFwcGVuZENoaWxkKGkxKTtcbiAgICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS10cmFzaC1hbHRcIik7XG4gICAgYWx0ZXJEaXYuYXBwZW5kQ2hpbGQoaTIpO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGFsdGVyRGl2KTtcblxuICAgIHJldHVybiBjb250cm9sc1xuICAgIFxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbygpIHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcblxuICAgIGlmKHByb2plY3ROYW1lKSB7XG5cbiAgICAgICAgY29uc3QgaXRlbXMgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKGl0ZW0pKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udHJvbHMoaXRlbSkpO1xuICAgICAgICAgICAgbWFpbj8uaW5zZXJ0QmVmb3JlKGRpdkl0ZW0sIGFkZCk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgZGlzcGxheVRvZG8gfSIsImltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgdXBkYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmNvbnN0IGZvcm1TaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXNob3dcIik7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICByZXR1cm4gcHJvamVjdD8uaWQ7XG59XG5cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtU2hvd0J1dHRvbj8uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgZm9ybUNvbnRhaW5lcj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtU2hvd0J1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgZm9ybUNvbnRhaW5lcj8uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGU6IEV2ZW50KSB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0WzBdKTtcbiAgICAgICAgICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldFtpXVxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGFyclsxXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gYXJyWzJdO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhcnJbM107XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBcImluY29tcGxldGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgICAgIGlmKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGZvcm1TaG93QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xufSlcbiIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZG8gfSBmcm9tIFwiLi9kaXNwbGF5SXRlbXNcIjtcblxuaW50ZXJmYWNlIFByb2plY3RzSW50ZXJmYWNlIHtcbiAgICBbaW5kZXg6IHN0cmluZ106IEl0ZW1zW10sXG4gICAgZGVmYXVsdDogSXRlbXNbXSxcbiAgICB0b2RheTogSXRlbXNbXSxcbiAgICB0aGlzV2VlazogSXRlbXNbXSxcbn1cblxuY29uc3QgcHJvamVjdHNPYmo6IFByb2plY3RzSW50ZXJmYWNlID0ge1xuICAgIGRlZmF1bHQ6IFtdLFxuICAgIHRvZGF5OiBbXSxcbiAgICB0aGlzV2VlazogW11cbn1cblxuLyoqRW5zdXJlcyB0b2RheSBhbmQgdGhpcyB3ZWVrIHByb2plY3QgYXJyYXlzIGFyZSBmaWxsZWQgd2l0aCBvYmplY3RzIHdpdGggYXBwcm9wcmlhdGUgZGF0ZSAqL1xuZnVuY3Rpb24gY29ycmVjdERhdGVQcm9qZWN0cygpIHtcblxuICAgIGxldCB0b2RheTogSXRlbXNbXSA9IFtdO1xuICAgIGxldCB0aGlzV2VlazogSXRlbXNbXSA9IFtdO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzT2JqKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgaWYoa2V5c1tpXSAhPT0gXCJ0b2RheVwiICYmIGtleXNbaV0gIT09IFwidGhpc1dlZWtcIikge1xuXG4gICAgICAgICAgICBsZXQga2V5ID0gcHJvamVjdHNPYmpba2V5c1tpXV07XG5cbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGtleVtqXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG9iai5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuXG4gICAgICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzV2Vlay5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoaXNUb2RheShkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RheS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9qZWN0c09iai50aGlzV2VlayA9IHRoaXNXZWVrO1xuICAgIHByb2plY3RzT2JqLnRvZGF5ID0gdG9kYXk7XG59XG5cbmZ1bmN0aW9uIHB1dEludG9EYXRlUHJvamVjdHMocGFyYTogSXRlbXMgfCBJdGVtc1tdKSB7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHBhcmEpKSB7XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIHBhcmEpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZWxlbWVudC5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhkYXRlKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzT2JqLnRoaXNXZWVrLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoaXNUb2RheShkYXRlKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzT2JqLnRvZGF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHBhcmEuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKTtcbiAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgIHByb2plY3RzT2JqLnRoaXNXZWVrLnB1c2gocGFyYSk7XG4gICAgfSBcbiAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgIHByb2plY3RzT2JqLnRvZGF5LnB1c2gocGFyYSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHByb2plY3RzT2JqW25hbWVdID0gW107XG59O1xuICAgIFxuZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lOiBzdHJpbmcpOiBJdGVtc1tdIHtcbiAgICByZXR1cm4gcHJvamVjdHNPYmpbbmFtZV1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBJdGVtcyk6IHZvaWQge1xuICAgIHByb2plY3RzT2JqW25hbWVdLnB1c2godmFsdWUpO1xuICAgIHB1dEludG9EYXRlUHJvamVjdHModmFsdWUpO1xuICAgIGRpc3BsYXlUb2RvKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHByb2plY3RzT2JqW25hbWVdO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBJdGVtc1tdKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0gPSB2YWx1ZTtcbiAgICBwdXRJbnRvRGF0ZVByb2plY3RzKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKTogUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm9qZWN0c09iailcbn1cblxuXG5leHBvcnQgeyAgXG4gICAgY3JlYXRlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICByZXBsYWNlUHJvamVjdCxcbiAgICBnZXRBbGxQcm9qZWN0cywgXG4gICAgY29ycmVjdERhdGVQcm9qZWN0c1xuIH1cbiIsImltcG9ydCB7IGNvcnJlY3REYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG50eXBlIFByb3BlcnRpZXMgPSBcInRpdGxlXCIgfCBcImRlc2NyaXB0aW9uXCIgfCBcImR1ZURhdGVcIiB8IFwicHJpb3JpdHlcIiB8IFwiY29tcGxldGVcIjtcblxuY2xhc3MgSXRlbXMge1xuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZztcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkdWVEYXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwcmlvcml0eTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcGxldGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcsIGNvbXBsZXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eShuYW1lOiBQcm9wZXJ0aWVzKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldFByb3BlcnR5KG5hbWU6IFByb3BlcnRpZXMsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvcnJlY3REYXRlUHJvamVjdHMoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgSXRlbXMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImRvbUV2ZW50c1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvbGlzdF90c1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvbGlzdF90c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZGF0ZS1mbnNfZXNtX2Zvcm1hdERpc3RhbmNlVG9Ob3dfaW5kZXhfanMtbm9kZV9tb2R1bGVzX2RhdGUtZm5zX2VzbV9pc1RoLTg2M2EwYlwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2RvbUV2ZW50cy50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9