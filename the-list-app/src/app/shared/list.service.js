"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var list_model_1 = require("./list.model");
var person_model_1 = require("./person.model");
var status_model_1 = require("./status.model");
var ListService = (function () {
    function ListService() {
        this.listChanged = new Subject_1.Subject();
        this.list = [
            new list_model_1.List('Ser Gregor', 'His men captured arya and other smallfolk', [
                new status_model_1.Status(true)
            ], [
                new person_model_1.Person[0]
            ]),
            new list_model_1.List('Dunsen', 'Stole Gendrys horned helmet', [
                new status_model_1.Status(false)
            ], [
                new person_model_1.Person[1]
            ]),
        ];
    }
    ListService.prototype.getList = function () {
        return this.list.slice();
    };
    ListService.prototype.getItem = function (index) {
        return this.list[index];
    };
    ListService.prototype.addListItem = function (list) {
        this.list.push(list);
        this.listChanged.next(this.list.slice());
    };
    ListService.prototype.updateListItem = function (index, newList) {
        this.list[index] = newList;
        this.listChanged.next(this.list.slice());
    };
    return ListService;
}());
ListService = __decorate([
    core_1.Injectable()
], ListService);
exports.ListService = ListService;
