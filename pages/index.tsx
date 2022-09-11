import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Text, Card, Container, Grid, Row, Spacer, useTheme, Button } from '@nextui-org/react';
import { Image } from "@nextui-org/react";
import image from "./hero.svg";
import { Hero } from '../components/hero';

const Home: NextPage = () => {
  const { theme } = useTheme();

  return (
    <>
      <Spacer y={2} />
      <Container alignItems='flex-start'>
        <Grid.Container justify="space-evenly">
          <Grid md={8}>
            <Grid.Container>
              <Text css={{
                color: '$green800',
                fontSize: '$4xl',
                fontWeight: '$semibold',
                padding: '$2 $4'
              }}>
                We are here for you in every struggle of your life.
              </Text>
              <Button color={'gradient'}>Enroll</Button>
            </Grid.Container>
          </Grid>
          <Grid md={4}>
            <Hero></Hero>
            {/* <Image
              src="/hero.svg?raw=true"
              alt="Default Image"
              objectFit="fill"
            /> */}
          </Grid>
        </Grid.Container>
      </Container >
    </>
  )
}

export default Home
