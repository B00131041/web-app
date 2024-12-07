import chai from 'chai';           
import chaiHttp from 'chai-http';  
import app from '../server';      

chai.use(chaiHttp);
const { expect } = chai;

describe('API Tests', () => {
    it('should return a greeting when a name is provided', (done) => {
        chai.request(app)
            .post('/api')
            .send({ input: 'John' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message', 'Hello John');
                done();
            });
    });

    it('should return an error when no name is provided', (done) => {
        chai.request(app)
            .post('/api')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('message', 'I need any name');
                done();
            });
    });
});
