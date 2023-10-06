import {MaterialDesignIconTwoTone} from './core/md-icon-two-tone';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconTwoTone);
}