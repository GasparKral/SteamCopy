import { Thumb } from '@/assets/Thumb';
import { Progress } from '@nextui-org/react';
export const ReviewBar = ({
    totalRewviews,
    badReviews,
    style,
}: {
    totalRewviews: number;
    badReviews: number;
    style?: string;
    width?: string;
}) => {
    const goodReviews = totalRewviews - badReviews;
    const percentage = Math.round((goodReviews / totalRewviews) * 100);

    return (
        <div
            className={`flex items-center gap-[2px] 2xl:w-[280px] w-[135px] ${style} `}
        >
            <Thumb styles='text-accent-blue mt-4' />
            <Progress
                size='sm'
                label={percentage + '%'}
                value={percentage}
                classNames={{
                    indicator: 'bg-accent-blue',
                    track: 'bg-red-500',
                    label: 'text-neutral-50 text-[10px] relative  top-2 text-accent-blue',
                }}
            />
            <Thumb styles='rotate-180 text-red-500 mt-6' />
        </div>
    );
};
