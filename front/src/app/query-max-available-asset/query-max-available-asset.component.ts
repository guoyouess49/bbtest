import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/api-data.service';

@Component({
  selector: 'app-query-max-available-asset',
  templateUrl: './query-max-available-asset.component.html',
  styleUrls: ['./query-max-available-asset.component.css']
})
export class QueryMaxAvailableAssetComponent implements OnInit{

  items: any[] = [];

  constructor(private apiDataService: ApiDataService) {}

  ngOnInit() {
    this.getData();
  }

  public getData(): void {
    this.apiDataService.getData('/queryBp').subscribe(
      (result) => {
        this.items = result;
        console.log('Data received:', this.items);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
