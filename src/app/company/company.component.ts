import { Component, OnInit } from '@angular/core';
import { EmpDataService } from '../services/emp-data.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  emp:any;
  itemPerPage= 10;
  currentPage= 1;
  constructor(private empData:EmpDataService) { 
    empData.employee().subscribe((dataEmp)=>{
      console.log(dataEmp);
       this.emp = dataEmp;
    });
   
  }

  ngOnInit(): void {
  }

  // getemp(){}
  changePage(page:number){
    this.currentPage = page;
  }
  get paginatedData(){
    const start=(this.currentPage - 1)* this.itemPerPage;
    const end = start + this.itemPerPage;
    return this.emp.slice(start,end);
  }
}
