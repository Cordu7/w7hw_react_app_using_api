import { useEffect, useState } from "react";
import FormComponent from "../Components/FormComponent";
import GuardianListComponent from "../Components/GuardianListComponent";
import Image from "../Components/Image";
import api from "../api";

const GuardianContainer = ()=> {
    const[url, setUrl] = useState('https://content.guardianapis.com/search?q=brexit&format=json&api-key=test')
    const[listOfArticles, setListOfArticles] = useState([])
    const[userInputTitle, setUserInputTitle]= useState('brexit')
    
    
    useEffect(()=>{
    getArticles(url)
    }, [url]);

    const getArticles = function(url){
        fetch(url)
        .then(res => res.json())
        .then(data => setListOfArticles(data.response.results))
    }

    const handleSubmit = (userInput) => {
        let newUrl = url
        const string_1= "https://content.guardianapis.com/search?q="
        const string_2 = "&format=json&api-key=test"

        newUrl = string_1.concat(userInput.trim(), string_2)
        setUrl(newUrl)
        setUserInputTitle(userInput)
    };

    //"https://api.pexels.com/v1/search?query=nature&per_page=1"
    

    return (
        <>

        <FormComponent onSubmit={handleSubmit} />
        <GuardianListComponent articles = {listOfArticles} userInputTitle = {userInputTitle}/>
        <Image />
       
        </>
    );
};



export default GuardianContainer
