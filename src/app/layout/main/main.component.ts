import { Component } from '@angular/core';
import { NavMainComponent } from "../../components/nav-main/nav-main.component";

import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NavMainComponent, RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
