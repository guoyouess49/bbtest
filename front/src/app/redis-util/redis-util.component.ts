import { Component } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';

@Component({
  selector: 'app-redis-util',
  templateUrl: './redis-util.component.html',
  styleUrls: ['./redis-util.component.css']
})
export class RedisUtilComponent {
  result = "";

  constructor(private apiDataService: ApiDataService){}

  public getData(): void {
    this.apiDataService.getData('/redis/get').subscribe(
      (result) => {
        this.result = result;
        console.log('Data received:', this.result);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
