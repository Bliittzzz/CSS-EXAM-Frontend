import "./topbar.css"

export default function Topbar(){
    return(
        <div className="top">
            <div className="topleft">
                <img className="anylogo" src="./img/Any logo.png" alt=""/>
            </div>
            <div className="space"></div>
            <div className="topright">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Community</li>
                    <li className="topListItem">News & Events</li>
                </ul>
            </div>
        </div>
    )
}