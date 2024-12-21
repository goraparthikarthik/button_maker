let backgroundcolor = document.getElementById('bgColorInput');
let fontcolor = document.getElementById('fontColorInput');
let fontsize = document.getElementById('fontSizeInput');
let fontweight = document.getElementById('fontWeightInput');
let Padding = document.getElementById('paddingInput');
let borderradius = document.getElementById('borderRadiusInput');
let custombutton = document.getElementById('customButton');


function applystyles() {
    custombutton.style.backgroundColor = backgroundcolor.value;
    custombutton.style.color = fontcolor.value;
    custombutton.style.fontSize = fontsize.value;
    custombutton.style.fontWeight = fontweight.value;
    custombutton.style.padding = Padding.value;
    custombutton.style.borderRadius = borderradius.value;
    
}