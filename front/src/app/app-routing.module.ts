import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryMaxAvailableAssetComponent } from './query-max-available-asset/query-max-available-asset.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { RedisUtilComponent } from './redis-util/redis-util.component';

const routes: Routes = [
  {path: "queryBp", component: QueryMaxAvailableAssetComponent},
  {path: "account", component: AccountManagementComponent},
  {path: "redis", component: RedisUtilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
