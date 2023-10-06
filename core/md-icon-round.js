import { MaterialDesignIcon } from './md-icon';
import { TONES } from './tones';

export class MaterialDesignIconRound extends MaterialDesignIcon
{
    initializeFont () {
        if (!MaterialDesignIconRound.offline) {
            this.loadFonts();
        }
    }
    
    initializeTone() {
        this.tone = this.hasAttribute("filled") ? TONES.FILLED : 
            this.hasAttribute("sharp") ? TONES.SHARP :
            this.hasAttribute("outlined") ? TONES.OUTLINED :
            this.hasAttribute("two-tone") ? TONES.TWO_TONE :
            TONES.ROUND;
    }
}
