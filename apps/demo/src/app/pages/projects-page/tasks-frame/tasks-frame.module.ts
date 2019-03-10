import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { TasksFrameComponent } from './tasks-frame.component';
import { TASKS_FRAME_ROUTES } from './tasks-frame.routes';
import { TasksListModule } from '@rucken/todo-ionic';
import { PipesModule } from '@rucken/core';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    TasksListModule,
    TranslateModule.forChild(),
    RouterModule.forChild(TASKS_FRAME_ROUTES)
  ],
  declarations: [TasksFrameComponent]
})
export class TasksFrameModule { }
