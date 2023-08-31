import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNotfoundComponent } from './pagina-notfound/pagina-notfound.component';
import { PaginaComParametrosComponent } from './pagina-com-parametros/pagina-com-parametros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes : Routes = [
  {path: "primeira-pagina", component: PrimeiraPaginaComponent},
  {path: "segunda-pagina", component: SegundaPaginaComponent},
  {path: "", redirectTo: "primeira-pagina", pathMatch: "full" },
  {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent },
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [authGuard] },
  {path: "login", component: LoginComponent},
  {path: "**", component: PaginaNotfoundComponent },

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
