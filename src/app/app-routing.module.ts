import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';


const routes: Routes = [
  { path: '', component: LayoutComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
@Injectable({
  providedIn: 'root',
})
export class AppRoutingModule { }
