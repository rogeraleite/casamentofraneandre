    CountDownTimer('11/21/2015 04:00 PM', 'countdown');
    //CountDownTimer('11/21/2015 04:00 PM', 'countdown2');

    function CountDownTimer(dt, id)
    {
        var end = new Date(dt);

        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

                clearInterval(timer);
                document.getElementById(id).innerHTML = 'EXPIRED!';

                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

            $('#'+id).text(days + ' days ');
            $('#'+id).append(hours + ' hrs ');
            $('#'+id).append(minutes + ' mins ');
            $('#'+id).append(seconds + ' secs');
        }

        timer = setInterval(showRemaining, 1000);
    }

