# Material Design Icon Component
Simple material design icon component

# Usage
Installation:
```bash
    npm i material-icon-component
```

Javascript:
```javascript
    import 'material-icon-component/md-icon.js'
    
    //If you don't want "filled" as the default tone,
    //you can change it by importing another file.
    import 'material-icon-component/md-icon-outlined.js'
```

HTML:
```html
    <md-icon>assignment_turned_in</md-icon>

    <!-- clickable icon with ripple effect -->
    <md-icon clickable>assignment_turned_in</md-icon>

    <!-- Using round icon font -->
    <md-icon round>assignment_turned_in</md-icon>

    <!-- Using sharp icon font -->
    <md-icon sharp>assignment_turned_in</md-icon>

    <!-- Using outlined icon font -->
    <md-icon outlined>assignment_turned_in</md-icon>

    <!-- Using two tone icon font -->
    <md-icon two-tone>assignment_turned_in</md-icon>
```

OFFLINE MODE:
If you want the fonts to be available directly within your application, instead of relying on Google APIs, you'll need to import the desired fonts just once. Doing so will add the necessary inline CSS to your application's header, ensuring that the component won't attempt to load the fonts from Google APIs.

```javascript
    import 'material-icon-component/fonts/filled.js';
    
    import 'material-icon-component/fonts/outlined.js';
    
    import 'material-icon-component/fonts/round.js';
    
    import 'material-icon-component/fonts/sharp.js';
    
    import 'material-icon-component/fonts/two-tone.js';
```

# Icons
you can get all icons name at : https://material.io/resources/icons/?style=baseline