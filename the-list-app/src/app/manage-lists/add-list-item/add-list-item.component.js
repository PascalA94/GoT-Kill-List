"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddListItemComponent = (function () {
    function AddListItemComponent(route, listService, router) {
        this.route = route;
        this.listService = listService;
        this.router = router;
        this.editMode = false;
    }
    AddListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    AddListItemComponent.prototype.onSubmit = function () {
        if (this.editMode) {
            this.listService.updateListItem(this.id, this.listForm.value);
        }
        else {
            this.listService.addListItem(this.listForm.value);
        }
        this.onCancel();
    };
    AddListItemComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    AddListItemComponent.prototype.initForm = function () {
        var listName = '';
        var listReason = '';
        var listStatus = '';
        var listAssigned = new forms_1.FormArray([]);
        if (this.editMode) {
            var list = this.listService.getItem(this.id);
            listName = list.name;
            listReason = list.reason;
            listStatus = list.status;
            listAssigned = list.person;
        }
        this.listForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(listName, forms_1.Validators.required),
            'reason': new forms_1.FormControl(listReason, forms_1.Validators.required),
            'status': listStatus,
            'assigned': listAssigned
        });
    };
    return AddListItemComponent;
}());
AddListItemComponent = __decorate([
    core_1.Component({
        selector: 'app-add-list-item',
        templateUrl: './add-list-item.component.html',
        styleUrls: ['./add-list-item.component.css']
    })
], AddListItemComponent);
exports.AddListItemComponent = AddListItemComponent;
