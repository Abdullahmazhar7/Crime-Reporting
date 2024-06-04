import Link from "next/link"
import { ShieldIcon } from "lucide-react"


export default function Nav() {
    return (
      <header className="py-6 px-6  flex items-center bg-gray-900">
      <Link className="flex items-center justify-center" href="./">
        <ShieldIcon className="h-10 w-10 mr-4 text-gray-900 dark:text-gray-50" />
        <h1 className="text-2xl font-bold">Decentralized Crime Reporting System </h1>
        <span className="sr-only">Community Crime Reporting</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
          href="/About"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
          href="/reportCrime"
        >
          Report
        </Link>
        <Link
          className="text-sm font-medium text-gray-900 hover:underline underline-offset-4 dark:text-gray-50"
          href="/Community"
        >
          Community
        </Link>
      </nav>
    </header>
    )
}


