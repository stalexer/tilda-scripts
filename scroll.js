<script>
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

    let arrow1 = document.querySelector(".scroll-to-block-2");
    if (arrow1) {
        arrow1.addEventListener("click", function(e) {
            e.preventDefault();
            scrollToBlock("rec860277785");
        });
    }

    let arrow2 = document.querySelector(".scroll-to-block-3");
    if (arrow2) {
        arrow2.addEventListener("click", function(e) {
            e.preventDefault();
            scrollToBlock("rec860277788");
        });
    }
});
</script>
