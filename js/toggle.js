(function(){ 'use strict';

/*
|
|   pane
|
*/

var Toggle = {

    btn : {

        option : document.getElementsByClassName( 'option-btn' ),
        single : document.getElementsByClassName( 'single-btn' ),
        downer : document.getElementsByClassName( 'downer-btn' ),
        siderr : document.getElementsByClassName( 'siderr-btn' ),
    },

    pane : {

        option : document.getElementById( 'option-pane' ),
        single : document.getElementById( 'single-pane' ),
        downer : document.getElementById( 'downer-pane' ),
        siderr : document.getElementById( 'siderr-pane' ),
    },
};

Toggle.listeners = function()
{
    for ( var i = 0; i < this.btn.option.length; i++ )
        _listener( this.btn.option[i], this.optionPane.bind(this) );

    for ( var i = 0; i < this.btn.single.length; i++ )
        _listener( this.btn.single[i], this.singlePane.bind(this) );

    for ( var i = 0; i < this.btn.downer.length; i++ )
        _listener( this.btn.downer[i], this.downerPane.bind(this) );

    for ( var i = 0; i < this.btn.siderr.length; i++ )
        _listener( this.btn.siderr[i], this.siderrPane.bind(this) );
};

Toggle.optionPane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    this.pane.option.classList.toggle( 'show' );

    console.info('toggle option pane');
};

Toggle.singlePane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    this.pane.single.classList.toggle( 'show' );

    console.info('toggle single pane');
};

Toggle.downerPane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    this.pane.downer.classList.toggle( 'show' );

    console.info('toggle downer pane');
};

Toggle.siderrPane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    this.pane.siderr.classList.toggle( 'show' );

    console.info('toggle siderr pane');
};

var _listener = function( el, callback )
{
    el.addEventListener( 'click', callback );
};

window.Toggle = Toggle;
})();

// EOF
