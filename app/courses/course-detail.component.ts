import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICourse } from './course';

@Component({
    templateUrl: '/app/courses/course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {
    pageTitle: string = 'Course Detail';
    course: ICourse;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    onBack(): void {
        this._router.navigate(['/courses']);
    }
}
