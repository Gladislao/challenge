import {user1, user2} from "../fixtures/data"

describe('Register account', () => {
  beforeEach(() => {
    cy.visit('https://devmalta.bitso.com/register')
  })

  it('Creates account from Mexico', () => {
    cy.findByLabelText("Country of residence").click( {force: true} );
    cy.findByText("Mexico").click();
    cy.findByRole("textbox", { name: "Email" }).type(user1.email);
    cy.findByLabelText("Create a password").type(user1.password);
    cy.findByLabelText("Confirm your password").type(user1.password);
    cy.findByRole("checkbox", { name: "I accept Bitso International's Terms and Conditions"}).click({force: true});
    cy.findByRole("checkbox", { name: "I want to receive Bitso news"}).click({force: true});
    cy.findByRole("checkbox", { name: "I accept Bitso's Privacy Policy"}).click({force: true});
    cy.findByRole("button", {name: "Start"}).click();

    cy.get(".modal-content").should("contain", user1.email);
  })

  it.only('Creates account from Argentina', () => {
    cy.findByLabelText("Country of residence").click( {force: true} );
    cy.findByText("Argentina").click();
    cy.findByRole("textbox", { name: "Email" }).type(user2.email);
    cy.findByLabelText("Create a password").type(user2.password);
    cy.findByLabelText("Confirm your password").type(user2.password);
    cy.findByRole("checkbox", { name: "I accept Bitso International's Terms and Conditions"}).click({force: true});
    cy.findByRole("checkbox", { name: "I want to receive Bitso news"}).click({force: true});
    cy.findByRole("checkbox", { name: "I accept Bitso's Privacy Policy"}).click({force: true});
    cy.findByRole("button", {name: "Start"}).click();

    cy.get(".modal-content").should("contain", user2.email);
  })
})