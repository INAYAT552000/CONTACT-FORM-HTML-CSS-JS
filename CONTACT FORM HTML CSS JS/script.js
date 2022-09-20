function sendEmail() {
  Email.send({
    Username: "username", //Enter Email Here
    Password: "password", //Enter Password Here
    To: "them@website.com", //Enter Fwd Email Here
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry  ",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone Number: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value,
  })
  alert('DETALS SEND THANKYOU');
}
