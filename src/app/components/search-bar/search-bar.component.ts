import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthorizationService} from '../../authorization.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() totalCountEvent = new EventEmitter<any>();
  values = '';
  loading = false;
  apiData: any = {};
  onKey(event: any) {
     // without type info
    this.loading = true;
    this.values = event.target.value ;
    if ((event.target.value).length) {
    this._authService.postWithBody(event.target.value).subscribe((data: any) =>{
     this.apiData.totalCount = data.total_count;
     this.apiData.items = data.items;
     this.loading = false;
     this.totalCountEvent.emit({ totalCount: data.total_count, eventCount: this.values.length });
  });
} else {
    this.apiData = {};
    this.loading = false;
    this.totalCountEvent.emit({ totalCount: '', eventCount: this.values.length })
  }
}
  constructor(private _authService: AuthorizationService) {this.loading = false; }
  ngOnInit() {

  }

}
