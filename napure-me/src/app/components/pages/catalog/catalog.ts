export interface Product {
    name: string;
    size: string;
    urlName: string;
    description: string;
    price: string;
    ingr: string;
    images: string[];
    relatedProducts: string[];
}
export interface Group {
    groupId: GroupIds;
    group_name: string;
    products: Product[];
}

enum GroupIds {
    ANTI_HAIR_LOSS = 'anti-hair-loss',
    HAIR_REPAIR = 'hair-repair',
    HAIR_GROWTH = 'hair-growth',
    MOISTURE = 'mositure',
    DETOX = 'detox',
}

export const catalog: Group[] = [
    {
        groupId: GroupIds.HAIR_GROWTH,
        group_name: 'catalog.hair_growth.group_name',
        products: [
            {
                urlName: 'T0',
                name: 'catalog.hair_growth.T0.name',
                size: '',
                description: 'catalog.hair_growth.T0.description',
                price: '',
                ingr: 'catalog.hair_growth.T0.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'S0',
                name: 'catalog.hair_growth.S0.name',
                size: '',
                description: 'catalog.hair_growth.S0.description',
                price: '',
                ingr: 'catalog.hair_growth.S0.ingr',
                images: [],
                relatedProducts: [],
            },
        ],
    },
    {
        groupId: GroupIds.DETOX,
        group_name: 'catalog.detox.group_name',
        products: [
            {
                urlName: 'T1',
                name: 'catalog.detox.T1.name',
                size: '',
                description: 'catalog.detox.T1.description',
                price: '',
                ingr: 'catalog.detox.T1.ingr',
                images: [],
                relatedProducts: [],
            },
        ],
    },
    {
        groupId: GroupIds.ANTI_HAIR_LOSS,
        group_name: 'catalog.anti_hair_loss.group_name',
        products: [
            {
                urlName: 'T4',
                name: 'catalog.anti_hair_loss.T4.name',
                size: '',
                description: 'catalog.anti_hair_loss.T4.description',
                price: '',
                ingr: 'catalog.anti_hair_loss.T4.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'S4',
                name: 'catalog.anti_hair_loss.S4.name',
                size: '',
                description: 'catalog.anti_hair_loss.S4.description',
                price: '',
                ingr: 'catalog.anti_hair_loss.S4.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'D4',
                name: 'catalog.anti_hair_loss.D4.name',
                size: '',
                description: 'catalog.anti_hair_loss.D4.description',
                price: '',
                ingr: 'catalog.anti_hair_loss.D4.ingr',
                images: [],
                relatedProducts: [],
            },
        ],
    },
    {
        groupId: GroupIds.MOISTURE,
        group_name: 'catalog.moisture.group_name',
        products: [
            {
                urlName: 'O8',
                name: 'catalog.moisture.O8.name',
                size: '',
                description: 'catalog.moisture.O8.description',
                price: '',
                ingr: 'catalog.moisture.O8.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'S8',
                name: 'catalog.moisture.S8.name',
                size: '',
                description: 'catalog.moisture.S8.description',
                price: '',
                ingr: 'catalog.moisture.S8.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'C8',
                name: 'catalog.moisture.C8.name',
                size: '',
                description: 'catalog.moisture.C8.description',
                price: '',
                ingr: 'catalog.moisture.C8.ingr',
                images: [],
                relatedProducts: [],
            },
        ],
    },
    {
        groupId: GroupIds.HAIR_REPAIR,
        group_name: 'catalog.hair_repair.group_name',
        products: [
            {
                urlName: 'K9',
                name: 'catalog.hair_repair.K9.name',
                size: '',
                description: 'catalog.hair_repair.K9.description',
                price: '',
                ingr: 'catalog.hair_repair.K9.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'S9',
                name: 'catalog.hair_repair.S9.name',
                size: '',
                description: 'catalog.hair_repair.S9.description',
                price: '',
                ingr: 'catalog.hair_repair.S9.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'C9',
                name: 'catalog.hair_repair.C9.name',
                size: '',
                description: 'catalog.hair_repair.C9.description',
                price: '',
                ingr: 'catalog.hair_repair.C9.ingr',
                images: [],
                relatedProducts: [],
            },
            {
                urlName: 'M9',
                name: 'catalog.hair_repair.M9.name',
                size: '',
                description: 'catalog.hair_repair.M9.description',
                price: '',
                ingr: 'catalog.hair_repair.M9.ingr',
                images: [],
                relatedProducts: [],
            },
        ],
    },
];
