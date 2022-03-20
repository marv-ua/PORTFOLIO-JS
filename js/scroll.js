const links = document.querySelectorAll('.menu-list__link');
const btn = document.querySelector('.main__button');
const mainScrollBtn = document.querySelector('.main__scroll');

const allLinks = [...links, btn, mainScrollBtn];

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const id = link.getAttribute('href').substring(1);  // получили атрибут href и отрезали 1 символ (#)
        const section = document.getElementById(id);

        if (section) {
            // не работает на маках
            // section.scrollIntoView({
            //     block: 'start',
            //     behavior: 'smooth'
            // })

            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})