import { Box, Heading, Image, Container, Stack,Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={["40","300"]} filter={"hue-rotate(-130deg)"} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi autem eligendi eaque veritatis quae nulla odio sit optio modi laudantium, quidem voluptate necessitatibus tempora totam doloremque eius blanditiis aspernatur? Assumenda nulla maiores ipsa consequatur, ipsum cum delectus animi explicabo et dolorem fuga, illum eligendi. Sed veniam modi doloribus consequuntur odit. Minus odio dolor corporis recusandae eaque necessitatibus consectetur odit quisquam laboriosam quibusdam esse libero labore quam, adipisci doloremque assumenda id rerum dolore vel? Atque, cumque nulla perferendis quidem dolore ipsam labore numquam laudantium autem, et molestias quisquam mollitia suscipit, rem asperiores recusandae vero dignissimos totam voluptatum id hic voluptates voluptatem.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
