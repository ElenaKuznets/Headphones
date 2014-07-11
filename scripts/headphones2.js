function b_headphones (sSelector) 
{
var h = this;
h.selector 		= sSelector;
h.gallery 		= $(h.selector);
h.pictures 		= h.headphones.find(".b-picture");
//h.current 		= 0;

m.showPicture = function(){
	
	$(this).children(".b-headphones")
		.css({
			'display':'block'
			})
		.stop()
		.animate({
			'opacity': '1'
			}, 300);
			
	};
	

m.hidePicture = function(){
	
	$(this).children('.b-headphones')
		.stop()
		.animate({
			'opacity':'0'
			}
		, 300
		, function(){				//функция, которая выполняется по окончанию анимации
				$(this)
				.css({
						'display':'none'
					})
				}
			)
	}



m.menu.find(".b-picture__image")
	.mouseover(m.showPicture)   // при наведении мыши - показать подменю этого меню
	.mouseout(m.hidePicture); 
	}