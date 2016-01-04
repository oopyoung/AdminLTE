
Tips
------------
This project is based on [yp2:AdminLTE](https://github.com/yp2/AdminLTE),I have been modified the [/dist/css/AdminLTE.css](https://github.com/oopyoung/AdminLTE/blob/master/dist/css/AdminLTE.css) and [/dist/css/AdminLTE.min.css](https://github.com/oopyoung/AdminLTE/blob/master/dist/css/AdminLTE.min.css).Because China can not access [Google Fonts](https://fonts.googleapis.com)


Meteor usage
------------

Installation
```
meteor add meteoryoung:admin-lte
```

To activate AdminLTE app on template put this code in Template.foo.onRendered:
```js
Template.foo.onRendered(function () {

    var self = this;
    if (self.view.isRendered) {
        var body = $('body');
            body.removeClass();
            body.addClass("skin-blue sidebar-mini");

        $(function () {
            MeteorAdminLTE.run()
        });
    }
});
