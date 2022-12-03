import { useState } from "react";

const FormComponent = ({onSubmit})=> {
    
    
    const[urlInsert, setUrlInsert] = useState("")

    const handleChange = (event) => {
        let copyUrlInsert = urlInsert;
        copyUrlInsert = event.target.value;
        setUrlInsert(copyUrlInsert);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(urlInsert);
        // setUrlInsert("")
      }

    //   console.log('url insert is', urlInsert);
    
      return (
        <form>
          <div className="form_wrap">
            <label htmlFor="urlInsert">News On </label>
            <input
              onChange={handleChange}
              name="urlInsert"
              id="urlInsert"
              type="text"
              placeholder="enter search term"
              value={urlInsert} />
            {/* <input 
              type= 'submit'
              value='submit'/> */}
              <input onClick={handleSubmit} type="submit" value="submit" />
          </div>
          </form>  
       
        
    );
};



export default FormComponent