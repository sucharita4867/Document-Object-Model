document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log('btn clicked')
    const pageTitleEliment = document.getElementById("page-title");
    // console.log(pageTitleEliment)
    pageTitleEliment.innerText = "Update Page Title Text";
  });

const btnText = document.getElementById("btn-login");
addEventListener("click", function () {
  // console.log(btnText)
  const userText = document.getElementById("user-info");
  userText.innerText = "User Logged In Successfully";
});
