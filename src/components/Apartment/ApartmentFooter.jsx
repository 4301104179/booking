import { Link } from 'react-router-dom'

const footerData = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Cancellation Options', 'Safety Information'],
  },
  {
    title: 'Community',
    links: ['Travelers', 'Partners', 'Affiliate Program'],
  },
  {
    title: 'Legal',
    links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'],
  },
]

const ApartmentFooter = () => (
  <footer className="mt-12 bg-gray-100 text-gray-600 text-xs sm:text-sm">
    <div className="max-w-7xl mx-auto px-3 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
      {footerData.map((section, idx) => (
        <div key={idx}>
          <h3 className="font-semibold mb-2">{section.title}</h3>
          <ul className="space-y-1">
            {section.links.map((link, i) => (
              <li key={i}>
                <Link className="hover:underline" to="#">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-3 py-3 border-t border-gray-300 text-center">
      <p>© 2024 Booking.com. All rights reserved.</p>
    </div>
  </footer>
)

export default ApartmentFooter