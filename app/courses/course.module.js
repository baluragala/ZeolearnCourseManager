"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var course_list_component_1 = require("./course-list.component");
var course_detail_component_1 = require("./course-detail.component");
var course_filter_pipe_1 = require("./course-filter.pipe");
var course_guard_service_1 = require("./course-guard.service");
var course_service_1 = require("./course.service");
var shared_module_1 = require("../shared/shared.module");
var CourseModule = (function () {
    function CourseModule() {
    }
    return CourseModule;
}());
CourseModule = __decorate([
    core_1.NgModule({
        declarations: [
            course_list_component_1.CourseListComponent,
            course_detail_component_1.CourseDetailComponent,
            course_filter_pipe_1.CourseFilterPipe
        ],
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'courses', component: course_list_component_1.CourseListComponent },
                { path: 'courses/:id',
                    canActivate: [course_guard_service_1.CourseDetailGuard],
                    component: course_detail_component_1.CourseDetailComponent },
            ])
        ],
        providers: [
            course_service_1.CourseService,
            course_guard_service_1.CourseDetailGuard
        ]
    })
], CourseModule);
exports.CourseModule = CourseModule;
//# sourceMappingURL=course.module.js.map