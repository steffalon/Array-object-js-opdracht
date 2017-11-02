let rugzak = {
  kanOpen: true,
  laptopVak: true,
  merk (merk) {
    this.merk = merk;
  }
}

let car = {
  drive: true,
  name (name) {
    this.name = name;
  }
};

let macbook = {
  isSmall: true,
  canTurnOn (canTurnOn) {
    this.canTurnOn = canTurnOn;
  }
};

let person = {
  name: "Menno",
  age: "24 jaar"
};

let iphone = {
  model: "6s",
  release: "Late 2016"
};

car.name = 'Porsche';
macbook.canTurnOn = true;
rugzak.merk = 'Samsunite';

person = {
  name: "",
  age: ""
};

let simon = Object.create(person);
simon.name = "Simon";
simon.age = "17 jaar"

console.log(simon);

car = {
  name: "",
  topspeed: "",
  acceleratie: ""
};

let porsche = Object.create(car);
porsche.name = "718 Boxster";
porsche.topspeed = "275 km/h";
porsche.acceleratie = "4,6 seconden";

console.log(porsche);

let volkswagen = Object.create(car);
volkswagen.name = "Polo";
volkswagen.topspeed = "185 km/h";
volkswagen.acceleratie = "9.7 seconden";

console.log(volkswagen);

let meubel = {
  type: "",
  matriaal: ""
}

let bank = Object.create(meubel);
bank.type = "Bank";
bank.matriaal = "Leer";

console.log(bank);

let stoel = Object.create(meubel);
stoel.type = "Stoel";
stoel.matriaal = "Hout";

console.log(stoel);



function Computer(computerCase, cpu, gpu) {
  this.computerCase = computerCase;
  this.cpu = cpu;
  this.gpu = gpu;
}

mijnPC = new Computer("Corsair", "Intel i5 4460k", "MSI 960 GTX 2GB");
broerPC = new Computer("InWin", "Intel i7 8700k", "MSI 970 GTX 4GB");
vaderPC = new Computer("HP", "AMD (onbekend model)", "Onbekend");
raspberryPi3 = new Computer("geen case", "Broadcom BCM2837", "Geen");
compaqArmadaE500 = new Computer("compaq", "Intel Pentium III 850 MHz", "AGP 2x - ATI RAGE Mobility P - 8 MB SDRAM");

console.log(mijnPC);
console.log(broerPC);
console.log(vaderPC);
console.log(raspberryPi3);
console.log(compaqArmadaE500);
