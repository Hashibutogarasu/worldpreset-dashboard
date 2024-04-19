export default class JsonUtils {
    static edit(json: any, key: string, value: string | number | Boolean, type: string) {
        const keys = key.split("/").filter((key) => key !== "undefined");

        if(type == "int") {
            const tmp = parseFloat(value as string);
            if(!isNaN(tmp)){
                value = tmp;
            }
        }
        else if(type == "string") {
            value = value as string;
        }
        else if(type == "bool") {
            value == "true" ? value = false : value = true;
        }
        
        if(keys.length == 1) {
            json[keys[0]] = value;
        }
        else if(keys.length == 2) {
            json[keys[0]][keys[1]] = value;
        }
        else if(keys.length == 3) {
            json[keys[0]][keys[1]][keys[2]] = value;
        }
        return json;
    }
}