import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';
import { Movie } from './home.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private http: HttpClient) { }

    getMovie(nameMovie: string) {
        return this.http.get<Movie>(`${API}t=${nameMovie}`);
    }
}