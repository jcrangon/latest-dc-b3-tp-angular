import { Component } from '@angular/core';
import { UcfirstPipe } from '../../pipes/ucfirst.pipe';
import { HeaderComponent } from '../../components/header/header.component';
import { FranceMapComponent } from '../../components/france-map/france-map.component';
import { CommonModule } from '@angular/common';

type RegionData = {
  code: string,
  name: string,
}

@Component({
  selector: 'app-regions',
  standalone: true,
  imports: [
    UcfirstPipe,
    HeaderComponent,
    FranceMapComponent,
    CommonModule,
  ],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss'
})
export class RegionsComponent {
  public activePage!: string

  constructor() {
    this.activePage = 'regions'
  }

  getClickedRegionCode(code: object){
    console.log(code)
  }
}
