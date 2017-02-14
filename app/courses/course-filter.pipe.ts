import {PipeTransform, Pipe} from '@angular/core';

import {ICourse} from './course';

@Pipe({
    name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {

    transform(value: ICourse[], filterBy: string): ICourse[] {
        filterBy = filterBy ? filterBy.toLocaleUpperCase() : null;
        return filterBy ? value.filter((course: ICourse) =>
            course.courseTitle.toLocaleUpperCase().indexOf(filterBy) !== -1) : value;
    }
}
