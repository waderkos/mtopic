Meteor.publish('posts', function(author) {
  //  console.log(user, user.emails[0].address);
  // var $a = user.emails[0].address;
  // alert($a);
  //var arr = new Array();
  return Posts.find({flagged: false});
});