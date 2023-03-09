function generatePassword() {
    const passwordLength = document.getElementById("length").value;
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numberType = "0123456789";
    const symboleType = "!@#$%^&*()?/";
    let password = "";
    let characterSet = "";
    if (document.getElementById("uppercase").checked) {
      characterSet += upperCase;
    }
    if (document.getElementById("lowercase").checked) {
      characterSet += lowerCase;
    }
    if (document.getElementById("numbers").checked) {
      characterSet += numberType;
    }
    if (document.getElementById("symbols").checked) {
      characterSet += symboleType;
    }
    for (let i = 0; i < passwordLength; i++) {
      password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    document.getElementById("password__result").value = password;
    document.getElementById("copyIcon").addEventListener("click", () => {
      document.getElementById("password__result").select();
      document.execCommand("copy");
      document.querySelector(".copied").style.display = "inline";
      setTimeout(() => {
        document.querySelector(".copied").style.display = "none";
      }, 2000);
    });
  }
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", function() {
      if (
        document.getElementById("uppercase").checked ||
        document.getElementById("lowercase").checked ||
        document.getElementById("numbers").checked ||
        document.getElementById("symbols").checked
      ) {
        document.getElementById("btn").disabled = false;
      } else {
        document.getElementById("btn").disabled = true;
      }
    });
  });
  document.getElementById("length").addEventListener("input", function() {
    document.getElementById("result").value = document.getElementById("length").value;
  });