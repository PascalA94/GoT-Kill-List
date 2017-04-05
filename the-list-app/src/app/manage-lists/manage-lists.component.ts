import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-manage-lists',
  templateUrl: './manage-lists.component.html',
  styleUrls: ['./manage-lists.component.scss', './manage-lists.media.component.scss' ]
})
export class ManageListsComponent implements OnInit, OnDestroy {
  list: List[];
  subscription: Subscription;

  constructor(private listService: ListService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.listService.listChanged
      .subscribe(
        (list: List[]) => {
          this.list = list;
        }
      );
    this.list = this.listService.getList();
  }

  onNewListItem() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
