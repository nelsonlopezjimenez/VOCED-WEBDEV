---
title: MDN Web Security, CORS
date: 7/27/2024
myData: MDN https://developer.mozilla.org/en-US/docs/Web/Security
---
# Security on the web
Websites contain several different types of information. Some of it is non-sensitive, for example the copy shown on the public pages. Some of it is sensitive, for example customer usernames, passwords, and banking information, or internal algorithms and private product information.

Sensitive information needs to be protected, and that is the focus of web security. If that information fell into the wrong hands, it could be used to:

- Put companies at a competitive disadvantage by sharing their information with competitors.
- Disable or hijack their services, again causing serious problems with their operation.
- Put their customer's privacy at risk, making them vulnerable to profiling, targeting, loss of data, identity theft, or even financial loss.

Modern browsers already have several features to protect users' security on the web, but developers also need to use best practices and code carefully to ensure that their websites are secure. Even simple bugs in your code can result in vulnerabilities that bad actors can exploit to steal data and gain unauthorized control over services.

This article provides an introduction to web security, including conceptual information to help you understand website vulnerabilities and practical guides on how to secure them.

## Relationship between security and privacy
Security and privacy are distinct yet closely related topics. It is worth knowing the differences between the two and how they relate.

- Security is the act of keeping private data and systems protected against unauthorized access. This includes both company (internal) data and user and partner (external) data.
- Privacy refers to the act of giving users control over how their data is collected, stored, and used, while also ensuring that it is not used irresponsibly. For example, you should let your users know what data you are collecting from them, the parties with whom it will be shared, and how it will be used. Users must be given a chance to consent to your privacy policy, have access to their data you store, and delete it if they choose to.

Good security is essential for good privacy. You could follow all the advice listed in our Privacy on the web guide, but acting with integrity and having a robust privacy policy are futile if your site is not secure and attackers can just steal data anyway.

## Security features provided by browsers
Web browsers follow a strict security model that enforces strong security for content, connections between the browser and the server, and data transportation. This section looks at the features that underpin this model.

## Same-origin policy and CORS
Same-origin policy is a fundamental security mechanism of the web that restricts how a document or a script loaded from one origin can interact with a resource from another origin. It helps isolate potentially malicious documents, reducing possible attack vectors.

In general, documents from one origin cannot make requests to other origins. This makes sense because you don't want sites to be able to interfere with one another and access unauthorized data.

However, you might want to relax this restriction in some circumstances; for example, if you have multiple websites that interact with each other, you may allow them to request resources from one another using fetch(). This can be permitted using Cross-Origin Resource Sharing (CORS), an HTTP-header-based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

## HTTP model for communication
The HTTP protocol is used by web browsers and servers to communicate with one another, request resources, provide responses (for example, providing a requested resource or detailing why a request failed), and provide security features for that communication.

Transport Layer Security (TLS) provides security and privacy by encrypting data during transport over the network and is the technology behind the HTTPS protocol. TLS is good for privacy because it stops third parties from being able to intercept transmitted data and use it maliciously.

All browsers are moving towards requiring HTTPS by default; this is practically the case already because you can't do much on the web without this protocol.
