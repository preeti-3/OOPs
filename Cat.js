class Cat {
    name = "sahil" // public

    // method public
    mew() {
        console.log(`cat is meowing!`);
    }
    teeth() {
        console.log(`cat have teeths!`);
    }
    eyes() {
        console.log(`cat have night vision`);
    }
}

const lion = new Cat()
lion.mew()
console.log(lion.name)

const tiger = new Cat()
console.log(tiger.name)