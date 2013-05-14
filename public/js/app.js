App = Ember.Application.create();


// Models


// Routes
App.Router.map(function() {
  this.route('articles');
  this.route('photos');
  this.route('login');
});

App.LoginRoute = Ember.Route.extend({
  setupController: function(controller, context) {
    controller.reset();
  }
});


// Controllers
App.LoginController = Ember.Controller.extend({

  reset: function() {
    this.setProperties({
      username: "",
      password: "",
      errorMessage: ""
    });
  },

  login: function() {

    var self = this, data = this.getProperties('username', 'password');

    // Clear out any error messages.
    this.set('errorMessage', null);

    Ember.$.post('/auth.json', data).then(function(response) {

      self.set('errorMessage', response.message);
      if (response.success) {
        // Save the token and transition to where originally intended.
        self.set('token', response.token);
      }
    });
  }
});
