import Footer from "../partial/Footer";
import Header from "../partial/Header";

const Contact = () => {

    const handleContactSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const message = event.target.message.value;

        console.log(email, message);
    }

    return (
        <>
            <div className="App">
                <Header />

                <div className="section">
                    <h1>Contact</h1>

                    <form onSubmit={handleContactSubmit}>
                        <div>
                            <label>
                                E-mail
                                <input type="text" name="email" />
                            </label>
                        </div>
                        <div>
                            <label>
                                Message
                                <input type="text" name="message" />
                            </label>
                        </div>

                        <input type="submit" />
                    </form>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Contact;