import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import * as t from 'topojson';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let w = 690;
    let h = 450;

    let projection = d3.geoMercator()
      .center([0, 15])
      .scale(w/(2 * Math.PI))
      .translate([w / 2, h / 2])

    let svg = d3.select("#map-holder").append('svg')
      .attr('width', w)
      .attr('height', h)

    let path = d3.geoPath().projection(projection);

    let g = svg.append('g');
    g.attr('class', 'map');

    d3.json("https://raw.githubusercontent.com/cszang/dendrobox/master/data/world-110m2.json")
      .then((topology: t.topology) => {
        g.selectAll('path')
          .data(t.feature(topology, topology.objects.countries).features)
          .enter()
          .append('path')
          .attr('d', path);
      });
  }

}
