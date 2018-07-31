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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"] },
    { path: 'browse', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'listings', component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_4__["ListingsComponent"] },];
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle  Marketplace</h1>\n<router-outlet></router-outlet>\n"

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _bike_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bike.service */ "./src/app/bike.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_5__["ListingsComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_bike_service__WEBPACK_IMPORTED_MODULE_9__["BikeService"], _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.removeSessionid = function () {
        console.log("INSERVICE removing sessionId");
        return this.http.get('/removesessionid/');
    };
    AuthService.prototype.getContact = function (userid) {
        console.log("INSERVICE getting contact");
        return this.http.get('/getcontact/' + userid);
    };
    AuthService.prototype.getSessionid = function () {
        console.log("INSERVICE getting sessionId");
        return this.http.get('/getsessionid/');
    };
    AuthService.prototype.passReg = function (user) {
        console.log("INSERVICE", user);
        return this.http.post('/postreg', user);
        // return this.http.get('/notsget');
    };
    AuthService.prototype.passLog = function (user) {
        console.log("INSERVICE", user);
        return this.http.post('/postlog', user);
        // return this.http.get('/notsget');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bike.service.ts":
/*!*********************************!*\
  !*** ./src/app/bike.service.ts ***!
  \*********************************/
/*! exports provided: BikeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BikeService", function() { return BikeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BikeService = /** @class */ (function () {
    function BikeService(http) {
        this.http = http;
    }
    BikeService.prototype.searchBikes = function (search) {
        console.log("INSERVICE searching for a  bike", search);
        return this.http.get('/searchbikes/' + search);
    };
    //future feature
    BikeService.prototype.uploadPic = function (pic) {
        var uploadData = new FormData();
        uploadData.append('myFile', pic, pic.name);
        console.log(uploadData);
        console.log("UP PIC client side service");
        this.http.post('/uploadpic', uploadData);
    };
    BikeService.prototype.createBike = function (bike) {
        console.log("INSERVICE making bike", bike);
        return this.http.post('/createbike', bike);
        // return this.http.get('/notsget');
    };
    BikeService.prototype.getallBikes = function () {
        console.log("INSERVICE getting all bikes");
        return this.http.get('/getallbikes');
        // return this.http.get('/notsget');
    };
    BikeService.prototype.getmyBikes = function () {
        console.log("INSERVICE getting all bikes");
        return this.http.get('/getmybikes');
        // return this.http.get('/notsget');
    };
    BikeService.prototype.delBike = function (bike) {
        console.log("INSERVICE deleting a bike");
        return this.http.delete('/delbike/' + bike._id);
    };
    BikeService.prototype.updateBike = function (bike) {
        console.log("INSERVICE updating a bike");
        return this.http.post('/updatebike', bike);
    };
    BikeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BikeService);
    return BikeService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    margin-left:10px;\r\n}\r\n.bikeEntry{\r\n    width:500px;\r\n    height:150px;\r\n    border: 2px solid black;\r\n}\r\nimg{\r\n    height:100px;\r\n    width:100px;\r\n}\r\n.pic{\r\n    display:inline-block;\r\n    height:150px;\r\n    width:110px;\r\n}\r\n.titdesc{\r\n   vertical-align:top;\r\n    display:inline-block;\r\n    height:150px;\r\n    width:250px;\r\n}\r\n.priceloc{\r\n    vertical-align:top;\r\n     display:inline-block;\r\n     height:150px;\r\n     width:110px;\r\n }\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1 *ngIf=\"authfailure\">ACCESS DENIED!</h1>\n<div *ngIf=\"!authfailure\">\n<p><a [routerLink]=\"['/browse']\">Browse</a>   <a [routerLink]=\"['/listings']\">My Listings</a> <a href (click)=\"logOff($event)\">Log Off</a>  </p>\n<form #searchForm='ngForm' (submit)=\"onSearch($event,searchForm)\"  >\n<label for=\"searchbox\">Search </label> <input type=\"text\" name=\"sbox\" id=\"searchbox\"\n[ngModel]=\"searchbox\" \nrequired\n#sbox=\"ngModel\"> \n<button>Search</button>\n</form>\n<div *ngIf=\"negsearch\">No Bikes Found with search criteria</div>\n<div class=\"listbikes\" *ngFor=\"let bike of bikes\">\n<div class=\"bikeEntry\">\n<div class=\"pic\"><img src=\"{{bike.bikepic}}\"> </div>\n <div class=\"titdesc\"><h2>{{bike.title}} </h2>\n   {{bike.description}} </div>\n<div class=\"priceloc\"><h2>{{bike.price| currency}} </h2>\n <p>{{bike.location}} </p>\n  <button *ngIf=\"sessionid !== bike.userid\" (click)=\"getContact(bike.userid)\">Contact</button>\n <button *ngIf=\"sessionid === bike.userid\" (click)=\"delBike(bike)\" >Delete</button>\n</div>\n</div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bike_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bike.service */ "./src/app/bike.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
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




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(bikeService, authService, router) {
        this.bikeService = bikeService;
        this.authService = authService;
        this.router = router;
        this.negsearch = false;
        this.bikes = [];
        this.contact = {
            firstname: '',
            lastname: '',
            email: ''
        };
        this.sessionid = '';
        this.authfailure = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observer = this.bikeService.getallBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.bikes = response;
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
        var o2 = this.authService.getSessionid();
        o2.subscribe(function (response) {
            console.log("GOT Sessionid?", response);
            if (response === "nosessionid") {
                _this.authfailure = true;
            }
            else {
                _this.authfailure = false;
                _this.sessionid = response;
            }
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    DashboardComponent.prototype.getContact = function (userid) {
        var _this = this;
        console.log("contact UID: ", userid);
        var observer = this.authService.getContact(userid);
        observer.subscribe(function (response) {
            console.log("GOT CONTACT?", response);
            _this.contact = response;
            console.log("FN", _this.contact[0].firstname);
            confirm("Name:" + _this.contact[0].firstname + "\n" + "Email:" + _this.contact[0].email);
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    DashboardComponent.prototype.delBike = function (bike) {
        var _this = this;
        console.log("DELBIKE", bike);
        var o = this.bikeService.delBike(bike);
        o.subscribe(function (response) {
            console.log(response);
        }, function (Error) {
            console.log(Error);
        });
        var observer = this.bikeService.getallBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.bikes = response;
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    DashboardComponent.prototype.onSearch = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log("searchv:", form.value.sbox);
        var observer = this.bikeService.searchBikes(form.value.sbox);
        observer.subscribe(function (response) {
            console.log("GOT Search?", response);
            if (response === "negative") {
                console.log("NEGSEARCH!");
                _this.bikes = [];
                _this.negsearch = true;
            }
            else {
                _this.negsearch = false;
                _this.bikes = response;
            }
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    DashboardComponent.prototype.logOff = function (event) {
        var _this = this;
        console.log("LOGOFF CLICKED!");
        event.preventDefault();
        var ob = this.authService.removeSessionid();
        ob.subscribe(function (response) {
            console.log('returned', response);
            _this.router.navigate(['']);
        }, function (Error) { console.log("Error", Error); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_bike_service__WEBPACK_IMPORTED_MODULE_1__["BikeService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login input, button{\r\n    display: block;\r\n}\r\n.login {\r\n    height:200px;\r\n    width: 200px;\r\n    display:inline-block;\r\nborder: 1px solid black;\r\n}\r\n.botd{\r\n    height: 150px;\r\n    width: 600px;\r\n    border: 1px solid black;\r\n}\r\n.register {\r\n    height:300px;\r\n    width: 300px;\r\n    display:inline-block;\r\nborder: 1px solid black;\r\nvertical-align:top;\r\n}\r\n.register input, button{\r\n    display: block;\r\n}\r\n.botd{\r\n    width:500px;\r\n    height:150px;\r\n    border: 2px solid black;\r\n}\r\nimg{\r\n    height:100px;\r\n    width:100px;\r\n}\r\n.pic{\r\n    display:inline-block;\r\n    height:150px;\r\n    width:110px;\r\n}\r\n.titdesc{\r\n   vertical-align:top;\r\n    display:inline-block;\r\n    height:150px;\r\n    width:250px;\r\n}\r\n.priceloc{\r\n    vertical-align:top;\r\n     display:inline-block;\r\n     height:150px;\r\n     width:110px;\r\n }\r\n.errormsg{\r\n     color:red;\r\n }"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Bike of the Day!</h2>\n\n<div class=\"botd\">\n    <div class=\"pic\"><img src=\"{{bike.bikepic}}\"> </div>\n     <div class=\"titdesc\"><h2>{{bike.title}} </h2>\n       {{bike.description}} </div>\n    <div class=\"priceloc\"><h2>{{bike.price| currency}} </h2>\n       {{bike.location}} \n      </div>\n   \n  </div>\n  <div class=\"login\">\n<form (submit)=\"onLogin($event,logForm)\"  #logForm='ngForm'  >\n    <label for=\"emailidl\"> Email</label><input type=\"text\" name=\"email\" id=\"emailidl\"\n             [ngModel]=\"emailidl\" \n            required\n            #email=\"ngModel\">\n            <label for=\"passwdl\"> Password</label><input type=\"password\" name=\"password\" id=\"passwdl\"\n            [ngModel]=\"passwdl\" \n            required\n            #password=\"ngModel\">\n            <div *ngIf=\"badlogin\" class=\"errormsg\" >Invalid Credentials</div>\n            <div *ngIf=\"badlogin_5times\" class=\"errormsg\" >Max Attempts to login exceeded, username locked out for 1 hour</div>\n            <button>Login</button>\n    </form>\n    </div>\n    <div class=\"register\">\n        <form  (submit)=\"onReg($event,regForm)\"  #regForm='ngForm'>\n            <label for=\"fname\"> First Name</label><input type=\"text\" name=\"firstname\" id=\"fname\"\n            [ngModel]=\"fname\" \n            required\n            #firstname=\"ngModel\">\n           <label for=\"lname\"> Last Name</label><input type=\"text\" name=\"lastname\" id=\"lname\"\n           [ngModel]=\"lname\" \n           required\n           #lastname=\"ngModel\">\n            <label for=\"emailid\"> Email</label><input type=\"text\" name=\"email\" id=\"emailid\"\n             [ngModel]=\"emailid\" \n            required\n            #email=\"ngModel\">\n            <label for=\"password\"> Password</label><input type=\"password\" name=\"password\" id=\"passwd\"\n            [ngModel]=\"passwd\" \n            required\n            #password=\"ngModel\">\n            <div *ngIf=\"passShort\" class=\"errormsg\" >Password must contain at least 16 characters</div>\n            <label for=\"cpassword\">Confirmation Password</label><input type=\"password\" name=\"cpassword\" id=\"cpasswd\"\n            [ngModel]=\"cpasswd\" \n            required\n            #cpassword=\"ngModel\">\n            <div *ngIf=\"passmm\" class=\"errormsg\" >Password must match conformation password</div>\n            <button [disabled]=\"!regForm.valid\">Register</button>\n            </form>\n            </div>"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bike_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bike.service */ "./src/app/bike.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(bikeService, authService, router) {
        this.bikeService = bikeService;
        this.authService = authService;
        this.router = router;
        this.logerror = '';
        this.bikes = [];
        this.bike = {};
        this.badlogin = false;
        this.badlogin_5times = false;
        this.blcount = 0;
        this.passShort = false;
        this.passmm = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observer = this.bikeService.getallBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.bikes = response;
            var b = _this.bikes.length;
            b = b - 1;
            var rand = Math.round(Math.random() * (b - 0) + 0);
            console.log("random ", rand);
            _this.bike = _this.bikes[rand];
            console.log("botd ", _this.bike);
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    LandingComponent.prototype.onLogin = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log("VALUES ", form.value);
        var observer = this.authService.passLog(form.value);
        observer.subscribe(function (response) {
            console.log("response", response);
            if (response === "valid") {
                console.log("VALLLLLID!");
                _this.badlogin = false;
                _this.router.navigate(['/browse']);
            }
            else if (response === "invalidlogin") {
                console.log(" Bad username!");
                _this.badlogin = true;
                _this.badlogin_5times = false;
            }
            else if (response === "invalidpassword") {
                console.log(" Bad password!!");
                _this.badlogin = true;
                _this.badlogin_5times = false;
            }
            else if (response === "5timesbad") {
                console.log("5 Bad passwords!!");
                _this.badlogin_5times = true;
            }
        }, function (Error) {
            console.log("Error", Error);
        });
    };
    LandingComponent.prototype.onReg = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log("VALUES ", form.value);
        if (form.value.password.length < 16) {
            console.log("password too short!");
            this.passShort = true;
        }
        else if (form.value.password != form.value.cpassword) {
            this.passmm = true;
        }
        else {
            this.passmm = false;
            this.passShort = false;
            var observer = this.authService.passReg(form.value);
            observer.subscribe(function (response) {
                console.log("response", response);
                _this.router.navigate(['/browse']);
            }, function (Error) {
                console.log("Error", Error);
            });
        }
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_bike_service__WEBPACK_IMPORTED_MODULE_1__["BikeService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create input, button{\r\n    display: block;\r\n}\r\na{\r\n    margin-left: 10px;\r\n}\r\n.bikeEntry{\r\n    width:500px;\r\n    height:250px;\r\n    border: 2px solid black;\r\n}"

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"authfailure\">ACCESS DENIED!</h1>\n<div *ngIf=\"!authfailure\">\n<p><a [routerLink]=\"['/browse']\">Browse</a>   <a [routerLink]=\"['/listings']\">My Listings</a> <a href (click)=\"logOff\">Log Off</a>  </p>\n<div class=\"create\">\n    <h1>Create Listing</h1>\n      <form  (submit)=\"onCreate($event,createForm)\"  #createForm='ngForm'>\n       <label for=\"image\">Image Url</label><input type=\"text\" name=\"bikepic\" id=\"image\"\n        [ngModel]=\"image\" \n        required\n        #bikepic=\"ngModel\"\n        >\n     Title <input type=\"text\" name=\"title\" id=\"titletext\"\n        [ngModel]=\"titletext\" \n        required\n        #title=\"ngModel\"> \n        <label for=\"pricelist\"> Price</label><input type=\"Number\" name=\"price\" id=\"pricelist\"\n        [ngModel]=\"pricelist\" \n       required\n       #price=\"ngModel\">\n         <p>Description</p>\n        <p> <textarea name=\"description\" id=\"desc\"\n       [ngModel]=\"desc\" \n       required\n       #description=\"ngModel\"></textarea> </p>\n        \n        <label for=\"location\"> Location</label><input type=\"text\" name=\"location\" id=\"loc\"\n        [ngModel]=\"loc\" \n        required\n        #location=\"ngModel\">\n        <button [disabled]=\"!createForm.valid\">Create</button>\n        </form>\n        </div>\n        <h1>Edit/Update Listing</h1>\n        <div class = \"bikelisting\" *ngFor=\"let mybike of mybikes\">\n          <div class=\"bikeEntry\">\n    <form (submit)=\"onUpdate($event,updateForm)\"   #updateForm='ngForm'  >\n        <p>Image Url: <input type=\"text\" name=\"bikepic\" id=\"image\" size=\"50\" value=\"{{mybike.bikepic}}\"\n        [ngModel]=\"mybike.bikepic\" \n        required\n        #bikepic=\"ngModel\"\n        > </p>\n    <p> Title  <input type=\"text\" value=\"{{mybike.title}}\" name=\"title\" id=\"titletext\"\n        [ngModel]=\"mybike.title\" \n        required\n        #title=\"ngModel\"> </p>\n       <p> Price  <input type=\"number\" min=\"1\" value=\"{{mybike.price}}\" name=\"price\" id=\"price\"\n        [ngModel]=\"mybike.price\" \n        required\n        #price=\"ngModel\"></p>\n        <p>Description: <textarea placeholder=\"{{mybike.description}}\" name=\"description\" id=\"desc\"\n        [ngModel]=\"mybike.description\" \n        required\n        maxlength=200\n        #description=\"ngModel\"></textarea></p>\n\n\n        <label for=\"location\">Location:  </label> <input type=\"text\" value=\"{{mybike.location}}\" name=\"location\" id=\"location\"\n        [ngModel]=\"mybike.location\" \n        required\n        #location=\"ngModel\">\n        <input type=\"hidden\" value=\"mybike._id\" name=\"_id\" id=\"_id\" [ngModel]=\"mybike._id\" #_id=\"ngModel\">\n        <button>Update</button> \n       </form>\n       <button (click)=\"delBike(mybike)\">Delete</button> \n        </div>\n\n\n        </div>\n        </div>"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bike_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bike.service */ "./src/app/bike.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
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




var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(bikeService, authService, router) {
        this.bikeService = bikeService;
        this.authService = authService;
        this.router = router;
        this.mybike = {};
        this.mybikes = [];
        this.authfailure = false;
        this.sessionid = '';
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var o2 = this.authService.getSessionid();
        o2.subscribe(function (response) {
            console.log("GOT Sessionid?", response);
            if (response === "nosessionid") {
                _this.authfailure = true;
            }
            else {
                _this.authfailure = false;
                _this.sessionid = response;
            }
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
        var observer = this.bikeService.getmyBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.mybikes = response;
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    ListingsComponent.prototype.onFileChanged = function (event) {
        console.log("file?");
        this.bikepic = event.target.files[0];
        console.log(this.bikepic);
        this.bikeService.uploadPic(this.bikepic);
    };
    ListingsComponent.prototype.onCreate = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log("clicked!", form.value);
        var foo = this.bikeService.createBike(form.value);
        foo.subscribe(function (response) {
            console.log(response);
        }, function (Error) {
            console.log(Error);
        });
        //update our personal bike listing after the create
        var observer = this.bikeService.getmyBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.mybikes = response;
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    ListingsComponent.prototype.delBike = function (bike) {
        var _this = this;
        console.log("DELBIKE", bike);
        var o = this.bikeService.delBike(bike);
        o.subscribe(function (response) {
            console.log(response);
        }, function (Error) {
            console.log(Error);
        });
        //update our personal bike listing after the delete
        var observer = this.bikeService.getmyBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.mybikes = response;
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    ListingsComponent.prototype.onUpdate = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log("update BIKE", form.value);
        var o = this.bikeService.updateBike(form.value);
        o.subscribe(function (response) {
            console.log(response);
        }, function (Error) {
            console.log(Error);
        });
        //update our personal bike listing after the update
        var observer = this.bikeService.getmyBikes();
        observer.subscribe(function (response) {
            console.log("GOT BIKES?", response);
            _this.mybikes = response;
        }, function (Error) {
            console.log("GOT ERROR?", Error);
        });
    };
    ListingsComponent.prototype.logOff = function (event) {
        var _this = this;
        console.log("LOGOFF CLICKED!");
        event.preventDefault();
        var ob = this.authService.removeSessionid();
        ob.subscribe(function (response) {
            console.log('returned', response);
            _this.router.navigate(['']);
        }, function (Error) { console.log("Error", Error); });
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_bike_service__WEBPACK_IMPORTED_MODULE_1__["BikeService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ListingsComponent);
    return ListingsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\newlap\mean2\bicycle-marketplace\bicycle-marketplace\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map