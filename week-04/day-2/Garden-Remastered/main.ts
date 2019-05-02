'use strict';

import { Garden } from './garden-2';
import { Flower } from './plant-2';
import { Tree } from './plant-2';


const myGarden: Garden = new Garden('ezittakert');
myGarden.addPlant(new Flower('yellow'));
myGarden.addPlant(new Flower('blue'));
myGarden.addPlant(new Tree('purple'));
myGarden.addPlant(new Tree('orange'));

myGarden.printStatus();

myGarden.waterAllThePlants(40);
myGarden.printStatus();

myGarden.waterAllThePlants(70);
myGarden.printStatus();

