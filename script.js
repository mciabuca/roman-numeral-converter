document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('convert-btn').addEventListener('click', function() {
        var num = document.getElementById('number').value;
        var output = document.getElementById('output');

        // Check for empty input
        if (num.trim() === '') {
            output.textContent = 'Please enter a valid number';
            return;
        }

        num = Number(num);

        if (isNaN(num) || num < 1) {
            output.textContent = 'Please enter a number greater than or equal to 1';
            return;
        }

        if (num >= 4000) {
            output.textContent = 'Please enter a number less than or equal to 3999';
            return;
        }

        output.textContent = convertToRoman(num);
    });

    function convertToRoman(num) {
        var roman = {
            M: 1000, CM: 900, D: 500, CD: 400,
            C: 100, XC: 90, L: 50, XL: 40,
            X: 10, IX: 9, V: 5, IV: 4, I: 1
        };
        var str = '';

        for (var i of Object.keys(roman)) {
            var q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }

        return str;
    }
});
