import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  navigationData = [
    {
      label: "Employee Leave",
      url: "/dashboard/department-head/employee-leave",
      linkParent: "HR",
    },
    {
      label: "Users",
      url: "/dashboard/department-head/users",
      linkParent: "HR",
    },
    {
      label: "Research Applications",
      url: "/dashboard/department-head/research-applicantions",
      linkParent: "Research",
    },
    {
      label: "Requisition Applications",
      url: "/dashboard/department-head/requisition-applications-approve",
      linkParent: "Store",
    },
    {
      label: "Study Programs",
      url: "/dashboard/department-head/academic-configuration/study-programs",
      linkParent: "Academic Configuration",
    },
    {
      label: "Academic Session",
      url: "/dashboard/department-head/academic-session",
      linkParent: "Academic Configuration",
    },
    {
      label: "Courses",
      url: "/dashboard/department-head/subjects",
      linkParent: "Academic Configuration",
    },

    {
      label: "Curriculums",
      url: "/dashboard/department-head/curriculums",
      linkParent: "Academic Configuration",
    },
    {
      label: "Academic Plan/Batch",
      url: "/dashboard/department-head/academic-plans",
      linkParent: "Academic Configuration",
    },
    {
      label: "Assign Batches",
      url: "/dashboard/department-head/assigned-batches",
      linkParent: "Academic Configuration",
    },
    {
      label: "Manual Semester Start",
      url: "/dashboard/department-head/semester-offers",
      linkParent: "Academic Configuration",
    },
    {
      label: "Course Offer(Special)",
      url: "/dashboard/department-head/course-offers/list",
      linkParent: "Academic Configuration",
    },

    // {
    //   label: "Masters Admission Enrollments",
    //   url: "/dashboard/department-head/masters/admission-enrollments",
    //   linkParent: "Academic Configuration",
    // },
    // {
    //   label: "Department Teachers",
    //   url: "/dashboard/department-head/departmental-teachers",
    //   linkParent: "Academic Operations",
    // },
    // {
    //   label: "Form Fill-Up",
    //   url: "/dashboard/department-head/requisition-applications-approve",
    //   linkParent: "Academic Operations",
    //   isDropDown: true,
    //   dropDownLinks: [
    //     {
    //       label: "Start/Stop Form Fill-Up",
    //       url: "/dashboard/department-head/student-form/list",
    //       linkParent: "Academic Operations",
    //     },
    //     {
    //       label: "Form Fill-Up Approve",
    //       url: "/dashboard/department-head/student-form/approve",
    //       linkParent: "Academic Operations",
    //     },
    //     {
    //       label: "Re-Admission Approval",
    //       url: "/dashboard/department-head/student-readmission",
    //       linkParent: "Academic Operations",
    //     },
    //   ],
    // },
    // {
    //   label: "Masters Students",
    //   url: "/dashboard/department-head/masters/students",
    //   linkParent: "Academic Operations",
    // },
    // {
    //   label: "Assessment Templates",
    //   url: "/dashboard/department-head/assessments",
    //   linkParent: "Academic Operations",
    // },
    // {
    //   label: "Course Assessment",
    //   url: "/dashboard/department-head/subject-assessment",
    //   linkParent: "Academic Operations",
    // },
    // {
    //   label: "Assign Courses(Teachers)",
    //   url: "/dashboard/department-head/teacher-courses/list",
    //   linkParent: "Academic Operations",
    // },
    // {
    //   label: "Assign Advisors(Students)",
    //   url: "/dashboard/department-head/advisor/list",
    //   linkParent: "Academic Operations",
    // },

    //Dropdown
    {
      label: "Form Fill-Up",
      url: "/dashboard/department-head/requisition-applications-approve",
      linkParent: "Academic Operations",
      isDropDown: true,
      dropDownLinks: [
        {
          label: "Start/Stop Form Fill-Up",
          url: "/dashboard/department-head/student-form/list",
          linkParent: "Academic Operations",
        },
        {
          label: "Form Fill-Up Approve",
          url: "/dashboard/department-head/student-form/approve",
          linkParent: "Academic Operations",
        },
        {
          label: "Re-Admission Approval",
          url: "/dashboard/department-head/student-readmission",
          linkParent: "Academic Operations",
        },
      ],
    },
    {
      label: "Spacial Exams",
      url: "/dashboard/department-head/spacial-exam-applications",
      linkParent: "Applications",
    },
    {
      label: "Routine Slots",
      url: "/dashboard/department-head/timeTable-management/routine-slots",
      linkParent: "Routine",
    },
    {
      label: "Class Routines",
      url: "/dashboard/department-head/timeTable-management/routine",
      linkParent: "Routine",
    },
    {
      label: "Semester Wise",
      url: "/dashboard/department-head/results/semester-wise",
      linkParent: "Results",
    },
    {
      label: "Students Semester Registration",
      url: "/dashboard/department-head/student-semester-registration?tab=registered",
      linkParent: "Reports",
    },
    {
      label: "Teacher Subjects",
      url: "/dashboard/department-head/reports/teacher-subjects",
      linkParent: "Reports",
    },
    {
      label: "Semester Subjects",
      url: "/dashboard/department-head/reports/semester-subjects",
      linkParent: "Reports",
    },
    {
      label: "Taken Class Report",
      url: "/dashboard/department-head/reports/taken-class-report",
      linkParent: "Reports",
    },
    {
      label: "Non-Taken Class Report",
      url: "/dashboard/department-head/reports/non-taken-class-report",
      linkParent: "Reports",
    },
    {
      label: "Attendance Report",
      url: "/dashboard/department-head/reports/attendance-report",
      linkParent: "Reports",
    },
    {
      label: "Transport Requests",
      url: "/dashboard/department-head/transport/requests",
      linkParent: "Transport",
    },
  ];
  test: string = "Academic Operations";


}
