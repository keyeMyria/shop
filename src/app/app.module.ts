import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes';
import { SharedCommonModule } from './shared/modules/shared-common/shared-common.module';
import { AppComponent } from './app.component';

//service
//service
import { ProjectService } from './shared/services/project.service';
import { SyncService } from './shared/services/sync.service';
import { HttpCallService } from './shared/services/http-call.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    SharedCommonModule
  ],
  declarations: [
    AppComponent,

  ],
  providers: [ProjectService, HttpCallService, SyncService],
  exports: [SharedCommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
