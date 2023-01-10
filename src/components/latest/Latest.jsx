import "./latest.css"

export default function Latest(){
    return(
        <div className="latest">
            <h3 className="herotext">
                Latest Post
            </h3>
            <div className="latestPost">
                <div className="post">
                    <img 
                    className="latestImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h5>New Year's Celebration</h5>
                    <p>2 days Ago</p>
                </div>
                <div className="post">
                    <img 
                    className="latestImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h5>Christmas</h5>
                    <p>1 week Ago</p>
                </div>
                <div className="post">
                    <img 
                    className="latestImg"
                    src="https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                    alt=""/>
                    <h5>Paskuhan</h5>
                    <p>2 weeks Ago</p>
                </div>
            </div>
            
        </div>
    )
}