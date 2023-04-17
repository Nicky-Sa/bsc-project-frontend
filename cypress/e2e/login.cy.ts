// @ts-nocheck
describe("login to the dashboard", () => {
  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit("http://localhost:3009/auth")
  })
let getText = ""
  it("allows users to login", () => {
    cy.findByTestId("input-username").type("testUser@gmail.com")
    cy.findByTestId("input-password").type("XhjSpBS6zsKgPZ$")
    cy.findByTestId("login-btn").click()
    cy.get(".Toastify__toast-body > :nth-child(2)").should("have.text", "ورود با موفقیت انجام شد.").end()
  })
})
export {}
