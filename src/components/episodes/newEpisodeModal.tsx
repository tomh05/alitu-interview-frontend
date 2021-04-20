import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useState } from 'react'

import useFetch from 'use-http'

interface NewEpisodeModalProps {
  isOpen: boolean
  onCancel: () => void
  onCreated: () => void
}

export default function NewEpisodeModal({ isOpen, onCancel, onCreated }: NewEpisodeModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [isInvalid, setIsInvalid] = useState(false)

  const { post, response } = useFetch(`http://localhost:3000/api/episode/new`, {}, [])

  const onCreate = async () => {
    if (!isInvalid) {
      await post({ name, description })
      if (response.ok) {
        onCreated()
      }
    }
  }

  const onNameChange = (e: any) => {
    setName(e.target.value)
    setIsInvalid(e.target.value === '')
  }

  return (
    <Modal isOpen={isOpen} onClose={onCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Episode</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired isInvalid={isInvalid}>
            <FormLabel>Name</FormLabel>
            <Input placeholder="My Episode" value={name} onChange={onNameChange} />
            <FormErrorMessage>Your episode must have a name!</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="A description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onCreate}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
