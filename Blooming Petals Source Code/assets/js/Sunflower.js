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
});document.querySelector('form[role="search"]').addEventListener('submit', function(event) {
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