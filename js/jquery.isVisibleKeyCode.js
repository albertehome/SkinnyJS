﻿/// <reference path="../jquery-current.js" />

/**
* Returns true if the key pressed in a keyboard event is a visible character filters out keys such as function and shift. 
*/
jQuery.Event.prototype.isVisibleKeyCode = function () 
{
    
    if (typeof(this.keyCode) == "undefined")
    {
        return false;
    }

    //F keys
    if (this.keyCode >= 112 && this.keyCode <= 123) 
    {
        return false;
    }

    if (this.keyCode >= 33 && this.keyCode <= 40) 
    {
        return false;
    }

    if (this.keyCode >= 14 && this.keyCode <= 31) 
    {
        return false;
    }

    switch (this.keyCode) 
    {
        case 9: //Tab
        case 45:
        case 91:
        case 145:
            return false;
        default:
            return true;
    }
    
    return true;
};