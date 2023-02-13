 
import { homePage } from "../../support/pageObjects/HomePage";
import { utils } from "../../support/Utilities/Utils";

const {
  DEFAULT_USER_EMAIL: email,
  DEFAULT_USER_PASSWORD: password,
} = Cypress.env();

beforeEach(() => {

  cy.session("login", () => {
    cy.login(email,password);
    cy.url().should("include", "/login");
    utils.getElement(homePage.loggedInUser).should('have.text','Abhishek')
  
  })

  cy.fixture('example').then(function(data){
    // "this" is still the test context object
    this.data = data
  })
  
  
})

/**
 *  Verify the home page and logged in user
 */
describe('Verify home page',()=>{
  it("Verify home page elements",()=>{
    cy.visit('/dashboard')
    utils.getElement(homePage.spendkeyLogo).should("be.visible")
    utils.getElement(homePage.loggedInUser).should('have.text','Abhishek')
    cy.wait(5000);
  
  })

  /**
   * Verify the left sidebar menu options
   */
  it("Verify the sidebar menu options and text are visible",()=>{
    cy.visit('/dashboard')
    cy.reload()
    utils.getElement(homePage.preReports).should("be.visible").contains(" Pre Reports ")
    utils.getElement(homePage.postReports).should("be.visible").contains(" Post Reports ")

  })

  /** 
   * Verify per reports options 
   */
  it("Verify dropdown element text",function(){
    cy.visit('/dashboard')
    cy.reload()
    utils.clickOn(homePage.preReports);
    var array = utils.getTextOfAllElements(homePage.preReportListElements);
    cy.wrap(array).should('deep.equal',this.data.preReportList);
  })

  /**
   * Verify post reports options
   */





});



