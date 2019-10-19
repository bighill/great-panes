(function(){ 'use strict';

/*
|
|   init
|
*/

var init = function()
{
    Toggle.listeners();
    document.removeEventListener( "DOMContentLoaded", init );
};
document.addEventListener( 'DOMContentLoaded', init );

})();

// EOF
