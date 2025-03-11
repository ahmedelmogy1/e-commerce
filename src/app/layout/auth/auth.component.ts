import { Component } from '@angular/core';
import { NavAuthComponent } from "../../components/nav-auth/nav-auth.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NavAuthComponent,RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
