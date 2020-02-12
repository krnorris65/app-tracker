import API from './data.js'
import DOM from './dom.js'
const events = {
    addSaveBtnListener: () => {
        const saveBtn = document.getElementById("saveBtn");

        saveBtn.addEventListener("click", () => {
            const nameEl = document.getElementById("nameInput");
            const descriptionEl = document.getElementById("descriptionInput");
            const toolsEl = document.getElementById("toolsInput");

            const newIdea = {
                name: nameEl.value,
                description: descriptionEl.value,
                tools: toolsEl.value
            }

            if (nameEl.value === "" || descriptionEl.value === "" || toolsEl.value === "") {
                alert("Please Complete All Fields")
            } else {
                API.saveNewIdea(newIdea)
                    .then(API.getIdeas)
                    .then(DOM.renderIdeas)

                nameEl.value = ""
                descriptionEl.value = ""
                toolsEl.value = ""
            }
        })
    }
}

export default events;