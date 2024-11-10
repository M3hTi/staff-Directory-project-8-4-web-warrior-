

const tbodyElement = document.querySelector("#tbody");
const chooseFile = document.querySelector("#fileInput");

function getFile() {
    const userFile = chooseFile.files[0];
    console.log(userFile);
    try {
        if(!userFile.type.endsWith("json")) throw new Error("Please select a JSON file")
        const fileReader = new FileReader();
        // console.log(fileReader);
        fileReader.readAsText(userFile)

        fileReader.onload = function() {
            const fileContent = fileReader.result;
            // console.log(fileContent);
            const informations = JSON.parse(fileContent);
            // console.log(informations);
            const directory = informations.directory
            for (const info of directory) {
                // console.log(info);
                const trElement = document.createElement("tr");
                for (const key in info) {
                    const tdElement = document.createElement("td");
                    tdElement.textContent = info[key];
                    trElement.appendChild(tdElement);
                }
                tbodyElement.appendChild(trElement);
            }
        }
    } catch (error) {
        alert(error)
    }
}




chooseFile.addEventListener('change', getFile)









