    function giaiPhuongtrinh(a,b) {
        let x = 0;
        if (a == 0) {
            if (b == 0) {
                alert('Phương trình vô số nghiệm.');

            } else {
                alert('Phương trình vô nghiệm');
            }
        } else {
            x = -b / a;
            alert('Phương trình có nghiệm: ' + x);
        }
    }
        let a = 5;
        let b = 8;
        document.write(giaiPhuongtrinh(a,b));