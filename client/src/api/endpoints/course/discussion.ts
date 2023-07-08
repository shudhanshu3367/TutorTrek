import END_POINTS from "../../../constants/endpoints";
import { addDiscussionService,getDiscussionsByLessonService } from "../../services/course/discussionService";

export const addDiscussion = (lessonId:string,message:string)=>{
    return addDiscussionService(END_POINTS.ADD_DISCUSSION,lessonId,message)

}

export const getDiscussionsByLesson = (lessonId:string)=>{
    return getDiscussionsByLessonService(END_POINTS.GET_DISCUSSIONS_BY_LESSON,lessonId)
}