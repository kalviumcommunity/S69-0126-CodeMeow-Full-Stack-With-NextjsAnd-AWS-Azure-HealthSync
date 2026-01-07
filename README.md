Rendering Strategies Used

Static Rendering (SSG):


Used for the About page


Content is static and does not change frequently


Improves load speed and reduces server cost



Dynamic Rendering (SSR):


Used for the Dashboard page


Data is user-specific and needs real-time updates


Ensures accurate and fresh information



Hybrid Rendering (ISR):


Used for the Events page


Content updates periodically


Balances performance and freshness using revalidation



Performance & UX Benefits

Static pages load instantly


Dynamic pages ensure real-time accuracy


Hybrid pages avoid unnecessary re-renders while staying updated


Reflection

If the application scaled to 10x more users, relying solely on SSR would increase server load and cost. Static rendering and ISR would be preferred for most pages, reserving SSR only for truly real-time or user-specific views.


created and initilized the nextjs.