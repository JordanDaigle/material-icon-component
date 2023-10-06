import { MaterialDesignIcon } from './md-icon';
import { TONES } from './tones';

export class MaterialDesignIconOutlined extends MaterialDesignIcon
{
    initializeFont () {
        if (!MaterialDesignIconOutlined.offline) {
            this.loadFonts();
        }
    }
    
    initializeTone() {
        this.tone = this.hasAttribute("round") ? TONES.ROUND : 
            this.hasAttribute("sharp") ? TONES.SHARP :
            this.hasAttribute("filled") ? TONES.FILLED :
            this.hasAttribute("two-tone") ? TONES.TWO_TONE :
            TONES.OUTLINED;
    }
}