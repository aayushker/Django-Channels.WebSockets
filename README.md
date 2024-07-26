# Django-Channels.WebSockets
Here I have made a basic Chat Application just to test out Django Channels and WebSockets implementation.

How to install?
Intialize a Django project and then install Django Channels using the following command:
```bash
pip install channels daphne channels_redis
```

Initialize a Next.js project and then install the following dependencies:
```bash
npm install websocket
```

Key Notes:
1. Django Channels is a project that takes Django and extends its abilities beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more.
2. It is built a python specification called ASGI (Asynchronous Server Gateway Interface).
3. We use Channels to create a Chat Application with WebSockets.
4. Websockets are used on the client side (frontend) to establish a connection with the server.
5. Django Channels is used on the server side (backend) to handle the WebSockets connection.
6. With Django Channels, we have 4 steps to create a Chat Application:
    - Configure ASGI
    - Create Consumers
    - Set up routing
    - Use WebSockets in the frontend

What I learned?
1. How to use Django Channels and WebSockets.
2. How to use Django Channels to create a Chat Application.
3. How to use Django Channels to create a Chat Application with Next.js frontend.


I got to learn about redis-server, redis is an in-memory data structure store, used as a database, cache, and message broker. In the context of Django Channels, Redis is used as the channel layer backend.
Also got to learn about Daphne which is a HTTP, HTTP2, and WebSocket protocol server for ASGI and ASGI-HTTP, developed as part of the Django Channels project.