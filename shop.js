document.getElementById('btn').addEventListener('click', addCart);
const total = document.querySelector('.total');
const single = document.getElementById('single').innerHTML;
const item = document.getElementById('item');
const item1 = document.getElementById('item1').innerHTML;
const price = document.querySelector('.price');
document.getElementById('remove').addEventListener('click', removeAll);
const option = document.getElementsByTagName('option').innerHTML;

function addCart(){
    const btn = document.getElementById('btn');
    total.innerHTML = single;
    item.innerHTML = item1;
    price.innerHTML = single;
    
}

function removeAll(){
    const removeBtn = document.getElementById('remove');
    total.innerHTML = "";
    item.innerHTML = "";
    price.innerHTML = "";
    
}

function updateTotal() {
    if(option === 2){
        total.innerHTML = total.innerHTML * option;
    }
}
