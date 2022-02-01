import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    nameErr: false,
    email: "",
    emailErr: false,
    message: "",
    messageErr: false,
  })

  function validateInput(e) {
    if (e.target.name === "name") {
      e.target.value.length ? setFormState({...formState, nameErr: false}) : setFormState({...formState, nameErr: true});
    }
    if (e.target.name === "email") {
      const validEmail = validateEmail(e.target.value);
      validEmail ? setFormState({...formState, emailErr: false}) : setFormState({...formState, emailErr: true});
    }
    if (e.target.name === "message") {
      e.target.value.length ? setFormState({...formState, messageErr: false}) : setFormState({...formState, messageErr: true});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section id="contact">
      <div class="title-wrapper">
        <h2>Contact</h2>
      </div>
      <div className="content-wrapper">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onBlur={validateInput} />
            {formState.nameErr && <p className="error-message">Please enter your name.</p>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" onBlur={validateInput} />
            {formState.emailErr && <p className="error-message">Please provide a valid email address.</p>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="6" onBlur={validateInput} />
            {formState.messageErr && <p className="error-message">Please let me know how I can help you.</p>}
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      {/* <div>
        <h4>Contact me directly at:</h4>
        <ul>
          <li>
            <a href="mailto:sophia@yoursummit.media" target="_blank">
              <i class="fas fa-paper-plane"></i> sophia@yoursummit.media
            </a>
          </li>
          <li>
            <a href="https://github.com/sophiabarrett" target="_blank">
              <i class="fab fa-github"></i> github.com/sophiabarrett
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sophiabarrett/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i> linkedin.com/in/sophiabarrett
            </a>
          </li>
        </ul>
      </div> */}
    </section>
  );
}

export default Contact;
