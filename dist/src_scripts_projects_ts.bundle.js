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
    input.addEventListener("change", _todoEvent__WEBPACK_IMPORTED_MODULE_1__.toggleComplete);
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
    var main = document.querySelector("main");
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
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
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
function deleteTodo(name, index) {
    if (name !== "today" && name !== "thisWeek") {
        projectsObj[name].splice(index, 1);
    }
    else {
        var keys = Object.keys(projectsObj);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] !== name) {
                var key = projectsObj[keys[i]];
                for (var j = 0; j < key.length; j++) {
                    var obj = key[j];
                    if (obj.getProperty("id") === projectsObj[name][index].getProperty("id")) {
                        key.splice(j, 1);
                    }
                }
            }
        }
        projectsObj[name].splice(index, 1);
    }
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
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "toggleComplete": () => (/* binding */ toggleComplete)
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
                    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(projectName, i);
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
                        (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateProject)(projectName);
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
function toggleComplete(e) {
    var _a;
    var element = e.target;
    var projectName = getCurrentProject();
    if (element instanceof HTMLInputElement) {
        var parent_2 = (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        var id = parent_2 === null || parent_2 === void 0 ? void 0 : parent_2.id;
        if (id && projectName) {
            var project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectName);
            for (var i = 0; i < project.length; i++) {
                if (id === project[i].getProperty("id")) {
                    var complete = element.checked ? "complete" : "incomplete";
                    project[i].setProperty("complete", complete);
                    if (complete === "complete") {
                        parent_2.classList.add("blur");
                    }
                    else {
                        parent_2.classList.remove("blur");
                    }
                }
            }
        }
    }
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFHLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNwQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDN0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQzdDLElBQUcsUUFBUSxLQUFLLFVBQVUsRUFBRTt3QkFDeEIsUUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ2hDO3lCQUFNO3dCQUNILFFBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNuQztpQkFDSjthQUNKO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFFd0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL2Rpc3BsYXlJdGVtcy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL3Byb2plY3RzLnRzIiwid2VicGFjazovL3RvZG9saXN0LXRzLy4vc3JjL3NjcmlwdHMvdG9kby1pdGVtcy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL3RvZG9FdmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuL3RvZG8taXRlbXNcIlxuaW1wb3J0IHsgZ2V0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBkZWxldGVGb3JtLCBlZGl0Rm9ybSwgdG9nZ2xlQ29tcGxldGUgfSBmcm9tIFwiLi90b2RvRXZlbnRcIjtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIHJldHVybiBwcm9qZWN0Py5pZDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mbyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAxLnRleHRDb250ZW50ID0gaXRlbS5nZXRQcm9wZXJ0eShcInRpdGxlXCIpO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDEpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcDIudGV4dENvbnRlbnQgPSBmb3JtYXREaXN0YW5jZVRvTm93KG5ldyBEYXRlKGl0ZW0uZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKSwge2FkZFN1ZmZpeDogdHJ1ZX0pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocDIpO1xuICAgIHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250cm9scyhpdGVtOiBJdGVtcykge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKFwiY29udHJvbFwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0LmNoZWNrZWQgPSBpdGVtLmdldFByb3BlcnR5KFwiY29tcGxldGVcIikgPT09IFwiY29tcGxldGVcIiA/IHRydWUgOiBmYWxzZTtcbiAgICBpbnB1dC5uYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgIGlucHV0LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdG9nZ2xlQ29tcGxldGUpO1xuICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGFsdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbHRlckRpdi5jbGFzc0xpc3QuYWRkKFwiYWx0ZXItaXRlbXNcIik7XG5cbiAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkxLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1lZGl0XCIpO1xuICAgIGRpdjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRGb3JtLCB0cnVlKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGkxKTtcbiAgICBhbHRlckRpdi5hcHBlbmRDaGlsZChkaXYxKTtcblxuICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgaTIuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLXRyYXNoLWFsdFwiKTtcbiAgICBkaXYyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVGb3JtLCB0cnVlKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGkyKTtcbiAgICBhbHRlckRpdi5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChhbHRlckRpdik7XG5cbiAgICByZXR1cm4gY29udHJvbHNcbiAgICBcbn1cblxuLypcbmZ1bmN0aW9uIGRpc3BsYXljVG9kbygpIHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1haW4/LmNoaWxkcmVuO1xuICAgIGNvbnN0IGFycjogRWxlbWVudFtdID0gW107XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1wiKSkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkcmVuW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJbaV0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihwcm9qZWN0TmFtZSkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgICAgICBkaXZJdGVtLmlkID0gaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKGl0ZW0pKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udHJvbHMoaXRlbSkpO1xuICAgICAgICAgICAgbWFpbj8uaW5zZXJ0QmVmb3JlKGRpdkl0ZW0sIGFkZCk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbiovXG5cbmZ1bmN0aW9uIGRpc3BsYXlUb2RvKCkge1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1pdGVtXCIpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gbWFpbj8uY2hpbGRyZW47XG4gICAgbGV0IGFycjogRWxlbWVudFtdID0gW107XG4gICAgbGV0IGFycjI6IEVsZW1lbnRbXSA9IFtdO1xuICAgIGxldCBwcm9qZWN0QXJyOiBJdGVtc1tdID0gW107XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1wiKSkge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKGNoaWxkcmVuW2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIERlbGV0ZSB0b2RvIGl0ZW1cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGFyciA9IGFyci5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gcHJvamVjdFtpXS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICB9KVxuXG4gICAgICAgIC8vQWRkIHRvZG8gaXRlbSB0byBzY3JlZW5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYoY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9kb1wiKSkge1xuICAgICAgICAgICAgICAgIGFycjIucHVzaChjaGlsZHJlbltpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBwcm9qZWN0QXJyID0gcHJvamVjdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycjIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYXJyMltpXS5pZCA9PT0gaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpZihwcm9qZWN0TmFtZSkge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcm9qZWN0QXJyW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5pZCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhpdGVtKSk7XG4gICAgICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRyb2xzKGl0ZW0pKTtcbiAgICAgICAgICAgIG1haW4/Lmluc2VydEJlZm9yZShkaXZJdGVtLCBhZGQpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0ZWRUb2RvKGl0ZW06IEl0ZW1zLCBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpO1xuXG4gICAgY29uc3QgZGl2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgZGl2SXRlbS5pZCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oaXRlbSkpO1xuICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udHJvbHMoaXRlbSkpO1xuICAgIG1haW4/LnJlcGxhY2VDaGlsZChkaXZJdGVtLCBlbGVtZW50KTtcblxufVxuXG5cbmV4cG9ydCB7IGRpc3BsYXlUb2RvLCBkaXNwbGF5RWRpdGVkVG9kbyB9IiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlayB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi90b2RvLWl0ZW1zXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9kbyB9IGZyb20gXCIuL2Rpc3BsYXlJdGVtc1wiO1xuXG5pbnRlcmZhY2UgUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgIFtpbmRleDogc3RyaW5nXTogSXRlbXNbXSxcbiAgICBkZWZhdWx0OiBJdGVtc1tdLFxuICAgIHRvZGF5OiBJdGVtc1tdLFxuICAgIHRoaXNXZWVrOiBJdGVtc1tdLFxufVxuXG5jb25zdCBwcm9qZWN0c09iajogUHJvamVjdHNJbnRlcmZhY2UgPSB7XG4gICAgZGVmYXVsdDogW10sXG4gICAgdG9kYXk6IFtdLFxuICAgIHRoaXNXZWVrOiBbXVxufVxuXG4vKipFbnN1cmVzIHRvZGF5IGFuZCB0aGlzIHdlZWsgcHJvamVjdCBhcnJheXMgYXJlIGZpbGxlZCB3aXRoIG9iamVjdHMgd2l0aCBhcHByb3ByaWF0ZSBkYXRlICovXG5mdW5jdGlvbiBjb3JyZWN0RGF0ZVByb2plY3RzKCkge1xuXG4gICAgbGV0IHRvZGF5OiBJdGVtc1tdID0gW107XG4gICAgbGV0IHRoaXNXZWVrOiBJdGVtc1tdID0gW107XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdHNPYmopO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBpZihrZXlzW2ldICE9PSBcInRvZGF5XCIgJiYga2V5c1tpXSAhPT0gXCJ0aGlzV2Vla1wiKSB7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSBwcm9qZWN0c09ialtrZXlzW2ldXTtcblxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ga2V5W2pdO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUob2JqLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG5cbiAgICAgICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3RzT2JqLnRoaXNXZWVrID0gdGhpc1dlZWs7XG4gICAgcHJvamVjdHNPYmoudG9kYXkgPSB0b2RheTtcbn1cblxuZnVuY3Rpb24gcHV0SW50b0RhdGVQcm9qZWN0cyhwYXJhOiBJdGVtcyB8IEl0ZW1zW10pIHtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkocGFyYSkpIHtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcGFyYSkge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShlbGVtZW50LmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG4gICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmoudGhpc1dlZWsucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmoudG9kYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUocGFyYS5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuICAgIGlmKGlzVGhpc1dlZWsoZGF0ZSkpIHtcbiAgICAgICAgcHJvamVjdHNPYmoudGhpc1dlZWsucHVzaChwYXJhKTtcbiAgICB9IFxuICAgIGlmKGlzVG9kYXkoZGF0ZSkpIHtcbiAgICAgICAgcHJvamVjdHNPYmoudG9kYXkucHVzaChwYXJhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0gPSBbXTtcbn07XG4gICAgXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWU6IHN0cmluZyk6IEl0ZW1zW10ge1xuICAgIHJldHVybiBwcm9qZWN0c09ialtuYW1lXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KG5hbWU6IHN0cmluZywgdmFsdWU/OiBJdGVtcyk6IHZvaWQge1xuICAgIGlmKHZhbHVlKSB7XG4gICAgICAgIHByb2plY3RzT2JqW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICBwdXRJbnRvRGF0ZVByb2plY3RzKHZhbHVlKTtcbiAgICB9XG4gICAgZGlzcGxheVRvZG8oKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChuYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBkZWxldGUgcHJvamVjdHNPYmpbbmFtZV07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VQcm9qZWN0KG5hbWU6IHN0cmluZywgdmFsdWU6IEl0ZW1zW10pOiB2b2lkIHtcbiAgICBwcm9qZWN0c09ialtuYW1lXSA9IHZhbHVlO1xuICAgIHB1dEludG9EYXRlUHJvamVjdHModmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpOiBQcm9qZWN0c0ludGVyZmFjZSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb2plY3RzT2JqKVxufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKG5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmKG5hbWUgIT09IFwidG9kYXlcIiAmJiBuYW1lICE9PSBcInRoaXNXZWVrXCIpIHtcbiAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0c09iaik7XG4gICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgXG4gICAgICAgICAgICBpZihrZXlzW2ldICE9PSBuYW1lKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHByb2plY3RzT2JqW2tleXNbaV1dO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ga2V5W2pdO1xuICAgICAgICAgICAgICAgICAgICBpZihvYmouZ2V0UHJvcGVydHkoXCJpZFwiKSA9PT0gcHJvamVjdHNPYmpbbmFtZV1baW5kZXhdLmdldFByb3BlcnR5KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IHsgIFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgcmVwbGFjZVByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdHMsIFxuICAgIGNvcnJlY3REYXRlUHJvamVjdHMsXG4gICAgZGVsZXRlVG9kb1xuIH1cbiIsImltcG9ydCB7IGNvcnJlY3REYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XG5cbnR5cGUgUHJvcGVydGllcyA9IFwidGl0bGVcIiB8IFwiZGVzY3JpcHRpb25cIiB8IFwiZHVlRGF0ZVwiIHwgXCJwcmlvcml0eVwiIHwgXCJjb21wbGV0ZVwiIHwgXCJpZFwiO1xuXG5jbGFzcyBJdGVtcyB7XG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBwcml2YXRlIGR1ZURhdGU6IHN0cmluZztcbiAgICBwcml2YXRlIHByaW9yaXR5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb21wbGV0ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaWQgPSB1bmlxaWQoKTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcsIGNvbXBsZXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eShuYW1lOiBQcm9wZXJ0aWVzKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldFByb3BlcnR5KG5hbWU6IFByb3BlcnRpZXMsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvcnJlY3REYXRlUHJvamVjdHMoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgSXRlbXMgfSIsImltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdCwgdXBkYXRlUHJvamVjdCwgZGVsZXRlVG9kbyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBkaXNwbGF5RWRpdGVkVG9kbyB9IGZyb20gXCIuL2Rpc3BsYXlJdGVtc1wiO1xuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICByZXR1cm4gcHJvamVjdD8uaWQ7XG59XG5cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBmb3JtU2hvd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zaG93XCIpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBhZGREaXY/LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtU2hvd0J1dHRvbj8uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgZm9ybUNvbnRhaW5lcj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBmb3JtU2hvd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zaG93XCIpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBhZGREaXY/LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtU2hvd0J1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgZm9ybUNvbnRhaW5lcj8uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZTogRXZlbnQpIHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcblxuICAgICAgICAgICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0W2ldXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFycltpXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBhcnJbMF07XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gYXJyWzFdO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBhcnJbMl07XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFyclszXTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW1zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICAgICAgaWYocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUZvcm0oZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtPy5pZDtcblxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcHJvamVjdFtpXTtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmdldFByb3BlcnR5KFwiaWRcIikgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG8ocHJvamVjdE5hbWUsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZEZvcm0oZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0W2ldXG4gICAgICAgICAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBhcnJbMF07XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBhcnJbMV07XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gYXJyWzJdO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFyclszXTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlXCIpO1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ/LmlkO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgaXRlbTogSXRlbXM7XG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT09IHByb2plY3RzW2ldLmdldFByb3BlcnR5KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwiZHVlRGF0ZVwiLCBkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwicHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRQcm9wZXJ0eShcImNvbXBsZXRlXCIsIGNvbXBsZXRlIHx8IFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWRpdGVkVG9kbyhpdGVtLCBwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRGb3JtKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGxldCBwcm9wQXJyID0gW107XG4gICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpZCA9IGl0ZW0/LmlkO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpPy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByb2plY3RbaV07XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wQXJyWzBdID0gaXRlbS5nZXRQcm9wZXJ0eShcInRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wQXJyWzFdID0gaXRlbS5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbMl0gPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbM10gPSBpdGVtLmdldFByb3BlcnR5KFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbNF0gPSBpdGVtLmdldFByb3BlcnR5KFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbNV0gPSBpdGVtLmdldFByb3BlcnR5KFwiaWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZm9ybSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgICAgICAgICAgICAgIG1haW4/LnJlcGxhY2VDaGlsZChmb3JtLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxmb3JtID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgICAgICAgICAgICByZWFsZm9ybT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtKTtcbiAgICAgICAgICAgICAgICBpZihyZWFsZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVhbGZvcm1baV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBwcm9wQXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZVwiLCBwcm9wQXJyWzRdKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5pZCA9IHByb3BBcnJbNV07XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRFZGl0ZWRGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50Py5pZDtcbiAgICAgICAgaWYoaWQgJiYgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT09IHByb2plY3RbaV0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZSA9IGVsZW1lbnQuY2hlY2tlZCA/IFwiY29tcGxldGVcIiA6IFwiaW5jb21wbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0W2ldLnNldFByb3BlcnR5KFwiY29tcGxldGVcIiwgY29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICBpZihjb21wbGV0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IHNob3dGb3JtLCBkZWxldGVGb3JtLCBlZGl0Rm9ybSwgdG9nZ2xlQ29tcGxldGUgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9