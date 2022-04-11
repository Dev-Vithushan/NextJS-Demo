const { Module } = require('module')
const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type:String,
        require:[true,'Please add the title'],
        unique: true,
        trim:true,
        maxLength:[40,'title cannot be more than 40']

    },

    description: {
        type:String,
        required: true,
        maxLength:[200,'Descriptions cannot be more than 200 characters ']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note',NoteSchema)