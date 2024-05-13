document.getElementById('itemForm').addEventListener('submit', function(event){
    event.preventDefault();
    const itemInput = document.getElementById('itemInput');
    if (itemInput.value) {
        const newItem = document.createElement(li);
        newItem.textContent = itemInput.value;
        document.getElementById('itemList').appendChild(newItem);
        itemInput.value = ''; //Clear input after adding
    }
});