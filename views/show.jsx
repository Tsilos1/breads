const React = require('react')
const bread = require('../models/bread')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
    //confirm we are getting our bread data in the terminal.
    // console.log(bread.name)
    return (
        <Default>
            <h3><a href={`/breads/${bread.id}`}>
                {bread.name}
            </a></h3>
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
                <p>Baked by {bread.baker}</p>
                <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>


            <div className="backButton">
            </div>
            
            <div>        
            <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
            <input type='submit' value="DELETE"/>
            </form>
            </div>
            <li><a href="/breads">Home</a></li>
            </div>
        </Default>
    )
}



module.exports = Show