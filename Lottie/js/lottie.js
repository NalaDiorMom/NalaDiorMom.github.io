//Get Animation Container
let animationMonster = document.getElementById("animationMonster");
let animationToggle = document.getElementById("animationToggle");
let toggle_c = 0

//Get Monster from lottie
let monster =
    bodymovin.loadAnimation({
          container: animationMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/c54bb9b0-5d4d-4919-8a45-124a1835e61e/uckvWLolNd.json"
        });

//Get Toggle from lottie
let toggle =
    bodymovin.loadAnimation({
          container: animationToggle,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/84c26277-1cd5-495e-b7a2-3116e4bef206/U2R7fCjf8m.json"
        });

//Monster emotes with Event Listeners
//Play excited frames
animationMonster.addEventListener('click', function() {
    monster.playSegments([1,80], true)});
animationMonster.addEventListener('mouseenter', function() {
    monster.playSegments([221,302], true)});
animationMonster.addEventListener('mouseleave', function() {
    monster.playSegments([81,220], true)});

//Toggle on one side
animationToggle.addEventListener('click', function() {
    if (toggle_c == 0) {
        toggle.playSegments([1,70], true);
        toggle_c = toggle_c + 1;
    } else {
        toggle.playSegments([80,120], true);
        let toggle_c = 0;
    }
})