const recordService = require('./../services/recordService');
const constants = require('./../constants/constants');

class recordController {
  async getRecords(req, res) {
    try {
     const data = await recordService.readRecords();
     return res.json(data);
    } catch (e) {
      res.status(constants.STATUS_CODE.SERVER_ERROR).json(e.message);
    }
  };

  async addRecord(req, res) {
    try {
      const data = await recordService.addRecord(req.body);
      return res.json(data);
    } catch (e) {
      res.status(constants.STATUS_CODE.SERVER_ERROR).json(e.message);
    }
  };

  async removeRecord(req, res) {
    try {
      const data = await recordService.deleteRecord(req.params.id);
      return res.json(data);
    } catch (e) {
      res.status(constants.STATUS_CODE.SERVER_ERROR).json(e.message);
    }
  };
  async updateUserData (req, res) {
    try {
      const data = await recordService.updateUserData(req.params.id, req.body);
      return res.json(data);
    } catch (e) {
      res.status(constants.STATUS_CODE.SERVER_ERROR).json(e.message);
    }
  }
}

module.exports = new recordController();