// ///<reference types ="cypress"/>

// describe.only('Post request in cypress',()=>{

//   const datajson = require('../../fixtures/ApiBody')

//     let baseUrl = 'https://reqres.in/api/users/'

//     it('Create users with post request',()=>{
//         cy.api({
//             method : 'POST',
//             url : baseUrl,
//             failOnStatusCode:false,
//             body:
//             {
//               "name": datajson.name,
//               "job": datajson.job
//           }
//         }).then((resp)=>{ 
//               expect(resp.status).to.eq(201)
//               expect(resp.body.name).to.eq(datajson.name)
//         }).then((resp)=>{

//               const userId = resp.body.id 
//               cy.log("user id is: " + userId)
//               //2. Call i.e get user
//               cy.api({
//               method : 'GET',
//               url : baseUrl + userId,
//               failOnStatusCode:false

//         }).then((resp)=>{
//             cy.log(resp.status)
//             expect(resp.name).to.eq(datajson.name)
//             expect(resp.job).to.eq(datajson.job)
//         })
//         })
//     })

// })
