import { Component, OnInit } from '@angular/core';

import { ICourse } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: '/app/courses/course-list.component.html',
    styleUrls: ['/app/courses/course-list.component.css']
})
export class CourseListComponent implements OnInit {
    pageTitle: string = 'Courses';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    courses: ICourse[];

    constructor(private _courseService: CourseService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._courseService.getCourses()
                .subscribe(courses => this.courses = courses,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Courses: ' + message;
    }
}
