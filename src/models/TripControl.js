//Autor: Vasquez Miguel, Alexandra Ivana

//importa el schema y modelo de moongose
const {Schema, model} = require('mongoose');

//Crea un schema para mongodb
const TripControlSchema = new Schema({
    user_id: {
        type: String,
        required: true
    },
    total_trips:  {
        type: Number,
        required: true
    },
    taken_trips:  {
        type: Number,
        required: true
    },
    untaken_trips:  {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});




//crea un modelo con el nombre elegido y la coleccion donde se guardará
module.exports = model('TripControl', TripControlSchema, 'tripControls');

