toastMessages
=============

Fusion of toast message packages: https://github.com/CodeSeven/toastr and https://github.com/akquinet/jquery-toastmessage-plugin

Nice css like android or ubuntu style with basic init in example below.

example:
```html
<link rel="stylesheet" href="./min/toasts.min.css">
(...)
```javascript
<script type="text/javascript" src="./jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="./min/toasts.min.js"></script>

<script>
//config
//toastmessage
/*
$().toastmessage({
			text     : 'init',
			sticky   : false,
			position : 'top-right',
			close    : function () {
				console.log("toast is closed ...");
			}
        });
*/
//toastr
/*
$.fn.toastr = toastr;
$().toastr.options = {
	"debug": false,
	"positionClass": "toast-bottom-middle-center",
	"onclick": null,
	"fadeIn": 300,
	"fadeOut": 1000,
	"timeOut": 3000,
	"extendedTimeOut": 1000
};
*/
//message ubuntu style
$().toastmessage('showErrorToast', 'title');

//message android style
$().toastr.error('title');
</script>
```
