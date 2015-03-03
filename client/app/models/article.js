import DS from 'ember-data';
// Creates the article model with the attributes name, category, lastRevision, time and body
export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  lastRevision: DS.attr('string'),
  time: DS.attr('date'),
  body: DS.attr('string')
});
