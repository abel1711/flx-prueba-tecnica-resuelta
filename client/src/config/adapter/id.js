import { v4 as uuidv4 } from 'uuid';

//se adapto el uuid por si en algun momento deseamos cambiar la manera en que se genera el id.

export class Id {
    
    newId() {
        return uuidv4();
    }
}