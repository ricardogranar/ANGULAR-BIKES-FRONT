import { BikesService } from './services/bikes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bikes-proyect';


constructor(
  private BikesService: BikesService
) {
  this.BikesService.getBikes().subscribe(resp => {
    console.log(resp)
  })
}
}
