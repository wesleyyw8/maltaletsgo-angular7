import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerCanvasComponent } from './server-canvas/server-canvas.component';
import { MenuComponent } from './menu/menu.component';
import { ServerComponent } from './server-canvas/server/server.component';
import { AppItemComponent } from './menu/app-item/app-item.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer as menuReducer } from './menu/state/menu.reducer';
import { reducer as serversReducer } from './server-canvas/state/server-canvas.reducer';
import {TimeAgoPipe} from 'time-ago-pipe';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    TimeAgoPipe,
    AppComponent,
    ServerCanvasComponent,
    MenuComponent,
    ServerComponent,
    AppItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      apps: menuReducer,
      servers: serversReducer
    }),
    StoreDevtoolsModule.instrument({
      name: 'appwes Devtools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
