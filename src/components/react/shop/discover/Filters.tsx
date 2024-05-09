import type { Order } from '@stores/useFiltersStores';

import { Slider } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    Checkbox,
} from '@nextui-org/react';
import { useStore } from '@nanostores/react';
import {
    filter,
    updateCategories,
    elimiateCategories,
    updateIsOfferted,
    updateRange,
    updateOrderBy,
} from '@stores/useFiltersStores';
import { Select, SelectItem } from '@nextui-org/react';

export const Filters = ({ categorias }: { categorias: string[] }) => {
    const $filter = useStore(filter);
    const MAX = filter.get().maxPrice;
    const MIN = filter.get().minPrice;
    const [range, setRange] = useState<number[]>([MIN, MAX]);
    const [categories, setCategories] = useState<string[]>($filter.categories);

    const handleCategories = (value: string) => {
        if (categories.includes(value)) {
            return;
        } else {
            setCategories([...categories, value]);
            updateCategories(value);
        }
    };

    const eliminar = (value: string) => {
        setCategories(categories.filter((cat) => cat !== value));
        elimiateCategories(value);
    };

    useEffect(() => {
        updateRange(range);
    }, [range]);

    return (
        <aside className=' z-20 flex flex-col gap-4 fixed left-10 bg-gray-blue h-4/5 top-32 p-4 rounded-md border-2 border-accent-blue/60 w-full max-w-[300px] '>
            <h2 className='absolute top-2 left-4 text-xl'>Filtros</h2>

            <form className='flex flex-col mt-8 divide-solid divide-y divide-accent-blue/80 relative h-full'>
                <fieldset className='py-4'>
                    <Slider
                        label='Precio'
                        formatOptions={{
                            style: 'currency',
                            currency: 'EUR',
                        }}
                        step={1}
                        size='sm'
                        maxValue={MAX}
                        minValue={MIN}
                        value={range}
                        onChange={(value: number | number[]) =>
                            setRange(value as number[])
                        }
                        classNames={{
                            base: 'max-w-md gap-3',
                            filler: 'bg-accent-blue/80',
                            thumb: 'bg-accent-blue/80',
                            track: 'bg-dark-primary-blue',
                            label: 'text-accent-blue',
                        }}
                    />
                </fieldset>
                <fieldset className='py-4 flex flex-col gap-2 '>
                    <h3 className='text-accent-blue'>Categorías</h3>

                    <Dropdown
                        classNames={{
                            base: 'before:bg-default-200',
                            content:
                                'py-1 px-1 border border-accent-blue/80 bg-primary-blue dark:from-default-50 dark:to-black',
                        }}
                    >
                        <DropdownTrigger>
                            <Button
                                size='sm'
                                radius='sm'
                                className='bg-accent-blue/80 text-neutral-50 w-fit px-2'
                            >
                                Añadir una nueva categoría (+)
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label='Categories selection'
                            onAction={(tag) => handleCategories(tag as string)}
                        >
                            {categorias.map((tag) => (
                                <DropdownItem
                                    classNames={{
                                        base: 'hover:text-primary-blue hover:bg-accent-blue',
                                    }}
                                    key={tag}
                                >
                                    {tag}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <AnimatePresence>
                        <motion.ul
                            transition={{
                                layout: { duration: 0.2, type: 'tween' },
                            }}
                            className='flex flex-wrap gap-2 max-w-[300px] max-h-[400px] overflow-auto'
                        >
                            {categories.map((tag) => (
                                <motion.li
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: {
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                        },
                                    }}
                                    onClick={() => eliminar(tag)}
                                    className='w-fit text-sm text-neutral-50 bg-accent-blue/40 py-1 px-2 rounded-md cursor-pointer'
                                    key={tag}
                                >
                                    {tag}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </AnimatePresence>
                </fieldset>
                <fieldset className='flex flex-col gap-2 py-4 absolute bottom-0 w-full'>
                    <h3 className='text-accent-blue'>Opciones</h3>
                    <Select
                        variant='underlined'
                        label='Ordenar por'
                        size='sm'
                        labelPlacement='outside'
                        onChange={(e) => updateOrderBy(e.target.value as Order)}
                        classNames={{
                            label: [
                                'text-neutral-50 ',
                                'group-data-[filled=true]:text-accent-blue/80',
                            ],
                            listboxWrapper: ['bg-primary-blue'],
                            base: ['data-[filled=true]:bg-accent-blue/80'],
                            selectorIcon: [
                                'text-neutral-50 data-[open=true]:text-accent-blue',
                            ],
                            listbox: ['bg-primary-blue'],
                            popoverContent: ['bg-primary-blue drop-shadow-md'],
                        }}
                    >
                        {[
                            'First Cheap',
                            'First Expensive',
                            'Alphabetically',
                            'Alphabetically inverted',
                            'Most Popular',
                        ].map((option) => (
                            <SelectItem
                                key={option}
                                value={option}
                                classNames={{
                                    base: [
                                        'data-[focus=true]:bg-accent-blue/80 ',
                                        'data-[hover=true]:bg-accent-blue',
                                    ],
                                }}
                            >
                                {option}
                            </SelectItem>
                        ))}
                    </Select>
                    <Checkbox
                        size='sm'
                        radius='full'
                        classNames={{
                            label: 'text-neutral-50',
                        }}
                        isSelected={$filter.isOfferted}
                        onValueChange={updateIsOfferted}
                    >
                        Solo ofertas
                    </Checkbox>
                </fieldset>
            </form>
        </aside>
    );
};
