import DS from 'ember-data';

export default DS.Model.extend({
  bikePhoto3: DS.attr(),
  bikePhoto2: DS.attr(),
  bikePhoto1: DS.attr(),
  name: DS.attr(),
  engineType: DS.attr(),
  transmission: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  yearOfManufacture: DS.attr(),
  details: DS.attr(),
  details2: DS.attr(),
  manufacturer: DS.attr(),
});
// this is to define the incoming data from our database
