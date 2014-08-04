/**
  * 侧边栏 toolbar
  *animate不支持display
  */



;(function(){

	$('.tool_div').click(function(){

		var _this=$(this);
		
		if(_this.hasClass('tool_div_click')){
			_this.removeClass('tool_div_click').children('.tool_group_panel').fadeOut();

			// animate({
			// 	'width':'0',
			// 	'opacity': '0',
			// 	'right': '0px'},200);
			// removeClass('tool_group_panel_show');

		}else{
			_this.addClass('tool_div_click').siblings('.tool_div').removeClass('tool_div_click');
			// _this.parent().find('.tool_group_panel').removeClass('tool_group_panel_show');

			$('#sideTool').find('.tool_group_panel').hide();
			// css({
			// 	'width':'0',
			// 	'opacity': '0',
			// 	'right': '0px'});


			_this.children('.tool_group_panel').fadeIn();

			// animate({
			// 	'width':'300',
			// 	'opacity': '1',
			// 	'right': '50px'},200);

			// addClass('tool_group_panel_show');
		}
	});

	
})($);