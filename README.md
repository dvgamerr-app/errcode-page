# errcode-page

A compact, configurable HTTP status page for services that cannot return their normal UI.

## Runtime configuration

The only runtime input is `ERROR_CODE`. Set it to a three-digit HTTP status code to change the
response status and the page content. It defaults to `502`.

```sh
docker run -e ERROR_CODE=403 <image>
```

Requests that accept JSON receive `{"errorCode":403}` with the configured status. Browser requests
resolve the heading, explanation, next step, accent, and status symbol from that code. Common `4xx`
and `5xx` statuses have specific copy; valid codes without a dedicated entry use a concise family
fallback. Static assets and the health endpoint continue to return `200`, so the page renders and
rollout health checks remain available.

`ERROR_CODE` must be a valid three-digit HTTP status code because Caddy validates it when the
container starts.
