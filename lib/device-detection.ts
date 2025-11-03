/**
 * Detect if the user is on a mobile device
 * This checks both user agent and screen size for better accuracy
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  // Check user agent for mobile devices
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i
  const isMobileUA = mobileRegex.test(userAgent.toLowerCase())

  // Check screen size
  const isMobileScreen = window.innerWidth < 768

  // Return true if either condition is met
  return isMobileUA || isMobileScreen
}

/**
 * Detect if the device supports touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  )
}

/**
 * Get device type
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') {
    return 'desktop'
  }

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
  const width = window.innerWidth

  // Check for mobile
  if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())) {
    return 'mobile'
  }

  // Check for tablet
  if (/ipad|tablet|playbook|silk/i.test(userAgent.toLowerCase()) || (width >= 768 && width <= 1024)) {
    return 'tablet'
  }

  return 'desktop'
}

