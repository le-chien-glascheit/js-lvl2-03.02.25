Without JS:

1. Resource: img, video, script, ... -> src -> HTTP Request (JSONP)
   - GET (not changeable)
   - path & query -> /api/img.png?key=value (changeable)
   - Headers\* (not changeable)
   - No body (not changeable)
2. [Links a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (not link) <- popular (email, messenger)
   - Classic:
     - GET\* (not changeable)
     - path & query (changeable)
     - Headers\* (Referrer can be removed, ...)
     - No body
   - Modern (see spec: ping, etc)
3. Form:
   - Defaults: http://localhost:9999/form-defaults.html?name=%D0%92%D0%B0%D1%81%D1%8F&photo=js.png&token=...
     - GET
     - Path: the same page
     - No query in action
     - Fields: URL Encoding: ?key=value&key=value query (percent encoding) & file=filename
     - Web Frameworks: get('key') -> first (caution!)
     - Typical size for RL + Headers: in Kb!
   - method: POST
     - enctype: application/x-www-form...
     - Path & Query: action
     - Fields: Body: URL Encoding: ?key=value&key=value query (percent encoding) & file=filename
     - content-type: application/x-www-form-urlencoded
     - Web Frameworks: get('key') -> query & form -> get(key from query) (caution!)
     - Typical size for body: 1-2mb!
   - method: POST & enctype: text/plain (don't use!)
     - Path & Query: action
     - Fields: Body: key=value\r\nkey=value\r\n
     - content-type: text/plain
     - Web Frameworks: get('key') -> query & form -> get(key from query) (caution!)
     - Typical size for body: 1-2mb!
   - method: POST & enctype: multipart/form-data
     - Path & Query: action
     - Fields: Body ...
     - content-type: multipart/form-data
     - Web Frameworks: get('key') -> query & form -> get(key from query) (caution!)
     - Content-Type: multipart/form-data; boundary=ABC
     - Total Request Body Limit increase
     - Part Limit increase
     - Body:
     - --ABC\r\n
     - Headers: value\r\n
     - \r\n
     - Part body
     - --ABC--\r\n

Binary data:

1. Multipart
2. Blob
3. base64\* -> URL, Header, Form

```
VERB path_and_params HTTP/1.1
Headers: ...

Body
```

Example: Yandex Metrika:

```js
<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(1000, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/id" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
```

Anchor:

1. https://datatracker.ietf.org/doc/html/rfc2616#section-3.8
2. #token
3. ...

## POJO

POJO (Plain Old JavaScript Objects):

JSON (portable format) - https://www.json.org/json-en.html

[I-JSON](https://datatracker.ietf.org/doc/html/rfc7493) - {} || []

```js
{
    key: value,
    nested: {

    },
    array: [],
    // Number, BigInt
    // Symbol
    // undefined
    // function, ...
}
'''
https://ya.ru/%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%BA%D0%B0
'''
