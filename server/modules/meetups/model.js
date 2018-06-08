import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, 'Must be atleast 5 characters long!'],
  },
  description: {
    type: String,
    required: true,
    minLength: [5, 'Must be atleast 5 characters long!'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true });

export default mongoose.model('Meetup', MeetupSchema);
