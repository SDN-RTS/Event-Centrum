
function slider() {

    /* #region  VARIABLE DECLARATIONS */
    let sliderImages =
    [
        './images/slider/slider1.jpg',
        './images/slider/slider2.jpg',
        './images/slider/slider3.jpg'
    ]

    let topTitles =
    [
        'Event Centrum skaber',
        'Velkommen til',
        'Vi glæder os til at se jer'
    ]

    let mainTitles =
    [
        'DEN HELT RIGTIGE STEMNING',
        'DIT LIVS OPLEVELSE',
        'TIL ET BRAG AF EN FEST'
    ]

    let description = 
    [
        "...i jeres egne rammer (kantine, lager, parkeringskælder), udendørs (skov, strand) eller på hoteller & konferencesteder overalt i Danmark.",
        "...sammen med en masse andre nysgerrige andre ligesom jer, som elsker alt som hedder eventyr!",
        "...vi sørger for stalde med drikke, mad og massere af underholdning så ingen kommer til at kede sig!"
    ]

    let imageCount = document.querySelectorAll('.imageCount');

    let i = 0;
    /* #endregion */
    /* #region  CONTENT ON PAGELOAD */
    document.querySelector('.slider').style.backgroundImage = 'url(' + sliderImages[i] + ')';
    document.querySelector('.topTitle').innerText = topTitles[i];
    document.querySelector('.mainTitle').innerText = mainTitles[i];
    document.querySelector('.sliderDescription').innerText = description[i];
    imageCount[i].classList.add('countColor');
    /* #endregion */

    setInterval(() => {
        if (i > sliderImages.length - 2) {
            i = 0;
        } else {
            i++;
        }
        document.querySelector('.slider').style.backgroundImage = 'url(' + sliderImages[i] + ')';
        document.querySelector('.topTitle').innerText = topTitles[i];
        document.querySelector('.mainTitle').innerText = mainTitles[i];
        document.querySelector('.sliderDescription').innerText = description[i];

        // mini icon update
        for (let f = 0; f < imageCount.length; f++) {
            imageCount[f].classList.remove('countColor');
        }
        imageCount[i].classList.add('countColor');
    }, 3000);

     document.querySelector('.nextBtn').addEventListener('click', function(){
         i++
        if (i > sliderImages.length - 1) {
            i = 0;
        }
        document.querySelector('.slider').style.backgroundImage = 'url(' + sliderImages[i] + ')';
        document.querySelector('.topTitle').innerText = topTitles[i];
        document.querySelector('.mainTitle').innerText = mainTitles[i];
        document.querySelector('.sliderDescription').innerText = description[i];

        // mini icon update
        for (let f = 0; f < imageCount.length; f++) {
            imageCount[f].classList.remove('countColor');
        }
        imageCount[i].classList.add('countColor');
    })

    document.querySelector('.prevBtn').addEventListener('click', function(){
        i--;
        if (i < 0) {
            i = sliderImages.length - 1;
        }
        document.querySelector('.slider').style.backgroundImage = 'url(' + sliderImages[i] + ')';
        document.querySelector('.topTitle').innerText = topTitles[i];
        document.querySelector('.mainTitle').innerText = mainTitles[i];
        document.querySelector('.sliderDescription').innerText = description[i];

        // mini icon update
        for (let f = 0; f < imageCount.length; f++) {
            imageCount[f].classList.remove('countColor');
        }
        imageCount[i].classList.add('countColor');
    })

};

export default slider;