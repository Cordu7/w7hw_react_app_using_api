import GuardianListItem from "./GuardianListItem";


const GuardianListComponent = ({articles, userInputTitle}) => {
    if (articles == null || articles.length === 0) {
        return <p>no news found, try again...</p>;
      };
    return(
        <div>
            <h2>The news on "{userInputTitle}"</h2>
            {articles.map((article, index) => {
                return( 
                
                    <GuardianListItem
                    position={index + 1}
                    key ={article.id}
                    title ={article.webTitle}
                    url ={article.webUrl}
                    userInputTitle= {userInputTitle}
                    />
                );
            })}
        </div>
    );

};
       
       
    




  

export default GuardianListComponent