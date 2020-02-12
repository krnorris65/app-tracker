import API from './data.js';
import DOM from './dom.js';
import Events from './events.js'

DOM.createForm();
Events.addSaveBtnListener();
API.getIdeas().then(DOM.renderIdeas);