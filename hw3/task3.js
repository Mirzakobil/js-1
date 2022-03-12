class Zoo{
    constructor(address, area, establishedDate, ticketPrice){
        this.address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    }
    getZooAddress(){
        return `Zoo address is ${this.address}`
    }
    setZooAddress(address){
        this.address = address;
    }
    getZooArea(){
        return `Zoo area is ${this.area}`
    }
    setZooArea(area){
        this.area = area;
    }
    getZooEstDate(){
        return `Zoo was established in ${this.establishedDate}`
    }
    getZooTicketPrice(){
        return `Zoo ticket price is ${this.ticketPrice}`
    }
    setZooTicketPrice(price){
        this.ticketPrice = price;
    }

}

class Animal extends Zoo {
    constructor(type, color, weight, height, placeOfOrigin, animals){
        super(animals)
        this.id = Math.random().toString().slice(2);
        this.type = type;
        this. color = color;
        this.weight =  weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }
}

class Snakes extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isPoisonous){
        super(type, color, weight, height, placeOfOrigin);
        this.isPoisonous = isPoisonous;
    }
}

class CatLike extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet){
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
}

class Birds extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isFlying){
        super(type, color, weight, height, placeOfOrigin);
        this.isFlying = isFlying;
    }
}

class Worker extends Zoo {
    constructor(firstName, lastName, phone, workers){
        super(workers);
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    
    addWorker(firstName, lastName, phone){
        this.workers.push(firstName)
    }

    editWorker(oldName, newName){
        for(worker of this.workers){
            const index = this.workers.indexOf(worker);
            if(worker === oldName){
                this.workers[index] = newName;
            }
            else return 'This worker does not exist'   
        }
    }
    deleteWorker(name){
        for(worker of this.workers){
            const index = this.workers.indexOf(worker);
            if(worker === name){
                delete this.workers[index]
            }
            else return 'This worker does not exist'   
        }
    }
}