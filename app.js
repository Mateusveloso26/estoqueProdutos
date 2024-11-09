const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars')
const session = require('express-session');
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');

const app = express();
PORT = process.env.PORT || 3002

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 30 ,
        secure: false
    }
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'));

app.use('/', mainRoutes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando na porta http://localhost:${PORT}`);
    console.log(`Servidor funcionando na porta http://localhost:${PORT}/panel`);
});     