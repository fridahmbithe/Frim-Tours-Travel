import { useState } from "react";
import { send } from 'emailjs-com';
import tw from "tailwind-styled-components"

const ContactUs = () => {
    const Section = tw.div`
        height: screen;
        padding: 0;
        margin: 0;`;

    const Container = tw.div`
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 1.5rem;
        padding-right: 1.5rem;`;

    const Row = tw.div`
        display: flex;
        flex-wrap: wrap;
        margin: -0.5rem;`;

    const Col = tw.div`
        flex: 1 0 auto;
        padding: 0.5rem;`;

    const Input = tw.input`
        shadow: 0 1px 3px rgba(0,0,0,0.1);
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;`;

    const TextArea = tw.textarea`
        shadow: 0 1px 3px rgba(0,0,0,0.1);
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;`;

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const [formDetails, setFormDetails] = useState([]);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState("");
    
    const resetFormFields = () => {
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Thank you for contacting us!' });
    };

    const onFormUpdate = (category, value) => {
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [category]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name: `${formDetails.firstName} ${formDetails.lastName}`,
            to_name: 'ResumeRise LTD',
            email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message,
        };

        send('service_fjr4n1u', 'template_ls8mayx', templateParams, 'gMFWFJ-J5rRjQKxZC')
            .then((response) => {
                resetFormFields();
                setButtonText("Send");
            })
            .catch((error) => {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' });
                setButtonText("Send");
            });
    };

    return (
        <Section className="h-screen">
            <Container>
                <Row className="items-center">
                    <Col span={12} md={6}>
                        <div>
                            <h2 className="text-center font-bold m-3">Get In Touch</h2>
                            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
                                <div className="flex flex-wrap -mx-1 mb-4">
                                    <div className="w-full md:w-1/2 px-1 mb-4 md:mb-0">
                                        <Input
                                            type="text"
                                            value={formDetails.firstName}
                                            placeholder="First Name"
                                            onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-1">
                                        <Input
                                            type="text"
                                            value={formDetails.lastName}
                                            placeholder="Last Name"
                                            onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-1 mb-4">
                                    <div className="w-full md:w-1/2 px-1 mb-4 md:mb-0">
                                        <Input
                                            type="email"
                                            value={formDetails.email}
                                            placeholder="Email Address"
                                            onChange={(e) => onFormUpdate('email', e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-1">
                                        <Input
                                            type="tel"
                                            value={formDetails.phone}
                                            placeholder="Phone No."
                                            onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <TextArea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate('message', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    >
                                        <span>{buttonText}</span>
                                    </button>
                                    {status.message && (
                                        <p className={`${status.success === false ? 'text-red-500' : 'text-green-500'} font-bold`}>
                                            {status.message}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default ContactUs;

