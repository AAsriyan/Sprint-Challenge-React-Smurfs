1.  Explain the differences between `client-side routing` and `server-side routing`.

A: Server-side routing will request the data that is needed and no more. Server-side routing is better for search engine optimization. However, each time you send an HTTP request the entire page has to refresh. It can also take awhile for webpages to load if the user has slow internet speed.

Client-side routing is when the route occurs in the JavaScript that is being loaded on that page. Since you aren’t sending that much data, the routes are a lot faster. The webpage feels smoother and gives a better user experience. However, the entire application needs to be loaded when you make the first request. That’s why initial load times are a lot longer.

1.  What does HTTP stand for?

A: Hypertext Transfer Protocol

1.  What does CRUD stand for?

A: Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

A: CRUD to HTTP methods:
Create - POST
Read - GET
Update - PUT
Delete - DELETE

1.  Mention three tools we can use to make AJAX requests

A: Some tools we can use to make AJAX requests include using the Fetch API, using a third party library like Axios, and using Async/Await
