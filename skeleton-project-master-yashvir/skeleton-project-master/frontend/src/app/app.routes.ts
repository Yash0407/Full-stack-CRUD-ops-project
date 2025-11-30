import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { UserFacingViewComponent } from './pages/user-facing-view/user-facing-view.component';
import { DataTableViewComponent } from './pages/data-table-view/data-table-view.component';


export const routes: Routes = [
    { path: 'index', component: IndexComponent}, // IndexComponent to render when path is '/index'
    { path: 'table', component: DataTableViewComponent}, // DataTableViewComponent to render when path is '/table'
    { path: 'user', component: UserFacingViewComponent}, // UserFacingViewComponent to render when path is '/user'
    { path: '**', redirectTo: 'index'}, // IndexComponent to render when path is '/' (default path ex. http://localhost:4300/)
];
