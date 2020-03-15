/**
 * Filled tone by default
 * 
 * @author jordan.daigle
 * @date 2019-07-20
 */

import {MaterialDesignIcon} from './core/md-icon';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIcon);
}