import { Box, Container, Divider, Grid, HStack, Text } from '@chakra-ui/react';
import React from 'react';

import { FooterLink } from './FooterLink';
import { FooterSection } from './FooterSection';
import Logo from '../../assets/logo.svg';

export const Footer = () => (
    <Box backgroundColor="gray.50" as="footer">
        <Divider />
        <Container paddingY="6" maxWidth="container.lg">
            <Grid templateColumns={['1fr', null, 'repeat(4, 1fr)']}>
                <FooterSection heading="Resources">
                    {/* TODO */}
                    <FooterLink href="" label="Docs" />
                    {/* TODO */}
                    <FooterLink href="" label="Configurator" />
                    {/* TODO */}
                    <FooterLink href="" label="Contribute" />
                </FooterSection>
                <FooterSection heading="Repository">
                    <FooterLink
                        href="https://www.github.com/the-homeless-god/jest-coverage-lerna-monorepo-action"
                        label="GitHub"
                    />
                    <FooterLink
                        href="https://www.github.com/the-homeless-god/jest-coverage-lerna-monorepo-action/issues"
                        label="Issues"
                    />
                    <FooterLink
                        href="https://www.github.com/the-homeless-god/jest-coverage-lerna-monorepo-action/releases"
                        label="Releases"
                    />
                    <FooterLink
                        href="https://github.com/the-homeless-god/jest-coverage-lerna-monorepo-action/stargazers"
                        label="Stars"
                    />
                </FooterSection>
                <FooterSection heading="Contacts">
                    <FooterLink
                        href="https://www.github.com/the-homeless-god/"
                        label="Founder"
                    />
                    <FooterLink
                        href="mailto:zimtir@mail.ru"
                        label="Email"
                    />
                </FooterSection>
            </Grid>
            <Divider marginY="5" />
            <HStack>
                <Logo color="var(--chakra-colors-gray-400)" height={52} />
                <Text color="gray.600">Copyright © 2020</Text>
            </HStack>
        </Container>
    </Box>
);
