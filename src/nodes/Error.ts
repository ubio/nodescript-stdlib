import { ModuleCompute, ModuleDefinition } from '@nodescript/core/types';

type P = {
    name: string;
    message: string;
    status: number;
};
type R = unknown;

export const module: ModuleDefinition<P, R> = {
    moduleId: '@stdlib/Error',
    version: '1.0.1',
    label: 'Error',
    description: 'Raise an error with specified name and message.',
    keywords: ['string', 'text'],
    params: {
        name: {
            schema: { type: 'string', default: 'Error' },
        },
        message: {
            schema: { type: 'string', default: 'An error has occurred' },
        },
        status: {
            schema: { type: 'number', default: 500 },
        }
    },
    result: {
        schema: { type: 'string' },
    }
};

export const compute: ModuleCompute<P, R> = params => {
    const error = new Error(params.message);
    error.name = params.name;
    (error as any).status = params.status;
    throw error;
};