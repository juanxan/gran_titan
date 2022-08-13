import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Cat } from 'src/app/models/cat.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cats : Cat[]=[];
  
  hastaPag: number=6;
  page!: number;
  constructor(private api:HomeService) { }

  ngOnInit(): void {
    this.api.getCats().subscribe(data =>{
      this.cats = data;
      console.log(this.cats);
    });

  }

}
