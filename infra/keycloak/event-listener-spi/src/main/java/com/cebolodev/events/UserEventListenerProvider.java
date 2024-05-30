package com.cebolodev.events;

import org.keycloak.events.Event;
import org.keycloak.events.EventListenerProvider;
import org.keycloak.events.admin.AdminEvent;
import lombok.extern.jbosslog.JBossLog;

@JBossLog
public class UserEventListenerProvider implements EventListenerProvider {

    @Override
    public void close() {
    }

    @Override
    public void onEvent(Event event) {
        log.infof("Event: %s", event);
    }

    @Override
    public void onEvent(AdminEvent event, boolean includeRepresentation) {
        log.infof("Admin Event: %s", event);
    }

}