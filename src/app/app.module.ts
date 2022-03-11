import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { HttpErrorInterceptor } from './services/interceptors/error.interceptors';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { RepoTableComponent } from './components/profile/repo-table/repo-table.component';
import { CountInfoComponent } from './components/profile/count-info/count-info.component';
import { BasicInfoComponent } from './components/profile/basic-info/basic-info.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    RepoTableComponent,
    CountInfoComponent,
    BasicInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzCardModule,
    NzAvatarModule,
    NzBadgeModule,
    NzTableModule,
    NzMessageModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
    useClass:HttpErrorInterceptor,
    multi:true   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
