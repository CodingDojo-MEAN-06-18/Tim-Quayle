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

/***/ "./src/app/add-player-component/add-player-component.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/add-player-component/add-player-component.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    margin-left:20px;\r\n}\r\n.errormsg{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/add-player-component/add-player-component.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/add-player-component/add-player-component.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['/players/list']\">List</a>   <a [routerLink]=\"['/players/addplayer']\">Add A Player</a> </p>\n<form (submit)=\"onSubmit($event,myForm)\" #myForm='ngForm'>\n  <p><label for=name>Player Name: </label><input  name=\"name\" id=\"name\" type=\"text\" [(ngModel)]=\"player.name\" required minlength=2  #name=\"ngModel\"></p>\n    <div class=\"errormsg\" *ngIf=\"!myForm.valid  && myForm.dirty\">*Name must be set to at least 2 characters in length.</div>\n    <p><label for=positionid>Preferred Position: </label><input  name=\"position\" id=\"positionid\" type=\"text\"\n      [(ngModel)]=\"player.position\" \n      \n      #positionid=\"ngModel\"></p>\n    <p><button [disabled]=\"!myForm.valid\">Add</button></p>\n    </form>\n"

/***/ }),

/***/ "./src/app/add-player-component/add-player-component.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/add-player-component/add-player-component.component.ts ***!
  \************************************************************************/
/*! exports provided: AddPlayerComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponentComponent", function() { return AddPlayerComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../team.service */ "./src/app/team.service.ts");
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



var AddPlayerComponentComponent = /** @class */ (function () {
    function AddPlayerComponentComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
        this.player = {
            name: '',
            position: ''
        };
    }
    AddPlayerComponentComponent.prototype.onSubmit = function (Event, Form) {
        Event.preventDefault();
        this._dataService.addPlayer(this.player);
        this._router.navigateByUrl('/players/list');
    };
    AddPlayerComponentComponent.prototype.ngOnInit = function () {
    };
    AddPlayerComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-player-component',
            template: __webpack_require__(/*! ./add-player-component.component.html */ "./src/app/add-player-component/add-player-component.component.html"),
            styles: [__webpack_require__(/*! ./add-player-component.component.css */ "./src/app/add-player-component/add-player-component.component.css")]
        }),
        __metadata("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddPlayerComponentComponent);
    return AddPlayerComponentComponent;
}());



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
/* harmony import */ var _player_list_component_player_list_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player-list-component/player-list-component.component */ "./src/app/player-list-component/player-list-component.component.ts");
/* harmony import */ var _add_player_component_add_player_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-player-component/add-player-component.component */ "./src/app/add-player-component/add-player-component.component.ts");
/* harmony import */ var _player_manage_status_component_player_manage_status_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-manage-status-component/player-manage-status-component.component */ "./src/app/player-manage-status-component/player-manage-status-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: 'players/addplayer', component: _add_player_component_add_player_component_component__WEBPACK_IMPORTED_MODULE_3__["AddPlayerComponentComponent"] },
    { path: 'status/game/:id', component: _player_manage_status_component_player_manage_status_component_component__WEBPACK_IMPORTED_MODULE_4__["PlayerManageStatusComponentComponent"] },
    { path: 'players/list', component: _player_list_component_player_list_component_component__WEBPACK_IMPORTED_MODULE_2__["PlayerListComponentComponent"] }];
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

module.exports = "a{\r\n    margin-left:20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['players/list']\">Manage Players</a>   <a [routerLink]=\"['status/game/1']\">Manage Player Status</a> \n<router-outlet ></router-outlet>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.service */ "./src/app/team.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_list_component_player_list_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-list-component/player-list-component.component */ "./src/app/player-list-component/player-list-component.component.ts");
/* harmony import */ var _player_manage_status_component_player_manage_status_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player-manage-status-component/player-manage-status-component.component */ "./src/app/player-manage-status-component/player-manage-status-component.component.ts");
/* harmony import */ var _add_player_component_add_player_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-player-component/add-player-component.component */ "./src/app/add-player-component/add-player-component.component.ts");
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
                _player_list_component_player_list_component_component__WEBPACK_IMPORTED_MODULE_7__["PlayerListComponentComponent"],
                _player_manage_status_component_player_manage_status_component_component__WEBPACK_IMPORTED_MODULE_8__["PlayerManageStatusComponentComponent"],
                _add_player_component_add_player_component_component__WEBPACK_IMPORTED_MODULE_9__["AddPlayerComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_team_service__WEBPACK_IMPORTED_MODULE_3__["TeamService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/player-list-component/player-list-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/player-list-component/player-list-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    margin-left:20px;\r\n}\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\nth, td {\r\n    padding: 5px;\r\n    text-align: left;    \r\n}"

/***/ }),

/***/ "./src/app/player-list-component/player-list-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/player-list-component/player-list-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p><a [routerLink]=\"['/players/list']\">List</a>   <a [routerLink]=\"['/players/addplayer']\">Add A Player</a> </p>\n\n  <table style=\"width:100%\">\n    <tr>\n      <th>Player Name</th>\n      <th>Preferred Position</th> \n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.name}}</td>\n      <td>{{player.position}}</td> \n      <td><button (click)=\"delPlayer(player)\">Delete</button></td>\n    </tr>\n   \n  </table>\n\n\n  \n\n"

/***/ }),

/***/ "./src/app/player-list-component/player-list-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/player-list-component/player-list-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: PlayerListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponentComponent", function() { return PlayerListComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../team.service */ "./src/app/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerListComponentComponent = /** @class */ (function () {
    function PlayerListComponentComponent(_teamService) {
        this._teamService = _teamService;
        this.players = [];
    }
    PlayerListComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamService.getPlayers()
            .subscribe(function (response) {
            _this.players = response;
            console.log("THIS IS RESPONSE", response);
        });
    };
    PlayerListComponentComponent.prototype.delPlayer = function (player) {
        var _this = this;
        if (confirm("Are you sure to delete " + player.name)) {
            console.log("HIT Delete!:", player);
            this._teamService.removePlayer(player);
            this._teamService.getPlayers()
                .subscribe(function (response) {
                _this.players = response;
                console.log("THIS IS RESPONSE", response);
            });
        }
    };
    PlayerListComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-list-component',
            template: __webpack_require__(/*! ./player-list-component.component.html */ "./src/app/player-list-component/player-list-component.component.html"),
            styles: [__webpack_require__(/*! ./player-list-component.component.css */ "./src/app/player-list-component/player-list-component.component.css")]
        }),
        __metadata("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], PlayerListComponentComponent);
    return PlayerListComponentComponent;
}());



/***/ }),

/***/ "./src/app/player-manage-status-component/player-manage-status-component.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/player-manage-status-component/player-manage-status-component.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    margin-left: 20px;\r\n}\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\nth, td {\r\n    padding: 5px;\r\n    text-align: left;    \r\n}"

/***/ }),

/***/ "./src/app/player-manage-status-component/player-manage-status-component.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/player-manage-status-component/player-manage-status-component.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <h2><button (click)=\"changeGame(1)\">Game 1</button>   <button (click)=\"changeGame(2)\">Game 2</button> <button (click)=\"changeGame(3)\">Game 3</button></h2>\n <h1> Player Status - Game {{gamenum}}</h1>\n \n  \n\n  <table style=\"width:100%\">\n    <tr>\n      <th>Player Name</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let player of players\">\n      <td>{{player.name}}</td>\n      \n      <td> <button (click)=\"changeStatus(player,'p',gamenum)\" [ngStyle]=\"{'background-color':player.status[gamenum -1] === 1 ? 'green' : 'none' }\">Playing</button>\n        <button (click)=\"changeStatus(player,'np',gamenum)\" [ngStyle]=\"{'background-color':player.status[gamenum -1] === 2 ? 'red' : 'none' }\">Not Playing</button>\n        <button (click)=\"changeStatus(player,'u',gamenum)\"  [ngStyle]=\"{'background-color':player.status[gamenum -1] === 0 ? 'yellow' : 'none' }\">Undecided</button> \n\n      </td>\n    </tr>\n   \n  </table>"

/***/ }),

/***/ "./src/app/player-manage-status-component/player-manage-status-component.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/player-manage-status-component/player-manage-status-component.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PlayerManageStatusComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerManageStatusComponentComponent", function() { return PlayerManageStatusComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../team.service */ "./src/app/team.service.ts");
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




var PlayerManageStatusComponentComponent = /** @class */ (function () {
    function PlayerManageStatusComponentComponent(_teamService, _route, _router) {
        this._teamService = _teamService;
        this._route = _route;
        this._router = _router;
        this.gamenum = 0;
        this.players = [];
    }
    PlayerManageStatusComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            //convert the paramater string to a number
            _this.gamenum = parseInt(params.get('id'), 10);
            console.log("PASSED ROUTE VALUE:", _this.gamenum);
        });
        this._teamService.getPlayers()
            .subscribe(function (response) {
            _this.players = response;
            console.log("THIS IS RESPONSE", response);
        });
    };
    PlayerManageStatusComponentComponent.prototype.changeStatus = function (player, playFlag, game) {
        console.log("PLAYFLAG IS:", playFlag);
        if (playFlag === 'p') {
            player.status[game - 1] = 1;
        }
        else if (playFlag === 'np') {
            player.status[game - 1] = 2;
        }
        else if (playFlag === 'u') {
            player.status[game - 1] = 0;
        }
        this._teamService.changeStatus(player);
        //force page refresh
        location.reload();
    };
    //I am hijacking the routing, because I need to force a page refresh after the route is made
    PlayerManageStatusComponentComponent.prototype.changeGame = function (gamenum) {
        this._router.navigate(['/status/game/' + gamenum]);
        //force page refresh
        location.reload();
    };
    PlayerManageStatusComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-manage-status-component',
            template: __webpack_require__(/*! ./player-manage-status-component.component.html */ "./src/app/player-manage-status-component/player-manage-status-component.component.html"),
            styles: [__webpack_require__(/*! ./player-manage-status-component.component.css */ "./src/app/player-manage-status-component/player-manage-status-component.component.css")]
        }),
        __metadata("design:paramtypes", [_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayerManageStatusComponentComponent);
    return PlayerManageStatusComponentComponent;
}());



/***/ }),

/***/ "./src/app/team.service.ts":
/*!*********************************!*\
  !*** ./src/app/team.service.ts ***!
  \*********************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
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


var TeamService = /** @class */ (function () {
    function TeamService(_http) {
        this._http = _http;
    }
    TeamService.prototype.addPlayer = function (player) {
        console.log("IN POST DATA SERVICE");
        this._http.post('/players/addplayer/dbadd', player).subscribe(function (data) {
            console.log("success!");
        }, function (err) {
            console.log(err);
        });
    };
    TeamService.prototype.changeStatus = function (player) {
        console.log("IN changE status service");
        this._http.post('/players/changestatus', player).subscribe(function (data) {
            console.log("success!");
        }, function (err) {
            console.log(err);
        });
    };
    TeamService.prototype.getPlayers = function () {
        console.log("GETNOTES!");
        return this._http.get('/players/list/getplayers');
    };
    TeamService.prototype.removePlayer = function (player) {
        console.log("IN REMOVE PLAYER SERVICE");
        this._http.post('/players/remove', player).subscribe(function (data) {
            console.log("success!");
        }, function (err) {
            console.log(err);
        });
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamService);
    return TeamService;
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

module.exports = __webpack_require__(/*! C:\Users\newlap\mean2\team-manager\team-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map