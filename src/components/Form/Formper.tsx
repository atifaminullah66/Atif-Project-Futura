export default function ContactForm() {
  return (
    <div className="bg-secondary py-5">
      <div className="container bg-light rounded p-5">
        <h2 className="text-center mb-5">Get In Touch</h2>
        <form>
          <h3 className="mb-4">Contact Form</h3>
          <div className="row mb-3">
            <div className="row-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="row-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email address" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter the subject of your message" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows={5} placeholder="Write your notes or questions here"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  )
}
