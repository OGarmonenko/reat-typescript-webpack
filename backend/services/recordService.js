const fs = require('fs');
const constants = require('./../constants/constants');

class recordService {
  readRecords() {
      return JSON.parse(fs.readFileSync(constants.DATA_PATH, (err, data) => (data)));
  }
  async addRecord(data) {
    try {
      const prev = JSON.parse(fs.readFileSync(constants.DATA_PATH, (err, data) => (data)));
      fs.writeFileSync(constants.DATA_PATH, JSON.stringify([...prev, data]));
      return ({success:true});
    } catch (e) {
     throw e;
    }
  }
  async deleteRecord(id) {
    try {
      const prev = JSON.parse(fs.readFileSync(constants.DATA_PATH, (err, data) => (data)));
      const newArr = prev.filter(n => n.id !== Number(id));
      fs.writeFileSync(constants.DATA_PATH, JSON.stringify(newArr));
      return ({success:true});
    } catch (e) {
      throw e;
    }
  }
  async updateUserData(id, data) {
    try {
      const prev = JSON.parse(fs.readFileSync(constants.DATA_PATH, (err, data) => (data)));
      const newArr = prev.filter(n => n.id !== Number(id));
      fs.writeFileSync(constants.DATA_PATH, JSON.stringify([...newArr, data]));
      return ({success:true});
    } catch (e) {
      throw e;
    }
  }
}
module.exports = new recordService();