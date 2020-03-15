/**
 * Filled tone by default
 * 
 * @author jordan.daigle
 * @date 2019-07-20
 */

import {MaterialDesignIconTwoTone} from './core/md-icon-two-tone';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconTwoTone);
}