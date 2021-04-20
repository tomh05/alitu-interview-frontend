import { AddIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, Grid } from '@chakra-ui/layout'
import { Button, Text, useDisclosure } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'
import { useHistory } from 'react-router-dom'
import { Episode as EpisodeType } from '../../types'
import NewEpisodeModal from '../components/episodes/newEpisodeModal'
import Page from '../components/page/Page'
import PageTitle from '../components/page/PageTitle'
import useFetch from 'use-http'
import { useEffect, useState } from 'react'

export default function Episodes() {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([])
  const { loading, get, cache, response } = useFetch('http://localhost:3000/api/episodes', {})
  const { isOpen, onOpen, onClose } = useDisclosure()

  async function loadEpisodes() {
    cache.clear()
    const fetchedEpisodes = await get(`/`)
    if (response.ok && Array.isArray(fetchedEpisodes)) {
      setEpisodes(fetchedEpisodes)
    }
  }

  useEffect(() => {
    loadEpisodes()
  }, [])

  const onEpisodeCreated = async () => {
    onClose()
    loadEpisodes()
  }

  return (
    <Page>
      <PageTitle>Episodes</PageTitle>
      <Button
        mb="25px"
        color="white"
        bg="green.300"
        _hover={{ bg: 'green.200' }}
        rightIcon={<AddIcon w={3.5} h={3.5} />}
        onClick={onOpen}
      >
        Add new episode
      </Button>
      <NewEpisodeModal isOpen={isOpen} onCancel={onClose} onCreated={onEpisodeCreated} />
      {loading === true ? <Spinner alignSelf="center" size="xl" /> : null}
      <Grid templateColumns="1fr 1fr" gap={10}>
        {episodes.map((episode) => (
          <EpisodePreview episode={episode} key={episode.id} />
        ))}
      </Grid>
    </Page>
  )
}

interface EpisodeProps {
  episode: EpisodeType
}

function EpisodePreview({ episode }: EpisodeProps) {
  const history = useHistory()

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
      <Button
        bg="purple.300"
        color="white"
        _hover={{ bg: 'purple.200' }}
        rightIcon={<ChevronRightIcon w={6} h={6} />}
        onClick={() => history.push(`/episode/${episode?.id}`)}
      >
        Go to episode
      </Button>
    </Flex>
  )
}
