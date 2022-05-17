const express = require("express");
const path = require("path");

const app = express();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.set('views', path.join(__dirname, 'views'))

const validPages = {
    'about': 'about',
    'contact': 'contact'
}

app.get('/', (req,res) => {
    res.render('pages/index.ejs')
})

app.get('/:page', (req, res) => {
    const page = req.params.page
    if(page.indexOf('.') != -1) return res.send(`the file you are requesting, ${page}, cannot be found.`)
    if(validPages[page]){
        res.render(`pages/${page}.ejs`)
    }
    else res.render('pages/notfound.ejs')
})


app.listen(80, () => console.log("running server"))
