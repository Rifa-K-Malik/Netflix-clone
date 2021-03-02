import { Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() sliderCofig;
  @Input() movies: Movies;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
