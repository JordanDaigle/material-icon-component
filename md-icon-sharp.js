import {MaterialDesignIconSharp} from './core/md-icon-sharp';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconSharp);
}