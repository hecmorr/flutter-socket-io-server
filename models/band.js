const {v4: uuidV4} = require('uuid');


class Band {
    constructor(name = 'no-name'){
        
        this.id = uuidV4(); //unique id from uuid package
        this.name = name;
        this.votes = 0;
    }
}

//Exportation of band to be used outside of this class
module.exports = Band;