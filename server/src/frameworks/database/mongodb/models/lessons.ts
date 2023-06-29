import { Schema, model } from 'mongoose';

const LessonSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  contents: {
    type: Array<string>,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 0
  },
  instructorId: {
    type: Schema.Types.ObjectId,
    ref: 'instructor',
    required: true
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Lessons = model('Lesson', LessonSchema, 'lessons');
export default Lessons;