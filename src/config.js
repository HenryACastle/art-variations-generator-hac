const layersOrder = [
    { name: 'background', number: 4 },
    { name: 'cloud', number: 4 },
    { name: 'h', number: 3 },
    { name: 'a', number: 3 },
    { name: 'c', number: 3 },
];

const format = {
    width: 500,
    height: 500
};

const rarity = [
    { key: "", val: "standard" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
    { key: "_ur", val: "ultra rare" },

];

// I only put 11 to run, but you can change the total variation amount here
const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };