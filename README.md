# errcode-page

A static maintenance page for use while an application image is rolling out.

## Runtime configuration

Set `ERROR_CODE` on the container to change the HTTP status returned by the maintenance page and
JSON responses. It defaults to `503`.

```sh
docker run -e ERROR_CODE=403 <image>
```

Requests that accept JSON receive `{"errorCode":403}` with the configured status. Browser requests
receive the maintenance page with the same status. Static assets and the health endpoint continue
to return `200` so the page renders correctly and rollout health checks remain available.

`ERROR_CODE` must be a valid three-digit HTTP status code because Caddy validates it when the
container starts.
