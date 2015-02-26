import DS from 'ember-data';

export default DS.Model.extend({
    name: Ds.attr('string'),
    category: Ds.attr('string'),
    lastRevision: Ds.attr('string'),
    subarticles: Ds.attr('')
});
