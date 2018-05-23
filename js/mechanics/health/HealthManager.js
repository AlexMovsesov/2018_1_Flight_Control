'use strict';
import {Config} from "../../config/configuration";
import {eventBus} from "../../controller/EventBus";

class HealthManager {
    /**
     * Contains players map
     * Events: obstacle
     */
    constructor() {
        this.playersMap = new Map();
        eventBus.subscribe({
            channel: 'mechanics',
            event: 'obstacle',
            subscriberObject: this,
            callback: (data) => {
                return this.obstacle(data);
            },
        });
    }

    /**
     * Creates health models for each player
     * @param players
     */
    create(players) {
        players.forEach((player)=>{
            this.playersMap.set(player, new PlayerHealth());
        });
    }

    /**
     * Handles obstacle event for player
     * Emits two events
     * Game over if one of players health become zero
     * Rendering(updating) of health bar whenever of case.
     * @param player
     */
    obstacle(player) {
        try {
            if (this.playersMap.has(player)) {
                this.playersMap.get(player).obstacle();
            }
        }
        catch (exception) {
            eventBus.emit({
                channel: 'mechanics',
                event: 'game_over',
                data: this.playersMap,
            });
        }
        finally {
            eventBus.emit({
                channel: 'rendering',
                event: 'health_update',
                data: this.playersMap,
            });
        }
    }
}
const healthManager = new HealthManager();
export {healthManager};