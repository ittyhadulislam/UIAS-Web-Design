import "./About.css"

const About = () => {
    return (
        <section className='section-all'>
            <div className='inner-content-for-about-participate-contact inner-content-about'>
                <div>
                    <h1 className='content-heading'>About Us</h1>
                    <h4 className='content-description'>
                        Universal Information Authentication Systems (UIAS™) is a Global Organization committed to preventing<br />
                        fraudulent representations. UIAS™ provides a secure stage for conducting Universal Information<br />
                        Authentication and is the leading provider of authentication services. It was born out of the research into<br />
                        security of printed documents and is the result of convergence of Printing Technology with the Internet.<br />
                        UIAS™ holds secure electronic versions of documents that are usually available on Paper. Documents in<br />
                        UIAS™ can be authenticated easily by anyone. UIAS™ provides Business, Alumni, Students & Parents with 24-<br />
                        hour access.<br /><br />
                        UIAS™ is invaluable in all situations where validity of a document needs authentication. Institutions may issue<br />
                        Certificates with a limited lifetime and would need a revalidation at periodic intervals, e.g. An ISO 9000<br />
                        Certificate needs to be validated every six months, a Drivers License needs to be revalidated every five years,<br />
                        etc.
                    </h4>
                </div>
                <img className='about-image' src="banner_img_about.jpg" alt="" />
            </div>
        </section>
    );
};

export default About;