const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' });
};

let phonebooks = [
	{
		id: 1,
		name: 'Arto Hellas',
		number: '040-981562',
	},
	{
		id: 2,
		name: 'Ada Lovelace',
		number: '050-081563',
	},
	{
		id: 3,
		name: 'Dan Abramov',
		number: '060-181564',
	},
	{
		id: 4,
		name: 'Marry Poppendick',
		number: '070-281565',
	},
];

const generateId = () => {
	const id = Math.floor(Math.random() * 1000 + 1);
	return id;
};

//exercise 3.7 && 3.8
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

// exercise 3.1
app.get('/api/persons', (request, response) => {
	response.json(phonebooks);
});

// exercise 3.2
app.get('/info', (request, response) => {
	const len = phonebooks.length;
	response.send(`<p>Phonebook has info for ${len} people</p> <br />${Date()}`);
});

// exercise 3.3
app.get('/api/persons/:id', (request, response) => {
	const id = Number(request.params.id);
	const phonebook = phonebooks.find((pb) => pb.id === id);
	if (phonebook) {
		response.json(phonebook);
	} else response.status(404).end();
});

// exercise 3.4
app.delete('/api/persons/delete', (request, response) => {
	const body = request.body;
	const num = body.number;
	const index = phonebooks.findIndex((pb) => pb.number === num);
	if (index) {
		phonebooks.splice(index, 1);
		response.json(phonebooks);
	} else {
		return response.status(400).json({
			error: 'Phone number not found',
		});
	}
});

// exercise 3.5 && 3.6
app.post('/api/persons', (request, response) => {
	const body = request.body;
	if (!body.name || !body.number) {
		return response.status(400).json({ error: 'request should contain name and number' });
	}

	const contactName = phonebooks.find((pb) => pb.name === body.name);
	if (contactName) {
		return response.status(401).json({ error: 'Name should be unique' });
	}
	const phonebook = {
		id: generateId(),
		name: body.name,
		number: body.number,
	};

	phonebooks = phonebooks.concat(phonebook);
	response.json(phonebooks);
});

app.use(unknownEndpoint);

const PORT = 3003;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
