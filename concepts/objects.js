const phone = {
    brand: 'Huawei',
    'S O': 'Android 10',
    ram: '4GB',
    hdd: '260GB',
    screen: '5"',
    model: 'Y',
    functional: true,
    damage: false
};

console.log(phone);
console.log(phone.brand);
phone.damage = true;
console.log(phone);

phone.color = 'black';
phone['case color'] = 'grey';
console.log(phone);
console.log(phone['color']);

phone.start = function(){
    console.log('Mi ' + this.brand + '...');
    console.log('Encendido.....');
    console.log('Listo!!!');
}

phone.call = function(name){
    console.log('Llamando a' + name);
    console.log('No contesto :/');
}

phone.start();
phone.call(' Batman');

