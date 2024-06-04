
import Link from "next/link"

export default function Component() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gray-50 py-12 px-6 ">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-black">Secure and Transparent Crime Reporting</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Our decentralized platform leverages blockchain technology to ensure the integrity and security of your
              crime reports. Stay informed and engaged with your community.
            </p>
            <Link
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              href="/reportCrime"
            >
              Report a Crime
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div>
            <img
              alt="Crime Reporting"
              height="400"
              src="/Crime-Reporting-1.jpg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 rounded-lg bg-gray-800 p-6">
            <ShieldIcon className="h-8 w-8 text-gray-900 dark:text-white" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Secure Reporting</h3>
            <p className="text-gray-50">
              Your crime reports are securely stored on the blockchain, ensuring data integrity and transparency.
            </p>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-800 p-6">
            <BellIcon className="h-8 w-8 text-gray-900 dark:text-white" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Real-Time Alerts</h3>
            <p className="text-gray-50">
              Receive timely alerts about incidents in your area, keeping you informed and safe.
            </p>
          </div>
          <div className="space-y-4 rounded-lg bg-gray-800 p-6">
            <UsersIcon className="h-8 w-8 text-gray-900 dark:text-white" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Engagement</h3>
            <p className="text-gray-50">
              Connect with your community, share information, and work together to improve safety.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 ">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <img
              alt="Crime Reporting Dashboard"
              height="400"
              src="/Crime-Reporting-2.jpg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Manage Your Crime Reports</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Access your personal dashboard to view and manage your submitted crime reports. Stay informed and engaged
              with your community.
            </p>
            <Link
              className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              href="#"
            >
              View Dashboard
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


