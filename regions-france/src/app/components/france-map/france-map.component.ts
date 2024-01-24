import { Component, EventEmitter, Output } from '@angular/core';

type RegionData = {
  code: string,
  name: string,
}

@Component({
  selector: 'app-france-map',
  standalone: true,
  templateUrl: './france-map.component.html',
  styleUrls: ['./france-map.component.scss']
})

export class FranceMapComponent {
  @Output() sendRegionCode: EventEmitter<object> = new EventEmitter<object>()

  onClickRegion(code: string, name: string): void
  {
    console.log(code)
    console.log(name)

    const data: RegionData = {
      code: code,
      name: name
    }

    this.sendRegionCode.emit(data)

  }
}
