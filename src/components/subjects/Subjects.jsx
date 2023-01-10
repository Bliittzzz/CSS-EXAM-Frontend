import "./subjects.css"

export default function Subjects(){
    return(
        <div className="subjects">
            <h3 className="herotext">
                Subjects
            </h3>
            <h6 className="incidunt">
                incididunt ut labore et dolore magna aliqua
            </h6>
            
                <button className="subjectButton">Data Science</button>
                <button className="subjectButton">Core Science</button>
                <button className="subjectButton">Game Development</button>
            
            <div className="subjectPosts">
                <div className="subjectpost">
                    <img 
                    className="subjectImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h2 className="subjectCode">CS2616</h2>
                    <h2 className="subjectTitle">THEORY OF AUTOMATA</h2>
                    <button className="subjectLearnmore">Learn More</button>
                </div>

                <div className="subjectpost">
                    <img 
                    className="subjectImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h2 className="subjectCode">CS2611</h2>
                    <h2 className="subjectTitle">LINEAR ALGEBRA FOR COMPUTING SCIENCES</h2>
                    <button className="subjectLearnmore">Learn More</button>
                </div>
                <div className="subjectpost">
                    <img 
                    className="subjectImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h2 className="subjectCode">CS2613</h2>
                    <h2 className="subjectTitle">LOGIC AND DIGITAL CIRCUITS DESIGN</h2>
                    <button className="subjectLearnmore">Learn More</button>

                </div>
                {/* <div className="subjectpost">
                    <img 
                    className="subjectImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h2 className="subjectCode">CS2617</h2>
                    <h2 className="subjectTitle">ADVANCED PROBABILITY AND STATISTICS</h2>
                </div> */}
            </div>
            
        </div>
    )
}