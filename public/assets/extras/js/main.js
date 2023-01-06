// (function ($) {
//     "use strict";

//     /*==================================================================
//     [ Validate ]*/
//     var input = $('.validate-input .input100');

//     $('.validate-form').on('submit',function(){
//         var check = true;

//         for(var i=0; i<input.length; i++) {
//             if(validate(input[i]) == false){
//                 showValidate(input[i]);
//                 check=false;
//             }
//         }

//         return check;
//     });

//     $('.validate-form .input100').each(function(){
//         $(this).focus(function(){
//            hideValidate(this);
//         });
//     });

//     function validate (input) {
//         if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
//             if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
//                 return false;
//             }
//         }
//         else {
//             if($(input).val().trim() == ''){
//                 return false;
//             }
//         }
//     }

//     function showValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).addClass('alert-validate');
//     }

//     function hideValidate(input) {
//         var thisAlert = $(input).parent();

//         $(thisAlert).removeClass('alert-validate');
//     }

// })(jQuery);

$('#submit').click(function (e) {
	e.preventDefault();
	// console.log(456789);
	// const email = $('#email').val();
	// const pass = $('#pass').val();
	// console.log(email, pass);
	// if (email === 'admin@nimasa.com' && pass === 'admin') {
	// 	location.replace('arrival-dashboard.html');
	// } else {
	// 	alert('login credential wrong');
	// }

	const form = new FormData();

	const settings = {
		async: true,
		crossDomain: true,
		url: 'https://app.conveyoo.com/app/nimasa2/api/api/login_db/all',
		method: 'GET',
		headers: {
			cookie:
				'LEGUhfoW=f64906570974e2d52e697b560c32943f31a2d211; HZQkEUKS=8d18b109e46682ec00c2c650cdbfe85a; language=english',
			'X-Api-Key': '2D048C2B09E0AA5211D9C446751C7619',
			'X-Token':
				'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjM1OTQxMjAsImV4cCI6MTY3OTE0NjEyMH0.zQi8ICnjYVBjQefAMb9Vrh3e_SinQs4Dc2gYU6Rp3eY',
		},
		processData: false,
		contentType: false,
		mimeType: 'multipart/form-data',
		data: form,
	};

	$.ajax(settings).done(function (response) {
		//   console.log(JSON.parse(response));
		let parsedLoad = JSON.parse(response);
		let dataArr = parsedLoad.data.login_db;
		dataArr.find((item) => {
			// console.log(item.email);
			if ($('#email').val() === item.email) {
				console.log(item.password);
				if ($('#pass').val() === item.password) {
					location.replace('arrival-dashboard.html');
				} else alert('Password Incorrect');
			}
		});

		//   console.log("dataArr", dataArr);
	});
});

$('#createUser').click(function (e) {
	e.preventDefault();
	const settings = {
		async: true,
		crossDomain: true,
		url: 'https://app.conveyoo.com/app/nimasa2/wp-json/wp/v2/users',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJuaW1hc2FBcGlBZG1pbiIsImlhdCI6MTY2MzU4OTc3OCwiZXhwIjoxODIxMjY5Nzc4fQ.b-wojFlybSEhq8e2kNuboc2VdydZAl4_-A2zmzSjKGc',
		},
		data: {
			// "username": $('#username').val(),
			password: $('#password').val(),
			email: $('#email').val(),
			first_name: $('#firstName').val(),
			last_name: $('#lastName').val(),
			roles: $('#roles').val(),
			'': '',
		},
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		const form = new FormData();
		form.append('email', $('#email').val());
		form.append('password', $('#password').val());

		const settings2 = {
			async: true,
			crossDomain: true,
			url: 'https://app.conveyoo.com/app/nimasa2/api/api/login_db/add',
			method: 'POST',
			headers: {
				cookie:
					'LEGUhfoW=17a4d63bf3a8f9fa35c4f47f99bb68d30eee2f3f; HZQkEUKS=8d18b109e46682ec00c2c650cdbfe85a; language=english',
				'X-Api-Key': '2D048C2B09E0AA5211D9C446751C7619',
				'X-Token':
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7ImlkIjoiMSJ9LCJpYXQiOjE2NjM1OTQxMjAsImV4cCI6MTY3OTE0NjEyMH0.zQi8ICnjYVBjQefAMb9Vrh3e_SinQs4Dc2gYU6Rp3eY',
			},
			processData: false,
			contentType: false,
			mimeType: 'multipart/form-data',
			data: form,
		};

		$.ajax(settings2).done(function (response) {
			console.log(response);
		});
	});
});
