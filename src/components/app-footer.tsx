import React from 'react'
import  getYear from "./functions"
export default function AppFooter() {
  return (
    <footer>
      <small className="mt-auto border-t border-black/5 opacity-50 py-5 bottom-0 min-h-screen">
        &copy; {getYear()} SAJohnson. All Rights Reserved.
      </small>
    </footer>
  )
}
