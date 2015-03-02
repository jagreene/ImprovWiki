import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {
    controller.set("name", "Title");
    controller.set("body", "Body");
  },

  model: function() {
    return this.store.find('article');
  }
});
