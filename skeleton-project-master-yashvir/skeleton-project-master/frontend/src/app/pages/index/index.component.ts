
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { Fieldset } from "primeng/fieldset";

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, FooterComponent, Fieldset],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
    ngOnInit(): void {
    }
}
