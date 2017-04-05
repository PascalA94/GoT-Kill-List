import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List } from '../shared/list.model';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-jaqen-hagar-list',
  templateUrl: './jaqen-hagar-list.component.html',
  styleUrls: ['./jaqen-hagar-list.component.scss', './jaqen-hagar-list.media.component.scss']
})
export class JaqenHagarListComponent implements OnInit, OnDestroy {
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
