// package metadata file for Meteor.js
var packageName = 'oopyoung:admin-lte';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '2.3.1';
var summary = 'AdminLTE - admin template. Meteor package.';
var gitLink = 'https://github.com/oopyoung/AdminLTE';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@1.2']); // Meteor versions

  api.use('jquery', where); // Dependencies
  api.use('twbs:bootstrap@3.3.5', where); // Dependencies
  api.use('fortawesome:fontawesome@4.4.0', where); // Dependencies


  //api.addAssets('index2.html', where);

  //style
  api.addFiles('dist/css/AdminLTE.css', where);
  //api.addAssets('build/less/AdminLTE.less', where);

  // skins
  //api.addFiles('dist/css/skins/_all-skins.css', where);
  api.addFiles('dist/css/skins/skin-black.css', where);
  api.addFiles('dist/css/skins/skin-black-light.css', where);
  api.addFiles('dist/css/skins/skin-blue.css', where);
  api.addFiles('dist/css/skins/skin-blue-light.css', where);
  api.addFiles('dist/css/skins/skin-green.css', where);
  api.addFiles('dist/css/skins/skin-green-light.css', where);
  api.addFiles('dist/css/skins/skin-purple.css', where);
  api.addFiles('dist/css/skins/skin-purple-light.css', where);
  api.addFiles('dist/css/skins/skin-red.css', where);
  api.addFiles('dist/css/skins/skin-red-light.css', where);
  api.addFiles('dist/css/skins/skin-yellow.css', where);
  api.addFiles('dist/css/skins/skin-yellow-light.css', where);

  //img
  api.addAssets('dist/img/avatar.png', where);
  api.addAssets('dist/img/avatar2.png', where);
  api.addAssets('dist/img/avatar3.png', where);
  api.addAssets('dist/img/avatar04.png', where);
  api.addAssets('dist/img/avatar5.png', where);
  api.addAssets('dist/img/boxed-bg.jpg', where);
  api.addAssets('dist/img/boxed-bg.png', where);
  api.addAssets('dist/img/default-50x50.gif', where);
  api.addAssets('dist/img/icons.png', where);
  api.addAssets('dist/img/photo1.png', where);
  api.addAssets('dist/img/photo2.png', where);
  api.addAssets('dist/img/user1-128x128.jpg', where);
  api.addAssets('dist/img/user2-160x160.jpg', where);
  api.addAssets('dist/img/user3-128x128.jpg', where);
  api.addAssets('dist/img/user4-128x128.jpg', where);
  api.addAssets('dist/img/user5-128x128.jpg', where);
  api.addAssets('dist/img/user6-128x128.jpg', where);
  api.addAssets('dist/img/user7-128x128.jpg', where);
  api.addAssets('dist/img/user8-128x128.jpg', where);
  api.addAssets('dist/img/credit/american-express.png', where);
  api.addAssets('dist/img/credit/cirrus.png', where);
  api.addAssets('dist/img/credit/mastercard.png', where);
  api.addAssets('dist/img/credit/mestro.png', where);
  api.addAssets('dist/img/credit/paypal.png', where);
  api.addAssets('dist/img/credit/paypal2.png', where);
  api.addAssets('dist/img/credit/visa.png', where);


  //app
  api.addFiles('dist/js/meteorApp.js', where);

  //export
  api.export("MeteorAdminLTE", where);


  //plugins

  //iCheck
  api.addFiles('plugins/iCheck/icheck.js', where);
  api.addFiles('plugins/iCheck/square/_all.css', where);
  api.addAssets('plugins/iCheck/square/square.png', where);
  api.addAssets('plugins/iCheck/square/square@2x.png', where);
  api.addAssets('plugins/iCheck/square/aero.png', where);
  api.addAssets('plugins/iCheck/square/aero@2x.png', where);
  api.addAssets('plugins/iCheck/square/blue.png', where);
  api.addAssets('plugins/iCheck/square/blue@2x.png', where);
  api.addAssets('plugins/iCheck/square/green.png', where);
  api.addAssets('plugins/iCheck/square/green@2x.png', where);
  api.addAssets('plugins/iCheck/square/grey.png', where);
  api.addAssets('plugins/iCheck/square/grey@2x.png', where);
  api.addAssets('plugins/iCheck/square/orange.png', where);
  api.addAssets('plugins/iCheck/square/orange@2x.png', where);
  api.addAssets('plugins/iCheck/square/pink.png', where);
  api.addAssets('plugins/iCheck/square/pink@2x.png', where);
  api.addAssets('plugins/iCheck/square/purple.png', where);
  api.addAssets('plugins/iCheck/square/purple@2x.png', where);
  api.addAssets('plugins/iCheck/square/red.png', where);
  api.addAssets('plugins/iCheck/square/red@2x.png', where);
  api.addAssets('plugins/iCheck/square/yellow.png', where);
  api.addAssets('plugins/iCheck/square/yellow@2x.png', where);
});
