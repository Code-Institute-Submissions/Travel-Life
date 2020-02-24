function emailEnquiry(contactForm) {
    emailjs.send("gmail", "template_Lgqmwfm7", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
    return false;
}