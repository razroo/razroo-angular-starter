import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('@razroo-angular-starter/home').then((m) => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}