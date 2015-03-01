import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitNewArticle: function() {
      var newArticle = store.createRecord('article', {
        name: "test tile",
        category: "farts",
        lastRevision: "",
        subarticles: undefined,
        time: "now",
        body: "this is a test"
      });
      newArticle.save();
    }
  }
});
