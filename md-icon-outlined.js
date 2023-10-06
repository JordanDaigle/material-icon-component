import {MaterialDesignIconOutlined} from './core/md-icon-outlined';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconOutlined);
}