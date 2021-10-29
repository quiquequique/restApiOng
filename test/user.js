
let chai = require('chai'); 
let chaiHttp = require('chai-http'); 
let server = require('../app');
let {User} = require('../models'); 
//assertion style 
chai.should(); 
chai.use(chaiHttp); 
let newUserTest = { 
    firstName: "Luca", 
    lastName: "Nastar", 
    email: "luca-02@hotmail.com", 
    password: '123456',
    photo: "https://a-static.besthdwallpaper.com/asus-rog-mobile-papel-pintado-16711_L.jpg" 
};
let valueChaNGE = {
    firstName: 'LucAAA'
}
let token; 
let idUser; 
// parent block
describe("User", () => {
    describe('POST /users/auth/register',()=>{
        it('It should post a user', (done)=>{
            chai.request(server)
                .post('/users/auth/register')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(newUserTest)
                .end((err,response)=>{
                    response.should.have.status(201); 
                done(); 
                }); 
        })
        it('It should login a user', (done)=>{
            chai.request(server)
                .post('/users/auth/login')
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(newUserTest)
                .end((err,response)=>{
                    token = response.body.accessToken;
                    response.should.have.status(202); 
                    response.body.should.be.a('Object'); 
                done(); 
                }); 
        })
        it('It should give information from user', (done)=>{
            chai.request(server)
                .get('/users/auth/me')
                .set('authorization', token)
                .end((err,response)=>{
                    idUser = response.body.id;
                    response.should.have.status(200); 
                    response.body.should.be.a('Object'); 
                done(); 
                }); 
        })
        it('It should give all users information', (done)=>{
            chai.request(server)
                .get('/users')
                .set('authorization', token)
                .end((err,response)=>{
                    response.should.have.status(200); 
                    response.body.should.be.a('Array'); 
                done(); 
                }); 
        })
        it('It should change a value/s data from user', (done)=>{
            chai.request(server)
                .patch('/users/2')
                .set('authorization', token)
                .set('content-type', 'application/x-www-form-urlencoded')
                .send(valueChaNGE)
                .end((err,response)=>{
                    console.log(response.body.users)
                    response.should.have.status(200); 
                    response.body.should.be.a('Object'); 
                done(); 
                }); 
        })
        it('It should delete a user', (done)=>{
            chai.request(server)
                .delete('/users/38')
                .set('authorization', token)
                .end((err,response)=>{
                    console.log(response.body.users)
                    response.should.have.status(200); 
                    response.body.should.be.a('Object'); 
                done(); 
                }); 
        }) 
    });

    /*         User.destroy({
            where: {
                id: idUser
            }
         */

      // traigo los datos guardando el id 
      // borro

});

    /*
    
    afterEach(done => {

    });
  
    describe("/get users", () => {
      it("should fetch all users successfully", done => {
        chai
          .request(app)
          .set("Authentication", token)
          .get("/users")
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("users");
            done();
          });
      });
    });


    
    */
















      /*

 describe('User Api',()=>{

    describe('GET /users/',()=>{
        it('It should get all the users', (done)=>{
            chai.request(server)
                .get('/users/')
                .end((err,response)=>{
                    response.should.have.status(403); 
                    response.body.should.be.a('Object'); 
                done(); 
                }); 
        })
        it('It should get all the users', (done)=>{
            chai.request(server)
                .get('/users/')
                .end((err,response)=>{
                    response.should.have.status(403); 
                    response.body.should.be.a('Object'); 
                done(); 
                }); 
        })
  
        it('It should not get all the users', (done)=>{
            chai.request(server)
                .get('/users/')
                .set({ Authorization: `Bearer ${token}` })
                .end((err,response)=>{
                    response.should.have.status(404); 
                    response.body.should.be.a('array'); 
                done(); 
                }); 
        })        
        

    })

})
        */ 