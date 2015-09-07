var App = Ember.Application.create({
    LOG_TRANSITIONS: true
});


App.Router.map(function() {
  this.route('noivos');
  this.route('local');
  this.resource('padrinhos', function() {});
  this.resource('noivos', function() {});
  this.resource('local', function() {});
  this.resource('confirmacao', function() {});
});

App.LocalController = Ember.ObjectController.extend({
    actions: {
        reloadMap: function(){
                console.log("hey");
        }
    }
});
