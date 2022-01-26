import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-related-colors',
  templateUrl: './related-colors.component.html',
  styleUrls: ['./related-colors.component.scss']
})
export class RelatedColorsComponent implements OnInit, OnChanges {

  constructor() { }
  
  @Input() inputResultsFromRoot: any;
  public colorsData: any = [];
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputResultsFromRoot.currentValue !== "" && changes.inputResultsFromRoot.currentValue !== null) {
      this.colorsData = changes.inputResultsFromRoot.currentValue.colors;
    } else {
      this.colorsData = [];
    }
  }


}
