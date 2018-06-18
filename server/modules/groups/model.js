import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be atleast 5 characters long.'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Name must be atleast 10 characters long.'],
  },
  category: {
    type: String,
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup',
  }],
}, { timestamps: true });

/**
  Create a Meetup and add it to the Meetup array in Group
**/
GroupSchema.statics.addMeetup = async function (id, args) {
  const Meetup = mongoose.model('Meetup');
  // We add the group id to the meetup group element
  // Finally this is the author of the meetup
  const meetup = await new Meetup({ ...args, group: id });
  // We found the group with the id provide in the url
  // And we push the meetup id in the meetups element
  // $push is a method inside mongo db to add to an array
  const group = await this.findById(id);
  group.meetups.push(meetup.id);

  return {
    meetup: await meetup.save(),
    group,
  };
};

export default mongoose.model('Group', GroupSchema);
