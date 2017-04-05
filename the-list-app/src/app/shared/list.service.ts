import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { List } from './list.model';

@Injectable()
export class ListService {
  listChanged = new Subject<List[]>();

  private list: List[] = [
    new List(
      'Ser Gregor',
      'His men captured arya and other smallfolk',
      'Dead',
      'Arya'
    ),
    new List(
      'Dunsen',
      'Stole Gendrys horned helmet',
      'Alive',
      'Jaqen'
    ),
    new List(
      'Polliver',
      'Stole Needle from Arya',
      'Dead',
      'Arya'
    ),
    // new List(
    //   'Chiswyck',
    //   'Boasted of his participation in the gang rape of Layna',
    //   'Dead',
    //   'Jaqen'
    // ),
    new List(
      'Raff the Sweetling',
      'Killed Lommy Greenhands',
      'Dead',
      'Arya'
    ),
    // new List(
    //   'The Tickler',
    //   'Tortured captives during questioning',
    //   'Dead',
    //   'Arya'
    // ),
    new List(
      'The Hound',
      'Killed Mycah',
      'Dead',
      'Arya'
    ),
    new List(
      'Ser Amory',
      'Killed Yoren',
      'Dead',
      'Arya'
    ),
    new List(
      'Ser Ilyn',
      'Beheaded Eddard Stark on the orders of King Joffrey',
      'Alive',
      'Arya'
    ),
    new List(
      'Ser Meryn',
      'Killed Syrio Forel',
      'Alive',
      'Arya'
    ),
    // new List(
    //   'King Joffrey',
    //   'Ordered the execution of Eddard Stark',
    //   'Dead',
    //   'Arya'
    // ),
    new List(
      'Queen Cersei',
      'Involved in the death of Eddard Stark',
      'Alive',
      'Arya'
    ),
    // new List(
    //   'Weese',
    //   'Violently abused Arya',
    //   'Dead',
    //   'Jaqen'
    // ),
  ];

  getList() {
    return this.list.slice();
  }

  getItem(index: number) {
    return this.list[index];
  }

  addListItem(list: List) {
      this.list.push(list);
      this.listChanged.next(this.list.slice());
    }

  updateListItem(index: number, newList: List) {
    this.list[index] = newList;
    this.listChanged.next(this.list.slice());
    }
  }
