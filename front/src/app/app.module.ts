import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QueryMaxAvailableAssetComponent } from './query-max-available-asset/query-max-available-asset.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { RedisUtilComponent } from './redis-util/redis-util.component';



@NgModule({
  declarations: [
    AppComponent,
    QueryMaxAvailableAssetComponent,
    AccountManagementComponent,
    RedisUtilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
