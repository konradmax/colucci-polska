



/*=================================================================== Validate ===*/
let recaptchaCalled = false;


function showValidate (input) {
    $(input).next('.tooltip-validate').addClass('show-tooltip');
    $(input).next().next('.symbol-validate').css('display','block');
}

function hideValidate (input) {
    $(input).next('.tooltip-validate').removeClass('show-tooltip');
    $(input).next().next('.symbol-validate').css('display','none');
}

function validateForm() {
    var check = true;

    if($('#name').val().trim() == ''){
        showValidate($('#name'));
        check=false;
    }
    else{
        hideValidate($('#name'));
    }

    if($('#msg').val().trim() == ''){
        showValidate($('#msg'));
        check=false;
    }
    else{
        hideValidate($('#msg'));
    }
    

    if($('#email').val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        showValidate($('#email'));
        check=false;
    }
    else{
        hideValidate($('#email'));
    }


    return check && recaptchaCalled;
}

function recaptcha() {
    recaptchaCalled = true;
}

function sendEmail(data) {
    console.log('nowy');
    $.ajax({
        url: 'api/email',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        data: `data=${JSON.stringify(data)}`,
        processData: false,
        success: function( data, textStatus, jQxhr ){
            console.log(data);
            alert("Wiadomość wysłana!");
            $("#contact-form")[0].reset();
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
            alert("Coś poszło nie tak..");
        }
    });
}

$('#contact-form').on('submit',function(){
    const formValid = validateForm();

    if (formValid) {
      const data = {
          name: $('#contact-form input[name=name]').val(),
          email: $('#contact-form input[name=email]').val(),
          telephone: $('#contact-form input[name=number]').val(),
          subject: $('#contact-form input[name=tittle]').val(),
          message: $('#contact-form textarea[name=msg]').val()
      }

      sendEmail(data);
    }   

    return false;
});


$('.input-form').each(function(){
    $(this).focus(function(){
         hideValidate(this);
    });
});
