import END_POINTS from "../../../constants/endpoints";
import {
  addCourseService,
  addLessonsService,
  getLessonsByCourseService,
} from "../../services/instructor/courseService";
import { getCoursesByInstructorService } from "../../services/instructor/courseService";
import { FormValuesLesson } from "../../../types/lesson";

export const addCourse = (courseInfo: any) => {
  return addCourseService(END_POINTS.ADD_COURSE, courseInfo);
};

export const getCourseByInstructor = () => {
  return getCoursesByInstructorService(END_POINTS.GET_COURSES_BY_INSTRUCTORS);
};

export const getLessonsByCourse = (courseId: string) => {
  return getLessonsByCourseService(END_POINTS.GET_LESSONS_BY_COURSE, courseId);
};

export const addLesson = (courseId: string, lesson: FormValuesLesson) => {
  return addLessonsService(END_POINTS.ADD_LESSON, courseId, lesson);
};
