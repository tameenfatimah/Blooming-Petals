document.querySelector('form[role="search"]').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = event.target.querySelector('input[type="search"]').value.toLowerCase();
    const pages = {
        'home': 'index.html',
        'weddings': 'Wedding.html',
        'birthdays': 'Birthdays.html',
        'anniversaries': 'Anniversaries.html',
        'valentine': 'Valentine.html',
        'friendship': 'Freindship.html',
        'mothers': 'Mothers.html',
        'fathers': 'Fathers.html',
        'baby shower': 'Baby.html',
        'bridal shower': 'Bridal.html',
        'get well soon': 'getwellsoon.html',
        'convocation': 'Convocation.html',
        'eid': 'Eid.html',
        'rose': 'Rose.html',
        'dandelions': 'Dandelions.html',
        'tulips': 'Tulips.html',
        'aster': 'Aster.html',
        'crocus': 'Crocus.html',
        "baby's breath": "Baby'sBreath.html",
        'lily': 'Lily.html',
        'dahlia': 'Dahlia.html',
        'daffodil': 'Daffodil.html',
        'daisy': 'Daisy.html',
        'orchid': 'Orchid.html',
        'lavender': 'Lavender.html',
        'marigold': 'Marigold.html',
        'sunflower': 'Sunflower.html',
        'contact us': 'contactus.html',
        'cart': 'Cart.html'
    };

    if (pages[query]) {
        window.location.href = pages[query];
    } else {
        alert('Page not found');
    }
});

const products = [
    {
    id: 1,
    name: "Rose",
    image: "assets/images/rose5.jpg",
    price: "Rs.2,500",
    description: "A beautiful red rose.",
    color: "Red,White,Purple,Pink",
    occasions: "Valentine's Day, Anniversaries",
    fragrance: "Sweet",
    season: "Spring"
    },
    {
    id: 2,
    name: "Tulip",
    image: "assets/images/tulip7.jpg",
    price: "Rs.2,000",
    description: "A vibrant tulip.",
    color: "Yellow,Pink,Orange,Blue,White,Red",
    occasions: "Birthdays, Mother's Day",
    fragrance: "Mild",
    season: "Spring"
    },
    {
    id: 3,
    name: "Dandelion",
    image: "assets/images/dan1.jpg",
    price: "Rs.2,300",
    description: "A delicate dandelion.",
    color: "White Only",
    occasions: "Get well soon, Friendship Day",
    fragrance: "None",
    season: "Summer"
    },
    {
    id: 4,
    name: "Lily",
    image: "assets/images/Lily11.jpg",
    price: "Rs.2,100",
    description: "A fragrant lily.",
    color: "White,Pink",
    occasions: "Weddings, Funerals",
    fragrance: "Strong",
    season: "Summer"
    },
    {
    id: 5,
    name: "Sunflower",
    image: "assets/images/sunflower11.jpg",
    price: "Rs.2,300",
    description: "A bright sunflower.",
    color: "Yellow",
    occasions: "Birthdays, Anniversaries",
    fragrance: "Mild",
    season: "Summer"
    },
    {
    id: 6,
    name: "Aster",
    image: "assets/images/Aster4.jpg",
    price: "Rs.1,800",
    description: "A charming aster.",
    color: "Purple,White,Pink,Blue",
    occasions: "Weddings, Birthdays",
    fragrance: "Mild",
    season: "Fall"
    },
    {
    id: 7,
    name: "Crocus",
    image: "assets/images/Crocus5.jpg",
    price: "Rs.1,500",
    description: "A delicate crocus.",
    color: "Purple,Yellow,White",
    occasions: "Spring Festivals",
    fragrance: "None",
    season: "Spring"
    },
    {
    id: 8,
    name: "Baby's Breath",
    image: "assets/images/Bby's breath1.jpg",
    price: "Rs.2,000",
    description: "A delicate baby's breath.",
    color: "White,Pink,Purple",
    occasions: "Weddings, Funerals",
    fragrance: "None",
    season: "Summer"
    },
    {
    id: 9,
    name: "Dahlia",
    image: "assets/images/dahlia8.jpg",
    price: "Rs.3,500",
    description: "A vibrant dahlia.",
    color: "Red,White,Purple,Pink,Yellow,Orange",
    occasions: "Birthdays, Anniversaries",
    fragrance: "Mild",
    season: "Summer"
    },
    {
    id: 10,
    name: "Daffodil",
    image: "assets/images/daffodil8.jpg",
    price: "Rs.2,500",
    description: "A bright daffodil.",
    color: "Yellow,White",
    occasions: "Spring Festivals",
    fragrance: "Mild",
    season: "Spring"
    },
    {
    id: 11,
    name: "Daisy",
    image: "assets/images/daisy10.jpg",
    price: "Rs.3,000",
    description: "A charming daisy.",
    color: "White,Orange,Purple",
    occasions: "Birthdays, Anniversaries",
    fragrance: "None",
    season: "Summer"
    },
    {
    id: 12,
    name: "Orchid",
    image: "assets/images/orchid8.jpg",
    price: "Rs.4,000",
    description: "An exotic orchid.",
    color: "Purple,Blue,White,Pink",
    occasions: "Weddings, Anniversaries",
    fragrance: "Mild",
    season: "Summer"
    },
    {
    id: 13,
    name: "Lavender",
    image: "assets/images/lavender10.jpg",
    price: "Rs.3,500",
    description: "A fragrant lavender.",
    color: "Purple",
    occasions: "Weddings, Birthdays",
    fragrance: "Strong",
    season: "Summer"
    },
    {
    id: 14,
    name: "Marigold",
    image: "assets/images/marigold6.jpg",
    price: "Rs.2,900",
    description: "A bright marigold.",
    color: "Orange,Yellow",
    occasions: "Festivals, Birthdays",
    fragrance: "Mild",
    season: "Fall"
    }
];

const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');

products.forEach(product => {
    const option1 = document.createElement('option');
    option1.value = product.id;
    option1.textContent = product.name;
    select1.appendChild(option1);

    const option2 = document.createElement('option');
    option2.value = product.id;
    option2.textContent = product.name;
    select2.appendChild(option2);
});

function item1(value) {
    if (value == select2.value) {
    alert("Sorry, same products cannot be compared.");
    select1.value = "0";
    return;
    }
    const product = products.find(p => p.id == value);
    if (product) {
    document.getElementById('img1').src = product.image;
    document.getElementById('price1').textContent = product.price;
    document.getElementById('des1').textContent = product.description;
    document.getElementById('color1').textContent = product.color;
    document.getElementById('occ1').textContent = product.occasions;
    document.getElementById('frag1').textContent = product.fragrance;
    document.getElementById('seas1').textContent = product.season;
    }
}

function item2(value) {
    if (value == select1.value) {
    alert("Sorry, same products cannot be compared.");
    select2.value = "0";
    return;
    }
    const product = products.find(p => p.id == value);
    if (product) {
    document.getElementById('img2').src = product.image;
    document.getElementById('price2').textContent = product.price;
    document.getElementById('des2').textContent = product.description;
    document.getElementById('color2').textContent = product.color;
    document.getElementById('occ2').textContent = product.occasions;
    document.getElementById('frag2').textContent = product.fragrance;
    document.getElementById('seas2').textContent = product.season;
    }
}