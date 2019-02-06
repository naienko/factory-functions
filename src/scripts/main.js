// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

const specialty = [
    {
        name: "primary care physician",
        description:
        "basic health care such as checkups and common illness diagnosis",
        prescribe: true
    },
    {
        name: "psychiatrist",
        description: "mental health care such as therapy",
        prescribe: true
    },
    {
        name: "optometrist",
        description: "eye care",
        prescribe: true
    },
    {
        name: "nurse practicioner",
        description:
        "basic health care such as checkups and common illness diagnosis",
        prescribe: false
    },
    {
        name: "pediatrician",
        description:
        "basic health care for children such as checkups and common illness diagnosis",
        prescribe: true
    },
    {
        name: "psychotherapist",
        description: "mental health care such as therapy",
        prescribe: false
    }
];

const createDoctor = (name, specialty, address) => {
    return {
        name: name,
        specialty: specialty.name,
        address: address
    };
};

const newDoctor = createDoctor("Paige Reichert", specialty[1], "Mount Juliet");
console.log(newDoctor);

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels

const breeds = [
    {
        name: "Ragdoll",
        type: "cat"
    },
    {
        name: "Siamese",
        type: "cat"
    },
    {
        name: "Corgi",
        type: "dog"
    },
    {
        name: "Poodle",
        type: "dog"
    }
];

const createPetListing = (name, breed) => {
    return {
        name: name,
        breed: breed.name,
        type: breed.type
    }
};

let BowWowKennels = [];

BowWowKennels.push() = createPetListing("Helios", breeds[0]);
BowWowKennels.push = createPetListing("Slinky", breeds[1]);
BowWowKennels.push = createPetListing("Queen", breeds[2]);

console.log(BowWowKennels);