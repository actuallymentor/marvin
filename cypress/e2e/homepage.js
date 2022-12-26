
context( "Frontpage tests", () => {


    it( 'Can view', () => {

		// Visit code claim page
		cy.visit( `/` )

		// Page renders
        cy.contains( `Home` )

	} )


} )
