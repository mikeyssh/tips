import ContactForm from "./ContactForm"

function Footer() {
    return (
      <>
        <footer className="flex flex-col">
          <div className="flex flex-grow justify-center sm:px-6">
            {/* <StripeCard /> */}
            <ContactForm />
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;