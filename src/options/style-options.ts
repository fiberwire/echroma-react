
export interface StyleOptions {
    stroke: {
        minWidth: number;
        maxWidth: number;
    };
    
    fill: {
        minOpacity: number;
        maxOpacity: number;
    };
}

export default {
    stroke: {
        minWidth: 1,
        maxWidth: 10
    },
    fill: {
        minOpacity: 0.75,
        maxOpacity: 1
    }
};