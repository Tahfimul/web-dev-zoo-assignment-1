const animals =
{
    0: "Polar Bear",
    1: "Koala",
    2: "Kangaroo",
    3: "Dog",
    4: "Cat",
    5: "Lizard",
    6: "Cow",
    7: "Horse"
}

function switch_(animalId)
{
    const animals_keys = Object.keys(animals)
    if(animals_keys.find(id=>id===animalId)!=-1)
        window.alert(animals[animalId])
}