function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");

    var routes = [{
      path: 'main',
      component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
    }, {
      path: '',
      component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_a_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Explore Above");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Explore Below");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(renderer) {
        _classCallCheck(this, AppComponent);

        this.renderer = renderer;
        this.navbar = document.getElementsByClassName('navbar');
        this.sticky = null;
        this.title = 'mysite';
        this.i = 1;
        this.nightsky = document.getElementById("horizon");
        this.param = window.location.hash;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.param = '#space';
          this.sticky = this.navbar[0].offsetTop;
          /* ***** ** ***** Space  Animation ***** ** ***** */

          /* --------------------------------------------- -*/

          /* -- 1000 = 1second -- */

          setInterval(function () {
            var glxy = document.getElementById("space");

            _this.spawnMeteor(glxy);
          }, 1000);
          setInterval(function () {
            var glxy = document.getElementById("space");

            _this.randomMeteor(glxy);
          }, 4000);
          /* ***** ** ***** Space Animation ***** ** ***** */

          /* ----------------------------------------------*/

          setInterval(function () {
            var night = document.getElementById("nightsky");

            _this.spawnNightStar(night);
          }, 150);
        } //sticky navigation bar trigger

      }, {
        key: "onScroll",
        value: function onScroll() {
          if (this.navbar.length < 2) {
            if (window.pageYOffset >= this.sticky) {
              this.navbar[0].classList.add("sticky");
            } else {
              this.navbar[0].classList.remove("sticky");
            }
          }

          this.param = window.location.hash;
        }
      }, {
        key: "spawnNightStar",
        value: function spawnNightStar(night) {
          //object initialized
          var div = this.renderer.createElement('div');
          div.classList.add("nightstar");
          var x = Math.floor(Math.random() * night.offsetWidth);
          var y = Math.floor(Math.random() * (night.offsetHeight - 300));
          div.style.left = x + 'px';
          div.style.top = y + 'px';
          this.renderer.appendChild(night, div);
          var time = Math.floor(Math.random() * 10) + 1;
          setTimeout(function () {
            div.remove();
          }, time * 1000);
        }
      }, {
        key: "spawnMeteor",
        value: function spawnMeteor(space) {
          //object initialized
          var div = this.renderer.createElement('div');
          div.classList.add("comet"); //object initial position

          var posx = 100;
          var posy = Math.floor(Math.random() * 430) + 10;
          div.style.left = posx + 'vw';
          div.style.top = posy + 'px'; //render the object

          this.renderer.appendChild(space, div); //speed

          var x = Math.floor(Math.random() * 60) + 1;
          div.style.transition = x + 's'; //object type

          var y = Math.floor(Math.random() * 10);
          div.classList.add("c" + (y + 1)); //object size

          var size = Math.floor(Math.random() * 8) + 1;
          div.style.width = size * 5 + 'px';
          div.style.height = size * 5 + 'px'; //move the object .25sec delay

          setTimeout(function () {
            div.style.left = '-200px';
          }, 250); //remove object after a minute

          setTimeout(function () {
            div.remove();
          }, 61000);
        }
      }, {
        key: "randomMeteor",
        value: function randomMeteor(space) {
          //create object
          var div = this.renderer.createElement('div');
          div.classList.add("comet");
          div.setAttribute('id', "comet" + this.i);
          div.style.transition = '1s'; //object initial position;

          var x = Math.floor(Math.random() * 1300) + 50;
          var y = Math.floor(Math.random() * 400) + 30;
          div.style.left = x + 'px';
          div.style.top = y + 'px'; //size and type of object

          var size = Math.floor(Math.random() * 40) + 1;
          var choice = Math.floor(Math.random() * 4);
          div.style.width = size + 'px';
          div.style.height = size + 'px';
          div.classList.add("c" + (choice + 1)); //render the object

          this.renderer.appendChild(space, div); //1sec delay for animation

          setTimeout(function () {
            //move the object
            this.el = document.getElementById(div.getAttribute('id'));
            var x = Math.floor(Math.random() * 1300) + 50;
            var y = Math.floor(Math.random() * 400) + 30;
            this.el.style.left = x + 'px';
            this.el.style.top = y + 'px';
          }, 1000); //1sec delay for animation

          setTimeout(function (r) {
            //cut the object
            try {
              div.classList.add("off"); //r.removeChild(this.space, document.getElementById(div.getAttribute('id'))); 
            } catch (error) {
              console.log(error);
            }
          }, 1000); //remove object after 8sec

          setTimeout(function () {
            div.remove();
          }, 8000);
          this.i = this.i + 1;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler() {
            return ctx.onScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 24,
      vars: 2,
      consts: [[1, "layout"], ["id", "space", 1, "sliding"], [1, "me"], [1, "im"], [1, "name"], ["id", "div2"], [1, "navbar"], ["href", "#space", 4, "ngIf"], ["href", "#horizon", 4, "ngIf"], ["id", "horizon"], ["id", "nightsky", 1, "nightsky"], [1, "me", "white"], [2, "height", "500px", "position", "relative"], [1, "wave", 2, "animation", "waves 6s linear infinite", "opacity", "1", "z-index", "10"], [1, "wave", 2, "animation", "waves 10s linear infinite", "opacity", ".75", "z-index", "11"], [1, "wave", 2, "animation", "waves 3s linear infinite", "opacity", ".5", "z-index", "12"], [1, "sea"], [1, "footer"], ["href", "#space"], ["href", "#horizon"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_a_10_Template, 2, 0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "and I'm wondering how the fuck did you get here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Copyright 2020 Daniel Fesalbon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.param != "#space");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.param != "#horizon");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".layout[_ngcontent-%COMP%] { overflow: hidden; }\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    text-align: center;\r\n    transition: 1s;\r\n    z-index: 999;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: grey;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n    display: inline-block;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { color: white; }\r\n\r\n.sticky[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.parallax[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/test2.png\");\r\n    height: 500px;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n.sliding[_ngcontent-%COMP%] {\r\n    background: url(\"/assets/newspace.png\") repeat-x;\r\n    height: 100vh;\r\n    width: 5076px;\r\n    -webkit-animation: animate 180s linear infinite;\r\n            animation: animate 180s linear infinite;\r\n    position: relative;\r\n}\r\n\r\n@-webkit-keyframes slide {\r\n    0% { transform: translate3d(0, 0, 0); }\r\n    100% { transform: translate3d(-1692px, 0, 0); }\r\n}\r\n\r\n@keyframes slide {\r\n    0% { transform: translate3d(0, 0, 0); }\r\n    100% { transform: translate3d(-1692px, 0, 0); }\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n    from { background-position: 100% 0; }\r\n    to { background-position: 0 0; }\r\n}\r\n\r\n@keyframes animate {\r\n    from { background-position: 100% 0; }\r\n    to { background-position: 0 0; }\r\n}\r\n\r\n#space[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: grey;\r\n    height: calc(100vh / 1.42);\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n#div2[_ngcontent-%COMP%] {\r\n    background-color: rgb(26, 26, 26);\r\n    height: calc(100vh / 3.33);\r\n}\r\n\r\n#horizon[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    color: grey;\r\n    text-align: center;\r\n    font-size: 1.25vw;\r\n}\r\n\r\n.me[_ngcontent-%COMP%] {\r\n    margin-left: 10vw;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n\r\n.name[_ngcontent-%COMP%] { font-size: 5vw; }\r\n\r\n.im[_ngcontent-%COMP%] { font-size: 2vw; text-align: left; }\r\n\r\n.white[_ngcontent-%COMP%]{\r\n    color:white;\r\n}\r\n\r\n.c1[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/2.png\"); }\r\n\r\n.c2[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/4.png\"); }\r\n\r\n.c3[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/5.png\"); }\r\n\r\n.c4[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/6.png\"); }\r\n\r\n.c5[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/asteroid.png\"); }\r\n\r\n.c6[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/comet.png\"); }\r\n\r\n.c7[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/fireball.png\"); }\r\n\r\n.c8[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/meteor.png\"); }\r\n\r\n.c9[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/meteorite.png\"); }\r\n\r\n.c10[_ngcontent-%COMP%] { background-image: url(\"/assets/stars/meteoroid.png\"); }\r\n\r\n.on[_ngcontent-%COMP%] { visibility: visible; }\r\n\r\n.off[_ngcontent-%COMP%] { visibility: hidden; }\r\n\r\n.comet[_ngcontent-%COMP%] {\r\n    height: 10px;\r\n    width: 10px;\r\n    position: absolute;\r\n    border-radius: 5px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.wave[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 200%;\r\n    background-position: 0 bottom;\r\n    background-repeat: repeat-x;\r\n    transform-origin: center bottom;\r\n    background-image: url(\"/assets/wwave.png\"); \r\n    background-size: 50% 50px;\r\n}\r\n\r\n@-webkit-keyframes waves {\r\n    0% { transform: translateX(0) translateY(0) scaleY(1); }\r\n    0% { transform: translateX(-25%) translateY(0) scaleY(.5); }\r\n    0% { transform: translateX(-50%) translateY(0) scaleY(1); }\r\n}\r\n\r\n@keyframes waves {\r\n    0% { transform: translateX(0) translateY(0) scaleY(1); }\r\n    0% { transform: translateX(-25%) translateY(0) scaleY(.5); }\r\n    0% { transform: translateX(-50%) translateY(0) scaleY(1); }\r\n}\r\n\r\n.nightsky[_ngcontent-%COMP%]{\r\n    background-image: url(\"/assets/test4.png\");\r\n    height: 100vh;\r\n    width: 5076px;\r\n    -webkit-animation: animate 180s linear infinite;\r\n            animation: animate 180s linear infinite;\r\n    position: relative;\r\n    background-size: contain;\r\n}\r\n\r\n.sea[_ngcontent-%COMP%]{\r\n    height: 200px; \r\n    position: relative; \r\n    background-image:linear-gradient(rgb(35, 6, 84), rgb(0, 0, 158));\r\n}\r\n\r\n.nightstar[_ngcontent-%COMP%]{\r\n    height: 8px;\r\n    width: 8px;\r\n    background-image:url(\"/assets/spawnstar.png\");  ;\r\n    position: absolute;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxnQkFBZ0IsRUFBRTs7QUFFNUI7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOztBQUVBLGtCQUFrQixZQUFZLEVBQUU7O0FBRWhDO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLCtDQUF1QztZQUF2Qyx1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLHFDQUFxQyxFQUFFO0FBQ2xEOztBQUhBO0lBQ0ksS0FBSywrQkFBK0IsRUFBRTtJQUN0QyxPQUFPLHFDQUFxQyxFQUFFO0FBQ2xEOztBQUVBO0lBQ0ksT0FBTywyQkFBMkIsRUFBRTtJQUNwQyxLQUFLLHdCQUF3QixFQUFFO0FBQ25DOztBQUhBO0lBQ0ksT0FBTywyQkFBMkIsRUFBRTtJQUNwQyxLQUFLLHdCQUF3QixFQUFFO0FBQ25DOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsUUFBUSxjQUFjLEVBQUU7O0FBQ3hCLE1BQU0sY0FBYyxFQUFFLGdCQUFnQixFQUFFOztBQUV4QztJQUNJLFdBQVc7QUFDZjs7QUFFQSxNQUFNLDRDQUE0QyxFQUFFOztBQUNwRCxNQUFNLDRDQUE0QyxFQUFFOztBQUNwRCxNQUFNLDRDQUE0QyxFQUFFOztBQUNwRCxNQUFNLDRDQUE0QyxFQUFFOztBQUNwRCxNQUFNLG1EQUFtRCxFQUFFOztBQUMzRCxNQUFNLGdEQUFnRCxFQUFFOztBQUN4RCxNQUFNLG1EQUFtRCxFQUFFOztBQUMzRCxNQUFNLGlEQUFpRCxFQUFFOztBQUN6RCxNQUFNLG9EQUFvRCxFQUFFOztBQUM1RCxPQUFPLG9EQUFvRCxFQUFFOztBQUM3RCxNQUFNLG1CQUFtQixFQUFFOztBQUMzQixPQUFPLGtCQUFrQixFQUFFOztBQUUzQjtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDBDQUEwQztJQUMxQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxLQUFLLGdEQUFnRCxFQUFFO0lBQ3ZELEtBQUssb0RBQW9ELEVBQUU7SUFDM0QsS0FBSyxtREFBbUQsRUFBRTtBQUM5RDs7QUFKQTtJQUNJLEtBQUssZ0RBQWdELEVBQUU7SUFDdkQsS0FBSyxvREFBb0QsRUFBRTtJQUMzRCxLQUFLLG1EQUFtRCxFQUFFO0FBQzlEOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7SUFDYixhQUFhO0lBQ2IsK0NBQXVDO1lBQXZDLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLDZDQUE2QztJQUM3QyxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ubmF2YmFyIGEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLm5hdmJhciBhOmhvdmVyIHsgY29sb3I6IHdoaXRlOyB9XHJcblxyXG4uc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFyYWxsYXgge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXN0Mi5wbmdcIik7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uc2xpZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL25ld3NwYWNlLnBuZ1wiKSByZXBlYXQteDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogNTA3NnB4O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDE4MHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE2OTJweCwgMCwgMCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRlIHtcclxuICAgIGZyb20geyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7IH1cclxuICAgIHRvIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XHJcbn1cclxuXHJcbiNzcGFjZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC8gMS40Mik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNkaXYyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNiwgMjYsIDI2KTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAvIDMuMzMpO1xyXG59XHJcblxyXG4jaG9yaXpvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjV2dztcclxufVxyXG5cclxuLm1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLm5hbWUgeyBmb250LXNpemU6IDV2dzsgfVxyXG4uaW0geyBmb250LXNpemU6IDJ2dzsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG5cclxuLndoaXRle1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5jMSB7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc3RhcnMvMi5wbmdcIik7IH1cclxuLmMyIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy80LnBuZ1wiKTsgfVxyXG4uYzMgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N0YXJzLzUucG5nXCIpOyB9XHJcbi5jNCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc3RhcnMvNi5wbmdcIik7IH1cclxuLmM1IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9hc3Rlcm9pZC5wbmdcIik7IH1cclxuLmM2IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9jb21ldC5wbmdcIik7IH1cclxuLmM3IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9maXJlYmFsbC5wbmdcIik7IH1cclxuLmM4IHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9tZXRlb3IucG5nXCIpOyB9XHJcbi5jOSB7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvc3RhcnMvbWV0ZW9yaXRlLnBuZ1wiKTsgfVxyXG4uYzEwIHsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9zdGFycy9tZXRlb3JvaWQucG5nXCIpOyB9XHJcbi5vbiB7IHZpc2liaWxpdHk6IHZpc2libGU7IH1cclxuLm9mZiB7IHZpc2liaWxpdHk6IGhpZGRlbjsgfVxyXG5cclxuLmNvbWV0IHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLndhdmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd3dhdmUucG5nXCIpOyBcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2F2ZXMge1xyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSk7IH1cclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpIHRyYW5zbGF0ZVkoMCkgc2NhbGVZKC41KTsgfVxyXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgwKSBzY2FsZVkoMSk7IH1cclxufVxyXG5cclxuLm5pZ2h0c2t5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy90ZXN0NC5wbmdcIik7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDUwNzZweDtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxODBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLnNlYXtcclxuICAgIGhlaWdodDogMjAwcHg7IFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYigzNSwgNiwgODQpLCByZ2IoMCwgMCwgMTU4KSk7XHJcbn1cclxuXHJcbi5uaWdodHN0YXJ7XHJcbiAgICBoZWlnaHQ6IDhweDtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvc3Bhd25zdGFyLnBuZ1wiKTsgIDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:scroll']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainComponent = /*#__PURE__*/function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 2,
      vars: 0,
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Daniel Fesalbon\Desktop\angular\mysite\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map