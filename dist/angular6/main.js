(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'pages',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["NeedAuthGuard"]]
    },
];
// const config: ExtraOptions = {
//   useHash: false,
// };
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#section-content {\n  height: 100%; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SPI-2.0';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _interceptor_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptor.module */ "./src/app/interceptor.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_7__["LoginModule"],
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"],
                _interceptor_module__WEBPACK_IMPORTED_MODULE_11__["InterceptorModule"]
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_9__["NeedAuthGuard"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"], useValue: '/' }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: NeedAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeedAuthGuard", function() { return NeedAuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NeedAuthGuard = /** @class */ (function () {
    function NeedAuthGuard(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    NeedAuthGuard.prototype.canActivate = function (route, state) {
        var redirectUrl = route['_routerState']['url'];
        if (this.customerService.isLogged()) {
            return true;
        }
        this.router.navigateByUrl(this.router.createUrlTree(['/login'], {
            queryParams: {
                redirectUrl: redirectUrl
            }
        }));
        return false;
    };
    NeedAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NeedAuthGuard);
    return NeedAuthGuard;
}());



/***/ }),

/***/ "./src/app/customer.service.ts":
/*!*************************************!*\
  !*** ./src/app/customer.service.ts ***!
  \*************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TOKEN = 'TOKEN';
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN, token);
    };
    CustomerService.prototype.isLogged = function () {
        return localStorage.getItem(TOKEN) != null;
    };
    CustomerService.prototype.deleteToken = function () {
        localStorage.removeItem(TOKEN);
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.OIP_ENDPOINT = "https://api.oip.tm.com.my/app/t/tmrnd.com.my/";
        this.DB_ENDPOINT = "http://10.44.11.80:1880/";
    }
    // App login check via LDAP Authentication
    DataService.prototype.loginOip = function (credentials) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': 'Bearer ee07dab5-ec1d-3346-8d6b-9a194d9bbf4e'
        });
        var url = this.OIP_ENDPOINT + 'ldap/1.0/ldapauth?username=' + credentials.username + '&password=' + credentials.password;
        return this.http.post(url, JSON.stringify(credentials), { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
        }));
    };
    // Heatmap data
    DataService.prototype.getSensorList = function () {
        return this.http.get(this.DB_ENDPOINT + 'spi2/sensor_list')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
        }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/interceptor.module.ts":
/*!***************************************!*\
  !*** ./src/app/interceptor.module.ts ***!
  \***************************************/
/*! exports provided: HttpsRequestInterceptor, InterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpsRequestInterceptor", function() { return HttpsRequestInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorModule", function() { return InterceptorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HttpsRequestInterceptor = /** @class */ (function () {
    function HttpsRequestInterceptor() {
    }
    HttpsRequestInterceptor.prototype.intercept = function (req, next) {
        var dupReq = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
        return next.handle(dupReq);
    };
    HttpsRequestInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpsRequestInterceptor);
    return HttpsRequestInterceptor;
}());

;
var InterceptorModule = /** @class */ (function () {
    function InterceptorModule() {
    }
    InterceptorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: HttpsRequestInterceptor, multi: true }
            ]
        })
    ], InterceptorModule);
    return InterceptorModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"fullBg\">\n  <div class=\"container\">\n    <form class=\"form-signin\">\n      <img src=\"assets/images/spi_ms_title3.png\" alt=\"\">\n      <input type=\"text\" class=\"form-control text-center\" name=\"username\" placeholder=\"Staff ID\" required=\"\" autofocus=\"\"\n        [(ngModel)]=\"credentials.username\" />\n      <input type=\"password\" class=\"form-control text-center\" name=\"password\" placeholder=\"Password\" required=\"\"\n        [(ngModel)]=\"credentials.password\" />\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"tryLoginOip()\">Log in</button>\n    </form>\n    <p class=\"text-center sign-up\">Log in using your <strong>GEMS</strong> account</p>\n    <div class=\"err-msg\"></div>\n  </div>\n</div>\n\n<div class=\"footer navbar-fixed-bottom text-center text-white pd-20\">\n  <span>© 2018 Smart Passive Infrastructure 2.0 by <a href=\"http://www.tmrnd.com.my\">TM R&D Sdn.\n      Bhd.</a></span>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fullBg {\n  background-color: #2D2E2E;\n  height: 100vh; }\n\n.form-signin {\n  max-width: 400px;\n  margin: 60px auto 10px; }\n\n.form-signin img {\n    width: 100%;\n    margin-bottom: 30px; }\n\n.form-signin-heading {\n    text-align: center;\n    font-weight: bold;\n    color: #fff;\n    margin-bottom: 20px; }\n\n.form-signin-desc {\n    text-align: center;\n    font-weight: bold;\n    color: #fff;\n    margin-bottom: 20px; }\n\n.form-signin .checkbox {\n    font-weight: normal; }\n\n.form-signin .form-control {\n    position: relative;\n    font-size: 16px;\n    height: auto;\n    padding: 10px; }\n\n.form-signin input + input {\n    margin-top: 15px; }\n\n.form-signin input[type=\"text\"] {\n    margin-bottom: -1px;\n    border-top: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-left: 1px solid transparent;\n    box-shadow: none;\n    border-radius: 3px; }\n\n.form-signin input[type=\"text\"]:focus {\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n\n.form-signin input[type=\"password\"] {\n    z-index: 2;\n    margin-bottom: 20px;\n    border-top: none;\n    border-bottom: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-left: 1px solid transparent;\n    border-radius: 3px;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n\n.form-signin input[type=\"password\"]:focus {\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0px 1px 0px 0px rgba(255, 255, 255, 0.5); }\n\n.form-signin .btn {\n    font-weight: bold;\n    border-radius: 3px;\n    border: none; }\n\np.sign-up {\n  color: #fff;\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer.service */ "./src/app/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, customer, router) {
        this.api = api;
        this.customer = customer;
        this.router = router;
        this.credentials = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.credentials = {
            username: '', password: ''
        };
    };
    LoginComponent.prototype.tryLoginOip = function () {
        var _this = this;
        this.api.loginOip(this.credentials)
            .subscribe(function (res) {
            _this.out = res;
            console.log(_this.out.result);
            if (_this.out.result == 'AUTH_SUCCESS') {
                _this.customer.setToken('token');
                _this.router.navigateByUrl('');
            }
            else {
                //alert('error');
                $('.err-msg').html('');
                $('.err-msg').append('<p class="text-center" style="color: red;">Authentication Failed</p>');
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/pages/alert/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/alert/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Alert Management</h2>\n<table id=\"example\" class=\"display\" style=\"width:100%\">\n  <thead>\n    <tr>\n      <th>ID</th>\n      <th>Type</th>\n      <th>Name</th>\n      <th>Latitude</th>\n      <th>Longitude</th>\n      <th>Result</th>\n      <th>Last Updated</th>ng serve -o\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>W1</td>\n      <td>Water Level</td>\n      <td>TMRND</td>\n      <td>2.907732</td>\n      <td>101.32635</td>\n      <td>L2</td>\n      <td>30/102018 16:40</td>\n      <td><button>Acknowledge</button></td>\n    </tr>\n    <tr>\n      <td>W2</td>\n      <td>Water Level</td>\n      <td>CBJ2</td>\n      <td>2.907732</td>\n      <td>101.32635</td>\n      <td>L5</td>\n      <td>30/102018 16:40</td>\n      <td><button>Acknowledge</button></td>\n    </tr>\n    <tr>\n      <td>C1</td>\n      <td>Temperature</td>\n      <td>Path A</td>\n      <td>2.907732</td>\n      <td>101.32635</td>\n      <td>35°</td>\n      <td>30/102018 16:40</td>\n      <td><button>Acknowledge</button></td>\n    </tr>\n  </tbody>\n  <tfoot>\n  </tfoot>\n</table>\n"

/***/ }),

/***/ "./src/app/pages/alert/alert.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/alert/alert.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/alert/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/alert/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
        $('#example').DataTable({
            "pagingType": "full_numbers",
            "scrollX": true
        });
        $('#example').find('button').click(function () {
            console.log($(this).after());
            $(this).next().remove();
            $('<p>By ABC</p>').insertAfter($(this));
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/pages/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/pages/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/pages/indoor-map/indoor-map.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/indoor-map/indoor-map.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  indoor-map works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/indoor-map/indoor-map.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/indoor-map/indoor-map.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/indoor-map/indoor-map.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/indoor-map/indoor-map.component.ts ***!
  \**********************************************************/
/*! exports provided: IndoorMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoorMapComponent", function() { return IndoorMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndoorMapComponent = /** @class */ (function () {
    function IndoorMapComponent() {
    }
    IndoorMapComponent.prototype.ngOnInit = function () {
    };
    IndoorMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-indoor-map',
            template: __webpack_require__(/*! ./indoor-map.component.html */ "./src/app/pages/indoor-map/indoor-map.component.html"),
            styles: [__webpack_require__(/*! ./indoor-map.component.scss */ "./src/app/pages/indoor-map/indoor-map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndoorMapComponent);
    return IndoorMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/outdoor-map/outdoor-map.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/outdoor-map/outdoor-map.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-4\">\r\n  <button (click)=\"genPath()\" class=\"btn btn-block btn-primary\">SENSORS</button>\r\n  <button (click)=\"genHeatmap()\" class=\"btn btn-block btn-primary\">HEATMAP</button>\r\n</div>\r\n<div class=\"col-sm-8\">\r\n  <div id=\"map\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/outdoor-map/outdoor-map.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/outdoor-map/outdoor-map.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/outdoor-map/outdoor-map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/outdoor-map/outdoor-map.component.ts ***!
  \************************************************************/
/*! exports provided: OutdoorMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutdoorMapComponent", function() { return OutdoorMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutdoorMapComponent = /** @class */ (function () {
    function OutdoorMapComponent(dataService) {
        this.dataService = dataService;
        this.sensorList = [];
        this.addressPoints = [];
        this.statusHeatmap = false;
        this.statusSensorList = false;
        this.sensorpath = [];
        this.path = [];
    }
    OutdoorMapComponent.prototype.ngOnInit = function () {
        this.map = L.map('map').setView([2.920282, 101.641747], 12);
        var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
    };
    OutdoorMapComponent.prototype.genHeatmap = function () {
        var _this = this;
        this.statusHeatmap = !this.statusHeatmap;
        console.log(this.statusHeatmap);
        var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
        if (this.statusHeatmap) {
            this.dataService.getSensorList().subscribe(function (res) {
                _this.sensorList = res.data;
                var e = _this.sensorList;
                console.log(e);
                _this.addressPoints = e.map(function (x) {
                    var pf = function (n) { return Number(parseFloat(n).toFixed(6)); };
                    return [pf(x.latitude), pf(x.longitude), pf(x.temperature / 5)];
                });
                console.log(_this.addressPoints);
                _this.heat = L.heatLayer(_this.addressPoints, { radius: 25 }).addTo(_this.map);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.map.removeLayer(this.heat);
        }
    };
    OutdoorMapComponent.prototype.genPath = function () {
        var _this = this;
        this.statusSensorList = !this.statusSensorList;
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
        if (this.statusSensorList) {
            this.dataService.getSensorList().subscribe(function (res) {
                _this.sensorList = res.data;
                var e = _this.sensorList;
                _this.path = e.map(function (x) {
                    var pf = function (n) { return Number(parseFloat(n).toFixed(6)); };
                    return [pf(x.latitude), pf(x.longitude)];
                });
                var greenIcon = L.icon({
                    iconUrl: 'src/assets/images/sensor_icon.png',
                    iconSize: [15, 15],
                    iconAnchor: [0, 0],
                });
                for (var i = 0; i < _this.path.length; i++) {
                    _this.sensorpath[i] = L.marker(_this.path[i], { icon: greenIcon }).addTo(_this.map);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            //this.map.removeLayer(this.path);
            for (var i = 0; i < this.path.length; i++) {
                this.map.removeLayer(this.sensorpath[i]);
            }
        }
    };
    OutdoorMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outdoor-map',
            template: __webpack_require__(/*! ./outdoor-map.component.html */ "./src/app/pages/outdoor-map/outdoor-map.component.html"),
            styles: [__webpack_require__(/*! ./outdoor-map.component.scss */ "./src/app/pages/outdoor-map/outdoor-map.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], OutdoorMapComponent);
    return OutdoorMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _outdoor_map_outdoor_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outdoor-map/outdoor-map.component */ "./src/app/pages/outdoor-map/outdoor-map.component.ts");
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-table/view-table.component */ "./src/app/pages/view-table/view-table.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/pages/alert/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'dashboard',
                component: _outdoor_map_outdoor_map_component__WEBPACK_IMPORTED_MODULE_3__["OutdoorMapComponent"]
            },
            {
                path: 'path-management',
                component: _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_4__["ViewTableComponent"]
            },
            {
                path: 'alert-management',
                component: _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]
            }
        ],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["NeedAuthGuard"]]
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["NeedAuthGuard"]]
    },];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.html":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<div class=\"main-section\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pages.component.scss":
/*!********************************************!*\
  !*** ./src/app/pages/pages.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
    }
    PagesComponent.prototype.ngOnInit = function () {
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/pages/pages.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-table/view-table.component */ "./src/app/pages/view-table/view-table.component.ts");
/* harmony import */ var _outdoor_map_outdoor_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outdoor-map/outdoor-map.component */ "./src/app/pages/outdoor-map/outdoor-map.component.ts");
/* harmony import */ var _indoor_map_indoor_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indoor-map/indoor-map.component */ "./src/app/pages/indoor-map/indoor-map.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/pages/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/pages/alert/alert.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_6__["PagesComponent"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_7__["PagesRoutingModule"]
            ],
            declarations: [
                _view_table_view_table_component__WEBPACK_IMPORTED_MODULE_2__["ViewTableComponent"],
                _outdoor_map_outdoor_map_component__WEBPACK_IMPORTED_MODULE_3__["OutdoorMapComponent"],
                _indoor_map_indoor_map_component__WEBPACK_IMPORTED_MODULE_4__["IndoorMapComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ].concat(PAGES_COMPONENTS, [
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"]
            ]),
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["NeedAuthGuard"]],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Desktop Navbar (Side)-->\r\n<nav class=\"side-menu hidden-xs\" role=\"navigation\">\r\n  <ul>\r\n    <li>\r\n      <!-- Collapse button -->\r\n      <a id=\"menu-toggle\" href=\"javascript:void(0);\">\r\n        <i class=\"fa fa-bars fa-1x\"></i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/dashboard']\" title=\"Dashboard\">\r\n        <span class=\"hidden\">Dashboard</span>\r\n        <i class=\"material-icons\">map</i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/path-management']\" title=\"Path Management\">\r\n        <span class=\"hidden\">Path Management</span>\r\n        <i class=\"material-icons\">table_chart</i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a [routerLink]=\"['/alert-management']\" title=\"Alert Management\">\r\n        <span class=\"hidden\">Alert Management</span>\r\n        <i class=\"material-icons\">notification_important</i>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a (click)=\"logout()\">\r\n        <span class=\"hidden\">Logout</span>\r\n        <i class=\"material-icons\">power_settings_new</i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"footer text-white pd-20 text-center\">\r\n    <span>© 2018 Smart Passive Infrastructure 2.0 by <a href=\"http://www.tmrnd.com.my\">TM R&D Sdn.\r\n        Bhd.</a></span>\r\n  </div>\r\n</nav>\r\n\r\n<!-- Mobile Navbar (Top)-->\r\n<nav class=\"navbar navbar-default visible-xs\" role=\"navigation\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-primary-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a [routerLink]=\"['/dashboard']\" class=\"mob-Logo\"><img id=\"logo-navbar-middle\" src=\"src/assets/images/spi_ms_title3.png\"\r\n          width=\"180\" alt=\"Logo here\"></a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbar-primary-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/path-management']\">Path Management</a>\r\n        </li>\r\n        <li>\r\n          <a [routerLink]=\"['/alert-management']\" title=\"Alert Management\">Alert Management</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-menu {\n  background: #2D2E2E;\n  height: 100%;\n  position: fixed;\n  width: 70px;\n  transition-timing-function: ease-in-out;\n  transition: width 0.5s; }\n  .side-menu.draw-in {\n    width: 300px;\n    transition-timing-function: ease-in-out;\n    transition: width 0.5s; }\n  .side-menu ul {\n    list-style-type: none;\n    padding: 0;\n    margin: 0; }\n  .side-menu ul li {\n      padding: 10px; }\n  .side-menu ul li a {\n        color: #fff;\n        height: 40px;\n        position: relative;\n        display: block;\n        text-align: center;\n        box-sizing: border-box;\n        border: 1px solid transparent;\n        transition: border 0.2s; }\n  .side-menu ul li a span, .side-menu ul li a i {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%); }\n  .side-menu ul li a span {\n          -webkit-animation: delay-2s 0.5s;\n                  animation: delay-2s 0.5s; }\n  .side-menu ul li a i.hidden {\n          -webkit-animation: delay-invert-2s 0.5s;\n                  animation: delay-invert-2s 0.5s;\n          display: block !important;\n          opacity: 0; }\n  .side-menu ul li:not(:first-child) a:hover {\n        text-decoration: none;\n        border: 0.2px solid #fff; }\n  .side-menu ul li:not(:first-child) a.active {\n        border: 0.5px solid #fff; }\n  .side-menu .footer {\n    position: absolute;\n    bottom: 0;\n    display: none;\n    font-size: 12px; }\n  .side-menu .footer.draw-in {\n      display: block;\n      -webkit-animation: delay-2s 0.5s;\n              animation: delay-2s 0.5s; }\n"

/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.ts ***!
  \****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/customer.service */ "./src/app/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, customer) {
        this.router = router;
        this.customer = customer;
        //router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // Toggle sidebar entrance
        $('#menu-toggle').click(function () {
            console.log('click');
            $('.side-menu').toggleClass('draw-in');
            $('.main-section').toggleClass('draw-in');
            $('.footer').toggleClass('draw-in');
            $('.side-menu ul li a span').toggleClass('hidden');
            $('.side-menu ul li a i').not($('.side-menu ul li:first-child a i')).toggleClass('hidden');
        });
        // Logout button on hover
        $('.side-menu ul li:last-child').mouseover(function () {
            $(this).css("cursor", "pointer");
        }).mouseout(function () {
            $(this).css("cursor", "default");
        });
        // Add menu list border when active
        $('.side-menu li:not(:first-child)').click(function () {
            if ($('.side-menu li a').hasClass('active')) {
                $('.side-menu li a').removeClass('active');
            }
            $('a', this).addClass('active');
        });
    };
    SidebarComponent.prototype.logout = function () {
        this.customer.deleteToken();
        this.router.navigate(['/login']);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/pages/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/pages/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/pages/view-table/view-table.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/view-table/view-table.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 style=\"padding-top: 15px; padding-left:15px; margin: 0px;\">Sensor Management</h2>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th scope=\"col\">Type</th>\r\n      <th scope=\"col\">Device ID</th>\r\n      <th scope=\"col\">Latitude</th>\r\n      <th scope=\"col\">Longitude</th>\r\n      <th scope=\"col\">Temperature</th>\r\n      <th scope=\"col\">Timestamp</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <td>Control System</td>\r\n      <td>CS_1</td>\r\n      <td>2.931179</td>\r\n      <td>101.659292</td>\r\n      <td>37.5</td>\r\n      <td>15/10/2018 04:08:53 PM</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Manhole Infra</td>\r\n      <td>MI_1</td>\r\n      <td>2.931179</td>\r\n      <td>101.659292</td>\r\n      <td>37.5</td>\r\n      <td>15/10/2018 04:08:53 PM</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Cabinet Infra</td>\r\n      <td>CI_1</td>\r\n      <td>2.931179</td>\r\n      <td>101.659292</td>\r\n      <td>37.5</td>\r\n      <td>15/10/2018 04:08:53 PM</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Pole Infra</td>\r\n      <td>PI_1</td>\r\n      <td>2.931179</td>\r\n      <td>101.659292</td>\r\n      <td>37.5</td>\r\n      <td>15/10/2018 04:08:53 PM</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Fiber Channel</td>\r\n      <td>FC_1</td>\r\n      <td>2.931179</td>\r\n      <td>101.659292</td>\r\n      <td>37.5</td>\r\n      <td>15/10/2018 04:08:53 PM</td>\r\n    </tr>\r\n  </tbody>\r\n</table> -->\r\n\r\n<p>Work in progress!</p>\r\n"

/***/ }),

/***/ "./src/app/pages/view-table/view-table.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/view-table/view-table.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/view-table/view-table.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/view-table/view-table.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTableComponent", function() { return ViewTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewTableComponent = /** @class */ (function () {
    function ViewTableComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        router.events.subscribe(function (_) { return _this.currentUrl = _.url; });
    }
    ViewTableComponent.prototype.ngOnInit = function () {
    };
    ViewTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-table',
            template: __webpack_require__(/*! ./view-table.component.html */ "./src/app/pages/view-table/view-table.component.html"),
            styles: [__webpack_require__(/*! ./view-table.component.scss */ "./src/app/pages/view-table/view-table.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewTableComponent);
    return ViewTableComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\spi2-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map