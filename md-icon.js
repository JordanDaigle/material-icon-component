import {MaterialDesignIcon} from './core/md-icon';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIcon);
}