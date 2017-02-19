Template.postsList.helpers({
  posts: function() {
  	var user = Meteor.user();
    return Posts.find({author: user.emails[0].address}, {sort: {submitted: -1}});
  }
});