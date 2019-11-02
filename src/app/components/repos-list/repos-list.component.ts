import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnChanges {
  @Input()  selectedData: any;
  @Input()  length: any;
  data: any = {};
  constructor() { }

  ngOnChanges($changes: SimpleChanges) {
    if ($changes.selectedData) {
      this.data = this.selectedData;
    }


  }

}
