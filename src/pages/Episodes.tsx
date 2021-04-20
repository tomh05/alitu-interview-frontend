import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, Grid } from '@chakra-ui/layout'
import { Button, Text } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import { Episode as EpisodeType } from '../../types'
import Page from '../components/page/Page'
import PageTitle from '../components/page/PageTitle'
import useFetch from '../hooks/useFetch'

export default function Episodes() {
  const { response: episodes, isLoading } = useFetch<EpisodeType[]>('http://localhost:3000/api/episodes')

  return (
    <Page>
      <PageTitle>Episodes</PageTitle>
      <Button
        mb="25px"
        color="white"
        bg="green.300"
        _hover={{ bg: 'green.200' }}
        rightIcon={<AddIcon w={3.5} h={3.5} />}
      >
        Add new episode
      </Button>
      {isLoading === true ? <Spinner alignSelf="center" size="xl" /> : null}
      <Grid templateColumns="1fr 1fr" gap={10}>
        {episodes?.map((episode) => (
          <Episode episode={episode} key={episode.id} />
        ))}
      </Grid>
    </Page>
  )
}

interface EpisodeProps {
  episode: EpisodeType
}

function Episode({ episode }: EpisodeProps) {
  return (
    <Flex justifyContent="space-between" alignItems="center" bg="gray.200" p="25px 40px" rounded={4} maxWidth="100%">
      <Flex direction="column">
        <Text as="p" fontSize="2xl" color="gray.600" textAlign="left">
          {episode.name}
        </Text>
        <Text as="p" fontSize="md" color="gray.800" textAlign="left">
          {episode.description}
        </Text>
      </Flex>
      <Button bg="purple.300" color="white" _hover={{ bg: 'purple.200' }} rightIcon={<ChevronRightIcon w={6} h={6} />}>
        Go to episode
      </Button>
    </Flex>
  )
}
