const serviceData = [
    {
        title: "Собственная доставка мебели на производство",
        img: ""
    },
    {
        title: "Работа по договору с фиксированной ценой и установленными сроками выполнения заказа",
        img: ""
    },
    {
        title: "Гарантия на все наши работы 1 год",
        img: ""
    },
    {
        title: "Реставрация и перетяжка мебели любой сложности",
        img: ""
    },
    {
        title: "Материалы европейского качества",
        img: ""
    },
    {
        title: "Минимальные среднерыночные цены",
        img: ""
    },
]

const serviceList = document.querySelector("#service-list");

serviceData.forEach((data) => {
    const serviceElement = document.createElement("div");
    serviceElement.innerHTML = `
        <div class="service-element">
           <div></div>
           <p>${data.title}</p>
</div>
    `
    serviceList.append(serviceElement);
})
let works =[]

const getWorksImages = async () => {
    const response = await fetch("https://1928083ccc061b5f.mokky.dev/works");
    works =  await response.json();
    const content = document.querySelector(".works-data");
    works.forEach((work) => {
        const workImage = document.createElement("img");
        workImage.src = work?.image;
        workImage.alt = work?.name;
        content.append(workImage);
    })
}
getWorksImages();

let job = [];

const getImages = async () => {
    const response = await fetch("https://1928083ccc061b5f.mokky.dev/attedance");
    job = await response.json();
    const content = document.querySelector(".attendance-data");

    job.forEach((work) => {
        const card = document.createElement("div");
        card.className = "service-card";

        const workImage = document.createElement("img");
        workImage.src = work?.image;
        workImage.alt = work?.name;

        const workTitle = document.createElement("p");
        workTitle.textContent = work?.name;

        card.append(workImage, workTitle);
        content.append(card);
    });
};

getImages();
