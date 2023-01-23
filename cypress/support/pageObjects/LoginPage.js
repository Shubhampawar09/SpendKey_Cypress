class LoginPage {
  loginPageHeading = ".txt-font-family-sign-in";
  emailAddressField = "input.form-control:last-child";
  passwordField = "//input[@placeholder='Password']";
  loginButton = "button.sendkey-primary";
  passwordAlertMessage = "form > div.form-group.pt-2 > div > div";
  emailAlertMessage = "div.invalid-feedback:nth-child(3)";
  alertMessage = "app-alert > div > span";
}

export const loginPage = new LoginPage();
