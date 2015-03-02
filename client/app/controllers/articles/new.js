import Ember from 'ember';

export default Ember.Controller.extend({
  categories: ["Long Form", "Short Form", "Festivals", "Troops"],
  actions: {
    submitNewArticle: function(name, category, body) {
      var newArticle = this.store.createRecord('article', {
        name: name,
        category: category,
        lastRevision: "",
        time: new Date(),
        body: body
      });
      newArticle.save();
    }
  }
});
