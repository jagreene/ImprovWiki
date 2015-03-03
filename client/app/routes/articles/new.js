import Ember from 'ember';

// Binds default values for name and body variables
// in the controller and template
export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set("name", "Title");
    controller.set("body", "Body");
  },

// Finds all article documents in the store or availble on the server
// and pushes it to the model attribute of the template and controller
  model: function() {
    return this.store.find('article');
  }
});
