/**
 * Scrolls to a specific element by ID with smooth behavior
 */
export function scrollToElement(elementId: string, options?: ScrollIntoViewOptions) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      ...options,
    })
    return true
  }
  return false
}

/**
 * Scrolls to the top of the page
 */
export function scrollToTop(smooth = true) {
  window.scrollTo({
    top: 0,
    behavior: smooth ? "smooth" : "instant",
  })
}
