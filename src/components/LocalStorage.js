import React,{Component} from "react";
import Header from "./Header"


class LocalStorage extends Component {
    render() {
        const person = {
            name: "chidera",
            age: 16
        }
        //convert to json object
        const personToJSON= JSON.stringify(person)

        //save to local storage
        localStorage.setItem("newPerson", personToJSON);
        //retrieve from ls
        const getPerson = localStorage.getItem("newPerson")
        //convert to objectnewPerson
        const personParse = JSON.parse(getPerson);
        return(
            <div>
            <Header title="LocalStorage"/>
            <h3>The stringified version is</h3>
            <p>{getPerson}</p>
            <h4>The parsed version is:</h4>
            <p>{personParse.name} and {personParse.age}</p>
            </div>
        )
    }
}

export default LocalStorage;