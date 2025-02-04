import { Button, TextField } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { type ReactElement } from 'react';
import useResponsive from '../../../hooks/useResponsive';
import PEFooter from '../../footer/PEFooter';
import PEHeader from '../../header/PEHeader';
import PEHeaderMobile from '../../header/PEHeaderMobile';
import HStack from '../../utility/hStack/HStack';
import Spacer from '../../utility/spacer/Spacer';
import VStack from '../../utility/vStack/VStack';

export default function ProfilePage(): ReactElement {
    const { t } = useTranslation('common');
    const { isMobile } = useResponsive();

    return (
        <VStack className="w-full">
            {isMobile ? <PEHeaderMobile /> : <PEHeader />}

            <VStack className="w-full max-w-screen-xl" style={{ gap: 16 }}>
                <HStack className="w-full bg-white shadow-md" style={{ padding: 16, alignItems: 'center', borderRadius: 16 }}>
                    {t('first-name')}
                    <Spacer />
                    <Link href={'/chef-sign-up'}>
                        <Button>Become a chef</Button>
                    </Link>
                </HStack>

                <VStack className="w-full bg-white shadow-md" style={{ padding: 16, alignItems: 'center', borderRadius: 16 }}>
                    <HStack className="w-full">
                        Personal information
                        <Spacer />
                    </HStack>
                    <HStack className="w-full" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: 16 }}>
                        <VStack style={{ alignItems: 'flex-start', flex: 1, minWidth: 420 }}>
                            <p>First name</p>
                            <TextField style={{ width: '100%' }} variant="outlined" disabled />
                        </VStack>
                        <VStack style={{ alignItems: 'flex-start', flex: 1, minWidth: 420 }}>
                            <p>Last name</p>
                            <TextField style={{ width: '100%' }} variant="outlined" disabled />
                        </VStack>
                        <VStack style={{ alignItems: 'flex-start', flex: 1, minWidth: 420 }}>
                            <p>Date of birth</p>
                            <TextField style={{ width: '100%' }} variant="outlined" disabled />
                        </VStack>
                        <VStack style={{ alignItems: 'flex-start', flex: 1, minWidth: 420 }}>
                            <p>Email Address</p>
                            <TextField style={{ width: '100%' }} variant="outlined" disabled />
                        </VStack>
                        <VStack style={{ alignItems: 'flex-start', flex: 1, minWidth: 420 }}>
                            <p>Phone number</p>
                            <TextField style={{ width: '100%' }} variant="outlined" disabled />
                        </VStack>
                    </HStack>
                </VStack>

                <VStack className="w-full bg-white shadow-md" style={{ padding: 16, alignItems: 'center', borderRadius: 16 }}>
                    <HStack className="w-full">
                        Addresses
                        <Spacer />
                    </HStack>
                </VStack>
            </VStack>

            <PEFooter />
        </VStack>
    );
}
