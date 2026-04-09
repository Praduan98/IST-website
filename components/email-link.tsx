"use client"

import type { MouseEvent, ReactNode } from "react"

export const INFO_EMAIL = "info@insightstap.com"

/** Build a Gmail compose URL with the recipient pre-filled. */
export function gmailCompose(to: string): string {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}`
}

/**
 * Opens Gmail compose in a new tab. If the popup is blocked, falls back to
 * the OS default mail client via `mailto:`. Safe to call from any client
 * component.
 */
export function openEmail(to: string = INFO_EMAIL): void {
  const popup = window.open(gmailCompose(to), "_blank", "noopener,noreferrer")
  if (!popup) {
    window.location.href = `mailto:${to}`
  }
}

/**
 * Click handler that opens Gmail compose, falling back to mailto: when
 * popups are blocked. Lets modifier-clicks (cmd/ctrl/shift) fall through
 * so users can still right-click → copy or open in their preferred way.
 */
export function handleEmailClick(
  to: string = INFO_EMAIL
): (e: MouseEvent<HTMLAnchorElement>) => void {
  return (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()
    openEmail(to)
  }
}

type EmailLinkProps = {
  /** Email address to compose to. Defaults to info@insightstap.com. */
  to?: string
  className?: string
  children: ReactNode
  /** Optional accessible label (icon-only buttons). */
  "aria-label"?: string
}

/**
 * Drop-in replacement for an `<a href="mailto:…">` link.
 *
 * Behavior:
 * - Left-click → opens Gmail compose in a new tab.
 * - Popup blocked → falls back to `mailto:` (OS default mail client).
 * - Modifier-click / right-click → native `mailto:` behavior preserved.
 * - JS disabled → `mailto:` still works.
 */
export function EmailLink({
  to = INFO_EMAIL,
  className,
  children,
  "aria-label": ariaLabel,
}: EmailLinkProps) {
  return (
    <a
      href={`mailto:${to}`}
      onClick={handleEmailClick(to)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
