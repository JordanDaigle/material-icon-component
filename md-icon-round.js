/**
 * Filled tone by default
 * 
 * @author jordan.daigle
 * @date 2019-07-20
 */

import {MaterialDesignIconRound} from './core/md-icon-round';

if (!customElements.get('md-icon')) {
  window.customElements.define('md-icon', MaterialDesignIconRound);
}