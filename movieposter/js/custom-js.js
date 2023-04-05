document.addEventListener('DOMContentLoaded', (loaded) => {
    console.log('Document is ready.');
});
$(document).ready(function () {
    $(function () {
        $("#head").load("meta.html");
        $("#footer").load("footer.html"); //load meta and footer
    });
});