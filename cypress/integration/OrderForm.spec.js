describe ('Main Page View', () => {

    beforeEach(() => {
              cy.intercept(
                {
                    method: "GET",
                    url: "http://localhost:3001/api/v1/orders"
                }, 
                {
                    status: 201,
                    body: { 
                        orders: [
                        {
                        "id": 1,
                        "name": "Lizet",
                        "ingredients": [
                        "beans",
                        "lettuce",
                        "carnitas",
                        "queso fresco",
                        "jalapeno"
                        ]
                        } ] 
                    }
                })
                
            cy.intercept(
                {
                    method: 'POST',
                    url: "http://localhost:3001/api/v1/orders"
                },
                {
                    status: 201,
                    body: { 
                        orders: [
                        {
                        "id": 1,
                        "name": "Luly",
                        "ingredients": [
                        "beans",
                        "steak",
                        "cilantro"
                        ]
                        } ] 
                    }
                })
                
        cy.visit('http://localhost:3000');
      }
      
      );
    
    
    it('Should be able to visit the main page view', () => {
        cy.visit('http://localhost:3000')
            .contains('Burrito Builder')

    });

    it('Should be able to see a form upon page load', () => {
        cy.get('form')
        cy.get('button').should('have.class', 'ingredientsBtns')
        cy.get('button').should('have.class', 'submit-btn')
    });

    it('Should be able to see customer order information ', () => {
        cy.get('#Lizet').contains("Customer Name: Lizet")
        cy.get('#ingredientNames').contains('beanslettucecarnitasqueso frescojalapeno')
    });

    it('Should be able to fill out the form ', () => {
        cy.get('form')
        cy.get('#nameInput').type('Luly')
        cy.get('#beans').click()
        cy.get('#steak').click()
        cy.get('#cilantro').click()
        cy.get('#submitBtn').should('have.class', 'submit-btn').click()
        cy.get('#Luly').contains("Customer Name: Luly")

    });
    


    
});
