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

/***/ "./src/scripts/localStorage.ts":
/*!*************************************!*\
  !*** ./src/scripts/localStorage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "setProjects": () => (/* binding */ setProjects)
/* harmony export */ });
/* harmony import */ var _todo_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-items */ "./src/scripts/todo-items.ts");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");
/* harmony import */ var _projectEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectEvent */ "./src/scripts/projectEvent.ts");



function getProjects() {
    var projectsObj = localStorage.getItem("todo0bj");
    if (projectsObj) {
        var obj = JSON.parse(projectsObj);
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === "today" || keys[i] === "thisWeek") {
                continue;
            }
            if (keys[i] !== "default") {
                (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)(keys[i]);
            }
            var arr = obj[keys[i]];
            for (var j = 0; j < arr.length; j++) {
                var item = new _todo_items__WEBPACK_IMPORTED_MODULE_0__.Items(arr[j].title, arr[j].description, arr[j].dueDate, arr[j].priority, arr[j].complete);
                (0,_projects__WEBPACK_IMPORTED_MODULE_1__.updateProject)(keys[i], item);
            }
        }
    }
    (0,_projectEvent__WEBPACK_IMPORTED_MODULE_2__.showProjects)();
}
function setProjects(obj) {
    localStorage.setItem("todo0bj", JSON.stringify(obj));
}



/***/ }),

/***/ "./src/scripts/projectEvent.ts":
/*!*************************************!*\
  !*** ./src/scripts/projectEvent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeProject": () => (/* binding */ changeProject),
/* harmony export */   "showProjectInput": () => (/* binding */ showProjectInput),
/* harmony export */   "showProjects": () => (/* binding */ showProjects)
/* harmony export */ });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayItems */ "./src/scripts/displayItems.ts");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");



function changeProject(e) {
    var _a, _b;
    var active = document.querySelector(".active");
    var addItemButton = document.querySelector(".add-item");
    active === null || active === void 0 ? void 0 : active.classList.remove("active");
    if (e.target instanceof HTMLElement) {
        e.target.classList.add("active");
        if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.id) === "today" || ((_b = e.target) === null || _b === void 0 ? void 0 : _b.id) === "thisWeek") {
            if (!(addItemButton === null || addItemButton === void 0 ? void 0 : addItemButton.classList.contains("none"))) {
                addItemButton === null || addItemButton === void 0 ? void 0 : addItemButton.classList.add("none");
            }
        }
        else if (addItemButton === null || addItemButton === void 0 ? void 0 : addItemButton.classList.contains("none")) {
            addItemButton === null || addItemButton === void 0 ? void 0 : addItemButton.classList.remove("none");
        }
        (0,_displayItems__WEBPACK_IMPORTED_MODULE_1__.displayTodo)();
    }
}
function deleteProjectDOM(e) {
    e.stopPropagation();
    var element = e.target;
    if (element instanceof HTMLElement) {
        var parent_1 = element.parentElement;
        var id = parent_1 === null || parent_1 === void 0 ? void 0 : parent_1.id;
        if (id) {
            (0,_projects__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(id);
            parent_1.remove();
        }
    }
    var active = document.querySelector(".active");
    if (!active) {
        var defaultProject = document.querySelector("#default");
        defaultProject === null || defaultProject === void 0 ? void 0 : defaultProject.classList.add("active");
        (0,_projects__WEBPACK_IMPORTED_MODULE_2__.updateProject)("default");
    }
}
function submitInput(e) {
    if (e instanceof KeyboardEvent) {
        if (e.key === "Enter") {
            var input = document.querySelector("#project-input");
            var ul = document.querySelector(".projects-list");
            var li = document.querySelector(".add-projects-list");
            var newli = document.createElement("li");
            var iDiv = document.createElement("div");
            var i = document.createElement("i");
            i.classList.add("fas", "fa-window-close");
            iDiv.addEventListener("click", deleteProjectDOM);
            iDiv.appendChild(i);
            if (input instanceof HTMLInputElement) {
                var value = (input === null || input === void 0 ? void 0 : input.value) || uniqid__WEBPACK_IMPORTED_MODULE_0___default()();
                if ((0,_projects__WEBPACK_IMPORTED_MODULE_2__.doesProjectExist)(value)) {
                    input.value = "Name taken!";
                    return;
                }
                (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)(value);
                newli.textContent = value;
                newli.id = value;
                newli.classList.add("project");
                newli.appendChild(iDiv);
                ul === null || ul === void 0 ? void 0 : ul.insertBefore(newli, li);
                input.classList.add("none");
                input.value = "";
                newli.addEventListener("click", changeProject);
            }
        }
    }
}
function showProjectInput() {
    var input = document.querySelector("#project-input");
    if (input === null || input === void 0 ? void 0 : input.classList.contains("none")) {
        input.classList.remove("none");
        input.addEventListener("keydown", submitInput);
    }
}
function showProjects() {
    var obj = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.getAllProjects)();
    var keys = Object.keys(obj);
    var ul = document.querySelector(".projects-list");
    var li = document.querySelector(".add-projects-list");
    for (var j = 0; j < keys.length; j++) {
        if (keys[j] !== "default" && keys[j] !== "today" && keys[j] !== "thisWeek") {
            var newli = document.createElement("li");
            var iDiv = document.createElement("div");
            var i = document.createElement("i");
            i.classList.add("fas", "fa-window-close");
            iDiv.addEventListener("click", deleteProjectDOM);
            iDiv.appendChild(i);
            newli.textContent = keys[j];
            newli.id = keys[j];
            newli.classList.add("project");
            newli.appendChild(iDiv);
            ul === null || ul === void 0 ? void 0 : ul.insertBefore(newli, li);
            newli.addEventListener("click", changeProject);
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
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "doesProjectExist": () => (/* binding */ doesProjectExist),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "replaceProject": () => (/* binding */ replaceProject),
/* harmony export */   "updateProject": () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _displayItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayItems */ "./src/scripts/displayItems.ts");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/scripts/localStorage.ts");



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
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
                    thisWeek.push(obj);
                }
                if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date)) {
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
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date_1)) {
                projectsObj.thisWeek.push(element);
            }
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date_1)) {
                projectsObj.today.push(element);
            }
        }
        return;
    }
    var date = new Date(para.getProperty("dueDate"));
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(date)) {
        projectsObj.thisWeek.push(para);
    }
    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date)) {
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
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setProjects)(projectsObj);
}
function deleteProject(name) {
    delete projectsObj[name];
    correctDateProjects();
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setProjects)(projectsObj);
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
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.setProjects)(projectsObj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsSUFBTSxPQUFPLEdBQUcscURBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4QyxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBRyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDcEMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBQzdELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM3QyxJQUFHLFFBQVEsS0FBSyxVQUFVLEVBQUU7d0JBQ3hCLFFBQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNoQzt5QkFBTTt3QkFDSCxRQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDbkM7aUJBQ0o7YUFDSjtTQUNKO0tBQ0o7QUFDTCxDQUFDO0FBRXdEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9kaXNwbGF5SXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9sb2NhbFN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9wcm9qZWN0RXZlbnQudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy8uL3NyYy9zY3JpcHRzL3RvZG8taXRlbXMudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvLi9zcmMvc2NyaXB0cy90b2RvRXZlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgSXRlbXMgfSBmcm9tIFwiLi90b2RvLWl0ZW1zXCJcbmltcG9ydCB7IGdldFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgZGVsZXRlRm9ybSwgZWRpdEZvcm0sIHRvZ2dsZUNvbXBsZXRlIH0gZnJvbSBcIi4vdG9kb0V2ZW50XCI7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICByZXR1cm4gcHJvamVjdD8uaWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm8oaXRlbTogSXRlbXMpIHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwMS50ZXh0Q29udGVudCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJ0aXRsZVwiKTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAxKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAyLnRleHRDb250ZW50ID0gZm9ybWF0RGlzdGFuY2VUb05vdyhuZXcgRGF0ZShpdGVtLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSksIHthZGRTdWZmaXg6IHRydWV9KTtcbiAgICBpbmZvLmFwcGVuZENoaWxkKHAyKTtcbiAgICByZXR1cm4gaW5mbztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udHJvbHMoaXRlbTogSXRlbXMpIHtcbiAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udHJvbHMuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICBpbnB1dC5jaGVja2VkID0gaXRlbS5nZXRQcm9wZXJ0eShcImNvbXBsZXRlXCIpID09PSBcImNvbXBsZXRlXCIgPyB0cnVlIDogZmFsc2U7XG4gICAgaW5wdXQubmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICBpbnB1dC5pZCA9IFwiY29tcGxldGVcIjtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRvZ2dsZUNvbXBsZXRlKTtcbiAgICBjb250cm9scy5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBjb25zdCBhbHRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWx0ZXJEaXYuY2xhc3NMaXN0LmFkZChcImFsdGVyLWl0ZW1zXCIpO1xuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpMS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtZWRpdFwiKTtcbiAgICBkaXYxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0Rm9ybSwgdHJ1ZSk7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChpMSk7XG4gICAgYWx0ZXJEaXYuYXBwZW5kQ2hpbGQoZGl2MSk7XG5cbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS10cmFzaC1hbHRcIik7XG4gICAgZGl2Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlRm9ybSwgdHJ1ZSk7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZChpMik7XG4gICAgYWx0ZXJEaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG4gICAgY29udHJvbHMuYXBwZW5kQ2hpbGQoYWx0ZXJEaXYpO1xuXG4gICAgcmV0dXJuIGNvbnRyb2xzXG4gICAgXG59XG5cbi8qXG5mdW5jdGlvbiBkaXNwbGF5Y1RvZG8oKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWl0ZW1cIik7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBtYWluPy5jaGlsZHJlbjtcbiAgICBjb25zdCBhcnI6IEVsZW1lbnRbXSA9IFtdO1xuICAgIGlmKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9cIikpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZHJlbltpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyW2ldLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYocHJvamVjdE5hbWUpIHtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChwcmlvcml0eSk7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgZGl2SXRlbS5pZCA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQoY3JlYXRlSW5mbyhpdGVtKSk7XG4gICAgICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRyb2xzKGl0ZW0pKTtcbiAgICAgICAgICAgIG1haW4/Lmluc2VydEJlZm9yZShkaXZJdGVtLCBhZGQpO1xuXG4gICAgICAgIH1cbiAgICB9XG59XG4qL1xuXG5mdW5jdGlvbiBkaXNwbGF5VG9kbygpIHtcblxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IG1haW4/LmNoaWxkcmVuO1xuICAgIGxldCBhcnI6IEVsZW1lbnRbXSA9IFtdO1xuICAgIGxldCBhcnIyOiBFbGVtZW50W10gPSBbXTtcbiAgICBsZXQgcHJvamVjdEFycjogSXRlbXNbXSA9IFtdO1xuICAgIGlmKGNoaWxkcmVuKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9cIikpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChjaGlsZHJlbltpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBEZWxldGUgdG9kbyBpdGVtXG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBhcnIgPSBhcnIuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IHByb2plY3RbaV0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgfSlcblxuICAgICAgICAvL0FkZCB0b2RvIGl0ZW0gdG8gc2NyZWVuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucyhcInRvZG9cIikpIHtcbiAgICAgICAgICAgICAgICBhcnIyLnB1c2goY2hpbGRyZW5baV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcHJvamVjdEFyciA9IHByb2plY3QuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFycjJbaV0uaWQgPT09IGl0ZW0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaWYocHJvamVjdE5hbWUpIHtcblxuICAgICAgICBjb25zdCBpdGVtcyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFyci5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gcHJvamVjdEFycltpXTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gaXRlbS5nZXRQcm9wZXJ0eShcInByaW9yaXR5XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgICAgICAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQocHJpb3JpdHkpO1xuICAgICAgICAgICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKTtcbiAgICAgICAgICAgIGRpdkl0ZW0uaWQgPSBpdGVtLmdldFByb3BlcnR5KFwiaWRcIik7XG4gICAgICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUluZm8oaXRlbSkpO1xuICAgICAgICAgICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVDb250cm9scyhpdGVtKSk7XG4gICAgICAgICAgICBtYWluPy5pbnNlcnRCZWZvcmUoZGl2SXRlbSwgYWRkKTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdGVkVG9kbyhpdGVtOiBJdGVtcywgZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgICBjb25zdCBwcmlvcml0eSA9IGl0ZW0uZ2V0UHJvcGVydHkoXCJwcmlvcml0eVwiKTtcblxuICAgIGNvbnN0IGRpdkl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgZGl2SXRlbS5jbGFzc0xpc3QuYWRkKHByaW9yaXR5KTtcbiAgICBkaXZJdGVtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgIGRpdkl0ZW0uaWQgPSBpdGVtLmdldFByb3BlcnR5KFwiaWRcIik7XG4gICAgZGl2SXRlbS5hcHBlbmRDaGlsZChjcmVhdGVJbmZvKGl0ZW0pKTtcbiAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRyb2xzKGl0ZW0pKTtcbiAgICBtYWluPy5yZXBsYWNlQ2hpbGQoZGl2SXRlbSwgZWxlbWVudCk7XG5cbn1cblxuXG5leHBvcnQgeyBkaXNwbGF5VG9kbywgZGlzcGxheUVkaXRlZFRvZG8gfSIsImltcG9ydCB7IFByb2plY3RzSW50ZXJmYWNlIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgdXBkYXRlUHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHNob3dQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RFdmVudFwiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBsZXQgcHJvamVjdHNPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG8wYmpcIik7XG4gICAgaWYocHJvamVjdHNPYmopIHtcbiAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UocHJvamVjdHNPYmopO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZihrZXlzW2ldICA9PT0gXCJ0b2RheVwiIHx8IGtleXNbaV0gPT09IFwidGhpc1dlZWtcIikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoa2V5c1tpXSAhPT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGtleXNbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyID0gb2JqW2tleXNbaV1dO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtcyhcbiAgICAgICAgICAgICAgICAgICAgYXJyW2pdLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBhcnJbal0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgIGFycltqXS5kdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICBhcnJbal0ucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGFycltqXS5jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3Qoa2V5c1tpXSwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd1Byb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RzKG9iajogUHJvamVjdHNJbnRlcmZhY2UpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG8wYmpcIiwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzLCBzZXRQcm9qZWN0cyB9IiwiaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9kbyB9IGZyb20gXCIuL2Rpc3BsYXlJdGVtc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgZG9lc1Byb2plY3RFeGlzdCwgZGVsZXRlUHJvamVjdCwgdXBkYXRlUHJvamVjdCwgZ2V0QWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5cbmZ1bmN0aW9uIGNoYW5nZVByb2plY3QoZTogRXZlbnQpIHtcbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICBjb25zdCBhZGRJdGVtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBhY3RpdmU/LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZihlLnRhcmdldD8uaWQgPT09IFwidG9kYXlcIiB8fCBlLnRhcmdldD8uaWQgPT09IFwidGhpc1dlZWtcIikge1xuICAgICAgICAgICAgaWYoIWFkZEl0ZW1CdXR0b24/LmNsYXNzTGlzdC5jb250YWlucyhcIm5vbmVcIikpIHtcbiAgICAgICAgICAgICAgICBhZGRJdGVtQnV0dG9uPy5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoYWRkSXRlbUJ1dHRvbj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibm9uZVwiKSkge1xuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZGlzcGxheVRvZG8oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RET00oZTogRXZlbnQpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpZCA9IHBhcmVudD8uaWQ7XG4gICAgICAgIGlmKGlkKSB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KGlkKTtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpO1xuICAgIGlmKCFhY3RpdmUpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlZmF1bHRcIik7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0Py5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0KFwiZGVmYXVsdFwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdElucHV0KGU6IEV2ZW50KSB7XG4gICAgaWYoZSBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtaW5wdXRcIik7XG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdHMtbGlzdFwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld2xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgY29uc3QgaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS13aW5kb3ctY2xvc2VcIik7XG4gICAgICAgICAgICBpRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVQcm9qZWN0RE9NKTtcbiAgICAgICAgICAgIGlEaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQ/LnZhbHVlIHx8IHVuaXFpZCgpOyBcbiAgICAgICAgICAgICAgICBpZihkb2VzUHJvamVjdEV4aXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiTmFtZSB0YWtlbiFcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBuZXdsaS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIG5ld2xpLmlkID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgbmV3bGkuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgICAgICAgICAgbmV3bGkuYXBwZW5kQ2hpbGQoaURpdik7XG4gICAgICAgICAgICAgICAgdWw/Lmluc2VydEJlZm9yZShuZXdsaSwgbGkpO1xuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBuZXdsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUHJvamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0SW5wdXQoKSB7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtaW5wdXRcIik7XG4gICAgaWYoaW5wdXQ/LmNsYXNzTGlzdC5jb250YWlucyhcIm5vbmVcIikpIHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHN1Ym1pdElucHV0KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgICBjb25zdCBvYmogPSBnZXRBbGxQcm9qZWN0cygpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdHMtbGlzdFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYoa2V5c1tqXSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5c1tqXSAhPT0gXCJ0b2RheVwiICYmIGtleXNbal0gIT09IFwidGhpc1dlZWtcIikge1xuICAgICAgICAgICAgY29uc3QgbmV3bGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBjb25zdCBpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLXdpbmRvdy1jbG9zZVwiKTtcbiAgICAgICAgICAgIGlEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVByb2plY3RET00pO1xuICAgICAgICAgICAgaURpdi5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgIG5ld2xpLnRleHRDb250ZW50ID0ga2V5c1tqXTtcbiAgICAgICAgICAgIG5ld2xpLmlkID0ga2V5c1tqXTtcbiAgICAgICAgICAgIG5ld2xpLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICAgICAgbmV3bGkuYXBwZW5kQ2hpbGQoaURpdik7XG4gICAgICAgICAgICB1bD8uaW5zZXJ0QmVmb3JlKG5ld2xpLCBsaSk7XG4gICAgICAgICAgICBuZXdsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlUHJvamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IHsgY2hhbmdlUHJvamVjdCwgc2hvd1Byb2plY3RJbnB1dCwgc2hvd1Byb2plY3RzIH0iLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuL3RvZG8taXRlbXNcIjtcbmltcG9ydCB7IGRpc3BsYXlUb2RvIH0gZnJvbSBcIi4vZGlzcGxheUl0ZW1zXCI7XG5pbXBvcnQgeyBzZXRQcm9qZWN0cyB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5pbnRlcmZhY2UgUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgIFtpbmRleDogc3RyaW5nXTogSXRlbXNbXSxcbiAgICBkZWZhdWx0OiBJdGVtc1tdLFxuICAgIHRvZGF5OiBJdGVtc1tdLFxuICAgIHRoaXNXZWVrOiBJdGVtc1tdLFxufVxuXG5jb25zdCBwcm9qZWN0c09iajogUHJvamVjdHNJbnRlcmZhY2UgPSB7XG4gICAgZGVmYXVsdDogW10sXG4gICAgdG9kYXk6IFtdLFxuICAgIHRoaXNXZWVrOiBbXVxufVxuXG4vKipFbnN1cmVzIHRvZGF5IGFuZCB0aGlzIHdlZWsgcHJvamVjdCBhcnJheXMgYXJlIGZpbGxlZCB3aXRoIG9iamVjdHMgd2l0aCBhcHByb3ByaWF0ZSBkYXRlICovXG5mdW5jdGlvbiBjb3JyZWN0RGF0ZVByb2plY3RzKCkge1xuXG4gICAgbGV0IHRvZGF5OiBJdGVtc1tdID0gW107XG4gICAgbGV0IHRoaXNXZWVrOiBJdGVtc1tdID0gW107XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocHJvamVjdHNPYmopO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICBpZihrZXlzW2ldICE9PSBcInRvZGF5XCIgJiYga2V5c1tpXSAhPT0gXCJ0aGlzV2Vla1wiKSB7XG5cbiAgICAgICAgICAgIGxldCBrZXkgPSBwcm9qZWN0c09ialtrZXlzW2ldXTtcblxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGtleS5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ga2V5W2pdO1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUob2JqLmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG5cbiAgICAgICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNXZWVrLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZGF5LnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb2plY3RzT2JqLnRoaXNXZWVrID0gdGhpc1dlZWs7XG4gICAgcHJvamVjdHNPYmoudG9kYXkgPSB0b2RheTtcbn1cblxuZnVuY3Rpb24gcHV0SW50b0RhdGVQcm9qZWN0cyhwYXJhOiBJdGVtcyB8IEl0ZW1zW10pIHtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkocGFyYSkpIHtcbiAgICAgICAgZm9yKGNvbnN0IGVsZW1lbnQgb2YgcGFyYSkge1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShlbGVtZW50LmdldFByb3BlcnR5KFwiZHVlRGF0ZVwiKSk7XG4gICAgICAgICAgICBpZihpc1RoaXNXZWVrKGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmoudGhpc1dlZWsucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZihpc1RvZGF5KGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmoudG9kYXkucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICB9XG5cblxuICAgIGxldCBkYXRlID0gbmV3IERhdGUocGFyYS5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIikpO1xuICAgIGlmKGlzVGhpc1dlZWsoZGF0ZSkpIHtcbiAgICAgICAgcHJvamVjdHNPYmoudGhpc1dlZWsucHVzaChwYXJhKTtcbiAgICB9IFxuICAgIGlmKGlzVG9kYXkoZGF0ZSkpIHtcbiAgICAgICAgcHJvamVjdHNPYmoudG9kYXkucHVzaChwYXJhKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgcHJvamVjdHNPYmpbbmFtZV0gPSBbXTtcbn07XG4gICAgXG5mdW5jdGlvbiBnZXRQcm9qZWN0KG5hbWU6IHN0cmluZyk6IEl0ZW1zW10ge1xuICAgIHJldHVybiBwcm9qZWN0c09ialtuYW1lXVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KG5hbWU6IHN0cmluZywgdmFsdWU/OiBJdGVtcyk6IHZvaWQge1xuICAgIGlmKHZhbHVlKSB7XG4gICAgICAgIHByb2plY3RzT2JqW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICBwdXRJbnRvRGF0ZVByb2plY3RzKHZhbHVlKTtcbiAgICB9XG4gICAgZGlzcGxheVRvZG8oKTtcbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0c09iaik7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgZGVsZXRlIHByb2plY3RzT2JqW25hbWVdO1xuICAgIGNvcnJlY3REYXRlUHJvamVjdHMoKTtcbiAgICBzZXRQcm9qZWN0cyhwcm9qZWN0c09iaik7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VQcm9qZWN0KG5hbWU6IHN0cmluZywgdmFsdWU6IEl0ZW1zW10pOiB2b2lkIHtcbiAgICBwcm9qZWN0c09ialtuYW1lXSA9IHZhbHVlO1xuICAgIHB1dEludG9EYXRlUHJvamVjdHModmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpOiBQcm9qZWN0c0ludGVyZmFjZSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb2plY3RzT2JqKVxufVxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKG5hbWU6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmKG5hbWUgIT09IFwidG9kYXlcIiAmJiBuYW1lICE9PSBcInRoaXNXZWVrXCIpIHtcbiAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0c09iaik7XG4gICAgXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgXG4gICAgICAgICAgICBpZihrZXlzW2ldICE9PSBuYW1lKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IHByb2plY3RzT2JqW2tleXNbaV1dO1xuICAgIFxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBrZXkubGVuZ3RoOyBqKyspIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ga2V5W2pdO1xuICAgICAgICAgICAgICAgICAgICBpZihvYmouZ2V0UHJvcGVydHkoXCJpZFwiKSA9PT0gcHJvamVjdHNPYmpbbmFtZV1baW5kZXhdLmdldFByb3BlcnR5KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleS5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgc2V0UHJvamVjdHMocHJvamVjdHNPYmopO1xufVxuXG5mdW5jdGlvbiBkb2VzUHJvamVjdEV4aXN0KG5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKHByb2plY3RzT2JqKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmKGtleVtpXSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuZXhwb3J0IHsgIFxuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgcmVwbGFjZVByb2plY3QsXG4gICAgZ2V0QWxsUHJvamVjdHMsIFxuICAgIGNvcnJlY3REYXRlUHJvamVjdHMsXG4gICAgZGVsZXRlVG9kbyxcbiAgICBkb2VzUHJvamVjdEV4aXN0LCBcbiAgICBQcm9qZWN0c0ludGVyZmFjZVxuIH1cbiIsImltcG9ydCB7IGNvcnJlY3REYXRlUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XG5cbnR5cGUgUHJvcGVydGllcyA9IFwidGl0bGVcIiB8IFwiZGVzY3JpcHRpb25cIiB8IFwiZHVlRGF0ZVwiIHwgXCJwcmlvcml0eVwiIHwgXCJjb21wbGV0ZVwiIHwgXCJpZFwiO1xuXG5jbGFzcyBJdGVtcyB7XG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nO1xuICAgIHByaXZhdGUgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBwcml2YXRlIGR1ZURhdGU6IHN0cmluZztcbiAgICBwcml2YXRlIHByaW9yaXR5OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb21wbGV0ZTogc3RyaW5nO1xuICAgIHByaXZhdGUgaWQgPSB1bmlxaWQoKTtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBkdWVEYXRlOiBzdHJpbmcsIHByaW9yaXR5OiBzdHJpbmcsIGNvbXBsZXRlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eShuYW1lOiBQcm9wZXJ0aWVzKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbbmFtZV07XG4gICAgfVxuXG4gICAgcHVibGljIHNldFByb3BlcnR5KG5hbWU6IFByb3BlcnRpZXMsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvcnJlY3REYXRlUHJvamVjdHMoKVxuICAgIH1cbn1cblxuZXhwb3J0IHsgSXRlbXMgfSIsImltcG9ydCB7IEl0ZW1zIH0gZnJvbSBcIi4vdG9kby1pdGVtc1wiO1xuaW1wb3J0IHsgZ2V0UHJvamVjdCwgdXBkYXRlUHJvamVjdCwgZGVsZXRlVG9kbyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBkaXNwbGF5RWRpdGVkVG9kbyB9IGZyb20gXCIuL2Rpc3BsYXlJdGVtc1wiO1xuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICByZXR1cm4gcHJvamVjdD8uaWQ7XG59XG5cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBmb3JtU2hvd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zaG93XCIpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBhZGREaXY/LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtU2hvd0J1dHRvbj8uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgZm9ybUNvbnRhaW5lcj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0/LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtaXRlbVwiKTtcbiAgICBjb25zdCBmb3JtU2hvd0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zaG93XCIpO1xuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBhZGREaXY/LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICBmb3JtU2hvd0J1dHRvbj8uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgZm9ybUNvbnRhaW5lcj8uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgY29uc3QgZm9ybSA9IGZvcm1Db250YWluZXI/LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuICAgIGZvcm0/LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZTogRXZlbnQpIHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcblxuICAgICAgICAgICAgY29uc3QgYXJyOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0W2ldXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGFycltpXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBhcnJbMF07XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gYXJyWzFdO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBhcnJbMl07XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFyclszXTtcbiAgICAgICAgICAgIGxldCBpdGVtID0gbmV3IEl0ZW1zKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIFwiaW5jb21wbGV0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICAgICAgaWYocHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUZvcm0oZTogRXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgaWQgPSBpdGVtPy5pZDtcblxuICAgICAgICBpZihwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcHJvamVjdFtpXTtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmdldFByb3BlcnR5KFwiaWRcIikgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVRvZG8ocHJvamVjdE5hbWUsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRlZEZvcm0oZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gICAgaWYoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0W2ldXG4gICAgICAgICAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBhcnJbMF07XG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBhcnJbMV07XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gYXJyWzJdO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGFyclszXTtcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Py5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBsZXRlXCIpO1xuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ/LmlkO1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBsZXQgaXRlbTogSXRlbXM7XG4gICAgICAgIGlmKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT09IHByb2plY3RzW2ldLmdldFByb3BlcnR5KFwiaWRcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwiZHVlRGF0ZVwiLCBkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNbaV0uc2V0UHJvcGVydHkoXCJkZXNjcmlwdGlvblwiLCBkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldFByb3BlcnR5KFwicHJpb3JpdHlcIiwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRQcm9wZXJ0eShcImNvbXBsZXRlXCIsIGNvbXBsZXRlIHx8IFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBwcm9qZWN0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5RWRpdGVkVG9kbyhpdGVtLCBwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVkaXRGb3JtKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGxldCBwcm9wQXJyID0gW107XG4gICAgaWYoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBpZCA9IGl0ZW0/LmlkO1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpPy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgaWYocHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHByb2plY3RbaV07XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5nZXRQcm9wZXJ0eShcImlkXCIpID09PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wQXJyWzBdID0gaXRlbS5nZXRQcm9wZXJ0eShcInRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wQXJyWzFdID0gaXRlbS5nZXRQcm9wZXJ0eShcImR1ZURhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbMl0gPSBpdGVtLmdldFByb3BlcnR5KFwicHJpb3JpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbM10gPSBpdGVtLmdldFByb3BlcnR5KFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbNF0gPSBpdGVtLmdldFByb3BlcnR5KFwiY29tcGxldGVcIik7XG4gICAgICAgICAgICAgICAgICAgIHByb3BBcnJbNV0gPSBpdGVtLmdldFByb3BlcnR5KFwiaWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZm9ybSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgICAgICAgICAgICAgIG1haW4/LnJlcGxhY2VDaGlsZChmb3JtLCBpdGVtKTtcbiAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0b2RvXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWxmb3JtID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgICAgICAgICAgICAgICByZWFsZm9ybT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtKTtcbiAgICAgICAgICAgICAgICBpZihyZWFsZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVhbGZvcm1baV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBwcm9wQXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YS1jb21wbGV0ZVwiLCBwcm9wQXJyWzRdKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5pZCA9IHByb3BBcnJbNV07XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRFZGl0ZWRGb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlKGU6IEV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBpZihlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyZW50Py5pZDtcbiAgICAgICAgaWYoaWQgJiYgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoaWQgPT09IHByb2plY3RbaV0uZ2V0UHJvcGVydHkoXCJpZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wbGV0ZSA9IGVsZW1lbnQuY2hlY2tlZCA/IFwiY29tcGxldGVcIiA6IFwiaW5jb21wbGV0ZVwiO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0W2ldLnNldFByb3BlcnR5KFwiY29tcGxldGVcIiwgY29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICBpZihjb21wbGV0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZChcImJsdXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImJsdXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IHNob3dGb3JtLCBkZWxldGVGb3JtLCBlZGl0Rm9ybSwgdG9nZ2xlQ29tcGxldGUgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9