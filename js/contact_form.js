// Trinity Apex contact form handler
// UNIT 3 Implementation (June 6, 2025)
$(function() {
    // Initialize form validation
    $('#contactForm input, #contactForm textarea').jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // Additional form error handling here
        },
        submitSuccess: function($form, event) {
            event.preventDefault();
            
            // Get form values
            var name = $("input#name").val();
            var email = $("input#email").val();
            var company = $("input#company").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();
            var notRobot = $("input#not-robot").is(":checked");
            var website = $("input#website").val(); // Honeypot field
            
            // Validate required fields
            if (!name || !email || !subject || !message || !notRobot) {
                $('#success').html("<div class='alert alert-danger'>");
                $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                    .append("</button>");
                $('#success > .alert-danger').append("<strong>Please fill out all required fields.</strong>");
                $('#success > .alert-danger').append('</div>');
                return;
            }
            
            // Disable button to prevent multiple submissions
            $("#sendMessageButton").prop("disabled", true);
            
            // Prepare form data
            var formData = {
                name: name,
                email: email,
                company: company || '',
                subject: subject,
                message: message,
                website: website // Honeypot field
            };
            
            // The actual API Gateway endpoint from AWS CloudFormation
            var apiEndpoint = 'https://7nidg8yryi.execute-api.us-west-2.amazonaws.com/prod/contact';
            
            // Submit form data to AWS API Gateway
            $.ajax({
                url: apiEndpoint,
                type: "POST",
                data: JSON.stringify(formData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                cache: false,
                success: function(response) {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Thanks for reaching out! We'll be in touch soon.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    
                    // Clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function(xhr, status, error) {
                    // Error message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    
                    console.error("Error:", error);
                },
                complete: function() {
                    // Re-enable button after 5 seconds
                    setTimeout(function() {
                        $("#sendMessageButton").prop("disabled", false);
                    }, 5000);
                }
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    // When a button with data-dismiss="alert" is clicked, close the parent alert box
    $(document).on("click", ".alert .close", function(e) {
        $(this).parent().parent().fadeOut(500);
    });
});

// Form reset
$('#contactForm').on('reset', function() {
    $('#success').html('');
    $("input#not-robot").prop('checked', false);
});