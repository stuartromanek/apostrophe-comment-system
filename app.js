var apos = require('apostrophe')({
  shortName: 'comment-system',
  title: 'comment-system',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    'comments': {},
    'comments-widgets': {}
  }
});
