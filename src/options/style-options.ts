
export interface StyleOptions {
    stroke: {
        minWidth: number;
        maxWidth: number;
        minOpacity: number;
        maxOpacity: number;
    };
    
    fill: {
        minOpacity: number;
        maxOpacity: number;
    };
}

export default {
    stroke: {
        minWidth: 1,
        maxWidth: 5,
        minOpacity: 0.25,
        maxOpacity: 1
    },
    fill: {
        minOpacity: 0.25,
        maxOpacity: .75
    }
};