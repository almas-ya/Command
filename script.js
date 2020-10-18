let str = [];
for (let i = 0; i < Infinity; i++) {
    let com = prompt('Введите команду add, del, stop');
    let arr = com.split(', ');
    if (arr[0] == 'add') {
        str.push(arr[1]);
        console.log(arr);
    } else if (arr[0] == 'del') {
        for (let a = 0; a < str.length; a++) {
            arr[1] == str[a] ? str.splice(a, 1) : '';
        }
    } else if (arr[0] == 'stop') {
        break;
    }
    console.log(str);
}
console.log(str);