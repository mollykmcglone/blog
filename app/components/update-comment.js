import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        name: this.get('name'),
        text: this.get('text'),
        date: new Date(this.get('date')),
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
