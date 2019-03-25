import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, RouterModule } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { MetaLoader, MetaModule } from '@ngx-meta/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AccountModule, AuthModalModule, AuthModule, BrowserStorage, CONTENT_TYPES_CONFIG_TOKEN, DEFAULT_CONTENT_TYPES_CONFIG, DEFAULT_GROUPS_CONFIG, DEFAULT_PERMISSIONS_CONFIG, ErrorsExtractor, GROUPS_CONFIG_TOKEN, LangModule, LangService, PermissionsGuard, PERMISSIONS_CONFIG_TOKEN, RuckenCoreModule, STORAGE_CONFIG_TOKEN, TokenService, TransferHttpCacheModule, USERS_CONFIG_TOKEN } from '@rucken/core';
import { GroupsListFiltersModalModule, GroupsListFiltersModalService, IONIC_DEFAULT_USERS_CONFIG, RuckenIonicModule, UsersListFiltersModalModule, UsersListFiltersModalService } from '@rucken/ionic';
import { DEFAULT_PROJECTS_CONFIG, PROJECTS_CONFIG_TOKEN, RuckenTodoCoreModule, TASKS_CONFIG_TOKEN } from '@rucken/todo-core';
import { IONIC_DEFAULT_TASKS_CONFIG, ProjectsListFiltersModalModule, RuckenTodoIonicModule, TasksListFiltersModalModule } from '@rucken/todo-ionic';
import { NgxBindIOModule } from 'ngx-bind-io';
import { CookieService } from 'ngx-cookie-service';
import { NgxPermissionsModule } from 'ngx-permissions';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { config } from './config/config';
import { SharedModule } from './shared/shared.module';
import { initializeApp } from './utils/initialize-app';
import { metaFactory } from './utils/meta-factory';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'demo-todo' }),
    TransferHttpCacheModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    IonicModule.forRoot(),
    AuthModule.forRoot({
      apiUrl: environment.apiUrl,
      oauth: {
        providers: config.oauth
      }
    }),
    AccountModule.forRoot({
      apiUrl: environment.apiUrl
    }),
    LangModule.forRoot({
      languages: config.app.languages
    }),
    RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled'
    }),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [TranslateService]
    }),
    AuthModalModule.forRoot({
      oauth: {
        providers: config.oauth
      }
    }),
    NgxBindIOModule.forRoot(),
    UsersListFiltersModalModule.forRoot(),
    GroupsListFiltersModalModule.forRoot(),
    TasksListFiltersModalModule.forRoot(),
    ProjectsListFiltersModalModule.forRoot({
      usersRestProviderOptions: {
        apiUrl: environment.apiUrl + '/projects'
      },
      statusesRestProviderOptions: {
        apiUrl: environment.apiUrl + '/projects'
      }
    }),
    RuckenCoreModule,
    RuckenIonicModule,
    RuckenTodoCoreModule,
    RuckenTodoIonicModule
  ],
  providers: [
    {
      provide: CONTENT_TYPES_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_CONTENT_TYPES_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: PERMISSIONS_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_PERMISSIONS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: USERS_CONFIG_TOKEN,
      useValue: {
        ...IONIC_DEFAULT_USERS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: GROUPS_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_GROUPS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: PROJECTS_CONFIG_TOKEN,
      useValue: {
        ...DEFAULT_PROJECTS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    {
      provide: TASKS_CONFIG_TOKEN,
      useValue: {
        ...IONIC_DEFAULT_TASKS_CONFIG,
        apiUrl: environment.apiUrl
      }
    },
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
