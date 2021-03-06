import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Album } from '../Album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums$: Observable<Album[]>;
  albums: Album[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.albums$ = this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums/');
    this.albums$.subscribe(a => {
      this.albums = a as Album[];
    });
  }

  getLink(value: string): void {
    const id = parseInt(value) - 1;
    this.router.navigate(['albums/'+value]);
  }

}
