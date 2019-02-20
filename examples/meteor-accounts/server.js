import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function () {
  return Meteor.users.find(this.userId, { fields: { foo: 1 } });
});

Meteor.methods({
  removeAccount() {
    if (!this.userId) {
      throw new Meteor.Error('not-allowed', 'You must be logged in to remove your account');
    }

    return Meteor.users.remove(this.userId);
  },
});
