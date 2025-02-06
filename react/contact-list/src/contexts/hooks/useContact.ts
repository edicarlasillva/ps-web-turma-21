import { useContext } from 'react'
import { ContactContext } from '../ContactContext'

export function useContact() {
  const context = useContext(ContactContext)

  if(!context) {
    throw new Error('useContact deve ser usado dentro de ContactProvider')
  }

  return context
}