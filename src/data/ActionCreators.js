import { ActionTypes, DataTypes } from "./Types";
import { data as phData } from "./placeholderData";

export const loadData = () => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
})