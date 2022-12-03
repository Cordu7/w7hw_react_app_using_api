
const GuardianListItem = ({position, title, url})=> {

    return(
        <div>
            <ul>
                <li className= 'news-item'>
                {position } 
                <a href={url}>{title}</a>
                </li>
            </ul>


        </div>
        
    )
}



export default GuardianListItem