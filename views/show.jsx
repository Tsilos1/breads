const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    //confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <h3>{bread.name}</h3>
            <div>
                <p>
                {bread.info}
                </p>
            </div>
            <p>
            {bread.name} bread
                {
                    bread.hasGluten
                    ? <span> does </span>
                    : <span> does Not </span>
                }
            have gluten.
            </p>
            <div>
            <img src={bread.image} alt={bread.name} />
            <div className="backButton">
            <a href={`/breads/${index}/edit`}><button>Edit</button></a>
            </div>
            <li><a href="/breads">Home</a></li>
            </div>
        </Default>
    )
}



module.exports = Show