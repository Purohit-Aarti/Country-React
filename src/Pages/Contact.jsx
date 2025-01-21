// import { useState } from "react"

// export default function Contact () {
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         message: ''
//     });

//     const handleFormData = (e) => {
//         setFormData((currData) => {
//             return {...currData, [e.target.name]: e.target.value};
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         setFormData({
//             username: '',
//             email: '',
//             message: ''
//         });
//     }

//     return (
//         <section className="section-contact">
//             <h2 className="container-title">Contact Us</h2>

//             <div className="contact-wrapper container">
//                 <form onSubmit={handleSubmit}>
//                     <input type="text" value={formData.username} className="form-control" name="username" placeholder="enter your name" required autoComplete="off" onChange={handleFormData}/>
//                     <input type="email" value={formData.email} className="form-control" name="email" placeholder="enter your email" required autoComplete="off" onChange={handleFormData}/>
//                     <textarea name="message" value={formData.message} className="form-control" placeholder="enter your message" rows="10" required onChange={handleFormData}></textarea>
//                     <button type="submit">Send</button>
//                 </form>
//             </div>
//         </section>
//     )
// }






// new react version-19 way:

export default function Contact () {

    const handleFormSubmit = (formData) => {
        console.log(formData.entries()); // formData.entries() returns an iterator object
        const formInputData = Object.fromEntries(formData.entries()); // Object.fromEntries() converts the iterator object to an object
        console.log(formInputData);
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text"  className="form-control" name="username" placeholder="enter your name" required autoComplete="off" />
                    <input type="email"  className="form-control" name="email" placeholder="enter your email" required autoComplete="off" />
                    <textarea name="message"  className="form-control" placeholder="enter your message" rows="10" required autoComplete="off"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}