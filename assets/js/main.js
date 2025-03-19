/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {
    "use strict";

    var $body = document.querySelector('body');

    // Slideshow Background.
    (function() {
        var settings = {
            images: {
                'assets/images/bg01.jpg': 'center',
                'assets/images/bg02.jpg': 'center',
                'assets/images/bg03.jpg': 'center'
            },
            delay: 6000
        };

        var pos = 0, lastPos = 0, $wrapper, $bgs = [], $bg, k, v;

        // Create BG wrapper, BGs.
        $wrapper = document.createElement('div');
        $wrapper.id = 'bg';
        $body.appendChild($wrapper);

        for (k in settings.images) {
            // Create BG.
            $bg = document.createElement('div');
            $bg.style.backgroundImage = 'url("' + k + '")'; // Make sure the paths are correct
            $bg.style.backgroundPosition = settings.images[k];
            $wrapper.appendChild($bg);

            // Add it to array.
            $bgs.push($bg);
        }

        // Main loop.
        $bgs[pos].classList.add('visible');
        $bgs[pos].classList.add('top');

        if ($bgs.length == 1 || !canUse('transition')) return;

        window.setInterval(function() {
            lastPos = pos;
            pos++;

            if (pos >= $bgs.length) pos = 0;

            $bgs[lastPos].classList.remove('top');
            $bgs[pos].classList.add('visible');
            $bgs[pos].classList.add('top');

            window.setTimeout(function() {
                $bgs[lastPos].classList.remove('visible');
            }, settings.delay / 2);
        }, settings.delay);

    })();
})();
