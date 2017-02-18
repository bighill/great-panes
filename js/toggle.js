(function(){ 'use strict';

/*
|
|   pane
|
*/

var Toggle = {

    bttn : {

        option : document.getElementsByClassName( 'option' ),
        single : document.getElementsByClassName( 'single' ),
        downer : document.getElementsByClassName( 'downer' ),
        siderr : document.getElementsByClassName( 'siderr' ),
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
    for ( var i = 0; i < this.bttn.option.length; i++ )
        _listener( this.bttn.option[i], this.optionPane.bind(this) );

    for ( var i = 0; i < this.bttn.single.length; i++ )
        _listener( this.bttn.single[i], this.singlePane.bind(this) );

    for ( var i = 0; i < this.bttn.downer.length; i++ )
        _listener( this.bttn.downer[i], this.downerPane.bind(this) );

    for ( var i = 0; i < this.bttn.siderr.length; i++ )
        _listener( this.bttn.siderr[i], this.siderrPane.bind(this) );
};

Toggle.optionPane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    for ( var i = 0; i < this.bttn.option.length; i++ )
        this.bttn.option[i].classList.toggle( 'show' );

    console.info('toggle option pane');
};

Toggle.singlePane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    for ( var i = 0; i < this.bttn.single.length; i++ )
        this.bttn.single[i].classList.toggle( 'show' );

    console.info('toggle single pane');
};

Toggle.downerPane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    for ( var i = 0; i < this.bttn.downer.length; i++ )
        this.bttn.downer[i].classList.toggle( 'show' );

    console.info('toggle downer pane');
};

Toggle.siderrPane = function( ev )
{
    if ( ev )
        ev.preventDefault();

    for ( var i = 0; i < this.bttn.siderr.length; i++ )
        this.bttn.siderr[i].classList.toggle( 'show' );

    console.info('toggle siderr pane');
};

var _listener = function( el, callback )
{
    el.addEventListener( 'click', callback );
};

window.Toggle = Toggle;
})();

// EOF
