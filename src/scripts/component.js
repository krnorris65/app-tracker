const ideaHTML = (idea) => {
    return `
        <section id="idea--${idea.id}">
            <h2>${idea.name}</h2>
            <p>${idea.description}</p>
            <p>${idea.tools}</p>
        </section>
    `
}

export default ideaHTML;