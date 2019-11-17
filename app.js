let minecount = 0;

let clickUpgrades = {
  cheap: {
    price: 100,
    quantity: 0,
    multiplier: 2
  }
};

let clickUpgrades2 = {
  cheap2: {
    price: 200,
    quantity: 0,
    multiplier: 5
  }
};

let automaticUpgrades = {
  expensive: {
    price: 1000,
    quantity: 0,
    multiplier: 20
  }
};

let automaticUpgrades2 = {
  expensive: {
    price: 5000,
    quantity: 0,
    multiplier: 50
  }
};

// why cant i do two at a time, like Q1*O1+Q2*o2
function oneUp() {
  let mutliOne = clickUpgrades.cheap.quantity * clickUpgrades.cheap.multiplier;
  let mutliBig =
    clickUpgrades2.cheap2.quantity * clickUpgrades2.cheap2.multiplier;
  document.querySelector("#activemod-big").innerHTML = mutliBig.toString();
  document.querySelector("#activemod").innerHTML = mutliOne.toString();
}

// couldnt get the function to work right so I hard coded it
function twoUp() {
  let multiTwo = automaticUpgrades.expensive.quantity * 20;
  let multiBig = automaticUpgrades2.expensive.quantity * 50;
  document.querySelector("#passivemod-big").innerHTML = multiBig.toString();
  document.querySelector("#passivemod").innerHTML = multiTwo.toString();
}

function start() {
  cost();
  oneUp();
  twoUp();
}

function cost() {
  let x =
    clickUpgrades.cheap.price +
    clickUpgrades.cheap.quantity * clickUpgrades.cheap.price;
  let cost2 =
    clickUpgrades2.cheap2.price +
    clickUpgrades2.cheap2.quantity * clickUpgrades2.cheap2.price;
  let cost3 =
    automaticUpgrades.expensive.price +
    automaticUpgrades.expensive.quantity * automaticUpgrades.expensive.quantity;
  let cost4 =
    automaticUpgrades2.expensive.price +
    automaticUpgrades2.expensive.quantity * automaticUpgrades2.expensive.price;
  document.querySelector("#test-id").innerHTML = x.toString();
  document.querySelector("#cost2").innerHTML = cost2.toString();
  document.querySelector("#cost3").innerHTML = cost3.toString();
  document.querySelector("#cost4").innerHTML = cost4.toString();
}

function mine() {
  let x = clickUpgrades.cheap.quantity;
  let y = clickUpgrades2.cheap2.quantity;
  minecount++;
  minecount += x * 2;
  minecount += y * 5;
  update();
}

function update() {
  document.querySelector("#numberamount").innerHTML = minecount.toString();
  cost();
  oneUp();
  twoUp();
}

function upgrade1() {
  let xCost =
    clickUpgrades.cheap.price +
    clickUpgrades.cheap.quantity * clickUpgrades.cheap.price;
  if (minecount >= xCost) {
    clickUpgrades.cheap.quantity++;
    minecount -= xCost;
    update();
  }
}

function upgrade2() {
  let yCost =
    clickUpgrades2.cheap2.price +
    clickUpgrades2.cheap2.quantity * clickUpgrades2.cheap2.price;
  if (minecount >= yCost) {
    clickUpgrades2.cheap2.quantity++;
    minecount -= yCost;
    update();
  }
}

function upgrade3() {
  let thirdCost =
    automaticUpgrades.expensive.price +
    automaticUpgrades.expensive.quantity * automaticUpgrades.expensive.quantity;
  if (minecount >= thirdCost) {
    automaticUpgrades.expensive.quantity++;
    minecount -= thirdCost;
    update();
    if (automaticUpgrades.expensive.quantity == 1) {
      auto();
    }
  }
}

function upgrade4() {
  let bigCost =
    automaticUpgrades2.expensive.price +
    automaticUpgrades2.expensive.quantity * automaticUpgrades2.expensive.price;
  if (minecount >= bigCost) {
    automaticUpgrades2.expensive.quantity++;
    minecount -= bigCost;
    update();
    if (automaticUpgrades2.expensive.quantity == 1) {
      secondAuto();
    }
  }
}

function auto() {
  setInterval(function() {
    let newX = automaticUpgrades.expensive.quantity;
    minecount += newX * 20;
    update();
  }, 2000);
}

function secondAuto() {
  setInterval(function() {
    let newX = automaticUpgrades2.expensive.quantity;
    minecount += newX * 50;
    update();
  }, 2000);
}

// function startInterval() {
//   collectionInterval = setInterval(collectAutoUpgrades, 3000);
// if (automaticUpgrades.expensive.quantity > 0)
