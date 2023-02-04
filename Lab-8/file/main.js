const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector('.output');
const img = document.getElementById('img');
const mediaType = document.getElementById("type");

fileInput.addEventListener("change", () => {
    const [file] = fileInput.files;
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            switch(mediaType.value){
                case "text":
                    const table = document.createElement("table");
                    const json = JSON.parse(reader.result);
                    const keys = Object.keys(json[0]);
                    const tr = document.createElement("tr");
                    keys.forEach(key => {
                        const th = document.createElement("th");
                        th.textContent = key;
                        tr.appendChild(th);
                    });
                    table.appendChild(tr);
                    json.forEach(row => {
                        const tr = document.createElement("tr");
                        keys.forEach(key => {
                            const td = document.createElement("td");
                            td.textContent = row[key];
                            tr.appendChild(td);
                        });
                        table.appendChild(tr);
                    });
                    output.appendChild(table);
                    
                    
                    break;
                case "image":
                    img.src = reader.result;
                    break;
            }
        });
        switch(mediaType.value){
            case "text":
                reader.readAsText(file);
                console.log(file);
                break;
            case "image":
                reader.readAsDataURL(file);
                break;
        }
    }
});