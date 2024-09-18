import React, { useState } from 'react'
import '../global.css'

export function Accordion({ children, type = "single", collapsible = false }) {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (value) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value])
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter(item => item !== value)
          : [...openItems, value]
      )
    }
  }

  return (
    <div className="space-y-1">
      {React.Children.map(children, child =>
        React.cloneElement(child, { openItems, toggleItem, collapsible })
      )}
    </div>
  )
}

export function AccordionItem({ children, value, openItems, toggleItem, collapsible }) {
  const isOpen = openItems.includes(value)

  return (
    <div className="border-b">
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, value, toggleItem, collapsible })
      )}
    </div>
  )
}

export function AccordionTrigger({ children, isOpen, value, toggleItem, collapsible }) {
  return (
    <button
      className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
      onClick={() => toggleItem(value)}
      disabled={isOpen && !collapsible}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 transition-transform duration-200"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  )
}

export function AccordionContent({ children, isOpen }) {
  if (!isOpen) return null

  return (
    <div className="pb-4 pt-0">
      {children}
    </div>
  )
}