const recordService = require('./../services/recordService');

class recordController {
  async getRecords(req, res) {
    try {
     const data = await recordService.readRecords();
     return res.json(data)
    } catch (e) {
      res.status(500).json(e.message);
    }
  };

  async addRecord(req, res) {
    try {
      const data = await recordService.addRecord(req.body);
      return res.json(data)
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async removeRecord(req, res) {
    console.log(req.params.id, 'id')

    try {
      const data = await recordService.deleteRecord(req.params.id);
      return res.json(data)
    } catch (e) {
      res.status(500).json(e.message);
    }
  };
}

module.exports = new recordController();