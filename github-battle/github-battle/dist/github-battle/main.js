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
/* harmony import */ var _battleground_battleground_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battleground/battleground.component */ "./src/app/battleground/battleground.component.ts");
/* harmony import */ var _rankings_rankings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rankings/rankings.component */ "./src/app/rankings/rankings.component.ts");
/* harmony import */ var _battleresults_battleresults_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./battleresults/battleresults.component */ "./src/app/battleresults/battleresults.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: _battleground_battleground_component__WEBPACK_IMPORTED_MODULE_2__["BattlegroundComponent"] },
    { path: 'rankings', component: _rankings_rankings_component__WEBPACK_IMPORTED_MODULE_3__["RankingsComponent"] },
    { path: 'results', component: _battleresults_battleresults_component__WEBPACK_IMPORTED_MODULE_4__["BattleresultsComponent"] },
];
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

module.exports = "<h1> GitHub Battle</h1> <a [routerLink]=\"['']\">Battle</a> |  <a [routerLink]=\"['rankings']\">Rankings</a> \n<router-outlet ></router-outlet>"

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
/* harmony import */ var _battle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./battle.service */ "./src/app/battle.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _battleground_battleground_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./battleground/battleground.component */ "./src/app/battleground/battleground.component.ts");
/* harmony import */ var _rankings_rankings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rankings/rankings.component */ "./src/app/rankings/rankings.component.ts");
/* harmony import */ var _battleresults_battleresults_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./battleresults/battleresults.component */ "./src/app/battleresults/battleresults.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _battleground_battleground_component__WEBPACK_IMPORTED_MODULE_6__["BattlegroundComponent"],
                _rankings_rankings_component__WEBPACK_IMPORTED_MODULE_7__["RankingsComponent"],
                _battleresults_battleresults_component__WEBPACK_IMPORTED_MODULE_8__["BattleresultsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_battle_service__WEBPACK_IMPORTED_MODULE_2__["BattleService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/battle.service.ts":
/*!***********************************!*\
  !*** ./src/app/battle.service.ts ***!
  \***********************************/
/*! exports provided: BattleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleService", function() { return BattleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BattleService = /** @class */ (function () {
    function BattleService(_http) {
        this._http = _http;
        this.players = {};
        this.winner = { name: '',
            score: 0,
            pic: '' };
        this.loser = { name: '',
            score: 0,
            pic: '' };
        this.githubInfo = function (username) {
            return this._http.get("https://api.github.com/users/" + username);
        };
    }
    BattleService.prototype.battle = function (user1, user2) {
        console.log(user1);
        this.winner = __assign({}, ((user1.score > user2.score) ? user1 : user2));
        this.loser = __assign({}, ((user1.score > user2.score) ? user2 : user1));
        console.log("loser", this.loser.name);
        console.log("winner", this.winner.name);
        this.players = { winner: this.winner, loser: this.loser };
        console.log("PLAYERS", this.players);
    };
    BattleService.prototype.getPlayers = function () {
        return this.players;
    };
    BattleService.prototype.addScore = function (user) {
        console.log("IN POST DATA SERVICE");
        this._http.post('/addscore', user).subscribe(function (data) {
            console.log("success!");
        }, function (err) { console.log(err); });
    };
    BattleService.prototype.getScores = function () {
        console.log("GETscores!");
        return this._http.get('/getscores');
    };
    BattleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BattleService);
    return BattleService;
}());



/***/ }),

/***/ "./src/app/battleground/battleground.component.css":
/*!*********************************************************!*\
  !*** ./src/app/battleground/battleground.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playsect{\r\n    height:200px;\r\n    width:350px;\r\n    display:inline-block;\r\n    vertical-align:top;\r\n}\r\nimg{\r\n    height:100px;\r\n    width:100px;\r\n}\r\n.batbut{\r\n    display:block;\r\n}\r\n.batbut button{\r\n   background-color:orange;\r\n    width:500px;\r\n}\r\n.err{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/battleground/battleground.component.html":
/*!**********************************************************!*\
  !*** ./src/app/battleground/battleground.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div class=\"playsect\">\n<div *ngIf=\"!sub1 || errorflag2\">\n<h1> Player 1</h1>\n<form (submit)=\"onSubmit1($event,myForm1)\" #myForm1='ngForm'>\n <div class=\"err\" *ngIf=\"xx && errorflag2\"> GitHub user name not found, please choose another</div>\n  <p><label for=\"uname1\">GitHub Username: </label><input  name=\"username1\" id=\"uname1\" type=\"text\"\n    [ngModel]=\"uname1\" \n    required\n    #username1=\"ngModel\"></p>\n   \n    <button [disabled]=\"!myForm1.valid\" >Get User</button>\n  </form>\n </div>\n  \n <div *ngIf=\"sub1 && !errorflag2\">\n    <img src={{user1pic}}>\n    <p>{{user1login}}</p>\n    \n    </div>\n</div>\n  \n\n\n<div class=\"playsect\">\n    <div *ngIf=\"!sub2|| errorflag\">\n    <h1> Player 2</h1>\n    <form (submit)=\"onSubmit2($event,myForm2)\" #myForm2='ngForm'>\n      <div class=\"err\" *ngIf=\"x && errorflag\"> GitHub user name not found, please choose another</div>\n      <p><label for=\"uname2\">GitHub Username: </label><input  name=\"username2\" id=\"uname2\" type=\"text\"\n        [ngModel]=\"uname2\" \n        required\n        #username2=\"ngModel\"></p>\n        <button [disabled]=\"!myForm2.valid\" >Get User</button>\n      </form>\n      </div>\n      <div *ngIf=\"sub2 && !errorflag\">\n          <img src={{user2pic}}>\n          <p>{{user2login}}</p>\n       \n        </div>\n      </div>\n    <div class='batbut'>\n      <button (click)=\"battleMe()\" [hidden]=\"!sub1 || !sub2 || errorflag || errorflag2\">Battle!</button>\n      </div>"

/***/ }),

/***/ "./src/app/battleground/battleground.component.ts":
/*!********************************************************!*\
  !*** ./src/app/battleground/battleground.component.ts ***!
  \********************************************************/
/*! exports provided: BattlegroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattlegroundComponent", function() { return BattlegroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle.service */ "./src/app/battle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BattlegroundComponent = /** @class */ (function () {
    function BattlegroundComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.sub1 = false;
        this.user1login = '';
        this.user1pic = '';
        this.sub2 = false;
        this.user2login = '';
        this.user2pic = '';
        this.score1 = 0;
        this.score2 = 0;
        //user=false;
        this.errorflag = false;
        this.errorflag2 = false;
        this.x = false;
        this.xx = false;
    }
    BattlegroundComponent.prototype.ngOnInit = function () {
    };
    BattlegroundComponent.prototype.onSubmit1 = function (event, form) {
        var _this = this;
        event.preventDefault();
        this.sub1 = true;
        var foo = this._dataService.githubInfo(form.value.username1);
        console.log(foo);
        this.xx = true;
        foo.subscribe(function (response) {
            _this.errorflag2 = false;
            _this.score1 = response['public_repos'] + response['followers'];
            _this.score1 = _this.score1 * 12;
            _this.user1pic = response['avatar_url'];
            _this.user1login = response['login'];
            console.log("SCORE", _this.score1);
        }, function (err) { _this.errorflag2 = true; _this.sub1 = false; });
        this.errorflag2 = false;
        form.reset();
    };
    BattlegroundComponent.prototype.onSubmit2 = function (event, form) {
        var _this = this;
        this.x = true;
        event.preventDefault();
        this.sub2 = true;
        var foo = this._dataService.githubInfo(form.value.username2);
        foo.subscribe(function (response) {
            _this.errorflag = false;
            console.log('we are here!');
            _this.score2 = response['public_repos'] + response['followers'];
            _this.score2 = _this.score2 * 12;
            _this.user2pic = response['avatar_url'];
            _this.user2login = response['login'];
            console.log("SCORE2", _this.score2);
        }, function (err) { _this.errorflag = true; console.log(err); });
        this.errorflag = false;
        form.reset();
    };
    BattlegroundComponent.prototype.battleMe = function () {
        console.log("BATTLE!!");
        var user1 = {
            name: this.user1login,
            score: this.score1,
            pic: this.user1pic
        };
        var user2 = {
            name: this.user2login,
            score: this.score2,
            pic: this.user2pic
        };
        this._dataService.battle(user1, user2);
        this._router.navigate(['/results']);
    };
    BattlegroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battleground',
            template: __webpack_require__(/*! ./battleground.component.html */ "./src/app/battleground/battleground.component.html"),
            styles: [__webpack_require__(/*! ./battleground.component.css */ "./src/app/battleground/battleground.component.css")]
        }),
        __metadata("design:paramtypes", [_battle_service__WEBPACK_IMPORTED_MODULE_1__["BattleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BattlegroundComponent);
    return BattlegroundComponent;
}());



/***/ }),

/***/ "./src/app/battleresults/battleresults.component.css":
/*!***********************************************************!*\
  !*** ./src/app/battleresults/battleresults.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height:100px;\r\n    width:100px;\r\n}\r\n.first{\r\n    color: green;\r\n\r\n}\r\n.second{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/battleresults/battleresults.component.html":
/*!************************************************************!*\
  !*** ./src/app/battleresults/battleresults.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='first'>\n  <h1>1st Place</h1>\n<h2>{{players['winner'].name}} (Score: {{players['winner'].score}})</h2>\n</div>\n<img src='{{userpic}}'>\n<div class='second'>\n<h1>2nd Place</h1>\n<h2>{{players['loser'].name}} (Score: {{players['loser'].score}})</h2>\n</div>\n<a [routerLink]=\"['']\">Reset</a>\n"

/***/ }),

/***/ "./src/app/battleresults/battleresults.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/battleresults/battleresults.component.ts ***!
  \**********************************************************/
/*! exports provided: BattleresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleresultsComponent", function() { return BattleresultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle.service */ "./src/app/battle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BattleresultsComponent = /** @class */ (function () {
    function BattleresultsComponent(_dataService) {
        this._dataService = _dataService;
        this.userpic = '';
        this.players = {};
    }
    BattleresultsComponent.prototype.ngOnInit = function () {
        this.players = this._dataService.getPlayers();
        this.userpic = this.players['winner'].pic;
        console.log("RESULTS ", this.players['loser'].name);
        //this._dataService.addScore(this.players['winner']);
        this._dataService.addScore(this.players);
    };
    BattleresultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-battleresults',
            template: __webpack_require__(/*! ./battleresults.component.html */ "./src/app/battleresults/battleresults.component.html"),
            styles: [__webpack_require__(/*! ./battleresults.component.css */ "./src/app/battleresults/battleresults.component.css")]
        }),
        __metadata("design:paramtypes", [_battle_service__WEBPACK_IMPORTED_MODULE_1__["BattleService"]])
    ], BattleresultsComponent);
    return BattleresultsComponent;
}());



/***/ }),

/***/ "./src/app/rankings/rankings.component.css":
/*!*************************************************!*\
  !*** ./src/app/rankings/rankings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height:100px;\r\n    width:100px;\r\n    display:inline-block;\r\n    vertical-align:top;\r\n}\r\n.profile{\r\n    height:150px;\r\n    width:500px;\r\n    border: 2px solid black;\r\n}\r\n.rank{\r\n    width:20px;\r\n    height:100px;\r\n    display:inline-block;\r\n}\r\n.score{\r\n    width:100px;\r\n    height:100px;\r\n    display:inline-block;\r\n    vertical-align:top;\r\n    margin-left:250px;\r\n}\r\n.leaders{\r\n    width: 700px;\r\n    height: 500px;\r\n    overflow: scroll;\r\n}"

/***/ }),

/***/ "./src/app/rankings/rankings.component.html":
/*!**************************************************!*\
  !*** ./src/app/rankings/rankings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Rankings</h1>\n<div class=\"leaders\">\n<div *ngFor=\"let player of players;let i = index\" [attr.data-index]=\"i\">\n<div class=\"profile\">\n<div class=\"rank\"> <h1>{{i+1}}</h1> </div>\n  \n<img src=\"{{player.pic}}\">\n<div class=\"score\"> <h2>  Score:{{player.score}}</h2> </div>\n  <h3> {{player.name}} </h3>  \n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/rankings/rankings.component.ts":
/*!************************************************!*\
  !*** ./src/app/rankings/rankings.component.ts ***!
  \************************************************/
/*! exports provided: RankingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingsComponent", function() { return RankingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _battle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../battle.service */ "./src/app/battle.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingsComponent = /** @class */ (function () {
    function RankingsComponent(_dataService) {
        this._dataService = _dataService;
        this.players = [];
    }
    RankingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getScores()
            .subscribe(function (response) {
            _this.players = response;
            console.log("THIS IS RESPONSE", response);
            _this.players.sort(function (a, b) {
                return b.score - a.score;
            });
        });
    };
    RankingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rankings',
            template: __webpack_require__(/*! ./rankings.component.html */ "./src/app/rankings/rankings.component.html"),
            styles: [__webpack_require__(/*! ./rankings.component.css */ "./src/app/rankings/rankings.component.css")]
        }),
        __metadata("design:paramtypes", [_battle_service__WEBPACK_IMPORTED_MODULE_1__["BattleService"]])
    ], RankingsComponent);
    return RankingsComponent;
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

module.exports = __webpack_require__(/*! C:\Users\newlap\mean2\github-battle\github-battle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map