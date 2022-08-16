import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./component/body/body.module').then(module => module.BodyModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./component/facility/facility.module').then(module => module.CustomerModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./component/contract/contract.module').then(module => module.CustomerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
