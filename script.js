const img = document.querySelector('img')
const btns = document.querySelectorAll('button')
const images = [
    './img/white.png',
    './img/grin.png',
]
const p = document.querySelectorAll('.text p')
const span = document.querySelectorAll('.text span')
const ssdBtn = document.querySelectorAll('.ssd button')

btns.forEach((btn, inx) => {
    btn.onclick = () => {
        document.querySelector('button.active').classList.remove('active')
        btn.classList.add('active')

        img.setAttribute('src', images[inx])

        p.forEach((param) => {
            if (!param.classList.contains('color')) {
                param.classList.add('color');
                param.innerHTML = 'Space Gray'
                span.innerHTML = '$2,599'

            } else {
                param.classList.remove('color');
                param.innerHTML = 'White'
            }
        })
        span.forEach((spane) => {
            if (!spane.classList.contains('money')) {
                spane.classList.add('money');
                spane.innerHTML = '$2,599'


            } else {
                spane.classList.remove('money');
                spane.innerHTML = '$1,999'

            }
        })
    }
})

ssdBtn.forEach((ssd) => {
    ssd.onclick = () => {
        ssdBtn.forEach((elem) => elem.classList.remove('btnactive'));

        ssd.classList.add('btnactive');

        const price = ssd.getAttribute('data-price');

        span.forEach((el) => {
            el.innerHTML = `$${price}`;
        });
    }
});

