import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-arya-starks-list',
  templateUrl: './arya-starks-list.component.html',
  styleUrls: ['./arya-starks-list.component.scss', './arya-starks-list.media.component.scss']
})
export class AryaStarksListComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
