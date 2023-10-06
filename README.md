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
If you want to have fonts available direcvtly in your application instead of using the google apis url you would need to import the desired fonts once in your application
this will add in the header the inline css to make things work, and will ensure what the components doesn't try loading the font from the googleapis

```javascript
    import 'material-icon-component/fonts/filled.js';
    
    import 'material-icon-component/fonts/outlined.js';
    
    import 'material-icon-component/fonts/round.js';
    
    import 'material-icon-component/fonts/sharp.js';
    
    import 'material-icon-component/fonts/two-tone.js';
```

# Icons
you can get all icons name at : https://material.io/resources/icons/?style=baseline