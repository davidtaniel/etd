/*
	
*/
$("#article-link-1").click(function(){
 $( "#article-1" ).addClass( "visible" );
 $( "#article-2" ).removeClass( "visible" );
 $( "#optics-3" ).removeClass( "visible" );	
 $( "#optics-4" ).removeClass( "visible" );	
});

$("#article-link-2").click(function(){
 $( "#article-1" ).removeClass( "visible" );
 $( "#article-2" ).addClass( "visible" );
 $( "#article-3" ).removeClass( "visible" );	
 $( "#article-4" ).removeClass( "visible" );
});

$("#article-link-3").click(function(){
 $( "#article-1" ).removeClass( "visible" );
 $( "#article-2" ).removeClass( "visible" );
 $( "#article-3" ).addClass( "visible" );	
 $( "#article-4" ).removeClass( "visible" );
});
$("#article-link-4").click(function(){
 $( "#article-1" ).removeClass( "visible" );
 $( "#article-2" ).removeClass( "visible" );
 $( "#article-3" ).removeClass( "visible" );	
 $( "#article-4" ).addClass( "visible" );
});
$("footer .button").click(function (){
	if ($(this).text()=="Mas información")
	{console.log("content");
	 $("footer .button").text("Menos información");
$("section p ").removeClass("invisible");
	} else {
		$("section .shift").addClass("invisible");
		$("footer .button").text("Mas información");
	}
	});


$( "article" ).animate(
    {      
	  
      opacity: '0.95',
    
	   
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

$("#banner header .button").animate(
{"margin-left": "1em"},
	2000,
	function(){
		console.log("done");
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