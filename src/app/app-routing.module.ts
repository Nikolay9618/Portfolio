import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
