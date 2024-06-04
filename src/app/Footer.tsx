import Link from "next/link";


export default function Footer() {

    return (
        <footer className="bg-gray-900 py-6 px-6 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <p>© 2024 Decentralized Crime Reporting. All rights reserved.</p>
          <div className="space-x-4">
            <Link className="hover:text-gray-400" href="/About">
              About
            </Link>
            <Link className="hover:text-gray-400" href="/reportCrime">
              Report
            </Link>
            <Link className="hover:text-gray-400" href="/Community">
              Community
            </Link>
          </div>
        </div>
      </footer>
    )
}

