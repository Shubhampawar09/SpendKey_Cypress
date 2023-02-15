// ///<reference types ="cypress"/>
// import { utils } from "../../support/utilities/utils";

// before(()=>{
//     cy.fixture("ErrorMessages").then(function (message) {
//         this.message = message
//     })
// })

// describe('Validate Get Request',()=>{

//     it('Verify the response status 200',()=>{

//         cy.api({
//             method : 'GET',
//             url : 'https://reqres.in/api/users?page=2',
//         }).then((resp)=>{
//             expect(resp.status).is.equal(200)
//         })
//     })

//     it('Verify the response body',()=>{

//         cy.api({
//             method : 'GET',
//             url : 'https://reqres.in/api/users?page=1',

//         }).then((resp)=>{
//             expect(resp.body.data[0]).to.have.all.keys(
//                 'id',
//                 'email',
//                 'first_name',
//                 'last_name',
//                 'avatar'
//             )
//         })
//     })

//     it('Verify response using id',()=>{

//         cy.api({
//             method: 'GET',
//             url : 'https://reqres.in/api/users/2',

//         }).then((resp)=>{
//             expect(resp.status).to.eq(200)
//             expect(resp.body.data.email).to.eq('janet.weaver@reqres.in')
//             expect(resp.body.data.first_name).to.eq('Janet')
//             expect(resp.body.data.last_name).to.eq('Weaver')
//             expect(resp.body.support.url).to.eq('https://reqres.in/#support-heading')
//             expect(resp.body.support.text).to.eq('To keep ReqRes free, contributions towards server costs are appreciated!')
//         })
//     })

//     it('Verify error message with invalid user', function (){
//         cy.api({
//             method: 'GET',
//             url: 'https://reqres.in/api/users/23', 

//         }).then((resp)=>{
//             var response = utils.stringfyTheElement(resp.status);
//             var responseGet = utils.replaceQuotation(response);
//             expect(responseGet).to.eq(this.message.UserNotFound);
//         })

//     })

//     //Validate the existing user and login
//     describe.only('verify existing user and login',()=>{

//         it('validate the existing user',()=>{

//             cy.api({
//                 method: 'GET',
//                 url: 'https://reqres.in/api/users/1'
//             }).then((resp)=>{
//                 expect(resp.status).to.eq(200)
//                 expect(resp.body.data).has.property('id',1)
//             }).then((resp)=>{
//                 cy.api({
//                     method: 'POST',
//                     url: 'https://reqres.in/api/login',
//                     failOnStatusCode:false, 
//                     body:
//                         {
//                             "email": "george.bluth@reqres.in",
//                             "password": "cityslicka"
//                         }
//                 }).then((resp)=>{
//                     expect(resp.status).to.eq(200)
//                     expect(resp.body.token).to.eq('QpwL5tke4Pnpja7X1')

//                 })

//             })

//         })

//     })

// })