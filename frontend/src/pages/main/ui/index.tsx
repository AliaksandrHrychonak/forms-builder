import { generateLocalizedMetadata } from '@shared/lib';

import type { Metadata } from 'next';
import type { FC, JSX } from 'react';

export const generateMetadataMainPage = async ({ params }: { params: { lang: string } }): Promise<Metadata> =>
    generateLocalizedMetadata(params, 'main');

export const MainPage: FC = (): JSX.Element => {
    return <div>main</div>;
};
