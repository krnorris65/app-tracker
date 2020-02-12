import ideaHTML from './component.js'

const dom = {
    renderIdeas: (ideas) => {
        const ideaContainer = document.getElementById("idea-container");
        ideaContainer.innerHTML += "";
        ideas.forEach(idea => ideaContainer.innerHTML += ideaHTML(idea))

    }

}
export default dom