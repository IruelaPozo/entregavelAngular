import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-usando-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usando-component.component.html',
  styleUrl: './usando-component.component.css'

})
export class UsandoComponentComponent {

  status: boolean = true

}
