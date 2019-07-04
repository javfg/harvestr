# TODO: Header

FROM nginx
LABEL maintainer="Javier Ferrer <javier.f.g@um.es>"

# Configure the default site
COPY nginx_conf/site_default.conf /etc/nginx/conf.d/default.conf

# Prepare site
RUN mkdir -p /home/site
ADD prod/. /home/site
RUN chown nginx:nginx -R /home/site

# Publish the following ports
EXPOSE 80

# Working directory
WORKDIR /home/site

# Launch container
CMD echo "[START] Starting HQ Registry Web Frontend"; nginx -g "daemon off;"
