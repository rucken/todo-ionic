import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectsPageComponent } from './projects-page.component';
import { PROJECTS_PAGE_ROUTES } from './projects-page.routes';
import { ProjectsListModule } from '@rucken/todo-ionic';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProjectsListModule,
    TranslateModule.forChild(),
    RouterModule.forChild(PROJECTS_PAGE_ROUTES)
  ],
  declarations: [ProjectsPageComponent]
})
export class ProjectsPageModule { }
