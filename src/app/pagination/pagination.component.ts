import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems:any;
  @Input() currentPage:any;
  @Input() itemPerPage:any;
  @Output() onClick:EventEmitter<number>= new EventEmitter();
  totalPages = 0;
  pages:number[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.totalItems){
      this.totalPages =  Math.ceil(this.totalItems / this.itemPerPage);
      this.pages = Array.from({length: this.totalPages},(_, i)=>{ return i+1});
      console.log(this.totalPages);
      console.log(this.totalItems);
      console.log(this.pages);
    }
  }
  pageClicked(page:number){
    if(page<=this.totalPages ) {this.onClick.emit(page);}
    
  }
}
