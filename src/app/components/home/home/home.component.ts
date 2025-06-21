import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { HeroComponent } from '../../hero/hero.component';
import { PortfolioComponent } from '../../portfolio/portfolio.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
