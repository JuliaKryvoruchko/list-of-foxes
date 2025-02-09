
//all items filter-topic start

window.onload = function () {
    const listItems = document.querySelectorAll("ul.filter__section li");
    const galleryItem = document.querySelectorAll(".gallery__type");

    function toggleActiveClass(t) {
        listItems.forEach((t) => {
            t.classList.remove("active");
        }),
            t.classList.add("active");
    }

    function toggleProjects(t) {

        if ("all" === t)
            galleryItem.forEach(item => {
                item.style.display = "block";
            });
        else
            galleryItem.forEach(item => {
                item.dataset.class === t
                    ? (item.style.display = "block")
                    : (item.style.display = "none");
            });


    }

    for (let t = 0; t < listItems.length; t++)
        listItems[t].addEventListener("click", function () {
            toggleActiveClass(listItems[t]),
                toggleProjects(listItems[t].dataset.class);
        });
};

const listItems = document.querySelectorAll('li');

function handleItemClick(event) {

    listItems.forEach(item => item.classList.remove('clicked'));

    event.target.classList.add('clicked');
}

listItems.forEach(item => {
    item.addEventListener('click', handleItemClick);
});

//all items filter-topic end

