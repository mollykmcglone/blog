import Ember from 'ember';

export default Ember.Component.extend({
  addNewTag: false,
  actions: {
    tagFormShow() {
      this.set('addNewTag', true);
    },

    saveTag1() {
      var params = {
        text: this.get('text'),
        post: this.get('post'),
      };
      this.set('addNewTag', false);
      this.sendAction('saveTag2', params);
    }
  }
});
