$(function(){

	var hsort_flg = false;

	// var catGroup = 	{
	// 	maru01 : {
	// 		title : 'maru01',
	// 		imgName : 'maru01.png',
	// 		url : 'http://www.youtube.com/v/z_AbfPXTKms?version=3&feature=player_detailpage'
	// 	},
	// 	maru02 : {
	// 		title : 'maru02',
	// 		imgName : 'maru02.png',
	// 		url : 'http://www.youtube.com/v/VUKnAXyw3kM?version=3&feature=player_detailpage'
	// 	},
	// 	maru03 : {
	// 		title : 'maru03',
	// 		imgName : 'maru03.png',
	// 		url : 'http://www.youtube.com/v/IJJ8_qNELqw?version=3&feature=player_detailpage'
	// 	}
	// };




	//setup
	var vg = $("#grid-content").vgrid({
		easing: "easeOutQuint",
		time: 400,
		delay: 20,
		fadeIn: {
			time: 500,
			delay: 50
		}
	});


	//delete
	vg.find(".cat .delete").live('click', function(e){
		$(this).parent().fadeOut(200, function(){
			$(this).remove();
			vg.vgrefresh();
		});
		return false;
	});


	//動画表示
	$(".goods-menu").live('click', function(e){

		var _url = $(this).attr("data-url");

		var _item = $('<div class="cat">\
			<object style="height: 390px; width: 640px">\
				<param name="movie" value="' + _url +'">\
				<param name="allowFullScreen" value="true">\
				<param name="allowScriptAccess" value="always">\
				<embed src="' + _url +'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="360">\
			</object>\
			<a href="#" class="delete"><img src="/assets/close_button_black_w30.png" width="30" height="30" />\
			</a>\
		</div>')
		.fadeTo(0, 0);

		vg.prepend(_item);
		vg.vgrefresh(null, null, null, function(){
			_item.fadeTo(300, 1);
		});
		hsort_flg = true;
	});

});