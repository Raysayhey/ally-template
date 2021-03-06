/*
 * Skip Link Component
 *
 * Reach UI 'skip-nav' component: https://reacttraining.com/reach-ui/skip-nav
 * Used in `src/04_templates/MainLayout` with `import { SkipNavContent } from "@reach/skip-nav"` to target main content
 */

import React from "react"
import { SkipNavLink } from "@reach/skip-nav"

const SkipLinkHeader = () => {
    return (
        <>
            <SkipNavLink>Skip navigation, go to main content</SkipNavLink>
        </>
    )
}

export default SkipLinkHeader
