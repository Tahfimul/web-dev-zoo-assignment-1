const animals =
{
    0: {
        "name":"Polar Bear", 
        "image":"https://images.theconversation.com/files/340360/original/file-20200608-176546-v54a8a.jpg?ixlib=rb-4.1.0&rect=0%2C393%2C2650%2C1322&q=45&auto=format&w=1356&h=668&fit=crop",
        "description":"The polar bear is a large bear native to the Arctic and nearby areas. It is closely related to the brown bear, and the two species can interbreed. The polar bear is the largest extant species of bear and land carnivore, with adult males weighing 300–800 kg."
        },
    1: {
        "name":"Koala",
        "image":"https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQK7CeUxOlVk6Qxn2Z1FVYheNCA7UtH4wRWNdBENYHO9w6VzYTUmNQk2rqri2j9xAh7",
        "description":"The koala, sometimes called the koala bear, is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae. Its closest living relatives are the wombats."
       },
    2: {
        "name":"Kangaroo",
        "image":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRN4MuZE1asIsa3USQLKboHyHYCCBJLej68on5Yah3l1Ug2wGU5",
        "description":"Kangaroos are marsupials from the family Macropodidae. In common use the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo. Kangaroos are indigenous to Australia and New Guinea. "
        },
    3: {
        "name":"Dog",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB",
        "description":"The dog is a domesticated descendant of the wolf. Also called the domestic dog, it was domesticated from an extinct population of wolves during the Late Pleistocene, over 14,000 years ago by hunter-gatherers, prior to the development of agriculture. The dog was the first species to be domesticated by humans."
        },
    4: {
        "name":"Cat",
        "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg",
        "description":"The cat, also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae. Advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC. "
       },
    5: {
        "name":"Lizard",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4Tz7dReosgQpQo53eN2PgVxHmTQnx_F42XjrjptfNxmhbqcN",
        "description":"Lizard is the common name used for all squamate reptiles other than snakes, encompassing over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic island chains. The grouping is paraphyletic as some lizards are more closely related to snakes than they are to other lizards."
        },
    6: {
        "name":"Cow",
        "image":"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg",
        "description":"Cattle are large, domesticated, bovid ungulates widely kept as livestock. They are prominent modern members of the subfamily Bovinae and the most widespread species of the genus Bos. Mature female cattle are called cows and mature male cattle are bulls."
        },
    7: {
        "name":"Horse",
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWc33QdVVg6-Ilj3WZDsNa1fSJLv9qvWCxrYyAJ7zwYfrl0QkB",
        "description":"The horse is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, close to Eohippus, into the large, single-toed animal of today."
        }
}

function switch_(animalId)
{
    const animals_keys = Object.keys(animals)
    if(animals_keys.find(id=>id===animalId)!=-1)
        window.alert(animals[animalId])
}