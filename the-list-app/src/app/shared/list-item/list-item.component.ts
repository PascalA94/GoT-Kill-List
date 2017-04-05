import {Component, OnInit, Input, ElementRef} from '@angular/core';

import { List } from '../list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss', './list-item.media.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() index: number;

  ngOnInit() {
  }

  onItemClick(list: List) {
    if (list.status === 'Alive') {
      list.status = 'Dead';
    }
  }
}
