$(document).ready(function(){
	//Tooltip
	$('[data-toggle="tooltip"]').tooltip({
		html: true
	});
	$('[rel="tooltip"]').tooltip();
	
	//Popover	
	$('[data-toggle="popover"]').popover({
		html: true,
        content: function () {
			var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
			$("body").addClass("step_popover");
            return clone;
        }
    });
	
	$('body').on('click', function (e) {
		$('[data-toggle="popover"]').each(function () {
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				$("body").removeClass("step_popover");
				$(this).popover('hide');
				return;
			}
		});
	});

	$('body, .close_popover').on('hidden.bs.popover', function (e) {
		$(e.target).data("bs.popover").inState = { click: false, hover: false, focus: false }
	});
	
	//Current Page
    $("[href]").each(function() {
		if (this.href == window.location.href) {
			$(this).addClass("current");
		}
	});
	
	//Scrollbar
	jQuery('.scrollbar-inner').scrollbar({
		scrollx: false
	});

	$(".actions .dropdown-menu").click(function(e){
		e.stopPropagation();
	});
	$(".actions .cancel").click(function(e){
		$(".actions").removeClass("open");
	})

	//Date Time Picker
	$('.datepicker').datetimepicker({
		format: 'DD/MM/YYYY',
		useCurrent: false
	});	
	$('.timepicker').datetimepicker({
		format: 'LT',
		useCurrent: true
	});
});

//Login
$(document).on('focus active', '.login .form-control',function(){
	$('label[for='+$(this).attr('id')+']').parent().addClass('has-value');
});
$(document).on('blur', '.login .form-control',function(){
	$('label[for='+$(this).attr('id')+']').parent().removeClass('has-value');
});
$('.login .form-control').on('blur',function(){
	if($(this).val() == ''){
	  $(this).parent().removeClass("has-value");
	}else{
	  $(this).parent().addClass("has-value");
	}
});

//Menu
$(".menu_action").click(function(){
	$("body").toggleClass("menu_open");
});

//Modal
$(".modal-change").click(function(){
	$("body").addClass("modal-open");
});
$(".modal .close").click(function(){
	$("body").removeClass("modal-open");
});

