Accounts.registerLoginHandler(function(loginRequest) {
  // if(!loginRequest.admin) {
  //   return undefined;
  // }
  //
  // if(loginRequest.password != '123456') {
  //   return null;
  // }
  //
  // var userId = null;
  // var user = Meteor.users.findOne({username: 'admin@ukr.net'});
  // if(!user) {
  //   userId = Meteor.users.insert({username: 'admin@ukr.net'});
  // } else {
  //   userId = user._id;
  // }
  //
  // //creating the token and adding to the user
  // var stampedToken = Accounts._generateStampedLoginToken();
  // //hashing is something added with Meteor 0.7.x,
  // //you don't need to do hashing in previous versions
  // var hashStampedToken = Accounts._hashStampedToken(stampedToken);
  //
  // Meteor.users.update(userId,
  //   {$push: {'services.resume.loginTokens': hashStampedToken}}
  // );
  //
  // //sending token along with the userId
  // return {
  //   id: userId,
  //   token: stampedToken.token
  // }
})