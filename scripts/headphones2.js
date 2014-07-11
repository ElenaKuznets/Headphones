function b_headphones(sSelector) 
{
var h = this;
h.selector 		= sSelector;
h.gallery 		= $(h.selector);
h.pictures 		= h.headphones.find(".b-picture");
//h.current 		= 0;

h.showPicture = function(){
	
			
	};
	

h.hidePicture = function(){

	}



h.menu.find(".b-picture__image")
	.mouseover(h.showPicture)   // при наведении мыши - показать подменю этого меню
	.mouseout(h.hidePicture); 
	}