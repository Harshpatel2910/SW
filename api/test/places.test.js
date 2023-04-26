// // update places
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const {app} = require('../index');
// const expect = chai.expect;
// const should = chai.should();
// chai.use(chaiHttp);

//   describe("place",()=>{

   
//     describe('POST /places', () => {
//       it('should create a new place', (done) => {
//         const newPlace = {
//           // owner: '64467618fd7fa327f3838a5b', // replace with the ID of the login person
//           title: 'TajHotel',
//           address: 'Mumbai',
//           city: 'Mumbai',
//           state: 'MH',
//           country: 'India',
//           photos: [],
//           description: 'Good',
//           perks: ['wifi', 'parking','pets'],
//           extraInfo: 'Nothing',
//           checkIn: '22:55',
//           checkOut: '12:55',
//           maxGuests: 0,
//           price: 1000,
//           status:0,
//         };
  
//         chai.request(app)
//           .post('/places')
//           .send(newPlace)
//           .end((err, res) => {
//             res.should.have.status(200);
//             res.body.should.be.a('object');
//             res.body.should.have.property('owner').eql('64467618fd7fa327f3838a5b');
//             res.body.should.have.property('title').eql('Taj Hotel');
//             res.body.should.have.property('address').eql('Mumbai');
//             res.body.should.have.property('city').eql('Mumbai');
//             res.body.should.have.property('state').eql('MH');
//             res.body.should.have.property('country').eql('India');
//             res.body.should.have.property('photos').eql([]);
//             res.body.should.have.property('description').eql('Good');
//             res.body.should.have.property('perks').eql(['wifi', 'parking','pets']);
//             res.body.should.have.property('extraInfo').eql('Nothing');
//             res.body.should.have.property('checkIn').eql('22:55');
//             res.body.should.have.property('checkOut').eql('12:55');
//             res.body.should.have.property('maxGuests').eql(0);
//             res.body.should.have.property('price').eql(1000);
//             res.body.should.have.property('status').eql(0);
//             done();
//           });
//       });
//     });
//     // describe("POST /places",()=>{
//     //   it("it should enter put places",(done)=>{
//     //       chai
//     //       .request(app)
//     //       .put("/places")
//     //       .send({
//     //         id,
//     //         title,
//     //         address,
//     //         city,
//     //         state,
//     //         country,
//     //         addedPhotos,
//     //         description,
//     //         perks,
//     //         extraInfo,
//     //         checkIn,
//     //         checkOut,
//     //         maxGuests,
//     //         price,
//     //         status,
//     //       })
//     //       .end((err,res)=>{
//     //           res.statusCode.should.equal(200);
//     //           res.body.should.be.a('object');
//     //           done();
//     //       })
//     //     })
//     //   })
//     // describe("POST /places",()=>{
//     //   it("it should get places",(done)=>{
//     //       chai
//     //       .request(app)
//     //       .get("/places")
//     //       .send({
//     //        city,
//     //        state,
//     //        country,
//     //       })
//     //       .end((err,res)=>{
//     //           res.statusCode.should.equal(200);
//     //           res.body.should.be.a('object');
//     //           done();
//     //       })
//     //     })
//     //   })
      
//     })
//   // })