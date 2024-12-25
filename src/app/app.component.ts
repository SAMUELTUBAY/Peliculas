import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'proyecto';
    peliculas = [
      {
        titulo: 'Piranha 3D',
        fechaLanzamiento: new Date('2024-05-03'),
        precio: 9.60,
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Piranha.jpg/220px-Piranha.jpg'
      },
      {
        titulo: 'Anaconda',
        fechaLanzamiento: new Date('2023-01-02'),
        precio: 6.70,
        poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Anaconda_logo.svg/250px-Anaconda_logo.svg.png'
      },
  ]

}