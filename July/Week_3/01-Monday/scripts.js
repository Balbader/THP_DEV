const main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"];

const random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)];
const random_technique = techniques[Math.floor(Math.random()*techniques.length)];
const random_side = sides[Math.floor(Math.random()*sides.length)];
const random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)];

let menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`;

$('#nav-tab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    $('#nav-tab a[href="#nav-platDuJour"]').tab('show') // Select tab by name
});

$('#nav-tab a[href="#nav-platDuJour"]').tab('show') // Select tab by name
$('#nav-tab li:first-child a').tab('show') // Select first tab
$('#nav-tab li:last-child a').tab('show') // Select last tab
$('#nav-tab li:nth-child(3) a').tab('show') // Select third tab

































/* ============== Show Tabs on click ==============

const showTab = (tab) => {
    tab = document.querySelector('.nav-item a');
    if (tab.style.display === "none") {
        tab.style.display = "block";
    } else {
        tab.style.display = "none";
    }
}

const tabs = document.querySelectorAll('nav-item a');
tabs.forEach((tab) => tab.addEventListener('onclick', showTab, makeActive()));

// Create 'ul' element to display Main Courses on the DOM
const displayMainCourses = document.querySelector('#tabs');

// Split main_courses arr to append arr element to ul in dom
const newMainCourses = [];

main_courses.map((element) => {
    newMainCourses.push(element);
});

const item = document.createElement('p');
item.textContent = menu;
console.log(item);

for (let i = 0; i < newMainCourses.length; i++) {
    const item = document.createElement('li'*);
    item.textContent = newMainCourses[i];
    displayMainCourses[0].appendChild(item);

}
console.log(displayMainCourses);
*/





