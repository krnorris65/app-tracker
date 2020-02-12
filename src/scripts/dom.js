import ideaHTML from './component.js'

const dom = {
    renderIdeas: (ideas) => {
        const ideaContainer = document.getElementById("idea-container");
        ideaContainer.innerHTML = "";
        ideas.forEach(idea => ideaContainer.innerHTML += ideaHTML(idea))

    },
    createForm: () => {
        const ideaForm = document.getElementById("idea-form");
        ideaForm.innerHTML = `
            <section>
                <div>
                    <label for="nameInput">Name:</label>
                    <input id="nameInput" />
                </div>
                <div>
                    <label for="descriptionInput">Description:</label>
                    <input id="descriptionInput" />
                </div>
                <div>
                    <label for="toolsInput">Tools:</label>
                    <input id="toolsInput" placeholder="Languages, Frameworks, APIs" />
                </div>
                <button id="saveBtn">Save Idea</button>
            </section>
        `
    }

}
export default dom