console.log("Hello from Hash...!")

// this is just to define the size of the Array of the hashTable
function hashTable(size){
    this.bucket = Array(size);
    this.bucketLength = this.bucket.length;
}

function hashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

// we are hashing it so we know where it stores it data
hashTable.prototype.hashing = function(key){
    let position = null;

    for(i=0; i<key.length; i++){
        position += key.charCodeAt(i)

    }

    let output = position % this.bucketLength;
    return output;
}

hashTable.prototype.insert = function (key, value){
    let index = new this.hashing(key)
    if(!this.bucket[index]){
    return(
        this.bucket[index] = new hashNode(key, value)
        )
}else{
    let currentIndex = this.bucket[index]

    while(currentIndex.next){
        currentIndex = currentIndex.next

    }
}
}


const myHashTable = new hashTable(30);

console.log(myHashTable)
console.log(myHashTable.hashing("Peter"))
console.log(myHashTable.hashing("Peter", "08137204472"))


// charCodeAt

let a = "P";
let a1 = "peter"
console.log(a.charCodeAt())