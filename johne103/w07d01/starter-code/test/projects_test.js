const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');
const api = supertest (app);
const Project = require('../models/project');
const User = require('../models/user');



//Projects Index
describe("GET /projects", () => {
  before(done => {
    Project.collection.drop();
    User.collection.drop();

    User.create({
      name: "Johne",
      email: "johne@email.com",
      github: "https://github.com/Johne103/WDI-Project2"

    }, (err, user)=>{
      Project.create({
          title: "Conquiztadors",
          github: 'https://github.com/Johne103/WDI-Project2',
          url: 'https://conquiztadors.herokuapp.com/',
          users: ["5820ae9dba23730d5b62e93d"]
        }, done);
      });
  });

    it("should return a 200 response", (done) => {
    api.get('/projects')
    .set('Accept', 'application/json')
    .expect(200,done);
  });


it("should return an array", (done) => {
      api.get('/projects')
      .set('Accept', 'application/json')
      .expect(200, done);

  });

  it('should return correctly formed data', (done)=> {
    api.get('/projects')
    .set('Accept', 'application/json')
    .end((err, res)=> {
      expect(res.body[0]).to.have.property('title');
      expect(res.body[0]).to.have.property('github');
      expect(res.body[0]).to.have.property('url');
      expect(res.body[0]).to.have.property('users');
      done();
    });
  });
});
  //
  // //Projects/:id Index
  describe("GET /projects/:id", () => {
    let projectId = null;

    before(done => {
      Project.collection.drop();
        Project.create({
            title: "Conquiztadors",
            github: 'https://github.com/Johne103/WDI-Project2',
            url: 'https://conquiztadors.herokuapp.com/',
            users: ["5820ae9dba23730d5b62e93d"]
          }, (err, project) => {
            projectId = project._id;
            done();
          });
      });

      it("should return a 200 response", (done) => {
      api.get(`/projects/${projectId}`)
      .set('Accept', 'application/json')
      .expect(200,done);
    });


  it('should return an object containing fields title, github, url, and users', (done)=> {

    api.get(`/projects/${projectId}`)
    .set('Accept', 'application/json')
    .send({
      title: "Conquiztadors",
      github: 'https://github.com/Johne103/WDI-Project2',
      url: 'https://conquiztadors.herokuapp.com/',
      users: ["5820ae9dba23730d5b62e93d"],

    })
    .end ((err, res)=> {
      expect(res.body).to.be.an('object');
      done();
    });
  });
});


describe('POST /projects', () => {
  beforeEach (done => {
    Project.collection.drop();
    done();
  });

  it ('should return a 201 response', (done) => {
    api.post('/projects')
    .set('Accept', 'application/json')
    .send({
      title: "Conquiztadors",
      github: 'https://github.com/Johne103/WDI-Project2',
      url: 'https://conquiztadors.herokuapp.com/',
      users: ["5820ae9dba23730d5b62e93d"],
    })
    .expect(201, done);
  });
});

it('should return an object', (done)=> {

  api.post('/projects')
  .set('Accept', 'application/json')
  .send({
    title: "Conquiztadors",
    github: 'https://github.com/Johne103/WDI-Project2',
    url: 'https://conquiztadors.herokuapp.com/',
    users: ["5820ae9dba23730d5b62e93e"],

  })
  .end ((err, res)=> {
    expect(res.body).to.be.an('object');
    done();
  });
});
  //Projects create
//   describe("POST /projects", () => {
//     beforeEach (done => {
//       Project.collection.drop();
//       User.collection.drop();
//       done();
//     });
//
//     it ('should return a 201 response', (done) => {
//       api.post('/projects')
//       .set('Accept', 'application/json')
//       .send({
//         name: "Johne",
//         email: "johne@email.com",
//         github: "https://github.com/Johne103/WDI-Project2"
//
//       }, (err, user) => {
//         .send({
//             title: '"Conquiztadors"',
//             github: 'https://github.com/Johne103/WDI-Project2',
//             url: 'https://conquiztadors.herokuapp.com/',
//             users: [user._id]
//           }, done);
//         });
//     });
//       .expect(200,done);
//     });
// });
