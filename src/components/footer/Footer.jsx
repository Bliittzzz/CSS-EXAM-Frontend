import "./footer.css"

export default function Footer(){
    return(
        <div className="footer">
            <div className="row">
                <div className="colleft">
                    <img className="logo" src="./img/Any logo.png" alt=""/>
                    <p className="footerAuthor">CSS Headliner</p>
                    <div className="footerText">
                        &nbsp; Passionately designed & developed by CSS 💻
                    </div>
                </div>
                <div className="colright">
                    <ul className="footerInfo">
                        <p className="footerInfoTitle">UST Computer Science Society</p>
                        <li className="footerInfos">About us </li>
                        <li className="footerInfos">Community</li>
                        <li className="footerInfos">News & Events</li>
                    </ul>
                </div>
                <div className="colright">
                    <ul className="footerSocials">
                        
                        <li className="Socials">
                            <i className="footerSocialIcons fa-regular fa-envelope"></i>
                            <a href="css.cics@ust.edu.ph">Email</a>
                        </li>
                        
                        <li className="Socials">
                            <i className="footerSocialIcons fa-brands fa-facebook"></i>
                            <a href="https://www.facebook.com/USTCSS">Facebook</a>
                        </li>
                        <li className="Socials">
                            <i className="footerSocialIcons fa-brands fa-twitter"></i>
                            <a href="https://twitter.com/USTCSS">Twitter</a>
                        </li>
                        <li className="Socials"><i className="footerSocialIcons fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com/ustcss/">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}