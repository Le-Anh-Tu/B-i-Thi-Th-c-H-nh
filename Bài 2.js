    function searchIndex(number, arr) {
        let index = -1;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === number) {
                return index = i;
            }
        }
        return -1;
    }
    let arr = [6,7,4,9,1];
    let number = parseInt(prompt("Nhập số cần tìm"));
    let result = searchIndex(number, arr);
    if (result !== -1) {
        alert(number + " Nằm ở vị trí " + result);
    } else {
        alert("Không tìm đc");
    }