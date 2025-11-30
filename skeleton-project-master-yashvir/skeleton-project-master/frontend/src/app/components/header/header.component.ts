import { Component, OnInit } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  imports: [MenubarModule, Menubar],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router) {}
  
  items: MenuItem[] | undefined;

  ngOnInit(){
    // Initialize menu items for navigation
    this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                command: () => this.goTo('/index') // Navigate to '/index' on click

            },
            {
                label: 'Data Table View',
                icon: 'pi pi-table',
                command: () => this.goTo('/table') // Navigate to '/table' on click
            },
            {
                label: 'User Facing View',
                icon: 'pi pi-user',
                command: () => this.goTo('/user') // Navigate to '/user' on click
            }
        ]
  }

  goTo(page: string) {
    // console.log('Navigate to:', page);    
    this.router.navigate([page]); // Navigate using Angular Router
  }
}
