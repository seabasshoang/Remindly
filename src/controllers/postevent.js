const postNewEvent = require('../model/queries/postNewEvent');
const postContact = require('../model/queries/postContact');

const postEvent = (req, res) => {
    const { event_name, event_date, contact_name, phone, group_name, } = req.body;
    console.log(req.body);
    postNewEvent(event_name, event_date, contact_name);
    postContact(contact_name, phone, group_name)
        .then(res.redirect('/'))
        .catch(err => console.log(err))
}

module.exports = postEvent;