import "./App.css"

function Nav(props){
    // var link1="Instagram"
    // var link2="Twitter"
    // var link3="YouTube"
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="https://www.w3schools.com/react/react_props.asp" target="_blank" rel="noreferrer">{props.link1}</a></li>
                    <li><a href="https://www.w3schools.com/react/react_props.asp" target="_blank" rel="noreferrer">{props.link2}</a></li>
                    <li><a href="https://www.w3schools.com/react/react_props.asp" target="_blank" rel="noreferrer">{props.link3}</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav