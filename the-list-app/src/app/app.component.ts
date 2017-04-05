import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './app.media.component.scss']
})
export class AppComponent {
  loadedFeature = 'list';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
