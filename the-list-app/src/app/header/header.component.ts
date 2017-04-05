import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header.media.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavVisible: boolean;
  displayString: string;
  iconDisplay: string;

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    this.isNavVisible = !this.isNavVisible;
    this.displayString = this.isNavVisible ? 'block' : 'none';
    this.iconDisplay = this.isNavVisible ? 'glyphicon glyphicon-menu-hamburger' : 'glyphicon glyphicon-remove';
  }
}
