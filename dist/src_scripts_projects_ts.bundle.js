"use strict";
(self["webpackChunktodolist_ts"] = self["webpackChunktodolist_ts"] || []).push([["src_scripts_projects_ts"],{

/***/ "./src/scripts/displayItems.ts":
/*!*************************************!*\
  !*** ./src/scripts/displayItems.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayEditedTodo": () => (/* binding */ displayEditedTodo),
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");
/* harmony import */ var _todoEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoEvent */ "./src/scripts/todoEvent.ts");



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
    p2.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(item.getProperty("dueDate")), { addSuffix: true });
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
    var div1 = document.createElement("div");
    var i1 = document.createElement("i");
    i1.classList.add("fas", "fa-edit");
    div1.addEventListener("click", _todoEvent__WEBPACK_IMPORTED_MODULE_1__.editForm, true);
    div1.appendChild(i1);
    alterDiv.appendChild(div1);
    var div2 = document.createElement("div");
    var i2 = document.createElement("i");
    i2.classList.add("fas", "fa-trash-alt");
    div2.addEventListener("click", _todoEvent__WEBPACK_IMPORTED_MODULE_1__.deleteForm, true);
    div2.appendChild(i2);
    alterDiv.appendChild(div2);
    controls.appendChild(alterDiv);
    return controls;
}
/*
function displaycTodo() {

    const projectName = getCurrentProject();
    const main = document.querySelector("main");
    const add = document.querySelector(".add-item");
    const children = main?.children;
    const arr: Element[] = [];
    if(children) {
        for (let i = 0; i < children.length; i++) {
            if(children[i].classList.contains("todo")) {
                arr.push(children[i])
            }
        }
        for (let i = 0; i < arr.length; i++) {
            arr[i].remove();
        }
    }

    if(projectName) {

        const items = getProject(projectName);
        for(let i = 0; i < items.length; i++) {

            const item = items[i];
            const priority = item.getProperty("priority");

            const divItem = document.createElement("div");
            divItem.classList.add("item");
            divItem.classList.add(priority);
            divItem.classList.add("todo");
            divItem.id = item.getProperty("id");
            divItem.appendChild(createInfo(item));
            divItem.appendChild(createControls(item));
            main?.insertBefore(divItem, add);

        }
    }
}
*/
function displayTodo() {
    var projectName = getCurrentProject();
    var main = document.querySelector("main");
    var add = document.querySelector(".add-item");
    var children = main === null || main === void 0 ? void 0 : main.children;
    var arr = [];
    var arr2 = [];
    var projectArr = [];
    if (children) {
        for (var i = 0; i < children.length; i++) {
            if (children[i].classList.contains("todo")) {
                arr.push(children[i]);
            }
        }
        // Delete todo item
        if (projectName) {
            var project_1 = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectName);
            arr = arr.filter(function (item) {
                for (var i = 0; i < project_1.length; i++) {
                    if (item.id === project_1[i].getProperty("id")) {
                        return false;
                    }
                }
                return true;
            });
        }
        arr.forEach(function (item) {
            item.remove();
        });
        //Add todo item to screen
        for (var i = 0; i < children.length; i++) {
            if (children[i].classList.contains("todo")) {
                arr2.push(children[i]);
            }
        }
        if (projectName) {
            var project = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectName);
            projectArr = project.filter(function (item) {
                for (var i = 0; i < arr2.length; i++) {
                    if (arr2[i].id === item.getProperty("id")) {
                        return false;
                    }
                }
                return true;
            });
        }
    }
    if (projectName) {
        var items = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProject)(projectName);
        for (var i = 0; i < projectArr.length; i++) {
            var item = projectArr[i];
            var priority = item.getProperty("priority");
            var divItem = document.createElement("div");
            divItem.classList.add("item");
            divItem.classList.add(priority);
            divItem.classList.add("todo");
            divItem.id = item.getProperty("id");
            divItem.appendChild(createInfo(item));
            divItem.appendChild(createControls(item));
            main === null || main === void 0 ? void 0 : main.insertBefore(divItem, add);
        }
    }
}
function displayEditedTodo(item, element) {
    var projectName = getCurrentProject();
    var main = document.querySelector("main");
    var add = document.querySelector(".add-item");
    var priority = item.getProperty("priority");
    var divItem = document.createElement("div");
    divItem.classList.add("item");
    divItem.classList.add(priority);
    divItem.classList.add("todo");
    divItem.id = item.getProperty("id");
    divItem.appendChild(createInfo(item));
    divItem.appendChild(createControls(item));
    main === null || main === void 0 ? void 0 : main.replaceChild(divItem, element);
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
    if (value) {
        projectsObj[name].push(value);
        putIntoDateProjects(value);
    }
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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);


var Items = /** @class */ (function () {
    function Items(title, description, dueDate, priority, complete) {
        this.id = uniqid__WEBPACK_IMPORTED_MODULE_1___default()();
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



/***/ }),

/***/ "./src/scripts/todoEvent.ts":
/*!**********************************!*\
  !*** ./src/scripts/todoEvent.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteForm": () => (/* binding */ deleteForm),
/* harmony export */   "editForm": () => (/* binding */ editForm),
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items */ "./src/scripts/todo-items.ts");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayItems */ "./src/scripts/displayItems.ts");



function getCurrentProject() {
    var project = document.querySelector(".active");
    return project === null || project === void 0 ? void 0 : project.id;
}
function showForm() {
    var addDiv = document.querySelector(".add-item");
    var formShowButton = document.querySelector(".form-show");
    var formContainer = addDiv === null || addDiv === void 0 ? void 0 : addDiv.querySelector(".form");
    formShowButton === null || formShowButton === void 0 ? void 0 : formShowButton.classList.add("none");
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.classList.remove("none");
    var form = formContainer === null || formContainer === void 0 ? void 0 : formContainer.querySelector("form");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", submitForm);
}
function removeForm() {
    var addDiv = document.querySelector(".add-item");
    var formShowButton = document.querySelector(".form-show");
    var formContainer = addDiv === null || addDiv === void 0 ? void 0 : addDiv.querySelector(".form");
    formShowButton === null || formShowButton === void 0 ? void 0 : formShowButton.classList.remove("none");
    formContainer === null || formContainer === void 0 ? void 0 : formContainer.classList.add("none");
    var form = formContainer === null || formContainer === void 0 ? void 0 : formContainer.querySelector("form");
    form === null || form === void 0 ? void 0 : form.removeEventListener("submit", submitForm);
}
function submitForm(e) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
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
function deleteForm(e) {
    var _a, _b;
    var element = e.target;
    if (element instanceof HTMLElement) {
        var projectName = getCurrentProject();
        var item = (_b = (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        var id = item === null || item === void 0 ? void 0 : item.id;
        if (projectName) {
            var project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectName);
            for (var i = 0; i < project.length; i++) {
                var item_1 = project[i];
                if (item_1.getProperty("id") === id) {
                    project.splice(i, 1);
                }
            }
            (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateProject)(projectName);
        }
    }
}
function submitEditedForm(e) {
    var _a, _b;
    e.preventDefault();
    var projectName = getCurrentProject();
    if (e.target instanceof HTMLFormElement) {
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
        var complete = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.getAttribute("data-complete");
        var id = (_b = e.target.parentElement) === null || _b === void 0 ? void 0 : _b.id;
        var parent_1 = e.target.parentElement;
        var item = void 0;
        if (projectName) {
            var projects = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectName);
            for (var i = 0; i < projects.length; i++) {
                if (id === projects[i].getProperty("id")) {
                    projects[i].setProperty("title", title);
                    projects[i].setProperty("dueDate", dueDate);
                    projects[i].setProperty("description", description);
                    projects[i].setProperty("priority", priority);
                    projects[i].setProperty("complete", complete || "complete");
                    item = projects[i];
                    if (parent_1) {
                        (0,_displayItems__WEBPACK_IMPORTED_MODULE_2__.displayEditedTodo)(item, parent_1);
                    }
                }
            }
        }
    }
}
function editForm(e) {
    var _a, _b, _c;
    var element = e.target;
    var propArr = [];
    if (element instanceof HTMLElement) {
        var main = document.querySelector("main");
        var projectName = getCurrentProject();
        var item = (_b = (_a = element === null || element === void 0 ? void 0 : element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
        var id = item === null || item === void 0 ? void 0 : item.id;
        var form = (_c = document.querySelector(".form")) === null || _c === void 0 ? void 0 : _c.cloneNode(true);
        if (projectName) {
            var project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectName);
            for (var i = 0; i < project.length; i++) {
                var item_2 = project[i];
                if (item_2.getProperty("id") === id) {
                    propArr[0] = item_2.getProperty("title");
                    propArr[1] = item_2.getProperty("dueDate");
                    propArr[2] = item_2.getProperty("priority");
                    propArr[3] = item_2.getProperty("description");
                    propArr[4] = item_2.getProperty("complete");
                    propArr[5] = item_2.getProperty("id");
                }
            }
            if (form instanceof HTMLElement && item) {
                form.classList.remove("none");
                main === null || main === void 0 ? void 0 : main.replaceChild(form, item);
                form.classList.add("todo");
                var realform = form.querySelector("form");
                realform === null || realform === void 0 ? void 0 : realform.removeEventListener("submit", submitForm);
                if (realform) {
                    for (var i = 0; i < 4; i++) {
                        var element_1 = realform[i];
                        if (element_1 instanceof HTMLInputElement || element_1 instanceof HTMLSelectElement || element_1 instanceof HTMLTextAreaElement) {
                            element_1.value = propArr[i];
                        }
                    }
                    form.setAttribute("data-complete", propArr[4]);
                    form.id = propArr[5];
                    form.addEventListener("submit", submitEditedForm);
                }
            }
        }
    }
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzNCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3BELElBQUcsUUFBUSxFQUFFO29CQUNULEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ3ZCLElBQU0sU0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUcsU0FBTyxZQUFZLGdCQUFnQixJQUFJLFNBQU8sWUFBWSxpQkFBaUIsSUFBSSxTQUFPLFlBQVksbUJBQW1CLEVBQUU7NEJBQ3RILFNBQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM5QjtxQkFDSjtvQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztpQkFDckQ7YUFDSjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBR3dDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9kaXNwbGF5SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL3RvZG8taXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy90b2RvRXZlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi90b2RvLWl0ZW1zXCJcbmltcG9ydCB7IGdldFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZGVsZXRlRm9ybSwgZWRpdEZvcm0gfSBmcm9tIFwiLi90b2RvRXZlbnRcIjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIHJldHVybiBwcm9qZWN0Py5pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gaXRlbS5nZXRQcm9wZXJ0eShcInRpdGxlXCIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIudGV4dENvbnRlbnQgPSBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGl0ZW0uZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKSwge2FkZFN1ZmZpeDogdHJ1ZX0pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICAgIHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250cm9scyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0LmNoZWNrZWQgPSBpdGVtLmdldFByb3BlcnR5KFwiY29tcGxldGVcIikgPT09IFwiY29tcGxldGVcIiA/IHRydWUgOiBmYWxzZTtcbiAgICBpbnB1dC5uYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgIGlucHV0LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGFsdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbHRlckRpdi5jbGFzc0xpc3QuYWRkKFwiYWx0ZXItaXRlbXNcIik7XG5cbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkxLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1lZGl0XCIpO1xuICAgIGRpdjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRGb3JtLCB0cnVlKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGkxKTtcbiAgICBhbHRlckRpdi5hcHBlbmRDaGlsZChkaXYxKTtcblxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaTIuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLXRyYXNoLWFsdFwiKTtcbiAgICBkaXYyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVGb3JtLCB0cnVlKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGkyKTtcbiAgICBhbHRlckRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChhbHRlckRpdik7XG5cbiAgICByZXR1cm4gY29udHJvbHNcbiAgICBcbn1cblxuLypcbmZ1bmN0aW9uIGRpc3BsYXljVG9kbygpIHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1haW4/LmNoaWxkcmVuO1xuICAgIGNvbnN0IGFycjogRWxlbWVudFtdID0gW107XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1wiKSkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkcmVuW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihwcm9qZWN0TmFtZSkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgICAgICBkaXZJdGVtLmlkID0gaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKGl0ZW0pKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udHJvbHMoaXRlbSkpO1xuICAgICAgICAgICAgbWFpbj8uaW5zZXJ0QmVmb3JlKGRpdkl0ZW0sIGFkZCk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiovXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKCkge1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1pdGVtXCIpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbWFpbj8uY2hpbGRyZW47XG4gICAgbGV0IGFycjogRWxlbWVudFtdID0gW107XG4gICAgbGV0IGFycjI6IEVsZW1lbnRbXSA9IFtdO1xuICAgIGxldCBwcm9qZWN0QXJyOiBJdGVtc1tdID0gW107XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1wiKSkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkcmVuW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERlbGV0ZSB0b2RvIGl0ZW1cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGFyciA9IGFyci5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gcHJvamVjdFtpXS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vQWRkIHRvZG8gaXRlbSB0byBzY3JlZW5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1wiKSkge1xuICAgICAgICAgICAgICAgIGFycjIucHVzaChjaGlsZHJlbltpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0QXJyID0gcHJvamVjdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycjIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyMltpXS5pZCA9PT0gaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpZihwcm9qZWN0TmFtZSkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcm9qZWN0QXJyW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5pZCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhpdGVtKSk7XG4gICAgICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRyb2xzKGl0ZW0pKTtcbiAgICAgICAgICAgIG1haW4/Lmluc2VydEJlZm9yZShkaXZJdGVtLCBhZGQpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0ZWRUb2RvKGl0ZW06IEl0ZW1zLCBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcblxuXG4gICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG5cbiAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICBkaXZJdGVtLmlkID0gaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpO1xuICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhpdGVtKSk7XG4gICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVDb250cm9scyhpdGVtKSk7XG4gICAgbWFpbj8ucmVwbGFjZUNoaWxkKGRpdkl0ZW0sIGVsZW1lbnQpO1xuXG59XG5cblxuZXhwb3J0IHsgZGlzcGxheVRvZG8sIGRpc3BsYXlFZGl0ZWRUb2RvIH0iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuL3RvZG8taXRlbXNcIjtcbmltcG9ydCB7IGRpc3BsYXlUb2RvIH0gZnJvbSBcIi4vZGlzcGxheUl0ZW1zXCI7XG5cbmludGVyZmFjZSBQcm9qZWN0c0ludGVyZmFjZSB7XG4gICAgW2luZGV4OiBzdHJpbmddOiBJdGVtc1tdLFxuICAgIGRlZmF1bHQ6IEl0ZW1zW10sXG4gICAgdG9kYXk6IEl0ZW1zW10sXG4gICAgdGhpc1dlZWs6IEl0ZW1zW10sXG59XG5cbmNvbnN0IHByb2plY3RzT2JqOiBQcm9qZWN0c0ludGVyZmFjZSA9IHtcbiAgICBkZWZhdWx0OiBbXSxcbiAgICB0b2RheTogW10sXG4gICAgdGhpc1dlZWs6IFtdXG59XG5cbi8qKkVuc3VyZXMgdG9kYXkgYW5kIHRoaXMgd2VlayBwcm9qZWN0IGFycmF5cyBhcmUgZmlsbGVkIHdpdGggb2JqZWN0cyB3aXRoIGFwcHJvcHJpYXRlIGRhdGUgKi9cbmZ1bmN0aW9uIGNvcnJlY3REYXRlUHJvamVjdHMoKSB7XG5cbiAgICBsZXQgdG9kYXk6IEl0ZW1zW10gPSBbXTtcbiAgICBsZXQgdGhpc1dlZWs6IEl0ZW1zW10gPSBbXTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0c09iaik7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGlmKGtleXNbaV0gIT09IFwidG9kYXlcIiAmJiBrZXlzW2ldICE9PSBcInRoaXNXZWVrXCIpIHtcblxuICAgICAgICAgICAgbGV0IGtleSA9IHByb2plY3RzT2JqW2tleXNbaV1dO1xuXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwga2V5Lmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBrZXlbal07XG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShvYmouZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKTtcblxuICAgICAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1dlZWsucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGlzVG9kYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kYXkucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvamVjdHNPYmoudGhpc1dlZWsgPSB0aGlzV2VlaztcbiAgICBwcm9qZWN0c09iai50b2RheSA9IHRvZGF5O1xufVxuXG5mdW5jdGlvbiBwdXRJbnRvRGF0ZVByb2plY3RzKHBhcmE6IEl0ZW1zIHwgSXRlbXNbXSkge1xuXG4gICAgaWYoQXJyYXkuaXNBcnJheShwYXJhKSkge1xuICAgICAgICBmb3IoY29uc3QgZWxlbWVudCBvZiBwYXJhKSB7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKTtcbiAgICAgICAgICAgIGlmKGlzVGhpc1dlZWsoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c09iai50aGlzV2Vlay5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmKGlzVG9kYXkoZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0c09iai50b2RheS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShwYXJhLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG4gICAgaWYoaXNUaGlzV2VlayhkYXRlKSkge1xuICAgICAgICBwcm9qZWN0c09iai50aGlzV2Vlay5wdXNoKHBhcmEpO1xuICAgIH0gXG4gICAgaWYoaXNUb2RheShkYXRlKSkge1xuICAgICAgICBwcm9qZWN0c09iai50b2RheS5wdXNoKHBhcmEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBwcm9qZWN0c09ialtuYW1lXSA9IFtdO1xufTtcbiAgICBcbmZ1bmN0aW9uIGdldFByb2plY3QobmFtZTogc3RyaW5nKTogSXRlbXNbXSB7XG4gICAgcmV0dXJuIHByb2plY3RzT2JqW25hbWVdXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QobmFtZTogc3RyaW5nLCB2YWx1ZT86IEl0ZW1zKTogdm9pZCB7XG4gICAgaWYodmFsdWUpIHtcbiAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIHB1dEludG9EYXRlUHJvamVjdHModmFsdWUpO1xuICAgIH1cbiAgICBkaXNwbGF5VG9kbygpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGRlbGV0ZSBwcm9qZWN0c09ialtuYW1lXTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVByb2plY3QobmFtZTogc3RyaW5nLCB2YWx1ZTogSXRlbXNbXSk6IHZvaWQge1xuICAgIHByb2plY3RzT2JqW25hbWVdID0gdmFsdWU7XG4gICAgcHV0SW50b0RhdGVQcm9qZWN0cyh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCk6IFByb2plY3RzSW50ZXJmYWNlIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvamVjdHNPYmopXG59XG5cblxuZXhwb3J0IHsgIFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgcmVwbGFjZVByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdHMsIFxuICAgIGNvcnJlY3REYXRlUHJvamVjdHNcbiB9XG4iLCJpbXBvcnQgeyBjb3JyZWN0RGF0ZVByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuXG50eXBlIFByb3BlcnRpZXMgPSBcInRpdGxlXCIgfCBcImRlc2NyaXB0aW9uXCIgfCBcImR1ZURhdGVcIiB8IFwicHJpb3JpdHlcIiB8IFwiY29tcGxldGVcIiB8IFwiaWRcIjtcblxuY2xhc3MgSXRlbXMge1xuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZztcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkdWVEYXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwcmlvcml0eTogc3RyaW5nO1xuICAgIHByaXZhdGUgY29tcGxldGU6IHN0cmluZztcbiAgICBwcml2YXRlIGlkID0gdW5pcWlkKCk7XG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgZHVlRGF0ZTogc3RyaW5nLCBwcmlvcml0eTogc3RyaW5nLCBjb21wbGV0ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHkobmFtZTogUHJvcGVydGllcyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzW25hbWVdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRQcm9wZXJ0eShuYW1lOiBQcm9wZXJ0aWVzLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICBjb3JyZWN0RGF0ZVByb2plY3RzKClcbiAgICB9XG59XG5cbmV4cG9ydCB7IEl0ZW1zIH0iLCJpbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuL3RvZG8taXRlbXNcIjtcbmltcG9ydCB7IGdldFByb2plY3QsIHVwZGF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZGlzcGxheUVkaXRlZFRvZG8gfSBmcm9tIFwiLi9kaXNwbGF5SXRlbXNcIjtcblxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XG4gICAgcmV0dXJuIHByb2plY3Q/LmlkO1xufVxuXG5cbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xuICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWl0ZW1cIik7XG4gICAgY29uc3QgZm9ybVNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tc2hvd1wiKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gYWRkRGl2Py5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybVNob3dCdXR0b24/LmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgIGZvcm1Db250YWluZXI/LmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBmb3JtQ29udGFpbmVyPy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtPy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWl0ZW1cIik7XG4gICAgY29uc3QgZm9ybVNob3dCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tc2hvd1wiKTtcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gYWRkRGl2Py5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgZm9ybVNob3dCdXR0b24/LmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgIGZvcm1Db250YWluZXI/LmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBmb3JtQ29udGFpbmVyPy5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICBmb3JtPy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGU6IEV2ZW50KSB7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldFtpXVxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gYXJyWzBdO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGFyclsxXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gYXJyWzJdO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhcnJbM107XG4gICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtcyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBcImluY29tcGxldGVcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgICAgIGlmKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVGb3JtKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQ7XG5cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByb2plY3RbaV07XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0ZWRGb3JtKGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcblxuICAgIGlmKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldFtpXVxuICAgICAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgYXJyW2ldID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXJyWzBdO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gYXJyWzFdO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGFyclsyXTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBhcnJbM107XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZS50YXJnZXQucGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZVwiKTtcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Py5pZDtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgbGV0IGl0ZW06IEl0ZW1zO1xuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKGlkID09PSBwcm9qZWN0c1tpXS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwidGl0bGVcIiwgdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRQcm9wZXJ0eShcImR1ZURhdGVcIiwgZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwiZGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRQcm9wZXJ0eShcInByaW9yaXR5XCIsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJjb21wbGV0ZVwiLCBjb21wbGV0ZSB8fCBcImNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gcHJvamVjdHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUVkaXRlZFRvZG8oaXRlbSwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZWRpdEZvcm0oZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgbGV0IHByb3BBcnIgPSBbXTtcbiAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQ7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik/LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcHJvamVjdFtpXTtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmdldFByb3BlcnR5KFwiaWRcIikgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbMF0gPSBpdGVtLmdldFByb3BlcnR5KFwidGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbMV0gPSBpdGVtLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFyclsyXSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFyclszXSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFycls0XSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFycls1XSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihmb3JtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXRlbSkge1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICAgICAgICAgICAgbWFpbj8ucmVwbGFjZUNoaWxkKGZvcm0sIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbGZvcm0gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgICAgICAgICAgIHJlYWxmb3JtPy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xuICAgICAgICAgICAgICAgIGlmKHJlYWxmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsZm9ybVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHByb3BBcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlXCIsIHByb3BBcnJbNF0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmlkID0gcHJvcEFycls1XTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEVkaXRlZEZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgeyBzaG93Rm9ybSwgZGVsZXRlRm9ybSwgZWRpdEZvcm0gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9