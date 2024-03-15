const form = document.getElementById("request-demo-form");
const toastError = document.getElementById("toast-danger");
const toastSuccess = document.getElementById("toast-success");
const dateYear = document.getElementById("date-year");
dateYear.innerHTML = new Date().getFullYear();

const handleSubmit = async (event) => {
  event.preventDefault();
  const fullNameInput = document.getElementById("full_name");
  const emailInput = document.getElementById("email");
  const companyInput = document.getElementById("company");
  const phoneInput = document.getElementById("phone");
  const additionalInput = document.getElementById("additional");

  const data = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    company: companyInput.value,
    phone: phoneInput.value,
    additional: additionalInput.value,
  };
  try {
    event.submitter.setAttribute("disabled", true);
    const res = await fetch(
      "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZiMDYzNDA0MzQ1MjZiNTUzMDUxMzci_pc",
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );
    event.submitter.removeAttribute("disabled");
    form.reset();
    const toast = bootstrap.Toast.getOrCreateInstance(toastSuccess);
    toast.show();
  } catch (error) {
    event.submitter.removeAttribute("disabled");
    const toast = bootstrap.Toast.getOrCreateInstance(toastError);
    toast.show();
  }
};

form.addEventListener("submit", handleSubmit);
