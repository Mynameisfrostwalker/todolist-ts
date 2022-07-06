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
/* harmony export */   "doesProjectExist": () => (/* binding */ doesProjectExist),
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
function doesProjectExist(name) {
    var key = Object.keys(projectsObj);
    for (var i = 0; i < key.length; i++) {
        if (key[i] === name) {
            return true;
        }
    }
    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUN4QyxJQUFHLE9BQU8sWUFBWSxnQkFBZ0IsRUFBRTtRQUNwQyxJQUFNLFFBQU0sR0FBRyxhQUFPLENBQUMsYUFBYSwwQ0FBRSxhQUFhLENBQUM7UUFDcEQsSUFBTSxFQUFFLEdBQUcsUUFBTSxhQUFOLFFBQU0sdUJBQU4sUUFBTSxDQUFFLEVBQUUsQ0FBQztRQUN0QixJQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDbEIsSUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBRyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDcEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM3QyxJQUFHLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3hCLFFBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNoQzt5QkFBTTt3QkFDSCxRQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDbkM7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBRXdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9kaXNwbGF5SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL3RvZG8taXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy90b2RvRXZlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi90b2RvLWl0ZW1zXCJcbmltcG9ydCB7IGdldFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZGVsZXRlRm9ybSwgZWRpdEZvcm0sIHRvZ2dsZUNvbXBsZXRlIH0gZnJvbSBcIi4vdG9kb0V2ZW50XCI7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICByZXR1cm4gcHJvamVjdD8uaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oaXRlbTogSXRlbXMpIHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJ0aXRsZVwiKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLnRleHRDb250ZW50ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShpdGVtLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSksIHthZGRTdWZmaXg6IHRydWV9KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgICByZXR1cm4gaW5mbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udHJvbHMoaXRlbTogSXRlbXMpIHtcbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udHJvbHMuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBpbnB1dC5jaGVja2VkID0gaXRlbS5nZXRQcm9wZXJ0eShcImNvbXBsZXRlXCIpID09PSBcImNvbXBsZXRlXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgaW5wdXQubmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICBpbnB1dC5pZCA9IFwiY29tcGxldGVcIjtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZUNvbXBsZXRlKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBhbHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWx0ZXJEaXYuY2xhc3NMaXN0LmFkZChcImFsdGVyLWl0ZW1zXCIpO1xuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpMS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtZWRpdFwiKTtcbiAgICBkaXYxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0Rm9ybSwgdHJ1ZSk7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChpMSk7XG4gICAgYWx0ZXJEaXYuYXBwZW5kQ2hpbGQoZGl2MSk7XG5cbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS10cmFzaC1hbHRcIik7XG4gICAgZGl2Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlRm9ybSwgdHJ1ZSk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChpMik7XG4gICAgYWx0ZXJEaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgY29udHJvbHMuYXBwZW5kQ2hpbGQoYWx0ZXJEaXYpO1xuXG4gICAgcmV0dXJuIGNvbnRyb2xzXG4gICAgXG59XG5cbi8qXG5mdW5jdGlvbiBkaXNwbGF5Y1RvZG8oKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWl0ZW1cIik7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtYWluPy5jaGlsZHJlbjtcbiAgICBjb25zdCBhcnI6IEVsZW1lbnRbXSA9IFtdO1xuICAgIGlmKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9cIikpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZHJlbltpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYocHJvamVjdE5hbWUpIHtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5pZCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhpdGVtKSk7XG4gICAgICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRyb2xzKGl0ZW0pKTtcbiAgICAgICAgICAgIG1haW4/Lmluc2VydEJlZm9yZShkaXZJdGVtLCBhZGQpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG4qL1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbygpIHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1haW4/LmNoaWxkcmVuO1xuICAgIGxldCBhcnI6IEVsZW1lbnRbXSA9IFtdO1xuICAgIGxldCBhcnIyOiBFbGVtZW50W10gPSBbXTtcbiAgICBsZXQgcHJvamVjdEFycjogSXRlbXNbXSA9IFtdO1xuICAgIGlmKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9cIikpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZHJlbltpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBEZWxldGUgdG9kbyBpdGVtXG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBhcnIgPSBhcnIuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IHByb2plY3RbaV0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL0FkZCB0b2RvIGl0ZW0gdG8gc2NyZWVuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9cIikpIHtcbiAgICAgICAgICAgICAgICBhcnIyLnB1c2goY2hpbGRyZW5baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdEFyciA9IHByb2plY3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFycjJbaV0uaWQgPT09IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYocHJvamVjdE5hbWUpIHtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJvamVjdEFycltpXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uaWQgPSBpdGVtLmdldFByb3BlcnR5KFwiaWRcIik7XG4gICAgICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oaXRlbSkpO1xuICAgICAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVDb250cm9scyhpdGVtKSk7XG4gICAgICAgICAgICBtYWluPy5pbnNlcnRCZWZvcmUoZGl2SXRlbSwgYWRkKTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdGVkVG9kbyhpdGVtOiBJdGVtcywgZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKTtcblxuICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcbiAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIGRpdkl0ZW0uaWQgPSBpdGVtLmdldFByb3BlcnR5KFwiaWRcIik7XG4gICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKGl0ZW0pKTtcbiAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRyb2xzKGl0ZW0pKTtcbiAgICBtYWluPy5yZXBsYWNlQ2hpbGQoZGl2SXRlbSwgZWxlbWVudCk7XG5cbn1cblxuXG5leHBvcnQgeyBkaXNwbGF5VG9kbywgZGlzcGxheUVkaXRlZFRvZG8gfSIsImltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZG8gfSBmcm9tIFwiLi9kaXNwbGF5SXRlbXNcIjtcblxuaW50ZXJmYWNlIFByb2plY3RzSW50ZXJmYWNlIHtcbiAgICBbaW5kZXg6IHN0cmluZ106IEl0ZW1zW10sXG4gICAgZGVmYXVsdDogSXRlbXNbXSxcbiAgICB0b2RheTogSXRlbXNbXSxcbiAgICB0aGlzV2VlazogSXRlbXNbXSxcbn1cblxuY29uc3QgcHJvamVjdHNPYmo6IFByb2plY3RzSW50ZXJmYWNlID0ge1xuICAgIGRlZmF1bHQ6IFtdLFxuICAgIHRvZGF5OiBbXSxcbiAgICB0aGlzV2VlazogW11cbn1cblxuLyoqRW5zdXJlcyB0b2RheSBhbmQgdGhpcyB3ZWVrIHByb2plY3QgYXJyYXlzIGFyZSBmaWxsZWQgd2l0aCBvYmplY3RzIHdpdGggYXBwcm9wcmlhdGUgZGF0ZSAqL1xuZnVuY3Rpb24gY29ycmVjdERhdGVQcm9qZWN0cygpIHtcblxuICAgIGxldCB0b2RheTogSXRlbXNbXSA9IFtdO1xuICAgIGxldCB0aGlzV2VlazogSXRlbXNbXSA9IFtdO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzT2JqKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgaWYoa2V5c1tpXSAhPT0gXCJ0b2RheVwiICYmIGtleXNbaV0gIT09IFwidGhpc1dlZWtcIikge1xuXG4gICAgICAgICAgICBsZXQga2V5ID0gcHJvamVjdHNPYmpba2V5c1tpXV07XG5cbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGtleVtqXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG9iai5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuXG4gICAgICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzV2Vlay5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoaXNUb2RheShkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0b2RheS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9qZWN0c09iai50aGlzV2VlayA9IHRoaXNXZWVrO1xuICAgIHByb2plY3RzT2JqLnRvZGF5ID0gdG9kYXk7XG59XG5cbmZ1bmN0aW9uIHB1dEludG9EYXRlUHJvamVjdHMocGFyYTogSXRlbXMgfCBJdGVtc1tdKSB7XG5cbiAgICBpZihBcnJheS5pc0FycmF5KHBhcmEpKSB7XG4gICAgICAgIGZvcihjb25zdCBlbGVtZW50IG9mIHBhcmEpIHtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZWxlbWVudC5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuICAgICAgICAgICAgaWYoaXNUaGlzV2VlayhkYXRlKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzT2JqLnRoaXNXZWVrLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYoaXNUb2RheShkYXRlKSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzT2JqLnRvZGF5LnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG5cbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHBhcmEuZ2V0UHJvcGVydHkoXCJkdWVEYXRlXCIpKTtcbiAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgIHByb2plY3RzT2JqLnRoaXNXZWVrLnB1c2gocGFyYSk7XG4gICAgfSBcbiAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgIHByb2plY3RzT2JqLnRvZGF5LnB1c2gocGFyYSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHByb2plY3RzT2JqW25hbWVdID0gW107XG59O1xuICAgIFxuZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lOiBzdHJpbmcpOiBJdGVtc1tdIHtcbiAgICByZXR1cm4gcHJvamVjdHNPYmpbbmFtZV1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlPzogSXRlbXMpOiB2b2lkIHtcbiAgICBpZih2YWx1ZSkge1xuICAgICAgICBwcm9qZWN0c09ialtuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgcHV0SW50b0RhdGVQcm9qZWN0cyh2YWx1ZSk7XG4gICAgfVxuICAgIGRpc3BsYXlUb2RvKCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHByb2plY3RzT2JqW25hbWVdO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBJdGVtc1tdKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0gPSB2YWx1ZTtcbiAgICBwdXRJbnRvRGF0ZVByb2plY3RzKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKTogUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm9qZWN0c09iailcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9kbyhuYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZihuYW1lICE9PSBcInRvZGF5XCIgJiYgbmFtZSAhPT0gXCJ0aGlzV2Vla1wiKSB7XG4gICAgICAgIHByb2plY3RzT2JqW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdHNPYmopO1xuICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICAgICAgaWYoa2V5c1tpXSAhPT0gbmFtZSkge1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBwcm9qZWN0c09ialtrZXlzW2ldXTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwga2V5Lmxlbmd0aDsgaisrKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGtleVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmdldFByb3BlcnR5KFwiaWRcIikgPT09IHByb2plY3RzT2JqW25hbWVdW2luZGV4XS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkuc3BsaWNlKGosIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzT2JqW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkb2VzUHJvamVjdEV4aXN0KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKHByb2plY3RzT2JqKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGtleVtpXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuZXhwb3J0IHsgIFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgcmVwbGFjZVByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdHMsIFxuICAgIGNvcnJlY3REYXRlUHJvamVjdHMsXG4gICAgZGVsZXRlVG9kbyxcbiAgICBkb2VzUHJvamVjdEV4aXN0XG4gfVxuIiwiaW1wb3J0IHsgY29ycmVjdERhdGVQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcblxudHlwZSBQcm9wZXJ0aWVzID0gXCJ0aXRsZVwiIHwgXCJkZXNjcmlwdGlvblwiIHwgXCJkdWVEYXRlXCIgfCBcInByaW9yaXR5XCIgfCBcImNvbXBsZXRlXCIgfCBcImlkXCI7XG5cbmNsYXNzIEl0ZW1zIHtcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIHByaXZhdGUgZHVlRGF0ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgcHJpb3JpdHk6IHN0cmluZztcbiAgICBwcml2YXRlIGNvbXBsZXRlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBpZCA9IHVuaXFpZCgpO1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGR1ZURhdGU6IHN0cmluZywgcHJpb3JpdHk6IHN0cmluZywgY29tcGxldGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb3BlcnR5KG5hbWU6IFByb3BlcnRpZXMpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpc1tuYW1lXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0UHJvcGVydHkobmFtZTogUHJvcGVydGllcywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgY29ycmVjdERhdGVQcm9qZWN0cygpXG4gICAgfVxufVxuXG5leHBvcnQgeyBJdGVtcyB9IiwiaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi90b2RvLWl0ZW1zXCI7XG5pbXBvcnQgeyBnZXRQcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCBkZWxldGVUb2RvIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGRpc3BsYXlFZGl0ZWRUb2RvIH0gZnJvbSBcIi4vZGlzcGxheUl0ZW1zXCI7XG5cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIHJldHVybiBwcm9qZWN0Py5pZDtcbn1cblxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcbiAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1pdGVtXCIpO1xuICAgIGNvbnN0IGZvcm1TaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXNob3dcIik7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGFkZERpdj8ucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm1TaG93QnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICBmb3JtQ29udGFpbmVyPy5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICBjb25zdCBmb3JtID0gZm9ybUNvbnRhaW5lcj8ucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybT8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1pdGVtXCIpO1xuICAgIGNvbnN0IGZvcm1TaG93QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXNob3dcIik7XG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGFkZERpdj8ucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIGZvcm1TaG93QnV0dG9uPy5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICBmb3JtQ29udGFpbmVyPy5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICBjb25zdCBmb3JtID0gZm9ybUNvbnRhaW5lcj8ucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG4gICAgZm9ybT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybShlOiBFdmVudCkge1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZihlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuXG4gICAgICAgICAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXRbaV1cbiAgICAgICAgICAgICAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyW2ldID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGFyclswXTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBhcnJbMV07XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGFyclsyXTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXJyWzNdO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbXModGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgXCJpbmNvbXBsZXRlXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgICAgICBpZihwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdChwcm9qZWN0LCBpdGVtKTtcbiAgICAgICAgICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlRm9ybShlOiBFdmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpZCA9IGl0ZW0/LmlkO1xuXG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBwcm9qZWN0W2ldO1xuICAgICAgICAgICAgICAgIGlmKGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKSA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kbyhwcm9qZWN0TmFtZSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdGVkRm9ybShlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgICBpZihlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXRbaV1cbiAgICAgICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGFycltpXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aXRsZSA9IGFyclswXTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGFyclsxXTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBhcnJbMl07XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYXJyWzNdO1xuICAgICAgICBjb25zdCBjb21wbGV0ZSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZShcImRhdGEtY29tcGxldGVcIik7XG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudD8uaWQ7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGxldCBpdGVtOiBJdGVtcztcbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpZCA9PT0gcHJvamVjdHNbaV0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRQcm9wZXJ0eShcInRpdGxlXCIsIHRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJkdWVEYXRlXCIsIGR1ZURhdGUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRQcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJwcmlvcml0eVwiLCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwiY29tcGxldGVcIiwgY29tcGxldGUgfHwgXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHByb2plY3RzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZihwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlFZGl0ZWRUb2RvKGl0ZW0sIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZWRpdEZvcm0oZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgbGV0IHByb3BBcnIgPSBbXTtcbiAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlkID0gaXRlbT8uaWQ7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik/LmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcHJvamVjdFtpXTtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmdldFByb3BlcnR5KFwiaWRcIikgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbMF0gPSBpdGVtLmdldFByb3BlcnR5KFwidGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbMV0gPSBpdGVtLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFyclsyXSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFyclszXSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFycls0XSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcEFycls1XSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihmb3JtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXRlbSkge1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICAgICAgICAgICAgbWFpbj8ucmVwbGFjZUNoaWxkKGZvcm0sIGl0ZW0pO1xuICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVhbGZvcm0gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgICAgICAgICAgICAgIHJlYWxmb3JtPy5yZW1vdmVFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xuICAgICAgICAgICAgICAgIGlmKHJlYWxmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZWFsZm9ybVtpXVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IHByb3BBcnJbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlXCIsIHByb3BBcnJbNF0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmlkID0gcHJvcEFycls1XTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEVkaXRlZEZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ29tcGxldGUoZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJlbnQ/LmlkO1xuICAgICAgICBpZihpZCAmJiBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihpZCA9PT0gcHJvamVjdFtpXS5nZXRQcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZWxlbWVudC5jaGVja2VkID8gXCJjb21wbGV0ZVwiIDogXCJpbmNvbXBsZXRlXCI7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RbaV0uc2V0UHJvcGVydHkoXCJjb21wbGV0ZVwiLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbXBsZXRlID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QuYWRkKFwiYmx1clwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1clwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgc2hvd0Zvcm0sIGRlbGV0ZUZvcm0sIGVkaXRGb3JtLCB0b2dnbGVDb21wbGV0ZSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=