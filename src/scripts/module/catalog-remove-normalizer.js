checkWidth();
window.onresize = function() {
    checkWidth();
};
function checkWidth() {
    if (window.innerWidth < 768) {
        var catalContentHolder = document.querySelector('.catal-content-holder');
        catalContentHolder.classList.remove('block-normalizer');
    }
    else {
        var catalContentHolder = document.querySelector('.catal-content-holder');
        catalContentHolder.classList.add('block-normalizer');
    }
}