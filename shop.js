document.getElementById('btn').addEventListener('click', addCart);
const total = document.querySelector('.total');
const single = document.getElementById('single').innerHTML;
const item = document.getElementById('item');
const item1 = document.getElementById('item1').innerHTML;
const price = document.querySelector('.price');
const price1 = document.getElementById('price1').innerHTML;
document.getElementById('remove').addEventListener('click', removeAll);

function addCart(){
    const btn = document.getElementById('btn');
    total.innerHTML = single;
    item.innerHTML = item1;
    price.innerHTML = single;
    
}

function removeAll(){
    const removeBtn = document.getElementById('remove');
    alert('asd');
}
