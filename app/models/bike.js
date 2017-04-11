import DS from 'ember-data';

export default DS.Model.extend({
  bike-photo-1: DS.attr(),
  bike-photo-2: DS.attr(),
  bike-photo-3: DS.attr(),
  name: DS.attr(),
  engine-type: DS.attr(),
  transmission: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  year-of-manufacture: DS.attr(),
  details: DS.attr(),
  details-2: DS.attr(),
  manufacturer: DS.attr(),
});
