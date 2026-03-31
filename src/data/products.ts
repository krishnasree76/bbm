import vibrantXlImg from "@/assets/vibrant-xl.jpg";
import ampojPlusImg from "@/assets/ampoj-plus.jpg";
import electraImg from "@/assets/electra.jpg";
import ampojImg from "@/assets/ampoj.jpg";
import eAutoPickupImg from "@/assets/e-auto-pickup.jpg";
import eFoodCartImg from "@/assets/e-food-cart.jpg";
import dumpsterImg from "@/assets/dumpster.jpg";
import passengerModAutoImg from "@/assets/passenger-mod-auto.jpg";

export const products = [
  {
    id: "vibrant-xl",
    name: "VIBRANT XL",
    category: "Scooter",
    image: vibrantXlImg,
    shortSpecs: "70+ km mileage | 48V/26Ah Battery",
    specs: {
      battery: "48V / 26Ah",
      mileage: "70+ km",
      chargingTime: "3–4 hrs",
      consumption: "1.5 unit/charge",
      motor: "BLDC heavy duty",
      brakes: "Front disc / Rear drum",
      tyre: "3.00-10 tubeless",
      suspension: "Telescopic",
      storage: "12L",
      weight: "≤60 kg",
    },
    features: ["USB charging", "Central locking", "Reverse switch", "Alloy wheels"]
  },
  {
    id: "ampoj-plus",
    name: "AMPOJ+",
    category: "Scooter",
    image: ampojPlusImg,
    shortSpecs: "70–115 km mileage | 250W high torque",
    specs: {
      battery: "26Ah / 32Ah",
      mileage: "70–115 km",
      chargingTime: "4–5 hrs",
      motor: "250W high torque",
      controller: "48V / 60V",
      brakes: "Disc (Front & Rear)",
      meter: "Digital"
    },
    features: ["LED lights", "Alloy wheels", "Central locking", "Reverse switch"]
  },
  {
    id: "electra",
    name: "ELECTRA",
    category: "Scooter",
    image: electraImg,
    shortSpecs: "55–60 km mileage | BLDC heavy duty",
    specs: {
      battery: "48V 25Ah",
      mileage: "55–60 km",
      chargingTime: "3.5–4 hrs",
      consumption: "1 unit/charge",
      motor: "BLDC heavy duty",
      brakes: "Drum (Front & Rear)",
      storage: "12L"
    },
    features: ["USB charging", "Central locking", "LED lights"]
  },
  {
    id: "ampoj",
    name: "AMPOJ",
    category: "Scooter",
    image: ampojImg,
    shortSpecs: "70–115 km mileage | 250W Motor",
    specs: {
      battery: "48V 25Ah / 32Ah",
      mileage: "70–115 km",
      motor: "250W high torque",
      controller: "48/60V",
      brakes: "Disc",
      meter: "Digital"
    },
    features: ["LED lights", "Alloy wheels", "Central locking", "Reverse switch"]
  },
  {
    id: "e-auto-pickup",
    name: "E-AUTO (PICKUP)",
    category: "3-Wheeler",
    image: eAutoPickupImg,
    shortSpecs: "700 kg load | 80–120 km mileage",
    specs: {
      dimensions: "2770×995×1524 mm",
      loadCapacity: "700 kg",
      maxSpeed: "35 km/hr",
      mileage: "80–120 km",
      motor: "1200W brushless",
      battery: "Li-ion / LiFePO4",
      chargingTime: "2–6 hrs",
      powerConsumption: "0.065 kWh/km",
      brake: "Rear drum",
      groundClearance: "250 mm"
    },
    features: ["No pollution", "Low maintenance", "Silent operation"]
  },
  {
    id: "e-food-cart",
    name: "E-FOOD CART",
    category: "3-Wheeler",
    image: eFoodCartImg,
    shortSpecs: "500 kg load | Food Cart Utility",
    specs: {
      dimensions: "2890×995×1828.8 mm",
      loadCapacity: "500 kg",
      maxSpeed: "35 km/hr",
      mileage: "80–120 km",
      motor: "1200W brushless",
      battery: "Li-ion / LiFePO4"
    },
    features: ["Customizable food spaces", "Silent operation", "Easy charging"]
  },
  {
    id: "dumpster",
    name: "DUMPSTER",
    category: "3-Wheeler",
    image: dumpsterImg,
    shortSpecs: "600 kg load w/ hydraulic lift",
    specs: {
      dimensions: "2700×995×~1585 mm",
      loadCapacity: "600 kg (hydraulic lift)",
      maxSpeed: "35 km/hr",
      mileage: "80–120 km",
      motor: "1200W brushless"
    },
    features: ["Hydraulic lift built-in", "High payload", "Easy loading/unloading"]
  },
  {
    id: "passenger-mod-auto",
    name: "PASSENGER MOD AUTO",
    category: "3-Wheeler",
    image: passengerModAutoImg,
    shortSpecs: "Passenger Auto | 80–120 km mileage",
    specs: {
      dimensions: "2770×995×1524 mm",
      loadCapacity: "700 kg",
      maxSpeed: "35 km/hr",
      mileage: "80–120 km",
      motor: "1200W brushless"
    },
    features: ["Comfortable seating", "Silent operation", "Low running cost (~₹0.35/km)"]
  }
];
