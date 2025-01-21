import FooterAPI from "../../api/FooterAPI";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";


const Footer = () => {

    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />,
    }
    
    return (
        <>
            <footer className="footer-section" style={{position: "relative", bottom: "0"}}>
                <div className="container grid grid-three-cols footer-Contact-Container">
                    {
                        FooterAPI.map((item, index) => {
                            const {icon, title, details} = item;
                            return (
                                <div className="footer-contact" key={index}>
                                    {/* Bracket Notation: This syntax allows you to access a property of an object using a variable.
Usage: It is used to dynamically access a property of an object based on the value of a variable. */}
                                    <div className="icon">{footerIcon[icon]}</div> 
                                    <div className="footer-contact-text">
                                        <p>{title}</p>
                                        <p>{details}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </footer>
        </>
    );
};
export default Footer;