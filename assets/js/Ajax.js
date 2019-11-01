$(document).ready( function() {
    $('#addUserForm').submit(function() {
        let u = $("#username").val();
        let p = $("#password").val();
        $.ajax({
                url: '/addUserFormSubmit',
                type:'POST',
                
        })
    })
});
