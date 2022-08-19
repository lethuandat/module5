import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryDetailComponent} from "./dictionary-detail/dictionary-detail.component";
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {AddWordComponent} from "./add-word/add-word.component";


const routes: Routes = [
  {
    path: '',
    component: DictionaryPageComponent
  },
  {
    path: 'create',
    component: AddWordComponent
  },
  {
    path: 'detail/:word',
    component: DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
