import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "src/app/components/header/header.component";
import { FooterComponent } from "src/app/components/footer/footer.component";
import { Divider } from "primeng/divider";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FundsDataServiceService } from 'src/app/services/funds-data-service.service';
import { FieldsetModule } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
import { Chip } from "primeng/chip";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ChipsModule } from 'primeng/chips';
import { TextareaModule } from 'primeng/textarea';


@Component({
  selector: 'app-user-facing-view',
  imports: [HeaderComponent, TextareaModule, FooterComponent, Divider, ChipsModule, CommonModule, InputTextModule, ButtonModule, FormsModule, FieldsetModule, Chip, DialogModule, TableModule],
  templateUrl: './user-facing-view.component.html',
  styleUrl: './user-facing-view.component.scss'
})
export class UserFacingViewComponent implements OnInit{
  value: string | undefined; // Holds the search input value
  itemData: any; // Stores fetched data for a single fund
  isDataAvailable: boolean = false; // Flag to indicate if data is available to show
  visible: boolean = false; // Controls visibility of the dialog for editing view

  constructor(private fundsDataService: FundsDataServiceService){
  }

  ngOnInit(): void {
      
  }

  onSearch(){
    // Called when user searches for a fund.
    console.log(this.value);
    if(this.value){
      this.fundsDataService.getItem(this.value).subscribe((res) => {
        this.itemData = [res.data];
      });
    }
    // Delay to allow async data fetch before marking data available on screesn
    setTimeout(() => {
      console.log(this.itemData);
      this.isDataAvailable = true;
    }, 800)
  }

  showDialog(){
    // Opens the dialog for editing a fund
    this.visible = true;
  }

  saveFund() {
    // Saves updates to the fund
    console.log("Updated Fund:", this.itemData[0]);
    this.itemData[0] = { ...this.itemData[0] }; // To trigger change detection
    console.log("Hey update to: ",this.itemData[0]);

    // Call service to update the fund on the backend
    this.fundsDataService.updateItem(this.itemData[0].name, this.itemData[0]).subscribe((res) => {
      console.log(res);
    });
    this.visible = false; // Close dialog after saving
  }

  deleteFund() {
    // Deletes a fund
    // console.log(this.itemData);
    // console.log("Delete", this.itemData[0].name);

    // Call service to delete the fund and reload page after success
    this.fundsDataService.deleteItem(this.itemData[0].name).subscribe((res) => {
      // console.log(res);
      window.location.reload(); // Reload to refresh table data
    });
    this.visible = false; // Close dialog after deletion
  }

}
