const projectContainer = document.getElementById('projectContainer')
const certificateContainer = document.getElementById('certificateContainer')

async function getData(data) {
    try {
        const response = await fetch('../data.json')
        const result = await response.json()
        const dataProject = await result.projects
        const dataCertificate = await result.certificates
        if (data == 'certificate') {
            return dataCertificate
        } else if (data == 'project') {
            return dataProject
        }

    } catch (e) {
        console.log(e)
    }
}

getData('project').then(res => {
    res.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('col-lg-4', 'col-md-12', 'p-3', 'border-top', 'border-bottom');
        element.innerHTML = `
            <div class="row">
                            <div class="col">
                                <img src="${data.img}" alt="${data.nama}" class="img-fluid rounded box-shadow">
                            </div>
                            <div class="col pl-2">
                                <h2 class="h4 gradient-text font-weight-medium">${data.nama}</h2>   
                                <small class="tag">${data.tags[0]}</small>
                                <small class="tag">${data.tags[1]}</small>
                                <small class="tag">${data.tags[2]}</small>
                            </div >
                        </div >
                        <p class="text-secondary mt-1 project-description">${data.desc}</p>
                        <div class="row ml-3">
                            <div class="row ">
                                <a href="${data.link[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient"><i
                                        class="fa fa-globe"></i> Demo</a>
                            </div>
                            <div class="row ml-4">
                                <a href="${data.link[0]}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i
                                        class="fab fa-github"></i> Github</a>
                            </div>


                        </div>
            `
        projectContainer.appendChild(element);


    });
})

getData('certificate').then(res => {
    res.forEach(data => {
        const element2 = document.createElement('div');
        element2.classList.add('col-lg-4', 'col-md-12', 'p-3');
        element2.innerHTML = `
    <h2 class= "text-center text-secondary h4" > ${data.ket}.</h2>
<img src="${data.img}" alt="${data.ket}"
    class="img-fluid rounded  box-shadow">

    `
        certificateContainer.appendChild(element2)

    })
})