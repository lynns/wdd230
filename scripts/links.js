const linksURL = "data/links.json";

async function loadLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    const linksContainer = document.querySelector("#LessonContainer");

    data.lessons.forEach(lesson => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(`Week ${lesson.lesson}: `));
        let count = 0;
        lesson.links.forEach(link => {
            if (count++ > 0) {
                li.appendChild(document.createTextNode(" | "));
            }
            const a = document.createElement("a");
            a.href = link.url;
            a.appendChild(document.createTextNode(link.title));
            li.appendChild(a);
        });
        linksContainer.appendChild(li);
    });
}

loadLinks();