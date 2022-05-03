
//Global variables
const divProjects = document.querySelector('div.projects');
const divOthers = document.querySelector('div.others');

//Get data
const getData = function (){
    fetch("data.json")
    .then(response => response.json())
    .then((jsonData) => {
        data = jsonData;

        console.log(data)

        data.forEach(item => {
            
            divProjects.innerHTML = divProjects.innerHTML + `
            
                <div class="single-project">
                    <a href="${item.href}" target="blank">${item.a}</a>
                    <p>${item.about}</p>
                    <h4 class="hashtag">${item.tools}</h4>
                </div>
            
            `
        });
        
        
    })
}

getData();

//Get data number two
const getDataTwo = function () {

    fetch("dataTwo.json")
    .then(response => response.json())
    .then((jsonData) => {
        data = jsonData;

        data.forEach(item => {

            divOthers.innerHTML = divOthers.innerHTML + `
            
            <div class="single-project">
                <h4>${item.title}</h4>
                <p>${item.text}</p>
                <h4 class="hashtag">${item.tools}</h4>
            </div>
            
            `
        })

    })

}

getDataTwo ();