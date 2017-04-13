import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return this.store.findAll('bike');
  //this finds all files in the database withe the name "bike" in it.
},
});
