document.addEventListener("DOMContentLoaded", function() {
    function scrollToBlock(targetId) {
        let targetBlock = document.getElementById(targetId);
        if (targetBlock) {
            let targetPosition = targetBlock.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    }

    document.querySelectorAll(".scroll-down").forEach(button => {
        button.addEventListener("click", function(e) {
            e.preventDefault();
            let targetId = this.getAttribute("data-target");
            scrollToBlock(targetId);
        });
    });
});
