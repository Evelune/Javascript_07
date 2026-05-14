// "use strict";

const a = {
  value: 10,
  y: function () {
    console.log(this);
    // console.log(this.value);
  },
};
// a.y()

const user1 = {
  value: 10,
  x: () => {
    console.log(this);
  },
};

var bb = 10
// a.y();

const user2 = {
  name: "Evelune",
  xx: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
};


user2.xx()

const student1 = {
    firstName : "Dewang",
    lastName : "Singh",
    printName : function(){
        console.log(this.firstName + " " + this.lastName)
    },
}

const student2 = {
    firstName : "Evelune",
    lastName : "MoonLight"
}

// student1.printName.call(student2)


user1.x()
console.log(this);


