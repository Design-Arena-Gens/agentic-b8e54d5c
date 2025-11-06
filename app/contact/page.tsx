import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="container-page">
      <h1 className="mb-4 text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="mb-6 max-w-prose text-gray-700">Have a project in mind or want to say hello? Fill out the form and I?ll get back to you soon.</p>
      <div className="max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <ContactForm />
      </div>
    </div>
  )
}
