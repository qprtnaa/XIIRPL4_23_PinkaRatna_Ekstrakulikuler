const Ekskul = require('../models/Ekskul')

module.exports = {

  //get all ekskuls
  index: async (req, res) => {
    try {
      const ekskuls = await Ekskul.find()
      if (ekskuls.length > 0) {
        res.status(200).json({
          status: true,
          data: ekskuls,
          method: req.method,
          url: req.url
        })

      }
      else {
        res.json({
          status: false,
          message: "Data Masih Kosong"
        })
      }

    } catch (error) {
      res.status(400).json({ success: false })
    }

  },

  //get a ekskul 1
  show: async (req, res) => {
    try {
      const ekskul = await Ekskul.findById(req.params.id,)
      res.json({
        status: true,
        data: ekskul,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat"
      })

    } catch (error) {
      res.status(400).json({ success: false })
    }
  },

  //get ekskul
  store: async (req, res) => {
    try {
      const ekskul = await Ekskul.create(req.body)
      res.status(200).json({
        status: true,
        data: ekskul,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambah"
      })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  },

  update: async (req, res) => {
    try {
      const ekskul = await Ekskul.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true
      })
      res.json({
        status: true,
        data: ekskul,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
      })

    } catch (error) {
      res.status(400).json({ success: false })
    }

  },

  delete: async (req, res) => {
    try {
      await Ekskul.findByIdAndDelete(req.params.id)
      res.json({
        status: true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      })

    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
}