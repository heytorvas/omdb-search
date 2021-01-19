import { Component, OnInit } from '@angular/core';
import { Movie } from './home.model';
import { MovieService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedMovie: any;
  nameMovie: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  btnClicked(): void {
    this.movieService.getMovie(this.nameMovie).subscribe((result) => {
      this.selectedMovie = result;
    })
  }

  btnClear(): void {
    this.nameMovie = '';
    this.selectedMovie = '';
  }

}
