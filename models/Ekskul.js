const mongoose = require('mongoose')

const EkskulSchema = new mongoose.Schema({
    extracurricular: {
        type: String,
        requirred: [true, 'Silahkan isi jenis ekskul'],
        unique: true
    },

    supervisor: {
        type: String,
        requirred: [true, 'Silahkan isi pengampu ekskul'],
    },

    schedule: {
        type: String,
        requirred: [true, 'Silahkan isi waktu pelaksanaan ekskul'],
    },

    room: {
        type: String,
        requirred: [true, 'Silahkan isi ruangan ekskul'],
    },

    participants: {
        type: String,
        requirred: [true, 'Silahkan isi ruangan ekskul'],
    }
})

module.exports = mongoose.model('ekskul', EkskulSchema)