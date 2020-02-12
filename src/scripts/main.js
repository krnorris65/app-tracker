import API from './data.js'
import DOM from './dom.js'

API.getIdeas().then(DOM.renderIdeas);