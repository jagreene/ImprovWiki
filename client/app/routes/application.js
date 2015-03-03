import Ember from 'ember';

// Finds all article documents in the store or availble on the server
// and pushes it to the model attribute of the template and controller
export default Ember.Route.extend({
  model: function() {
    return this.store.find('article');
  }
});
