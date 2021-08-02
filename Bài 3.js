    let Vowel = ['a', 'o', 'e', 'u', 'i'];
    let count = 0;
    function check(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < Vowel.length; j++) {
                if (arr[i] === Vowel[j]) {
                    count++;
                }
            }
        }
        return count;
    }

    let arr = prompt("nhập chuỗi ký tự");

    let result = check(arr);

    alert("Tổng số ký tự nguyên âm trong chuỗi là: " + result);