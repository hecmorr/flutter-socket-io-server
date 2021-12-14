const Band = require("./band");

//Class that will handle the different methods available to interact with the bands 
class Bands{
    constructor (){
        this.bands = [];

    }   

    
    addBand(band = new Band()){ //the paramater named band will have a Band type always
        this.bands.push(band);
    }

    getBands(){
        return this.bands;
    }

    deleteBand(id=' '){
        this.bands = this.bands.filter(band => band.id != id); //Returns all of the bands that dont have the id that the method is receiving
        return this.bands;                                     //returns the new array of bands
    }

    voteBand(id=' '){
        //returns a new object that is going to be part of the band
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes++;
                return band;
            } else{
                return band;
            }
        });
    }
}

module.exports = Bands;