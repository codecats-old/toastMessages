$().toastmessage({
	text     : 'init',
	sticky   : false,
	position : 'top-right',//'my-bottom-center',
	//  type     : 'success',
	close    : function () {
	console.log("toast is closed ...");
	}
});
 $.fn.toastr =toastr;
$().toastr.options={
	"debug": false,
	"positionClass": "toast-bottom-middle-center",//"toast-bottom-full-width",
	"onclick": null,
	"fadeIn": 300,
	"fadeOut": 1000,
	"timeOut": 3000,
	"extendedTimeOut": 1000
};
