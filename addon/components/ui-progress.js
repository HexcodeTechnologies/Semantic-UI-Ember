import Ember from 'ember';
import Base from '../mixins/base';

export default Ember.Component.extend(Base, {
  module: 'progress',
  classNames: ['ui', 'progress'],
  ignorableAttrs: ['progress']
});