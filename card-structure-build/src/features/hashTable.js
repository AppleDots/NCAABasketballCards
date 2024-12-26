function mod(value, modulus) {
  const result = value % modulus;
  return result < 0 ? result + modulus : result;
}

function isPseudoPrime(number) {
  if (number <= 2 || number % 2 === 0) {
    return false;
  }
  let residue = 1;
  for (let i = number - 1, power = 2; i > 0; i >>>= 1, power *= power, power %= number) {
    if (i & 1) {
      residue *= power;
      residue %= number;
    }
  }
  return residue === 1;
}

function increaseToPseudoPrime(number) {
  let result = Math.ceil((Math.max(number, 2) - 1) / 2) * 2 + 1;
  while (!isPseudoPrime(result)) {
    result += 2;
  }
  return result;
}

function createBuckets(count) {
  const result = Array(count);
  for (let i = result.length; i--;) {
    result[i] = [];
  }
  return result;
}

const INITIAL_HASH_TABLE_CAPACITY = 7;
const MAXIMUM_LOAD_FACTOR = 0.7;

export class HashTable {
  constructor(hashFunction) {
    this._hashFunction = (element) => mod(hashFunction(element), this._buckets.length);
    this._buckets = createBuckets(increaseToPseudoPrime(INITIAL_HASH_TABLE_CAPACITY));
    this._size = 0;
  }

  _resize() {
    const oldArray = this._buckets;
    this._buckets = createBuckets(increaseToPseudoPrime(2 * oldArray.length));
    this._size = 0;
    for (const bucket of oldArray) {
      for (const element of bucket) {
        this.add(element);
      }
    }
  }

  get size() {
    return this._size;
  }

  get hashValueDistinctness() {
    if (this._size === 0) {
      return 1.0;
    }
    let occupiedBucketCount = 0;
    for (const bucket of this._buckets) {
      if (bucket.length > 0) {
        ++occupiedBucketCount;
      }
    }
    return occupiedBucketCount / this._size;
  }

  has(element) {
    return this._buckets[this._hashFunction(element.name)].includes(element);
  }

  add(element) {
    const bucket = this._buckets[this._hashFunction(element.name)];
    if (!bucket.some((card) => card.name === element.name)) {
      bucket.push(element);
      ++this._size;
      if (this._size / this._buckets.length > MAXIMUM_LOAD_FACTOR) {
        this._resize();
      }
    }
  }

  getListFromTable() {
    const cardList = [];
    for (let bucketIndex = 0; bucketIndex < this._buckets.length; bucketIndex++) {
      for (let cardIndex = 0; cardIndex < this._buckets[bucketIndex].length; cardIndex++) {
        cardList.push(this._buckets[bucketIndex][cardIndex]);
        //console.log(this._buckets[bucketIndex][cardIndex]);
      }
    }
    return cardList;
  }

  getTableFromList() {
    this._buckets = createBuckets(this._buckets.length);
    this._size = 0;
    const cardCollection = JSON.parse(sessionStorage.getItem('cards')) || [];
    for (const card of cardCollection) {
      this.add(card);
    }
    return this;
  }

  findCardFromName(cardName) {
    const bucket = this._buckets[this._hashFunction(cardName)];
    for (const card of bucket) {
      if (cardName === card.name) {
        console.log(card);
        return card;
      }
    }
    return 0;
  }

  delete(card) {
    const bucket = this._buckets[this._hashFunction(card.name)];
    const index = bucket.findIndex((existingCard) => existingCard.name === card.name);
    if (index >= 0) {
      --this._size;
      bucket.splice(index, 1);
    }
  }

  shuffle(){
    const entries = Object.entries(this.hashtable);
    for (let i = entries.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [entries[i], entries[j]] = [entries[j], entries[i]]; // Swap
    }
    return Object.fromEntries(entries);

  }
}
