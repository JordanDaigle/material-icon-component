import { MaterialDesignIcon } from './md-icon';
import { TONES } from './tones';

export class MaterialDesignIconTwoTone extends MaterialDesignIcon
{
    initializeFont () {
        if (!MaterialDesignIconTwoTone.offline) {
            this.loadFonts();
        }
    }
    
    initializeTone() {
        this.tone = this.hasAttribute("round") ? TONES.ROUND : 
            this.hasAttribute("sharp") ? TONES.SHARP :
            this.hasAttribute("outlined") ? TONES.OUTLINED :
            this.hasAttribute("filled") ? TONES.FILLED :
            TONES.TWO_TONE;
    }
}
