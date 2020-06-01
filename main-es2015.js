(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.navbar = document.getElementsByClassName('navbar');
        this.sticky = null;
        this.title = 'mysite';
        this.i = 1;
        this.space = document.getElementById("home");
    }
    ngOnInit() {
        this.space = document.getElementById("home");
        this.sticky = this.navbar[0].offsetTop;
        /* ***** ** ***** Graphics Animation ***** ** ***** */
        /* -------------------------------------------------*/
        //1000 = 1second..
        setInterval(() => {
            let glxy = document.getElementById("home");
            //object initialized
            const div = this.renderer.createElement('div');
            div.classList.add("comet");
            //object initial position
            let posx = 100;
            let posy = Math.floor(Math.random() * 430) + 10;
            div.style.left = posx + 'vw';
            div.style.top = posy + 'px';
            //render the object
            this.renderer.appendChild(glxy, div);
            //speed
            let x = Math.floor(Math.random() * 60) + 1;
            div.style.transition = x + 's';
            //object type
            let y = Math.floor(Math.random() * 10);
            div.classList.add("c" + (y + 1));
            //object size
            let size = Math.floor(Math.random() * 8) + 1;
            div.style.width = (size * 5) + 'px';
            div.style.height = (size * 5) + 'px';
            //move the object .25sec delay
            setTimeout(function () {
                div.style.left = '-200px';
            }, 250);
            //remove object after a minute
            setTimeout(function () {
                div.remove();
            }, 61000);
        }, 1000);
        setInterval(() => {
            this.space = document.getElementById("home");
            //create object
            const div = this.renderer.createElement('div');
            div.classList.add("comet");
            div.setAttribute('id', "comet" + this.i);
            div.style.transition = '1s';
            //object initial position;
            let x = Math.floor(Math.random() * 1300) + 50;
            let y = Math.floor(Math.random() * 400) + 30;
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            //size and type of object
            let size = Math.floor(Math.random() * 40) + 1;
            let choice = Math.floor(Math.random() * 4);
            div.style.width = size + 'px';
            div.style.height = size + 'px';
            div.classList.add("c" + (choice + 1));
            //render the object
            this.renderer.appendChild(this.space, div);
            //1sec delay for animation
            setTimeout(function () {
                //move the object
                this.el = document.getElementById(div.getAttribute('id'));
                let x = Math.floor(Math.random() * 1300) + 50;
                let y = Math.floor(Math.random() * 400) + 30;
                this.el.style.left = x + 'px';
                this.el.style.top = y + 'px';
            }, 1000);
            //1sec delay for animation
            setTimeout(function (r) {
                //cut the object
                try {
                    div.classList.add("off");
                    //r.removeChild(this.space, document.getElementById(div.getAttribute('id'))); 
                }
                catch (error) {
                    console.log(error);
                }
            }, 1000);
            //remove object after 8sec
            setTimeout(function () {
                div.remove();
            }, 8000);
            this.i = this.i + 1;
        }, 4000);
        /* ***** ** ***** Graphics Animation ***** ** ***** */
        /* -------------------------------------------------*/
        //insert code here..
    }
    //sticky navigation bar trigger
    onScroll() {
        if (this.navbar.length < 2) {
            if (window.pageYOffset >= this.sticky) {
                this.navbar[0].classList.add("sticky");
            }
            else {
                this.navbar[0].classList.remove("sticky");
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 0, consts: [[1, "layout"], ["id", "home", 1, "sliding"], [1, "me"], [1, "im"], [1, "name"], ["id", "div2"], [1, "navbar"], ["href", "#home"], ["href", "#about"], ["id", "about"], [1, "about-content"], [1, "about-header"], ["href", "https://github.com/danielfesalbon", 1, "githublink"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "I'm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "DANIEL FESALBON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I'm from Philippines with knowledge in programming and software development. I have a year of experience in web applications development. A current undergraduate student with some personal works and can do back-end and/or front-end development. Experienced using Java, JavaScript, Angular, SQL, etc. You can check out my github profile here ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " https://github.com/danielfesalbon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Copyright 2020 Daniel Fesalbon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".layout[_ngcontent-%COMP%] {\r\n    \r\n    overflow: hidden;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: rgb(26, 26, 26);\r\n    text-align: center;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    \r\n    display: block;\r\n    color: grey;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    display: inline-block;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n}\r\n\r\n.sticky[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] {\r\n    \r\n    background-image: url(\"/assets/test2.png\");\r\n    \r\n    height: 500px;\r\n    \r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.sliding[_ngcontent-%COMP%] {\r\n    background: url(\"/assets/spacenew.png\") repeat-x;\r\n    height: 500px;\r\n    width: 5076px;\r\n    -webkit-animation: animate 180s linear infinite;\r\n            animation: animate 180s linear infinite;\r\n    position: relative;\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n    0% {\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n    100% {\r\n        transform: translate3d(-1692px, 0, 0);\r\n        \r\n    }\r\n}\r\n\r\n@keyframes slide {\r\n    0% {\r\n        transform: translate3d(0, 0, 0);\r\n    }\r\n    100% {\r\n        transform: translate3d(-1692px, 0, 0);\r\n        \r\n    }\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n    from {\r\n        background-position: 100% 0;\r\n    }\r\n    to {\r\n        background-position: 0 0;\r\n        \r\n    }\r\n}\r\n\r\n@keyframes animate {\r\n    from {\r\n        background-position: 100% 0;\r\n    }\r\n    to {\r\n        background-position: 0 0;\r\n        \r\n    }\r\n}\r\n\r\n#home[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: grey;\r\n    height: calc(100vh / 1.42);\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n#div2[_ngcontent-%COMP%] {\r\n    background-color: rgb(26, 26, 26);\r\n    height: calc(100vh / 3.33);\r\n}\r\n\r\n#about[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    \r\n    height: 100vh;\r\n    color: rgb(255, 255, 255);\r\n    background-image: url(\"/assets/bgpattern.png\");\r\n    \r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.about-content[_ngcontent-%COMP%] {\r\n    background-color: rgb(0, 0, 0);\r\n    \r\n    background-color: rgba(0, 0, 0, 0.4);\r\n    \r\n    z-index: 2;\r\n    margin: 0 auto;\r\n    padding-top: 3rem;\r\n    width: 80vw;\r\n    height: 100%;\r\n    text-align: justify;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.about-header[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n    font-weight: bolder;\r\n    text-align: center;\r\n}\r\n\r\n.githublink[_ngcontent-%COMP%]{\r\n    color: cyan;\r\n}\r\n\r\n#div4[_ngcontent-%COMP%] {\r\n    background-color: black;\r\n    height: 0;\r\n    text-align: center;\r\n    padding-top: 4vw;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: rgb(26, 26, 26);\r\n    color: grey;\r\n    text-align: center;\r\n    font-size: 1.25vw;\r\n}\r\n\r\n.me[_ngcontent-%COMP%] {\r\n    margin-left: 10vw;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    \r\n}\r\n\r\n.name[_ngcontent-%COMP%] {\r\n    font-size: 5vw;\r\n}\r\n\r\n.im[_ngcontent-%COMP%] {\r\n    font-size: 2vw;\r\n    text-align: left;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 9vw;\r\n    width: 9vw;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    border-bottom: 1px dotted black;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: grey;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    \r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 100%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n}\r\n\r\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n\r\n.c1[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/2.png\");\r\n}\r\n\r\n.c2[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/4.png\");\r\n}\r\n\r\n.c3[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/5.png\");\r\n}\r\n\r\n.c4[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/6.png\");\r\n}\r\n\r\n.c5[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/asteroid.png\");\r\n}\r\n\r\n.c6[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/comet.png\");\r\n}\r\n\r\n.c7[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/fireball.png\");\r\n}\r\n\r\n.c8[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/meteor.png\");\r\n}\r\n\r\n.c9[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/meteorite.png\");\r\n}\r\n\r\n.c10[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/stars/meteoroid.png\");\r\n}\r\n\r\n.on[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n\r\n.off[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n\r\n.comet[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    width: 10px;\r\n    \r\n    position: absolute;\r\n    border-radius: 5px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQywwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsYUFBYTtJQUNiLGFBQWE7SUFDYiwrQ0FBdUM7WUFBdkMsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSxxQ0FBcUM7UUFDckMsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBUkE7SUFDSTtRQUNJLCtCQUErQjtJQUNuQztJQUNBO1FBQ0kscUNBQXFDO1FBQ3JDLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLHdCQUF3QjtRQUN4QixvQkFBb0I7SUFDeEI7QUFDSjs7QUFSQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSx3QkFBd0I7UUFDeEIsb0JBQW9CO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLHlDQUF5QztJQUN6Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFFUiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0IHtcclxuICAgIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI2LCAyNik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgICAvKmZsb2F0OiBsZWZ0OyovXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdGVzdDIucG5nXCIpO1xyXG4gICAgLyogU2V0IGEgc3BlY2lmaWMgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5zbGlkaW5nIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvc3BhY2VuZXcucG5nXCIpIHJlcGVhdC14O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiA1MDc2cHg7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMTgwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNjkycHgsIDAsIDApO1xyXG4gICAgICAgIC8qIFRoZSBpbWFnZSB3aWR0aCAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICAgICAgICAvKiBUaGUgaW1hZ2Ugd2lkdGggKi9cclxuICAgIH1cclxufVxyXG5cclxuI2hvbWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAvIDEuNDIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jZGl2MiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjYsIDI2LCAyNik7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLyAzLjMzKTtcclxufVxyXG5cclxuI2Fib3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLypoZWlnaHQ6IGNhbGMoMTAwdmggLyAxLjQyKTsqL1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2JncGF0dGVybi5wbmdcIik7XHJcbiAgICAvKiBDcmVhdGUgdGhlIHBhcmFsbGF4IHNjcm9sbGluZyBlZmZlY3QgKi9cclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIC8qIEJsYWNrIHcvb3BhY2l0eS9zZWUtdGhyb3VnaCAqL1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5hYm91dC1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ2l0aHVibGlua3tcclxuICAgIGNvbG9yOiBjeWFuO1xyXG59XHJcblxyXG4jZGl2NCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA0dnc7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI2LCAyNiwgMjYpO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxufVxyXG5cclxuLm1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIC8qbGVmdDogMjUlOyovXHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG59XHJcblxyXG4uaW0ge1xyXG4gICAgZm9udC1zaXplOiAydnc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDl2dztcclxuICAgIHdpZHRoOiA5dnc7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmMxIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc3RhcnMvMi5wbmdcIik7XHJcbn1cclxuXHJcbi5jMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N0YXJzLzQucG5nXCIpO1xyXG59XHJcblxyXG4uYzMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy81LnBuZ1wiKTtcclxufVxyXG5cclxuLmM0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc3RhcnMvNi5wbmdcIik7XHJcbn1cclxuXHJcbi5jNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N0YXJzL2FzdGVyb2lkLnBuZ1wiKTtcclxufVxyXG5cclxuLmM2IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc3RhcnMvY29tZXQucG5nXCIpO1xyXG59XHJcblxyXG4uYzcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9maXJlYmFsbC5wbmdcIik7XHJcbn1cclxuXHJcbi5jOCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N0YXJzL21ldGVvci5wbmdcIik7XHJcbn1cclxuXHJcbi5jOSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N0YXJzL21ldGVvcml0ZS5wbmdcIik7XHJcbn1cclxuXHJcbi5jMTAge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9tZXRlb3JvaWQucG5nXCIpO1xyXG59XHJcblxyXG4ub24ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm9mZiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jb21ldCB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 2, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel Fesalbon\Desktop\angular\mysite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map