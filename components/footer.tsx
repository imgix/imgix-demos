const navigation = {
  imgix: [
    { name: 'Home', href: 'https://www.imgix.com/' },
    { name: 'Solutions', href: 'https://imgix.com/solutions' },
    { name: 'Pricing', href: 'https://imgix.com/pricing' },
    { name: 'Customers', href: 'https://imgix.com/customers' },
    { name: 'Why imgix', href: 'https://imgix.com/why-imgix' },
  ],
  developers: [
    { name: 'Docs', href: 'https://docs.imgix.com/' },
    { name: 'Setup', href: 'https://docs.imgix.com/setup/getting-started' },
    { name: 'Guides', href: 'https://docs.imgix.com/best-practices' },
    { name: 'Tutorials', href: 'https://docs.imgix.com/tutorials' },
    { name: 'API Reference', href: 'https://docs.imgix.com/apis/url' },
  ],
  company: [
    { name: 'Blog', href: 'https://blog.imgix.com/' },
    { name: 'About', href: 'https://imgix.com/about' },
    { name: 'Careers', href: 'https://imgix.com/careers' },
    { name: 'Press Kit', href: 'https://imgix.com/presskit' },
    { name: 'Partners', href: 'https://imgix.com/partners' },
  ],
  legal: [
    { name: 'Help Center', href: 'https://support.imgix.com/hc/en-us' },
    { name: 'Contact', href: 'https://imgix.com/contact-us' },
    { name: 'Terms of Use', href: 'https://imgix.com/terms' },
    { name: 'Privacy', href: 'https://imgix.com/privacy' },
    { name: 'IP', href: 'https://imgix.com/ip' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/imgix',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Stackshare',
      href: 'http://stackshare.io/imgix',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
          <path
            fillRule="evenodd"
            d="M27,0H5C2.2,0,0,2.2,0,5v22c0,2.8,2.2,5,5,5h22c2.8,0,5-2.2,5-5V5C32,2.2,29.8,0,27,0z M17.7,20h3.5 c0.4-1.2,1.5-2,2.8-2c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.3,0-2.4-0.8-2.8-2H17c-0.4,0-0.8-0.2-0.9-0.6L14.3,17h-3.5 c-0.4,1.2-1.5,2-2.8,2c-1.7,0-3-1.3-3-3s1.3-3,3-3c1.3,0,2.4,0.8,2.8,2h3.5l1.7-4.4c0.2-0.4,0.5-0.6,0.9-0.6h4.2 c0.4-1.2,1.5-2,2.8-2c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.3,0-2.4-0.8-2.8-2h-3.5l-1.6,4L17.7,20z"
            clipRule="evenodd"
          />
          
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/imgix',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/imgix',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/company/3825637',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 32 32" {...props}>
          <path
            fillRule="evenodd"
            d="M27,0H5C2.2,0,0,2.2,0,5v22c0,2.8,2.2,5,5,5h22c2.8,0,5-2.2,5-5V5C32,2.2,29.8,0,27,0z M11.6,23.6H8.2V13.3 h3.4V23.6z M9.9,11.9L9.9,11.9c-1.2,0-1.9-0.8-1.9-1.8c0-1,0.8-1.8,1.9-1.8c1.2,0,1.9,0.8,1.9,1.8C11.9,11.1,11.1,11.9,9.9,11.9z M24,23.6h-3.4v-5.5c0-1.4-0.5-2.3-1.7-2.3c-0.9,0-1.5,0.6-1.8,1.3C17,17.3,17,17.6,17,17.9v5.8h-3.4c0,0,0-9.3,0-10.3H17v1.5 c0.5-0.7,1.3-1.7,3.1-1.7c2.3,0,3.9,1.5,3.9,4.6V23.6z"
            clipRule="evenodd"
          />
          
        </svg>
      ),
    },
  ],
}
  
const Footer = () => {
  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">imgix</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.imgix.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Support</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.developers.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-2">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-base font-medium text-white">Contact Our Sales Team</h3>
            <p className="mt-4 text-base text-gray-300">
              Flexible Plans that fit your needs. Free transformation, bandwidth included.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <a
                  href="mailto:sales@imgix.com"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md bg-ixorange hover:bg-ixlblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  sales@imgix.com
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2011 - 2022 imgix, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;