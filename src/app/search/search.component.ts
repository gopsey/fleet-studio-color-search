import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";
import { ColorServicesService } from "./../services/color-services.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private colorService: ColorServicesService) { }

  @Output() listOfColors = new EventEmitter<String>();
  private searchValueSubject = new Subject<any>();

  ngOnInit(): void {
    this.searchValueSubject.pipe((debounceTime(1000))).subscribe((response: any) => {
      this.performSearch(response);
    });
  }

  onSearch(event: any) {
    const searchValue = event.target.value;
    if (searchValue.length >= 3) {
      this.searchValueSubject.next(searchValue);
    } else {
      this.listOfColors.emit(null);
    }
  }

  performSearch(searchValue: any) {
    this.colorService.getRelatedColors(searchValue).subscribe((response: any) => {
      this.listOfColors.emit(response);
    }, (error: any) => {
      console.log(error);
    });
  }

}
