import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { CourseListComponent } from './course-list.component';
import { CourseDetailComponent } from './course-detail.component';
import { CourseFilterPipe } from './course-filter.pipe';
import { CourseDetailGuard } from './course-guard.service';
import { CourseService } from './course.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        CourseListComponent,
        CourseDetailComponent,
        CourseFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            { path: 'courses', component: CourseListComponent },
            { path: 'courses/:id',
              canActivate: [ CourseDetailGuard ],
              component: CourseDetailComponent },
        ])
    ],
    providers: [
        CourseService,
        CourseDetailGuard
    ]
})
export class CourseModule {}
