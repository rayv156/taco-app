import React from "react"

const Display = (props) => {
    const {taco} = props
    // const [taco, setTaco] = React.useState({
    //     mixin: {
    //         name: "",
    //         url: "",
    //         slug: "",
    //         recipe: ""
    //     },
    //     base_layer: {
    //         name: "",
    //         url: "",
    //         slug: "",
    //         recipe: ""
    //     },
    //     seasoning: {
    //         name: "",
    //         url: "",
    //         slug: "",
    //         recipe: ""
    //     },
    //     shell: {
    //         name: "",
    //         url: "",
    //         slug: "",
    //         recipe: ""
    //     },
    //     condiment: {
    //         name: "",
    //         url: "",
    //         slug: "",
    //         recipe: ""
    //     },
    // });

    // const handleChange= (event) => {
    //     setTaco({...taco, [event.target.name]: event.target.value})
    //     console.log()
    // }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log(search)
//         props.search(search.term)
//     }
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="term" value={search.term} onChange={handleChange}/>
//             <input type="submit" value="submit" />
//         </form>

//     )
const div = {
    backgroundColor: "rgb(248,255,247)",
    color: "rgb(53, 104, 115)",
}

const loaded = () => {
    return(
    <div className="text-center" style={{backgroundColor: "rgb(53, 104, 115)", color: "white", padding: 10}}>
        <h1>Random Taco</h1>
   {/* <button onClick={handleChange}>Show Taco</button> */}
   <div className="card m-2" style={div}>
    <h2>Mixin: {taco.shell.name}</h2>
    <p>{taco.shell.recipe}</p>
    </div>
    <div className="card m-2" style={div}>
    <h2>Mixin: {taco.mixin.name}</h2>
    <p>{taco.mixin.recipe}</p>
    </div>
    <div className="card m-2" style={div}>
    <h2>Base Layer: {taco.base_layer.name}</h2>
    <p>{taco.base_layer.recipe}</p>
    </div>
    <div className="card m-2" style={div}>
    <h2>Condiment: {taco.condiment.name}</h2>
    <p>{taco.condiment.recipe}</p>
    </div>
    </div>
    )
}

return (taco.mixin && taco.base_layer && taco.seasoning && taco.shell && taco.condiment) ? loaded() : null
}

export default Display