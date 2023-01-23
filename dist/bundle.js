/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/createEl.ts":
/*!*****************************!*\
  !*** ./modules/createEl.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCar = exports.h2 = exports.h1 = exports.createInputContainer = exports.divBtnContainer = void 0;
function createEl(tagName) {
    const tag = document.createElement(tagName);
    return tag;
}
exports.divBtnContainer = createEl('div');
exports.divBtnContainer.setAttribute('class', 'divBtnContainer');
const btnGarage = createEl('button');
btnGarage.setAttribute('id', 'btnGarage');
btnGarage.innerText = 'Garage';
const btnWinners = createEl('button');
btnWinners.setAttribute('id', 'btnWinners');
btnWinners.innerText = 'Winners';
exports.divBtnContainer.append(btnGarage, btnWinners);
function createInputContainer(text, id) {
    const inputContainer = createEl('div');
    inputContainer.setAttribute('class', 'inputContainer');
    const inputName = createEl('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', `name${id}`);
    const inputColor = createEl('input');
    inputColor.setAttribute('type', 'color');
    inputColor.setAttribute('id', `color${id}`);
    const btnCreate = createEl('button');
    btnCreate.setAttribute('id', 'btnCreate');
    btnCreate.innerText = `${text}`;
    inputContainer.append(inputName, inputColor, btnCreate);
    return inputContainer;
}
exports.createInputContainer = createInputContainer;
exports.h1 = createEl('h1');
exports.h2 = createEl('h2');
function createCar(value) {
    const divTrackField = createEl('div');
    divTrackField.setAttribute('class', 'divTrackField');
    for (let i = 0; i < value.length; i++) {
        const divGarageBtnContainer = createEl('div');
        divGarageBtnContainer.setAttribute('class', 'divGarageBtnContainer');
        const btnStart = createEl('button');
        btnStart.setAttribute('id', `btnStart${value[i].id}`);
        btnStart.innerText = 'Start';
        const btnStop = createEl('button');
        btnStop.setAttribute('id', `btnStop${value[i].id}`);
        btnStop.innerText = 'Stop';
        const btnRemove = createEl('button');
        btnRemove.setAttribute('id', `btnRemove${value[i].id}`);
        btnRemove.innerText = 'Remove';
        const btnDelete = createEl('button');
        btnDelete.setAttribute('id', `btnDelete${value[i].id}`);
        btnDelete.innerText = 'Delete';
        const pName = createEl('p');
        pName.innerText = value[i].name;
        divGarageBtnContainer.append(btnStart, btnStop, btnRemove, btnDelete, pName);
        const divTrack = createEl('div');
        divTrack.setAttribute('class', 'divTrack');
        const car = createEl('div');
        let svgColor = value[i].color;
        car.innerHTML = `<svg id=${value[i].id} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve"><defs></defs><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/><path id=pach${value[i].id} d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill:${svgColor};fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>`;
        divTrack.append(divGarageBtnContainer, car);
        divTrackField.append(divTrack);
    }
    return divTrackField;
}
exports.createCar = createCar;


/***/ }),

/***/ "./modules/render-page.ts":
/*!********************************!*\
  !*** ./modules/render-page.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderPageGarage = void 0;
const el = __importStar(__webpack_require__(/*! ./createEl */ "./modules/createEl.ts"));
function renderPageGarage() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch('http://127.0.0.1:3000/garage?_page&_limit=7');
        let result = yield response.json();
        el.h1.innerText = 'Garage';
        el.h2.innerText = 'Page';
        document.body.append(el.divBtnContainer, el.createInputContainer('Create'), el.h1, el.h2, el.createCar(result));
    });
}
exports.renderPageGarage = renderPageGarage;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const render_page_1 = __webpack_require__(/*! ./modules/render-page */ "./modules/render-page.ts");
(0, render_page_1.renderPageGarage)();
const carOne = document.getElementById('1');
const btnStart1 = document.getElementById('btnStart1');
btnStart1 === null || btnStart1 === void 0 ? void 0 : btnStart1.addEventListener('click', () => {
    console.log('Hello');
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUIsR0FBRyxVQUFVLEdBQUcsVUFBVSxHQUFHLDRCQUE0QixHQUFHLHVCQUF1QjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxHQUFHO0FBQzNDO0FBQ0E7QUFDQSwwQ0FBMEMsR0FBRztBQUM3QztBQUNBO0FBQ0EsNkJBQTZCLEtBQUs7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLFVBQVU7QUFDVixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBLGlEQUFpRCxZQUFZO0FBQzdEO0FBQ0E7QUFDQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGFBQWEscU1BQXFNLGlCQUFpQix3QkFBd0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIsWUFBWSxvQkFBb0IsV0FBVyxnSkFBZ0osaUJBQWlCLHdCQUF3QixzQkFBc0Isd0JBQXdCLHVCQUF1QixrQkFBa0Isb0JBQW9CLFdBQVcscUdBQXFHLGlCQUFpQix3QkFBd0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLG9CQUFvQixXQUFXLHFEQUFxRCxhQUFhLDJqQ0FBMmpDLGlCQUFpQix3QkFBd0Isc0JBQXNCLHdCQUF3Qix1QkFBdUIsT0FBTyxVQUFVLG9CQUFvQixXQUFXO0FBQzV0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7Ozs7Ozs7OztBQ2pFSjtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHdCQUF3QjtBQUN4Qix3QkFBd0IsbUJBQU8sQ0FBQyx5Q0FBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3Qjs7Ozs7OztVQzdDeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7OztBQ3RCYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxzQkFBc0IsbUJBQU8sQ0FBQyx1REFBdUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbW9kdWxlcy9jcmVhdGVFbC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vbW9kdWxlcy9yZW5kZXItcGFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNyZWF0ZUNhciA9IGV4cG9ydHMuaDIgPSBleHBvcnRzLmgxID0gZXhwb3J0cy5jcmVhdGVJbnB1dENvbnRhaW5lciA9IGV4cG9ydHMuZGl2QnRuQ29udGFpbmVyID0gdm9pZCAwO1xyXG5mdW5jdGlvbiBjcmVhdGVFbCh0YWdOYW1lKSB7XHJcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xyXG4gICAgcmV0dXJuIHRhZztcclxufVxyXG5leHBvcnRzLmRpdkJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnKTtcclxuZXhwb3J0cy5kaXZCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXZCdG5Db250YWluZXInKTtcclxuY29uc3QgYnRuR2FyYWdlID0gY3JlYXRlRWwoJ2J1dHRvbicpO1xyXG5idG5HYXJhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsICdidG5HYXJhZ2UnKTtcclxuYnRuR2FyYWdlLmlubmVyVGV4dCA9ICdHYXJhZ2UnO1xyXG5jb25zdCBidG5XaW5uZXJzID0gY3JlYXRlRWwoJ2J1dHRvbicpO1xyXG5idG5XaW5uZXJzLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuV2lubmVycycpO1xyXG5idG5XaW5uZXJzLmlubmVyVGV4dCA9ICdXaW5uZXJzJztcclxuZXhwb3J0cy5kaXZCdG5Db250YWluZXIuYXBwZW5kKGJ0bkdhcmFnZSwgYnRuV2lubmVycyk7XHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0Q29udGFpbmVyKHRleHQsIGlkKSB7XHJcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnKTtcclxuICAgIGlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5wdXRDb250YWluZXInKTtcclxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGNyZWF0ZUVsKCdpbnB1dCcpO1xyXG4gICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsIGBuYW1lJHtpZH1gKTtcclxuICAgIGNvbnN0IGlucHV0Q29sb3IgPSBjcmVhdGVFbCgnaW5wdXQnKTtcclxuICAgIGlucHV0Q29sb3Iuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XHJcbiAgICBpbnB1dENvbG9yLnNldEF0dHJpYnV0ZSgnaWQnLCBgY29sb3Ike2lkfWApO1xyXG4gICAgY29uc3QgYnRuQ3JlYXRlID0gY3JlYXRlRWwoJ2J1dHRvbicpO1xyXG4gICAgYnRuQ3JlYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuQ3JlYXRlJyk7XHJcbiAgICBidG5DcmVhdGUuaW5uZXJUZXh0ID0gYCR7dGV4dH1gO1xyXG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGlucHV0TmFtZSwgaW5wdXRDb2xvciwgYnRuQ3JlYXRlKTtcclxuICAgIHJldHVybiBpbnB1dENvbnRhaW5lcjtcclxufVxyXG5leHBvcnRzLmNyZWF0ZUlucHV0Q29udGFpbmVyID0gY3JlYXRlSW5wdXRDb250YWluZXI7XHJcbmV4cG9ydHMuaDEgPSBjcmVhdGVFbCgnaDEnKTtcclxuZXhwb3J0cy5oMiA9IGNyZWF0ZUVsKCdoMicpO1xyXG5mdW5jdGlvbiBjcmVhdGVDYXIodmFsdWUpIHtcclxuICAgIGNvbnN0IGRpdlRyYWNrRmllbGQgPSBjcmVhdGVFbCgnZGl2Jyk7XHJcbiAgICBkaXZUcmFja0ZpZWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2VHJhY2tGaWVsZCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRpdkdhcmFnZUJ0bkNvbnRhaW5lciA9IGNyZWF0ZUVsKCdkaXYnKTtcclxuICAgICAgICBkaXZHYXJhZ2VCdG5Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXZHYXJhZ2VCdG5Db250YWluZXInKTtcclxuICAgICAgICBjb25zdCBidG5TdGFydCA9IGNyZWF0ZUVsKCdidXR0b24nKTtcclxuICAgICAgICBidG5TdGFydC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGJ0blN0YXJ0JHt2YWx1ZVtpXS5pZH1gKTtcclxuICAgICAgICBidG5TdGFydC5pbm5lclRleHQgPSAnU3RhcnQnO1xyXG4gICAgICAgIGNvbnN0IGJ0blN0b3AgPSBjcmVhdGVFbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuU3RvcC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGJ0blN0b3Ake3ZhbHVlW2ldLmlkfWApO1xyXG4gICAgICAgIGJ0blN0b3AuaW5uZXJUZXh0ID0gJ1N0b3AnO1xyXG4gICAgICAgIGNvbnN0IGJ0blJlbW92ZSA9IGNyZWF0ZUVsKCdidXR0b24nKTtcclxuICAgICAgICBidG5SZW1vdmUuc2V0QXR0cmlidXRlKCdpZCcsIGBidG5SZW1vdmUke3ZhbHVlW2ldLmlkfWApO1xyXG4gICAgICAgIGJ0blJlbW92ZS5pbm5lclRleHQgPSAnUmVtb3ZlJztcclxuICAgICAgICBjb25zdCBidG5EZWxldGUgPSBjcmVhdGVFbCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuRGVsZXRlLnNldEF0dHJpYnV0ZSgnaWQnLCBgYnRuRGVsZXRlJHt2YWx1ZVtpXS5pZH1gKTtcclxuICAgICAgICBidG5EZWxldGUuaW5uZXJUZXh0ID0gJ0RlbGV0ZSc7XHJcbiAgICAgICAgY29uc3QgcE5hbWUgPSBjcmVhdGVFbCgncCcpO1xyXG4gICAgICAgIHBOYW1lLmlubmVyVGV4dCA9IHZhbHVlW2ldLm5hbWU7XHJcbiAgICAgICAgZGl2R2FyYWdlQnRuQ29udGFpbmVyLmFwcGVuZChidG5TdGFydCwgYnRuU3RvcCwgYnRuUmVtb3ZlLCBidG5EZWxldGUsIHBOYW1lKTtcclxuICAgICAgICBjb25zdCBkaXZUcmFjayA9IGNyZWF0ZUVsKCdkaXYnKTtcclxuICAgICAgICBkaXZUcmFjay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RpdlRyYWNrJyk7XHJcbiAgICAgICAgY29uc3QgY2FyID0gY3JlYXRlRWwoJ2RpdicpO1xyXG4gICAgICAgIGxldCBzdmdDb2xvciA9IHZhbHVlW2ldLmNvbG9yO1xyXG4gICAgICAgIGNhci5pbm5lckhUTUwgPSBgPHN2ZyBpZD0ke3ZhbHVlW2ldLmlkfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48ZGVmcz48L2RlZnM+PGcgc3R5bGU9XCJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMDsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogbm9uZTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxLjQwNjU5MzQwNjU5MzQwMTYgMS40MDY1OTM0MDY1OTM0MDE2KSBzY2FsZSgyLjgxIDIuODEpXCIgPjxjaXJjbGUgY3g9XCI3MC43MzVcIiBjeT1cIjU2Ljc3NVwiIHI9XCIxLjk1NVwiIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYigwLDAsMCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgIG1hdHJpeCgxIDAgMCAxIDAgMCkgXCIvPjxjaXJjbGUgY3g9XCIxOS43NjVcIiBjeT1cIjU2Ljc3NVwiIHI9XCIxLjk1NVwiIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYigwLDAsMCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgIG1hdHJpeCgxIDAgMCAxIDAgMCkgXCIvPjxwYXRoIGlkPXBhY2gke3ZhbHVlW2ldLmlkfSBkPVwiTSA3NS40NzkgMzYuMDQ1IGwgLTcuOTg3IC0xLjIyIGwgLTIuMzUgLTIuNTc0IGMgLTUuNTk5IC02LjEzMiAtMTMuNTcxIC05LjY0OSAtMjEuODc0IC05LjY0OSBoIC02LjI0NSBjIC0xLjM1NyAwIC0yLjY5NiAwLjEwNyAtNC4wMTYgMC4yOTYgYyAtMC4wMjIgMC4wMDQgLTAuMDQ0IDAuMDA2IC0wLjA2NiAwLjAxIGMgLTcuNzk5IDEuMTMzIC0xNC44MDIgNS40NjggLTE5LjI4NSAxMi4xMDYgQyA1LjcwNiAzNy45MTMgMCA0NS4zNTggMCA1Mi45NTIgYyAwIDMuMjU0IDIuNjQ3IDUuOSA1LjkgNS45IGggMy40NTEgYyAwLjk2OSA0Ljg2NiA1LjI2OSA4LjU0NSAxMC40MTYgOC41NDUgcyA5LjQ0NyAtMy42NzkgMTAuNDE2IC04LjU0NSBoIDMwLjEzOSBjIDAuOTY5IDQuODY2IDUuMjcgOC41NDUgMTAuNDE2IDguNTQ1IHMgOS40NDYgLTMuNjc5IDEwLjQxNSAtOC41NDUgSCA4NC4xIGMgMy4yNTQgMCA1LjkgLTIuNjQ2IDUuOSAtNS45IEMgOTAgNDQuNDQxIDgzLjg5NCAzNy4zMzEgNzUuNDc5IDM2LjA0NSB6IE0gNDMuMjY5IDI2LjYwMiBjIDcuMDY1IDAgMTMuODQ4IDIuOTQ5IDE4LjY3NiA4LjA5NCBIIDM5LjQ2NCBsIC0zLjI2NyAtOC4wNjggYyAwLjI3NSAtMC4wMDkgMC41NSAtMC4wMjYgMC44MjYgLTAuMDI2IEggNDMuMjY5IHogTSAzMi4wOCAyNy4xMTggbCAzLjA2OCA3LjU3OCBIIDE4Ljk3MiBDIDIyLjQyOSAzMC44MTMgMjcuMDE4IDI4LjE2OSAzMi4wOCAyNy4xMTggeiBNIDE5Ljc2NyA2My4zOTcgYyAtMy42NTIgMCAtNi42MjMgLTIuOTcxIC02LjYyMyAtNi42MjIgYyAwIC0zLjY1MiAyLjk3MSAtNi42MjMgNi42MjMgLTYuNjIzIHMgNi42MjMgMi45NzEgNi42MjMgNi42MjMgQyAyNi4zOSA2MC40MjcgMjMuNDE5IDYzLjM5NyAxOS43NjcgNjMuMzk3IHogTSA3MC43MzggNjMuMzk3IGMgLTMuNjUyIDAgLTYuNjIzIC0yLjk3MSAtNi42MjMgLTYuNjIyIGMgMCAtMy42NTIgMi45NzEgLTYuNjIzIDYuNjIzIC02LjYyMyBjIDMuNjUxIDAgNi42MjIgMi45NzEgNi42MjIgNi42MjMgQyA3Ny4zNiA2MC40MjcgNzQuMzkgNjMuMzk3IDcwLjczOCA2My4zOTcgelwiIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6JHtzdmdDb2xvcn07ZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cIiBtYXRyaXgoMSAwIDAgMSAwIDApIFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiAvPjwvZz48L3N2Zz5gO1xyXG4gICAgICAgIGRpdlRyYWNrLmFwcGVuZChkaXZHYXJhZ2VCdG5Db250YWluZXIsIGNhcik7XHJcbiAgICAgICAgZGl2VHJhY2tGaWVsZC5hcHBlbmQoZGl2VHJhY2spO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdlRyYWNrRmllbGQ7XHJcbn1cclxuZXhwb3J0cy5jcmVhdGVDYXIgPSBjcmVhdGVDYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yZW5kZXJQYWdlR2FyYWdlID0gdm9pZCAwO1xyXG5jb25zdCBlbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9jcmVhdGVFbFwiKSk7XHJcbmZ1bmN0aW9uIHJlbmRlclBhZ2VHYXJhZ2UoKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDAvZ2FyYWdlP19wYWdlJl9saW1pdD03Jyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBlbC5oMS5pbm5lclRleHQgPSAnR2FyYWdlJztcclxuICAgICAgICBlbC5oMi5pbm5lclRleHQgPSAnUGFnZSc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZWwuZGl2QnRuQ29udGFpbmVyLCBlbC5jcmVhdGVJbnB1dENvbnRhaW5lcignQ3JlYXRlJyksIGVsLmgxLCBlbC5oMiwgZWwuY3JlYXRlQ2FyKHJlc3VsdCkpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0cy5yZW5kZXJQYWdlR2FyYWdlID0gcmVuZGVyUGFnZUdhcmFnZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHJlbmRlcl9wYWdlXzEgPSByZXF1aXJlKFwiLi9tb2R1bGVzL3JlbmRlci1wYWdlXCIpO1xyXG4oMCwgcmVuZGVyX3BhZ2VfMS5yZW5kZXJQYWdlR2FyYWdlKSgpO1xyXG5jb25zdCBjYXJPbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnMScpO1xyXG5jb25zdCBidG5TdGFydDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU3RhcnQxJyk7XHJcbmJ0blN0YXJ0MSA9PT0gbnVsbCB8fCBidG5TdGFydDEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ0blN0YXJ0MS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbycpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9