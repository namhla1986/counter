const counters = document.querySelectorAll(".counters");
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = counter.getAttribute("data-target");

        console.log(target);
    }

    updateCount();

});
