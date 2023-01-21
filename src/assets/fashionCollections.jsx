import coat from "../utility/images/clothes/coat.png";
import coat2 from "../utility/images/clothes/coat2.jpg";
import top from "../utility/images/clothes/top.png";
import top2 from "../utility/images/clothes/top2.png";
import hoodie from "../utility/images/clothes/hoodie.png";
import hoodie2 from "../utility/images/clothes/hoodie2.png";
import femaleTshirt from "../utility/images/clothes/female-tshirt.png";
import femaleTshirt2 from "../utility/images/clothes/female-tshirt2.png";
import jacket from "../utility/images/clothes/jacket.png";
import jacket2 from "../utility/images/clothes/jacket2.png";
import trainers from "../utility/images/clothes/trainers.png";
import trainers2 from "../utility/images/clothes/shoes2.png";
import trousers from "../utility/images/clothes/trousers.png";
import trousers2 from "../utility/images/clothes/trousers2.png";
import tshirt from "../utility/images/clothes/tshirt.png";
import tshirt2 from "../utility/images/clothes/tshirt2.png";


export const collectionHer = [
    {
        id: 1,
        name: "coat",
        price: "520",
        rate: "4",
        images: [coat, coat2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "xxl"],
        colors: ["black", "white", "red"],
        category: 'jackets',
        isBest: true,
        isNew: true
    },
    {
        id: 2,
        name: "top",
        price: "80",
        rate: "4.5",
        images: [top, top2, femaleTshirt2],
        similar: [
            { id: 1, name: "coat", img: coat2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "white", "brown", "gray", "red"],
        category: 'tshirts',
        isBest: true,
        isNew: true
    },
    {
        id: 3,
        name: "hoodie",
        price: "230",
        rate: "5",
        images: [hoodie, hoodie2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "coat", img: coat2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["xl", "xxl"],
        colors: ["gray", "red"],
        category: 'hoodies',
        isBest: true,
        isNew: true
    },
    {
        id: 4,
        name: "Tshirt",
        price: "20",
        rate: "3",
        images: [femaleTshirt, femaleTshirt2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "coat", img: coat2 },
        ],
        sizes: ["s", "m", "l", "xl"],
        colors: ["black", "white", "brown", "gray"],
        category: 'tshirts',
        isBest: true,
        isNew: true
    },
    {
        id: 5,
        name: "coat",
        price: "520",
        rate: "4",
        images: [coat, coat2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "xxl"],
        colors: ["black", "white", "red"],
        category: 'jackets',
        isBest: false,
        isNew: false
    },
    {
        id: 6,
        name: "top",
        price: "80",
        rate: "4.5",
        images: [top, top2],
        similar: [
            { id: 1, name: "coat", img: coat2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "white", "brown", "gray", "red"],
        category: 'tshirts',
        isBest: false,
        isNew: false
    },
    {
        id: 7,
        name: "hoodie",
        price: "230",
        rate: "5",
        images: [hoodie, hoodie2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "coat", img: coat2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["xl", "xxl"],
        colors: ["gray", "red"],
        category: 'hoodies',
        isBest: false,
        isNew: false
    },
    {
        id: 8,
        name: "Tshirt",
        price: "20",
        rate: "3",
        images: [femaleTshirt, femaleTshirt2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "coat", img: coat2 },
        ],
        sizes: ["s", "m", "l", "xl"],
        colors: ["black", "white", "brown", "gray"],
        category: 'tshirts',
        isBest: false,
        isNew: false
    },
    {
        id: 9,
        name: "coat",
        price: "520",
        rate: "4",
        images: [coat, coat2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "xxl"],
        colors: ["black", "white", "red"],
        category: 'jackets',
        isBest: false,
        isNew: false
    },
    {
        id: 10,
        name: "top",
        price: "80",
        rate: "4.5",
        images: [top, top2],
        similar: [
            { id: 1, name: "coat", img: coat2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "white", "brown", "gray", "red"],
        category: 'tshirts',
        isBest: false,
        isNew: false
    },
    {
        id: 11,
        name: "hoodie",
        price: "230",
        rate: "5",
        images: [hoodie, hoodie2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "coat", img: coat2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["xl", "xxl"],
        colors: ["gray", "red"],
        category: 'hoodies',
        isBest: false,
        isNew: false
    },
    {
        id: 12,
        name: "Tshirt",
        price: "20",
        rate: "3",
        images: [femaleTshirt, femaleTshirt2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "coat", img: coat2 },
        ],
        sizes: ["s", "m", "l", "xl"],
        colors: ["black", "white", "brown", "gray"],
        category: 'tshirts',
        isBest: false,
        isNew: false
    },
    {
        id: 13,
        name: "coat",
        price: "520",
        rate: "4",
        images: [coat, coat2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "xxl"],
        colors: ["black", "white", "red"],
        category: 'jackets',
        isBest: false,
        isNew: false
    },
    {
        id: 14,
        name: "top",
        price: "80",
        rate: "4.5",
        images: [top, top2],
        similar: [
            { id: 1, name: "coat", img: coat2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "white", "brown", "gray", "red"],
        category: 'tshirts',
        isBest: false,
        isNew: false
    },
    {
        id: 15,
        name: "hoodie",
        price: "230",
        rate: "5",
        images: [hoodie, hoodie2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "coat", img: coat2 },
            { id: 3, name: "Tshirt", img: femaleTshirt2 },
        ],
        sizes: ["xl", "xxl"],
        colors: ["gray", "red"],
        category: 'hoodies',
        isBest: false,
        isNew: false
    },
    {
        id: 16,
        name: "Tshirt",
        price: "20",
        rate: "3",
        images: [femaleTshirt, femaleTshirt2],
        similar: [
            { id: 1, name: "top", img: top2 },
            { id: 2, name: "hoodie", img: hoodie2 },
            { id: 3, name: "coat", img: coat2 },
        ],
        sizes: ["s", "m", "l", "xl"],
        colors: ["black", "white", "brown", "gray"],
        category: 'tshirts',
        isBest: false,
        isNew: false
    },
];

export const collectionHim = [
    {
        id: 25,
        name: "jacket",
        price: "400",
        rate: "4",
        images: [jacket, jacket2],
        similar: [
            { id: 1, name: "trainers", img: trainers2 },
            { id: 2, name: "trousers", img: trousers2 },
            { id: 3, name: "tshirt", img: tshirt2 },
        ],
        sizes: ["s", "xl", "xxl"],
        colors: ["black", "brown", "gray"],
        category: 'jackets',
        isBest: true,
        isNew: true
    },
    {
        id: 26,
        name: "trainers",
        price: "80",
        rate: "4.5",
        images: [trainers, trainers2],
        similar: [
            { id: 1, name: "jacket", img: jacket2 },
            { id: 2, name: "trousers", img: trousers2 },
            { id: 3, name: "tshirt", img: tshirt2 },
        ],
        sizes: ["36", "38", "42", "45"],
        colors: ["black", "white"],
        category: 'shoes',
        isBest: true,
        isNew: true
    },
    {
        id: 27,
        name: "trousers",
        price: "230",
        rate: "5",
        images: [trousers, trousers2],
        similar: [
            { id: 1, name: "trainers", img: trainers2 },
            { id: 2, name: "jacket", img: jacket2 },
            { id: 3, name: "tshirt", img: tshirt2 },
        ],
        sizes: ["36", "38", "42", "44", "45"],
        colors: ["black", "white", "brown", "gray", "red"],
        category: 'trousers',
        isBest: true,
        isNew: true
    },
    {
        id: 28,
        name: "tshirt",
        price: "20",
        rate: "3",
        images: [tshirt, tshirt2],
        similar: [
            { id: 1, name: "trainers", img: trainers2 },
            { id: 2, name: "trousers", img: trousers2 },
            { id: 3, name: "jacket", img: jacket2 },
        ],
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["black", "white", "brown", "gray", "red"],
        category: 'tshirt',
        isBest: true,
        isNew: true
    },
];