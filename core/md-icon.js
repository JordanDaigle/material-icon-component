/**
 * Simple webcomponent
 * allowing the use of
 * the material design
 * icons font from google
 * 
 * @version 1.1
 * @author jordan.daigle
 * @date 2019-07-20
 */
import { LitElement, html, css } from 'lit-element/lit-element';
import '@polymer/paper-ripple/paper-ripple';


export class MaterialDesignIcon extends LitElement
{
    
    /**
     * Binded
     * properties
     */
    static get properties() {
        return {
            icon: String,
            tone: String,
            isClickable: Boolean
        };
    }
    
    
    
    /**
     * Constructor
     */
    constructor() {
        super();
        this.baseFontUrl = "https://fonts.googleapis.com/css?family=Material+Icons";
        this.initializeTone();
        this.initializeFont();
    }
    
    
    /**
     * Html element
     * connected callback
     */
    connectedCallback() {
        if (this.innerHTML.trim()) {
            this.initialiseIcon();
        } else {
            super.connectedCallback();
            let instance = this;
            let childrenConnectedCallback = () => {
                if (instance.innerHTML.trim()) {
                    instance.initialiseIcon();
                }
            }
    
            let observer = new MutationObserver(childrenConnectedCallback);
            let config = { attributes: false, childList: true, subtree: true };
            observer.observe(instance, config);
    
            setTimeout(() => {
                observer.disconnect();
            }, 0);
        }
    }
    
    
    /**
     * Initialising 
     * icon
     */
    initialiseIcon() {
        this.isClickable = this.hasAttribute("clickable");
        this.icon = this.innerHTML;
        this.innerHTML = '';
        this.update(); //for some reason requestUpdate() doesn't always work but update() does the trick...
    }
    
    
    /**
     * Initializing 
     * tone
     */
    initializeTone() {
        this.tone = "filled";
        if (this.hasAttribute("round")) {
            this.tone = "round";
        } else if (this.hasAttribute("sharp")) {
            this.tone = "sharp";
        } else if (this.hasAttribute("outlined")) {
            this.tone = "outlined";
        } else if (this.hasAttribute("two-tone")) {
            this.tone = "two-tone";
        }
    }
    
    
    /**
     * Initialising 
     * Font
     */
    initializeFont () {
        //font-face are not loading inside shadow-root 
        //so we append it to the html <head> element
        let url = this.getFontURL(this.tone);
        if (!MaterialDesignIcon.fontInitialised || !MaterialDesignIcon.fontInitialised[url]) {
            MaterialDesignIcon.fontInitialised = MaterialDesignIcon.fontInitialised || {};
            MaterialDesignIcon.fontInitialised[url] = 1;
            document.querySelector("head").insertAdjacentHTML('beforeend', `
                <link rel="stylesheet" type="text/css" href="${this.getFontURL(this.tone)}" />
            `);
        }
    }
    
    
    /**
     * Build font
     * url based on
     * initialized tone
     */
    getFontURL(tone) {
        let url = this.baseFontUrl;
        if (tone != "filled") {
            url = url+"+"+tone.split(/[-]/).map((i)=>i.charAt(0).toUpperCase()+i.substring(1)).join("+");
        }
        return url;
    }
    
    
    
    /**
     * Render
     */
    render() {
        return html`
            <div class='icon'>
                <i class='${this.isClickable?'c':''} m-i${this.tone&&this.tone!="filled"?'-'+this.tone:''}'>${(this.icon || "").trim().replace(/([-]|\s)/g, '_').toLowerCase()}</i>
                ${this.isClickable?html`<paper-ripple class="circle" recenters></paper-ripple>`:``}
            </div>
        `;
    }
    
    
    
    /**
     * Styles
     */
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
