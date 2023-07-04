//func untuk peringatan alert jika ada kolom yang belum diisi

function alertWarning() {
    let projectName = document.getElementById("project").value;
    let projectStart = document.getElementById("start-date").value;
    let projectEnd = document.getElementById("end-date").value;
    let projectDescription = document.getElementById("desc").value;
    let projectImage = document.getElementById("img").value;

    let say = [];

    if (projectName = "") {
        say.push("projectName");
    }
    if (projectStart = "") {
        say.push("projectStart");
    }
    if (projectEnd = "") {
        say.push("projectEnd");
    }
    if (projectDescription = "") {
        say.push("projectDescription");
    }
    if (projectImage = "") {
        say.push("projectImage");
    }

    if (say.length > 0) {
        let hay = say.join(", ");
        alert(`Kolom ${hay} semuanya harus diisi yah bang !`);
        return;
    }
}


// menampung array of object yang sudah di submit

const projectData = [];

//untuk mengambil/menyimpan data dan akan idi tampung di projectData

function postProject(event) {
    event.preventDefault();

    let projectName = document.getElementById("project").value;
    let projectDescription = document.getElementById("desc").value;
    let projectImage = document.getElementById("img").value;

    const jsIcon = '<i class="fa-brands fa-square-js fa-xl fa-fw"></i>';
    const bootstrapIcon = '<i class="fa-brands fa-bootstrap fa-xl fa-fw"></i>';
    const goIcon = '<i class="fa-brands fa-golang fa-xl fa-fw"></i>';
    const reactIcon = '<i class="fa-brands fa-react fa-xl fa-fw"></i>';

    let jsCheckIcon = document.getElementById("js").checked ? jsIcon : "";
    let bootstrapCheckIcon = document.getElementById("bootstrap").checked ? bootstrapIcon : "";
    let goCheckIcon = document.getElementById("go").checked ? goIcon : "";
    let reactcheckIcon = document.getElementById("react").checked ? reactIcon : "";

    projectImage = URL.createObjectURL(projectImage[0]);
    console.log(projectImage);

    let projectPriviewData = {
        projectName,
        projectDescription,
        jsCheckIcon,
        bootstrapCheckIcon,
        goCheckIcon,
        reactcheckIcon,
        projectImage,
    };

    projectData.push(projectPriviewData);
    console.log(ProjectData);
}


