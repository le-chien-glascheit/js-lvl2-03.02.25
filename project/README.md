Without JS:

1. Resource: img, video, script, ... -> src -> HTTP Request (JSONP)
    - GET (not changeable)
    - path & query -> /api/img.png?key=value (changeable)
    - Headers* (not changeable)
    - No body (not changeable)
2. [Links a](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) (not link) <- popular (email, messenger)
    - Classic:
        - GET* (not changeable)
        - path & query (changeable)
        - Headers* (Referrer can be removed, ...)
        - No body
    - Modern (see spec: ping, etc)
3. Form

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