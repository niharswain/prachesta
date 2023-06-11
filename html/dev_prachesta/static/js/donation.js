$("#screenwidth").val(screen.width);
$("#screenheight").val(screen.height);
function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

//if browse is IE8 Or less this if condtions will check code begins here
function getInternetExplorerVersion()
{
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-8]{1,}[\.0-8]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

//new donation validation code
function chk_donationamt() {
    var donatnamt = $("#other").val();
    var donations_amount = $("input[name=donations_amount]:checked").val();
    $('#mode_id_note_error_while_filling').hide();
    $('#mode_id_error_while_filling').hide();
    if (donations_amount == 'other' && donatnamt == '') {
        $('#other').focus();
        $('#donationamt_error_while_filling').show();
    } else {
        $('#donationamt_error_while_filling').hide();
    }
}
$('#donationamt_error_while_filling').hide();
function chk_citizenshipsel() {
    if (!$("input[name='mode_id']:checked").val()) {
        //$("input[name='mode_id']").focus();
        $("#7").focus();
        $('#mode_id_error_while_filling').show();
        $('#mode_id_note_error_while_filling').show();
        $('#donationamt_error_while_filling').show();
    } else {
        $('#mode_id_note_error_while_filling').hide();
        $('#mode_id_error_while_filling').hide();
        $('#donationamt_error_while_filling').hide();
    }
}
//end

//if browse is IE8 Or less this if condtions will check code end here
//new online daonation page
$("#hoverdropdown").hide();
$("a").click(function() {
    var slectedamt = $(this).attr("id");
    //alert(slectedamt);
    if (slectedamt != 'other') {
        $("#donation_amount").val(slectedamt);
        $('#otheramt').hide();
    } else {
        $('#otheramt').show();
    }
    $("#hoverdropdown").hide();
})
/*function onchangeamount(val){
 var donation_amount = $("#sel_donation_amount").val();
 if(donation_amount != 'other'){
 $("#donation_amount").val(donation_amount);
 $('#otheramt').hide();
 }else{
 $('#otheramt').show();
 }
 }
 function onchangeamtother(val){
 var other_amt = $("#other_amt").val();
 $("#donation_amount").val(other_amt);
 }*/
//end

//mid day meal chked for new donation page
$("#mid_day_meal_plate_chked").change(function() {
    //alert('sss');
    var donations_amount = $("input[name=donations_amount]:checked").val();
    if (donations_amount == 'other') {
        var donations_amount = $("#other").val();
    }
    if (this.checked) {
        var no_of_plate = parseInt(donations_amount / 1100);
        //alert(no_of_plate);
        $("#mid_day_meal_plates").val(no_of_plate);
        var mid_day_meal_plate_chked = $("input[name=mid_day_meal_plate_chked]:checked").val();
        if (mid_day_meal_plate_chked == 1 && donations_amount != '') {
            var mid_day_meal_amt = parseInt(no_of_plate * 115);
            $("#mid_day_meal_amt").val(mid_day_meal_amt);
            var total_donation_amt = (parseInt(donations_amount) + parseInt(mid_day_meal_amt));
            $("#donation_amount").val(total_donation_amt);
        }
    } else {
        $("#donation_amount").val(donations_amount);
    }
});

function onchange_numof_mealplate(val) {
    var donations_amount = $("input[name=donations_amount]:checked").val();
    if (donations_amount == 'other') {
        var donations_amount = $("#other").val();
    }
    var no_of_plate = val;
    var mid_day_meal_plate_chked = $("input[name=mid_day_meal_plate_chked]:checked").val();
    if (mid_day_meal_plate_chked == 1 && donations_amount != '') {
        $("#mid_day_meal_plates").val(no_of_plate);
        var mid_day_meal_amt = parseInt(no_of_plate * 115);
        var total_donation_amt = (parseInt(donations_amount) + parseInt(mid_day_meal_amt));
        $("#donation_amount").val(total_donation_amt);
    } else {
        $("#donation_amount").val(donations_amount);
    }
}
//end

//mid day meal amount for donation page
$("#mid_day_meal_plate_chk").change(function() {

    donationamtchk();
    var donations_amount = $("input[name=donations_amount]:checked").val();
    if (donations_amount == 'other') {
        var donations_amount = $("#other").val();
    }

    if (this.checked) {
        var mid_day_meal_plate_chk = $("input[name=mid_day_meal_plate_chk]:checked").val();
        if (mid_day_meal_plate_chk == 1 && donations_amount != '') {
            var mid_day_meal_amt = $("#mid_day_meal_amt").val();
            if (mid_day_meal_amt == "") {
                $("#mid_day_meal_amt").val(115);
                $("#mid_day_meal_plates").val(1);
                mid_day_meal_amt = 115;
            }
            var total_donation_amt = (parseInt(donations_amount) + parseInt(mid_day_meal_amt));
            $("#donation_amount").val(total_donation_amt);
            $("#hidamount").html(total_donation_amt);
        }

    } else {
        $("#donation_amount").val(donations_amount);
        $("#hidamount").html(donations_amount);
        $("#mid_day_meal_amt").val('');
        $("#mid_day_meal_plates").val('');
    }

    //currency exchange rate begin on change amount
    var currency_code = $('#currency_code').val();
    //alert(currency_code);
    //currency_exchange_rate(currency_code);
    //currency exchange rate end on change amount

});

function donationamtchk() {
    var donations_amount_chk = $("input[name=donations_amount]:checked").val();
    //alert(donations_amount_chk);
    if (donations_amount_chk == 'other') {
        var donations_amount = $("#other").val();
        if (donations_amount != '') {
            $('#donations_amount_chk_error').hide();
        } else {
            $('#donations_amount_chk_error').show();
        }
    } else {
        $('#donations_amount_chk_error').hide();
    }
}

function onchangenumofplateformiddaymeal(val) {
    var no_of_plates_mid_day_meal = val;
    var donations_amount = $("input[name=donations_amount]:checked").val();
    if (donations_amount == 'other') {
        var donations_amount = $("#other").val();
    }
    var amount_per_plate = no_of_plates_mid_day_meal * 115;
    $("#mid_day_meal_amt").val(amount_per_plate);
    if (donations_amount != '') {
        var total_donation_amt = (parseInt(donations_amount) + parseInt(amount_per_plate));
    } else {
        var total_donation_amt = (parseInt(amount_per_plate));
    }

    $("#donation_amount").val(total_donation_amt);
    //currency exchange rate begin on change amount
    var currency_code = $('#currency_code').val();
    //currency_exchange_rate(currency_code);
    //currency exchange rate end on change amount

}
//end
//for plates donation start
function onchangenumofplateforvri(val) {
    var no_of_plates = $("#no_of_plates_vri").val();
    var amount_per_plate = no_of_plates * 115;
    $("#donation_amount1").val(amount_per_plate);
    if (amount_per_plate != '') {
        $("#donation_amount").val(amount_per_plate);
    }
}

function onchangenumofplateforbhav(val) {
    var no_of_plates = $("#no_of_plates_bhav").val();
    var amount_per_plate = no_of_plates * 115;
    $("#donation_amount2").val(amount_per_plate);
    if (amount_per_plate != '') {
        $("#donation_amount").val(amount_per_plate);
    }
}

function onchangenumofplateforpuri(val) {
    var no_of_plates = $("#no_of_plates_puri").val();
    var amount_per_plate = no_of_plates * 115;
    $("#donation_amount3").val(amount_per_plate);
    if (amount_per_plate != '') {
        $("#donation_amount").val(amount_per_plate);
    }
}

function show_plates_required(val) {
    if (val == 'Vrindavan') {
        $("#no_of_plates_bhav").val('');
        $("#no_of_plates_puri").val('');
        $("#donation_amount2").val('');
        $("#donation_amount3").val('');
    } else if (val == 'Bhavnagar') {
        $("#no_of_plates_vri").val('');
        $("#no_of_plates_puri").val('');
        $("#donation_amount1").val('');
        $("#donation_amount3").val('');
    } else {
        $("#no_of_plates_vri").val('');
        $("#no_of_plates_bhav").val('');
        $("#donation_amount1").val('');
        $("#donation_amount2").val('');
    }
}
//plates donation end
//for online-fund-raising-campaign-or-share-my-lunch start
//var target_of_children = $("#target_of_children").val();
function onchangechildren(val) {
    var no_of_children = $("#no_of_children").val();
    if (no_of_children != 'other') {
        var amount_per_child = no_of_children * 1500;
        $("#donation_amount").val(amount_per_child);
        $("#hidamount").html(amount_per_child);
        //$("#target_of_children").val(target_of_children - no_of_children);
        //$("#targetofchildren").html(target_of_children - no_of_children);
        $('#otherchildren').hide();

    } else {
        $('#otherchildren').show();
        //$("#target_of_children").val(target_of_children);
        //$("#targetofchildren").html(target_of_children);
    }

}
function onchangechilrendother(val) {
    var other_no_children = $("#other_children").val();
    var amount_per_child = other_no_children * 1500;
    $("#donation_amount").val(amount_per_child);
    $("#hidamount").html(amount_per_child);
    //$("#target_of_children").val(target_of_children - other_no_children);
    //$("#targetofchildren").html(target_of_children - other_no_children);
}
//end
//for online-fund-raising-campaign start
/*var target_of_children = $("#target_of_children").val();
 function onchangechildren(val){
 var no_of_children = $("#no_of_children").val();
 if(no_of_children != 'other'){
 var amount_per_child = no_of_children * 1100;
 $("#donation_amount").val(amount_per_child);
 $("#hidamount").html(amount_per_child);
 $("#target_of_children").val(target_of_children - no_of_children);
 $("#targetofchildren").html(target_of_children - no_of_children);
 $('#otherchildren').hide();
 }else{
 $('#otherchildren').show();
 $("#target_of_children").val(target_of_children);
 $("#targetofchildren").html(target_of_children);
 }
 }
 function onchangechilrendother(val){
 var other_no_children = $("#other_children").val();
 var amount_per_child = other_no_children * 1100;
 $("#donation_amount").val(amount_per_child);
 $("#hidamount").html(amount_per_child);
 $("#target_of_children").val(target_of_children - other_no_children);
 $("#targetofchildren").html(target_of_children - other_no_children);
 } */
//end

/*only donate code start*/
//$('#otheramount').hide();
function onchangedonationamtperday(val) {
    var donation_amt_per_day = $("#donation_amt_per_day").val();
    //alert(donation_amt_per_day);
    if (donation_amt_per_day != '' && donation_amt_per_day != 'other') {
        $("#donations_id_5").attr("checked", true);
        $("#donation_amount").val(donation_amt_per_day);
        $("#hidamount").html(donation_amt_per_day);
        $('#other').val('');
        $('#other').hide();
        $('#otheramount').hide();
        $('#donation_amt_per_mnth').val('');
        $('#donation_amt_per_yr').val('');
        $('#donations_id_5').prop('checked', true);
    } else {
        $("#donation_amount").val("");
        $("#hidamount").html("");
        $('#other').show();
        $('#otheramount').show();
        $("#donation_amt_per_yr").val('');
        $('#donation_amt_per_mnth').val('');
    }
}

function onchangedonationamtpermonth(val) {
    var donation_amt_per_mnth = $("#donation_amt_per_mnth").val();
    //alert(donation_amt_per_mnth);
    if (donation_amt_per_mnth != '' && donation_amt_per_mnth != 'other') {
        $("#donation_amount").val(donation_amt_per_mnth);
        $("#hidamount").html(donation_amt_per_mnth);
        $('#other').val('');
        $('#other').hide();
        $('#otheramount').hide();
        $("#donation_amt_per_yr").val('');
        $("#donation_amt_per_day").val('');
        $('#donations_id_95').prop('checked', true);
    } else {
        $("#donation_amount").val("");
        $("#hidamount").html("");
        $('#other').show();
        $('#otheramount').show();
        $("#donation_amt_per_yr").val('');
        $("#donation_amt_per_day").val('');
    }
}

function onchangedonationamtperyear(val) {
    var donation_amt_per_yr = $("#donation_amt_per_yr").val();
    //alert(donation_amt_per_yr);
    if (donation_amt_per_yr != '' && donation_amt_per_yr != 'other') {
        $("#donation_amount").val(donation_amt_per_yr);
        $("#hidamount").html(donation_amt_per_yr);
        $('#other').val('');
        $('#other').hide();
        $('#otheramount').hide();
        $('#donation_amt_per_mnth').val('');
        $("#donation_amt_per_day").val('');
        $('#donations_id_950').prop('checked', true);
    } else {
        $("#donation_amount").val("");
        $("#hidamount").html("");
        $('#other').show();
        $('#otheramount').show();
        $('#donation_amt_per_mnth').val('');
        $("#donation_amt_per_day").val('');
    }
}
/*donate only code ends*/

//sanitisation kit for donation page
$("#senitisation_kit_chk").change(function() {
	var pagepathname = window.location.pathname;
	//alert(pagepathname);
	if(pagepathname == "/back-to-school" || pagepathname == "/smithsgroupindia"){
		boxdonationamtchk();
		var donationamount = $("input[name=donation_amount]:checked").val();
		var donations_amount_chk = $("#other_meals_amount").val();
		if (donationamount == 'other') {
			var donations_amount = $(".otheramt").val();
		}
		//alert(donationamount);
	}else{
		donationamtchk();
		var donations_amount = $("input[name=donations_amount]:checked").val();
		var pagepathname = window.location.pathname;
		if (donations_amount == 'other') {
			var donations_amount = $(".otheramt").val();
		}
	}

    if (this.checked) {
        var senitisation_kit_chk = $("input[name=senitisation_kit_chk]:checked").val();
        if (senitisation_kit_chk == 1 && donations_amount != '') {
            var senitisation_kit_amt = $("#senitisation_kit_amt").val();
            if (senitisation_kit_amt == "") {
               if(pagepathname == '/donate-family-happiness-kits' || pagepathname == '/donate-happiness-boxes'){
					$("#senitisation_kit_amt").val(150);
					$("#senitisation_kits").val(1);
					senitisation_kit_amt = 150;
                } else {
					$("#senitisation_kit_amt").val(100);
					$("#senitisation_kits").val(1);
					senitisation_kit_amt = 100;
				}
            }
			if(pagepathname == "/back-to-school" || pagepathname == "/smithsgroupindia"){
				if(donations_amount_chk != ""){
					var total_donation_oamt = (parseInt(donations_amount_chk) + parseInt(senitisation_kit_amt));
					$("#donation_amount").val(total_donation_oamt);
					$("#hidamount").html(total_donation_oamt);
				}else{
					var total_donation_amt = (parseInt(donationamount) + parseInt(senitisation_kit_amt));
					$("#donation_amount").val(total_donation_amt);
					$("#hidamount").html(total_donation_amt);
				}
			}else{
				var total_donation_amt = (parseInt(donations_amount) + parseInt(senitisation_kit_amt));
				$("#donation_amount").val(total_donation_amt);
				$("#hidamount").html(total_donation_amt);
			}
        }

    } else {
        if(pagepathname == "/back-to-school" || pagepathname == "/smithsgroupindia"){
		   if(donations_amount_chk != ""){
				$("#donation_amount").val(donations_amount_chk);
				$("#hidamount").html(donations_amount_chk);
				$("#senitisation_kit_amt").val('');
				$("#senitisation_kits").val('');
			}else{
			    var tdonationamount = $(".selamount input[type=\"radio\"]").val();
				var rdonationamount = parseInt(tdonationamount)/1500;
				//alert(tdonationamount);
				//alert(rdonationamount);
				var mdonationamount = Math.round(rdonationamount);
				var sdonationamount = parseInt(mdonationamount) * 100;
				//alert(sdonationamount);
				var donationamount = parseInt(tdonationamount) - parseInt(sdonationamount);
				//alert(donationamount);
				$("#senitisation_kit_amt").val('');
				$("#senitisation_kits").val('');
				$("#donation_amount").val(donationamount);
				$("#hidamount").html(donationamount);
			}
		}else{
			$("#donation_amount").val(donations_amount);
			$("#hidamount").html(donations_amount);
			$("#senitisation_kit_amt").val('');
			$("#senitisation_kits").val('');
		}
    }

});

function boxdonationamtchk() {
    var donations_amount_chk = $("input[name=donation_amount]:checked").val();
    //alert(donations_amount_chk);
    if (donations_amount_chk == 'other') {
        var donations_amount = $("#other").val();
        if (donations_amount != '') {
            $('#donations_amount_chk_error').hide();
        } else {
            $('#donations_amount_chk_error').show();
        }
    } else {
        $('#donations_amount_chk_error').hide();
    }
}

function pinzipplaceholder() {
    var countryid = $("#country_id").val();
    if (countryid == 1) {
        $('#postal_code').attr("placeholder", "Pin Code");
    } else {
        $('#postal_code').attr("placeholder", "Zip Code");
    }
}

function get_currency_val() {
    var currency_code = $('#currency_code').val();
    var donation_amount = $('#donation_amount').val();
    $.getJSON('ajax/currency_convesion/' + currency_code + '/' + donation_amount, function(data) {
        if (data != "") {
            $("#convert_amt").val(data);
        } else {
            $("#convert_amt").val('');
        }
    });

}
//get currency converted value
$(document).on('change', '#currency_code', function() {
    get_currency_val();
});

$(document).ready(function() {
    $(".view-more").click(function() {
        $(".view-more").hide();
        $('.view-read-more').attr('style', 'max-height: none;');
    });

    $("#autocomplete").on("keydown", function(event) {
        if (event.which == 13)
            return false;
        return true;
    });

	//optum employee email validate
	$.validator.addMethod("isemailuhcOroptum",
		function(value, element) {
			if($("input[name=donation_url]").val() == 'optum'){
				return  /.+@(uhc|optum)\.com$/.test(value);
			}else{
				return true;
			}
		},
		"Kindly use @uhc.com and @optum.com domains only."
	);
	//End optum employee email validate

	//adobe employee email validate
	$.validator.addMethod("isemailadobe",
		function(value, element) {
			if($("input[name=donation_url]").val() == 'adobe'){
				return  /.+@(adobe)\.com$/.test(value);
			}else{
				return true;
			}
		},
		"Kindly use @adobe.com only."
	);
	//End adobe employee email validate

	//collabera employee email validate
	$.validator.addMethod("isemailcollabera",
		function(value, element) {
			if($("input[name=donation_url]").val() == 'joylicious'){
				return  /.+@(collabera)\.com$/.test(value);
			}else{
				return true;
			}
		},
		"Kindly use @collabera.com only."
	);
	//End collabera employee email validate

    //custom validation rule
    $.validator.addMethod("customemail",
            function(value, element) {
                return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
            },
            "Please enter ealid Email-Id"
            );

    $.validator.addMethod("lettersonly",
            function(value, element) {
                return this.optional(element) || /^[a-z\s]+$/i.test(value);
            },
            "Please enter valid name"
            );

    $.validator.addMethod("Mobileno",
            function(value, element) {
                return this.optional(element) || value.length === 10 || value.length === 12;
            },
            "Please enter valid phone number"
            );


    //commented below code as per requirement on 6-jan-2017
    /* $("#login_user").click(function() {
     $('#myLogin').modal('show');
     }); */

//login form popup for donatin page end here

//vehicle donation code begins here 2/1
    $(".vehicle_mode").click(function() {
        var vehicle_title_mode = $("input[name=vehicle_title_mode]:checked").val();
        if (vehicle_title_mode == 1) {
            $("#vehicle_title_name").show();
        } else {
            $("#vehicle_title_name").hide();
        }
    })

    if ($("input[name=vehicle_title_mode]:checked").val() == 1) {
        $("#vehicle_title_name").show();
    } else {
        $("#vehicle_title_name").hide();
    }
//vehicle donation code end here 2/1
//how did you hear about us code begins here
    $("#how_did_you_hear_us").change(function() {
        if ($("#how_did_you_hear_us").val() == 'Friends & Family' || $("#how_did_you_hear_us").val() == 'Others') {
            $("#hear_from").show();
        } else {
            $("#hear_from").hide();
        }
    })
    if ($("#how_did_you_hear_us").val() == 'Friends & Family' || $("#how_did_you_hear_us").val() == 'Others') {
        $("#hear_from").show();
    } else {
        $("#hear_from").hide();
    }
//how did you hear about us code end here
//donation login page begins here
    $('#loginform').validate({
        debug: false,
        rules: {
            username: {
                required: true,
                email: true,
            },
            password: {
                required: true,
            },
        },
        submitHandler: function() {
            // alert("hii");
            /* $.post("ajax/loginpage", $("#share_form #loginform").serialize(), function(res) {
             if (res.status == 1) {
             if (res.login_user == 0) {
             var update = confirm("Your profile not updated do you want to udpate it");
             if (update) {
             location.href = 'my-account/onlinedonations';
             exit;
             }
             else {
             location.href = res.url;
             }
             }
             location.href = res.url;

             } else {
             $('#loginform > span').html(res.msg);
             $('#loginform > span').fadeOut(8000);
             $('#loginform').each(function() {
             this.reset();   //Here form fields will be cleared.
             });
             }
             });*/
        }

    });
//donation login page end here

//form_donation_dd_cheque form validation
    $('#form_donation_dd_cheque').validate({
        debug: false,
        rules: {
            firstname: {
                required: true,
                minlength: 2,
                maxlength: 50,
                lettersonly: true,
            },
            email_id: {
                required: true,
                email: true,
                email: true,
                        customemail: true,
            },
            addres: {
                required: function(element) {
                    return ($("input[name=receipt_through_online_or_offline]:checked").val() == '0' || $("input[name=mode_id]:checked").val() == '4' && $("input[name=donation_url]").val() != 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() != 'i-share-my-lunch' || $("input[name=donation_url]").val() != 'project-hunger1' || $("input[name=donation_url]").val() != 'project-hunger-2');

                }
            },
            countryid: {
                required: function(element) {
                    return ($("input[name=receipt_through_online_or_offline]:checked").val() == '0' || $("input[name=mode_id]:checked").val() == '4' && $("input[name=donation_url]").val() != 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() != 'i-share-my-lunch' || $("input[name=donation_url]").val() != 'project-hunger1' || $("input[name=donation_url]").val() != 'project-hunger-2');

                }
            },
            state: {
                required: function(element) {
                    return ($("#country_id").val() == "1");
                },
            },
            phone_no: {
                required: true,
                digits: true,
                Mobileno: true,
            },
            captcha_result: {
                required: true,
                validCaptcha1: true
            },
        },
        messages: {
            captcha_result: {
                required: "Validate.",
                validCaptcha1: "Invalid."
            },
        },
        submitHandler: function() {
            $("#step2").css("display", "block");
            form.submit();
        }

    });

    $.validator.addMethod('validCaptcha1', function(value) {
        $result = (parseInt($('#num1').val()) + parseInt($('#num2').val()) == parseInt($('#captcha_result1').val()));
        return $result;
    },
            'Incorrect value, please try again.'
            );

    /*$('#form_donation_dd_cheque').submit(function() {
        var error = 0;
        var captchaval = $('#g-recaptcha-response').val();
        $('.recaptcha-error-message').hide();
        if (captchaval <= 0) {
            var error = 1
            $('.recaptcha-error-message').show();
        }
        if (error == "1") {
            return false; //result = true;
        } else {
            result = false;
        }

    });*/
//end

//if browse is IE8 Or less this if condtions will check code begins here
    if (getInternetExplorerVersion() == 7 || getInternetExplorerVersion() == 8) {
    } else {
        var captchaval = $('#g-recaptcha-response').val();
        $('#form_donation').validate({
            debug: false,
            rules: {
                //vehicle donation code begins here 2/2
                no_of_smiles: {
                    required: function(element) {
                        return ($("#per_smile").val() != "" && $("#no_of_smiles").val() <= "0");
                    },
                    min: 1
                },
                /*donation_amt_per_meal: {
                 required: function(element) {
                 return ($("input[name=donation_url]").val() == 'donate-to-gorakhpur-flood-relief' && $("#other_meals").val() == '' && $("#other_meals_amount").val() == '');
                 },
                 },
                 other_meals: {
                 required: function(element) {
                 return ($("input[name=donation_url]").val() == 'donate-to-gorakhpur-flood-relief' && $("#donation_amt_per_meal").val() == 'other');
                 },
                 },*/
                occasion_honor_pan_no: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'project-hunger1' && $("input[name=tax_excp_cert]:checked").val() == 'tax_excp_cert');
                    },
                },
                donationsamount: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'feed-a-million' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2' && $("#other_meals_amount").val() == '');
                    },
                    donationsamountvaldtn: true,
                },
                donations_amount: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'nokhaalipet' && $("#other_meals_amount").val() == '');
                    },
                },
                other_meals_amount: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'donate-to-gorakhpur-flood-relief' || $("input[name=donation_url]").val() == 'donate-to-kerala-flood-relief' || $("input[name=donation_url]").val() == 'donate-to-odisha-cyclone-relief' || $("input[name=donation_url]").val() == 'growwithsadya' || $("input[name=donation_url]").val() == 'pledge-to-end-hunger' || $("input[name=donation_url]").val() == 'hunger-action-month' || $("input[name=donation_url]").val() == 'scholarship' || $("input[name=donation_url]").val() == 'covid-relief-services' || $("input[name=donation_url]").val() == 'donate-for-covid-relief' || $("input[name=donation_url]").val() == 'vedanta-group' || $("input[name=donation_url]").val() == 'mufg' || $("input[name=donation_url]").val() == 'world-hunger-day'  || $("input[name=donation_url]").val() == 'boa'  || $("input[name=donation_url]").val() == 'trendmicro'  || $("input[name=donation_url]").val() == 'serving-the-shramiks'  || $("input[name=donation_url]").val() == 'economics-for-the-real-world'  || $("input[name=donation_url]").val() == 'artists-for-a-cause'  || $("input[name=donation_url]").val() == 'donate-to-shramiks-feeding' || $("input[name=donation_url]").val() == 'iim' || $("input[name=donation_url]").val() == 'support-now'  || $("input[name=donation_url]").val() == 'preparing-for-boards' || $("input[name=donation_url]").val() == 'feeding-covid19-patients' || $("input[name=donation_url]").val() == 'hp' || $("input[name=donation_url]").val() == 'empower-to-educate' || $("input[name=donation_url]").val() == 'covidfoodrelief' || $("input[name=donation_url]").val() == '3i' || $("input[name=donation_url]").val() == 'bkt' || $("input[name=donation_url]").val() == 'morgan-stanley' || $("input[name=donation_url]").val() == 'jp-infra' || $("input[name=donation_url]").val() == 'franklin-templeton' || $("input[name=donation_url]").val() =='tangerine' || $("input[name=donation_url]").val() =='donate-happiness-boxes' || $("input[name=donation_url]").val() =='pledge-to-feed' || $("input[name=donation_url]").val() =='nomura' || $("input[name=donation_url]").val() == 'bbk' || $("input[name=donation_url]").val() == 'bluedart-dhl' || $("input[name=donation_url]").val() == 'honour-your-ancestors' || $("input[name=donation_url]").val() == 'joy-of-giving'  || $("input[name=donation_url]").val() == 'motilal-oswal' || $("input[name=donation_url]").val() == 'joy-of-giving-week' || $("input[name=donation_url]").val() == 'tripura' || $("input[name=donation_url]").val() == 'world-food-day' || $("input[name=donation_url]").val() == 'ekthali' || $("input[name=donation_url]").val() == 'the-joy-of-giving' ||  $("input[name=donation_url]").val() == 'sublime-life' ||  $("input[name=donation_url]").val() == 'gep'  ||  $("input[name=donation_url]").val() == 'ta-digital' ||  $("input[name=donation_url]").val() == 'diwaligiving' || $("input[name=donation_url]").val() == 'iex' || $("input[name=donation_url]").val() == 'donate-on-this-diwali' || $("input[name=donation_url]").val() == 'giving-tuesday' || $("input[name=donation_url]").val() == 'covid-stories' || $("input[name=donation_url]").val() == 'gift-a-child'  || $("input[name=donation_url]").val() == 'happy-new-year' || $("input[name=donation_url]").val() == 'tcs' || $("input[name=donation_url]").val() == 'egain' || $("input[name=donation_url]").val() == 'school-sanitisation' || $("input[name=donation_url]").val() == 'donate-and-save-tax' || $("input[name=donation_url]").val() == 'tax-exemption-donations' || $("input[name=donation_url]").val() == 'pledge-to-support' || $("input[name=donation_url]").val() == 'donate-to-feed-children' || $("input[name=donation_url]").val() == 'donate-to-midday-meal-programme' || $("input[name=donation_url]").val() == 'womens-day' || $("input[name=donation_url]").val() == 'feed-the-homeless-mothers' || $("input[name=donation_url]").val() == 'deutsche-bank' || $("input[name=donation_url]").val() == 'yatri-sewa' || $("input[name=donation_url]").val() == 'wells-fargo' || $("input[name=donation_url]").val() == 'sewa' || $("input[name=donation_url]").val() == 'abinbev' || $("input[name=donation_url]").val() == 'donate-on-akshaya-tritiya' || $("input[name=donation_url]").val() == 'bkt-akshaya-patra-covid-food-relief' || $("input[name=donation_url]").val() == 'amway' || $("input[name=donation_url]").val() == 'feed-the-marginalised-communities' || $("input[name=donation_url]").val() == 'project-hunger' || $("input[name=donation_url]").val() == 'ness' || $("input[name=donation_url]").val() == 'digbi' || $("input[name=donation_url]").val() == 'gradeup' || $("input[name=donation_url]").val() == 'barclays-akshaya-patra-covid-relief' || $("input[name=donation_url]").val() == 'checkmate-covid' || $("input[name=donation_url]").val() != 'donate-cooked-meals' || $("input[name=donation_url]").val() == 'artisans' || $("input[name=donation_url]").val() == 'fathers-day' || $("input[name=donation_url]").val() == 'grab-grecco-llp' || $("input[name=donation_url]").val() == 'donate-family-happiness-kits' || $("input[name=donation_url]").val() == 'mizoram-aid' || $("input[name=donation_url]").val() == 'gurgaonmoms' || $("input[name=donation_url]").val() == 'joylicious' || $("input[name=donation_url]").val() == 'genesisray' || $("input[name=donation_url]").val() == 'shakti-kit-for-pregnant-women'  || $("input[name=donation_url]").val() == 'donate-raksha-kits' || $("input[name=donation_url]").val() == 'donate-on-krishna-janmashtami' || $("input[name=donation_url]").val() == 'fitmap' &&  $("#other_meals_amount").val() == '' && $("input[name=donations_amount]:checked").val() == 'other');
                    },
					donationsamountvaldtn: true,
                },
                no_of_childs: {
                    required: function(element) {
                        return (($("input[name=donation_url]").val() == 'lionsclub' || $("input[name=donation_url]").val() == 'lions-club' || $("input[name=donation_url]").val() == 'ooh' || $("input[name=donation_url]").val() == 'solenis-gss-hyderabad-join-hands-with-akshaya-patra' || $("input[name=donation_url]").val() == 'each-one-feed-one' || $("input[name=donation_url]").val() == 'freedom-from-hunger' || $("input[name=donation_url]").val() == 'factset' || $("input[name=donation_url]").val() == 'mission-million-2018' || $("input[name=donation_url]").val() == 'no-khali-pet-1') && $("#other_childs").val() == '');
                    },
                },
                no_of_year: {
                    required: function(element) {
                        return (($("input[name=donation_url]").val() == 'lionsclub' || $("input[name=donation_url]").val() == 'lions-club' || $("input[name=donation_url]").val() == 'ooh' || $("input[name=donation_url]").val() == 'solenis-gss-hyderabad-join-hands-with-akshaya-patra' || $("input[name=donation_url]").val() == 'each-one-feed-one' || $("input[name=donation_url]").val() == 'freedom-from-hunger' || $("input[name=donation_url]").val() == 'factset' || $("input[name=donation_url]").val() == 'mission-million-2018' || $("input[name=donation_url]").val() == 'no-khali-pet-1') && $("#otheryear").val() == '');
                    },
                },
                donation_amount: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'onlinedonations' || $("input[name=donation_url]").val() == 'goloka');
                    },
                    donationamountlimitchk: true,
                },
                no_of_children: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'bosch' && $("#donation_amount").val() == '');
                    },
                },
                type_of_vehicle: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'donate-a-mid-day-meal-delivery-vehicle');
                    },
                },
                vehicle_year: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_make: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_model: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_color: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_doors: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_id: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_doors: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                        vehicle_mileage: {
                    required: function(element) {
                        return ($("input[name=type_of_vehicle]").val() == '1' || $("input[name=type_of_vehicle]").val() == '2' || $("input[name=type_of_vehicle]").val() == '3');
                    },
                },
                vehicle_title_name: {
                    required: function(element) {
                        return ($("input[name=vehicle_title_mode]:checked").val() == '1');
                    },
                },
                //vehicle donation code end here 2/2
                otheramt: {
                    required: function(element) {
                        return ($("input[name=donations_amount]:checked").val() == 'other' && $("input[name=mid_day_meal_plate_chk]:checked").val() != '1');
                    },
                    digits: function(element) {
                        return ($("input[name=donations_amount]:checked").val() == 'other');
                    },
                    // min: 100
                },
                receipt_through_online_or_offline: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() != 'feed-a-million' || $("input[name=donation_url]").val() != 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() != 'i-share-my-lunch' || $("input[name=donation_url]").val() != 'project-hunger1' || $("input[name=donation_url]").val() != 'project-hunger-2');
                    },
                },
                perchild: {
                    required: function(element) {
                        return ($("input[name=donations_amount]:checked").val() == 750);
                    },
                    digits: function(element) {
                        return ($("input[name=donations_amount]:checked").val() == 750);
                    },
                },
                mode_id: {
                    required: true,
                },
                first_name: {
                    required: true,
                    minlength: 2,
                    maxlength: 50,
                    lettersonly: true,
                },
				last_name: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'adobe');
                    },
                    minlength: 2,
                    maxlength: 50,
                    lettersonly: true,
                },
				adobe_payment: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'adobe');
                    },
                },
                email: {
                    required: true,
                    email: true,
                    email: true,
					customemail: true,
					//isemailuhcOroptum: true,
					isemailadobe:true,
					isemailcollabera:true,
                },
                address: {
                    required: function(element) {
                        if ($("input[name=mode_id]").val() == '9') {
                            return ($("input[name=receipt_through_online_or_offline]:checked").val() == '0');
                        } else {
                            return (($("input[name=receipt_through_online_or_offline]").val() != '1' && $("input[name=receipt_through_online_or_offline]:checked").val() == '0' || $("input[name=mode_id]:checked").val() == '4') && $("input[name=donation_url]").val() != 'genesisray');
                        }

                    }
                },
                /*area: {
                 required: true,
                 },*/
                city: {
                    //minlength: 2,
                    //maxlength: 50,
                    lettersonly: true,
                    required: function(element) {
                        return ($("input[name=donation_url]").val() != 'genesisray');
                    }
                },
                country_id: {
                    required: function(element) {
                        return (($("input[name=receipt_through_online_or_offline]:checked").val() == '0' || $("input[name=mode_id]:checked").val() == '4' || $("input[name=mode_id]:checked").val() == '8') && $("input[name=donation_url]").val() != 'genesisray');

                    }
                },
                state_id: {
                    required: function(element) {
                        //return ($("input[name=country_id]:checked").val() == '1' || $("input[name=mode_id]:checked").val() == '2' || $("input[name=mode_id]:checked").val() == '3');
                        //return ($("#country_id").val() == "1" && $("input[name=receipt_through_online_or_offline]:checked").val() == '0');
                        return ($("#country_id").val() == "1");
                    },
                },
                state_name: {
                    required: function(element) {
                        //return ($("input[name=country_id]:checked").val() == '1' || $("input[name=mode_id]:checked").val() == '2' || $("input[name=mode_id]:checked").val() == '3');
                        //return ($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '1' && $("input[name=mode_id]:checked").val() == '2' && $("input[name=mode_id]:checked").val() == '3' && $("input[name=mode_id]:checked").val() == '5');
                        return ($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '1' && $("input[name=mode_id]:checked").val() == '2' && $("input[name=mode_id]:checked").val() == '3');
                    },
                },
                pan: {
                    minlength: 10,
                    maxlength: 10,
                    required: function(element) {
                        return (($("input[name=mode_id]:checked").val() == '1' || $("input[name=mode_id]:checked").val() == '2' || $("input[name=mode_id]:checked").val() == '3' || $("input[name=mode_id]:checked").val() == '5' || $("input[name=mode_id]:checked").val() == '6' || $("input[name=mode_id]:checked").val() == '9' || $("input[name=tax_excp_cert]:checked").val() != 'tax_excp_cert') && $("input[name=donation_url]").val() != 'support-effected-workers-by-covid-19' && $("input[name=donation_url]").val() != 'tangerine' && $("input[name=donation_url]").val() != 'amway'  && $("input[name=donation_url]").val() != 'checkmate-covid' && $("input[name=donation_url]").val() != 'donate-cooked-meals' && $("input[name=donation_url]").val() != 'donate-to-akshayapatra');
                    },
                },
                postal_code: {
                    required: function(element) {
                        return (($("input[name=receipt_through_online_or_offline]:checked").val() == '0' || $("input[name=mode_id]:checked").val() == '4') && $("input[name=donation_url]").val() != 'genesisray');
                    }
                    //digits: true,
                },
                mobile: {
                    required: function(element) {
                        return ($("input[name=mode_id]:checked").val() == '1' || $("input[name=mode_id]:checked").val() == '2' || $("input[name=mode_id]:checked").val() == '5' || $("input[name=mode_id]:checked").val() == '6' || $("input[name=mode_id]").val() == '9'  || $("input[name=mode_id]").val() == '10');
                    },
                    digits: function(element) {
                        return ($("input[name=mode_id]:checked").val() == '1' || $("input[name=mode_id]:checked").val() == '2' || $("input[name=mode_id]:checked").val() == '5' || $("input[name=mode_id]:checked").val() == '6' || $("input[name=mode_id]:checked").val() == '9' || $("input[name=mode_id]").val() == '10');
                    },
                    digits: true,
                            Mobileno: true,
                },
                ohr_id: {
                    minlength: 9,
                    maxlength: 9,
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'feed-a-million');
                    },
                    digits: true,
                },
				relationship_with_vedanta: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'vedanta-group');
                    },
                },
                vessel_required_location: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'sponsor-kitchen-equipment');
                    },
                },
                donation_amount1: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'sponsor-kitchen-equipment' && $("input[name=vessel_required_location]:checked").val() == 'Vrindavan');
                    },
                },
                donation_amount2: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'sponsor-kitchen-equipment' && $("input[name=vessel_required_location]:checked").val() == 'Bhavnagar');
                    },
                },
                donation_amount3: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'sponsor-kitchen-equipment' && $("input[name=vessel_required_location]:checked").val() == 'Puri');
                    },
                },
                /*
                 phone: {
                 required: function(element) {
                 return ($("input[name=mode_id]:checked").val() == '3' || $("input[name=mode_id]:checked").val() == '4');
                 },
                 digits: function(element) {
                 return ($("input[name=mode_id]:checked").val() == '3' || $("input[name=mode_id]:checked").val() == '4');
                 },
                 },*/
                province: {
                    required: function(element) {
                        return (($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '1') || ($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '2') || ($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '3') || ($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '5') || ($("#country_id").val() != '1' && $("input[name=mode_id]:checked").val() == '4' && $("input[name=donation_url]").val() != 'genesisray'));
                    },
                },
				foreign_id_proof: {
                    required: function(element) {
                        return ($("input[name=mode_id]:checked").val() == '4' && $("input[name=donation_url]").val() == 'ness');
                    },
                },
                honor_first_name: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() != 'happy-thanksgiving');
                    },
                },
                honoree_email_id: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() != 'donate-on-friendship-day');
                    },
                    email: true,
                },
                honoree_mobile_no: {
                    required: true,
                    digits: true,
                },
                occasion_name: {
                    required: true,
                },
                occasion_honor_name: {
                    required: true,
                },
                memory_first_name: {
                    required: true,
                },
                /*captcha_image: {
                 required: true,
                 //validCaptcha: true,
                 },*/
                /*captchaval: {
                 required: true,
                 },*/
                captcha_result: {
                    required: true,
                    validCaptcha: true
                },
                agree: {
                    required: true,
                },
                'item_name[]': {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'donate-to-kerala-flood-relief' || $("input[name=donation_url]").val() == 'daan-ustaav-with-amazon-cares' || $("input[name=donation_url]").val() == 'multiple-donation');
                    },
                },
                'item_quantity[]': {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'donate-vessels');
                    },
                },
                item_othr_qnty: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'hpcl' && $('#item_quantity_1 :selected').val() == 'other');
                    },
                },
                sdl_employee_office_location: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'sdl-partner-with-akshaya-patra');
                    },
                },
				lionsclub_member_id: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'lionsclub');
                    },
                },
                alt_pledge_fund_for: {
                    required: function(element) {
                        return ($("input[name=donation_url]").val() == 'altruistic-pledge' || $("input[name=donation_url]").val() == 'aima');
                    },
                },
				corporate_name: {
                    required: function(element) {
					return ($("input[name=donation_url]").val() == 'joy-of-giving' || $("input[name=donation_url]").val() == 'diwaligiving' || $("input[name=donation_url]").val() == 'back2school');
                    },
                },
				organization_name: {
                    required: function(element) {
					return ($("input[name=donation_url]").val() == 'back2school');
                    },
                },
				optum_office_location :{
					required: function(element) {
                        return ($("input[name=donation_url]").val() == 'optum');
                    },
				},
                vouchernumber: {
                    required: function (element) {
                        return ($("input[name=mode_id]:checked").val() == '11');
                    },
                },
            },
            messages: {
                no_of_smiles: {
                    required: "Please unlock at least one smile.",
                    min: "Please unlock at least one smile.",
                },
                captcha_result: {
                    required: "Validate.",
                    validCaptcha: "Invalid."
                },
                pan: {
                    minlength: "Please enter valid PAN NO",
                    maxlength: "Please enter valid PAN NO",
                },
                ohr_id: {
                    minlength: "Please enter 9 digit OHR ID",
                    maxlength: "Please enter 9 digit OHR ID",
                },
                'item_name[]': {
                    required: "Please select any one option.",
                },
            },
            submitHandler: function() {
                $("#step2").css("display", "block");
                form.submit();
            }

        });

        $.validator.addMethod('validCaptcha', function(value) {
            $result = (parseInt($('#num1').val()) + parseInt($('#num2').val()) == parseInt($('#captcha_result').val()));
            return $result;
        },
                'Incorrect value, please try again.'
                );

       /* $.validator.addMethod("donationsamountvaldtn",
                function(value, element) {
                    $result = ($('#other_meals_amount').val() > 99);
                    return $result;
                },
                " "
                );*/

		$.validator.addMethod("donationsamountvaldtn",
                function(value, element) {
					$donationurl = $('#donation_url').val();
                    $amt = $('#other_meals_amount').val();
                    if ($amt > 0) {
                        if ($amt > 99) {
                            return true;
                        } else {
                            $myemail = $('.email-id').val();
                            if ($myemail == 'biradar.laxmi02@gmail.com' || $myemail == 'kavitha.br@akshayapatra.org' || $donationurl == 'donate-cooked-meals') {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    } else {
                        return false;
                    }
                },
                " "
                );

        $.validator.addMethod("donationamountlimitchk",
                function(value, element) {
                    $amt = $('#donation_amount').val();
                    if ($amt > 0) {
                        if ($amt > 99) {
                            return true;
                        } else {
                            $myemail = $('#email').val();
                            $donationurl = $('#donation_url').val();
							$campgnid = $('#campaign_id').val();
							//alert($campgnid);
                            if ($myemail == 'biradar.laxmi02@gmail.com' || $myemail == 'kavitha.br@akshayapatra.org' || $myemail == 'ssakkur@gmail.com' || $donationurl == 'sponsor-meal-plates-for-children' || $donationurl == 'testoners' || $campgnid == "3098") {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    } else {
                        return false;
                    }
                },
                "Thank you for your consideration. Request you to sponsor for a minimum of INR 100, as any contribution lower than that is unviable due to processing costs. Appreciate your benevolence."
                );

        $('#form_donation').submit(function() {
            var error = 0;
            var captchaval = $('#g-recaptcha-response').val();
            $('.recaptcha-error-message').hide();
            if (captchaval <= 0) {
                var error = 1
                $('.recaptcha-error-message').show();
            }
            if (error == "1") {
                return false; //result = true;
            } else {
                result = false;
            }

        });
        /*$.validator.addMethod('validCaptcha', function(value) {
         var result = false;
         var captcha_image = $("#captcha_image").val();
         if (captcha_image.length == 5) {
         $.ajax({x
         type: "POST",
         async: false,
         cache: false,
         url: "ajax/validatecaptcha",
         data: {captcha_image: captcha_image},
         success: function(msg) {
         if (msg == "true") {
         result = true;
         } else {
         result = false;
         }
         }
         });
         }
         return result;
         }, '');*/
    }
//if browse is IE8 Or less this if condtions will check code end here

    $("#last_two1").hide();
    $("#last_two2").hide();
    $("#last_two3").hide();
    $("#last_two4").hide();
    $("#other_state").hide();
    $("#phone_id").hide();
    $("#banks_id").hide();
    $("#dollar_id").hide();
    $("#memory_id").hide();
    $("#occasion_id").hide();
    $("#honor_id").hide();
    $("#convert_amt_id").hide();
    $("#currency_code_id").hide();
    $("#state_name").hide();

    var url = window.location.href;
    var page = url.substring(url.lastIndexOf('/') + 1);
    $("#" + page + "_id").show();

//get area pincode begins here
    /*
     $("#postal_code").change(function() {
     //$(".loader").show();
     var postal_code = $("#postal_code").val();
     var country_id = $("#country_id").val();
     $.ajax({
     type: "POST",
     async: false,
     cache: false,
     url: "ajax/getpincode",
     data: {postal_code: postal_code, country_id: country_id},
     success: function(data) {
     if (data.status == 1) {
     $("#city").val(data.city);
     //$("#country_id").val(data.country_id);
     if (parseInt(data.state_id) && country_id == 1) {
     $("#province").val("");
     $("#province_id").hide();
     $("#state_id").show();
     $("#state_id").val(data.state_id);
     } else if (!parseInt(data.state_id) && country_id != 1) {
     $("#state_id").val("");
     $("#state_id").hide();
     $("#province_id").show();
     $("#province").val(data.state_id);
     }
     $(".loader").hide();
     } else {
     if (country_id == 1) {
     $("#province").val("");
     $("#province_id").hide();
     $("#state_id").val("");
     $("#state_id").show();
     $(".loader").hide();
     } else {
     $("#state_id").val("");
     $("#state_id").hide();
     $("#province").val("");
     $("#province_id").show();
     $(".loader").hide();
     }
     }

     }
     });
     });
     */
    //get area pincode end here

    //onlclicking the Registered User radio button passing the entered doation amount and mode
    $('#login_user').click(function() {
        var d_amounts = $("input[name=donations_amount]:checked").val();
        var otr_amounts = $("input[name=otheramt]").val();
        var mode_ids = $("input[name=mode_id]:checked").val();

        var d_amount = document.getElementById('d_amount');
        var otr_amount = document.getElementById('otr_amount');
        var modeid = document.getElementById('modeid');

        d_amount.value = d_amounts;
        otr_amount.value = otr_amounts;
        modeid.value = mode_ids;
    });
    //onlclicking the Registered User radio button passing the entered doation amount and mode code end here
    var donations_amt = $("input[name=donations_amount]:checked").val();
    if (donations_amt != '' && donations_amt != 'other') {
        $("#other").hide();
    }

    ///onload function for payment mode selectio after login with session data code begins here
    //var val = $("input[name=mode_id]:chekced").val();
    var val = $("input[name=mode_id]:checked").val();
    //alert(val);
    if (val == '4') //international donation for payumoney
    {
		$("#cityid").hide();
        $("#taxexcpcertf").hide();
        $("#pan_id").hide();
        $(".pan_id").hide();
        $("#phone_id").show()
        $("#mobile_id").hide();
        $("#state_select").hide();
        $("#province_id").show();
        $("#dollar_id").show();
        $("#banks_id").hide();
        $("#convert_amt_id").show();
        $("#currency_code_id").show();
        //$("#form_donation").attr("action", "confirm-ccavenue");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('');
        $('[name=pan]').val('');
        $('[name=mobile]').val('');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").hide();
        $("#tax_exception_certificate").hide();
        $("#pan_mobile_email_help_msg3").show();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").hide();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert') {
            $("#address_dtls_flds").html($("#append1").html());
            $("#append1").html('');
            $("#pan_id").html($("#hpanid").html());
            $("#hpanid").html('');
            $("#pan_mobile_email_help_msg2").hide();
            $("#pan_mobile_email_help_msg").hide();
        }
        $("#receipt_through_offline").prop('checked', true);
        $("#receipt_through_online").prop('checked', false);
        $('#online-offline').hide();
        $('#onlineofflineradio').hide();
        $('#online-offline-label').hide();
        $('#postal_code').attr("placeholder", "Zip Code");
		if($("input[name=donation_url]").val() != 'genesisray'){
			$("#phone").css('border-color', '#FF0000');
		}
		$("#foreign_id_proof").css('border-color', '#FF0000');
        if ($("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
        } else {
            $("#address_dtls_flds").show();
        }
        $("#addressdiv").show();

    } else if (val == '6') { //Indian donation for payumoney
        $("#taxexcpcertf").show();
        $("#pan_id").show();
        $(".pan_id").show();
        $("#mobile_id").show();
        $("#phone_id").hide();
        $("#banks_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").hide();
        $("#convert_amt_id").hide();
        $("#currency_code_id").hide();
        $("#form_donation").attr("action", "donation-confirmation");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('1');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").show();
        $("#tax_exception_certificate").show();
        $("#pan_mobile_email_help_msg3").hide();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").show();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert' && $("input[name=donation_url]").val() != 'feed-a-million') {
            $(".pan_id").hide();
            if ($("#address_dtls_flds").html() == '') {
                $("#pan_mobile_email_help_msg3").hide();
                $("#pan_mobile_email_help_msg2").show();
                $("#pan_mobile_email_help_msg").hide();
            } else {
                $("#hpanid").html($("#pan_id").html());
                $("#pan_id").html('');
                $("#append1").html($("#address_dtls_flds").html());
                $("#address_dtls_flds").html('');
                $("#pan_mobile_email_help_msg").hide();
                $("#pan_mobile_email_help_msg2").show();
            }

        }
        $("#receipt_through_offline").prop('checked', false);
        $("#receipt_through_online").prop('checked', true);
        $('#online-offline').show();
        $('#onlineofflineradio').show();
        $('#online-offline-label').show();
        $('#postal_code').attr("placeholder", "Pin Code");
        if ($("input[name=receipt_through_online_or_offline]:checked").val() == 1 || $("input[name=donation_url]").val() == 'feed-a-million'  || $("input[name=donation_url]").val() == "urban-ladder"  || $("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
            $("#addressdiv").hide();
        } else {
            $("#address_dtls_flds").show();
            $("#addressdiv").show();
        }
    } else if (val == '7') { //Indian donation for CCAvenue
        $("#taxexcpcertf").show();
        $("#pan_id").show();
        $(".pan_id").show();
        $("#mobile_id").show();
        $("#phone_id").hide();
        $("#banks_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").hide();
        $("#convert_amt_id").hide();
        $("#currency_code_id").hide();
        $("#form_donation").attr("action", "donation-confirmation");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('1');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").show();
        $("#tax_exception_certificate").show();
        $("#pan_mobile_email_help_msg3").hide();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").show();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert' && $("input[name=donation_url]").val() != 'feed-a-million') {
            $(".pan_id").hide();
            if ($("#address_dtls_flds").html() == '') {
                $("#pan_mobile_email_help_msg3").hide();
                $("#pan_mobile_email_help_msg2").show();
                $("#pan_mobile_email_help_msg").hide();
            } else {
                $("#hpanid").html($("#pan_id").html());
                $("#pan_id").html('');
                $("#append1").html($("#address_dtls_flds").html());
                $("#address_dtls_flds").html('');
                $("#pan_mobile_email_help_msg").hide();
                $("#pan_mobile_email_help_msg2").show();
            }

        }
        $("#receipt_through_offline").prop('checked', false);
        $("#receipt_through_online").prop('checked', true);
        $('#online-offline').show();
        $('#onlineofflineradio').show();
        $('#online-offline-label').show();
        $('#postal_code').attr("placeholder", "Pin Code");
        if ($("input[name=receipt_through_online_or_offline]:checked").val() == 1 || $("input[name=donation_url]").val() == 'feed-a-million' || $("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
            $("#addressdiv").hide();
        } else {
            $("#address_dtls_flds").show();
            $("#addressdiv").show();
        }
    } else if (val == '8') //international donation for CCAvenue
    {
		$("#cityid").hide();
        $("#taxexcpcertf").hide();
        $("#pan_id").hide();
        $(".pan_id").hide();
        $("#phone_id").show()
        $("#mobile_id").hide();
        $("#state_select").hide();
        $("#province_id").show();
        $("#dollar_id").show();
        $("#banks_id").hide();
        $("#convert_amt_id").show();
        $("#currency_code_id").show();
        //$("#form_donation").attr("action", "confirm-ccavenue");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('');
        $('[name=pan]').val('');
        $('[name=mobile]').val('');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").hide();
        $("#tax_exception_certificate").hide();
        $("#pan_mobile_email_help_msg3").show();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").hide();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert') {
            $("#address_dtls_flds").html($("#append1").html());
            $("#append1").html('');
            $("#pan_id").html($("#hpanid").html());
            $("#hpanid").html('');
            $("#pan_mobile_email_help_msg2").hide();
            $("#pan_mobile_email_help_msg").hide();
        }
        $("#receipt_through_offline").prop('checked', true);
        $("#receipt_through_online").prop('checked', false);
        $('#online-offline').hide();
        $('#onlineofflineradio').hide();
        $('#online-offline-label').hide();
        $('#postal_code').attr("placeholder", "Zip Code");
        $("#phone").css('border-color', '#FF0000');
        if ($("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
        } else {
            $("#address_dtls_flds").show();
        }
        $("#addressdiv").show();

    } else if (val == '9') { //Indian donation for Instamojo
        $("#taxexcpcertf").hide();
        $("#pan_id").hide();
        $(".pan_id").hide();
        $("#phone_id").show()
        $("#mobile_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").show();
        $("#banks_id").hide();
        $("#convert_amt_id").show();
        $("#currency_code_id").show();
        //$("#form_donation").attr("action", "confirm-ccavenue");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('');
        $('[name=pan]').val('');
        $('[name=mobile]').val('');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").hide();
        $("#tax_exception_certificate").hide();
        $("#pan_mobile_email_help_msg3").show();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").hide();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert') {
            $("#address_dtls_flds").html($("#append1").html());
            $("#append1").html('');
            $("#pan_id").html($("#hpanid").html());
            $("#hpanid").html('');
            $("#pan_mobile_email_help_msg2").hide();
            $("#pan_mobile_email_help_msg").hide();
        }
        $("#receipt_through_offline").prop('checked', true);
        $("#receipt_through_online").prop('checked', false);
        $('#online-offline').hide();
        $('#onlineofflineradio').hide();
        $('#online-offline-label').hide();
        $('#postal_code').attr("placeholder", "Zip Code");
        $("#phone").css('border-color', '#FF0000');
        if ($("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
        } else {
            $("#address_dtls_flds").show();
        }
        $("#addressdiv").show();
    } else if (val == '10') { //Indian donation for Razorpay
        $("#taxexcpcertf").show();
		$("#cityid").show();
        $("#forgnhlpmodenote").hide();
        $("#indhlpmodenote").show();
        $("#pan_id").show();
        $(".pan_id").show();
        $("#mobile_id").show();
        $("#phone_id").hide();
        $("#banks_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").hide();
        $("#convert_amt_id").hide();
        $("#currency_code_id").hide();
        $("#form_donation").attr("action", "donation-confirmation");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('1');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").show();
        $("#tax_exception_certificate").show();
        $("#pan_mobile_email_help_msg3").hide();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").show();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert' && $("input[name=donation_url]").val() != 'feed-a-million') {
            $(".pan_id").hide();
            if ($("#address_dtls_flds").html() == '') {
                $("#pan_mobile_email_help_msg3").hide();
                $("#pan_mobile_email_help_msg2").show();
                $("#pan_mobile_email_help_msg").hide();
            } else {
                $("#hpanid").html($("#pan_id").html());
                $("#pan_id").html('');
                $("#append1").html($("#address_dtls_flds").html());
                $("#address_dtls_flds").html('');
                $("#pan_mobile_email_help_msg").hide();
                $("#pan_mobile_email_help_msg2").show();
            }

        }
        $("#receipt_through_offline").prop('checked', false);
        $("#receipt_through_online").prop('checked', true);
        $('#online-offline').show();
        $('#onlineofflineradio').show();
        $('#online-offline-label').show();
        $('#postal_code').attr("placeholder", "Pin Code");
        if ($("input[name=receipt_through_online_or_offline]:checked").val() == 1 || $("input[name=donation_url]").val() == 'feed-a-million' || $("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
            $("#addressdiv").hide();
        } else {
            $("#address_dtls_flds").show();
            $("#addressdiv").show();
        }
    }
    ///onload function for payment mode selectio after login with session data code end here
    /*$('#donation_amount').on('keyup', function() {
     $('#other_option').prop('checked', !!this.value.length);
     $("#other").show();
     });*/

    $(".plural").hide();
    $(".plural_2").hide();

    //added for occasion date
    var d = new Date();
    var n = d.getFullYear();
    var fmyr = n - 1;
    var toyr = n + 8;
    jQuery("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        showOn: "both",
        buttonImage: "./images/calendar.gif",
        buttonImageOnly: false,
        buttonText: "",
        yearRange: fmyr + ":" + toyr,
        dateFormat: "yy-mm-dd"
    });

    //added for donor occasion date
    /*var d = new Date();
     var n = d.getFullYear();
     var fmyr = n - 90;
     var toyr = n - 0;
     jQuery("#donor_occasion_datepicker").datepicker({
     changeMonth: true,
     changeYear: true,
     showOn: "both",
     buttonImage: "./images/calendar.gif",
     buttonImageOnly: false,
     buttonText: "",
     yearRange: fmyr + ":" + toyr,
     dateFormat: "yy-mm-dd"
     }); */

    //added for donor_date_of_birth
    var d = new Date();
    var n = d.getFullYear();
    var fmyr = n - 100;
    var toyr = n - 0;
    jQuery("#donor_date_of_birth_datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        showOn: "both",
        buttonImage: "./images/calendar.gif",
        buttonImageOnly: false,
        buttonText: "",
        yearRange: fmyr + ":" + toyr,
        dateFormat: "dd-mm-yy"
    });


});

//added this function as per new changes in honor donation
function postalcodecheck() {
    var postal_code = $("#postal_code").val();
    var country_id = $("#country_id").val();
    $.ajax({
        type: "POST",
        async: false,
        cache: false,
        url: "ajax/getpincode",
        data: {postal_code: postal_code, country_id: country_id},
        success: function(data) {
            if (data.status == 1) {
                $("#city").val(data.city);
                //$("#country_id").val(data.country_id);
                if (parseInt(data.state_id) && country_id == 1) {
                    $("#province").val("");
                    $("#province_id").hide();
                    $("#state_select").show();
                    $("#state_id").val(data.state_id);
                } else if (!parseInt(data.state_id) && country_id != 1) {
                    $("#state_id").val("");
                    $("#state_select").hide();
                    $("#province_id").show();
                    $("#province").val(data.state_id);
                }
                $(".loader").hide();
            } else {
                if (country_id == 1) {
                    $("#province").val("");
                    $("#province_id").hide();
                    $("#state_id").val("");
                    $("#state_select").show();
                    $(".loader").hide();
                } else {
                    $("#state_id").val("");
                    $("#state_select").hide();
                    $("#province").val("");
                    $("#province_id").show();
                    $(".loader").hide();
                }
            }

        }
    });
}

/*95 campaign code*/
$('#otheramount').hide();
$('#yourcontribution').hide();
function onchangedonationamtpermnt(val) {
    var donation_amt_per_month = $("#donation_amt_per_month").val();
    //alert(donation_amt_per_month);
    if (donation_amt_per_month != '' && donation_amt_per_month != 'other') {
        $("#donation_amount").val(donation_amt_per_month);
        $("#hidamount").html(donation_amt_per_month);
        $('#other').val('');
        $('#other').hide();
        $('#yourcontribution').show();
        //$('#donation_amt_per_year').prop('disabled', true);
        $('#donation_amt_per_year').val('');
        $("#donation_amt_error").hide();
    } else {
        $("#donation_amount").val("");
        $("#hidamount").html("");
        $('#other').show();
        $('#otheramount').show();
        $("#donation_amt_per_year").val('');
    }
}

function onchangedonationamtperyr(val) {
    var donation_amt_per_year = $("#donation_amt_per_year").val();
    //alert(donation_amt_per_year);
    if (donation_amt_per_year != '' && donation_amt_per_year != 'other') {
        $("#donation_amount").val(donation_amt_per_year);
        $("#hidamount").html(donation_amt_per_year);
        $('#other').val('');
        $('#other').hide();
        $('#yourcontribution').show();
        $('#donation_amt_per_month').val('');
        $("#donation_amt_error").hide();
    } else {
        $("#donation_amount").val("");
        $("#hidamount").html("");
        $('#other').show();
        $('#otheramount').show();
        $('#donation_amt_per_month').val('');
    }
}
/*95 campaign code*/

//gorakpur flood meals count code
//$('#other_meals').hide();
$("#othermealmsg").hide();
function onchangedonationamtpermeal(val) {
    var donation_amt_per_meal = $("#donation_amt_per_meal").val();
    if (donation_amt_per_meal != '' && donation_amt_per_meal != 'other') {
        $("#donation_amount").val(donation_amt_per_meal);
        $("#hidamount").html(donation_amt_per_meal);
        $('#other_meals').hide();
        $(".lions-clubs-head").attr("style", "display:none");
        $('#othermealmsg').hide();
        $('#othernomealsor').show();
        $("#other_meals_amount").val('');
        $("#donation_amt_error").hide();
    } else if (donation_amt_per_meal == '') {
        $(".lions-clubs-head").attr("style", "display:none");
        $('#othermealmsg').hide();
        $("#donation_amount").val("");
        $("#hidamount").html("");
    } else {
        $("#donation_amount").val("");
        $("#hidamount").html("");
        $('#other_meals').show();
        $(".lions-clubs-head").attr("style", "display:block");
        $("#othermealmsg").show();
    }
}

function onchangemealother(val) {
    var donation_amt_per_meal = $("#donation_amt_per_meal").val();
    if (donation_amt_per_meal != '' && donation_amt_per_meal == 'other') {
        var donationamt = 20 * val;
        $("#donation_amount").val(donationamt);
        $("#hidamount").html(donationamt);
        $("#other_meals_amount").val('');
        $("#othermealmsg").show();
    }
}

function onenterothermealamt(val) {
    var other_meals_amount = $("#other_meals_amount").val();
	//sanitisation kit
	var sanitisation_kit_chk = $("input[name=senitisation_kit_chk]:checked").val();
	//end sanitisation kit
	var pagepathname = window.location.pathname;

    if (other_meals_amount != '') {
		if(sanitisation_kit_chk == 1){
			var senitisation_kit_amt = $("#senitisation_kit_amt").val();

			if (senitisation_kit_amt == "") {
				if(pagepathname == '/donate-family-happiness-kits' || pagepathname == '/donate-happiness-boxes'){
					$("#senitisation_kit_amt").val(150);
					$("#senitisation_kits").val(1);
					senitisation_kit_amt = 150;
				}else{
					$("#senitisation_kit_amt").val(100);
					$("#senitisation_kits").val(1);
					senitisation_kit_amt = 100;
				}
			}
			var donationsamt = val;
			if(donationsamt == ''){
				donationsamt = 0;
			}
			var total_donation_amt = (parseInt(donationsamt) + parseInt(senitisation_kit_amt));
			document.getElementById('donation_amount').value = total_donation_amt;
			document.getElementById('hidamount').innerHTML = total_donation_amt;
		} else {
			document.getElementById('hidamount').innerHTML = val;
			document.getElementById('donation_amount').value = val;
			document.getElementById('other').value = val;
			$("#senitisation_kit_amt").val('');
			$("#mid_day_meal_amt").val('');
			$("#mid_day_meal_plates").val('');
		}
        $("#donation_amt_per_meal").val('');
        $("#other_meals").val('');
        //$("#donation_amount").val(other_meals_amount);
        //$("#hidamount").html(other_meals_amount);
        $("#otheramtmsg").show();
    }
}
//gorakpur flood: end
//for smiles
function onchangesmiles(smiles) {
    var tot_smiles = smiles * 1100;
    $("#donation_amount").val(tot_smiles);
    document.getElementById('tosmiles').innerHTML = smiles;
}
//smiles:end
//for solenis gss hyderbad
function onchangechildforsolenis(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (no_of_childs > 0 && no_of_year > 0) {
        $('#other-amount').hide();
        $("#other_option").prop("checked", false);
        $("#other_childs").val("");
        $("#otheryear").val("");
        var per_child = no_of_childs * 1100; //750 to 950 to 1100 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = no_of_year;

    } else if (no_of_childs > 0 && otheryear > 0) {
        $('#other-amount').hide();
        $("#other_option").prop("checked", false);
        $("#other_childs").val("");
        $("#no_of_year").val("");
        var per_child = no_of_childs * 1100; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = otheryear;
    } else {
        $('#other-amount').show();
        $("#other_option").prop("checked", true);
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }
}
function onchangeyearforsolenis(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (no_of_childs > 0 && no_of_year > 0) {
        $('#other-amount').hide();
        $("#other_option").prop("checked", false);
        $("#other_childs").val("");
        $("#otheryear").val("");
        var per_child = no_of_childs * 1100;  //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = no_of_year;

    } else if (other_childs > 0 && no_of_year > 0) {
        $('#other-amount').hide();
        $("#other_option").prop("checked", false);
        $("#no_of_childs").val("");
        $("#otheryear").val("");
        var per_child = other_childs * 1100;  //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = no_of_year;
    } else {
        $('#other-amount').show();
        $("#other_option").prop("checked", true);
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }
}

function onchangechildotherforsolenis(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (other_childs > 0 && no_of_year > 0) {
        $('#other-amount').hide();
        $("#no_of_childs").val("");
        $("#otheryear").val("");
        var per_child = other_childs * 1100; //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = no_of_year;

    } else if (other_childs > 0 && otheryear > 0) {
        $('#other-amount').hide();
        $("#no_of_childs").val("");
        $("#no_of_year").val("");
        var per_child = other_childs * 1100; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = otheryear;
    } else {
        $('#other-amount').show();
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }

}

function changeotheryearforsolenis(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (no_of_childs > 0 && otheryear > 0) {
        $('#other-amount').hide();
        $("#other_childs").val("");
        $("#no_of_year").val("");
        var per_child = no_of_childs * 1100; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = otheryear;

    } else if (other_childs > 0 && otheryear > 0) {
        $('#other-amount').hide();
        $("#no_of_childs").val("");
        $("#no_of_year").val("");
        var per_child = other_childs * 1100; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = otheryear;
    } else {
        $('#other-amount').show();
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }

}
//solenis: end
//lions clubg code begins here
function onchangechild(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (no_of_childs > 0 && no_of_year > 0) {
        $("#other_childs").val("");
        $("#otheryear").val("");
        var per_child = no_of_childs * 750; //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = no_of_year;

    } else if (no_of_childs > 0 && otheryear > 0) {
        $("#other_childs").val("");
        $("#no_of_year").val("");
        var per_child = no_of_childs * 750; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = otheryear;
    } else {
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }
}
function onchangeyear(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (no_of_childs > 0 && no_of_year > 0) {
        $("#other_childs").val("");
        $("#otheryear").val("");
        var per_child = no_of_childs * 750;  //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = no_of_year;

    } else if (other_childs > 0 && no_of_year > 0) {
        $("#no_of_childs").val("");
        $("#otheryear").val("");
        var per_child = other_childs * 750;  //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = no_of_year;
    } else {
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }
}

function onchangechildother(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (other_childs > 0 && no_of_year > 0) {
        $("#no_of_childs").val("");
        $("#otheryear").val("");
        var per_child = other_childs * 750; //750 to 950 changed by laxmi
        var per_year = per_child * no_of_year;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (no_of_year == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (no_of_year > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = no_of_year;

    } else if (other_childs > 0 && otheryear > 0) {
        $("#no_of_childs").val("");
        $("#no_of_year").val("");
        var per_child = other_childs * 750; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = otheryear;
    } else {
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }

}

function changeotheryear(val)
{
    var other_childs = $("#other_childs").val();
    var otheryear = $("#otheryear").val();
    var no_of_childs = $("#no_of_childs").val();
    var no_of_year = $("#no_of_year").val();

    if (no_of_childs > 0 && otheryear > 0) {
        $("#other_childs").val("");
        $("#no_of_year").val("");
        var per_child = no_of_childs * 750; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (no_of_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (no_of_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = no_of_childs;
        document.getElementById('year').innerHTML = otheryear;

    } else if (other_childs > 0 && otheryear > 0) {
        $("#no_of_childs").val("");
        $("#no_of_year").val("");
        var per_child = other_childs * 1100; //750 to 950 changed by laxmi
        var per_year = per_child * otheryear;
        $("#donation_amount").val(per_year);
        $("#hidamount").html(per_year);
        if (other_childs == 1) {
            $(".plural").hide();
            $(".singular").show();
        } else if (other_childs > 1) {
            $(".plural").show();
            $(".singular").hide();
        }
        if (otheryear == 1) {
            $(".plural_2").hide();
            $(".singular_2").show();
        } else if (otheryear > 1) {
            $(".plural_2").show();
            $(".singular_2").hide();
        }
        document.getElementById('child').innerHTML = other_childs;
        document.getElementById('year').innerHTML = otheryear;
    } else {
        document.getElementById('child').innerHTML = "0";
        document.getElementById('year').innerHTML = "0";
        $("#donation_amount").val("");
        $("#hidamount").html("");
    }

}
// lions clubg code end here


function more_amounts()
{
    $("#last_two1").show();
    $("#last_two2").show();
    $("#last_two3").show();
    $("#last_two4").show();
    // $(".view_mores").hide();
}
//$('#online-offline').hide();
if ($("#International_Donation").prop("checked")) {
    $('#online-offline').hide();
    $('#online-offline-label').hide();
}

function enabel_mode_id(val)
{
    //alert(val);
    if (val == '4') //international donation for payumoney
    {
		$("#cityid").hide();
        $("#taxexcpcertf").hide();
        $("#forgnhlpmodenote").show();
        $("#indhlpmodenote").hide();
        $("#pan_id").hide();
        $(".pan_id").hide();
        $("#phone_id").show()
        $("#mobile_id").hide();
        $("#state_select").hide();
        $("#province_id").show();
        $("#dollar_id").show();
        $("#banks_id").hide();
        $("#convert_amt_id").show();
        $("#currency_code_id").show();
        //$("#form_donation").attr("action", "confirm-ccavenue");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('');
        $('[name=pan]').val('');
        $('[name=mobile]').val('');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").hide();
        $("#tax_exception_certificate").hide();
        $("#pan_mobile_email_help_msg3").show();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").hide();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert') {
            $("#address_dtls_flds").html($("#append1").html());
            $("#append1").html('');
            $("#pan_id").html($("#hpanid").html());
            $("#hpanid").html('');
            $("#pan_mobile_email_help_msg2").hide();
            $("#pan_mobile_email_help_msg").hide();
        }
        $("#receipt_through_offline").prop('checked', true);
        $("#receipt_through_online").prop('checked', false);
        $('#online-offline').hide();
        $('#onlineofflineradio').hide();
        $('#online-offline-label').hide();
        $('#postal_code').attr("placeholder", "Zip Code");
		if($("input[name=donation_url]").val() != 'genesisray'){
			$("#phone").css('border-color', '#FF0000');
		}
		$("#foreign_id_proof").css('border-color', '#FF0000');
        if ($("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
        } else {
            $("#address_dtls_flds").show();
        }
        $("#addressdiv").show();

    } else if (val == '6') { //Indian donation for payumoney
        $("#taxexcpcertf").show();
		$("#cityid").show();
        $("#forgnhlpmodenote").hide();
        $("#indhlpmodenote").show();
        $("#pan_id").show();
        $(".pan_id").show();
        $("#mobile_id").show();
        $("#phone_id").hide();
        $("#banks_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").hide();
        $("#convert_amt_id").hide();
        $("#currency_code_id").hide();
        $("#form_donation").attr("action", "donation-confirmation");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('1');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").show();
        $("#tax_exception_certificate").show();
        $("#pan_mobile_email_help_msg3").hide();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").show();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert' && $("input[name=donation_url]").val() != 'feed-a-million') {
            $(".pan_id").hide();
            if ($("#address_dtls_flds").html() == '') {
                $("#pan_mobile_email_help_msg3").hide();
                $("#pan_mobile_email_help_msg2").show();
                $("#pan_mobile_email_help_msg").hide();
            } else {
                $("#hpanid").html($("#pan_id").html());
                $("#pan_id").html('');
                $("#append1").html($("#address_dtls_flds").html());
                $("#address_dtls_flds").html('');
                $("#pan_mobile_email_help_msg").hide();
                $("#pan_mobile_email_help_msg2").show();
            }

        }
        $("#receipt_through_offline").prop('checked', false);
        $("#receipt_through_online").prop('checked', true);
        $('#online-offline').show();
        $('#onlineofflineradio').show();
        $('#online-offline-label').show();
        $('#postal_code').attr("placeholder", "Pin Code");
        if ($("input[name=receipt_through_online_or_offline]:checked").val() == 1 || $("input[name=donation_url]").val() == 'feed-a-million' || $("input[name=donation_url]").val() == "urban-ladder" || $("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
            $("#addressdiv").hide();
        } else {
            $("#address_dtls_flds").show();
            $("#addressdiv").show();
        }
    } else if (val == '7') { //Indian donation for CCAvenue
        $("#taxexcpcertf").show();
		$("#cityid").show();
        $("#forgnhlpmodenote").hide();
        $("#indhlpmodenote").show();
        $("#pan_id").show();
        $(".pan_id").show();
        $("#mobile_id").show();
        $("#phone_id").hide();
        $("#banks_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").hide();
        $("#convert_amt_id").hide();
        $("#currency_code_id").hide();
        $("#form_donation").attr("action", "donation-confirmation");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('1');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").show();
        $("#tax_exception_certificate").show();
        $("#pan_mobile_email_help_msg3").hide();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").show();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert' && $("input[name=donation_url]").val() != 'feed-a-million') {
            $(".pan_id").hide();
            if ($("#address_dtls_flds").html() == '') {
                $("#pan_mobile_email_help_msg3").hide();
                $("#pan_mobile_email_help_msg2").show();
                $("#pan_mobile_email_help_msg").hide();
            } else {
                $("#hpanid").html($("#pan_id").html());
                $("#pan_id").html('');
                $("#append1").html($("#address_dtls_flds").html());
                $("#address_dtls_flds").html('');
                $("#pan_mobile_email_help_msg").hide();
                $("#pan_mobile_email_help_msg2").show();
            }

        }
        $("#receipt_through_offline").prop('checked', false);
        $("#receipt_through_online").prop('checked', true);
        $('#online-offline').show();
        $('#onlineofflineradio').show();
        $('#online-offline-label').show();
        $('#postal_code').attr("placeholder", "Pin Code");
        if ($("input[name=receipt_through_online_or_offline]:checked").val() == 1 || $("input[name=donation_url]").val() == 'feed-a-million' || $("input[name=donation_url]").val() == "urban-ladder" || $("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
            $("#addressdiv").hide();
        } else {
            $("#address_dtls_flds").show();
            $("#addressdiv").show();
        }
    } else if (val == '8') //international donation for CCAvenue
    {
		$("#cityid").hide();
        $("#taxexcpcertf").hide();
        $("#forgnhlpmodenote").show();
        $("#indhlpmodenote").hide();
        $("#pan_id").hide();
        $(".pan_id").hide();
        $("#phone_id").show()
        $("#mobile_id").hide();
        $("#state_select").hide();
        $("#province_id").show();
        $("#dollar_id").show();
        $("#banks_id").hide();
        $("#convert_amt_id").show();
        $("#currency_code_id").show();
        //$("#form_donation").attr("action", "confirm-ccavenue");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('');
        $('[name=pan]').val('');
        $('[name=mobile]').val('');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").hide();
        $("#tax_exception_certificate").hide();
        $("#pan_mobile_email_help_msg3").show();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").hide();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert') {
            $("#address_dtls_flds").html($("#append1").html());
            $("#append1").html('');
            $("#pan_id").html($("#hpanid").html());
            $("#hpanid").html('');
            $("#pan_mobile_email_help_msg2").hide();
            $("#pan_mobile_email_help_msg").hide();
        }
        $("#receipt_through_offline").prop('checked', true);
        $("#receipt_through_online").prop('checked', false);
        $('#online-offline').hide();
        $('#onlineofflineradio').hide();
        $('#online-offline-label').hide();
        $('#postal_code').attr("placeholder", "Zip Code");
        $("#phone").css('border-color', '#FF0000');
        if ($("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
        } else {
            $("#address_dtls_flds").show();
        }
        $("#addressdiv").show();

    } else if (val == '9') { //Indian donation for Instamojo
        $("#taxexcpcertf").show();
        $("#pan_id").show();
        $(".pan_id").show();
        $("#mobile_id").show();
        $("#phone_id").hide();
        $("#banks_id").hide();
        $("#state_select").show();
        $("#province_id").hide();
        $("#dollar_id").hide();
        $("#convert_amt_id").hide();
        $("#currency_code_id").hide();
        $("#form_donation").attr("action", "donation-confirmation");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('1');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").show();
        $("#tax_exception_certificate").show();
        $("#pan_mobile_email_help_msg3").hide();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").show();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert' && $("input[name=donation_url]").val() != 'feed-a-million') {
            $(".pan_id").hide();
            if ($("#address_dtls_flds").html() == '') {
                $("#pan_mobile_email_help_msg3").hide();
                $("#pan_mobile_email_help_msg2").show();
                $("#pan_mobile_email_help_msg").hide();
            } else {
                $("#hpanid").html($("#pan_id").html());
                $("#pan_id").html('');
                $("#append1").html($("#address_dtls_flds").html());
                $("#address_dtls_flds").html('');
                $("#pan_mobile_email_help_msg").hide();
                $("#pan_mobile_email_help_msg2").show();
            }

        }
        $("#receipt_through_offline").prop('checked', false);
        $("#receipt_through_online").prop('checked', true);
        $('#online-offline').show();
        $('#onlineofflineradio').show();
        $('#online-offline-label').show();
        $('#postal_code').attr("placeholder", "Pin Code");
        if ($("input[name=receipt_through_online_or_offline]:checked").val() == 1 || $("input[name=donation_url]").val() == 'feed-a-million' || $("input[name=donation_url]").val() == 'share-my-lunch-with-school-children' || $("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
            $("#addressdiv").hide();
        } else {
            $("#address_dtls_flds").show();
            $("#addressdiv").show();
        }
    } else if (val == '10') { //international donation for Instamojo
        $("#taxexcpcertf").hide();
        $("#pan_id").hide();
        $(".pan_id").hide();
        $("#phone_id").show()
        $("#mobile_id").hide();
        $("#state_select").hide();
        $("#province_id").show();
        $("#dollar_id").show();
        $("#banks_id").hide();
        $("#convert_amt_id").show();
        $("#currency_code_id").show();
        //$("#form_donation").attr("action", "confirm-ccavenue");
        //alert($("#form_donation").attr("action"));
        $("#country_id > option[value=1]").show();
        $('[name=country_id]').val('');
        $('[name=pan]').val('');
        $('[name=mobile]').val('');
        $(".or-lable1").show();
        $(".or-lable2").show();
        $(".tax-exception").hide();
        $("#tax_exception_certificate").hide();
        $("#pan_mobile_email_help_msg3").show();
        $("#pan_mobile_email_help_msg2").hide();
        $("#pan_mobile_email_help_msg").hide();
        var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
        if (tax_excp_cert == 'tax_excp_cert') {
            $("#address_dtls_flds").html($("#append1").html());
            $("#append1").html('');
            $("#pan_id").html($("#hpanid").html());
            $("#hpanid").html('');
            $("#pan_mobile_email_help_msg2").hide();
            $("#pan_mobile_email_help_msg").hide();
        }
        $("#receipt_through_offline").prop('checked', true);
        $("#receipt_through_online").prop('checked', false);
        $('#online-offline').hide();
        $('#onlineofflineradio').hide();
        $('#online-offline-label').hide();
        $('#postal_code').attr("placeholder", "Zip Code");
        $("#phone").css('border-color', '#FF0000');
        if ($("input[name=donation_url]").val() == 'project-hunger1' || $("input[name=donation_url]").val() == 'project-hunger-2') {
            $("#address_dtls_flds").hide();
        } else {
            $("#address_dtls_flds").show();
        }
        $("#addressdiv").show();

    }

}

$('#other').show();
$('#other').prop('disabled', false);
$('#child').prop('disabled', true);
function enableother(val)
{
    //currency exchange rate begin on change amount
    var currency_code = $('#currency_code').val();
    //currency_exchange_rate(currency_code);
    //currency exchange rate end on change amount
    if (val != 'other')
    {
        //capex
        var donationsamt = val;
        var noofplates = parseInt(donationsamt / 115);
        $("#meal_plates").val(noofplates);
        $("#meal_amt").val(donationsamt);
        //end
        donationamtchk();
        var mid_day_meal_plate_chk = $("input[name=mid_day_meal_plate_chk]:checked").val();
        var mid_day_meal_plate_chked = $("input[name=mid_day_meal_plate_chked]:checked").val();
        var no_of_plate = parseInt(donationsamt / 1500);
        $("#mid_day_meal_plates").val(no_of_plate);
        var mid_day_meal_amt = parseInt(no_of_plate * 115);
        $("#mid_day_meal_amt").val(mid_day_meal_amt);

		var pagepathname = window.location.pathname;

		//senitisation_kit_chk checked
        var senitisation_kit_chk = $("input[name=senitisation_kit_chk]:checked").val();
        var senitisation_kit_chked = $("input[name=senitisation_kit_chked]:checked").val();
        if($("input[name=donation_url]").val() == 'donate-to-midday-meal-programme' || $("input[name=donation_url]").val() == 'make-a-donation-on-special-occasion'){
			var no_of_kits = parseInt(donationsamt / 1500);
		}else  if(pagepathname == '/donate-family-happiness-kits'){
			var no_of_kits = parseInt(donationsamt / 1200);
		}else if(pagepathname == '/donate-happiness-boxes'){
			var no_of_kits = parseInt(donationsamt / 550);
		}else{
			//var no_of_kits = parseInt(donationsamt / 550);
			var no_of_kits = parseInt(donationsamt / 1500);
		}
        $("#senitisation_kits").val(no_of_kits);
		if(pagepathname == '/donate-family-happiness-kits' || pagepathname == '/donate-happiness-boxes'){
			var senitisation_kit_amt = parseInt(no_of_kits * 150);
		}else{
			var senitisation_kit_amt = parseInt(no_of_kits * 100);
		}
        $("#senitisation_kit_amt").val(senitisation_kit_amt);
		//end

        if (mid_day_meal_plate_chk == 1) {
            var total_donation_amt = (parseInt(donationsamt) + parseInt(mid_day_meal_amt));
            document.getElementById('donation_amount').value = total_donation_amt;
            document.getElementById('hidamount').innerHTML = total_donation_amt;
        } else if(senitisation_kit_chk == 1){
			var total_donation_amt = (parseInt(donationsamt) + parseInt(senitisation_kit_amt));
            document.getElementById('donation_amount').value = total_donation_amt;
            document.getElementById('hidamount').innerHTML = total_donation_amt;
		} else if (mid_day_meal_plate_chked == 1) {
            $("#mid_day_meal_plates").val(no_of_plate);
            var mid_day_meal_amt = parseInt(no_of_plate * 115);
            $("#mid_day_meal_amt").val(mid_day_meal_amt);
            var total_donation_amt = (parseInt(donationsamt) + parseInt(mid_day_meal_amt));
            document.getElementById('donation_amount').value = total_donation_amt;
            document.getElementById('hidamount').innerHTML = total_donation_amt;
        } else {
            document.getElementById('donation_amount').value = val;
            document.getElementById('hidamount').innerHTML = val;
        }
        $('.removecont').hide();
        $('#other').val('');
        $('#other_meals_amount').val('');
        $('#child').val('');
        $('#other').hide();
        $('#other_meals_amount').hide();
        $('#other_meals_amount-error').hide();
        $('#child').prop('disabled', true);
        $('#amt_error_msg').hide();
        $("#donation_amt_error").hide();
        $('#donationamt_error_while_filling').hide();
    }
    else
    {
        //document.getElementById('amount').value = '';
        document.getElementById('hidamount').innerHTML = '';
        //document.getElementById('other').disabled = false;
        document.getElementById('donation_amount').removeAttribute('readonly', '');
        $("#mid_day_meal_plates").val(1);
        $("#mid_day_meal_amt").val(115);
		var pagepathname = window.location.pathname; // Returns path only (/path/example.html)
		if(pagepathname == '/donate-family-happiness-kits' || pagepathname == '/donate-happiness-boxes'){
			$("#senitisation_kit_amt").val(150);
		} else {
			$("#senitisation_kit_amt").val(100);
		}
        $('#donation_amount').val('');
        $('#other').val('');
        $('#child').val('');
        $('#other').prop('disabled', false);
        $('#child').prop('disabled', true);
        $('#other').show();
        $('#other_meals_amount').show();
        $('.removecont').show();
    }
}

$('#hidoptioname').hide();
$('#otherlable').hide();
function enableothersingledonation(val, optionname)
{
    if (val != 'other')
    {
        //alert(optionname);
        document.getElementById('donation_amount').value = val;
        document.getElementById('hidamount').innerHTML = val;
        document.getElementById('hidoptioname').innerHTML = 'By your contribution ' + optionname;
        $('#hidoptioname').show();
        $('.removecont').hide();
        $('#other').val('');
        $('#child').val('');
        $('#other').hide();
        $('#otherlable').show();
        $('#child').prop('disabled', true);
        $("#donation_amt_error").hide();
    }
    else
    {
        document.getElementById('hidamount').innerHTML = '';
        document.getElementById('donation_amount').removeAttribute('readonly', '')
        document.getElementById('hidoptioname').innerHTML = '';
        $('#hidoptioname').hide();
        $('#donation_amount').val('');
        $('#other').val('');
        $('#child').val('');
        $('#other').prop('disabled', false);
        $('#child').prop('disabled', true);
        $('#other').show();
        $('#otherlable').hide();
        $('.removecont').show();
    }
}

function enableperchild(val)
{
    $('#child').prop('disabled', false);
    document.getElementById('hidamount').innerHTML = '';
    $('#child').val('');
    $('#other').hide();
}

$('#mode_id_note_error_while_filling').hide();
$('#mode_id_error_while_filling').hide();
function chkcitizenshipsel() {
    var citizenradioValue = $("input[name='mode_id']:checked").val();
    if (citizenradioValue) {
        $('#mode_id_error_while_filling').hide();
        $('#mode_id_note_error_while_filling').hide();
    } else {
        $('#mode_id_error_while_filling').show();
        $('#mode_id_note_error_while_filling').show();
    }
}

function changeamt(val)
{
    //currency exchange rate begin on change amount
    var currency_code = $('#currency_code').val();
    //currency_exchange_rate(currency_code);
    //currency exchange rate end on change amount
    donationamtchk();

	//sanitisation kit
	var sanitisation_kit_chk = $("input[name=senitisation_kit_chk]:checked").val();
	//end sanitisation kit

    var mid_day_meal_plate_chk = $("input[name=mid_day_meal_plate_chk]:checked").val();
    if (mid_day_meal_plate_chk == 1) {
        var mid_day_meal_amt = $("#mid_day_meal_amt").val();
        if (mid_day_meal_amt == "") {
            $("#mid_day_meal_amt").val(115);
            $("#mid_day_meal_plates").val(1);
            mid_day_meal_amt = 115;
        }
        var donationsamt = val;
		if(donationsamt == ''){
			donationsamt = 0;
		}
        var total_donation_amt = (parseInt(donationsamt) + parseInt(mid_day_meal_amt));
        //alert(total_donation_amt);
        document.getElementById('donation_amount').value = total_donation_amt;
        document.getElementById('hidamount').innerHTML = total_donation_amt;
        document.getElementById('amount').value = val;
    } else if(sanitisation_kit_chk == 1){
		var senitisation_kit_amt = $("#senitisation_kit_amt").val();
        if (senitisation_kit_amt == "") {
            var pagepathname = window.location.pathname;
			if(pagepathname == '/donate-family-happiness-kits' || pagepathname == '/donate-happiness-boxes'){
				$("#senitisation_kit_amt").val(150);
				$("#senitisation_kits").val(1);
				senitisation_kit_amt = 150;
			}else{
				$("#senitisation_kit_amt").val(100);
				$("#senitisation_kits").val(1);
				senitisation_kit_amt = 100;
			}
        }
        var donationsamt = val;
		if(donationsamt == ''){
			donationsamt = 0;
		}
        var total_donation_amt = (parseInt(donationsamt) + parseInt(senitisation_kit_amt));
        //alert(donationsamt);
		//alert(senitisation_kit_amt);
        //alert(total_donation_amt);
        document.getElementById('donation_amount').value = total_donation_amt;
        document.getElementById('hidamount').innerHTML = total_donation_amt;
        document.getElementById('amount').value = val;
	} else {
        document.getElementById('amount').value = val;
        document.getElementById('hidamount').innerHTML = val;
        document.getElementById('donation_amount').value = val;
        document.getElementById('other').value = val;
        $("#senitisation_kit_amt").val('');
        $("#mid_day_meal_amt").val('');
        $("#mid_day_meal_plates").val('');
    }
    $('#amt_error_msg').hide();
    $('#donationamt_error_while_filling').hide();
}

function changeval(val)
{
    var child_optoins = document.getElementById('child_optoins').value;
    var childper = val;
    var totalamount = child_optoins * childper;
    $("#meal_plates").val(childper);
    $("#meal_amt").val(totalamount);
    document.getElementById('child_amount').value = totalamount;
    document.getElementById('hidamount').innerHTML = totalamount;
    document.getElementById('donation_amount').value = totalamount;
}

function Is_update(val) {
    $("#step3").css("display", "block");
    $.post("ajax/donation_confirm", $("#frmDonationJSP").serialize(), function(data) {
        document.frmDonationJSP.submit();
        return true;
    });
}

function taxexceptioncertf(val) {
    if (val == 'tax_excp_cert') {
        $(".pan_id").show();
        $("#pan").css('border-color', '#FF0000');
    } else {
        var donationamount = $("#donation_amount").val();
        if (donationamount > 2000) {
            $(".pan_id").show();
            $("#pan").css('border-color', '#FF0000');
        } else {
            $(".pan_id").hide();
            $("#pan").css('border-color', '#FFF');
        }

    }
}

if($("input[name=donation_url]").val() == 'joy-of-giving'){
	$(".corporate_name").css('border-color', '#FF0000');
}
if($("input[name=donation_url]").val() == 'optum'){
	$(".optumofficelocation").css('border-color', '#FF0000');
}
if($("input[name=donation_url]").val() == 'lionsclub'){
	$("#lionsclub_member_id").css('border-color', '#FF0000');
}
if($("input[name=donation_url]").val() != 'genesisray'){
$(".cityborder").css('border-color', '#FF0000');
}
$(".email-id").css('border-color', '#FF0000');
$(".ohrid").css('border-color', '#FF0000');
$(".emailfld").css('border-color', '#FF0000');
if ($("input[name=donation_url]").val() != 'daan-ustaav-with-amazon-cares') {
    $("#mobile").css('border-color', '#FF0000');
}
if ($("input[name=donation_url]").val() != 'support-effected-workers-by-covid-19' && $("input[name=donation_url]").val() != 'amway' && $("input[name=donation_url]").val() != 'checkmate-covid' && $("input[name=donation_url]").val() != 'donate-cooked-meals' && $("input[name=donation_url]").val() != 'donate-to-akshayapatra') {
	$("#pan").css('border-color', '#FF0000');
}
$("#first_name").css('border-color', '#FF0000');
$("#donation_amount").css('border-color', '#FF0000');
$("#address_dtls_flds").hide();
$("#addressdiv").hide();
function receiptcheck(val) {
    //alert(val);
    if ($("input[name=donation_url]").val() == 'wire-transfer-cheque-dd') {
        $(".email-id").css('border-color', '#FF0000');
        $("#mobile").css('border-color', '#FF0000');
        $("#phone").css('border-color', '#FF0000');
        $("#province").css('border-color', '#FF0000');
        $("#pan").css('border-color', '#FF0000');
        $("#first_name").css('border-color', '#FF0000');
        $("#address").css('border-color', '#FF0000');
        $("#postal_code").css('border-color', '#FF0000');
        $("#city").css('border-color', '#FF0000');
        $("#city").attr("placeholder", "City *");
        $("#address").attr("placeholder", "Address *");
        $("#postal_code").attr("placeholder", "Pin Code *");
        $("#province").attr("placeholder", "Province *");
        $('#receipt_through_online_or_offline_error').hide();
        $("#address_dtls_flds").show();
        $("#addressdiv").show();
    } else if (val == 1) {
        $(".email-id").css('border-color', '#FF0000');
        $("#mobile").css('border-color', '#FF0000');
        $("#pan").css('border-color', '#FF0000');
        $("#first_name").css('border-color', '#FF0000');
        $("#address").css('border-color', '#FFF');
        $("#postal_code").css('border-color', '#FFF');
        $("#city").css('border-color', '#FFF');
        $("#city").attr("placeholder", "City");
        $("#address").attr("placeholder", "Address");
        $("#postal_code").attr("placeholder", "Pin Code");
        $('#receipt_through_online_or_offline_error').hide();
        $("#phone").css('border-color', '#FF0000');
        $("#province").css('border-color', '#FFF');
        $("#address_dtls_flds").hide();
        $("#address_dtls_flds").hide();
        $("#addressdiv").hide();
    } else {
        $(".email-id").css('border-color', '#FF0000');
        $("#mobile").css('border-color', '#FF0000');
        $("#phone").css('border-color', '#FF0000');
        $("#province").css('border-color', '#FF0000');
        $("#pan").css('border-color', '#FF0000');
        $("#first_name").css('border-color', '#FF0000');
        $("#address").css('border-color', '#FF0000');
        $("#postal_code").css('border-color', '#FF0000');
        $("#city").css('border-color', '#FF0000');
        $("#city").attr("placeholder", "City *");
        $("#address").attr("placeholder", "Address *");
        $("#postal_code").attr("placeholder", "Pin Code *");
        $("#province").attr("placeholder", "Province *");
        $('#receipt_through_online_or_offline_error').hide();
        $("#address_dtls_flds").show();
        $("#address_dtls_flds").show();
        $("#addressdiv").show();
    }
}

$("#wire_trasfer_form").hide();
$("#bankdetails").hide();
function check(val) {
    //alert(val);
    /*if (val == "Need your cheque pick up service") {
     $("#cheque1").show();
     $("#post").hide();
     }else if (val == "No pick up service, I will send it by post") {
     $("#cheque1").show();
     $("#post").hide();
     }else {
     $("#cheque1").hide();
     $("#post").hide();

     }*/
    if (val == "Need your cheque pick up service") {
        $("#dd_chq_form").show();
        $("#wire_trasfer_form").hide();
        $("#cheque1").show();
        $("#post").hide();
        $("#need_cheque").show();
        $("#need_post").hide();
        $(".option_1").show();
        $(".option_2").hide();
		$("#bankdetails").hide();
        $("#chequeddwiretitle").html("Donate Through A Cheque Dd");
    } else if (val == "No pick up service, I will send it by post") {
        $("#dd_chq_form").show();
        $("#wire_trasfer_form").hide();
        $("#cheque1").show();
        $("#post").hide();
        $("#need_cheque").hide();
        $("#need_post").show();
        $(".option_1").hide();
        $(".option_2").show();
		$("#bankdetails").hide();
        $("#chequeddwiretitle").html("Donate Through A Cheque Dd");
    } else if (val == "Wire transfer") {
        $("#dd_chq_form").hide();
        $("#wire_trasfer_form").show();
        $("#chequeddwiretitle").html("Wire transfer");
        $("#address_dtls_flds").show();
        $("#addressdiv").show();
        $("#form_donation").attr("action", "wire-transfer-details");
		$("#bankdetails").hide();
    }  else if(val == "Bank Details"){
		$("#dd_chq_form").hide();
        $("#wire_trasfer_form").hide();
        $("#chequeddwiretitle").html("Bank Details");
        $("#bankdetails").show();
	} else {
        $("#cheque1").hide();
        $("#post").hide();
        $("#need_cheque").hide();
        $("#need_post").hide();
        $(".option_1").hide();
        $(".option_2").hide();

    }
}

///google locations code begins here
var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'short_name',
    postal_code: 'short_name'
};

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = new google.maps.LatLng(
                    position.coords.latitude, position.coords.longitude);
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}
// goolge locations code end here


///===========================================================================
//donation amount error or min limit of donation amount error display
$("#donation_amt_error").hide();
$(document).on('blur', '.limit_donation_amt', function() {
    var donation_amount_val = $('#other').val();
	if($("input[name=donation_url]").val() == 'onlinedonations' || $("input[name=donation_url]").val() == 'donate-in-honor-of-the-one-you-admire' || $("input[name=donation_url]").val() == 'donate-in-memory-of-someone-you-love' || $("input[name=donation_url]").val() == 'donate-for-a-special-occasion' || $("input[name=donation_url]").val() == 'sponsor-a-school-for-a-year' || $("input[name=donation_url]").val() == 'donate-to-anganwadi-feeding' || $("input[name=donation_url]").val() == 'make-a-donation-on-special-occasion'){
		if (donation_amount_val != '' && donation_amount_val <= 99) {
			$("#donation_amt_error").show();
			$("#other").focus();
			$("#other").css('border-color', '#FF0000');
		} else {
			$("#other").css('border-color', '#ccc');
			$("#donation_amt_error").hide();
		}
	}else{
		if (donation_amount_val != '' && donation_amount_val <= 99) {
			$("#donation_amt_error").show();
			$("#other").focus();
			$("#other").css('border-color', '#FF0000');
		} else {
			$("#other").css('border-color', '#ccc');
			$("#donation_amt_error").hide();
		}
	}

});
//end

$(document).on('blur', '.limit_other_meals_amount', function() {
    var donation_amount_val = $('#other_meals_amount').val();
    if ($("input[name=donation_url]").val() == 'growwithsadya') {
        if (donation_amount_val != '' && donation_amount_val <= 99) {
            $("#donation_amt_error").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#ccc');
            $("#donation_amt_error").hide();
        }
    } else if($("input[name=donation_url]").val() == 'preparing-for-boards' || $("input[name=donation_url]").val() == 'covid-relief-services' || $("input[name=donation_url]").val() == 'donate-for-covid-relief' || $("input[name=donation_url]").val() == 'donate-happiness-boxes' || $("input[name=donation_url]").val() == 'tripura' || $("input[name=donation_url]").val() =='world-food-day'){
		 if (donation_amount_val != '' && donation_amount_val <= 99) {
            $("#donation_amt_error").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#ccc');
            $("#donation_amt_error").hide();
        }
	} else if($("input[name=donation_url]").val() == 'motilal-oswal'){
		 if (donation_amount_val != '' && donation_amount_val < 99) {
            $("#donation_amt_error").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#ccc');
            $("#donation_amt_error").hide();
        }
	} else if($("input[name=donation_url]").val() == 'feedtheneedy'){
		 if (donation_amount_val != '' && donation_amount_val < 499) {
            $("#donation_amt_error").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#ccc');
            $("#donation_amt_error").hide();
        }
	} else if($("input[name=donation_url]").val() == 'donate-cooked-meals'){
		 if (donation_amount_val != '' && donation_amount_val < 1) {
            $("#donation_amt_error").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#ccc');
            $("#donation_amt_error").hide();
        }
	} else {
        if (donation_amount_val != '' && donation_amount_val <= 99) {
			$myemail = $('#email').val();
			if ($myemail == 'biradar.laxmi02@gmail.com' || $myemail == 'kavitha.br@akshayapatra.org') {
				$("#donation_amt_error").hide();
			} else {
				$("#donation_amt_error").show();
				$("#other_meals_amount").focus();
				$("#other_meals_amount").css('border-color', '#FF0000');
			}
        } else {
            $("#other_meals_amount").css('border-color', '#ccc');
            $("#donation_amt_error").hide();
        }
    }

});
//end

//feed-a-million limit of donation amount code
$("#donationamterror").hide();
$(document).on('keyup', '.amtfeedamillion', function() {
    var donation_amount_val = $('#other_meals_amount').val();
    if ($("input[name=donation_url]").val() == 'i-share-my-lunch' || $("input[name=donation_url]").val() == 'bosch') {
        if (donation_amount_val != '' && donation_amount_val < 100) {
            $("#donationamterror").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#FFF');
            $("#donationamterror").hide();
        }
    } else {
        if (donation_amount_val != '' && donation_amount_val < 100) {
            $("#donationamterror").show();
            $("#other_meals_amount").focus();
            $("#other_meals_amount").css('border-color', '#FF0000');
        } else {
            $("#other_meals_amount").css('border-color', '#FFF');
            $("#donationamterror").hide();
        }
    }

});
//end feed-a-million limit of donation amount code

//Auto fill the form with details Fetching from Pan No and Mobile No OR Pan No and Email ID Code Begins here
function onlineOffline() {
    var online = $("input[name=receipt_through_online_or_offline]:checked").val();
    if (online == 1 || online == 0) {
        $('#receipt_through_online_or_offline_error').hide();
    } else {
        $('#receipt_through_online_or_offline_error').show();
    }
}
//as per new requirement fectch data based on pan no.
$(document).on('keyup', '.pan-card-num', function() {
    onlineOffline();
    var mobile = $('#mobile').val();
    var pan = $('#pan').val();
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var email = $('.email-id').val();
    if ($(this).val().length == 10 && mobile.length == 10) {
        donor_details_to_autofill(1); //IsStep =2
    } else if ($(this).val().length == 10 && emailReg.test(email) == true) {
        donor_details_to_autofill(2); //IsStep =2
    }
});

$(document).on('keyup', '.mobile-num', function() {
    var pan = $('#pan').val();
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var email = $('.email-id').val();
    var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
    if (tax_excp_cert == 'tax_excp_cert') {
        if ($(this).val().length == 10 && emailReg.test(email) == true) {
            donor_details_to_autofill(4); //IsStep =1
        }
    } else {
        if ($(this).val().length == 10 && pan.length == 10) {
            donor_details_to_autofill(1); //IsStep =1
        }
    }
});

$(document).on('keyup', '.email-id', function() {
    onlineOffline();
    var pan = $('#pan').val();
    var phone = $('#phone').val();
    var mobile = $('#mobile').val();
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var email = this.value;
    var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
    if (tax_excp_cert == 'tax_excp_cert') {
        if (mobile.length == 10 && emailReg.test(email) == true) {
            donor_details_to_autofill(4); //IsStep =1
        }
    } else {
        if (emailReg.test(email) == true && pan.length == 10) {
            donor_details_to_autofill(2);
        } else if (emailReg.test(email) == true && phone.length == 10) {
            donor_details_to_autofill(3);
        }
    }
});

//fetch details by phone num for international user
$(document).on('keyup', '.phone-num', function() {
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var email = $('.email-id').val();
    if (emailReg.test(email) == true && $(this).val().length == 10) {
        donor_details_to_autofill(3);
    }
});

//IsStep value is 1 the data fetching from pan and mobile condtion and IsStep value is 2 the data fetching from pan and email condtion
function donor_details_to_autofill(IsStep) {
    var pan = $('#pan').val();
    pan = encodeURIComponent(pan).replace(/!/g, '%21');
    var phone = $('#phone').val();
    var mobile = $('#mobile').val();
    var email = $('.email-id').val();
    var email = encodeURIComponent(email);
    var value1 = '';
    var value2 = '';
    if (IsStep == 1) {
        value1 = pan;
        value2 = mobile;
    } else if (IsStep == 2) {
        value1 = pan;
        value2 = email;
    } else if (IsStep == 3) {
        value1 = phone;
        value2 = email;
    } else if (IsStep == 4) {
        value1 = mobile;
        value2 = email;
    }
    var first_name = $('#first_name').val();
    var tax_excp_cert = $("input[name=tax_excp_cert]:checked").val();
    if (first_name == "") {
        if (value1 != "" && value2 != "") {
            $.getJSON('ajax/getdonordetails/' + IsStep + '/' + value1 + '/' + value2, function(data) {
                if (data != "") {
                    if (tax_excp_cert == 'tax_excp_cert') {
                        $('#first_name').val(data.first_name);
                        $('#last_name').val(data.last_name);
                        $(".email-id").val(data.email);
                        $("#how_did_you_hear_us").val(data.how_did_you_hear_us);
                        $('#user_error_msg').hide();
                    } else {
                        if (data.country_id == 1) {
                            $("#province_id").hide();
                            $("#state_select").show();
                        } else {
                            $("#state_select").hide();
                            $("#province_id").show();
                        }
                        $('#first_name').val(data.first_name);
                        $('#mobile').val(data.mobile);
                        $('#email').val(data.email);
                        $('#phone').val(data.phone);
                        $('#last_name').val(data.last_name);
                        $("#address").val(data.address);
                        $("#pan").val(data.pan);
                        $(".email-id").val(data.email);
                        $("#city").val(data.city);
                        $("#country_id").val(data.country_id);
                        $("#state_id").val(data.state_id);
                        $("#postal_code").val(data.postal_code);
                        $("#province").val(data.province);
                        //$(".areaa").val(data.area);
                        $("#how_did_you_hear_us").val(data.how_did_you_hear_us);
                        $('#user_error_msg').hide();
                    }
                } else {
                    //alert('The detail you enter does not match with the one on our record. Please fill all the details');
                    $('#user_error_msg').show();
                    setTimeout(function() {
                        $('#user_error_msg').hide();
                    }, 10000);
                    $('#first_name').val('');
                    $('#address').val('');
                    $('#city').val('');
                    //$('#country_id').val('');
                    $('#state_id').val('');
                    $('#province').val('');
                    $('#area').val('');
                    $('#how_did_you_hear_us').val('');
                }
            });
        }
    }

}
//Auto fill the form with details Fetching from Pan No and Mobile No OR Pan No and Email ID Code end here
///===========================================================================

//get currency exchange rate code begins here
$(document).on('change', '.currencychange', function () {
 var currency_code = $('#currency_code').val();
 //alert(currency_code);
 currency_exchange_rate(currency_code);
 });

 function currency_exchange_rate(currency_code) {
 var currency_code = currency_code;
 var donation_amount = $('#donation_amount').val();
 $.getJSON('ajax/getcurrencyrates/' + currency_code + '/' + donation_amount, function (data) {
 if (data != "") {
 $("#convert_amt").val(data);
 } else {
 $("#convert_amt").val('');
 }
 });

 }
//get currency exchange rate code end here

