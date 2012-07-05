$(function(){

	var hsort_flg = false;

		// var _name = "maru0" + parseInt(Math.random() * 2 + 1);


	var catGroup = 	{
		maru01 : {
			title : 'maru01',
			imgName : 'maru01.png',
			url : 'http://www.youtube.com/v/z_AbfPXTKms?version=3&feature=player_detailpage'
		},
		maru02 : {
			title : 'maru02',
			imgName : 'maru02.png',
			url : 'http://www.youtube.com/v/VUKnAXyw3kM?version=3&feature=player_detailpage'
		},
		maru03 : {
			title : 'maru03',
			imgName : 'maru03.png',
			url : 'http://www.youtube.com/v/IJJ8_qNELqw?version=3&feature=player_detailpage'
		}
	};


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

	// //add item
	// $("#additem").click(function(e){

	// 	// var _sec = parseInt(Math.random() * 5 + 1);

	// 	var _name = "maru0" + parseInt(Math.random() * 2 + 1);

	// 	// var_item = $('<div>')
	// 	// .addClass('cat')
	// 	// .appendTo('#grid-content')

	// 	// $('div.template.catItem').children().clone()
	// 	// .prepend('<h3>' + 'maru0' + _sec +'</h3>')
	// 	// .append('<a href="#" class="goods-menu"><img src="/assets/maru0" + _sec + ".png"></a>')
	// 	// .appendTo(_item)
	// 	// .fadeTo(0, 0);


	// 	var _item = $('<div class="cat">\<h3>' + catGroup[_name].title + '</h3>\
	// 		<a href="#" class="goods-menu">\
	// 		<img src="/assets/' + catGroup[_name].imgName + '">\</a>\
	// 		<a href="#" class="delete">\<img src="/assets/close_button_black_w30.png" width="30" height="30" />\</a>\
	// 		</div>')
	// 		.fadeTo(0, 0);

	// 	vg.prepend(_item);
	// 	vg.vgrefresh(null, null, null, function(){
	// 		_item.fadeTo(300, 1);
	// 	});
	// 	hsort_flg = true;
	// });

	//動画表示
	$(".goods-menu").live('click', function(e){

		var _name = $(this).attr("data");

		var _item = $('<div class="cat">\
			<object style="height: 390px; width: 640px">\
				<param name="movie" value="' +catGroup[_name].url +'">\
				<param name="allowFullScreen" value="true">\
				<param name="allowScriptAccess" value="always">\
				<embed src="' +catGroup[_name].url +'" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="360">\
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




	//delete
	vg.find(".cat .delete").live('click', function(e){
		$(this).parent().fadeOut(200, function(){
			$(this).remove();
			vg.vgrefresh();
		});
		return false;
	});

	//sort
	$("#hsort").click(function(e){
		hsort_flg = !hsort_flg;
		$("#grid-content").vgsort(function(a, b){
			var _a = $(a).find('h3').text();
			var _b = $(b).find('h3').text();
			var _c = hsort_flg ? 1 : -1 ;
			return (_a > _b) ? _c * -1 : _c ;
		}, "easeInOutExpo", 300, 0);
		return false;
	});
	$("#rsort").click(function(e){
		$("#grid-content").vgsort(function(a, b){
			return Math.random() > 0.5 ? 1 : -1 ;
		}, "easeInOutExpo", 300, 20);
		hsort_flg = true;
		return false;
	});



});