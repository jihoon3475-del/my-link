import { Card } from "@/components/ui/card"
import { dummyLinks } from "@/data/links"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center bg-background p-6 sm:py-12">
      <div className="flex w-full max-w-md flex-col gap-4">
        {/* Profile Header Placeholders */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted text-3xl font-bold text-muted-foreground shadow-sm">
            M
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">MyLink</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Links for my profile
            </p>
          </div>
        </div>

        {/* Link List */}
        <div className="flex flex-col gap-3">
          {dummyLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xl"
            >
              <Card className="flex items-center p-4 transition-all hover:scale-[1.02] hover:bg-muted/50 hover:shadow-md cursor-pointer border-2 rounded-xl">
                {link.faviconUrl ? (
                  <img
                    src={link.faviconUrl}
                    alt={`${link.title} icon`}
                    className="h-8 w-8 rounded-md bg-white object-contain p-0.5"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-md bg-muted flex-shrink-0" />
                )}
                <span className="flex-1 text-center font-semibold text-foreground">
                  {link.title}
                </span>
                <div className="h-8 w-8" /> {/* Spacer for centered text */}
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
