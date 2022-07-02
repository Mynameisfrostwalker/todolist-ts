/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/scripts/projects.ts ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects)
/* harmony export */ });
var Projects = (function () {
    var projectsObj = {
        default: [],
        today: [],
        thisWeek: []
    };
    function createProject(name) {
        projectsObj[name] = [];
    }
    ;
    function getProject(name) {
        return projectsObj[name];
    }
    function updateProject(name, value) {
        projectsObj[name].push(value);
    }
    function deleteProject(name) {
        delete projectsObj[name];
    }
    function replaceProject(name, value) {
        projectsObj[name] = value;
    }
    function getAllProjects() {
        return Object.assign({}, projectsObj);
    }
    var obj = {
        createProject: createProject,
        getProject: getProject,
        updateProject: updateProject,
        deleteProject: deleteProject,
        replaceProject: replaceProject,
        getAllProjects: getAllProjects
    };
    return obj;
})();


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDWUEsSUFBTSxRQUFRLEdBQUcsQ0FDYjtJQUNJLElBQU0sV0FBVyxHQUFzQjtRQUNuQyxPQUFPLEVBQUUsRUFBRTtRQUNYLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7S0FDZjtJQUVELFNBQVMsYUFBYSxDQUFDLElBQVk7UUFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQztJQUVGLFNBQVMsVUFBVSxDQUFDLElBQVk7UUFDNUIsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFZLEVBQUUsS0FBWTtRQUM3QyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxJQUFZO1FBQy9CLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFZLEVBQUUsS0FBYztRQUNoRCxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSztJQUM3QixDQUFDO0lBRUQsU0FBUyxjQUFjO1FBQ25CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxJQUFNLEdBQUcsR0FBbUI7UUFDeEIsYUFBYTtRQUNiLFVBQVU7UUFDVixhQUFhO1FBQ2IsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjO0tBQ2pCO0lBRUQsT0FBTyxHQUFHO0FBRWQsQ0FBQyxDQUNKLEVBQUU7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0LXRzLy4vc3JjL3NjcmlwdHMvcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJdGVtcyB9IGZyb20gXCIuL3RvZG8taXRlbXNcIjtcblxuaW50ZXJmYWNlIFByb2plY3RzSW50ZXJmYWNlIHtcbiAgICBbaW5kZXg6IHN0cmluZ106IEl0ZW1zW10sXG4gICAgZGVmYXVsdDogSXRlbXNbXSxcbiAgICB0b2RheTogSXRlbXNbXSxcbiAgICB0aGlzV2VlazogSXRlbXNbXSxcbn1cblxuaW50ZXJmYWNlIFByb2plY3RzTWV0aG9kIHtcbiAgICBjcmVhdGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IHZvaWQsXG4gICAgZ2V0UHJvamVjdChuYW1lOiBzdHJpbmcpOiBJdGVtc1tdLFxuICAgIHVwZGF0ZVByb2plY3QobmFtZTogc3RyaW5nLCB2YWx1ZTogSXRlbXMpOiB2b2lkLFxuICAgIGRlbGV0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCxcbiAgICByZXBsYWNlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBJdGVtc1tdKTogdm9pZCxcbiAgICBnZXRBbGxQcm9qZWN0cygpOiBQcm9qZWN0c0ludGVyZmFjZVxufVxuXG5jb25zdCBQcm9qZWN0cyA9IChcbiAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNPYmo6IFByb2plY3RzSW50ZXJmYWNlID0ge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0b2RheTogW10sXG4gICAgICAgICAgICB0aGlzV2VlazogW11cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgZnVuY3Rpb24gZ2V0UHJvamVjdChuYW1lOiBzdHJpbmcpOiBJdGVtc1tdIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0c09ialtuYW1lXVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChuYW1lOiBzdHJpbmcsIHZhbHVlOiBJdGVtcyk6IHZvaWQge1xuICAgICAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAgICAgZGVsZXRlIHByb2plY3RzT2JqW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVwbGFjZVByb2plY3QobmFtZTogc3RyaW5nLCB2YWx1ZTogSXRlbXNbXSk6IHZvaWQge1xuICAgICAgICAgICAgcHJvamVjdHNPYmpbbmFtZV0gPSB2YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKTogUHJvamVjdHNJbnRlcmZhY2Uge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb2plY3RzT2JqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb2JqOiBQcm9qZWN0c01ldGhvZCA9IHtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgICAgICBnZXRQcm9qZWN0LFxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdCxcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QsXG4gICAgICAgICAgICByZXBsYWNlUHJvamVjdCxcbiAgICAgICAgICAgIGdldEFsbFByb2plY3RzXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIFxuICAgIH1cbikoKVxuXG5leHBvcnQgeyBQcm9qZWN0cyB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=