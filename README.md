# Art Variations Generator
by Henry A Castillo

## Overview

This is a generator to help create many variations of an uploaded art. 

![This is an example image of 4 variations](https://github.com/HenryACastle/art-variations-generator-hac/blob/main/src/preview_4_vartiations_example.png)

The idea for this application of course came from an NFT generator (I had to hop in on the hype).
This comes with a setup to include rarity, attributes, and meta data on the generated art.
Now if you want something like this done custom to your project (and with lower gas fees) feel free to reach out!


This can be also used for quickly creating many variations of any graphic you have, like the example I used below.
This is a proof of concept example for generatoing variations of digital art.

## Instructions

1. Create different layers as folders in the "layers" diretory.
2. Add all the layers assets in these directories 
    - You can add "_r", "_sr", and "_ur" to the layer file names to make those images rare ("_r"), super rare ("_sr"), and ultra rare ("_ur").
3. Set up your config files to correspond with your images and layers.
    - Rarity is customizable in src/config.js
    - You can organize new layers and placement with src/config.js
    - The "name" of each layer image corresponds to amount of options/variations in each folder.
        - If there are 3 images in folder background, you should change the "number" to 3 to avoid any additional missing variations.
    -  The defaultEdition is the amount of variations outputted.
4. When you are ready run the following comman and your outputted art will be in the build directory:

> npm run build
