import { Component, OnInit } from '@angular/core';
import { RestService} from '../rest.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

  constructor(
    private rest: RestService
  ) { }
  data: any;
  countries: any;
  ngOnInit(): void {
    this.rest.getAll().subscribe(data => this.data = data);
    this.rest.getCountries().subscribe(countries => this.countries = countries);
  }

}
