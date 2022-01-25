import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-relator';
  public resultsFromSearch: any = '';
  getDataFromChild(event: any) {
    console.log('parent triggered')
    this.resultsFromSearch = event;
  }
}
