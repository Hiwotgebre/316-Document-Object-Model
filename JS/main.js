document.getElementById('itemTemplate').addEventListener('submit', function(event){
    event.preventDefault();
    const itemEntry = document.getElementById('itemEntry');
    if (itemEntry.value) {
        const newItem = document.createElement(li);
        newItem.textContent = itemEntry.value;
        document.getElementById('itemList').appendChild(newItem);
        itemEntry.value = ''; //Clear input after adding
    }
});


