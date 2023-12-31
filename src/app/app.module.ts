import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './angular-material/material/material.module';
import { HomeComponent } from './dashboard/home/home.component';
import { PostListaComponent } from './dashboard/post/post-lista/post-lista.component';
import { PostDetalleComponent } from './dashboard/post/post-detalle/post-detalle.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsListComponent } from './dashboard/posts-list/posts-list.component';
import { UsersListComponent } from './dashboard/users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HomeComponent,
    PostListaComponent,
    PostDetalleComponent,
    PostsListComponent,
    UsersListComponent,    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'posts', component: PostsListComponent },
          { path: 'users', component: UsersListComponent },
        ],
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}