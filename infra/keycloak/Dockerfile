FROM quay.io/keycloak/keycloak:23.0.6
RUN echo "Building Keycloak Docker image"

# Copy to providers
COPY ./event-listener-spi/target/*.jar /opt/keycloak/providers/ 

# Copy the custom theme
COPY ./mytheme/* /opt/keycloak/themes/mytheme

# Build the providers
RUN /opt/keycloak/bin/kc.sh --verbose build
RUN echo "Keycloak Docker image built"
