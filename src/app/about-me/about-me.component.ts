import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  users:any;
  constructor(private httpUser: UserDataService) {
    this.users = this.httpUser.users();
   }

  ngOnInit(): void {
    
  }
  
}
