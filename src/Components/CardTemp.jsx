import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,SimpleGrid,
  Heading,Text,Button
 } from '@chakra-ui/react'
 import "./style.css";

const CardTemp = () => {
  return (
    <div>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card>
    <CardHeader className='sam'>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
   
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    {/* <CardFooter>
      <Button>View here</Button>
    </CardFooter> */}
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
    {/* <CardFooter>
      <Button>View here</Button>
    </CardFooter> */}
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
   
  </Card>
  <Card>
    <CardHeader>
      <Heading size='md'> Customer dashboard</Heading>
    </CardHeader>
    <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>
    </CardBody>
   
  </Card>

</SimpleGrid>
    </div>
  )
}

export default CardTemp
