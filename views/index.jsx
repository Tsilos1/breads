const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads, title})  {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        {/* This is a JSX comment. */}
        {/* <p>I have {breads[0].name} bread!</p> */}
        <ul>
            {
              breads.map((bread, index) => {
                return(
                    <li key={index}>
                        {/* index refers to the index position of the array item */}
                        <a href={`/breads/${index}`}>
                            {bread.name}
                        </a>
                    </li>
                )
              }
              )  
            }
        </ul>
        <div className="newButton">
          <a href="/breads/new"><button>Add a new bread</button></a>
        </div>


      </Default>      
    )
}


module.exports = Index