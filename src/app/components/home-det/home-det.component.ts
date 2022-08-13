import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { CatImage } from 'src/app/models/catImage.interface';
import { Cat } from 'src/app/models/cat.interface';
@Component({
  selector: 'app-home-det',
  templateUrl: './home-det.component.html',
  styleUrls: ['./home-det.component.css']
})
export class HomeDetComponent implements OnInit {
  cats_img!: CatImage;
  cats! : Cat;
  temperaments : string[]=[];
  constructor(private route:ActivatedRoute, private router:ActivatedRoute,private api:HomeService ) { }

  ngOnInit(): void {
      const id: string|null = this.route.snapshot.paramMap.get('id');
      const id_image: string|null = this.route.snapshot.paramMap.get('image');
      this.api.getCatsIdImage(id_image).subscribe(data =>{
        this.cats_img = data;
        console.log(data);
      },err =>{

      });
      this.api.getCatsId(id).subscribe(data =>{
        this.cats = data;
        console.log(data);
        this.temperaments = this.cats.temperament.split(',');
      });
  }

}
