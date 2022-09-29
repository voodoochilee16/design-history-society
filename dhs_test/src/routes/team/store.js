
import { writable, derived } from "svelte/store";

export const api_data = writable([])

export const personNames = derived(api_data, ($api_data) => {
    // @ts-ignore
    if ($api_data.data){
        // @ts-ignore
        return $api_data.data.map(name => name.full_name)
    }
    return [];
});

export const personImages = derived (api_data, ($api_data) => {
    if ($api_data.data) {
        return $api_data.data.map(pic => pic.image_person)
    }
    return [];

});