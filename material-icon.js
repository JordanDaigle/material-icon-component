/**
 * Simple webcomponent
 * allowing the use of
 * the material design
 * icons font from google
 * 
 * @author jordan.daigle
 * @date 2019-07-20
 */
import { LitElement, html, css } from 'lit-element/lit-element';
import '@polymer/paper-ripple/paper-ripple';


class MaterialIcon extends LitElement
{
    
    /**
     * Binded
     * properties
     */
    static get properties() {
        return {
            icon: String,
            tone: String
        };
    }
    
    
    
    /**
     * Constructor
     */
    constructor() {
        super();
        this.icon = this.getAttribute("icon");
        this.initialiseFont();
    }
    
    
    
    /**
     * Initialising 
     * Font
     */
    initialiseFont () {
        let url = "https://fonts.googleapis.com/css?family=Material+Icons";
        this.tone = null;
        if (this.hasAttribute("round")) {
            url = "https://fonts.googleapis.com/css?family=Material+Icons+Round";
            this.tone = "round";
        } else if (this.hasAttribute("sharp")) {
            url = "https://fonts.googleapis.com/css?family=Material+Icons+Sharp";
            this.tone = "sharp";
        } else if (this.hasAttribute("outlined")) {
            url = "https://fonts.googleapis.com/css?family=Material+Icons+Outlined";
            this.tone = "outlined";
        } else if (this.hasAttribute("two-tone")) {
            url = "https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone";
            this.tone = "two-tone";
        }
        
        /**
         * font-face are not loading inside shadow-root 
         * so we append it to the html <head> element
         */
        if (!MaterialIcon.fontInitialised || !MaterialIcon.fontInitialised[url]) {
            MaterialIcon.fontInitialised = MaterialIcon.fontInitialised || {};
            MaterialIcon.fontInitialised[url] = 1;
            document.querySelector("head").insertAdjacentHTML('beforeend', `
                <link rel="stylesheet" type="text/css" href="${url}" />
            `);
        }
    }
    
    
    
    /**
     * Render
     */
    render() {
        return html`
            <div class='icon-button'>
                <i class='material-icons${this.tone?'-'+this.tone:''}'>${(this.icon || "").replace('-', '_')}</i>
                <paper-ripple class="circle" recenters></paper-ripple>
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
                cursor:pointer;
                width:1em;
                height:1em;
            }
            
            .material-icons,
            .material-icons-outlined,
            .material-icons-sharp,
            .material-icons-round,
            .material-icons-two-tone {
                font-weight: normal;
                font-style: normal;
                font-size: 1em;
                line-height: 1;
                letter-spacing: normal;
                text-transform: none;
                display: inline-block;
                white-space: nowrap;
                word-wrap: normal;
                direction: ltr;
                -webkit-font-feature-settings: 'liga';
                -webkit-font-smoothing: antialiased;
            }
            
            .material-icons {
                font-family: 'Material Icons';
            }
            
            .material-icons-outlined {
                font-family: 'Material Icons Outlined';
            }
            
            .material-icons-sharp {
                font-family: 'Material Icons Sharp';
            }
            
            .material-icons-round {
                font-family: 'Material Icons Round';
            }
            
            .material-icons-two-tone {
                font-family: 'Material Icons Two Tone';
            }
            
            .icon-button {
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


window.customElements.define('material-icon', MaterialIcon);