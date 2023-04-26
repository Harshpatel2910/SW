// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const app = require('../index');
// const expect = chai.expect;
// const should = chai.should();
// chai.use(chaiHttp);


// describe("Booking",()=>{
//     describe("POST /bookings",()=>{
//         it("User should book a place",(done)=>{
//             chai
//             .request(app)
//             .post("/bookings")
//             .send({
//                 place:
//                 user:"1234"
//                 checkIn:"",
//                 checkOut:"",
//                 numOfGuests:"",
//                 name:"",
//                 phone:"",
//                 price:""
//             })
//             .end((err,res)=>{
//                 res.statusCode.should.equal(200);
//                 res.body.should.be.a('object');
//                 done();
//             })
//         })
//     })

//     describe("GET /bookings",()=>{
//         it("User should view bookings",(done)=>{
//             chai
//             .request(app)
//             .get("/bookings")
//             .send({
//                 token:"",
//                 id:""
//             })
//             .end((err,res)=>{
//                 res.statusCode.should.equal(200);
//                 res.body.should.be.a('object');
//                 done();
//             })
//         })
//     })

//     describe("GET /bookings/:id",()=>{
//         it("User should view bookings id-wise",(done)=>{
//             chai
//             .request(app)
//             .get("/bookings/:id")
//             .send({
//                 id:""
//             })
//             .end((err,res)=>{
//                 res.statusCode.should.equal(200);
//                 res.body.should.be.a('object');
//                 done();
//             })
//         })
//     })

//     describe("DELETE /bookings/:id",()=>{
//         it("User should delete bookings id-wise",(done)=>{
//             chai
//             .request(app)
//             .delete("/bookings/:id")
//             .send({
//                 id:""
//             })
//             .end((err,res)=>{
//                 res.statusCode.should.equal(200);
//                 res.body.should.be.a('object');
//                 done();
//             })
//         })
//     })
// })


// //   // User should view bookings
// //   app.get("/bookings", (req, res) => {
// //     const { token } = req.cookies;
// //     jwt.verify(token, jwtSecret, {}, async (err, userData) => {
// //       const { id } = userData;
// //       // populate is used to get entire object referenced by calling model
// //       res.json(await Booking.find({ user: id }).populate("place"));
// //     });
// //   });
  
// //   // User show view bookings accoring to id
// //   app.get("/bookings/:id", async (req, res) => {
// //     const { id } = req.params;
// //     res.json(await Booking.findById(id).populate("place"));
// //   });
  
// //   // User show delete bookings according to id
// //   app.delete("/deletebooking/:id", async (req, res) => {
// //     try {
// //       res.json(await Booking.findByIdAndDelete(req.params.id));
// //     } catch (err) {
// //       res.send("Error");
// //     }
// //   });