import { MaterialDesignIcon } from './md-icon';
import { TONES } from './tones';

export class MaterialDesignIconSharp extends MaterialDesignIcon
{
    initializeFont () {
        if (!MaterialDesignIconSharp.offline) {
            this.loadFonts();
        }
    }
    
    initializeTone() {
        this.tone = this.hasAttribute("round") ? TONES.ROUND : 
            this.hasAttribute("filled") ? TONES.FILLED :
            this.hasAttribute("outlined") ? TONES.OUTLINED :
            this.hasAttribute("two-tone") ? TONES.TWO_TONE :
            TONES.SHARP;
    }
}
