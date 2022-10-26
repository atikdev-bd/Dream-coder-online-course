import React from "react";

const Blogs = () => {
  return (
    <div className="m-6">
      <div className="card w-full bg-neutral text-neutral-content">
        <div className="card-body items-center ">
          <h2 className="card-title">Question 1 : What is cors ?</h2>
          <p>
            {" "}
            Ans : CORS stands for Cross-Origin Resource Sharing . It allows us
            to relax the security applied to an API. This is done by bypassing
            the Access-Control-Allow-Origin headers, which specify which origins
            can access the API.
          </p>
        </div>
      </div>
      <div className="card w-full mt-4 bg-neutral text-neutral-content">
        <div className="card-body items-center  ">
          <h2 className="card-title">
            Question 2 : Why are you using firebase ?
          </h2>
          <p>
            Ans : Firebase is great for quick projects: it's easy to set up,
            fast, in many cases requires only front-end logic. It lets you focus
            on your app instead of implementing custom authentication, web
            sockets or database connections.
          </p>
        </div>
      </div>
      <div className="card w-full mt-4 bg-neutral text-neutral-content">
        <div className="card-body items-center  ">
          <h2 className="card-title">Question 3 : What other options do you have to implement authentication ?</h2>
          <p>Ans : Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
        </div>
      </div>
      <div className="card w-full mt-4 bg-neutral text-neutral-content">
        <div className="card-body items-center  ">
          <h2 className="card-title">Question 4 : How does private route work ?</h2>
          <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in</p>
        </div>
      </div>
      <div className="card w-full mt-4 bg-neutral text-neutral-content">
        <div className="card-body items-center  ">
          <h2 className="card-title">Question 5 : What is Node Js ?</h2>
          <p>Ans : Node.js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.</p>
        </div>
      </div>
      <div className="card w-full mt-4 bg-neutral text-neutral-content">
        <div className="card-body items-center  ">
          <h2 className="card-title">Question 6 : How does Node Js work ?</h2>
          <p>Ans : It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
