
export default function Form() {
    const handleSubmit = (ev) => {
    }
    
   
    return(
        <>
            <form className = "homeSelectForm" onSubmit = {handleSubmit} >
                <label for="chose-select">Sort by:  </label>
                    <select name="chose" id="chose-select">
                        <option value="">--Please choose an option--</option>
                        <option value="points">Points</option>
                        <option value="rebounds">Rebounds</option>
                        <option value="assists">Assists</option>
                        <option value="accuracy">Accuracy</option>
                    </select>
            </form>
           
           
        </>
    )   
}