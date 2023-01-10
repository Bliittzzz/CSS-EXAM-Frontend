import "./tracks.css"

export default function Tracks(){
    return(
        <div className="tracks">
            <h3 className="tracksTitle">Tracks</h3>
            <div className="tracksDiff">
                <div className="tracksDataSci">
                    <img
                    className="tracksImg" 
                    src="https://i.pinimg.com/originals/40/ce/e2/40cee2ae407de99af49bea4ff771bcff.jpg" 
                    alt=""/>
                    <div className="tracksinfo">
                        <h5 className="tracksInfo">
                            Data Science
                        </h5>
                        <p className="tracksDetails">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula.
                        </p>
                        <button className="tracksButtons">Learn More</button>
                    </div>

                </div>
                <div className="tracksCS">
                    <img
                    className="tracksImg" 
                    src="https://i.pinimg.com/originals/40/ce/e2/40cee2ae407de99af49bea4ff771bcff.jpg" 
                    alt=""/>
                    <div className="tracksinfo">
                        <h5 className="tracksInfo">
                            Core CS
                        </h5>
                        <p className="tracksDetails">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula.
                        </p>
                        <button className="tracksButtons">Learn More</button>
                    </div>

                </div>
                <div className="tracksGame">
                    <img
                    className="tracksImg" 
                    src="https://i.pinimg.com/originals/40/ce/e2/40cee2ae407de99af49bea4ff771bcff.jpg" 
                    alt=""/>
                    <div className="tracksGame">
                        <h5 className="tracksInfo">
                            Game Development
                        </h5>
                        <p className="tracksDetails">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras venenatis metus a consequat gravida. Aliquam egestas et orci nec vestibulum. Nulla enim urna, accumsan id purus vel, dapibus ultricies ligula.
                        </p>
                        <button className="tracksButtons">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}