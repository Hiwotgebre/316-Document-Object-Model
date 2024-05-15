
document.getElementById('itemTemplate').addEventListener('submit', function(event) {
    event.preventDefault();
    const itemEntry = document.getElementById('itemEntry');
    if (itemEntry.value) {
        const newItem = document.createElement('li');
        newItem.textContent = itemEntry.value;
        document.getElementById('itemList').appendChild(newItem);
        itemEntry.value = '';  // Clear input after adding
    }
});

document.getElementById('changeBackground').addEventListener('click', function() {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === 'rgb(245, 66, 120)' ? '#42f59e' : 'rgb(245, 66, 120)';
    document.body.classList.toggle('color-toggled');
});

document.getElementById('resetList').addEventListener('click', function() {
    const itemList = document.getElementById('itemList');
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
});

DocumentTimeline.querySelector('#itemTemplate').addEventListener('input', function(event) {
    if (!event.target.validity.patternMismatch) {
        event.target.setAttribute('style', 'border-color: red;');
    } else {
        event.target.setAttribute('style', 'border-color: red;');
    }
});

window.addEventListener('resize', function() {
    console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
});

