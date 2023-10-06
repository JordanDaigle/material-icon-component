import { LitElement, html, css } from "lit";

import { TONES } from "./tones";

import '@polymer/paper-ripple/paper-ripple';

export class MaterialDesignIcon extends LitElement
{
    static get properties() {
        return {
            icon: String,
            tone: String,
            isClickable: Boolean
        };
    }
    
    constructor() {
        super();
        this.baseFontUrl = "https://fonts.googleapis.com/css?family=Material+Icons";
    }
    
    connectedCallback() {
        super.connectedCallback();
        if (!this.tone) {
            this.initializeTone();
            this.initializeFont();
            this.isClickable = this.hasAttribute("clickable");
        }
    }
    
    initializeTone() {
        this.tone = this.hasAttribute("round") ? TONES.ROUND : 
            this.hasAttribute("sharp") ? TONES.SHARP :
            this.hasAttribute("outlined") ? TONES.OUTLINED :
            this.hasAttribute("two-tone") ? TONES.TWO_TONE :
            TONES.FILLED;
    }
    
    initializeFont () {
        if (!MaterialDesignIcon.offline) {
            this.loadFonts();
        }
    }
    
    loadFonts() {
        //font-face are not loading inside shadow-root 
        //so we append it to the html <head> element
        let url = this.getFontURL(this.tone);
        if (!MaterialDesignIcon.fontInitialised || !MaterialDesignIcon.fontInitialised[url]) {
            MaterialDesignIcon.fontInitialised = MaterialDesignIcon.fontInitialised || {};
            MaterialDesignIcon.fontInitialised[url] = 1;
            document.head.insertAdjacentHTML('beforeend', `
                <link rel="stylesheet" type="text/css" href="${this.getFontURL(this.tone)}" />
            `);
        }
    }
    
    getFontURL(tone) {
        let url = this.baseFontUrl;
        if (tone != "filled") {
            url = url+"+"+tone.split(/[-]/).map((i)=>i.charAt(0).toUpperCase()+i.substring(1)).join("+");
        }
        console.log(url);
        return url;
    }
    
    render() {
        return html`
            <div class='icon'>
                <i class='${this.isClickable?'c':''} m-i${this.tone&&this.tone!="filled"?'-'+this.tone:''}'><slot></slot></i>
                ${this.isClickable?html`<paper-ripple class="circle" recenters></paper-ripple>`:``}
            </div>
        `;
    }
    
    static get styles() {
        return css`
            :host {
                display:inline-block;
                vertical-align:middle;
                width:1em;
                height:1em;
                user-select:none;
            }
            
            .m-i,
            .m-i-outlined,
            .m-i-sharp,
            .m-i-round,
            .m-i-two-tone {
                font-weight: normal;
                font-style: normal;
                font-size: 1em;
                line-height: 1;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                width:100%;
                height:100%;
                white-space: nowrap;
                word-wrap: normal;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                -webkit-font-smoothing: antialiased;
            }
            
            .m-i { font-family: 'Material Icons';}
            .m-i-outlined { font-family: 'Material Icons Outlined'; }
            .m-i-sharp { font-family: 'Material Icons Sharp'; }
            .m-i-round { font-family: 'Material Icons Round'; }
            .m-i-two-tone { font-family: 'Material Icons Two Tone'; }
            
            .c { cursor:pointer; }
            
            .icon {
                position:relative;
                width:1em;
                height:1em;
                display:flex;
                align-items:center;
                justify-content:center;
            }
            
            paper-ripple {
                width: 2em;
                height: 2em;
                margin-top: -0.5em;
                margin-left: -0.5em;
            }
        `;
    }
}
