import { Flex, Grid } from '@chakra-ui/layout'
import { Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Link, useParams } from 'react-router-dom'
import { Episode as EpisodeType } from '../../types'
import Page from '../components/page/Page'
import PageTitle from '../components/page/PageTitle'
import useFetch from 'use-http'

interface ParamsType {
  id: string
}

export default function Episode() {
  const { id } = useParams<ParamsType>()
  const { data: episode, loading } = useFetch<EpisodeType>(`http://localhost:3000/api/episode/${id}`, {}, [])

  return (
    <Page>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/episodes">
            Episode
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">{episode?.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <PageTitle>{episode?.name || ''}</PageTitle>
      <Flex justifyContent="space-between" alignItems="center" bg="gray.200" p="25px 40px" rounded={4} maxWidth="100%">
        <Flex direction="column">
          <Text as="p" fontSize="md" color="gray.800" textAlign="left">
            {episode?.description}
          </Text>
        </Flex>
      </Flex>
    </Page>
  )
}
