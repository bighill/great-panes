(function(){ 'use strict';

/*
|
|   init
|
*/

var init = function()
{
    console.group( 'init()' );

    Toggle.listeners();
    console.log( 'add listeners' );

    document.removeEventListener( "DOMContentLoaded", init );

    console.groupEnd();
};
document.addEventListener( 'DOMContentLoaded', init );

})();

// EOF
