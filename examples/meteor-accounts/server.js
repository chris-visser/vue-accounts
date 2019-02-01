import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function () {
  return Meteor.users.find(this.userId, { fields: { foo: 1 } });
});
