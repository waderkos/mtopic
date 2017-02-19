if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    flagged: false,
    author: 'admin'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    flagged: false,
    author: 'admin'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    flagged: false,
    author: 'admin'
  });
  Posts.insert({
    title: 'The Meteor Book Test',
    url: 'http://themeteorbook.com',
    flagged: false,
    author: 'admin'
  });
}