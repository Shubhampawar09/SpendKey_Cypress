describe('Update the user using put request in cypress',()=>{

    it('update user by id',()=>{

        cy.api({
            method: 'PUT',
            url : 'https://reqres.in/api/users/',
            body:
                {
                    "name": "pankaj",
                    "job": "tester"
                }
        }).then((resp)=>{
            expect(resp.status).to.eq(200)
        })
        
    })

})