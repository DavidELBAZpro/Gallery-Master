'use strict'

console.log('Starting up');
var gProjects = []

_createProjects()

function _createProjects() {
    
    gProjects.push(_createProj('1','Pacman', 'PacMan',  'Pac-Man is an action maze chase video game', 'https://davidelbazpro.github.io/Pacman/', '15/03/22' ))
    gProjects.push(_createProj('2','ChessGame', 'ChessGame',  'hello', 'https://davidelbazpro.github.io/Chessgame1/', '20/03/22'))
    gProjects.push(_createProj('3','MineSweeper', 'MineSweeper',  'hello', 'https://davidelbazpro.github.io/Sprint1-CA/', '25/03/22'))
    gProjects.push(_createProj('4','BookShop', 'BookShop',  'hello', 'whttps://davidelbazpro.github.io/Bookshop/' , '30/03/22'))
   
    console.log(gProjects);
}



function _createProj(id, name, title, desc, url, publishedAt, labels, imgUrl = `img/portfolio/${name}.jpg`) {
    return {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
        imgUrl,
    }
}

function getProjects() {
    return gProjects
}

function getProjectById(id) {
    const project = getProjects().find(project => {
        return id === project.id
    })
    return project
}

