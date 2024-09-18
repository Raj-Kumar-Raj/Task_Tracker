import React from 'react'
import '../global.css'

export function Avatar({ src, alt, fallback }) {
  return (
    <div className="relative inline-block h-10 w-10 overflow-hidden rounded-full">
      {src ? (
        <img className="h-full w-full object-cover" src={src} alt={alt} />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
          {fallback}
        </div>
      )}
    </div>
  )
}

export function AvatarImage({ src, alt }) {
  return <img className="h-full w-full object-cover" src={src} alt={alt} />
}

export function AvatarFallback({ children }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
      {children}
    </div>
  )
}