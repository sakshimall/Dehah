let submitContactDetails = document.getElementById("submitContactDetails");
submitContactDetails.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let selectedService = document.getElementById("selectedService").value;
  let message = document.getElementById("message").value;
  let finalMessage = `Hello Dehah Industries, %0a I'm reaching out to you to discuss about service for ${selectedService} sector.
    %0a %0a Name: ${name} %0a Email Address: ${email}  %0a Message: ${message} %0a %0a Thank you!`;
  if (name !== "" && email !== "" && message !== "" && selectedService !== "") {
    window.open(`https://wa.me/+918941026113/?text=${finalMessage}`, "_blank");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("selectedService").value =
      "Consultancy for Pulp and Paper";
    document.getElementById("message").value = "";
  }
  return;
});
