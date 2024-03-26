import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GarageService } from './garage.service';
import {OnInit} from '@angular/core'
import { CommonModule } from '@angular/common';
import { Garage } from './garage';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[GarageService]
})
export class AppComponent implements OnInit{
  title = 'garageApp';
  cars! :  Garage[];
  car!: Garage;

  constructor(private garageservice : GarageService){

  }
  ngOnInit() {
    console.log('on init.......')
    this.car = {
      brand:'v5',
      model:'yaris',
      color:'GREEN',
    }
   this.getcar();
  }
  getcar(){
    this.garageservice.getCars().subscribe((datas: Garage[]) => {
      this.cars = datas;
    })
  }
  createcar(){
    console.log('je suis cliqué');

    this.garageservice.postcar(this.car).subscribe(
      {
        next: (resp:any) => {

          console.log("resp next : ",(resp))
          this.getcar();
        },

       error: (error:any) => {

      // this.messageService.add({severity: 'error', summary: 'ERROR', detail: JSON.stringify(error.error.message), life: 5000});
       console.log ("resp error : ",(error) ) },    // errorHandler
      }
    );

  }
}
