# MapTiler
Setup for [maptiler](https://hub.docker.com/r/maptiler/tileserver-gl)

## Setup Locally
- ``cd maptiler``
- ``docker run --rm -it -v $(pwd):/data -p 8081:80 maptiler/tileserver-gl``
- Test by opening [http://localhost:8081](http://localhost:8081)