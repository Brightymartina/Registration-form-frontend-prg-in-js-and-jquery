function validateName(nameValue) {
    if (nameValue.value.length < 5) {
        $("#" + nameValue.id).focus();
        $("#" + nameValue.id).addClass("validateElement");
        $("#p1").text("Enter your full name");
    } else {
        $("#" + nameValue.id).removeClass("validateElement");
    }
}

function emailValidation(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regex.test(email.value) == false) {
        $("#" + email.id).focus();
        $("#" + email.id).addClass("validateElement");
        $("#p2").text("Enter correct email format");
    } else {
        $("#" + email.id).removeClass("validateElement");
    }
}
function validateName1(nameValue) {
    if (nameValue.value.length < 5) {
        $("#" + nameValue.id).focus();
        $("#" + nameValue.id).addClass("validateElement");
        $("#p3").text("Your password must be at least 5 characters long");
    } else {
        $("#" + nameValue.id).removeClass("validateElement");
    }
}

function blockFutureDate(date) {
    var a = date.value.split("-");
    var dateValue = new Date(a[0], a[2] - 1, a[1])
    if (new Date() < dateValue) {
        $("#" + date.id).focus();
        $("#" + date.id).addClass("validateElement");
        $("#" + date.id).val("");
        $("#p4").text("Dont enter future date");
    }
    else {
        $("#" + date.id).removeClass("validateElement");
    }
}

function validateForm() {
    var validateHtml = $(".validateElement").val();
    if (validateHtml)
        return false;

    return true;
}

function checkElements() {
    if ($("#firstName").val() && $("#email").val() && $("#password").val() && $("#birthDate").val() && $("#country").val() && !$(".validateElement").val()) {
        $("input:submit").removeAttr('disabled')
        return true;
    } else {
        return false;
    }
}



