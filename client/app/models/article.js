import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  lastRevision: DS.attr('string'),
  time: DS.attr('date'),
  body: DS.attr('string')
});
