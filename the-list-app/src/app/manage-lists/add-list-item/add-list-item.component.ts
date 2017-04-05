import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ListService} from '../../shared/list.service';

@Component({
  selector: 'app-add-list-item',
  templateUrl: './add-list-item.component.html',
  styleUrls: ['./add-list-item.component.scss', './add-list-item.media.component.scss']
})
export class AddListItemComponent implements OnInit {
  id: number;
  editMode = false;
  listForm: FormGroup;
  jaqenLives = 0;
  assignToJaqen = true;

  constructor(private route: ActivatedRoute,
              private listService: ListService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
    const l =  this.listService.getList().filter(item => item.assigned.startsWith('Jaqen'));
    for (const li in l) {
      this.jaqenLives++;
      if (this.jaqenLives === 3) {
        this.assignToJaqen =  false;
      }
      }

  }

  onSubmit() {
    if (this.editMode) {
      this.listService.updateListItem(this.id, this.listForm.value);
    } else {
      this.listService.addListItem(this.listForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let listName = '';
    let listReason = '';
    let listStatus = '';
    let listAssigned = '';

    if (this.editMode) {
      const list = this.listService.getItem(this.id);
      listName = list.name;
      listReason = list.reason;
      listStatus = list.status;
      listAssigned = list.assigned;
    }

    this.listForm = new FormGroup({
      'name': new FormControl(listName, Validators.required),
      'reason': new FormControl(listReason, Validators.required),
      'status': new FormControl(listStatus, Validators.required),
      'assigned': new FormControl(listAssigned, Validators.required)
    });
  }
}
