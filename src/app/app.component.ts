import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsandoComponentComponent } from './components/usando-component/usando-component.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsandoComponentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'entregavel';
}
