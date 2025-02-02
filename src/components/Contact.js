function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Contact Us</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>We'd love to hear from you! Please reach out to us using the following contact information:</p>
                <ul className="list-disc space-y-2">
                  <li>Email: support@slate.com</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Address: 123 Education Lane, Learning City, ST 12345</li>
                </ul>
                <p>Our support team is available Monday through Friday, 9am to 5pm EST.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

