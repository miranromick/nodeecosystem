
var mustang = createCar("Mustang", 1969, "Red", "https://static1.squarespace.com/static/54224325e4b06733ce007d4d/t/54624f0fe4b00403fddd002a/1415728921179/03.png", 8);
var prius = createCar("Prius", 2017, "blue", "http://www.local-car-finder.com/public-assets/Roseville_Competition/2015_PriusV_1.png", 0);
var lambo = createCar("Lambo", 2017, "silver", "http://pngimg.com/uploads/lamborghini/lamborghini_PNG10691.png", 20);
var bus = createCar("VW Bus", 1960, "blue", "http://strictlyaircooledvw.com/wp-content/uploads/2015/06/samba_bordeaux.png", -5 );

lambo.accelerate = function(){
    this.speed += (10 + this.boost)
    if (this.speed >= 200){
      this.speed = 200
    }
    console.log(this.speed)
    global.globalCount++;

}

mustang.addInfo("The Ford Mustang is an American automobile manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car. The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter.")

lambo.addInfo("Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese, Italy. The company is owned by the Volkswagen Group through its subsidiary Audi. Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. The company gained wide acclaim in 1966 for the Miura sports coupé, which established rear mid-engine, rear wheel drive as the standard layout for high-performance cars of the era. Lamborghini grew rapidly during its first decade, but sales plunged in the wake of the 1973 worldwide financial downturn and the oil crisis.")

bus.addInfo("The Volkswagen Type 2, known officially (depending on body type) as the Transporter, Kombi or Microbus, or, informally, as the Bus (US) or Camper (UK), is a forward control panel van introduced in 1950 by the German automaker Volkswagen as its second car model. Following – and initially deriving from Volkswagen's first model, the Type 1 (Beetle) – it was given the factory designation Type 2.As one of the forerunners of the modern cargo and passenger vans, the Type 2 gave rise to forward control competitors in the United States in the 1960s, including the Ford Econoline, the Dodge A100, and the Chevrolet Corvair 95 Corvan, the latter adopting the Type 2's rear-engine configuration.")

prius.addInfo("The Toyota Prius is a full hybrid electric automobile developed by Toyota and manufactured by the company since 1997. Initially offered as a 4-door sedan, it has been produced only as a 5-door hatchback since 2003. The United States Environmental Protection Agency and California Air Resources Board (CARB) rate the Prius as among the cleanest vehicles sold in the United States based on smog-forming emissions. The 2016 model year Prius Eco ranks as the all-time most fuel efficient gasoline-powered car available in the US without plug-in capability.The Prius first went on sale in Japan in 1997, and was available at all four Toyota Japan dealerships, making it the first mass-produced hybrid vehicle. It was subsequently introduced worldwide in 2000. he Prius is sold in over 90 markets, with Japan and the United States being its largest markets.")

var cars = [mustang, prius, lambo, bus]
var index = 0
var newCar = cars[0];

function createCar(newMake, newModel, newColor, img, boostVal) {
  return {
    make: newMake,
    modelYear: newModel,
    color: newColor,
    speed: 0,
    image: img,
    boost: boostVal,
    info: "",
    getData: function(){ return this.color + ", " + this.modelYear + ", " + this.make},
    getSpeed: function(){ return this.speed},
    accelerate: function(){
      this.speed += (10 + this.boost)
      if (this.speed >= 85){
        this.speed = 85
      }
      console.log(this.speed)
      },
      slipBrake: function(){
          this.speed -= Math.floor(Math.random()* (this.speed/2))
          if(this.speed <= 2){
            this.speed = 0
          }
          console.log(this.speed)
        },
    addInfo: function(string){
      this.info = string;
    },
    brake: function(){
        this.speed -= 7
        if(this.speed < 0){
          this.speed = 0
        }
        console.log(this.speed)
      }


  //   speedUpSlowDown: function() {
  //     while (this.speed < 70) {
  //       setInterval(function(){
  //         this.accelerate();
  //         document.getElementById("speedometer").innerHTML = newCar.speed
  //       }, 1000);
  //     }
  //     while (this.speed > 0 ) {
  //       setInterval(function(){
  //         this.brake();
  //         document.getElementById("speedometer").innerHTML = newCar.speed
  //       }, 1000);
  //   }
  // }
}
}


function gas(){
  newCar.accelerate()
  document.getElementById("speedometer").innerHTML = newCar.speed
}

function btnBrake(){
  newCar.brake()
  document.getElementById("speedometer").innerHTML = newCar.speed
}

// function testDrive() {
//     myTimer = setInterval(function(){
//       newCar.accelerate();
//       document.getElementById("speedometer").innerHTML = newCar.speed;
//     }, 1000);
//   }
//   while (newCar.speed > 0 ){
//     setInterval(function(){
//       newCar.brake();
//       document.getElementById("speedometer").innerHTML = newCar.speed;
//     }, 1000);
//   }
// }

function nextCar(){
  newCar.speed = 0;
  document.getElementById("speedometer").innerHTML = newCar.speed
  if (index === 3){
    index = 0;
  }
  else {
    index += 1;
  }
  newCar = cars[index];
  document.getElementById("mainImg").src = newCar.image;
  document.getElementById("info").innerHTML = newCar.info;
  document.getElementById("carName").innerHTML = newCar.make;
}








//
