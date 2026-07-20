'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 404 Number */}
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary via-primary/80 to-primary/60">
            404
          </h1>
          <div className="h-1 w-24 bg-primary/20 mx-auto"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <Link href="/" className="w-full">
            <Button className="w-full" size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full" size="lg">
              Go Back
            </Button>
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="pt-8 opacity-50">
          <svg
            className="w-16 h-16 mx-auto text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
