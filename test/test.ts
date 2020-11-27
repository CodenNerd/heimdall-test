import chai from 'chai';
import chaiHttp from 'chai-http'; 
import app from "../app";
import testData from './testData';

const {expect} = chai;
chai.use(chaiHttp);

describe('Test 1 - validator function', () => {
  describe('POST /validate - core functionalities', () => {
    it("should return list of missing inputs when there's any", async () => {
        let res = await chai.request(app)
                .post('/api/v1/validate')
                .send(testData.validatorMissingInputData)
            expect(res.status).to.equal(200)
            expect(res.body.response[0]).to.equal(testData.validatorMissingInputResp)            

    });
    it("should return 'valid' when there's no missing input", async () => {
        let res = await chai.request(app)
                .post('/api/v1/validate')
                .send(testData.validatorValidInputData)
            expect(res.status).to.equal(200)
            expect(res.body.response).to.equal(testData.validatorValidInputResp)
    });
  });

  describe('POST /validate - input validations', () => {
    it("should return error when 'data' property is missing", async () => {
        let res = await chai.request(app)
                .post('/api/v1/validate')
                .send(testData.validatorMissingPayloadData)
            expect(res.status).to.equal(400)
            expect(res.body.response).to.equal(testData.validatorMissingPayloadResp)            

    });
    it("should return error when wrong data format is passed", async () => {
        let res = await chai.request(app)
                .post('/api/v1/validate')
                .send(testData.validatorWrongFormatData)
            expect(res.status).to.equal(400)
            expect(res.body.response).to.equal(testData.validatorWrongFormatResp)
    });
  });
});

describe('Test 2 - object item remover function', () => {
    describe('PUT /item - core functionalities', () => {
      it("should return the rest of the data when item is removed", async () => {
          let res = await chai.request(app)
                  .put('/api/v1/item')
                  .send(testData.itemRemoveData)
              expect(res.status).to.equal(200)
              expect(res.body.response).not.to.have.property(testData.itemRemoveNotResp) 
              expect(res.body.response).to.have.property(testData.itemRemoveResp[0])            
              expect(res.body.response).to.have.property(testData.itemRemoveResp[1])            
              expect(res.body.response).to.have.property(testData.itemRemoveResp[2])            
      });
      it("should return 'not found' when item is not a 'data' property", async () => {
            let res = await chai.request(app)
            .put('/api/v1/item')
            .send(testData.itemNotFoundData)
            expect(res.status).to.equal(200)
            expect(res.body.response).to.equal(testData.itemNotFoundResp)
      });
    });
  
    describe('PUT /item - input validations', () => {
        it("should return bad request error when req body is wrong datatype", async () => {
            let res = await chai.request(app)
                    .put('/api/v1/item')
                    .send(testData.itemWrongTypeData)
                expect(res.status).to.equal(400)
                expect(res.body.response).to.equal(testData.itemWrongTypeResp)            
        });
        it("should return bad request error when req body is missing a required property", async () => {
              let res = await chai.request(app)
              .put('/api/v1/item')
              .send(testData.itemMissingPropData)
              expect(res.status).to.equal(400)
              expect(res.body.response).to.equal(testData.itemMissingPropResp)
        });
    });
  });


  describe('Test 3 - Aladdin travels', () => {
    describe('POST /aladdin - core functionalities', () => {
      it("should return lowest start index aladdin can complete his travel from", async () => {
          let res = await chai.request(app)
                  .post('/api/v1/aladdin')
                  .send(testData.aladdinLowestIndexData)
              expect(res.status).to.equal(200)
              expect(res.body.response).to.equal(testData.aladdinLowestIndexResp)           
      });
      it("should return lowest start index aladdin can complete his travel from (even when payload is changed)", async () => {
        let res = await chai.request(app)
                .post('/api/v1/aladdin')
                .send(testData.aladdinLowestIndexData_2)
            expect(res.status).to.equal(200)
            expect(res.body.response).to.equal(testData.aladdinLowestIndexResp_2)           
      });
      it("should return -1 if Aladdin's mission is impossible", async () => {
        let res = await chai.request(app)
                .post('/api/v1/aladdin')
                .send(testData.aladdinMissionImpossibleData)
            expect(res.status).to.equal(200)
            expect(res.body.response).to.equal(testData.aladdinMissionImpossibleResp)           
      });
    });
  
    describe('POST /aladdin - input validations', () => {
        it("should return bad request error when req body is wrong datatype", async () => {
            let res = await chai.request(app)
                    .post('/api/v1/aladdin')
                    .send(testData.aladdinWrongTypeData)
                expect(res.status).to.equal(400)
                expect(res.body.response).to.equal(testData.aladdinWrongTypeResp)            
        });
        it("should return bad request error when req body is missing a required property", async () => {
              let res = await chai.request(app)
              .post('/api/v1/aladdin')
              .send(testData.aladdinMissingPropData)
              expect(res.status).to.equal(400)
              expect(res.body.response).to.equal(testData.aladdinMissingPropResp)
        });
        it("should return bad request error when magic or dist is not length n", async () => {
            let res = await chai.request(app)
                    .post('/api/v1/aladdin')
                    .send(testData.aladdinIncoherentPropsData)
                expect(res.status).to.equal(400)
                expect(res.body.response).to.equal(testData.aladdinIncoherentPropsResp)            
        });
    });
  });
  