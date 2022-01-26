# MapTiler
Setup for [maptiler](https://hub.docker.com/r/maptiler/tileserver-gl)

## Setup Locally
- ``cd maptiler``
- ``docker run --rm -it -v $(pwd):/data -p 8081:80 --name maptiler maptiler/tileserver-gl``
- Test by opening [http://localhost:8081](http://localhost:8081)

## Debugging for Arm at Kubenetes
- ``docker run --rm -it -v $(pwd):/data -p 8081:80 --name maptiler --platform linux/amd64 maptiler/tileserver-gl``

