
import { homePage } from "../../support/pageObjects/HomePage";
import { loginPage } from "../../support/pageObjects/LoginPage";
import { utils } from "../../support/Utilities/Utils";

const {
  DEFAULT_USER_EMAIL: email,
  DEFAULT_USER_PASSWORD: password,
} = Cypress.env();

describe("Verify Login", () => {
  it("Verify login with valid email and password", () => {
    cy.visit('/login');
    utils.clickOn(loginPage.emailAddressField);
    utils.clearAndType(loginPage.emailAddressField, email);
    utils.clickOn(loginPage.passwordField);
    utils.clearAndType(loginPage.passwordField, password);
    utils.clickOn(loginPage.loginButton);
    utils.getElement(homePage.loggedInUser).should('have.text','Abhishek')
    cy.wait(3000);
    cy.screenshot('LoginPage')
  });
});


describe("Verify Error Messages", () => {

  it("Verify error message if user leaves Email and Password field blank and click on sign in", () => {
    
  cy.visit('/login');
    utils.clearTextField(loginPage.emailAddressField);
    utils.clearTextField(loginPage.passwordField);
    utils.clickOn(loginPage.loginButton);
    utils
      .getElement(loginPage.emailAlertMessage)
      .should(
        "contain",
        "Please enter valid email! "
      );
  });
  it(
    "Verify error message if user enters Email but leaves Password field blank and click on sign in",
    () => {
      
  cy.visit('/login');
      utils.clearAndType(loginPage.emailAddressField, "abhishek@cloudaeon.net");
      utils.clearTextField(loginPage.passwordField);

      utils.clickOn(loginPage.loginButton);
      utils
        .getElement(loginPage.passwordAlertMessage)
        .should("contain", "This is required field!");
    }
  );
  it("Please enter a valid email address.", () => {
    cy.visit('/login');
    utils.clearTextField(loginPage.emailAddressField);
    utils.clearAndType(loginPage.passwordField, "abhishek@cloudaeon.net");

    utils.clickOn(loginPage.loginButton);
    utils
      .getElement(loginPage.emailAlertMessage)
      .should("contain", "Please enter valid email!");
  });
  it("Login Attempt with valid email address and invalid password", () => {
    cy.visit('/login');
    utils.clearAndType(loginPage.emailAddressField, "abhishek@cloudaeon.net");
    utils.clearAndType(loginPage.passwordField, "Test@@123");

    utils.clickOn(loginPage.loginButton);
    
    utils
      .getElement(loginPage.alertMessage)
      .should("contain", "Invalid email or password !");
  });
});

describe("Validate elements on login page", () => {

  it('Verify Page Title-Postive', function () {
    cy.visit('/login');
    // Assert page title- positive
    cy.title().should('be.eq', 'Login - SpendKey')

  })

  // Assert heading
  it("Verify Login Form heading", () => {
    cy.visit('/login');
    utils
      .getElement(loginPage.loginPageHeading)
      .contains(" Log in to Spendkey ");
  });
  // Assert Email Field is visible and placeholder
  it("Verify Email address field is visible", () => {
    cy.visit('/login');
    utils
      .getElement(loginPage.emailAddressField)
      .should("be.visible");
  });
  // Assert Email Field is visible and placeholder
  it("Verify Password field is visible", () => {
    cy.visit('/login');
    utils
      .getElement(loginPage.passwordField)
      .should("be.visible");
  });
  // Assert label of Login Button
  it("Verify Log In button is visible and it's label", () => {
    cy.visit('/login');
    utils
      .getElement(loginPage.loginButton)
      .should("be.visible", "contain", "Log in");
  });
});




