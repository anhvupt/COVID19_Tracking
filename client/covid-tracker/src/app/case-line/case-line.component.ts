import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-case-line',
  templateUrl: './case-line.component.html',
  styleUrls: ['./case-line.component.css']
})
export class CaseLineComponent implements OnInit {

  constructor() { }
  data: any;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  ngOnInit(): void {
    this.data.getCountries().subscribe(countries => this.data = countries);

  }
  createSVG(data){
    this.svg = d3.select('figure#bar')
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append('g')
    .attr("transform", "stranslate(" + this.margin + "," + this.margin + ")")
  }

}
