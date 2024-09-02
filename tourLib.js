let tourArray = [];
let nextId = 1;

function addOne(name, info, image, price) {
    // Check if any parameter is empty or undefined
    if (!name || !info || !image || !price) {
        return false;
    }

    const newTour = {
        id: nextId++,  // Assigns a unique id and increments it
        name,
        info,
        image,
        price
    };

    tourArray.push(newTour); // Adds the new car to the array
    return newTour; // Returns the added car object
}

function getAll() {
    return tourArray;
}

function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const tour = tourArray.find(item => item.id === numericId); // Finds the car with the matching ID
    return tour || false; // Returns the car or false if not found
}


function updateOneById(id, updatedData) {
    const tour = findById(id);
    if (tour) {
        // Update properties only if they are provided in updatedData
        if (updatedData.name) tour.name = updatedData.name;
        if (updatedData.info) tour.info = updatedData.info;
        if (updatedData.image) tour.image = updatedData.image;
        if (updatedData.price) tour.price = updatedData.price;
        return tour; // Returns the updated car object
    }
    return false; // Returns false if the car with the provided ID is not found
}

function deleteOneById(id) {
    const tour = findById(id);
    if (tour) {
        const initialLength = tourArray.length;
        tourArray = tourArray.filter(tour => tour.id !== Number(id)); // Filters out the car with the matching ID
        return tourArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the car was not found
}


if (require.main === module) {
    // Add cars
    let result = addOne(
        "Best of Paris in 7 Days Tour", 
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
        "https://www.course-api.com/images/tours/tour-1.jpeg",
        "1,995"
        );
    console.log(result);
    result = addOne(
        "Best of Helsinki in 3 Days Tour", 
        "Helsinki is a wonderful city. Join us for the Best of Helsinki in 7 Days!",
        "https://www.course-api.com/images/tours/tour-1.jpeg",
        "2,033"
        );
    console.log(result);

    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1,{price:"2,033"}));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}


const Tour = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Tour;