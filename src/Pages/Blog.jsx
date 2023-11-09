import React from "react";

const Blog = () => {
  return (
    <div className="w-4/5 mx-auto mt-24">
      <div>
        <div className="border-l-8 border-sec pl-6">
          <h2 className="text-3xl italic font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Access Token</h3>
          <p className="mt-3">
            An access token is a credential used by a client (e.g., a mobile app
            or web application) to access protected resources on a server. It
            represents the authorization of a specific user to access their data
            or perform actions on their behalf. Access tokens are typically
            short-lived and have limited permissions, enhancing security. When a
            client makes a request to access a protected resource, it includes
            the access token in the request. The server validates the token,
            checks its expiration, and verifies the client's permissions. If
            everything checks out, the server grants access to the requested
            resource.
          </p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Refresh Token</h3>
          <p className="mt-3">
            A refresh token is a long-lived credential that can be used to
            obtain a new access token once the current access token expires.
            Refresh tokens are stored securely and can be used to request a new
            access token without the user having to reauthenticate. They are
            typically more privileged and have access to request new access
            tokens for specific resources.
            <br />
            <br />
            Here's how the process works:
          </p>
          <ul className="mt-2 list-decimal ml-6">
            <li>
              The client obtains an access token and a refresh token after the
              user has authenticated and granted permission.
            </li>

            <li>
              The client uses the access token to access protected resources.
            </li>

            <li>
              When the access token expires (short-lived for security), the
              client uses the refresh token to request a new access token
              without involving the user.
            </li>

            <li>
              The authorization server validates the refresh token and issues a
              new access token, which can be used to continue accessing
              resources.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">
            Storing Access and Refresh Tokens on the Client-Side
          </h3>
          <p className="mt-3">
            Storing tokens on the client-side should be done securely to prevent
            unauthorized access and token leakage. Here are some common methods
            to store tokens:
          </p>
          <ul className="mt-2 list-decimal ml-6">
            <li>
              HTTP Cookies: You can store tokens in HTTP cookies, which are
              accessible by the client but can be configured to be secure and
              HttpOnly to prevent JavaScript access.
            </li>
            <li>
              Browser Web Storage: Use browser storage mechanisms like
              localStorage or sessionStorage. However, be cautious of the
              security implications as these are accessible to JavaScript,
              making them vulnerable to cross-site scripting (XSS) attacks.
            </li>
            <li>
              Secure HTTP Headers: Store tokens in HTTP headers with the
              Authorization header field for API calls made by the client. This
              method is more secure as it doesn't rely on client-side storage.
            </li>
            <li>
              Native Mobile App Storage: In mobile apps, use secure storage
              mechanisms provided by the platform, like Keychain (iOS) and
              Keystore (Android).
            </li>
            <li>
              Cordova/Ionic Plugins: If using Cordova or Ionic for mobile app
              development, use plugins that provide secure storage for tokens.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <div className="border-l-8 border-sec pl-6">
          <h2 className="text-3xl italic font-medium">
            What is express js? What is Nest JS
          </h2>
        </div>
        <div>
          <h3 className="mt-6 text-xl font-bold">Express JS</h3>
          <ul className="mt-2 list-decimal ml-6">
            <li>
              Express.js is a minimalist and unopinionated web application
              framework for Node.js. It's one of the most popular and widely
              used frameworks in the Node.js ecosystem.
            </li>
            <li>
              It provides a set of essential features for building web and API
              applications, such as routing, middleware support, and
              request/response handling.
            </li>
            <li>
              Express is known for its simplicity and flexibility, making it a
              great choice for building RESTful APIs and web applications,
              especially when you want more control over the components you use.
            </li>
            <li>
              It has a large and active community, which means you can find
              plenty of middleware and extensions to enhance your Express
              application.
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-6">Next JS</h3>
          <ul className="mt-2 list-decimal ml-6">
            <li>
              NestJS is a full-featured, progressive Node.js framework for
              building scalable and maintainable server-side applications. It's
              built on top of Express.js but adds structure and additional
              features to it.
            </li>
            <li>
              NestJS follows the principles of the Angular framework, which
              means it emphasizes the use of decorators, dependency injection,
              and a modular architecture. It's often described as an "Angular
              for the server" due to its similarities in design philosophy.
            </li>
            <li>
              NestJS is suitable for building a wide range of applications,
              including RESTful APIs, GraphQL APIs, and real-time applications.
              It encourages best practices, code organization, and
              maintainability.
            </li>
            <li>
              It has a strong ecosystem of modules and packages, which
              simplifies common tasks and promotes code reusability. NestJS
              supports TypeScript out of the box, which helps catch errors at
              compile-time and improves code quality.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <div className="border-l-8 border-sec pl-6">
          <h2 className="text-3xl italic font-medium">Explaination a code</h2>
        </div>
        <div>
          <h3 className="mt-6 text-xl font-bold">Find leap year through JS</h3>
        </div>
        <div className="h-96 mt-4">
          <img
            src="https://i.ibb.co/qmYZH59/code.png"
            alt=""
            className="h-full"
          />
        </div>
        <div className="mt-6">
          <h3 className="mt-6 text-xl font-bold">Explanation</h3>
        </div>
        <p className="mt-2">
          The function checks the divisibility of a year by 4, 100, and 400 to
          determine whether it is a leap year based on the conditions defined by
          the Gregorian calendar. If it meets the conditions, the function
          returns true; otherwise, it returns false.
        </p>
      </div>
    </div>
  );
};

export default Blog;
