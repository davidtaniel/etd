/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
$("#optics-link1").click(function(){
 $( "#optics1" ).addClass( "visible" );
 $( "#optics2" ).removeClass( "visible" );
 $( "#optics3" ).removeClass( "visible" );	
 $( "#optics4" ).removeClass( "visible" );	
});

$("#optics-link2").click(function(){
 $( "#optics1" ).removeClass( "visible" );
 $( "#optics2" ).addClass( "visible" );
 $( "#optics3" ).removeClass( "visible" );	
 $( "#optics4" ).removeClass( "visible" );
});

$("#optics-link3").click(function(){
 $( "#optics1" ).removeClass( "visible" );
 $( "#optics2" ).removeClass( "visible" );
 $( "#optics3" ).addClass( "visible" );	
 $( "#optics4" ).removeClass( "visible" );
});
$("#optics-link4").click(function(){
 $( "#optics1" ).removeClass( "visible" );
 $( "#optics2" ).removeClass( "visible" );
 $( "#optics3" ).removeClass( "visible" );	
 $( "#optics4" ).addClass( "visible" );
});
$( "article" ).animate(
    {      
        "opacity": 0.95,
		"background":"transparent",	
    },
    2000,
    function() {
        console.log( "done!" );
    }
);
	$( ".logo-box" ).animate(
    {     
        "opacity": 0.95,
		"background":"transparent",	
    },
    2000,
    function() {
        console.log( "done!" );
    }
);

(function($) {
	

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);