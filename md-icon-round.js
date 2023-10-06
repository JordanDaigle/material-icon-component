import {MaterialDesignIconRound} from './core/md-icon-round';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconRound);
}