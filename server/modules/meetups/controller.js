import Meetup from './model';

function getAllMeetups(req, res, next) {
  Meetup.find()
    .then(users => res.json(users))
    .catch(e => next(e));
}
function createMeetup(req, res, next) {
  const meetup = new Meetup({
    title: req.body.title,
    description: req.body.description,
  });
  meetup.save()
    .then(resMeetup => {
      res.json({
        resMeetup,
      });
    })
    .catch(e => {
      console.log(e);
      next(e);
    });
}

module.exports = { getAllMeetups, createMeetup };

// import Meetup from './model';
//
// export const createMeetup = async (req, res) => {
//   const { title, description } = req.body;
//   const newMeetup = new Meetup({ title, description });
//
//   try {
//     return res.status(201).json({ meetup: await newMeetup.save() });
//   } catch (err) {
//     return res.status(err.status).json({ error: true, message: 'Error with Meetup' });
//   }
// };
//
// export const getAllMeetups = async (req, res) => {
//   try {
//     return res.status(200).json({ meetups: await Meetup.find({} )})
//   } catch(err) {
//     return res.status(err.status).json({ error: true, message: 'Error with Meetup' })
//   }
// }
