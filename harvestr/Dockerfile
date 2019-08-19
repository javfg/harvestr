# harvestr dockerfile
# last update 2021-03-15

FROM node:14-alpine
LABEL maintainer='Javier Ferrer <javier.f.g@um.es>'

WORKDIR /home

ENV PYTHON=python2

COPY . .

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
  && yarn \
  && yarn build \
  && apk del .gyp \
  && rm -rf node_modules .cache \
  && apk add nginx

# configure the default site
COPY nginx_conf/site_default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD nginx -g 'pid /tmp/nginx.pid; daemon off;'
