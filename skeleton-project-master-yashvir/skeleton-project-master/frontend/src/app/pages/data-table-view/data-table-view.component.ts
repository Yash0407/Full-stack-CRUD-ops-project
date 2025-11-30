import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { FundsDataServiceService } from 'src/app/services/funds-data-service.service';
import { Table, TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from "primeng/button";
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table-view',
  imports: [HeaderComponent, FooterComponent, ChipModule, TableModule, ButtonModule, TagModule, PaginatorModule, NgFor, CommonModule, DividerModule],
  templateUrl: './data-table-view.component.html',
  styleUrl: './data-table-view.component.scss',
  providers: [FundsDataServiceService]
})
export class DataTableViewComponent implements OnInit{
  fundsData: any; // Stores all funds data fetched from the service.
  @ViewChild('dt') dt!: Table; // Reference to the PrimeNG Table component for table operations.
  constructor(private fundsDataService: FundsDataServiceService){}

  ngOnInit(){
    // Fetch all funds data when the component initializes
    this.fundsDataService.getAllItems().subscribe((res) => {
      this.fundsData = res.data;
      console.log(this.fundsData);
    })
  }

  scrollTop() {
    // Scrolls the window to the top, used in pagination.
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }

}
